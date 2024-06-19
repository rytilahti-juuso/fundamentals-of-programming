# Class constructs

Today's Topics:

- Java class constructs
    - Basic class types
    - Static Inner Class (Java 1.1+)
    - Nested class (Java 1.1+)
    - Anonymous class (Java 1.1+)
    - Function literals and interfaces (Java 8+)
    - Literal class (Java 5+)
    - Record class (Java 16+)
    - Closed class (Java 17+)

## Basic class types in Java class mechanism

The basic class constructs in Java (from version 1.0) are:
• (concrete) class
• abstract class
• interface (class)
We’ll dwelve more deeply in the class types in the context of inheritance


## Specifics of the class mechanism in Java

Next, consider the types of special classes in Java:
1) **Static inner class:** syntactically related to its outer class
2) **Instance-specific inner class: (nested)** cannot exist without the instance of its outer class
3) **Anonymous class:** created on the fly for disposable use
4) **Function literals and interfaces:** interface: describes the function D → R, literal: implements the function
5) **Literal class:** the set of objects to be implemented is limited, defined in connection with the class
6) **Record:** non-polymorphic immutable data, value semantics
7) **Sealed class:** set of inheriting classes limited, no objects
8) **Hidden Class** (JEP 371, not covered)

Next we will look at each of these classes in more detail.

## Static Inner Class (Java 1.1+)

Use purpose
- Brings together related classes "under one roof".
- **Is a means of encapsulation!**
- E.g. in the standard library `Entry` under `Map` classes (describes one key-value pair) .

Syntax
- `static class`, inside the outer class (not inside a method).

![](/img/part-10/staticinner.png)

```java
class Outer {
    static int x = 42;
    static class Inner {
        void setX() {
            x = 100;
        }
    }
    Inner object1 = new Inner();
}
class Second {
    Inner object2 =
        new Outer.Inner();
}
```

Features

- Inner and outer classes are syntactically related.
- The inner class has no connection to the (outer classes) outer objects.
- The inner class and its inner objects can see inside the outer class (static features only).
- The outer class can see inside the inner class.
- The inner class is visible outwards according to visibility attributes.
- Inner classes defined in the superclass are also displayed in the subclasses (the same "inherited" inner class).
- Class `import` also applies to inner classes.
- Inner classes can also be assigned to inner classes without a limit.
- For the outer class and its objects, the inner class is unambiguous (e.g. In Scala language, its type depends on the outer object).


## Nested class (Java 1.1+)

Use purpose

- Objects in the inner and outer classes have an occurrence-specific relationship.
- Exterior state and operations available to inner objects.
- E.g. Event handling in user interfaces, network connection.

Syntax
- **class**, definition within another class/method

![](/img/part-10/nested.png)

```java
class Outer {
    int common = 42;

    class Inner {
        int x = Outer.this.common;
        Inner(int x) {
            this.x = x;
        }
        void setCommon() {
            common = x;
        }
    }
}
```
Usage:
```java
new Outer().new Inner();
```


Features
- Creating an inner object requires an outer object to exist.
- The inner object has an implicit connection to the object of the outer class
(`Outer.this.x` or only `x` if unambiguous).
- There is no corresponding connection between the outer object and the inner object - if necessary, add the connection explicitly.
- Other visibility rules like for static indoor class.
- An instance-specific inner class can also be defined within the method (so-called local class).
- If access to the outer object is not required, static indoor class is more efficient (IDE can recommend).
- In a way, contrary to the principles of encapsulation!

## Example: Web server

A server that opens connections in an external object. Connection management in inner objects.

```java
class Server implements Runnable {
    ServerSocket sSocket;
    boolean active = true;

    Server(int port) { /* ... */ }
    class Handler implements Runnable {
        Socket socket;
        Handler() { try { socket = sSocket.accept(); } /* ... */ }
        @Override public void run() { while(active) { /* ... */ } }
    }
    @Override public void run() {
        while(active) new Thread(new Handler()).start();
    }
}
```

## Anonymous class (Java 1.1+)

Use purpose
- Use combines object creation and class definition.
- When creating, you want to define new or
redefine previous functionalities.
- There is no desire to define a new specific class.

Syntax
- **`new Class(arguments) { definitions }`**


```java
class A { void a() {} }
void main() {
    // define the class &
    // create an instance at the same time
    A object = new A() {
        @Override void a() {
            System.out.println("Hello");
        }
    };
}
```

Features
- As a rule can be created anywhere inside the class - compares with the expression `new A()`.
- Anonymous class inherits the class mentioned in the definition and the created object is not its direct instance.
- Anonymous class is also **a instance-specific inner class**.
- Note! There is no access to completely new member definitions through named class/interface types.
- Can be expanded to instance-specific inner class if needed.

## Example 1: Anonymous class 

First we give an example of a program with separate class definition and inheritance and then an example of the same program using an anonymous class.

**Separate class**

Auxiliary definition:

```java
class A { void hello() {} }
```

Definition:

```java
class Hello extends A {
    @Override void hello() {
        System.out.println("Hello");
    }
}
```

Usage:

```java
new Hello().hello();
```

**Anonymous class**

Auxiliary definition:

```java
class A { void hello() {} }
```

Definition:

```java
// no separate definition
```

Usage:

```java
new A() {
    @Override void hello() {
        System.out.println("Hello");
    }
}.hello();
```

## Example 2: Anonymous class

User interface handler as a class of its own.

```java
void main() {
    var window = new JFrame("Window");

    class Adapter extends WindowAdapter {
        @Override public void windowClosing(WindowEvent e) {
            System.exit(0);
        }
    }

    window.addWindowListener(new Adapter());
}
```

User interface handler as an anonymous class.

```java
void main() {
    var window = new JFrame("Window");

    window.addWindowListener(
        new WindowAdapter() {
            @Override public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        }
    );
}
```

In this example there is a benefit to not having to define a completely new class. That would introduce a lot of extra work that is not needed with an anonymous class.

## Function literals and interfaces (Java 8+)

Use purpose
- Interface definition: want to configure an interface with exactly one method.
- Function literal: You want to give the interface a
functional implementation.
- Example: interface describes the function D → R
- Literal produces a reference to an object of an anonymous class that implements interface **F**:

Inteface definition:
```java
interface Function {
    int count(int input);
}
```
Usage:
```java
Function function = x -> x + 1;
```

Usage previously before lambdas:
```java
Function function = new Function() {
    @Override int count(int x) { return x + 1; }
}
```

Features
- The function literal (lambda) is also an object of an anonymous instance-specific inner class.
- Java can apply literal to cases where either
the class has one undefined member or the class is
an interface defining a single method.

More generic example of the syntax:

Inteface definition:
```java
interface F<D, R> {
    R count(D input);
}
```
Usage:
```java
F<Integer, Integer> function = x -> x + 1;
```

```java
F<Integer, Integer> function = new F<>() {
    @Override public Integer count(Integer x) { return x + 1; }
}
```

## Literal class (enum) (Java 5+)

Use purpose
- Models data that has always an exact value from the values listed in the configuration (or null).
- Values (objects) are global constants, created during definition.
- A good choice if the list of values does not change in the future. - If there may be changes (changes would be propagated
to many places), one could think of an interface +
subclasses.

Syntax
- `enum Class { values listed; definitions }`

```java
enum Suit {
    Heart,
    Spade,
    Club,
    Diamond
}
```

Features
- More values cannot be listed without changing the code.
- Values can be parameterized in constructor arguments.
- Objects of the are immutable.
- Objects of the class are automatically assigned basic features, e.g. `equals` and `toString`.
- `==` and `equals` both work, `==` also works when the reference is `null`.
- All values as a list: `Suit.values()`
- `switch` statement can see if a value is left unused.
- Always inherits `java.lang.Enum`, cannot be replaced.

Switch-statement:
```java
char symbol(Suit suit) {
    return switch (suit) {
        case Heart -> '♥';
        case Spade -> '♠';
        case Club -> '♣';
        case Diamond -> '♦';
    };
}
```

## Example: Literal class
Enum syntax:
```java
enum Dicevalue { One, Two, Three, Four, Five, Six }
```

Imitation with a regular class (does not include all auxiliary routines):
```java
class Dicevalue {
    private Dicevalue() {}
    public static final Dicevalue One = new Dicevalue();
    public static final Dicevalue Two = new Dicevalue();
    public static final Dicevalue Three = new Dicevalue();
    public static final Dicevalue Four = new Dicevalue();
    public static final Dicevalue Five = new Dicevalue();
    public static final Dicevalue Six = new Dicevalue();
    public static final Dicevalue[] values() {
        return new Dicevalue[] { One, Two, Three, Four, Five, Six };
    }
}
```

## Example: Bank account

```java
class Bankaccount {
    enum EventType { DEPOSIT, WITHDRAWAL };
    class Event {
        final EventType eventType;
        final long balanceChange;
        Event(EventType type, long change) {
            eventType = type;
            balanceChange = change;
        }
        @Override public String toString() {
            return number +":"+ eventType + "(" + balanceChange + ")";
        }
    }

    private long number, balance = 0;
    private final LinkedList<Event> events = new LinkedList<>();
    Bankaccount(long number) { this.number = number; }
    void deposit(long amount) {
        balance += amount;
        events.add(new Event(EventType.DEPOSIT, amount));
    }
    void withdrawal(long amount) {
        balance -= amount;
        events.add(new Event(EventType.WITHDRAWAL, amount));
    }
}
```

## Example: Playing card

```java
class Card {
    enum Value {
        ACE("A", 1), TWO(2), THREE(3), FOUR(4), FIVE(5), SIX(6), SEVEN(7), EIGHT(8), NINE(9), TEN(10), JACK("J", 11), QUEEN("Q", 12), KING("K", 13);

        final String symbol;
        final int numbervalue;
        Value(String symbol, int value) {
            this.symbol = symbol; numbervalue = value;
        }
        Value(int value) {
            this("" + value, value);
        }
    }

    enum Suit {
        CLUB("♣"), DIAMOND("♦"), HEART("♥"), SPADE("♠");
        final String symbol;
        Suit(String symbol) { this.symbol = symbol; }
    }
    private Value value;
    private Suit suit;
    Card(Value value, Suit suit) {
        this.value = value; this.suit = suit;
    }
    Value value() { return value; }
    Suit suit() { return suit; }
    @Override public String toString() {
        return suit.symbol + value.symbol;
    }
}
```

## Record class (Java 16+)

Use purpose
- Model non-polymorphic immutable data.
- Value semantics: two objects are in a comparative sense "same" if their counterparts are the same.
- E.g. Serializable messages in a web service between frontend and backend sections.

Syntax
- **`record Class(parameters) { configuration }`**
- The list of parameters of the constructor are directly after the class name.

```java
record Element(
    String name,
    double atomicmass
) {
// Possible additional methods
}
```

Usage:
```java
var element = new Element("Oxygen", 15.9994)
```

Features
- Java pre-creates basic feature methods `toString`, `hashCode` and `equals`.
- Java also creates get methods for members (For member `a` named `a()`, not JavaBeans-style `getA()`).
- Difference to `enum` class: unlimited values can be created,
even after definition; values are of the same type.
- Previously: imitated with a final class with final members
and `hashCode` & `equals` that compare members in pairs.
- Always inherits `java.lang.Record`, cannot be replaced.

## Example: Bank account

By using record classes, the `Event` inner class of the `Bankaccount` class is further shortened if the use of unchanged values is accepted:

```java
class Bankaccount {
    enum EventType { DEPOSIT, WITHDRAWAL };
    record Event(EventType eventType, long balanceChange) {
        // let's still change the toString implementation
        // The default implementation doesn't look like what we want
        @Override public String toString() {
            return number +":"+ eventType + "(" + balanceChange + ")";
        }
    }
    // ...
}
```

## Example: Playing card

Record classes also shorten the `Card` class if unchanged values are accepted:

```java
record Card(Value value, Suit suit) {
    enum Value { /*same as before*/ }
    enum Suit { /*same as before*/ }
    // The default implementation of Java still doesn't look like what we want
    @Override public String toString() {
        return maa().symboli + arvo().symboli;
    }
}
```

## Sealed class (Java 17+)

Use purpose
- A finer class definition capable of limiting inheriting classes.
- Inheriting classes either closed (recursively), **non-sealed**, or **final**.
- Enables e.g. algebraic data structures, e.g. tree structure with three classes: Tree, InnerNode, LeafNode

Syntax
- `sealed class X permits Y, Z { Definitions }`


Hierarchy definition:
```java
abstract sealed class Shape permits Circle, Square, Triangle {}

final class Circle extends Shape {}
final class Square extends Shape {}
final class Triangle extends Shape {}
```

Character adaptation:
```java
int angles(Shape shape) {
    return switch (shape) {
        case Circle c -> 0;
        case Triangle t -> 3;
        case Square r -> 4;
    };
}
```

Features
- Dedefinition character adaptation (switch)
- `Switch` statement can see if any branch of the sealed class remains unhandled.
- A subclass can also be `record` or `enum` if the superclass is `interface`.
- Difference to enum class: values can be created without
limit, even after definition; values of different branches
have different subtype but the same base type.
- Formerly: imitated (to a limited extent) with a static inner class with a `private` constructor.


Now do the exercises of the Part 3 in ViLLE and continue to Part 4.