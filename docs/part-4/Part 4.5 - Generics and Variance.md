---
description: Generics with inheritance and regarding to contracts. 
---

# Generics and variance

## Today's topics:

Generics and variance
- Generics and inheritance
- Wildcard type
- Type parameter constraints
- Generics as a contract

Examples

## Generics and inheritance

Following is a basic non-generic class hierarchy.

```java
class A {}
class B extends A {}
class C extends A {}
class D extends A {}
class BB extends B {}

var a = new A();
var b = new B();
var c = new C();
var d = new D();
...
```

This class hierarchy is shown as a tree on the following image. The point is to observe than this type of class hierarchy forms one tree like hierarchy.

![](/img/part-17/hierarchy1.PNG)

What if we make this hierarchy generic? The next example covers a case when we have selected a X, not all possible cases. 


The subtypes of a generic type, same type argument.

```java
class A<X> {}
class B<X> extends A<X> {}
class C<X> extends A<X> {}
class D<X> extends A<X> {}
class BB<X> extends B<X> {}

class T {}
var a = new A<T>();
var b = new B<T>();
var bb = new BB<T>();
var c = new C<T>();
...
```
When X is assigned some specific value the hierarchy is very similar to the non-generic case.

![](/img/part-17/hierarchy2.PNG)

Each generic type argument creates a new branch in the inheritance hierarchy.

```java
class Å {}
class A<X> extends Å {}
class B<X> extends A<X> {}
class BB<X> extends B<X> {}

class T {}
class S {}
var as = new A<S>();
var at = new A<T>();
var aat = new A<A<T>>();
...
```

When rype parameters are for example S and T as in our code example the inheritance hierarchy gets much more complicated. Every **generic** instance forms a new branch on the hierarchy. 

![](/img/part-17/hierarchy3.PNG)

- A basic generic type can be instantiated with any concrete type
- Each instantiated type is a subtype of the supertype of the generic class via inheritance
- Two subclasses represent the same type exactly when the type parameters and the generic class are equal.
- These instantiated subclasses form new branches to the class hierarchy, and are only
related via their superclass.

![](/img/part-17/java-hierarchy.PNG)

## Wildcard type

- Java’s generic type parameter is always invariant.
- Type parameters break the supertype–subtype contract

In this example case we have a collection of animals and a collection of dogs. We know that a dog is an animal so it can do everything that an animal can and it may also have some unique capabilities of dogs. 

![](/img/part-17/wildcard.PNG)

- Assume `Dog <: Animal`
- Although (in Java) `List <: Collection`
    - `List<Dog> <: Collection<Animal>` is not true
    - neither is `List<Dog> <: List<Animal>`.
- According to the replacement principle, `List<Dog>` should work with `Collection<Animal>` (methods can be called). But we can see that in Java this is not true.

What if you want to extend the variance property of the information to the structure surrounding it?
- Solution in Java: wilcard type `<?>`

Wildcard type can be used as the type of variables, method return value and parameters and in specific situations as a generic parameter constraint!

Unrestricted format `<?>`:
- e.g. `List<?> foo =` qualifies any list reference

Free type `<? extends Foo>`: covariant
- e.g. the producer - a more specialized producer replaces a more general one

Free type `<? super Foo>`: contravariant
- e.g. the consumer - a more general consumer replaces a more special one

Wildcard type can also be used in the context of generic methods for example:

**`List<Dog> <: Collection<Dog> <: Collection<?>`**

```java
import java.util.List;

class Example {{
    List<?> list = List.of( 9, "hello", new Object() );

    for(Object o: list)
        System.out.println(o);
    }}
```

The next code snippet shows how this is different than `List<Object>`. You cant assign these List variables to a `List<Object>` but assignment to `List<?>` work. Biggest benefit is that we can write generic code with more comlex relations between the types.

```java
class Hammer {}
class Animal {}
class Cat extends Animal {}
class Dog extends Animal {}
class Example {{
    List<Cat> a;
    List<Dog> b;
    List<Hammer> c;
    List<?> x;
    List<Object> y = a; // error!
    x = a; x = b; x = c; // ok
}} 
```

### Variance rules of generics

Generic parameters: invariants
- Applies to `C <: B` and `B <: A`, but not `MyList<C> <: MyList<B>`

```java
class A {}
class B extends A {}
class C extends B {}
class MyList<X extends B> {}
```

```java
// MyList<A> a = null; //  not even A :< B
MyList<B> b = null;
MyList<C> c = null;
// b = c; fails even if B <: C
// c = b; fails as expected
```

### Variance rules of the wildcard type

Wilcard type `<? extends Foo>`: covariant
- For example we can imagine a producer of something

```java
class A {}
class B extends A {}
class C extends B {}
class MyList<X> {}
```

```java
MyList<? extends A > a = null;
MyList<? extends B > b = null;
MyList<? extends C > c = null;
a = b;
b = c;
// c = b; // fails
// b = a; // fails
```

Wildcard type `<? super Foo>`: contravariant
- For example we can imagine a consumer of something

```java
MyList<? super A> a = null;
MyList<? super B> b = null;
MyList<? super C> c = null;
// a = b; // fails
// b = c; // fails
c = b;
b = a;
```

### Wildcard type and subtyping

![](/img/part-17/wildcard-subtyping.PNG)

## Type parameter constraints

1) Declaration of the generic abstraction / type parameters
    - is upper bound
    - the type constraint lists at most one concrete or abstract class
(can be generic & contain wildcard parameters, see point 2)
    - may also contain multiple interface classes (connected with **&**)

2) Use of a generic abstraction / type arguments
    - a wildcard type can have an upper or lower bound

Constraints
- **extends**: upper bound, specifies the class with which the parameter needs to be
compatible
- **super**: lower bound, specifies the class for which the parameter needs to be one of the
superclasses

## Generics as a contract

The generic type is part of the interface contract.
1) specification of a generic abstraction:
    - “client of the type”
    - e.g. `class List<X>`: we barely know that X is a reference and that` X extends Object`
    - e.g. `class List<X extends Dog>`: X inherits from Dog, can call `fetch()`
    - e.g. class `List<X extends Dog & Tame>`: X inherits from Dog, implements Tame, can call `fetch()` and `givePaw()`

2) The use of a generic abstraction
    - “provider of the type”
    - note the analogy: dynamic & static type ~ variable content & signature (e.g. `List<? extends Dog>`)

## Examples

### Example 1: Constraining a type parameter

Here is an example of type parameter constrains.

Unbound X:

```java
class User {
    <X> void use(X device) {
    // ???
    }
}
```

What can be do with X? What do we know about it?

-> X can at least represent an Object. (so we know almost nothing about X)

Unbound X:
```java
class User {
    <X extends Object> void use(X device) {
    // ???
    }
}
```
Basically the same as above, for all reference types extends Object holds.

When X has an upper bound:
```java
class Phone {
    void call(int number) { ... }
}
class User {
    <X extends Phone> void use(X device) {}
    void use2(Phone device) {}
}
```
The parameters always have an implicit upper bound. So the constraint achieves very little.

Biggest difference is visible in the next case. There is two interfaces defined. We can reference them both and the Phone via the IPhone14ProMax class. But if only one of the interfaces would be enough for our case we could have the user implementation not care about what kind of phone we are using. Without generics we would have to code some helper classes to achieve this.

X has an upper bound:
```java
class Phone { void call(int number) { ... } }

interface Smart { default void loadSite(String address) {} }
interface Luxury { default double price() { return 9e307*9;} }

class iPhone14ProMax extends Phone implements Smart, Luxury {}

class User {
    <X extends Phone & Smart> void use(X device) {
        device.call(112);
        device.loadSite("https://utu.fi");
    }
}
```

```java
new User().use(new iPhone14ProMax());
```

### Example 2: Problem - covariant parameters

The inherited return type is covariant, the parameters are not.

This example shows that parameters in java cannot change even though we would want to change their types. When we inherit a class and want to override some method, the method parameters cannot changein the subclass. Focus on the different types of parameters when reading the code.
```java
class Stick {}
class Animal { void eat() {} void drink() {} void play() {} }
class Dog extends Animal { void fetch(Stick k) {} }
class AnimalWatch {
    void watch(Animal e) { e.eat(); e.drink(); e.play(); }
}
class CertifiedDogWatch extends AnimalWatch {
    @Override void watch(Dog e) {   // error! should be: void watch(Animal e)
        super.watch(e);
        e.fetch(new Stick());
}
}
```
```java
var spot = new Dog();
new CertifiedDogWatch().watch(spot); 
```

Generic type can be further refined (`still invariant X <: Animal`)

If the `AnimalWatch` class is generic we can specify wich type of class we want to inherit. In this case we create `CertifiedDogWatch` to extend `AnimalWatch<Dog>`. This code works and compiles while the previous code doesn't.
```java
class Stick {}
class Animal { void eat() {} void drink() {} void play() {} }
class Dog extends Animal { void fetch(Stick k) {} }
class AnimalWatch<X extends Animal> {
    void watch(X e) { e.eat(); e.drink(); e.play(); }
}
class CertifiedDogWatch extends AnimalWatch<Dog> {
    @Override void watch(Dog e) {
        super.watch(e);
        e.fetch(new Stick());
    }
}
```
```java
var spot = new Dog();
new CertifiedDogWatch().watch(spot);
```

### Example 3: Problem - merging iterators

This example is somewhat artificial. It has non-generic animal classes and an switch iterator. The `SwitchIterator` checks the position of a flag and according to the position delegates methods to selected iterator given as a parameter. The structure is a bit complicated because we did not want to use wilcard types. 

The original iterators are non-generic and incompatible. However we can pick one element at a time and make the code work because the elements are compatible with the subtyping rules.

```java
abstract class Animal {}
class Cat extends Animal {}
class Dog extends Animal {}

class SwitchIterator extends Iterator<Animal> {
    private final boolean flag;
    private Iterator<Cat> iter1;
    private Iterator<Dog> iter2;

    SwitchIterator(boolean v, Iterator<Cat> i1, Iterator<Dog> i2) {
        flag = v; iter1 = i1; iter2 = i2;
    }
    @Override boolean hasNext() {
        flag ? iter1.hasNext() : iter2.hasNext();
    }
    @Override Animal next() {
        flag ? iter1.next() : iter2.next();
    }
}
```

We can simplify this to one static method. Parameters are similar to previous code. Now when we have used the wildcard type, we can return a type that is compatible in a iterator level. This code is also a bit more efficient than the previous one.

Wildcard type + constraints
```java
abstract class Animal {}
class Cat extends Animal {}
class Dog extends Animal {}

class SwitchIteratorFactory {
    static Iterator<? extends Animal> choose(
        boolean flag,
        Iterator<? extends Cat> i1
        Iterator<? extends Dog> i2) {
        flag ? i1 : i2;
    }
}
```

### Example 4: : Task: maximum

Implement a generic class method max, which returns the larger of the two inputs. Especially
focus on how the types have to be constrained.

Class method max:
```java
class Example {
    static int max(int x, int y) {
        return x > y ? x : y;
    }
}
```

The method gives an idea, but only works with integers.

```java
class Example {
    static <S> S max(S x, S y) {
        return x > y ? x : y; // error!
    }
}
```

Problem: x > y does not work for all generic types S.

Generic class method max:
```java
class Example {
    static <S extends ???> S max(S x, S y) {
        return // x > y ? x : y; ??? //error!
    }
}
```

Let’s solve this with the aid of Comparable:

```java
interface Comparable<T> {
    int compareTo(T other);
}
```

Generic class method max:
```java
class Example {
    static <S extends Comparable<S>> S max(S x, S y) {
        return x.compareTo(y) > 0 ? x : y;
    }
}
```

The generic type parameter can also be omitted:

```java
class Examples {{
    var max1 = Example.<String>max("Buu", "Baa");
    var max2 = Example.max("Buu", "Baa");
}}
```

### Example 5:

Collections class defines an overloaded generic class method sort for sorting
collections:
```java
public static
<T extends Comparable<? super T>> void sort(List<T> l)
```
- What does the method require from the type parameter T?
- Ponder what differences do the types

`Comparable<T>` and
`Comparable<? extends T>`
have – in the same class / superclass / subclass..

### Example 6: Generics and polymorphism

The following record structure distracts attention away from the operation logic with the types
because of the fight.

```java
interface Number { Number sum(Number second); }
record Size(int value) implements Number {
    public Number sum(Number second) {
        if (!(another instanceof Size)) throw new Error("Does not add up!");
            return new Size( ((Size)second).value() + value() );
    }
}
```
```java
Number number = new Size(1);
number = number.sum( new Size(2) );
if (!(number instanceof Size)) throw new Error("Not an integer!");
System.out.println( ((Integer)number).value() );
```

The generic Luku structure makes implementation much easier, but requires so-called F-limited /
the use of recursively bounded quantification

```java
interface Luku<L extends Luku<?>> { L sum(L second); }
record Size(int value) implements Number<Size> {
    public Integer sum(Integer second) {
        return new Size( second.value() + value() );
    }
}
```
```java
Size number = new Size(1);
number = number.sum( new Size(2) );
System.out.println( number.value() );
```
# End of Part 4

Congratulations on reaching the final part of the study material for this course. Now all that is left is the part 4 exercises and after that the exam, both in ViLLE.