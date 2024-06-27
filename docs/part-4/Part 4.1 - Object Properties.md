---
description: Basic properties of objects.
---

# Object Properties

Today's Topics:

- Basic properties of objects
- Initialization
- Equivalence
- Copying
- Hash
- Comparison

## Basic properties of objects

In object-oriented languages, there is often a parent class that contains methods common to all objects.

- In Java the parent class is `java.lang.Object` and it has the following methods:
    - **clone()**
    - **equals()**
    - **getClass()**
    - **hashCode()**
    - **notify()** / **notifyAll()** / **wait()**
    - **toString()**

- Canonical Entity (Venners 1998)
    - has implementation of basic functionality.
    - recommended target state unless there is a reason to deviate.
    - ideas: entity should be copyable or immutable object, comparability (equals), serialization.

A few comments:
- `Object` part of the class hierarchy.
- `toString` familiar from previous material. Used to display object in String format.
- Next we will look at these basic properties: `clone`, `equals`, `getClass` & `hashCode`
- `notify()`, `notifyAll()`, `wait()` relate to thread programming and will not be covered on this course.

Methods later identified as problematic:
- `finalize()`

    Legacy way of cleaning up when the object is no longer used. This method will be removed from Java and shouldn't be studied.
    
    → now these cases are handled with Try-with-resources and other solutions.
- `Serializable`

    Way to transform objects to bits. Oracle has said in an article that this was not a good idea.

    → Now serializing is done more efficiently with separate libraries & `record`
- `clone()` 
This is a borderline case. Works and can be used, but there are many articles that higlight problems in this method.

Let's look at the following basic object properties in Java that, according to the use case, you may need to write an implementation:
- Initialization
- Equivalence `equals`
- Cloning `clone`
- Hashing `hashCode`
- Comparing `compareTo`

## Initialization

Task: 
- Need to create objects from classes.

In Java, by default, objects can always be created in some context. (can be limited by e.g. `private`)


### Constructor
Signature:
```java
class Number {
    private int a;
    Number() { a = 2; } // #1
    public Number(int x) { a = x; } // #2
    protected Number(String x) { a = Integer.parseInt(x); } // #3
}
```
There is three constructors listed in the code example. First can be called from the sam package, second can be called everywhere and third also from different packages with inheritance.
- The signature differs from method signatures: no return type/separate name, only class name.

- Call: not directly, but with `new` operator: `new Number()`
- Default visibility is **package** (works inside the package as public, not visible outside the package)
- Can be overloaded (= alternative initializations)
- Contractually: sets the class invariant into effect.


### Default constructor
If the class doesn't have any defined constructors like below...
```java
class Example {
    private int a;
}
```

… The compiler implicitly adds a default constructor to the class:
```java
class Example {
    private int a;
    public Example() {}
}
```

- Initializes variables as the default value of the data type (e.g. integers = 0, reference =`null`).
- Requires parent class constructor to have no parameters (e.g. `Object`).

### Inheritance

The constructor is not inherited! It must be defined in every class.

```java
class Parent {
    Parent() { } // not inherited!
}
class Child extends Parent {
    Child(int a) { }
}
class Example {
    Child a = new Child(); // error!
}
```

Above code does not work because Child class constructor needs a parameter and none are provided when called. Parent class constructor isn't in use because it isn't inherited. Program doesn't even compile with this implementation.

What problems does the following code have?

```java
public class A {
    final protected int a;
    public A(int b) { a = b; }
}
public final class B extends A {
    public int aa() { return a; }
}
void main() { System.out.println( (new B(1)).aa() ); }
```
The example shows another wrong use of a constructor that was not inherited (the previous code would also not even compile). Must add following line (define the constructor) to class B:

```java
public B(int b) { super(b); } // !!
```

### Calling other constructors
The 1st statement of the constructor must be a call to the parent class (`super()`) or another constructor (`this()`):
This rule is changing in java but different implementations pose risks for the class invariant.

```java
// defined in the standard library
public class Object { public Object() { ... } ... }

class Parent extends Object { Parent(int a) { super(); } }

class Child extends Parent { Child() { super(42); } }

class ChildsChild extends Child {
    ChildsChild(int x) { /* super(); */ }
    ChildsChild() { this(42); }
}
```

Even if it is not written, `super()` is implicitly called (this is also the case in the default constructor)

## Equivalence

Problems where equivalence is used:
1) Are the objects at references **a** and **b** "same"?
2) Does the collection include item **x**?
    - What does "same" mean?
    - What is the relationship between inclusion and sameness?

Java assumes the following:
- Universal equivalence: all objects are always comparable.
- The programmer determines which features make objects the same.
- Collections are based on basic features (here: equivalence).

### equals()

Method signature:
```java
public boolean equals(Object obj)
```
- Recommendation: always use `@Override`
- Note! Type always `Object obj` for variable that is compared to.
- Default implementation: compares are the references identical. Which means are the objects exactly the same (are they stored in the same place in memory, can be also marked `==`).

Below is a table of different kinds of sameness.

![](/img/part-13/equivalence.PNG)

Let's look at sameness in a picture format. In the next pictures boxes represent references (variables) and the outlines represent objects.

This represents a situation inside a Java virtual machine.

![](/img/part-13/eq1.PNG)

Here colored variabes are identical. They both are references to exact same object.

![](/img/part-13/eq2.PNG)

Here colored variabes have a shallow equivalence. They are references to objects that have identical member variables. Member variables that are reference types are references to identical variables and boolean type members have the same values.

![](/img/part-13/eq3.PNG)

Here colored variabes have a deep equivalence. They all have references to similar data. This means that when inspected deep enough all data is the same or seems to be the same.

![](/img/part-13/eq4.PNG)

Use is dependent on the needs of the user. The less we need to compare objects is always faster. But if we want to compare variables inside the objects it may be more beneficial to use deeper equivalence.  

### Equivalence as a relation

The correct equals relation must have:
1) Reflexivity:

        `x.equals(x)`

2) Symmetry:

        `x.equals(y) <=\=> y.equals(x)`
3) Transitivity:

        `x.equals(y) & y.equals(z) ⇒ x.equals(z)`
4) Consistency: 

        If the data relating to (surface) sameness is not changed, the comparison must return consistently true or false.
5) Null nonequality:

       `x.equals(null) == false`
6) The routine must work regardless of the type of objects; `equals` has `Object` in signature.

### Example: equals-implementation

In this example, the conditions of sameness are numbered in comments as above. This example is an example of a deep equivalence comparison.

```java
class Container {
    int val1;
    Object val2;
    int[] vals;

    @Override public boolean equals(Object other) { // 6) for all
        if (other == null) return false; // 5) nullnonequality
        if (other == this) return true; // 1) reflexivity
        if (other instanceof Container t) // 6)
            return t.val1 == val1 && t.val2.equals(val2) && Arrays.equals(vals, t.vals); // 2,3,4)
        return false; // 6)
    }
}
```

### Equals and collections

The functionality of Java collection classes (see java.util.Collection) is based on the correct definition of `equals`.
- E.g. `elements` = items in a collection → contains, can be defined:

```java
boolean contains(Object a) {
    for(var b: elements)
        if (a.equals(b)) return true;
    return false;
}
```

- Consequence: Let **a** & **b** be the same, add **a** to collection **k** → **k** contains **b**. A and b don't have to be the same object, only same when compared with equals.
- Different collections have different optimizations based on the above. relational rules.

## Copying

Problems:
1) How to create a copy of an object?
2) How to create a copy of a collection?

There are a couple of options in Java:
- Copy constructor
- Immutable data structures
- Cloning (`Object.clone()`)

Analogy: degree of copying ~ degree of sameness.

### Cloning: clone() and Clonable

Interface signature:
```java
interface Cloneable { }
```
- Does not contain anything (dealt with specifically by JVM).
- Interface implemented by classes using cloning.

Method signature:
```java
protected Object clone() throws CloneNotSupportedException
```
- Methods default value:
```java
if (this instanceof Cloneable)
    /* JVM magic */
else throw CloneNotSupportedException()
```

### Cloning usage

- Implement `Cloneable` interface (`implements Cloneable`)
- `clone()` by default with **protected** visibility
    - Change to **public** if necessary.
- Call `super.clone()` inherited from `Object`
    - Provides a surface-identical copy of an object.
    - Recursively clones members that require deep copy.
- Return type of `clone()` is `Object` by default.
    - You can change the return value type to the exact class type (covariance).
- Note! Subclasses are also clonable by default.
    - Can be blocked at runtime by raising `CloneNotSupportedException`

### Example: Cloning

```java
class Bot { String name; }
class ChatBot extends Bot { String[] languages; }
class C3PO extends ChatBot implements Cloneable {
    public C3PO clone() throws CloneNotSupportedException {
        return (C3PO)super.clone();
    }
}
```

```java
class Jedi implements Cloneable {
    C3PO friend;
    public Jedi clone() throws CloneNotSupportedException {
        Jedi j = (Jedi)super.clone();
        j.friend = friend.clone();
        return j;
    }
} 
```

### Problems / limitations of cloning

- Critics include Joshua Bloch and Doug Lea.
- Is the class invariant valid in the copy after cloning?
- `final`-marked members locked for `clone()` implementation.
- The `Cloneable` interface does not guarantee that you can call `clone()`.
- Cannot change the type of the copy from the original.
- Once publicly revealed (`public`), cloning can no longer be prevented in subclasses during runtime.
- Implementation may require forced type conversions.

### Copy constructor

- A constructor that creates a new object, copying the structure of the object given as a parameter.
- Class invariant easy to verify; It's like creating a completely new object.
- Can not be called polymorphicly, the exact type of copy may have to be known.
- Alternative is to define the polymorphic method `.copy()`.

```java
class Point {
    int x, y;

    Point(Point other) {
        x = other.x; y = other.y;
    }
    Point copy() { return new Point(x, y); }
} 
```

### Immutable data structures

- If the class is immutable (recursively `final` or a `record` class), does it make sense to copy at all?
- Partial copying: otherwise the same parent object, but some fields are changed.
- Planned: with-syntax (JEP 468: Derived Record Creation) that would look something like this:

```java
record Point(int x, int y, int z) { }
void main() {
    var p1 = new Point(1, 2, 3);

    var p2 = p1 with { x = 0; };
}
```

### Copying collections

- Copy constructor often offered in collection classes, e.g. `new ArrayList<>(oldCollection)`.
- Tables e.g. `Arrays.copy(array, array.length)`

```java
void main() {
    var list = List.of(1, 2, 3);

    var copy = new ArrayList<>(list);
}
```

## Hash

Problem: 
- How to specify the place of an object in the hash table?

In Java, designed as follows:
- In the standard library, hash table based collection type.
- The hash function required by the hash table is
a basic property for every object (`Object.hashCode`).


![](/img/part-13/hash.PNG)

### hashCode

Method signature:
```java
public int hashCode()
```

- The default implementation is based on the memory address of the object creation phase: `System.identityHashCode(this)`
- As with the definition of sameness, the following must apply: `a.equals(b) ⇒ a.hashCode() == b.hashCode()`

- You want to fill the hash table as evenly as possible.
    - Equal distribution of hashes (within `int`)

    → Also (hash **%** data structure size) even

- How to calculate?
    - Auxiliary method: `Objects.hash(member1, member2, ...)` derives from the value of members.
    - Sometimes it is necessary to calculate yourself (e.g. calculation too heavy). This is out of scope of this course.
    - In `enum` and `record` hash is pre-calculated.

- The hash is not the object's memory address or a unique value identifying the object
    - Java is a high-level language → memory address abstracted.
    - Garbage collection can even move/merge objects in memory.
    - Possible `hashCode()` values 2<sup>32</sup> pcs, and addresses 2<sup>64</sup>.
    - Two objects can have the same `hashCode()`,if need to identify,  create an **id** field for identification.

### Example: Hash

```java
class Player {
    public final Location location;
    public final Job job;
    @Override public int hashCode() {
        // recursively calls members hashCode()
        return Objects.hash(location, job);
    }
    public Player(Location l, Job j) {
        this.location = l;
        this.job = j;
    }
}
```

In the case of the record, `Objects.hash()` is implicitly called for all fields:

```java
record Player(
    Location location,
    Job job
) {
    /*
    @Override public int hashCode() {
    return Objects.hash(location, job);
    }
    */
}
```

### Hash and collections

- Usage: necessary in data structures where the hash value is calculated, name starts with `Hash`, e.g. `HashMap`, `HashSet`.
- What would happen if a.equals(b) ⇒ a.hashCode() != b.hashCode() ?
- Same member would not be found because we would look in different places in the hash table.
- At worst, values added to the collection would not be found!

## Comparison

Problem:
- Is object **a** greater than **b**?
- Does object **a** precede object **b** in collection?
- What is the greatest/smallest/next/previous item in the collection?
- How to organize a collection?

In Java, order comparison is
    - optional additional property of the object (= natural order, `Comparable.compareTo`) or a separate order (`Comparator.compare`).
    - Integrated into ordered collection types.

### `Comparable<T> interface`

Interface signature:

```java
interface Comparable<T> {
    int compareTo(T other);
}
```

- `Comparable` interface method `compareTo` defines the *natural order* of the object.
- One of the objects to be compared (the class implementing the interface) is the object itself.
- Another is of abstract type **"T"**. In practice, **T** is always the class of an object or a definition to which the object includes.
- Enum: natural order by default member listing order

### `Comparator<T> interface`

Interface signature:

```java
interface Comparator<T> {
    int compare(T one, T other)
}
```

- The object of the class implementing the `Comparator` interface acts as an external comparator.
- Compares two **T**-shaped objects.
- Many different orders can be implemented in addition to/instead of the natural order.
- In addition to the objects being compared, the order can be affected by the state of the comparator! (e.g. a `boolean` variable can be used to select ascending/descending order)
- `Comparator.naturalOrder()`: creates a `Comparator` from `Comparable`.

### `Comparable<T> and Comparator<T>`

The following apply to both:

- Compare two objects of the same type and return information about the order of magnitude: `a.compareTo(b)` or `compare(a, b)`
    - a negative integer if **a** is less than **b**
    - zero, if equal
    - a positive integer if **a** is greater than **b**
    - `ClassCastException` if **a** and **b** are of incompatible types

- Note! `a.compareTo(b)==0 <==> a.equals(b)`
    - methods can be used for the same purpose
    - Java does not require this, but the requirement is justified and reasonable

### Comparison and collections

- The Java standard library has a set of ordered collections, eg. name starts with `Tree`.
- In addition to comparison, the collections rely on the correct definition of sameness.
- Three ways to choose an order
    - natural order of items (preserved)
    - order assigned to the collection (preserved)
    - organizing the collection in an external order (redo if necessary)

### Example: `Comparator<T>`

For an example, let's define a set of elements:

```java
enum Element {
    Hydrogen(1, "H"), Helium(2, "He"),
    Lithium(3, "Li"), Carbon(6, "C");

    Element(Integer i, String b) { id = i; symbol = b; }
    Integer id;
    String symbol;

    Integer id() { return id; }
    String symbol() { return symbol; }
}
```

There are many ways to express `Comparator` in Java:

```java
var id = new Comparator<Element>() {
    @Override public int compare(Element a, Element b) {
        return a.id - b.id;
    }
}; // anonymous class

// function literal &
Comparator<Element> id2 = (a, b) -> a.id - b.id;

// function literal + delegate to Integer.compareTo
Comparator<Element> id3 = (a, b) -> a.id.compareTo(b.id);

// uses id()-method
var id4 = Comparator.comparing(Element::id);
```

The following demonstrates the use of Comparator-class auxiliary methods:

```java
var id = Comparator.comparing(Element::id);
var symbol = Comparator.comparing(Element::symbol);

// values() creates a new table
var elements = Element.values();
Arrays.sort(elements, id);
Arrays.sort(elements, id.reversed);

// primary and secondary order (cf. databases / excel)
Arrays.sort(elements, id.thenComparing(symbol));

// Element = enum -> member listing order
Arrays.sort(elements, Comparator.naturalOrder());
```

The following demonstrates the use of Comparator-class auxiliary methods:

```java
var id = Comparator.comparing(Element::id);
var symbol = Comparator.comparing(Element::symbol);

// a collection that has order of addition
var list = new ArrayList<Element>(
    Arrays.asList(Element.values())
);

// arranging in a separately defined order
list.sort(id);

// collection that has a defined order
var tree = new TreeSet<>(symbol);
tree.addAll(Arrays.asList(Element.values()));
```

### Example: `Comparable<T>`

For the example, let's define a category representing a person:

```java
record Person(
    String name,
    int yearOfBirth,
    String address
) {}
```

Let's compare by name, year of birth and finally, address:

```java
record Person(...) implements Comparable<Person> {
    @Override public int compareTo(Person other) {
        int result = this.name.compareTo(other.name);
        if (result != 0) return result;
        // yearOfBirth = int, compareTo doesn't work
        if (this.yearOfBirth != other.yearOfBirth)
            return (this.yearOfBirth < other.yearOfBirth) ? -1 : 1;
        else
            return this.address.compareTo(other.address);
    }
}
```

You can try to optimize your code with gimmicks, but usually readability suffers...

```java
record Person(...) implements Comparable<Person> {
    @Override public int compareTo(Person other) {
        int nameDiff = name.compareTo(other.name),
            yearDiff = yearOfBirth - other.yearOfBirth;
        return
            nameDiff != 0 ? nameDiff : yearDiff != 0 ? yearDiff :
            address.compareTo(other.address);
    }
}
```

Using the Comparator class (record includes get methods)

```java
record Person(...) implements Comparable<Person> {
    @Override public int compareTo(Person name) {
        return Comparator.comparing(Person::name)
            .thenComparing(Comparator.comparing(Person::yearOfBirth))
            .thenComparing(Comparator.comparing(Person::address))
            .compare(this, name);
    }
}
```