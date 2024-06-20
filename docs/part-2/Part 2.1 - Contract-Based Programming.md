---
description: test description
---

# Contract-Based Programming / Design

**Methodology** aims for correctness. 

**Component**  examines routines and classes. Component is a concept that describes a self-contained piece of software in which the components are strongly interconnected and the links between the components are looser, allowing the software to be assembled from the components, and also allowing the components to be interchangeable. Component can be small, but in practise components are bigger than a couple of methods e.g. they might contain multiple classes. In java a typical component could be e.g. a package that contains multiple classes.

Components can be examined in two different ways: client relationship and inheritance relationship.

**Specification** forms a **contract** between the (software) component's client and **implementor** (**interface**). In this context interface could be described as a communication layer between two different entities. Later in this course the term interface will also be used in a slightly different context.

If the  component is not defined, can it even function incorrectly? On the other hand, if code follows the specification exactly (code === specification), then the code cannot function incorrectly! This might not matter so much on smaller projects (e.g. solo hobby projects), but when the scale (and the team size) grows, the need for the code to follow the specification becomes more important as well! As a more concrete example, think if the library you used to e.g. sort an array would cause an undisclosed side-effect?

**redundancy**: e.g. verbal definition of a program code (e.g. method), and unit tests represent redundancy. – similar to strong typing for variables (e.g. `int num`). For example if we first define a method with comments and then implement the method. If the method follows the code exactly, there is redundancy on the comment and the implementation. Redundancy is not a bad thing in this context, as it increases the reliability of the code.

## Using Contracts in the Course

At first we will have a a brief introduction to specification, correctness, and contracts (this tutorial). The objective is to provide a new, correctness-emphasizing perspective on the subject matter.

Contract is a mean to implement the *divide-and-conquer*-approach and break down (complex) design tasks.

This course focuses on understanding the idea, using non-formal specification. (this will be discussed later during the course). 

In the context of object-oriented programming theory, rule descriptions will be used to explain the theory in practice. In this context the objective of the rule description is to document and explain the operation of object concepts in a more formal way.

At the end of the course, there will be a review of the use of contract-based programming. Its objective is to give you the ability to design your own contract terms and link them to implementation.

Using contract-based programming can be taken even further:
- Formal specifications can even be verified, e.g., at the compilation stage (~meta-level).
- Specifications enable writing (unit) tests for the component. 
- Specifications can also assist in designing tests.
- In the future they could maybe be utilized using Large Language models. NOTE: there are risks based on this approach (mainly hallucination).

## Example: Contract Specifications
Let's look at couple an example:
```java
public class InsertionSort {

    /** Method 'sort'
        Meaning: Sort integers in ascending order using insertion sort.
        Parameter numbers: a vector containing the numbers to be sorted.
        Precondition: 'numbers' is not null; 'numbers' contains only
        Integer-type objects.
        Postcondition: Returns a new vector where 'numbers'' integer objects are sorted in ascending order. Does not
        modify the 'numbers' vector. No side effects.
        Stable (with respect to equal elements).
        Exceptions: none.
    */
    public static Vector<Integer> sort(Vector<Integer> numbers)
```

The method names in the contract specification (e.g.`Method sort`) is in this case an unnecessary redundancy, as java defines the method name in the method's signature. It is included here as an example, as what is included in the specification depends also on the information the programming language itself conveys.

The contract-based programming adds to the comment the `precondition` and `postcondition` and `exception`.

The `precondition` is a list of conditions that must be fulfilled in order to ensure that the program executes correctly.

The `postcondition` is important, as it can convey information e.g. if the method returns a new array, or mutates e.g. an array given as a parameter. This information might be useful, if e.g. one wants also to preserve the original array for some other purposes, e.g. displaying it based on multiple different sorting options (e.g. name, profession, etc.).

Additional note: Stable means that if the elements are equal, their original order remains.

## Example: Contract Specifications #2
```java
    /** Method 'findPosition'
        Meaning: Returns the position in 'vec' where inserting 'elem' would
        keep 'vec' sorted.
        Parameter vec: An integer vector to search for 'elem''s position.
        Parameter elem: The integer for which a position is sought in 'vec'.
        Precondition: 'vec' and 'elem' must not be null. All elements of 'vec'
        and 'elem' are Integer-type objects.
        'vec''s elements are in ascending order.
        Postcondition: Returns the integer position of the first element in 'vec'
        that is greater than 'elem'. If none are greater, returns the size of 'vec'.
        No side effects; does not alter 'vec' or 'elem'.
        Exceptions: none.
    */
    public static int findPosition(Vector<Integer> vec, Integer elem)
```

Please note that the specification might also be not dependent only on the code it describes, but also the writer of the specification. Exact wording might differ between specifications of the same code from different writers.

As an additional side note: In java, that elements can be null requires that they are based on objects. More specifically, if the `elem` would be `int` instead of `Integer` it could not be null in any situation.

## Contract Implementation

Roots trace back to the 70s to the works of E.W. Dijkstra, who created a kind of foundation for the Science of Programming direction. Background: *Bertrand Meyer / Eiffel Software 1986: Design by Contract*.

Examples of contract implementation in languages
- Directly in the language (e.g., programming language `D`)
- Separate library (e.g., Java)
- Separate precompiler
- Comments (= not officially supported by the language). The comments are only instructions to the people reading the code. This is also the way contracts are mainly used in this course. Java takes this into consideration using signatures, which will be covered later on the course.


## What do routine contracts address?
- Input

    - Allowed input values and meaning of the input values.
    - **Preconditions**

- Result/Output

    - Allowed result values and the meaning of the result.
    - **Postconditions**

- Other Aspects that need to be considered when creating the specification

    - How complete is the specification?
      - All possible scenarios are impossible to cover!
    - Error and exception situations
    - Invariants
    - Side effects
    - Efficiency: time, and space complexity
    - Methods of objects: the object itself is also an input and a result!
   

It should also be noted that in this course we probably go further than is necessary in real-life scenarios. However using (at least partially) contracts can and probably will be a beneficial tool for programming, especially on larger projects. Need of good documentation of the code can also be seen if you e.g. want to re-start developing a hobby project after taking a longer break of its development. 


# Obligations as Contracts
|            | Obligations                                          | Benefits                                                   |
|------------|------------------------------------------------------|------------------------------------------------------------|
| Customer   | The precondition must be valid before the call      | After the call, the postcondition is valid                 |
| Implementer| The implementation must bring the postcondition into effect | Situations pruned by the precondition do not need to be addressed |

defining the postcondition is often easier, because the precondition can often exclude complex scenarios.

Another way to formulate:

- What does the contract expect as input?
- What does the contract guarantee as output?
- What does the contract maintain?