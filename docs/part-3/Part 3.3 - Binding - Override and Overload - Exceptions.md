---
description: Different methods of binding explained.
---

# Binding

Today's Topics:

- Binding
    - Static and dynamic type
    - Static binding
    - Dynamic binding

- Miscellaneous topics
    - Override and overloading
    - Error handling

## Binding

## Static and dynamic type

Polymorphism creates the need to distinguish between the two types related to the structure of the language providing the reference:
- **Static type**
    - Type mentioned in the signature of a variable, method return value or formal parameter
    - Remains unchanged (when looking at the same reference structure – there can be different references to an object to which the referencing structure has a different static type).
- **Dynamic type**
    - The concrete actual type of the object at the end of the reference.
    - The type of an object that has already been created cannot change.
    - When looking at the structure that provides a reference, you can refer to different dynamic types in different moments.
    - Similarly, every reference to the same object has the same dynamic type.

## Set of dynamic types

- **Set of dynamic types**
    -  Formed by the reference’s static type and the derived types
    -  Each member compatible (substitution) with the static type

```java
Employee person = new Supervisor("Pointy-haired boss");
Developer dev = new Developer("Dilbert");
```

![](/img/part-9/dynamic-types.png)

## Upcasting and downcasting

- Upcasting
    - someone = employee
- Downcasting
    - employee = (Employee)someone
    - Not safe – may fail ⇒ ClassCastException


![](/img/part-9/casting.png)

- reference `instanceof` type
    - safe way – can be verified that conversion is ok.

Below is an example of upcasting and downcasting. Downcasting is checked by `instanceof`.

```java
class Person {}
class Employee extends Person {
    void work() {}
}

void main() {
    Employee worker = new Employee();
    Person someone = worker;

    if (someone instanceof Employee)
        worker = (Employee) someone;

    if (someone instanceof Employee e)
        worker = e;
}
```
## Binding

- Class `A` and the subclass `B` give a different implementation for method `d`.
- Class `A`'s client calls the method d using the polymorphic reference of type `B` stored in variable `a`.
    - dynamic type B, static type A

- What do the calls print?

```java
class A {
    int s = 10;
    int d() { return s; }
}
class B extends A {
    int s = 20;
    int d() { return s; }
}
```

```java
B b = new B();
A a = b;
// __, __, __, __
System.out.printf(
"%d, %d, %d, %d",
a.s, b.s, a.d(), b.d());
```

## Option 1: Static binding

- Dispatch strategy chosen at compile time
- The compiler cannot know the dynamic type of the variable `a.s`
Type
    - `a.s` calls the class `A` member variable
- Assumption e.g. in C++ for methods (programmer can change this)
- In Java, following are statically bound_
    - member variables
    - `static` class methods
    - `final` methods
    - `private` methods


Below is a commented version of previous code that demonstrates how variable s can be defined multiple times.
```java
B b = new B();
A a = b;
// 10, 20, __, __
System.out.printf(
"%d, %d, %d, %d",
a.s, b.s, a.d(), b.d());
```

## Option 2: Dynamic binding

-  Dispatch strategy chosen at run time
- Routine `d` is selected from the currently associated variable `a` by object type
    - `a.d()` returns the class `B`'s member variable `s`
- Default binding in Java
    - Not changeable by a programmer
    - In Java, static binding is essentially an optimization in situations where the dynamic type is known.

Below the comments have been added to show that a.d() returns also B's member variable s.
```java
B b = new B();
A a = b;
// 10, 20, 20, 20
System.out.printf(
"%d, %d, %d, %d",
a.s, b.s, a.d(), b.d());
```

## When to use dynamic binding

- You can see the way each object is looking for a way to react to a method call situation.
- The search is essentially a dynamic binding. The interface promises a `run` method. Even if the reference is from `Function` inteface, the right fun method is found.

```java
enum Function { Ask, Print }
```

```java
void run(Function f) {
    switch(f) {
        case Ask ->
            new Scanner(System.in).next();
        case Print ->
            System.out.println("Hello");
    }
}
```

```java
interface Function { void run(); }

class Ask extends Function {
    @Override void run() {
        new Scanner(System.in).next();
    }
}
class Print extends Function {
    @Override void run() {
        System.out.println("Hello");
    }
}
```

```java
f.run(); 
```

- Combined with polymorphism and interface definition, an object can be handled more abstractly in different contexts through the roles they have, without the need to know concrete characteristics of the objects.

```java
interface Stack {
    void add(Object o);
    Object remove();
    int size();

    // Default implementation of an abstract type
    default boolean isEmpty() {
        return size() == 0;
    }
}
```

```java
class MyStack implements Stack {
    private List<Object> l = new ArrayList<>();
    public void add(Object o) { l.add(o); }
    public Object remove() { l.remove(); }
    public int size() { return l.size(); }
    void add(Object[] os) { for(var o: os) o..}
}
```

```java
Stack p = new MyStack();
p.add("item");
System.out.println(p.isEmpty());
```

# Miscellanous

## Override and overload

- In Java, syntactic solution: the method of the same name can either replace the previous one, given in the parent class..
- .. or overload it (= many implementations with the same name) if the parameters of the method differ.
- Overload is addressed here as it is an integral part of basic Java and
confusingly similar looking.
- However, overload has nothing to do with inheritance or dynamic binding!

- Arity: (1: unary, 2: binary, 3: ternary, .. )
    - void foo(T<sub>1</sub>a<sub>1</sub>, T<sub>2</sub>a<sub>2</sub>, ..., T<sub>n</sub>a<sub>n</sub>)
- Overloaded function: differs either in arithmetic or in data types of parameters, function name is the same


- **Override** of the superclass method in the subclass
    - Call parameters compatible (in Java: same) with superclass
    - The superclass method is no longer used in subclasses and subsubclasses.
    - callable in subclass: `super.method`

- Method **overload**
    - Method call parameters differ
    - It is always a new method, not a replacement for the old one (even when defined in a subclass)
    - no dynamic binding is used (unless overload also replaces)

## Polymorphism and exception treatment

- **throws**: can only be raised from the dynamic type set of exception classes listed in the signature
- **catch**: The different catch branches must cover all types of exceptions mentioned in the signature.
    - i.e. too broadly defined signature backfires every time on the processing side as unnecessary contingency!
- However, the `catch` branch is selected according to the dynamic type of the exception.
- Hierarchy of exceptions and exception types
    - checked exceptions
    - unchecked exceptions

## Unchecked exception

- no need to introduce in the signature
- not usually dealt with `catch`
• **Error**: serious errors
• **RuntimeException**: runtime error

## Example: Unchecked exception

```java
class Factory {
    // native = external routine outside JVM
    native static Object createObject();
}
void main() {
    // Reference outside of garbage collection
    // Release must be handled manually
    Object object = Factory.createObject();
    // null = could not allocate memory
    if (object == null)
        throw new RuntimeException("Out of memory!");
}
 
```

## Checked exeption

- Must be mentioned in the signature (**throws**)
- Must be explicitly
    - handled at use site (`catch`) and/or
    - propagated
• Inherited from the **Exception** class

Tree chart of different exceptions:
![](/img/part-9/unchecked.png)

## Example: Checked exception

```java
String read(String myPath) throws NoSuchFileException {
    try {
        // raise different (subclasses) IOException exceptions, see. Java API
        return Files.readString(Path.of(myPath));
    }
    catch(NoSuchFileException e) {
        throw e; // propagates
    }
    catch(IOException e) {
        System.out.println("Failed in other ways! Handling here.");
        return null;
    }
}
```
Note! "Converting" an exception to null may not be a good idea..

```java
void logReader() {
    try {
        // can raise a NoSuchFileException
        read("/var/log/apache.log");
        System.out.println("ok");
    }
    catch(NoSuchFileException e) {
        System.out.println("File is missing!"); // handled
    }
}
```