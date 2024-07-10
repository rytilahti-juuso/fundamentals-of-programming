---
description: What are side-effects and how to approach them.
---

# Side-effects

## What are side-effects?

The concept of a side-effect is related to execution, and thus to methods. A side-effect means that something changes as a result of execution, typically a variable’s value changes.

For example, a method that simply calculates a return value based on input values is free of side-effects.

As an another example, a method that updates the value of some instance variable of an object has side-effects.

Essentially, the prerequisite for a side-effect is that the programming language has an *assignment statement*. Assignment statement is a programming language structure that sets the value of the state indicated by a variable, but returns nothing (the setting is merely a side effect). 

## Are side-effects unnatural? Undesirable?

One way to look at side-effects is to use mathematics as a starting point. In mathematics, there are no side-effects; the 'variables' in mathematics are not like variables in imperative programming languages (such as Java). In mathematics, variables are set once to represent a value - in programming languages, a variable's value can change during execution.

Side-effects are a natural way in imperative languages to change state. Computation/execution in imperative languages essentially consists of a series of state changes. Often, methods of objects are intended to have effects on the object’s state, thus having side-effects.

In terms of method descriptions (and therefore correctness), the description of side-effects can be overlooked, especially if the effect extends outside the OO-program.

## Manifestation of side-effects

Let's look at side-effects more broadly. The following table lists manifestation of side-effects from an individual object towards larger entities:

| Context                        | Description                                                                                      |
|--------------------------------|--------------------------------------------------------------------------------------------------|
| Internal state of the object   | Variables of the object during the execution of an OO-program.                                    |
| Global state                   | Static variables of classes related to the execution of an OO-program.                            |
| Operating system level         | Information in the execution environment of an OO-program that can be programmatically changed.   |
| External world                 |   Effects on hardrives, networks, physical hardware, etc.                                                                                               |

## Example: Side-effect to the internal state of an object

The example below highlights that in java you can have a variable and a method with the same name. The idea is to display that the visibility of a variable can be limited to allow direct edits of a variable e.g. only inside the class itself. The method `isRunning()` enables us to ask the state of the variable outside this class.

```java
class Car {
private boolean isRunning;
boolean isRunning() { return isRunning; }
/**
    @.pre isRunning() == false
    @.post isRunning() == true (side-effect)
    */
    void start() { isRunning = true; }
    
    /*
    @.pre isRunning() == true
    @.post isRunning() == false (side-effect)
    */
    void stopEngine() { isRunning = false; }
    }
```

## Example: Global side-effect
Creating objects of the Object class has a side-effect on the global state:

```java
class ObjectPool {
static int createdObjects = 0;
}
class Object {
{ ObjectPool.createdObjects++; }
}
void main() {
    new Object();
    new Object();
    System.out.println(ObjectPool.createdObjects);
}
```
In the example, the class keeps a tab on how many objects are created. This is a side-effect.

In the example above, you might notice that the `public static void main(String[] args) ` has been changed to `void main`. This is possible in newer versions of Java. However, ViLLE does not yet support this.

## Example: Side-effects outside the virtual machine

Once again, we use newer Java to shorten the example.

File creation:
```java
Files.writeString(Path.of("/tmp/test"), "some content");
```
Printing to the console:
```java
System.out.println("Hello world!");
```
Other side-effects:

- Memory allocation outside of the JVM (Java Virtual Machine)
- Changes to the graphical user interface.
- Network connections
- …

## Limiting side-effects in language

- In most mainstream languages, the use of side-effects is common.
- BUT: side-effects make ensuring the correctness of the code challenging.

This raises a natural question: how to limit side-effects?

In a purely  functional language a variable can only be set once. 

In Java, the side-effects can be limited by e.g. using the **final** modifier, immutable data structures, and voluntarily taking a disciplined approach to avoid possible side-effects.

If side-effects are limited, assembling a program from separate components is more reliable. The scope of an function is apparent from its signature; on the other hand, this causes longer signatures. 


# Handling of special cases

Method could be imagined as a mathematical function. This is not exact definition, but (figuratively) it works.
![reload button](/img/part-4/routine-as-a-mathematical-functin.png)

![reload button](/img/part-4/partitioning_of_the_domain.png)

- As an example, when opening a file:
  - Precondition: name is null or empty
  - Special case (in this case throws exception): File is not found.


## Partial and Total Routine

- A routine is said to be **total** if it has no preconditions, and **partial** if it does.
- A total routine can be called at any time.
- Users of a partial routine must ensure that preconditions are met when calling.
- Exceptions are often used to make a routine total, or less partial.
- However, making all routines total is not the goal.
- Raising exceptions in the implementation of a routine often requires runtime checks.
- Calling a routine that raises exceptions requires handling code from the caller as well.
- When exceptions are used in routine signatures, there should be an effort to use descriptive exception classes, defining them as necessary.

![absolute value example](/img/part-4/absolute_value.png)
In the example above, the type of the variable (number) causes that there is no need to add (any) preconditions. 

The left side presents input values and the right side output values The impossible values return values are marked with gray background.



We can look at another example (below).



![second square root example](/img/part-4/square_root.png)

In this example we need to limit negative values from possible input values.

 If this would be implemented in Java, we would need to describe this special case in precondition of the method. So the method could be defined in the following way:

```java
/* @.pre x >= 0
* @.post Math.abs(RESULT*RESULT - x) < 1.0e-10.0 */
double sqrt(double x)
```

Now the grayed values in input are limited with precondition.

An alternative way to solve this issue could be the following:
![total square root and special situations](/img/part-4/total_square_root_and_special_situations.png)
```java
// R sqrt(D d) throws e1, e2, e3
double sqrt(double d) throws IllegalArgumentException
```
We could implement the method so that there is no precondition. This however would mean that the method should handle these situations. In this case, in case of invalid input values `d`, the method throws `IllegalArgumentException`.

On the image, the questions mark shows that the grayed out output values on the right are impossible to get as an ouput from the defined method.

## Rules of Thumb for Handling Special Cases

1. Shift the special case to a precondition if it is clear and understandable from the client's perspective.
2. If rule 1 does not work, handle special cases with manageable exceptions, thereby forcing the clients to address them.
3. If rules 1 and 2 do not work, handle the special case in another way (to be revisited later in the course).

## Use of the Exception Mechanism


The exception mechanism's use appears in three parts of Java syntax:

1. **throws**: Indicates in the signature the checked exceptions that the routine may raise.
2. **throw** T: Raises the exception **T** in a special situation.
3. **catch**(T e) {}: Handles exceptions of type **T** that were raised within the preceding **try** block.

The raised exception is an object of the exception class.

- If necessary, define the class.

The following example highlights the possible ways to use exceptions in Java:

```java

class EmptyArray extends Exception {}

float avg(int[] nums) throws EmptyArray { // 1
    int sum = 0;
    if (nums == null || nums.length == 0)
        throw new EmptyArray(); // 2
    for(int n: nums) sum += n;
    return sum / nums.length;
}
void main() {
    int[] nums = new int[] { 1, 2 };
    Float result;
    try { result = avg(nums); } // 3
    catch(EmptyArray e) {} // 3
}
```
Java requires that if an exeption is thrown, it should also be defined in the method's signature (*throws*). In java, also the catch should define correct exception (So in this particular case, if the code would raise some other exception than `EmptyArray`, the `catch` block would not be executed and the code would crash.



## Key Challenges in Defining/Implementing Routines

- Have all 'special cases' and partialities been remembered in terms of the routine's calling situation?
- Is the use of exceptions well-considered?
- Considering side-effects in specification and implementation.
- Can the input or output values be null - are their meanings defined?
- From the perspective of encapsulation, reference value semantics (passing references to be stored within an object) can pose a threat to the implementation of encapsulation (to be addressed later in course when the class formation is discussed).
