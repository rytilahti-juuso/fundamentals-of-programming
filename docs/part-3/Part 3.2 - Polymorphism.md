---
description: What is polymorphism and ways to implement it.
---

# Polymorphism

Today's Topics:

- Polymorphism
- Relation
- Usage
- Roles and Hierarchies
- Abstract Classes
- Interfaces

## Polymorphism: Is-a Relationship

Inheritance provides a means to **reuse** and **replace** functionality. Inheritance essentially just syntactically packages the way to achieve reusability, that is already possible by procedures, through selection logic determined by **dynamic binding**. Previously, references to inheriting objects were always through their concrete class type references.

**Polymorphism** is defined as the ability to reference an object through the type references of its superclass as well. Thus, polymorphism establishes the *is-a* relationship.
  - From the perspective of contracts and correctness: inheritance should be based on logical substitutability.
  - An inheriting class can represent the inherited class in all respects, but not necessarily vice versa.

## Polymorphic Handling of Values

Let's look at an example describing a `Employee` and `Unemployed` classes which both extend `Person` class.

```java
abstract class Person {}
class Employee extends Person {}
class Unemployed extends Person {}
Unemployed unemployed = new Unemployed();
Employee worker = new Employee();
Person someone;
```
Using a UML you could describe the said class structure in the following way:

![](/img/part-3/person.png)

Explicit (type) conversions:
```java
someone = (Person)unemployed; // arrow direction
unemployed = (Unemployed)someone; // against arrow
someone = (Person)worker; // arrow direction
worker = (Employee)someone; // against arrow
```

Conversions in the direction of the arrow work automatically! When we need to manually force the type conversion, there is a risk of failure.

```java
someone = unemployed; // arrow direction
unemployed = (Unemployed) someone; // against arrow
someone = worker; // arrow direction
worker = (Employee) someone; // against arrow
```
Next, we will look at a slightly modified example that highlights some of the limitations.

```java
abstract class Person {}
class Employee extends Person {}
class Unemployed extends Person {}
Unemployed unemployed = new Unemployed();
Employee worker = new Employee();
Person someone = unemployed; // arrow direction
```
Limmitations are that we cannot move:
1) both in the direction and against the arrow with the same conversion or

2) without an arrow between the classes.

```java
worker = (Employee)someone; // raises ClassCastException
worker = (Employee)unemployed; // compiler: incompatible types
```

## Class Hierarchy

Now let's look at the this through the lens of class hieracrhy.

Java: a class can inherit from at most one superclass.
- leads to class inheritance chains
- subclasses correspond (is-a) to their superclasses
```java
class Throwable { .. }
class Exception extends Throwable { .. }
class MyProblem extends Exception { .. }
```
Notice how the `Exception` extends to `Throwable`. 

Using UML you could describe the above class structure in the following way:

![](/img/part-3/class_hierarchy.PNG)

Generally applies
- a class can inherit one superclass
- a class can be inherited by several subclasses (1+)
- **final** = no subclasses
- **private** constructor, number of instantiations can be controlled by the class itself.

For example how a private constructor could be used: a class could be restricted so that creating a new instance of a class using a `new` keyword would be impossible, but a `public static` method of the said class could call the private constructor. Even though that might sound confusing, there are some valid use cases. For example, Java enforces calling the parent class in the constructor first (`super()`), and there might be a case where something else would be preferred before doing so.

We can also extend the hierarchy to display the `Object` class. In Java  all class chains ultimately inherit from the `Object` class. 

So the inheritance is the following: 


![](/img/part-3/class_hierarchy_2.PNG)

Java:

```java
class Object { .. }
class Throwable extends Object { .. }
class Exception extends Throwable { .. }
class MyProblem extends Exception { .. }
```
However, as this is general case for all classes, it is not necessary to mention the `Object` class. E.g. `class AwesomeObject extends Object` the `Object` is not necessary.

Different chains of inheritance form a tree. It is important to note that we can polymorphically reference everything via the `Object` type and even enums inherit from objects despite using a different word in signature declaring the class (enum).


![](/img/part-3/class_hierarchy_3.PNG)

```java
class Object { .. }
class Throwable extends Object { .. }
class Exception extends Throwable { .. }
class MyProblem extends Exception { .. }
class String extends Object { .. }
// or just
class String { .. }
```


## Abstract Classes in Class Hierarchy

Abstract classes are positioned as intermediate classes in the hierarchy. They design goal is preventing direct or indirect (due to missing features) instantiation.

![](/img/part-3/class_hierarchy_4.PNG)

```java
class Throwable { .. }
class Exception extends Throwable { .. }
class MyProblem extends Exception { .. }
class String { .. }
```
```java
abstract class AbstractCollection { .. }
abstract class AbstractList extends AbstractCollection { .. }
class Vector extends AbstractList { .. }
```

A class cannot be declared `abstract` and `final` at the same time. You might wonder the differences between final and abstract classes. The difference between abstract and final is that object of abstract class can't be instantiated and class declared `final` can't be inherited.

```java
final class Final { .. }
```
## Interfaces in Class Hierarchy
Specification of an interface includes
   - interface name
   - public methods
   - recursively corresponding upper interfaces

**Class**: defines both the interface and its implementation while **interface**: defines only the interface. Furthermore, interface does not tie together into a class hierarchy and it cannot inherit from a class. An interface has no inheritable state (member variables). 

A class can implement (many) interfaces and an interface can extend another interface.


![](/img/part-3/class_hierarchy_5.PNG)

In Java, interfaces are always declared using a keyword `implements`, while a class inheritance is declared with the keyword `extends`.

```java
class Throwable implements Serializable { .. }
class Exception extends Throwable { .. }
class MyProblem extends Exception { .. }
abstract class AbstractCollection { ..}
abstract class AbstractList extends AbstractCollection { .. }
class Vector extends AbstractList { .. }
class String implements CharSequence {..}
```
Helper methods can be declared using (`default` & `static` Java8+, `private` Java9+)

Due to interface limitations, implementation relies on public interface or global (`static`) state, not on member variable references.