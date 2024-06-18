
# Constructing groups of classes

Today's Topics:

- Constructing groups of classes
- Reflection on general advice

## Motivational Example:
Let's model a library management system that maintains information about books and library users. (Sharvit 2022)

Our example includes:

- Two types of library users: members & librarians.
- Users can log in with an email and password.
- Members can borrow books.
- Both members and librarians can search for books by name or author.
- Librarians can block members or remove a block (e.g., overdue book).
- Librarians can list a member's current loans.
- A library can have multiple copies of the same book.
- Books belong to a physical library building.


## Task:
What kinds of classes, class attributes, and features can you think of? What about the relationships between classes?

Next we are going to (lightly) inspect a set of different tools and techniques that aim to ease the design process.

### Entities and Relations
The entities and relations of the example could be presented in the following way:

![](/img/part-6/entities_and_relations.jpg)

The black dimond (♦) means that element is constructed from smaller components. The diamond points to the parent/target class. In this case *Catalog* consists of many books. There can't be a catalog, if any Books are not present.

The lighter (white) diamond represents that the class can use the element, but it does not necessarily contain an instance of it.

The arrows show description of usage.



### Traditional Object Model

![](/img/part-6/traditional_object_model.png)
There are classes that are deeply interconnected. The model becames quite easily quite complex.

### Data-Oriented View
There is also data-oriented view. Notice how the arrows are going only to one direction.

The relationships of data and the operations are presented separarately.

![](/img/part-6/data_driven_view.png)

## Traditional Object Modeling

The Object-Oriented Thought Process (Weisfeld 2013):

*Rather than using a structured, or top-down, approach, where data and behavior are logically separate entities, the OO approach encapsulates the data and behavior into objects that interact with each other.*


*The elegance of this mindset is that classes literally model real-world objects and how these objects interact with other real- world objects. These interactions occur in a way similar to the interactions between real-world objects, such as people. Thus, when creating classes, you should design them in a way that represents the true behavior of the object.*

However, this approach can be a bit naïve, and will be revisited later in the course.

## Data-Oriented View

Data-oriented programming (Sharvit 2022):

Data-oriented (DO) programming separates executable code from data. This separation makes the system easier to understand and more flexible. DO is against encapsulation.

- Between classes containing methods, only UML's usage arrow is used.
- Between data-containing classes, only UML's association (diamond) and composition (black diamond) are used.
- Association = objects are independent.
- Composition = an object's existence depends on another object.

DO has advantages with code parallellization, synchronization, efficiency, and determinism. These are not the main themes of this course, but they are important aspects when trying to create robust and efficient programs.

## Object-Oriented Software Construction
We could also look at a bit older design principles presented in Object-Oriented Software Construction (1997):

- Ideal class
    - Clearly describes an abstraction.
    - Name is a noun or adjective, describing the abstraction.
    - Represents a set of possible objects or a single object.
    - Methods for queries.
    - Commands to change the state.
    - Abstract properties (contracts).
- Types of classes:
    - Analysis class: directly from the task definition, describes an abstract or concrete concept.
    - Design class: no direct counterpart in the modeled problem, facilitates implementation (e.g., iterator).
    - Implementation class: frequently needed “lowest level” class, e.g., data structures.

## Course Book
Contract-based object programming in Java - chapter 4:

- Bottom-up and top-down design.
- A class is built around the information it's envisioned to contain.
- Define the content of information, then the handling routines.
- In a inheritance hierarchy, a feature is moved as high as it still fits into the whole.
- In a client diagram, a feature should be placed in the "most primitive" client where it still has relevance. ("primitiveness": the implementation of class A is based on class B, whose implementation is based on class C – C is the most primitive)

However, inheritance is not a problem free approach. Other possible approach in OO programming would be not to use top-down design, but use interfaces instead. Or one could use data-oriented programming.

## Reflection on General Advice

- Divide-and-conquer - solve the whole by identifying one class at a time?
- How should data related to the (task) description be structured?
    - It’s important that each class implements a clear/unified concept.
    - Often, there is not just one correct solution.

Designing a complex structure is never easy. However, experience helps to make good decisions. Additionally, utilizing design patterns can also prove to be helpful (however they are not the subject of this course).

Furthermore, here are some other methods that have been explored in object-oriented programming:
- **Cohesion metrics**: a cohesive class's parts extensively utilize each other.
    - E.g., methods extensively use the class's instance variables.
    - Aim for a high value of cohesion.
- For a groups of classes, corresponding can be measured with **coupling metrics**.
    - Aim for a low value – few mutual dependencies.
    - Classes are interpreted to implement separate concepts.
    - The nature of coupling (e.g., method reference) varies in these metrics (multiple interpretations).


As you have probably realized by now, there is no silver bullet nor a one size fits all solution! This is also reflected on some of this course's exercises and in programming in general, as the same problem can often be solved in multiple different ways.