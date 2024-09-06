---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# More Python's features

Finally, we will go through some of the useful features of Python. Even if you don't use these features in your own programs, it's still useful to know about them. In addition to the features presented in this section, you should also learn about the following:

- My classes and objects
- Functional programming: map, filter, reduce
- Generator functions
- Functions as parameters of functions
- Regular expressions
- Operator overloading
- External libraries
- pip

Some of the above topics will be covered in Java in the advanced course on object-oriented programming.

## List compilations

List composition is a technique that allows a single expression to create a new list from an existing sequence (for example, a list, string, dictionary or tuple). The syntax of a composition is

`[<clause> for <element> in <series>]`

For example, the following example creates a new list with the elements of the original list multiplied by three:

```python 
numlist = [1, 3, 2, 4, 6, 5]

# Creating a new list using list composition
list2 = [element * 3 for element in numlist]

print(list2)
 ```

Program outputs:
```
[3, 9, 6, 12, 18, 15]
 ```

In practice, the end result is similar to creating a new empty list and adding the elements to it, for example with a for loop:

```python 
numlist = [1, 3, 2, 4, 6, 5]

list2 = []
for element in numlist:
    list2.append(element* 3)

print(list2)
 ```

Program outputs:
``` 
[3, 9, 6, 12, 18, 15]
 ```

List composition is useful, for example, when you want to form a list of strings into a list of numbers (or vice versa):

```python 
def intlist(list: list) -> list:
    return [int(element) for element in list]

def strlist(list: list) -> list:
    return [str(element) for element in list]


# Testing with a list of integers
numbers = list(range(1,10))
print(numbers)
snums = strlist(numbers)
print(snums)

# Testing with character list
chars = "1 2 3 22 11 44 5 3 2 9".split()
print(chars)
numbers = intlist(chars)
print(numbers)
 ```

Program outputs:
```
[1, 2, 3, 4, 5, 6, 7, 8, 9]
['1', '2', '3', '4', '5', '6', '7', '8', '9']
['1', '2', '3', '22', '11', '44', '5', '3', '2', '9']
[1, 2, 3, 22, 11, 44, 5, 3, 2, 9]
 ```

A condition can also be combined with a list comprehension. The condition can be used to restrict the elements that will be included in the new list. The condition clause is written at the end of the summary as shown in the example below:

`[<clause> for <element> in <series> if <condition clause>]`

Let's first look at an example of an expression that picks only positive elements from the new list:

```python 
intlist = [2, -2, 3, 4, -1, -5, 11, -3, -9, 2, 3]

positives = [element for element in intlist if element > 0]

print(positives)
 ```

Program outputs:
```
[2, 3, 4, 11, 2, 3]
 ```

Another example, where only even numbers are converted from an integer list to a string:

```python 
def even_tostring(intlist: list) -> list:
    return [str(num) for num in intlist if num % 2 == 0]

numbers = list(range(1,15))
print(numbers)

strnumbers = even_tostring(numbers)
print(strnumbers)
 ```

Program outputs:
```
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
['2', '4', '6', '8', '10', '12', '14']
 ```