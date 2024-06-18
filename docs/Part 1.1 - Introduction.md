---
sidebar_position: 1
---

# Motivation / Background

Software is everywhere, amount of software keeps increasing. Additionally, software seems generally to be becoming bigger and more complex. This raises questions like: Do software work correctly? Are they usable? Programming is about coding, but what about software production?

The course also helps understand the big picture of programming. Object oriented programming is not a perfect solution, not even close, but deepening your knowledge about OO also strengthens your knowledge and understanding. This can also help you figure out if some other (e.g. more functional) approach would be a better option. 

## Java Language

This course uses Java, a language you have used in previous courses and is quite commonly used in the industry. The course continues from OOP, concretizing taught concepts using the Java language. Additionally, a large part of the instructions and structures are applicable to many other languages.For example, if you know Java, it's easy to learn C#, C++, etc.

Java has been around for a long time (often IT products become obsolete in less than 5 years). Java is also a reasonably good teaching language. Additionally, Java is still under active development and have gained quite good features recently.  For example, take a look at [differences between Java 8 and Java 21](https://javaalmanac.io/jdk/21/apidiff/8/).

Screenshot from a [news website](https://www.itpro.com/software/development/java-is-here-to-stay-popular-programming-language-to-remain-on-business-hit-lists-in-2024):
![](/img/introduction/java_is_here_to_stay.png)



## Nearly All Companies are Software Companies

A perplexing trend in recent years has been that many manufacturing industry companies also claim to be software companies!
  - "*In 2021, seven of the world's ten largest companies (Apple, Microsoft, Amazon, Alphabet, Facebook, Tencent, Alibaba) were software companies or their business was based on software.*" (Ohjelmistot Suomessa 2023-2033 - raportti (Software in Finland 2023-2033 Report))

## Software is Really Big and Complex

Some believe that software is among the most complex artifacts created by humans! For sense of scale, some new cars are said to contain over 200 million lines of program code ([source](https://www.embedded.com/vehicles-are-becoming-software-driven-but-go-frugal-on-the-code/)). If printed, the stack of A4 paper would be taller than the world's tallest building.

Additionally,  programming comes in many forms. A short web page code poses a completely different challenge in terms of correctness than, for example, an autonomous vehicle's software.

We could also look at a more recent report (in Finnish) [*Software in Finland 2023-2033*](https://www.dimecc.com/wp-content/uploads/2023/04/Ohjelmistot-Suomessa-2023-2033.pdf):

 - "*All digitalization is implemented with software. Software is everywhere in citizens' leisure time, work, and hobbies, and it processes all their information. Software enables data management, digital operation, and the combining of information in new ways, and is thus central to societal development. High-quality software is a prerequisite for the competitiveness of Finnish companies. Traditional high-technology device manufacturers, such as elevator and forestry machinery companies, often define themselves as software companies. Artificial intelligence applications are software, and new telecommunications applications are software.*"

## Do Software Work Correctly? Are They Good to Use?

It's common to encounter an application where something does not work correctly. Major failures are also reported (e.g., payroll in Helsinki, Apotti?, …). As an additional exmple, the browser used in university computers is updated every 2-3 weeks (errors are corrected …) Security problems are partly due to vulnerabilities, which are programming errors.

## Programming is Coding, What About Software Production?

Although learning programming is at the core of the course, the course is more than just coding skills. We want to remind that this is only a one aspect of software productions. There are also other aspects of software production such as testing, requirement specification, tools, teamwork, design, usability, (agile) development methods, etc.. The image below higlights the complexity of software production (highlighting a development pipeline), and serves as a  good reminder, that, while understanding coding is important for software production, expertise in software production involves much more than coding skills.


![](/img/introduction/software_production_pipeline.png)

What related aspects are then left untouched in the course in related to the big picture of programming? Here is (an incomplete) list:

- Design patterns and software architectures
- Testing (we will include only an introduction to testing)
- Various paradigms
- Different contexts of use (databases, user interfaces, distributed applications)
- Concurrency
- Efficiency, data structures
- Ethics, security, privacy, usability
- Software production, requirement specification
- Mainly Java, not for example memory constraints and real-time (embedded)
- No low-level programming
- Libraries, most things are in libraries
- Tools - debugging?

And yes, software production (and even coding, as you may have noticed on previous courses!) is a super complex topic and even the full five years of university can't cover all aspects fully. But a good news is that you don't need to know everything, after learning the basics you can focus on topics that interests you and are relevant for your work/hobby projects.

## Some Practical Advice

Even when this is a remote course, you need time to learn the topics presented in the course. So allocate time for the course, especially for practice exercises! Use the correct tools – programming skill is also about knowing how to use tools. Consider how to distribute the 135 hours of work (instructional amount of work for 5 ECTS) required by this course.

Also dont be afraid to ask for advice – remember especially the Discord channel.

Now let's dive in to the actual course content. The course has **three main themes**.

They are the following:

1. Principles and applications of the object mechanism (modularity)
2. Object-oriented programming and advanced structures (reuse)
3. Contract-based programming (code correctness)

Each of the three sets of exercises will also focus on one of these themes. In addition there is also a pre-set of exercises, which acts as a introduction to the topic. The pre-set of covers the basics of programming.




# Principles and Application of Object Mechanism (Modularity): 
Main topics of Theme 1:

- Designing a class and classes (divide and conquer). 

This means that the code is not written all in the same class, but instead it is divided logically to enable multiple persons or teams working on a same project. In previous courses, you have learned to use Github, but now the focus is on the design also the code so that it can be worked more easily by multiple people at the same time.

- Encapsulation and class integrity.

Encapsulation of information inside objects allows us to control the access to that data and provide restrictions on how, why and what can edit the said file.

- Class constructions

In Java, there are multiple ways to define classes (e.g. Inner classes). We will dive more deeply into this topic later on the course. 

- Basic properties/attributes/features

The basic properties differ on the selected language.

## Designing a class

Classes and objects are the means in OOP to structure the data being handled. Before a class can be used it must first be designed. This leads us to ask questions:

- How to design a class?

- How to design a class's properties, routines?

- What is the role of exceptions?

- How to structure separate classes?

By following divide-and-conquer approach, one could say that "one class = one clearly defined purpose" is often a good principle. This leads us to **conceptuality**, where each (new) class represents a concept! This will be discussed later in the course more deeply.


## Encapsulation and Class Integrity

Encapsulation and class integrity are important themes. They are aimed to **protecting a class**. This is often achieved by protecting the internal state of an object by limiting access to it and offering and external interface, through which the data can be interacted with.

The idea is that the design of a class defines properties and how objects can be modified.

Encapsulation: *the internal implementation of a class should be replaceable without changing the external interface, there's no need/from outside to know the class's internal implementation structure.* Encapsulation is a form of the divide-and-conquer principle and it is a mean to manage complexity! The concept of protection and encapsulation applies at other levels (e.g. *package*) too.

Generally speaking, direct modifications (unlimited access) to the internal state should be prevented. Additionally, we also want to limit the possibilities to modify the state even indirectly.


## Class Constructions

**Class Constructions**: Various class construction mechanisms have been developed for pure object-oriented programming, tailored for specific purposes. How and when should these class constructions be used?

A few practical examples:

- Inner class: "directly sees inside its outer class"
```java
class OuterClass {
  boolean isRunning = true;

  class InnerClass {
    boolean isSubProcessRunning = false;
  }
}
```

- Literal class (**enum**): precisely defined x number of different instances - e.g., primary colors
```java
public enum PrimaryColor {
    RED, BLUE, YELLOW;
}
```

- Sealed class: designed to model a hierarchy of concepts where inheritance is limited, e.g., a tree structure consists of nodes that can be either internal or leaf nodes. So in a sealed class we can restrict the possible subclasses in the top-class.
  - A practical example excluded for brevity, google if you want to know more!

## Basic Properties:

Basic properties help us to achieve functionality that answers that helps us to answer questions like: 

- When are two objects considered alike?
- How are objects stored in a hash table or a file (or transmitted over a network)?
- How can an object be compared (even ordered in terms of magnitude)?
- How is a copy made of an object?

The basic properties (in this course's context at least) are the basic feature's of Java or have been in the Java long time. These are needed in almost anything that the objects are used.
# Main topic 2 - Object-Oriented Programming and Advanced Structures (Reusability) 

Main focus of Theme 2 will be on the following topics:

- Inheritance (a characteristic mechanism of OO languages)
- Polymorphism and dynamic binding
- Generic abstraction and its usage
- Variance
- Data structures and algorithms & libraries



## Inheritance

Inheritance: *A relationship between classes that signifies a form of reusability.* 
- Abstract and concrete classes: Hierarchies.
- Interfaces: Connectable and referable features.
- Generalization and specialization in terms of features.
- How to design classes using inheritance?
- When should inheritance not be used?

Below is image of that displays some basic hierarchies in Java.
![](/img/introduction/advanced_structures.png)

## Polymorphism and Dynamic Binding

Polymorphism: *The characteristic of 'slots' that contain object values, which allows the value in the slot to be different from the slot's type (a value according to some subtype).*

Idea: An object can appear as an object of its superclass. Static typing guarantees properties concerning the value but does not limit the actual type of the value.

Designing inheritance is also about designing for the use of polymorphism. There is no need to know anything about an object other than whether it implements a feature. Furthermore, dynamic binding determines what is called. Abstract forms can also be reverted back to concrete forms.

A simple example of polymorphism:
```java
class Animal {
    void makeSound() { System.out.println("Some animal sound"); }
}

// Subclasses
class Dog extends Animal {
    void makeSound() { System.out.println("Woof!"); }
}

class Cat extends Animal {
    void makeSound() { System.out.println("Meow"); }
}
```
Then the classes can be used in the following way:
```java
Animal myDog = new Dog();
Animal myCat = new Cat();
myDog.makeSound();  // Outputs: Woof!
myCat.makeSound();  // Outputs: Meow
```
On the course we will look more into the real-use cases as well as limitations that polymorphism has!

## Generic Abstraction and Its Usage

Generality is expressiveness. Generality is used to e.g. remove unnecessary redundancy from code.
For instance, mathematical operations work with both integers and floating-point numbers, as well as rational numbers, numbers of different precisions, etc.

Other concrete use case for generic abstractions could be data structures: sequences, stacks, arrays, trees, etc., which are often defined independently of the types of elements they contain.

This leads us to question: how should generality be used in class design and how should it's expressiveness be utilized?

A simplified example below:
```java
// Generic data structure - a simple generic stack
class GenericStack<T> {
    private java.util.ArrayList<T> elements = new java.util.ArrayList<>();

    public void push(T item) {
        elements.add(item);
    }

    public T pop() {
        return elements.remove(elements.size() - 1);
    }

    public boolean isEmpty() {
        return elements.isEmpty();
    }
}
```
And how the  example class could be used:
```java
// Using generic stack with Integer
GenericStack<Integer> intStack = new GenericStack<>();
intStack.push(10);
intStack.push(20);
System.out.println("Stack pop: " + intStack.pop()); // Outputs: 20
```

## Variance

Data structures may also assume something about the values they store (limited generality, variance), allowing for richer functionalities.

For example, a set of integers and a set of floating-point numbers could be combined into a set of numbers (generality without variance essentially forces deconstructing the sets and reassembling them).

## Data Structures and Algorithms & Libraries

On this course data structures and algorithms is just means to demostrate on how to integrate object-oriented programming, generality, variance, and algorithm implementation.They are also used to display what possibilities, benefits, and disadvantages do possible solutions have.

Most of the expressive power related to the language is in libraries! This is also the case with Java! Use of libraries is generally quite popular in programming. For example, in web development, people often talk about a specific JavaScript library (e.g. React) instead of the programming language itself.


## Main topics of Theme 3 - Programming by Contract (code correctness):

The programming by contract is also known as the following terms, design by contract, contract programming, and design-by-contract programming, but we will be using mainly the term *programming by contract*.

**Specification** forms a contract between the routine (class etc.)
client ja implementor. Contracts are boolean expressions. (In the most formal form) can even be executed and evaluated like other program code. In short, specification is meant to convey what the code is supposed to do

We also look contracts in routines and in object-oriented programming.
Further we will also dive in to relationship between specification and software testing as well discuss about side effects and exceptions.

Semantics of settings: misunderstandings are a common source of errors. How to ensure that different actors speak "the same language"?

- Can code function correctly if its correctness is not described in any way?
    - --> The operation of the software is to be described, documented.

Agile favors code over documentation, preferring self-documenting code ?? (can it be achieved or is it a myth?)


Here is a humorous image that aims to map different methodologies:
    
![](/img/introduction/mapping_of_methodologies.png)

The reasoning behind these (humorous) classification is the following: 

[Spaghetti](https://en.wikipedia.org/wiki/Spaghetti_code): Spaghetti code  does not follow any paradigm and is difficult to maintain. For some examples you can glance at e.g. [thedailywtf](https://thedailywtf.com/).

[Cowboy](https://en.wikipedia.org/wiki/Cowboy_coding): Cowboy coding is referred when programmers have full autonomy over the development progress.

Engineering: Systemic methods, e.g. [TDD](https://en.wikipedia.org/wiki/Test-driven_development), [simulation](https://en.wikipedia.org/wiki/Computer_simulation)

Scientific: Very specific ways to define the code e.g. [formal specification](https://en.wikipedia.org/wiki/Formal_specification), [types](https://en.wikipedia.org/wiki/Model_checking), [total languages](https://en.wikipedia.org/wiki/Total_functional_programming), [theorem proving](https://en.wikipedia.org/wiki/Automated_theorem_proving), [model checking](https://en.wikipedia.org/wiki/Model_checking), [abstract interpretation](https://en.wikipedia.org/wiki/Abstract_interpretation).

On this course we will focus on strengthening the engineering skills, so the focus is in design by contract and to producing more robust code with tests instead of spaghetti or cowboy approach.

## Descriptions of contract-based programming
Contract-based programming: the module's specification is defined separately from implementation is done separately, but so that the implementation matches the specification. Various formalisms exist, but e.g. mathematical formalisms are challenging to apply. On the other hand, informal descriptions are imprecise.

The course has chosen semi-formal techniques, which are not "too mathematical" (= possible to use on with a basis of basic knowledge) or "too heavy" (= specification can be formed relatively quickly). Additionally, emphasis is on techniques that have (at least some) ready-made tools and therefore are easier to apply in practice. 
    
## Contracts: from routines to object-oriented programming

Routine specifications describe the relationship between the initial condition (precondition) and the final condition (postcondition). Object routine specifications relate to the object's state in addition to parameters and return values. Additionally, contracts can be used to create specifications for classes and their inheritance.

The most important for class's contract is its internal state invariance – the idea is that the invariant is something that is always valid regarding the object.

Below is a example of a routine specification. Don't worry about the specifics, the specifications are explained later on the course.
```java
/**
* Returns the square root of x.
* @.pre true (= precondition is always true)
* @.post Math.abs(RESULT * RESULT - x) < 1.0e-10
* & RESULT >= 0.0, or x < 0 -> raise exception
*/
public float sqrt(float x) throws NegValueException
```

## Contracts and testing

Specifications by contracts solve one aspect in testing. However, software development is difficult, and errors happen. Therefore testing is an excellent safety net for finding incorrect behavior

We will also explore the connection of contract-based programming to unit testing. If the specification conveys different meaning compared to the actual implementation, then which is wrong?
    
## Side effects, exceptions

A large part of the procedures (naturally) is implemented as side-effects. Side-effects often behind programming errors. Inadequate understanding of reference and value semantics is a (common) source of programming errors.

Let's look at a brief example:

If we change a primitive data type, the the value changes:
```java
// Example with primitive data types
int a = 10;
int b = a;  // b is a copy of the value of a

System.out.println("Before change:");
System.out.println("a: " + a); // 10
System.out.println("b: " + b); // 10

// Changing b does not affect a because they are independent values
b = 20;
System.out.println("After change:");
System.out.println("a: " + a); // 10
System.out.println("b: " + b); // 20
```

And if we look at a object changed in a similar way, we notice that the behaviour is different, as the the value (object `person1`) itself is not copied, only the reference to the object.

```java
Person person1 = new Person("Alice", 25);
Person person2 = person1;  // person2 is a reference to the same object as person1

System.out.println("Before change:");
System.out.println("Person1: " + person1); // Person1: Name: Alice, Age: 25
System.out.println("Person2: " + person2); // Person2: Name: Alice, Age: 25

// Changing person2's name also affects person1 because both reference the same object
person2.setName("Bob");

System.out.println("After change:");
System.out.println("Person1: " + person1); // Person1: Name: Bob, Age: 25
System.out.println("Person2: " + person2); // Person2: Name: Bob, Age: 25
```


Next let's discuss briefly about exeptions and error handling. Sometimes a procedure is supposed to fail, e.g. by raising exceptions. Situations where exception could be raises could be, for example, some of the following: call is not answered, a break in bank connection prevents card purchase, disk space runs out, … As these examples highlight, problems can be anticipated in advance.

It's also good to recognize when an procedures only observes data and when it might modify it. Similarly, for example, printing to a screen and printer changes the physical world irreversibly, even if the computation would be reversed.