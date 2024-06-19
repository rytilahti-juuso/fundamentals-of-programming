# Data types and variance

Todays topics
- Data types and variance
    - Subtyping
    - Liskov substitution principle
    - Variance
    - Variance rules

We have covered object-oriented programming through the use and behavior of objects. Now we are going more to a meta-level where we are speaking of types that cover the different objects and classes.

## Subtyping

Subtyping is a feature in languages that uses types and hierarchical type system where you can form a relation between two different types. Some languages (for example functional or low level languages) don't have typing mechanisms ans thus no subtyping.

- Syntax: **`Subtype <∶ Overtype`**
- Binary relation `<∶`
    - reflexive (**`A<∶A`**)
    - transitive (**`A <∶ B`** and **`B <∶ C`** ⇒ **`A <∶ C`**)

- Java links subtyping **`A <∶ B`** strictly to the inheritance relationship of classes:
**class A extends B**
    - Same also for interface classes: `implements` / `extends`.
    - Note! Also objects and function literals of the anonymous class

## Liskov substitution principle

Barbara Liskov (1987):

"What is wanted here is something like the following substitution property: If for each object **o<sub>1</sub>** of type **S** there is an object **o<sub>2</sub>** of type **T** such that for all programs **P** defined in terms of **T**, the behavior of **P** is unchanged when **o<sub>1</sub>** is substituted for **o<sub>2</sub>**, then **S** is a subtype of **T**."

Describes the mechanism of implementation of `**S** <∶ **T**` based on the desired **behavior** when **o<sub>1</sub>** and **O<sub>2</sub>** are objects of **S** and **T**.

The described situation occurs in connection with polymorphism, eg. when a method defined by a certain signature deals with objects of the subclasses of the classes it lists.

## Subtyping and inheritance

How is the type theory described above used correctly?
- Subtypes behave according to their supertype definitions.
- The inheritor is a subtype of the class it inherited: **`Subclass <∶ Superclass`**
- The inheritor follows the definitions of methods of the class it has inherited.
    - Automatically implemented for methods that are not overriden.
    - Definitions of methods that are overriden are compatible (Java quarantees for signature).
- Design by contract defines a more specific set od rules for the pre- and post-conditions and class invariant in inheritance.

## Consequences of the substitution principle

The relation between superclass and subclass is not symmetric
    - **Employee** may replace **Person**.
    - **Person** cannot replace **Employee**.

For example, every employee is a person by every person may not be an employee.

Superclass cannot be aware of
    - what classes are (or will be) inherited from it (except `final` / `sealed class`, `record` & `enum`)
    - what (dynamically bound) features they override.
An operation can be invoked via a supertype reference
    - without having exact knowledge of the location of the implementation (dynamic binding is always applied, excl. `final` / `private` / `static`)
    - Thus, the call mechanism is separated from the operation being executed.

## Variance

**Order of types** (≤): A partially ordered set of all subtype relations described by the program definition.
E.g. `{ Object <: Top, Upper <: Ali, Object <: Ali, ... }`

**Variance** describes the order of the two types in relation to the prevailing order of types (≤).

Determines the compatibility of types, e.g. when replacing a method.

Next, let's look at the applications of variance rules that are consistent with with the principle of substitution.

## Covariance

**Covariance** refers to a type rule that preserves the order of types.

In the next example, **`GoodSolution <∶ Solution`**

Covariance is applied to the type of the return value.

The post-condition is thus tightened; a smaller set for selecting the type of a return value:
**`{Solution, GoodSolution} ⊆ {GoodSolution}`**

```java
interface Solution { String giveSolution(); }
interface GoodSolution extends Solution { String reason(); }
class Student {
    Solution doExcercise(Excercise e) { ... }
}
class GreatStudent extends Student {
    @Override GoodSolution doExcercise(Excercise e) { ... }
}
```

Covariance tightens the post-condition. The post-condition of the agreement will be specified by adding new subconditions with &&-connector.

```java
interface Solution { String giveSolution(); }
interface GoodSolution extends Solution { String reason(); }

class Student {
    /* @.post RESULT != null */
    Solution doExcercise(Excercise e) { ... }
}
class GreatStudent extends Student {
    /* @.post RESULT != null && RESULT.giveSolution().length > 100 */
    @Override GoodSolution doExcercise(Excercise e) { ... }
}
```

## Countervariance

**Contravariance** refers to a type rule that reverses the order of types.

In the example, **`EasyExcercise <∶ Excercise`**

**In override the type of parameters cannot change in Java**, but logically in pairs contravariance of the corresponding parameters would be justified.

The pre-condition would therefore be loosened. Objects from a wider range of classes would be accepted.

```java
interface Exercise { String description(); }
interface EasyExcercise extends Excercise { String hint(); }

class Student {
    Solution doExercise(EasyExercise e) { ... }
}

class GreatStudent extends Student {
    @Override Solution doExercise(Exercise e) { ... }
}
```

The pre-condition clause `instanceof` accepts a wider range of types: **`{EasyExercise} ⊇ {Exercise, EasyExercise}`**

```java
interface Exercise { String description(); }
interface EasyExcercise extends Excercise { String hint(); }

class Student {
    /* @.pre e instanceOf EasyExcercise */
    Solution doExercise(EasyExercise e) { ... }
}

class GreatStudent extends Student {
    /* @.pre e instanceOf Exercise (= always true) */
    @Override Solution doExercise(Exercise e) { ... }
}
```

## Invariance

**Invariance** refers to a type rule in which the type does not change.

In the next example invariance is applied to `towho` type of the `doWork` parameter:

```java
class Employer {}
abstract class Employee {
    abstract void doWork(Employer towho);
}
class OfficeWorker extends Employee {
    @Override void doWork(Employer towho) { ... }
}
```

- Note! In Java, invariance is always applied to parameters when overriding.
- The use of `@Override` is always recommended, otherwise it is easy to mistakenly overload instead of override.

## Variance rules

Override
- Parameters: invariance (in Java!)
- Return value: covariance
- Exceptions: covariance (only same/subtypes can be raised)
Note! also via inclusion, **`A <∶ B ⇒ E(A) ⊆ E(B)`**, i.e. can not raise new exceptions that are not covered in the superclass declaration!

- Design by contract (inclusion relation):
    - Pre-conditions: contravariance (looser)
    - Post-conditions: covariance (tighter)
    - Class invariant: covariance (tighter)

- Arrays: covariance (problematic)
- Assignment: covariance (setting to more general type)
• Visibility attributes: contravariance (looser)


Below is an overview of different types of variance.
![](/img/part-15/invariance.PNG)

Next up: [Part 4.4 - Generics](Part%204.4%20-%20Generics.md)