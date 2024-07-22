---
sidebar_position: 1
---

# Iterating list

In the fifth, we practiced creating lists, adding and modifying elements, and extracting individual elements from lists. However, it is often necessary to go through all the elements in a list. A typical reason might be, for example, to search for a particular (e.g. minimum or maximum) value in a list, or any operation that you want to apply to all the elements in a list.

Naturally, the list elements can be traversed using a while loop, for example, the following program prints all the list elements of a list one by one:

```python 
# Example list
list = [5,2,3,4,10,7]

index = 0
while index < len(list):
    print(list[index])
    index += 1
 ```

Program outputs:
```
5
2
3
4
10
7
 ```

However, there is an easier way to go through the list of elements.

## Definite repetition with for-clause

Python's for statement can be used to iterate through any data structure that supports it. The syntax of the clause is of the form

```
for <variable> in <data structure>:
    <block>
```

The idea is that in a for loop, all elements are extracted one by one in order from the data structure and set to the value of a given variable. The following diagram illustrates how the loop works:

![For-loop diagram](/img/img-en/w5-1.png)

Consider the previous example, where the elements of a list are printed one by one, now implemented with a for statement:

```python 
# Example list
list = [5,2,3,4,10,7]

for element in list:
    print(element)
 ```

Program outputs:
```
5
2
3
4
10
7
 ```

Note that when using the for clause, we don't need to worry about changing the value of a variable or breaking a condition with a break clause. The for clause automatically extracts all the elements in order from first to last and places them one by one in the given variable.

Consider another example where the sum of all the elements in a list is calculated:

```python 
# Example list
list = [1, 3, 2, 4, 5, 6]

sum = 0
for element in list:
    sum += element

print(f"Sum became {sum}.")
 ```

Program outputs:
```
Sum became 21.
 ```

It is often customary to pick only the elements that are appropriate for the situation, even if all are screened. In the following example, the sum of even-numbered elements is calculated:

```python 
# Example list
list = [1, 3, 2, 4, 5, 6]

sum = 0
for element in list:
    # Let's only choose even numbers
    if element % 2 == 0:
        sum += element

print(f"Sum became {sum}.")
 ```

Program outputs:
```python 
Sum became 12.
 ```


A third example, where only the elements that are divisible by two and three are printed:

```python 
# Example list
list = [1,2,3,4,5,6,7,8,9,10,11,12]

for element in list:
    # Let's only choose numbers divisible by 2 and 3
    if element % 2 == 0 and element % 3 == 0:
        print(element)
 ```

Program outputs:
```
6
12
 ```

The repeat clause formed by a for-clause is called a **definite** repeat. This means that when we write the sentence, we already know which elements are to be run through. Similarly, a repetition formed by a while clause is called an indefinite repetition, because the length of the repetition is not automatically determined by the mere condition in the while clause.

A definite repeat clause also works with strings. In this case, the characters are extracted one by one from the string and placed in the given variable:

```python 
# Example string
name = "Pete Python"

# Print characters one by one
for char in name-:
    print(char)
 ```

Program outputs:
``` 
P
e
t
e

P
y
t
h
o
n
 ```

## Repetition clause and range-function

Definite repetition would also be handy in situations where a list is not really needed. For example, if you want to search for prime numbers between 1...1 000 000, there is no real reason to store all million digits in a list - this would mainly waste memory. The iteration can of course be done with a while statement, but there is a more convenient way to do this.

The range function can be used to create a series of values that can be iterated through using the for statement. The function does not form an actual list, so no memory is wasted storing it.

The syntax of the function is of the form

`range(<start>, <end> , [step])`

Again, as usual, the final step is not included in the generated series, so for example a call to range(1, 10) returns a series of numbers from one to nine:

```python 
for i in range(1, 10):
    print(i)
 ```

Program outputs:
```
1
2
3
4
5
6
7
8
9
 ```

Consider an example where the sum of the numbers 1 - 10000 is calculated:

```python 
sum = 0
for i in range(1, 10001):
    sum += i

print(sum)
 ```

Program outputs:
```
50005000
 ```

A third parameter, the step, can also be given to the series. This makes it easy to create series with different steps. A negative step produces a larger to smaller series:

```python 
# Let's print every third number:
for i in range(1, 20, 3):
    print(i)


# Let's print numbers from largest to smallest:
for i in range(5, 0, -1):
    print(i)
 ```

Program outputs:
```
1
4
7
10
13
16
19
5
4
3
2
1
 ```

A list can also be created from the series if required. This can be done with the function list:

```python 
my_list = list(range(1, 20, 2))
print(my_list)

# Series can be saved in a variable
down_from10 = range(10, 0, -1)
print(down_from10)

list2 = list(down_from10)
print(list2)
 ```

Program outputs:
``` 
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
range(10, 0, -1)
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 ```

Range is also useful with lists, for example when we want to change a list. Consider the following example:

```python 
my_list= [1, 2, 3, 4]

print("List before:", my_list)

for element in my_list:
    element += 1

print("List after:", my_list)
 ```

Program outputs:
``` 
List before: [1, 2, 3, 4]
List after: [1, 2, 3, 4]
 ```

Printing the list at the end reveals that the placement in the loop variable does not change the original list. This is because the variable is copied one by one with the values of the list, but after copying, the variable no longer has a "link" to the list. Changing the value of a loop variable is therefore not passed on to the values in the list in any way.

However, the indexes in the list can be referenced by using the range function and information about the length of the list. Thus, using the range function, all the indices in the list from zero to length minus one are generated and passed through the for loop:

```python 
my_list= [1, 2, 3, 4]

print("List before:", my_list)

# If you leave out the starting parameter,
# Python assumes that it's zero
# range(4) is the same as range(0, 4)
for i in range(len(my_list)):
    my_list[i] += 1

print("List after:", my_list)
 ```

Program outputs:
```
List before: [1, 2, 3, 4]
List after: [2, 3, 4, 5]
 ```

Let's take a look at a second example:

```python 
my_list= list(range(1,10))

print("List before:", my_list)

# Let's convert all even values into
# negatives
for i in range(len(my_list)):
    if my_list[i] % 2 == 0:
        my_list[i] = -my_list[i]

print("List after:", my_list)
 ```

Program outputs:
```
List before: [1, 2, 3, 4, 5, 6, 7, 8, 9]
List after: [1, -2, 3, -4, 5, -6, 7, -8, 9]
 ```