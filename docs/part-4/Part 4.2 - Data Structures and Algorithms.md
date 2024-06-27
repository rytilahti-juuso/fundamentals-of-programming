---
description: Different collections in java.
---

# Data Structures and Algorithms

## Today's Topics:

- Java Collections
- Types of Collections
- Collection Hierarchy
- Concrete Collection Classes
- Tips for Using Collections

## Java Collections

Next we are going to look at Java collections. Let's first look at collection and container classes.

 Collection and Container classes are Java's standard framework for composite data. They are basic data types for everyday use that aim for [simplicity](https://docs.oracle.com/javase/8/docs/technotes/guides/collections/designfaq.html).

- Structure:
    - Interfaces: description of abstract data types
    - Implementations: concrete implementations of data types
    - Algorithms: helper methods and classes for data manipulation

- History of Java Collections:
    - Introduced in Java 1.2 s("Java 2.0" / Java 2 Platform)
    - Java 5: generics, **java.util.concurrent, for(X x: iterable)**
    - Java 6-7: additional methods, interface rationalization
    - Java 8: **Stream**, **Optional**, lambdas
    - Java 9-20: more classes and helper methods (e.g., static **.of** methods)
    - Java 21: **SequencedCollection** (well-defined order handling)

## Collection types


One could say that there are two types of Collections in Java, one containing only one type of data, where map contains key-value pairs (two types of data)

![](/img/part-14/Collection_types.PNG)

Below is a breakdown of Collection class:

- **Collection\<E>**
    - A container holding homogeneous data of type E.

- **List\<E>**
    - Maintains insertion order. Elements have recursively defined successors.

- **Queue\<E>**
    - A queue-like container. Elements are added at one end, removed from the other.

- **Set\<E>**
    - A set of elements. Key feature: cannot contain duplicates.

![](/img/part-14/Collection_types2_inverted.PNG)
- **`Map<K, V>`**
    - A general description of key-value pairs.
    - Contrast: **Collection**-based data structures are homogeneous.

## Collection Hierarchy

Top level of the collection hierarchy with helper classes:
![](/img/part-14/Collection_hierarchies.PNG)

Here is also a chart displaying some of the concrete classes.

![](/img/part-14/Collection_hierarchies2.PNG)

### Collection: collection

Here is an example of interface of an collection:

```java
public interface Collection<E> extends Iterable<E> {
    int size(); // size
    boolean isEmpty(); // size == 0?
    boolean contains(Object o); // Does it contain the object o?
    boolean containsAll(Collection<?> c); // for collection c
    Iterator<E> iterator(); // iterating
    Object[] toArray(); // array ops (operations)
    <T> T[] toArray(T[] a); 
    void clear(); // Optional
    boolean add(E o); // Optional
    boolean addAll(Collection<? extends E> c); // Optional
    boolean retainAll(Collection<?> c); // Optional
    boolean remove(Object o); // Optional
    boolean removeAll(Collection<?> c); // Optional
    default boolean removeIf(Predicate<? super E> f); // Optional
    default Stream<E> stream(); // Stream ops
    default Stream<E> parallelStream(); 
    default Spliterator<E> spliterator(); 
```
### `Collections: Map<K, V>`

- Elements defined pair-wise: each key K points to a value V.
- K keys form a set (Set\<K>), values a collection (Collection\<V>)
- Note: does not inherit from Collection\<E>!
- Also note how instead of add Map uses a `put` and `get`.

```java
public interface Map<K, V> {
    V put(K key, V value); // Basic ops.
    V get(Object key); // Note! Object
    V remove(Object key); // Note! Object
    default V putIfAbsent(K key, V value);
    default V getOrDefault(Object key, V defaultValue);
    default boolean remove(Object key, Object value);
    default V replace(K key, V value);
    default boolean replace(K key, V oldValue, V newValue);
    boolean containsKey(Object key);
    boolean containsValue(Object value);
    int size();
    boolean isEmpty();
    void clear(); // Collection ops
    void putAll(Map<? extends K,? extends V> t);
    Set<K> keySet(); // Views to collections
    Collection<V> values();
    Set<Map.Entry<K,V>> entrySet();
    ... // functional interfaces
    interface Entry<K,V> { // internal Interface, models a
        K getKey(); // key-value pair
        V getValue();
        V setValue(V value);
    }
}

```

### Collections: Iterator

Iterator provides a way to traverse through the data in an ordered sequence. As you can see the interface is quite simple:

```java
interface Iterator<E> {
    boolean hasNext();
    E next();
    default void remove() { throw new UnsupportedOperationException(); }
}
```

```java
interface Iterable<T> {
    default void forEach(Consumer<? super T> action);
    Iterator<T> iterator();
}
```
Older way to use iterator:
```java
for(var elem: collection) { ... }
for(var i = c.iterator(); i.hasNext();) { Object o = i.next(); ... }
```
The older way can still be useful, when using an old fashioned `for` loop instead of e.g. `forEach` the iteraring can be stopped the index (`i`) stored and the iteration can be continued later from the same position.

### Collections: Streams

Stream provides a way to process the information in the collection in an aggregated and incremental way. It is either sequential or [parallel](https://docs.oracle.com/javase/tutorial/collections/streams/parallelism.html) processing (more efficient). Unfortunately functional approach is currentlly [slower](https://openjdk.org/jeps/8139731).

Example of how stream can be used:

First, let's create classes `Color` and `Creature`
```java
enum Color { Blue, Red, Yellow, Green }
record Creature(Color color, int weight)
```

Then let's iterate through the list using a stream, remove all other than the red creatures and count their total weight.

```java
import java.util.*;
int redWeightSum() {
return List.of(new Creature(Color.Red, 5), new Eliö(Color.Blue, 4))
    .stream()
    .filter(e -> e.color() == Color.Red)
    .mapToInt(Creature::weight).sum();

}
```
Quite often using streams increases the code readability, but as stated above, it also increases overhead. This is good to keep in mind if there is ever a performance problems in the back-end.


### Concrete collection classes

Let’s take a look at some collections implementations
![](/img/part-14/Collection_hierarchies2.PNG)

### Concrete collection classes

Next, lets look through a couple concrete collection classes in Java.

- Lists (**List**)
    - **LinkedList**: linked list
    - **ArrayList**: provides both list and array-like access (one of the most commonly used classes)

-  Queues (**Queue**)
    - **PriorityQueue**: a queue with a priority order
    - **ArrayDeque**: supports manipulating both ends of the queue

- Sets (**Set**)
    - **HashSet**: based on a hash table, fast basic operations (**add**, **remove**, **contains**, **size**)
    - **TreeSet**: ordered, rather speedy basic operations (**add**, **remove**, **contains**)
    - **EnumSet**: ordered, for enums, really efficient

- Maps (**Map**)
    - **HashMap**: the hash value determines the “bucket”, fast basic operations (**get**, **put**)
    - **TreeMap**: ordered, rather speedy basic operations (**get**, **put**, **remove**, **constainsKey**)
    - **EnumMap**: ordered, for enums, really efficient

- Notice the similarity: **.keySet(): Map -> Set**
- **hashCode** ⇔ HashXXX
- **Comparable** / **Comparator** ⇔ TreeXXX
- **enum** ⇔ EnumXXX


## Backing storage type of different containers


|                         	| Set           	| List       	| Queue      	| Map           	|
|-------------------------	|---------------	|------------	|------------	|---------------	|
| Hash table              	| HashSet       	| -           	| -           	| Hashmap       	|
| Custom table            	| -              	| ArrayList  	| ArrayDeque 	| -              	|
| Red-black tree          	| -              	| -          	| -           	| TreeMap       	|
| Linked list             	| TreeSet       	| LinkedList 	| LinkedList 	| -              	|
| Hash table+ linked list 	| LinkedHashSet 	| -           	| -          	| LinkedHashMap 	|

- [Overview of the collections](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/doc-files/coll-overview.html)
- [Collection API and design](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/doc-files/coll-index.html)
- Deque = double-ended queue

## Properties of the collections

The different classes can also be classified using their properties:

![](/img/part-14/Properties_of_collections.PNG)


## Collections class

- Utility class methods, among other things:
    - copying
    - shuffling
    - sorting
    - filling
    - search for the minimum and
    - maximum values
- Wrappers
    - synchronization wrapper
        - for multi-thread programming...
    - unmodifiable wrapper
        - multi-thread programming, contracts, …
    - checked wrapper
        - adds runtime type checks (generics can be worked around :-/)

## Tips for using Collections

Here are some tips on how to use collections:

- Favor the use of collection interfaces as input instead of concrete implementations.
- As a return value, specify the concrete implementation type if possible.
- Dynamic binding in Java is pretty cheap resource-wise, but not free.
- Ensure the consistency of **equals**/**hashCode**/**compareTo**.
- Remember immutable data structures.
- Synchronization is important in multithreaded programming.
- **UnsupportedOperationException**: Do not handle. It indicates a conceptual error/error in the thinking!

## Using collections: multi-threading

Here is an example displaying benefits of multi-threading and parallelization:

*“In each run, n threads concurrently executed a tight loop where they retrieved random key values values
from either a Hashtable or a ConcurrentHashMap, with 80 % of the failed retrievals performing a put()
operation and 1 % of the successful retrievals performing a remove(). Tests were performed on a
dual-processor Xeon system running Linux. The data shows run time in millisecs for 10M iterations,
normalized to the 1-thread case for ConcurrentHashMap.”*

![](/img/part-14/threadprogramming.PNG)

## Example: Extending Collection Classes

- Extending functionality
    - Refer to the collection classes' javadoc.
    - Understand the various interfaces.
        - Intermediate interfaces, helper classes - **Iterator**, **Stream**, etc.
    - Does an existing collection implement part of the functionality?
    - Boldly implement your own collection classes.
Example: Implement a ring buffer
    - The collection can hold X elements, after which adding a new element always overwrites the oldest element.
    - Consider how to make the collection operate without memory allocations after initialization (Java allocates memory with the **new** keyword).
- Example: Implement a mapping that duplicates values with respect to the mirror image of the key
    - **`Map<Integer, X>`**, where each key-value pair **`(Y, X)`** duplicates to position **`(-Y, X)`**.

