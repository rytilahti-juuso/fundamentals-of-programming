---
description: Class creation.
---

# Creating a class

Now we're moving finally to emphasize the object oriented programming. 

Today's topics include:

- Constructing a group of classes
- Defining a class
- Defining a group of a classes
- Examples
    - Rational numbers
    - Sequence
    - Binary tree
    - Phone & phone directory

## Constructing a group of classes

There is no one "true" way to define a class. However here is some advice for class design:

- A class should implement one and only **one** concept, akin to a routine: "one clear purpose, **represents** some **functional concept**". In different contexts, it might mean something substantially different, e.g., a car in a car dealership vs. an autonomously driving car in traffic (in these cases, the key features are quite different).
- You might also remember from previous lectures, that one option is to use the data-oriented model. In this case it would keep the car data & car functionality separate. This and more traditional object oriented programming could both be used to convey the same meaning/functionality, although both methods have different strengths and weaknesses. "Best" method often depends on the use-case.

One should aim for general use/reusability, but not at any cost. Information can be structurally compiled, i.e., the internal implementation may rely on other classes that model part of the information (divide-and-conquer). The reusability can be achieved, e.g. using polymorphism, generic classes (e.g. `class Solution<T>`) or by structuring a group of classes (e.g. data-oriented model).

- A class is built around data. A good question that should be asked is: What parts of the data to be modeled are closely related? Additionally, much depends on the intended use, i.e., the context of the planned class.

## Class Structuring from Context Description:

One way to structure a class us using a context description. This means that classes can be build when we are characterizing things (e.g., from created user story).

**Nouns** are often good candidates for classes. Are there multiple instances, or is it a proper noun? Then, the noun is more likely an object of the class, e.g., Turku, class City.

**Verbs** could represent actions. This makes them often good candidates for methods.

**Adjectives** represent values. Generalization by grouping similar adjectives can function as a class, e.g., yellow, red → class (in this case enum) Color.

These are not strictly defined guidelines, the line is drawn on the sand, e.g. a verb could also be a class name in some cases. You should also consider the structure based on multiple different angles e.g. performance, maintainability, extensibility etc.

An example of a class structure:
![](/img/part-7/example_of_class_structure.PNG)

## Classifying Classes: A Scientific Response

There are various kinds metrics, or goodness measures been sought for OO (Object-Oriented) languages' classes. Each aims to serve as a design guideline. One could say that the basic idea behind the metrics is to present design as a group of numeric values, which present e.g. the structure's quality. Analytics are a good tool, but they might not reveal all possible benefits or problems of a design. Always check the potential up- and downsides of a particular tool/method before using it!

Perhaps the most famous are the so-called cohesion metrics e.g. LCOM = Lack of Cohesion of Methods. LCOM1, LCOM2, LCOM3, LCOM4, TCC, LCC, LCIC, …

The rough idea is that methods should extensively use the same instance variables (and/or other methods within the same class). For example, if the class's instance variables are divided into sets A and B, and the methods into sets AA and BB.

Cohesion is poor if AA's (BB's) methods use only A's (B's) variables – then two different concepts are artificially tied together Unfortunately, the value of metrics often depends on the way the internal implementation is done – this should not be the case!

## To Buy or to Inherit?

Through inheritance, not only data structures but also functional implementations can be inherited. For example, through a client relationship (where class A's implementation uses class B), data structures and functional implementations can also be utilized.

There seems to be no indisputable universal criterion to determine whether there should be an inheritance or a client relationship between classes A and B.

Ownership (has-a) is rarely being (is-a). Has-a is a client relationship, where being is inheritance. Being is often also owning. Often the choice of relationship depends on the perspective and emphasis (things related to the intended use). Some good questions are:
- Are (nearly) all features of A also features of B?
- Are (nearly) all features needed? (Do they also play a significant role in B's entire essence?)

## Stages of Class Formation
One way to format a class would be to do it in these phases:

1. **Mapping of Features**: What constructors, observation (e.g. getters), and modification (e.g. setters) routines the class should have?
2. **Specification of operations**: Define the signature, description, and pre and post conditions of each routine. Define a public class invariant.
3. **Determining the Public Interface**: Is the resulting class's public interface valid for both the class's client and its implementer?
4. **Choice of Concrete Representation**: How is the stored information in the class presented? When the class variables has been selected, the next question on concrete implementation is to decide the type of the variables. 

- As a quick refreshner: A class invariant is an invariant (boolean argument statement). If the program functions as intended, the invariants should always be true. For example, a class that would contain only positive numbers (and  zero) and would exclude all negative numbers. A class invariant holds true to all methods and properties of the said class. If the class invariant is not defined, this could cause problems due to e.g. inheritance. So even though this is not enforced through the code, this still should improve communication and make communication between developers more efficient.

5. **Data Management in the Chosen Representation**: Define a private class invariant and abstraction function for the class.
6. **Implementation-Related Decisions**: What is the class's implementation like (execution)?
7. **Generalization**: Is the class generalizing, or is its use limited to just one client? (e.g., 1:1 or 1:M relation, generic types)

Of course one could choose to do this more iteratively.


## Steps in Forming a Class Group

1. **Sketch the necessary classes and class structures.**

- The course provides the tools for an initial conceptualization of class groups. Design patterns and architectures help conceptualize broader structures, but they mostly exceed the scope of this course.

2. **Map out the necessary features in the classes.**

- Constructors and getters and modification operations (and possible exceptions).
- Consider definitions from both the client's and the implementer's perspectives.

3. **Write definitions for the operations.**

- Initial and final conditions
- Class invariants, abstraction functions, …

4. **Prepare implementations for the defined classes and test them**. 

- Or should the tests be written first? (e.g. TDD)

The development process can also be more or less iterative. (from the described stages, it might appear that the problem is fully known in advance)

# Examples

Next, lets look at some examples.

## Example: rational numbers
We briefly mentioned a possible use case as using non-negative (rational) numbers. Let's look it more closely next.

- We are programming a system that requires rational numbers. A rational number is a real number that can be expressed as a quotient of two integers: p/q. The number 𝑝 is called the numerator, and 𝑞 the denominator.
- Choose a quotient representation as the structure for implementing the class **RationalNumber**, meaning each instance of the class has **int** member variables for numerator and denominator. In this case, it would be good to check how a rational number is defined in mathematics. 

Furthermore, one could think that the implemenation of this could be quite straightforward due to the fact that the implemented concept is a matter of quite simple arithmetics. However, this is not the case, as there are differences in the implementation of numbers in the programming languages.

 In the example case mentioned above, the following things would need to be considered:

1. Can the denominator be zero? If so, what does that mean?
- No it cant, it could be defined e.g. in the class invariant.
2. How is a negative number represented? Are *-1/2* and *1/-2*
   valid?
- If both are valid, the implementation should check both numbers. 

3. Is the number presented in reduced form? Are *6/8* and *3/4* equivalent?
- Additionally, the implementation needs to solve the problem of how to check the equivalence of the similar values with different numeric values. How the exceeding of max int value (overflow) should be handled? It's also a possible (and quite common) source of a security risk!

4. How is zero represented? For example, are *0/1* and *0/2* valid?
- In java, for example, float or double  zero can be either *+0* or *-0*. This could be problematic e.g. when a comparison between two different zero values is being done.


As an additional side note: implementing this kind of concept can be useful in a real-life use scenarions, e.g. for a learning platform (for example, ViLLE).

A example of a possible implementation (the class invariant and abstraction function for this class):

```java
class RationalNumber {
    // abstraction function, the abstract ideas in this case are presented as class variables p and q.
    // 'p' is the numerator of the rational number && 'q' is the denominator
    private int p, q;


    int numerator() { return p; }
    int denominator() { return q; }
    @classInvariantPrivate p >= 0 && q != 0 // This is a little bit different from our original implementation idea (p) but this is also fine.
    @classInvariant numerator() >= 0 && denominator() != 0
    ...
}
```
In the above example, we have two different class invariants. First is for the integrity of the class itself, and the second one defines the rules for the public interface (in this case the getter methods). In this case these could also be combined, as the definitions do not differ from each other. Specification on this level could be beneficial e.g. when defining the *date* or *time* related classes (hours, holidays, leap days etc.). 

## Another example: Queue

A queue is a FIFO (first-in, first-out) data structure, which means the elements added earlier to the queue are removed first. A queue supports the following operations: adding an element to the end of the queue, querying the first element of the queue, and removing the first element of the queue.

Design the implementation of the **Queue** class: public interface (definition of operations), concrete representation, and (public) class invariant.

An example of a queue:

![](/img/part-7/Queue.PNG)

Now let's start by defining the features of the class (step 2).

Class: **Queue**
Initially, the queue is empty (constructor)
`first()` - query the first element
`add()` - add element
`remove()` - remove element

The following are also useful and are fulfilled from the implementation (iteration #2):
`size()` - number of elements
`isEmpty()` - does it contain elements
`isFull()` - can more elements still fit into the queue

Now, let's start the third phase, 3. Writing specifications for operations

```java
// Queue: a collection of elements,
// that follows the FIFO principle.
class Queue {
    // Constructs an empty queue
    //
    // @.pre true
    // @.post (queue constructed)
    Queue()
    // First element of the queue.
    //
    // @.pre !isEmpty()
    // @.post RESULT==(the 1st element of the queue)
    Object first();
```
As the instance of a Queue class does not have any preconditions, it can be formed anywhere and the preconditions are set as true. On the post we do not have any good notation, so the paraphasing it is sufficient.

```java
 // Adds an element to the end of the queue.
    //
    // @.pre !isFull()
    // @.post !isEmpty() &&
    // size() == OLD(size()) + 1
    // && ('e' added to the queue)
    void add(Object e);
    // Removes the first element of the queue.
    //
    // @.pre !isEmpty()
    // @.post !isFull() &&
    // size() == OLD(size()) - 1
    // && (1st element removed)
    void remove()
```
Naturally, adding an element to to a queue (`add(Object e)`) requires that the queue is not full and after adding a element the queue is not empty. Additional note: OLD is a conceptual example, not an actual implemenation from Java.

On the `remove()`, the queue should not be empty when remove is called. Additional question to think about: in practice, would this be a good implementation? Additionally, one could argue that the `remove` should implement also the `first` so that the user can e.g. show details of a deleted element.

```java
// @.pre true
// @.post RESULT ==
// (number of elements in the queue)
int size();
// Does the queue contain elements?
//
// @.pre true
// @.post RESULT == (size() == 0)
boolean isEmpty();
```

```java
// Is the queue full?
// (implementation-specific maximum size)
//
// @.pre true
// @.post RESULT ==
// (no more space in the queue)
boolean isFull();

// class invariant
@classInvariant
size() >= 0 &&
!(isEmpty() && isFull())
```

In this case the class invariant is a little bit redundant, as all of the conditions are restrained in the method implementations, but the class invariant say's general conditions that are (or at least should be true) in all cases.



Now, lets look at a possible implementation (step 4):

```java
class Queue {
    public static final int MAX_SIZE = 100;
    private Object[] storage = new Object[MAX_SIZE];
    private int idx = 0;
    // public Queue() {}
    public Object first() { return storage[idx - 1]; }
    public void add(Object e) { storage[idx++] = e; }
    public void remove() { idx--; }
    public int size() { return idx; }
    public boolean isEmpty() { return size() == 0; }
    public boolean isFull() { return size() == MAX_SIZE; }
}
```

The feature of queue-like behavior could also be isolated into an interface class:

```java
interface QueueLike {
    Object first();
    void add(Object e);
    void remove();
    int size();
    default boolean isEmpty() { return size() == 0; }
}
```
Notice how we left out the `isFull` to allow dynamic queue like structures? Additionally, notice how Java supports also defining the isEmpty that relies on the `size` method?

#### Binary Tree

A binary tree consists of a **header**, which represents the tree from the client's perspective, and **nodes** that form the actual structure of the tree. The **header** is aware of the tree's **root node**. Nodes can have a maximum of two **child nodes**, and each node also knows its **parent(s)**.
Let's start out by sketching some class and object diagrams. Let's also draw a diagram showing the relationships between classes.

  ![](/img/part-7/Binary_tree.PNG)


A more concrete example: a binary tree of numbers. The elements of the tree are arranged according to a specific tree traversal order.

![](/img/part-7/binary_tree_2.PNG)

Now, let's visualize the possible connection(s) between the classes.

Below are two possible options:

![](/img/part-7/nodes.PNG)

The definition could also be done without using a *Tree* class, however it would mean that an empty tree (tree without any Node objects) would probably be referenced as a *null* instead of empty *Tree* object. This could cause problems in some use-cases. For example, if we would want to a option to also create an empty *Tree* object and differentiate it from a null value.

Implementation of the left one:

```java
class BinaryTree
{
Node root;
...
}
class Node
{
Data value;
Node parent;
Node leftChild;
Node rightChild;
// ... more code
}
```

The right one implemented:

```java
interface Node
{
Node parent()
Data value;
}
class BinaryTree
{
Node root;
}
class Leaf implements Node
{
...
}
class InnerNode implements Node
{
Node leftChild;
Node rightChild;
// ... More code
}
```

## Phonebook

Now let's inspect a little bit more complex example, a phonebook.

Description:

Market research has revealed that a large group of consumers would like a mobile phone with the simplest possible features. In addition to phone functions (making and answering calls), the mobile phone should only include a phonebook. You have been given the opportunity of a lifetime to design the software for this brand-new phone.Specifically, you are asked to sketch out the necessary classes and class structure (i.e., the relationships between classes).


Unfortunately, implementing the phone requires a lot of additional information about the hardware implementation. Instead we will be focusing on contacts and the phonebook. We'll keep the solution as simple.

```java
abstract class Phone {
    final Phonebook = new Phonebook();
    abstract void call(long number);
    abstract void call(Contact contact);
    abstract void answer();
}
class Phonebook {
    ...
}
class Contact {
    ...
}
```

## Example: Contact Class

We identify a class **Contact** for storing contact information.
Let's consider the necessary features of the class:

- The record is practically a name-phone number pair.
- We want to create records based on name and phone number.
- We want to observe the information of the created record.
- ~~We want to modify the information of the created record.~~

We decide to implement contact information as an immutable data structure. Updating contact details requires replacing the entire contact. However, implementing the contact is now easier.

```java
interface ContactLike {
    @classInvariant name() != null && number > 0 &&
    (""+Long.valueOf(number())).length() > 2
    // observation operations
    // @.pre true
    // @.post RESULT == (name / number)
    String name();
    long number();
}
// @.pre name != null && number > 0 &&
// (""+Long.valueOf(number)).length() > 2
// @.post (contact created)
record Contact(String name, long number) implements ContactLike {}

```

Example: Examining the Formation of Contact Class

1. Mapping features:

- Creation of record and field queries.

2. Definition of operations:

- Described in the interface description.

3. Fixing the public interface:
   Yes.

4. Choosing a concrete representation:

- Pair: *String* and *long*.
- number = E.164 without the plus (International standard)

5. Managing data in the chosen representation:
   Straightforward (name = contact name,
   number = contact number).

6. Decisions related to implementation:

- Java's *record*.

7. Generalization:

- Possible other users.

## Example: Phonebook Class

Let's sketch out the following features for the class:

```java
interface PhonebookLike {
    // observation operations (e.g. getters)
    Contact[] getContacts(); // all contacts
    int size(); // number of contacts
    Contact[] getContacts(String name); // individual's contacts
    int matchingContacts(String name); // count of an individual's contacts
    boolean contains(String name); // contains the individual
    boolean contains(Contact contact); // contains the contact
    
    // modification operations
    PhonebookLike add(Contact contact); // add a contact
    PhonebookLike remove(Contact contact); // remove a contact
    PhonebookLike remove(String name); // remove an individual's contacts
    // @.classInvariant size() >= 0
}
```

Defining the specifications: 

```java
interface PhonebookLike {
    // @.pre true
    // @.post RESULT == (all contacts)
    Contact[] getContacts();
    // @.pre true
    // @.post RESULT == getContacts().length
    default int size() { return getContacts().length; }
    // @.pre name != null
    // @.post FORALL(c: RESULT; contains(c) && c.name().equals(name))
    Contact[] getContacts(String name);
    // @.pre name != null
    // @.post RESULT == getContacts(name).length
    default int matchingContacts(String name) { return getContacts(name).length; }
    // @.pre name != null
    // @.post RESULT == EXISTS(c: getContacts(); c.name().equals(name))
    boolean contains(String name);

    // @.pre contact != null
    // @.post contains(contact) && RESULT.remove(contact).equals(OLD(this))
    PhonebookLike add(Contact contact);
    // @.pre contact != null && contains(contact)
    // @.post !contains(contact) && RESULT.add(contact).equals(OLD(this))
    PhonebookLike remove(Contact contact);
    // @.pre name != null && contains(name)
    // @.post !contains(name) && RESULT.add(OLD(this).getContacts(name)).equals(OLD(this))
    PhonebookLike remove(String name);
    // @.classInvariant size() >= 0
}
```

Now let's look little bit of the implementation:


Contact: String, Int tuple

class Phonebook:
- Contact[] array
- List\<Contact> list
   - ArrayList\<Contact>
   - LinkedList\<Contact>
   - Search tree, hash table, ...
   - and possible helper methods

```java
class Phonebook implements PhonebookLike {
private final List<Contact> contacts = new ArrayList<>();
// ... 
}
```

As an additional exercise, you may try now implementing the phonebook class fully.

One additional benefit in using interfaces is that it reduces the need to manually write code, as the method signature's etc. can be automatically generated/copied with modern IDE's.

# End of Part 2

This is the end of part 2 of the course now you can do the exercises related to this part in ViLLE and continue to part 3.