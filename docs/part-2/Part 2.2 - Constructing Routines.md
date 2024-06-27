---
description: Routine construction and specification.
---

# Constructing routines

Today’s topics
- Constructing routines
- Routine specification
- The significance of routine definition

## The desired outcome

Each routine should have one clear purpose. The routine represents some functional concept. The name of the routine should create and reflect the method's meaning. The rules on how methods should be written differs.

The implementer should not (for the most part) need to know how the routine is used. This leads us to a principle called **Encapsulation**. The benefit of encapsulation is that the method's caller does not need to know how the routine is implemented. 

For a more concrete example, if you are sorting an array using a predefined library, you do not need to know the specific implementation, only what are the preconditions and what are the postconditions (e.g. does the sorting method return a new array or mutate the original).

Additionally, often it is preferable to have many 'moderately small' clearly stated routines rather than one complex routine that implements many things (divide-and-conquer). If the routine is overly complex, and contains multiple different functionalities, it can often be used only in very specific scenarios, leading to duplicate and hard-to-maintain code.

**Signature** is the interface between the routine’s caller and implementer. It defines what functionality is the responsibility of the routine, what is excluded, and what is handled as a special case. An example of a routine is presented later on this lecture.

an example of a signature in Java: 
```java
public float sqrt(float x) throws IllegalArgumentException
```


Side effect management is a significant challenge in defining definition and correctness.


## Routine specification

Let's look at the following example:

```java
/**
* Returns the square root of x.
* @.pre true (= precondition is always true)
* @.post Math.abs(RESULT * RESULT - x) < 1.0e-10
* & RESULT >= 0.0, or x < 0 -> raise exception
*/
public float sqrt(float x) throws NegValueException
```

**Definition** of the above example is on the lines 1-6 (the comment). It should be noted that this definition is partly unformal (e.g. the postcondition '*, or x < 0 -> raise exception*'). If the pre and postconditions would result in boolean values, the contract would be formally defined. However, as this method is aimed to be readable by a human, and not by a machine, this approach is fine. 

If we look at the example more closely, The specification above constructs from the following parts:

Verbal description:
`Returns the square root of x.`

Pre-condition:
`@.pre true (= precondition is always true)`

Post-condition:
`@.post Math.abs(RESULT * RESULT - x) < 1.0e-10`

The method's signature is the following
```java
public float sqrt(float x) throws NegValueException
```

We can also look more closely to the method's signature:

access modifier: `public`

result type: `float`

method name: `sqrt`

parameters: `float x`

throwable exceptions: `throws NegValueException`

In Java, a method's signature is part of the programming language itself. It specifies:

- The name of the method
- The data types of input and output values
- The method's visibility (in a class context)
- Exceptions raised by the method (only in error situations)
- Generic types (not shown above, will be discussed later)

As an additional side-note, the names of the parameters are not particularly significant in Java's signature!

All methods have some sort of definition, which is **clarified** by the preconditions, postconditions and by the verbal description of the routine.
- Precondition: when it can be called
- Postcondition: what happens after the method has been called (e.g. the method returns an new array of students sorted by surname.)

## The Significance of Routine Specification

Routine specification can be seen as a communication between the routine and the client. Additionally, the implementation is freely modifiable, as long as the specification of the routine remains unchanged.

The routine's caller does not need to know the implementation (sometimes they don't even have access to it)

- Planning and Documentation
    - Planning is possible with just routine specifications
    - The same specification formalism throughout the project
- Expectations
    - What does the implementer commit to?
    - Well defined routine specifications leads to general usability and reusability.

Functionality of a routine can be verified with the routine specifications. One relevant question is does the implementation match the specification? If the specification is good, it can, for example, make writing unit tests easier. Additionally, in some languages and/or plugins, the specification can be automatically tested to make sure that the implementation follows the specification, thus making the code more robust.

On the other hand, if the specification is missing or it is inadequate, the specification cannot be objectively verified. This leads to problems, especially in large and/or old projects. As a more concrete example, imagine joining into a 10-year-old project as a software developer. On your first day, you would notice that there is very little to no comments on the code. Maintaining or extending the code would be a nightmare!


Routine specification also aims to give means to locate possible errors. The specification tries to provide "boundaries" for correction. If everything worked before the method was called and the precondition was fulfilled, if the method does not follow the postcondition, the error is most likely withing the routine specified by the specification. 

As an additional side note, older code is often more reliable than new. Of course there are exceptions on this, as e.g. dependencies get major updates and require changes to the old code that uses them.

In object-oriented programming, the routine specification in the context of classes, tries to affect the selection of characteristics and roles. There is also the additional challenge of ensuring class encapsulation. In the case of inheritance, there's a separate agreement between the inheritor and the inherited class.
