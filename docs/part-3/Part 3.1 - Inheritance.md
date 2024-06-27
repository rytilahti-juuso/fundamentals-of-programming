---
description: Philosophy and charasteristics of inheritance. 
---

# Inheritance

Today's Topics:
- Inheritance
- Philosophy of Inheritance
- Utilization of Inheritance
- Inheritance and Contract-based Programming
- Characteristics of Inheritance
- Inheritance vs Composition

## Philosophy of Inheritance
Inheritance is one of the "cornerstones" of object-oriented programming, enabling selective reuse of code and describing relationships between classes.

Two sides of inheritance:

- **Internal**: the inheriting class incorporates as part of itself and thus gains access to the internal functionality of the inherited class.
- **External**: the inheriting class also inherits all public interfaces of the inherited class, which obliges the inheritor.

Common challenges of inheritance:
- When to use inheritance?
- What can be achieved?
- How to support software project goals?
- What kind of conceptual structure follows from the inheritance relation?

Using inheritance might seem simple, but in reality utilizing inheritance smartly can be challenging. And, as is often in programming, there often does not exist one true solution. However, there are some typical ways how inheritance can be utilized. They are the following:

1. **Specialization**
2. **Detailing**
3. **Merging**
4. **Implementation Inheritance**
5. **Ad hoc Inheritance**

The last two mentioned ways are somewhat against the "philosophy" of inheritance and hence less recommended.

Next, let's look at typical ways of utilizing inheritance through examples.

### 1. Specialization
- Represents a concept hierarchy as a class hierarchy. 
- A top-level concept can be divided into more than one subclass. A "traditional" example could be `Animal` class which extends to multiple types of animals, e.g. cats, dogs or squirrels. Below is a more generic example of a list.

```java

class List { // common form of lists
    Object getValue() { ... } // recursive structure
    List successor() { ... } // successor = list object / null
}

class WritableList extends List { // also supports setting values
    void setValue(Object obj) { ... }
}

class BidirectionalList extends List { // also supports returning to predecessor
    List predecessor() { ... }
}
```
Other example utilizing specialization:

```java

enum Action {
    Ask, Print
}
```
```java
void do(Action a) {
    switch(a) {
        case Ask ->
            new Scanner(System.in).next();
        case Print ->
            System.out.println("Hello");
    }
}
```
```java
do(action);
```

The same example using an interface:
```java
interface Action {
    void do();
}

class Ask implements Action {
    @Override void do() {
        new Scanner(System.in).next();
    }
}

class Print implements Action {
    @Override void do() {
        System.out.println("Hello");
    }
}
```
```java
action.do();
```
### 2. Detailing
The subclass concept is the same as the superclass concept. Unimplemented features are specified at the subclass level. (*template method* design pattern) Use of the `abstract` keyword before method and class definitions.

Unimplemented methods must always be **abstract**. If the aforementioned methods are defined, the class must also be **abstract**. The class can also be abstract if direct instantiation is to be prevented (`new Class(..)`). An example using detailing (abstract) can be seen below:

```java

abstract class Renderer {
    abstract void drawLine(Point p, Point p2); // Note! No implementation!
    void drawTriangle(Point[] p) {
        drawLine(p[0],p[1]); drawLine(p[1],p[2]); drawLine(p[2],p[0]);
    }
}

class JavaFX_Renderer extends Renderer {
    @Override void drawLine(Point p, Point p2) { ... }
}
```

### 3. Merging

Merging means combining multiple roles. The refined concept may appear in multiple roles compared to the superclass. Java limits inheritance to one direct superclass, but a class can implement multiple different interfaces. An example below:

```java

abstract class Human { // not all humans are
    void eat() { ... } // musicians or teachers
    void breath() { ... }
}

interface Musician { // default implementation (overridable)
    default void play(Song song) { System.out.println("Paranoid"); }
}

interface Teacher {
    void lecture(Subject s, Topic t); // responsibility of implementing class
}

class RockTeacher extends Human implements Musician, Teacher { ...}
```

### 4. Implementation Inheritance

The superclass may not have a direct relationship with the subclass. The aim is to avoid rewriting the same operations, and using them as tools.

Note! Not a recommended approach at all, can lead to problems in the long run! E.g. due to uncoupled nature of superclass and subclass the methods implemented in the subclass may need to have "empty" implementation or raise exceptions etc. 

An example below:

```java

class BookShelf extends ArrayList<Book> {
    List<Book> getAllFiction() {
        var fiction = new ArrayList<Book>();
        for(var book: this)
            if (book.isFiction()) fiction.add(book);
        return fiction;
    }
}
``` 

### 5. Ad hoc Inheritance

Does not create a broader hierarchy, solves encountered problems with inheritance if it requires the least effort.

Any problem you solve by using ad hoc inheritance should definitely be solved using other methods! 

An example below:

```java

class Translator extends java.util.Stack<Object> {
    void randomFact() {
        try {
            pop();
        }
        catch(EmptyStackException e) { // "Empty" + "StackException"
            System.out.println("Empty is in English " +
            e.getClass().getSimpleName().substring(0, 5));
        }
    }
}
```

## Inheritance and Contract-based Programming
![](/img/part-3/inheritance-reuse.png)
## Characteristics of Inheritance: Reusability
- Objects share common characteristics

1. defined for one object
2. other objects can inherit these characteristics

-  Class-based object-oriented programming (e.g., Java)
   - subclass X, superclass Y (Java: **class X extends Y**), common characteristics in superclass

```java

class Student { // 1)
    void attendCourse(Course c) { ... } // common
}

class GraduateStudent extends Student { // 2)
    void teachCourse(Course c) { ... }
}
```

```java
new Student().attendCourse(courseObject);
new GraduateStudent().attendCourse(courseObject);
new GraduateStudent().teachCourse(courseObject);
```

## Characteristics of Inheritance: Override
- The implementation of a method in the superclass can be overridden (Java: **@Override** recommended, but not mandatory)
- The method to be overridden is virtual (Java: everything except private, final, and static)

```java

abstract class Company {
    Company(String name) { this.name = name; }
    private String name;
    abstract String slogan(); // purely virtual
    String giveCompanyLogo() { return name; } // virtual
    final String giveName() { return name; } // non-virtual
}

abstract class StylishCompany extends Company {
    @Override String giveCompanyLogo() { // overriding implementation
        return " --={. " + giveName() + ".}=--";
    }
}
```

## Characteristics of Inheritance: Relations are Static
In Java, implementation and inheritance relationships are static. This means e.g. that the inheritance cannot be changed during run-time. Use of inheritance is unsuitable if the property does not exist all the time. Additionally, once inherited, the property cannot be hidden. It is difficult to know whether to inherit or not in advance. 

A possible workaround to allow more dynamic approach is the following: First provide functionality **statically**, and then **dynamically** choose what to do. 

Example below:

```java

interface FlightCapable {
    void fly();
}

class OlliSquirrel implements FlightCapable {
    private boolean flightCapable; // this value can be changed dynamically
    @Override void fly() { if (flightCapable) /* ... */ }
}
```


## Examining Class Hierarchy
**Bottom-up**:
- An employee is a person with specific characteristics that not all individuals possess.
- For an employee, it is sufficient to define new specific characteristics and inherit the rest from the person type.
- Characteristics should be described in the most general class possible.



**Top-down**:
- Generally, we may know that concrete employee objects with defined workplaces can travel to their workplaces.
- Thus, an employee's weekly schedule can be defined abstractly based on daily tasks without knowing the exact job description or workplace location.

![inheritance example](/img/part-3/inheritance_example.png)


## Inheritance vs Composition

Reusability is also possible through composition/delegation. Call syntax using composition is longer,  but interface commitments are more freely selectable.

Let's at first look an example utilizing inheritance:

```java

interface Stack {
    void add(Object item);
    Object remove();
}

// Also binds to LinkedList
class MyStack extends LinkedList<Object> implements Stack {
    void add(Object o) { add(o); }
    Object remove() { return removeLast(); }
}
```
And the same example implemented utilizing composition:

```java

interface Stack {...}// same as before

class MyStack implements Stack {
    private List<Object> list = new LinkedList<>();
    void add(Object o) { list.add(o); }
    Object remove() { return list.removeLast(); }
}
```

Next, lets look at how the implementation could be done, if the we also needed to implemented a subclass called `DebugStack`. 

Utilizing inheritance:

```java
interface Stack {...}// same as before
class MyStack extends LinkedList<Object> implements Stack {...} // Same as before

// Both MyStack and LinkedList
class DebugStack extends MyStack {
    @Override void add(Object o) {
        System.out.printf("Adding %s", o);
        super.add(o);
    }
    // Inherited remove() fits as is
}
```
And the same implementation utilizing composition:

```java
interface Stack {...}// same as before
class MyStack implements Stack {...} // same as before

class DebugStack implements Stack {
    private Stack mine = new MyStack();
    @Override void add(Object o) {
        System.out.printf("Adding %s", o);
        mine.add(o);
    }
    @Override Object remove() { return mine.remove(); }
}
```
### Couple More Examples of Inheritance vs. Composition Using Kotlin

Delegation using the `by` keyword (Kotlin):

```kotlin

interface ActiveObject {
    fun toggleState()
    fun printState()
}
class SimpleActiveObject : ActiveObject {
    private var state = false
    override fun toggleState() { state = !state }
    override fun printState() { println(state) }
}
class GameObject : ActiveObject by SimpleActiveObject() {
    private var state = "ok"
    fun gameMethod() { println(state) }
}
```


Composition: state management delegated to SimpleActiveObject:

```kotlin

interface ActiveObject { ... } // same as before
class SimpleActiveObject : ActiveObject { ... } // same as before
class GameObject : ActiveObject by SimpleActiveObject() {
    private var state = "ok"
    fun gameMethod() { println(state) }
}
val gameObject = GameObject()
gameObject.toggleState() // SimpleActiveObject().state <- true
gameObject.printState() // prints "true"
gameObject.gameMethod() // prints "ok"
```


Inheritance: state is within the GameObject:

```kotlin

interface ActiveObject { ... } // same as before
open class SimpleActiveObject : ActiveObject { ... } // same as before
class GameObject : SimpleActiveObject() {
    private var state = "ok"
    fun gameMethod() { println(state) }
}
val gameObject = GameObject()
gameObject.toggleState() // gameObject.state <- true
gameObject.printState() // prints "true"
gameObject.gameMethod() // prints "ok"
```