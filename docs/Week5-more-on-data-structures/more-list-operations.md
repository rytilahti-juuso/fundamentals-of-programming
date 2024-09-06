---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# More list operations

Many of the operations familiar from strings also work for lists. Let's look at some useful operations.

Since a list is a mutable (i.e. variable) data structure, the order of its elements can be changed. The elements of a list can be arranged in a natural order from least to greatest using the **sort** method:

```python 
lotterynumbers = [17, 5, 4, 22, 1, 19, 9]

# Sort the numbers
lotterynumbers.sort()

print(lotterynumbers)
 ```

Program outputs:
```
[1, 4, 5, 9, 17, 19, 22]
 ```

If you want to preserve the order of the elements in the original list, you can use the **sorted** function to create an ordered copy of the list. Note the difference: sort is a method and sorted is a function, so they are called differently.

```python 
lotterynumbers = [17, 5, 4, 22, 1, 19, 9]

# Let's create and ordered copy
# This doesn't affect the original list
ordered = sorted(lotterynumbers)

print("Original:", lotterynumbers)
print("Ordered:", ordered)
 ```

Program outputs:
```
Original: [17, 5, 4, 22, 1, 19, 9]
Ordered: [1, 4, 5, 9, 17, 19, 22]
 ```

The order of the elements in the list can be reversed with the method **reverse**:

```python 
numbers = list(range(1,5))

# add another list with the +-operator
numbers += list(range(20,25))

print(numbers)

# Invert...
numbers.reverse()

print(numbers)
 ```

Program outputs:
``` 
[1, 2, 3, 4, 20, 21, 22, 23, 24]
[24, 23, 22, 21, 20, 4, 3, 2, 1]
 ```

A **substring** can be extracted from a list in the same way as a substring from a string:

```python 
list = list(range(10))

print("Whole list:", list)

print("First half:", list[ : 5])
print("Second half:", list[5 : ])
print("Piece from the middle:", list[4 : 8])
 ```

Program outputs:
``` 
Whole list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
First half: [0, 1, 2, 3, 4]
Second half: [5, 6, 7, 8, 9]
Piece from the middle: [4, 5, 6, 7]
 ```

A copy of the entire list (actually a partial copy of the original list from start to finish) is obtained by omitting both the start and end indices. This is often a handy operation when you want to process the elements of a list while preserving the original values and order:

```python 
list = list(range(10))

# copy the whole list
copy = list[:]

copy.reverse()
copy[0] = 1000
copy[-1] = -10000

print("Original:", list)
print("Copy: ", copy)
 ```

Program outputs:
```
Original: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
Copy:  [1000, 8, 7, 6, 5, 4, 3, 2, 1, -10000]
 ```

The occurrence of a list element can be viewed using the in operator. The index of the element can be found by using the **index** method. Note that although **index** works with strings, for some reason the find method does not work with lists. Also note that unlike the find method, **index** will return an error if you try to retrieve an instance of an element that is not in a list. So before using the **index** method, it is a good idea to check the occurrence of the element with the in operator.

```python 
power_twos = [1, 2, 4, 8, 16, 32, 64, 128, 256]

for i in range(1, 10):
    if i in power_twos:
        print(i, "is a power of two ")
    else:
        print(i, "is not a power of two")

print("4 is found from the index", power_twos.index(4))
print("128 is found from the index", power_twos.index(128))
 ```

Program outputs:
```
1 is a power of two
2 is a power of two
3 is not a power of two
4 is a power of two
5 is not a power of two
6 is not a power of two
7 is not a power of two
8 is a power of two
9 is not a power of two
4 is found from the index 2
128 is found from the index 7
 ```

Other handy functions for handling lists are at least min, max and sum, which return the smallest or largest element of a list or the sum of all elements in a list. The following example illustrates the use of these functions:

```python 
results = [10, 4, 12, 3, 16, 7, 9, 7, 13]

print("Largest value:", max(results))
print("Smallest value:", min(results))
print("Sum:", sum(results))
print("Average:", sum(results) / len(results))
 ```

Program outputs:
```
Largest value: 16
Smallest value: 3
Sum: 81
Average: 9.0
 ```