# Generics

## Today's Topics:

- Generics
- Motivating example
- Generics and polymorphism
- Generics in Java
- Specification of a generic abstraction
- Use of a generic abstraction
- Examples
- Example: Java implementation problems

## Motivating example

Lets create a data container **Pair**, for storing any polymorphic pair of object references.

In the example A and B are auxiliary classes and the implementation is very simple. Most likely there would also be for example get and set methods in the implementation.

Class definitions:

```java
class A { }
class B { }
class Pair {
    Object x, y;
}
```

TWe can see the following problem in the next example: if we set A and B as values of x and y and try to access the data, java has lost the information of what is stored inside the pair object. This is the main problem that generics tries to solve. In other words the problem is that every time we store data inside a class we may have lost the type of the data when trying to access the data of the class.

Usage:
```java
void main() {
    var pair = new Pair();
    pair.x = new A();
    pair.y = new B();
    A a = (A) pair.x;
}
```

- **A a = (A) pair.x;**

Idea: Convert the type (Object → A), trust that the conversion always works.

Problems: prone to errors and relatively slow.
1) How the Java Virtual Machine works: check and raise `ClassCastException` if necessary
2) After the conversion, the possible dynamic binding is made
3) During development, the tools (IDEs) may not notice the incorrectness of the conversion


Another way to implement this is to program checks that check for the type of data. This way the program doesn't crash because we have planned for the x to possibly be some other than type A.

Usage:
```java
void main() {
    var pair = new Pair();
    pair.x = new A();
    pair.y = new B();
    A a = pair.x instanceof A ? (A) pair.x : null;
}
```

- **A a = pair.x instanceof A ? (A) pair.x : null;**

Idea: check if you can convert, convert only if possible

Problems: slower than before, still prone to errors
1) The type conversion is checked once or even twice if the conversion is successful
2) The right side of instanceof can be mistakenly referred to incorrectly (e.g. pair.y)


Solution to these problems is to create a new reference **px** wich is of type A.

Usage:
```java
void main() {
    var pair = new Pair();
    pair.x = new A();
    pair.y = new B();
    A a = pair.x instanceof A px ? px : null;
}
```

- **A a = pair.x instanceof A px ? px : null;** (Java 14+)

Idea: check if you can convert. Convert only if possible + new reference

A slight improvement on the previous one
1) As slow as traditional instanceof
2) Works as long as you remember to use px, the risk of error decreases

Generics tries to remove these problems. We can define the **Pair** class so that it "knows" what kind of information is stored within it. And when an object is created from the class, the types of the variables are bound staticly. 


Class definition:
```java
class A { }
class B { }
class Pair<First, Second> {
    First x;
    Second y;
}
```

Usage:
```java
void main() {
    var pair = new Pair<A, B>();
    pair.x = new A();
    pair.y = new B();
    A a = pair.x;
}
```

• **A a = pair.x**; and generic definitions (1) class 2) object creation)

Idea: type information of members part of class type, not Convert

Improvements to the previous ones
- The compatibility of the types in the set sentence is already checked in the translation, before running the program and before running the tests!
- Types do not need to be converted, dynamic binding can be avoided at best
- Code refactoring is safer

## How and when to use generics?

The example described above brings out two things that are typically aimed at with genericity:

```java
class Pair<First, Second> {
    First x;
    Second y;
}
```

Generalizing the definition
- abstracted to cover different data types
- the same implementation is suitable for different types

    (format = other code except type signatures)

```java
class A { }
class B { }
var pair = new Pair<A, B>();
var pair2 = new Pair<B, A>();
var pair3 = new Pair<A, A>();
```

 Using the same definition in different contexts with different compatible data types so that accurate information of the types is preserved.

## Generics and polymorphism

Polymorphism with subtyping
- inheritance and polymorphism allow methods to accept different concrete types (subtypes) according to an interface BUT:
- only a static type can be assumed from a polymorphic input value and
- polymorphic method calls require (slow) dynamic binding
(when the left side of the method call is polymorphic)

The parameter `object` can refer to different types of objects:

```java
abstract class X { abstract void x(); }
class Y extends X { @Override void x() { System.out.print("y"); } }
class Z extends X { @Override void x() { System.out.print("z"); } }
```

```java
void method(X object) { object.x(); }
```

Polymorphism with subtyping
- Parametric polymorphism (“genericity”)
    - In Java: parameterization of types (classes/interfaces) (+ methods)
    - a more precise static type can be bound at compile time.
    - method calls can be made with (more efficient) static binding.

The parameter `object` can refer to different types of objects:

```java
class Y { void y() { System.out.print("y"); } }
class Z { void z() { System.out.print("z"); } }
```
```java
<X> void fill(X[] objects, X object) {
    for(int i=0; i<objects.length; i++) objects[i] = object;
}
```

## Generics in Java

The roles of using generics are analogous to those of methods and classes.

![](/img/part-16/generics.PNG)

(Genericity works on a meta level - above results in a class that is usually still instantiated)

## Specification of a generic abstraction

In Java, two types: generic class / method

Formal type parameters
- are presented after the type **in angle brackets** `<>`, separated by a comma
- positioned after the class name / before the return value of the method
- **named** similarly as method parameters
- appear in the definition area like method parameters inside the method
- the parameter is still a black box inside the definition, without the limitations of generics
- limited oper. for parameter: `(X)` and `instanceof X` work, `new X(..)` and `new X[]` don't!

Generic class: (`class NAME<G-PARAMS> { BODY }`)
```java
class Generic<G> { List<G> data; Generic(G d) { data.add(d); } }
```

Generic method: (`<G-PARAMS> RETURN TYPE NAME(PARAMS) { BODY }`)
```java
<G> G loop(G g) { return g == null ? loop(g) else g; }
```

## Use of generic abstraction

```java
TypeToBeParametered<TypeArgumenti1, TypeArgument2>
```

- A generic instance of a class or method, where each generic parameter of the abstraction is replaced with the corresponding generic argument. (cf. calling a method)
- Instantiation = doing, e.g. method call, class creation, defining a second generic type
- As a result, a concrete class or method
- Type arguments
    - be concrete or so-called free type (?)
    - primitive types do not work though! (array works - array can be a generic type parameter, but the elements of arrays cannot be generic)
    - **enum** or table act as arguments, although not as a basis for generic specifications

Generating and shuffling a generic Integer list:

```java
var list = new ArrayList<Integer>(1, 2, 3); // gen. creating a class
Collections.<Integer>shuffle(list); // gen. method call
```

## Benefits of generics

- Helps to focus on the implementation of data structure behavior
- Makes it easier to generalize the class
- Leads to universality
    - the selection of features is defined independently of the specific context
- Defining the properties of type parameters provides insight into the role of a generic class in the class hierarchy
- Type safety and efficiency

## Example: Generic pair

Generic Pair class

- type parameters **S** and **T**
- binds together two references of different types

```java
public class Pair<S,T> {
    private S first;
    private T second;
    public Pair(S s, T t) { first = s; second = t; }
    public S getFirst() { return first; }
    public T getSecond() { return second; }
    public void setFirst(S e) { first = e; }
    public void setSecond(T e) { second = e; }
}
```

Examples of generating generic pairs:
1) a string and a Double floating-point number
2) a pair of integers
3) Double floating-point number and a pair of strings (so a pair recursively!)

```java
void main() {
    // Pair<String, Double> would be handy to name as "type variable"
    Pair<String, Double> p1 = new Pair<String, Double>("foo", 43.2);
    Pair<Integer, Integer> p2 = new Pair<Integer, Integer>(1, 2);
    Pair<Double, Pair<String, String>> p3 =
        new Pair<Double, Pair<String, String>>(19.1,
            new Pair<String, String>("ab", "ba"));
}
```

Diamond Notation (`<>`)
- generic types are inferred from the context inside the `<>` signs (the left side of the = sign)
- note! creating a generic object without `<>` characters is an error, resulting in a warning

```java
void main() {
Pair<String, Double> p1 = new Pair<>("foo", 43.2);

Pair<Integer, Integer> p2 = new Pair<>(1, 2);

Pair<Double, Pair<String, String>> p3 = new Pair<>(19.1, new Pair<>("ab", "ba")
);
}
```

Java 10+: type for local (= inside a method ) variables in the left of =  can be deduced (var).

```java
void main() {
// Pair<Integer, Integer> deduced
var p1 = new Pair<>(1,2);
// Pair<String, Double> deduced
var p2 = new Pair<>("foo", 43.2);
// Pair<Double, Pair<String, String>> deduced
var p3 = new Pair<>(19.1, new Pair<>("ab", "ba"));
}
```

## Example: Generic method and class

A generic method can be defined in a generic class.
- In the Connector class, the visibility of the type parameter S is the entire range of the class and T only appears inside method foo

```java
class Pair<S, T> {
    S s; T t;
    Pair(S s_, T t_) { s = s_; t = t_; }
}

class Connector<S> {
    S first;
    Connector(S first) { this.first = first; }
    <T> Pair<S, T> foo(T t) { return new Pair<>(first, t); }
}
```

## Example: Java implementation problems

Java's implementation of genericity doesn't always convey the exact generic parameter type information (reifed generics) on the use side, which results in problems unlike, for example, in the languages C# and C++:

```java
class GenericArray<T> {
T[] array = new T[] {}; // Cannot create a generic array
}
```

And also in this case:

```java
class Container<T> {
T t = new T();  // Cannot instantiate, T's concrete type is
                // not fully known at runtime
}
```

Next up: [Part 4.5 - Generics and Variance](Part%204.5%20-%20Generics%20and%20Variance.md)