---
sidebar_position: 5
---

# Data structures in functions

In Python, all data is stored as objects. This means that when a value is stored in a variable, a reference to the object containing the value is actually stored. For unmutated entities (such as numbers, truth values, strings or tuples) this is usually not very important for the programmer, but it is for mutable structures - for example, lists or dictionaries.

Let's start with the situation where we create a new list and store a reference to the variable numbers:

```python 
numbers = [1, 2, 3, 5, 4]
 ```

![Variable](/img/img-en/w5-4.png)

Now let's set the value of the variable **numbers** to the variable **numbers2**. Since the value is actually *a reference*, the reference, not the list, is copied when setting.

```python 
numbers = [1, 2, 3, 5, 4]
numbers2 = numbers
 ```

![Reference illustration](/img/img-en/w5-5.png)

Now we have two variables, both pointing to the same list. So the list can be manipulated by either variable:

```python 
numbers = [1, 2, 3, 5, 4]
numbers2 = numbers

numbers[0] = 10
numbers2[-1] = 99

print(numbers)
print(numbers2)
 ```

![Manipulation example](/img/img-en/w5-6.png)

Program outputs:
```
[10, 2, 3, 5, 99]
[10, 2, 3, 5, 99]
 ```

## Data structures as parameters

The same phenomenon occurs when we pass a mutable entity as a parameter to a function. Consider the example of creating a list and passing it as a parameter to a function that adds a new value to the list:

```python 
# Note, that the function doesn't return anything
def add_value(list: list):
    list.append(10)

# Creating list
list = [1,2,3,4,5]

print("List before:", list)

# Kutsutaan funktiota
add_value(list)

print("List after:", list)
 ```

Program outputs:
```
List before: [1, 2, 3, 4, 5]
List after: [1, 2, 3, 4, 5, 10]
 ```

From the example, you can see that the function can change the list it receives as a parameter. However, this is not always appropriate.

Consider another example where the function is intended to find the second smallest value in the list. The programmer has used what he thinks is a clever trick of first ordering the elements in order of magnitude and then picking the second element:

```python 
def second_smallest_element(my_list: list) -> int:
    # Sorting list...
    my_list.sort()

    # ...when second smallest element is the second element
    return my_list[1]

# Creating list
testlist = [1, 5, 4, 6, 2, 3, 7, 8]

print("List before:", testlist)

# Calling function
print("Second smallest:", second_smallest_element(testlist))

# The order has changes
print("List after:", testlist)
 ```

Program outputs:
```
List before: [1, 5, 4, 6, 2, 3, 7, 8]
Second smallest: 2
List after: [1, 2, 3, 4, 5, 6, 7, 8]
 ```

Now, when you call a function and pass a list as a parameter, you will notice that after the function is called, the elements of the list are in a different order than before the call. This may affect the rest of the program and produce hard-to-find errors - the function is not intended to modify the list, but to return the second largest element.

The (often unexpected) changes made to the entities that the function receives as parameters are called **side effects of the function**.

In general, it is almost always desirable that functions **do not change** the objects they are given as parameters. If a data structure is to be modified, it is usually a good idea to take a copy of it and modify that copy instead of the original:

```python 
def second_smallest_element(list: list) -> int:
    # Creating a sorted copy of the original
    copy = sorted(list)

    # ...and choosing second element from the copy
    return copy[1]

# Creating list
list = [1, 5, 4, 6, 2, 3, 7, 8]

print("List before:", list)

# Calling function
print("Second smallest:", second_smallest_element(list))

# Lists order is the same after function
print("List after:", list)
 ```

Program outputs:
```
List before: [1, 5, 4, 6, 2, 3, 7, 8]
Second smallest: 2
List after: [1, 5, 4, 6, 2, 3, 7, 8]
 ```

## Data structures as return values

The function can also return a data structure. Usually this is a situation where either

1. a completely new data structure is created based on some parameters, or
2. copying and modifying the data structure received as a parameter.

An example of the first situation could be, for example, a function that creates a list of parameters:

```python 
def multiply_value(value: int, amount: int) -> list:
    # List multiplication produces a new list
    # where the original is multiplied
    # by the given value
    list = [value] * amount
    return list


# Testing
print(multiply_value(5, 10))

threelist = multiply_value(3, 5)
print(threelist)
 ```

Program outputs:
```
[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
[3, 3, 3, 3, 3]
 ```

An example of the latter is a function that takes a dictionary as a parameter, where the keys are numbers and the values are squares of numbers. The function returns a new dictionary with only those elements from the original dictionary where the key is negative:

```python 
def negative_keys(squares: dict) -> dict:
    negat = {}

    for key in squares:
        if key < 0:
            negat[key] = squares[key]

    return negat

# testing function
squarebook = {}

# generating dictionary from key list
keys = [1,-1,2,-2,4,-4,5,6,-7,8]
for key in keys:
    squarebook[key] = key * key

print(squarebook)

print(negative_keys(squarebook))
 ```

Program outputs:
```
{1: 1, -1: 1, 2: 4, -2: 4, 4: 16, -4: 16, 5: 25, 6: 36, -7: 49, 8: 64}
{-1: 1, -2: 4, -4: 16, -7: 49}
 ```