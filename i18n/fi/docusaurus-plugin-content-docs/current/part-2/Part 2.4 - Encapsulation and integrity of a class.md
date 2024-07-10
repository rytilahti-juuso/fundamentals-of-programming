---
description: Encapsulation, class protection and integrity.
---

# Encapsulation and integrity of a class

Today's Topics:

- From Routine Specification to Object-Oriented Programming
- Protecting the Class: Encapsulation and Integrity
  - External and Internal Threats
  - Class Integrity: Class Invariant
  - Public Invariant and Abstraction Function
  - Protecting the State of an Object
  - Class-Level Visibility Protection Modifiers
  - Aspects of class protection

## From routine specification to object oriented programming

![](/img/part-5/from_routine_specification_to_object_oriented_programming.png)

Routines are in their core only sequences of code, which can be called repeatedly. Routines can have relations to another routines. For example, if we have three routines A, B and C, calling one routine can require calling some other routine.


A more concrete example of the above image, could be that Routine A is a survey, routine C asks user information about that survey and routine B prints the answers given by the user. Due to the notation, routine A can call Routine C many different times with different parameters.

Specification of a routine in contract-based programming can include the following things: pre-conditions, post-conditions, signature, verbal description.

How the implementation of the desired method is done? The implementation can focus on e.g. the following things:
  - Algorithms, data structures, etc.
  - Data transfer: parameters (what routine is given as input), return values (what routine gives as output), global variables (a variable located outside of the routine, but still visible to the routine)

The main focus of this course is designing and planning, not the impelentation itself.

Encapsulation is an important aspect as well. Routine caller is unaware of the implementation, coding is done according to the specification.

Next, lets look at a second abstract example:

![](/img/part-5/from_routine_specification_to_object_oriented_programming_2.png)

In this example routine A and B belong to the same class, because they are cohesive. Cohesive routines should be grouped into the same class. 

Each class object provides a common internal state to its routines (routine → method).

New aspects in specification include: 

a.) **features** of a class (around what data the class is built), 

b.) constraining the **public interface** (**encapsulation**), 

c.) **internal state** and **integrity** of the object 

d.) **generalization**, **universality**.

Features defined in a class are in the use of every instance of that class. 

Constraining the public interface would be in Java, e.g. when the method has been set to private instead of public so it can be called only by the routines defined in that class. 

The internal state means that the object has protected the inside of the class. Integrity means that we have some rules in place, that all of the objects adhere to. This could mean e.g. that a string variable can't be empty and it should always be in a specific format (e.g. personal identification number).

Generalization and universality relate to inheritance and polymorphism and will be revisited later on the course.

## Class Protection: Encapsulation and Integrity

Let's assume that we have somehow identified the data content around which a class could be built. 

If the class would be a class describing Students, a *Student* class should contain at least a name, study right and a student number.

So we can ask what should be known about protecting the content of the class?

We should think each feature through and define situations where they should be public to other classes.

*How to apply encapsulation in the context of a class?*
A practical example. Let's imagine that we would like to allow editing of the students name after it has been saved. This means that we should probably encapsulate the name change inside the said class and implement special rules, e.g. name must be at least one character long. This can be achieved inside the class with a *setName* method and protecting the actual *name* variable by setting it as private.


*What does integrity mean in the context of the class (objects)?*
Integrity could mean in this context that the student number is in a specific format, following specific predefined rules. Another example of integrity is that if the students age is saved, it could never be below zero. However, the rules should not be too strict, as they might cause problems, e.g. the student number could be in multiple different formats across different universities or a student could have multiple different student numbers.

- Indirectly: What does class invariant mean? Class invariant is a way to enforce the rules.

### Internal and external "threats"

Below is an image that depicts two objects interacting with each other. It should be noted that the term attack is a little misdirecting in this case, as the objects are not active entities. 


![](/img/part-5/external_and_internal_threats.png)

In the image, all objects are in control of the programmer and behave in the exact way programmer made them behave. This means that if the external attack is not preferred, e.g. it tries to modify some variable that it should not modify, access to the method used to perform the change could be hidden. Another way to mitigate attacks is that the method itself would not allow unwanted modifications e.g. setting a negative age for the student. We should not be overly optimistic as what the external object tries to achieve, but instead rely on preconditions said on the routines specification.

Internal attack means in this context, that the object could contain methods, which could modify the object's internal state. There should also be some protection in place to avoid possible mistakes made by the programmer. This is a more realistic example of a risk especially in more complex classes.


# Class Integrity: Class Invariant

Requirements similar to pre-conditions and post-conditions are expanded to cover the class and all its instances, i.e., objects as a whole (→ **class invariant**).

So a class invariant is a statement about the state of the object similar to pre-conditions and post-conditions (invariant → truth-valued & must always be true). It must be true immediately after the formation of an **object** of a class (after the **new**-call is complete). The invariant must remain true after each method call. Even though it is referred to as a **class** invariant, each **object** instance of the class must fulfill the condition.

Invariant is a more broadly used term, which contains a set of truth (boolean) values.

Further distinctions:
- **Public class invariant**: Communicates to outside the rules set by the class for its objects, must be verifiable by users (challenging, because of encapsulation!).
- **Private class invariant**: Communication is directed towards the implementing entity and handles, if necessary, the members hidden by **encapsulation**.

Additionally, access to members (variables/methods) may be restricted with **protection modifiers**.

### Example: Class Integrity
The following example models a stack with a maximum of 10 elements. 

The following is an example of using a class invariant, but it should be noted that it doesn't really follow good practice, as the code functionality relies solely on  the programmer following the specification (e.g. `push()` method's precondition is that you should push only if the size is less than 10). The `size` is set in the `@.classInvariant` as it is visible outside of the class (public).

```java
class Stack {
  // @.classInvariant size() >= 0 && size() <= 10 // size() verifiable
  // @.classInvariantPrivate data != null && s >= 0 // for implementer's knowledge
  private int s = 0; // visibility limited
  private int[] data = new int[10]; // visibility limited
  
  // @.pre true
  // @.post RESULT == (stack size)
  int size() { return s; }
  
  // @.pre size() < 10
  // @.post size() == OLD(size()) + 1 && pop() == element
  void push(int element) { data[s++] = element; }
  
  // @.pre size() > 0
  // @.post size() == OLD(size()) - 1 && RESULT == (top element)
  int pop() { return data[--s]; }
}
```
### Class Invariant: What if..?

The class invariant is therefore in effect at the beginning and end of each class method call.

What about during the class methods execution?
  - A: Since methods often change instance variable values incrementally as a side effect, the class invariant does not need to be in effect at every moment during the method's execution!

What if, during the execution of class X's method, a method of another class Y is called, and through it indirectly calls again class X's (possibly another) method?
  - Possible problem!
  - **Solution**: It should be ensured that the class invariant is maintained if a method of another class is called, passing the calling object as a parameter.

  ### Object's state

Let's look at the following image:

![](/img/part-5/object_state.png)

The image is divided into two parts by a line in the middle. The image does not represent only object-oriented programming, but it also is based partially on **abstract data type** theory.

 The upper part of the image could be seen as presenting concepts. For example, we have an abstract specification, e.g. in the previously presented example *Stack*. The public class variant does not take into account how the stack is implemented, but in `Stack` implementations there is normally methods `pop()`, `push` and `size`. In OO-programming context, the upper part of the image could also be seen as an interface. 
 
 The lower part of the image can be seen as a concrete class, containing also the implemenation of said class. Additionally, in Java, if the method shares the same name and the same signature, the concept is 1:1 (=the same) between the concrete class and the interface of the method the class implements.

The *abstraction function*, links the concept or idea and the actual implementation together. For example, if there is implementation of the *Stack* class, the abstraction function describes how the idea of stack is presented in the implementation. 

## Public Invariant and Abstraction Function

- The purpose of the public invariant is to guarantee properties that the class object possesses and on which the class's clients can rely.
- BUT the purpose of encapsulation is to hide the implementation – *how can a public invariant express anything about the properties of the class objects?*

Option 1: Expressed using the public properties of the class.

Option 2: Defined as a set of abstract properties (= abstract object; abstraction function) that the class objects possess, and these abstract properties are used.

The approaches presented above are often similar.


Now, let's look at an example: 

*free spaces in a parking garage*

- Abstract features: **freeCount**, **freeSpotsList** (Note: does not tell anything about the implementation e.g. is int, but instead tells the number of the free spots remaining).
- Public invariant: **freeCount == (freeSpotsList.length)**.
  - Boolean value, tells about the feature.

There are (at least) two possible ways to do the internal implementation of the features:
1. Implementation: **boolean spots[]**;
   - Private class invariant: **spots != null**.
2. Implementation: **int freeCount; boolean spots[];**
    - Private class invariant: **spots != null && freeCount == (number of false values in the array spots)**.

The implementation presented in option 1 has it's issues. If we would like to know how many free spots there are available, we would need to loop through the boolean array *spots*. This would probably be fine if the amount of spots stored inside the array would be small. But if the amounts of available spots is large, for example, if there would be thousands or even tens of thousands of spots, this could hinder the software's performance significantly.

Option 2 is better, because with this approach information about the amount of available spots does not require any additional calculations, but can be directly seen from the value *freeCount*. This is because in option 2 the variable freeCount is updated every time the list is changed.

Quite often public interfaces are methods instead of directly accessing a variable, while internally the variables might be modified directly.

## Encapsulation: What if..?

- If we have a recursive data structure, e.g., a binary search tree (BSTree), with properties:

1. Root node value (**int**)
2. Left subtree (**BSTree**) and
3. Right subtree (**BSTree**).

- Class invariant: All values in the left (right) subtree are smaller (larger) than the root.
- Values can be added to the tree, and values can be removed from it. Null values indicate empty subtrees.
- What if a reference to the left/right subtree is given out to some other class? (It's natural.)
   - This might violate the class invariant, as then the class would have no control on how the subtree is being manipulated through the reference.
   
So how can the class invariant be maintained in the tree and all its subtrees?
 
Generally speaking, its difficult! Copying the object (or in this case the subtree) could maybe provide a sufficient solution. However, a good solution should not give a reference to the subtrees (= encapsulation).

Exposure of internal representation (*representation exposure*) is a common challenge.

A common problem could be described in the following way: **when the class invariant depends on sub-objects, their content must be controllable** (e.g., no references allowed outside the object to sub-objects).

As a more concrete example, let's examine the following implementation for the BSTree Class:

```java
class BSTree {
  // @.classInvariant: if left != null, then left.largest() < value
  // && if right != null, then right.smallest() > value
  private int value; // visibility limited
  private BSTree left = null, right = null; // visibility limited
  // Constructors
  BSTree(int value) { this.value = value; }
  BSTree(int value, BSTree left, BSTree right) { ... }
  int smallest() { ... }
  int largest() { ... }
  void insert(int value) { ... }
  void remove(int value) throws EmptyTreeException { ... }
  BSTree getLeft() { return left; }
  BSTree getRight() { return right; }
}
```
Notice, how the `@.classInvariant` limits the possibilities.  For example, what happens when a element in the tree is edited... One option could be to construct the whole tree again.

Now let's look at parts of the presented example more closely:

```java
class BSTree {
// @.classInvariant: if left != null, then left.largest() < value
// && if right != null, then right.smallest() > value
private int value; // limited visibility
private BSTree left = null, right = null; // limited visibility
...
BSTree getLeft() { return left; }
BSTree getRight() { return right; }
```
Look at the methods `getLeft` and `getRight`. Notice how they return a instance of *BSTree*? And the class BSTree allows the modification of the tree? So methods `getLeft` and `getRight` leak internal representation, therefore breaking encapsulation!

These methods might not be in the external interface. Or perhaps only a deep copy of the subtree should be given out. (Deep copy = copying of the transitive closure = a full copy, which has zero references to the original object.)


There are also other problems regarding the current implementation:

```java
// Constructors
  BSTree(int value) { this.value = value; }
  BSTree(int value, BSTree left, BSTree right) { ... }
```
The second constructor breaks if it stores the left and right references as part of the object being formed (it should copy the content of the passed objects).

More generally speaking, this is about reference semantics. The same object can be a value in several 'places', leading to multiple references through which operations can be performed on the object's content.

The problem arises in situations where the object's integrity (invariant) depends on the state of the sub-objects (values of the object's instance variables).


## Protecting Object State
In the next chapters, we'll consider the following methods to protect an object's internal state:

- Visibility protection modifiers
- Controlled handling through methods
- Immutable data: changes are not allowed
- Make a copy: changes do not affect the original
- Wrapper object: selectively delegates changes

### Visibility Protection Modifiers
Levels of Protection for Visibility

| Level    | Description                                                |
|----------|------------------------------------------------------------|
| Class    | Protecting the internal state of the object from external threats. |
| Package  | Protecting the class from use outside the package.          |
| Module   | Protecting packages from use outside the module.            |

Visibility protection is enforced during the program's compilation. This means there is no need to separately validate them with a runtime test. Protection modifiers do not impose any 'burden' considering execution efficiency.

### Class-Level Visibility Protection Modifiers

- Based on limiting the visibility of class members. Also leads to limited use of hidden members. Visibility modifiers are **encapsulating** the implementation. They also aim to protect the object's state from external, possibly class invariant-breaking changes.

Java's protection modifiers:
  - **public**
  - package (default)
  - **protected**
  - **private**

Note: *package* is not a reserved word in Java!

Let's look at the class level visibility scopes in more detail:
  ![visibility scope table](/img/part-5/class_level_visibility_scopes.png)

  **X** marks which entity sees which member protected by the visibility modifier.

  One thing that could be suprising is that subclass and inner class are visible (=accessible) inside the whole package if not specified otherwise.


### Controlled Handling Through Methods

Hiding member with a visibility modifier is an efficient way of controlling access (**private**, **protected**, package). Member is a part of instance of an object, e.g. variable. Controlled access is given only through visible methods.

Only one "level of indirection" can be protected = a reference, i.e., if a member refers to an object, that object must manage its own protection. This comes with a consequence: If a member object cannot protect itself, no *reference* to this member should be given out from the object.

There are no problems with primitive types, as primitive types return a copy (value semantics) and not a reference. This is also the case when getting a primitive type variable with a method.  For example, here `getMaxsize()` returns a copy of the internal size.

```java
class MyArray {
    private int maxSize = 0;
    int getMaxSize() { return maxSize; }
    void setMaxSize(int maxSize) { this.maxSize = maxSize; }
}
```

Now let's consider following two implementations, that provide the same functionality.

Implementation 1:
```java

class MyArray {
    public int maxSize = 0;
}
```
Implementation 2:
```java
class MyArray {
    private int maxSize = 0;
    public int getMaxSize() {
        return maxSize;
    }
    public void setMaxSize(int maxSize) {
        this.maxSize = maxSize;
    }
}
```

Which one is better?

There is no definitive answer. If the code would be implemented as is, without changes, then setting the getters and setters for `maxSize` introduces unnecessary complexity and bloat. On the other hand, if the code would be changed later, the advantage of implementation 2 is that additional restrictions can be applied easily by adding them to getter and setter methods.

### Immutable Data
The value of a variable can also be "frozen" with a **final** attribute or **record** type. Data marked with those variables is known to be entirely or partly **immutable**.

The reference is not intended to be changed within the visibility scope of the variable. One aim is to prevent **the variable from being left uninitialized**. Additionally, using these modifiers prevents changing the reference both from outside and inside. This has a consequence: a **final** value can be more safely made visible.

- Remember: only one "level of indirection" can be protected! This means that e.g. protecting an ArrayList by declaring it `final` still allows the addition, removal, and updating of items stored in the said ArrayList. As an additional side note this can still be useful, as it forces the variable to always reference to the same instance.

Implementation of interface descriptions still requires a "getter method" (to be revisited later).

```java

class MyArray {
    final int maxSize;
    MyArray(int maxSize) { this.maxSize = maxSize; }
    int getMaxSize() { return maxSize; }
}
```

### Object Copying
One other way to protect object is to just (deeply) copy it. Changes to the copy do not propagate to the original. When copying an object, make sure that you understand what actually is copied, and in which scenarios only a reference to the same object is copied!

```java

class MyArray {
    final int[] data;
    MyArray(int[] data) {
        this.data = Arrays.copyOf(data, data.length);
    }
}

void main() {
    var array = new int[] { 1, 2, 3 };
    var my = new MyArray(array);
    System.out.println(Arrays.toString(my.data)); // 1, 2, 3
    array[0] = 0;
    System.out.println(Arrays.toString(my.data)); // 1, 2, 3
}
```
## Wrapper Objects

Behaves like the original, replaces methods that make changes with an empty implementation.

```java

public class MyInt {
    private int value;
    MyInt(int initial) { value = initial; }
    int getValue() { return value; }
    void setValue(int value) { this.value = value; }
}
```
in the above class there is nothing special, only normal get and set. 

By using a wrapper class, we can make an implementation of the class that behaves exactly as the previously mentioned `MyInt`, but is immutable, as `setValue` does nothing:

```java
public class ImmutableInt {
    private MyInt my;
    ImmutableInt(MyInt initial) { my = initial; }
    int getValue() { return my.getValue(); }
    void setValue(int value) { }
}
```

Other option would be to leave out the setValue from the implementation of `ImmutableInt` entirely. Implementing with the setter method could be necessary, if e.g. the original would implement an *interface*, which would require the setter method.