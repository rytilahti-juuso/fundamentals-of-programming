---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dictionary and tuple

Python also has several other data structures. Next, let's look at the dictionary.

A dictionary is a data structure where keys point to elements. The elements are in no particular order - you can't pick the first or last element from the dictionary. However, a value can be extracted from the dictionary very quickly if you know the key that points to it.

The following figure illustrates the dictionary: the student numbers point to the names of the students.

![Dictionary illustration](/img/img-en/w5-3.png)

## Dictionary in Python

You can create a new empty dictionary in the same way as a list - the only difference is the brackets used: the dictionary uses braces {} instead of square brackets.

So let's create a new empty dictionary and store a reference to it in the variable students:

```python 
students = {}
 ```

Values can be stored in the dictionary using the same escape notation as in the lists. Add a few values to the dictionary and see what it looks like:

```python 
students = {}

students["12345"] = "Sam Student"
students["54321"] = "Sally Student"

print(students)

students["99999"] = "Mike Madeup"
students["55555"] = "Tim Talented"

print(students)
 ```

Program outputs:
```
{'12345': 'Sam Student', '54321': 'Sally Student'}
{'12345': 'Sam Student', '54321': 'Sally Student', '99999': 'Mike Madeup', '55555': 'Tim Talented'}
 ```

Note that if the key already exists in the dictionary, the old value will be replaced by the new one:

```python 
prices = {}
prices["Apple"] = 5.95
prices["Banana"] = 3.90
prices["Orange"] = 4.50

print(prices)

# Now Apple already exists within the dictionary, so
# instead of creating a new element the value is modified
prices["Apple"] = 4.25

print(prices)

# Pineapple didn't exist earlier in the dictionary, 
# it's added as a new key-value pair
prices["Pineapple"] = 7.90

print(prices)
 ```

Program outputs:
```
{'Apple': 5.95, 'Banana': 3.9, 'Orange': 4.5}
{'Apple': 4.25, 'Banana': 3.9, 'Orange': 4.5}
{'Apple': 4.25, 'Banana': 3.9, 'Orange': 4.5, 'Pineapple': 7.9}
 ```

A value can be retrieved from the dictionary based on the key:

```python 
prices = {} 
prices["Apple"] = 5.95 
prices["Banana"] = 3.90 
prices["Orange"] = 4.50
prices["Pineapple"] = 7.90

print("Apple costs:", prices["Apple"])

print("Banana costs:", prices["Banana"])

together = prices["Orange"] + prices["Pineapple"]
print("Orange and pineapple combined:", together)
 ```

Program outputs:
```
Apple costs: 5.95
Banana costs: 3.9
Orange and pineapple combined: 12.4
 ```

If the key does not exist, an error occurs - this is similar to trying to retrieve an element from a list using an index that does not exist in the list:

```python 
prices = {}
prices["Apple"] = 5.95
prices["Banana"] = 3.90
prices["Orange"] = 4.50 
prices["Pineapple"] = 7.90

# Dictionary does not contain key "grape"
print(prices["grape"])
 ```

Program outputs:
``` 
Traceback (most recent call last):
  File "dict.py", line 8, in <module>
    print(prices["grape"])
KeyError: 'grape'
 ```

All values in the dictionary can be searched using the **for** loop. The loop returns the dictionary keys one by one, which can be used to extract the corresponding values if necessary.

As usual, the function **len** returns the number of sub-values - in this case, key-value pairs.

The example also shows the initialization of the dictionary by assigning values. The key-value pair is given separated by a colon.

```python 
# Let's initialize the dictionary by giving some elements to complete
translations = {"auto": "car", "vene": "boat", "pyörä": "bike", "lentokone": "plane"}

# len returns the number of elements
print("Elements in the dictionary:", len(translations))

# add element
translations["mopo"] = "moped"

print("Elements in the dictionary now:", len(translations))

# print keys and values
for key in translations:
    print(f"With key {key} value {translations[key] is found}")
 ```

Program outputs:
```
Elements in the dictionary: 4
Elements in the dictionary now: 5
With key auto value car is found
With key vene value boat is found
With key pyörä value bike is found
Wirh key lentokone value plane is found
With key mopo value moped is found
 ```

## Tuples

A **tuple** is a data structure that resembles a list. Unlike a list, however, a tuple is mutation-free. This means that the elements of a tuple cannot be changed once it has been created, nor can you add or remove elements from a tuple.

Tuples are intended to form value groups. They can therefore be used to easily combine related values into a single structure.

From a syntax point of view, the initialisation of a tuple is similar to the initialisation of a list - but instead of square brackets, the tuple uses curly brackets ().

The following are examples of the different uses of tuples:

```python 
# coordinate pair
coordinates = (25.25, 55.15)

# students info: name, id, age, email
student = ("Sam Student", 12345, 26, "sam@example.com")

# tictactoe move: coordinates and sign
move = (5, 2, "X")

# game card: suite and value
card = ("spade", 4)
 ```

A typical way to use tuples is to store tuples of the same form (i.e. containing the same type of values in the same order) in a list or dictionary. This would, for example, make it convenient to store several pairs of coordinates or students with all their data in a single data structure.

In the following example, the user is asked for coordinates and the resulting pairs are stored as tuples in a list:

```python 
coordinates = []

while True:
    x = int(input("Give the x-coordinate (-1 quits): "))
    if x == -1:
        break

    y = int(input("Give the y-coordinate: "))

    pair = (x, y)
    coordinates.append(pair)

print(coordinates)
 ```

Program outputs:
``` 
Give the x-coordinate (-1 quits): 4
Give the y-coordinate: 6
Give the x-coordinate (-1 quits): 2
Give the y-coordinate: 5
Give the x-coordinate (-1 quits): 10
Give the y-coordinate:9
Anna x-koordinaatti (-1 lopettaa): -1
[(4, 6), (2, 5), (10, 9)]
 ```

Another example, where the function is given a list of tuples containing hockey match data as a parameter. Each tuple contains, in order, the elements for the home team, the away team, and the goal totals for both teams. The function returns a new tuple containing, in order, the number of home wins, draws and away wins.

```python 
def statistic(matches: list) -> tuple:
    homewins = 0
    draws = 0
    awaywins = 0

    for match in matches:
        # elements in order: 
        # home team, away team, home goals, away goals
        homegoals = match[2]
        awaygoals= match[3]

        if homegoals > awaygoals:
            homewins += 1
        elif awaygoals > homegoals:
            awaywins += 1
        else:
            draws += 1

    return (homewins, draws, awaywins)

# Testing function
matchlist = []
matchlist.append(("JPS", "PPS", 1, 0))
matchlist.append(("PPS", "Pallerot", 2, 2))
matchlist.append(("JPS", "Pallerot", 2, 3))
matchlist.append(("HC Python", "HC Java", 5, 5))
matchlist.append(("HC Python", "PPS", 2, 1))
matchlist.append(("JPS", "HC Java", 1, 4))
matchlist.append(("HC Java", "PPS", 2, 0))

statistics = statistics(matchlist)

print("Home wins:", statistics[0])
print("Draws:", statistics[1])
print("Away wins:", statistics[2])
 ```

Program outputs:
``` 
Home wins: 3
Draws: 2
Away wins: 2
 ```

Note that although you cannot change a tuple, you can replace it with a new tuple. In the following, we will edit the list of persons so that all the endings of the email addresses are changed. The existing tuples will be replaced by new ones.

```python 
sam = ("Sam", "sam@example.com",)
sally = ("Sally", "sally@example.com")
mike = ("Mike", "mike@example.com")
tim = ("Tim", "tim@example.com")

personnel = [sam, sally, mike, tim]

# Iterate through and modify emails
# Note that in order to modify list's elements
# we'll use the range-function in the iteration
for i in range(len(personnel)):
    prs = personnel[i]
    
    # email is the second element
    email = års[1]

    # replace the domain part
    email = email.replace("example.com", "example.fi")

    # save back to the list
    # name stays the same
    personnel[i] = (prs[0], email)


for person in personmel:
    print(person)
 ```

Program outputs:
```
('Sam', 'sam@example.fi')
('Sally', 'sally@example.fi')
('Mike', 'mike@example.fi')
('Tim', 'tim@example.fi')
 ```

## Removing elements from data structures

You can remove entries from the dictionary and from the list using, for example, the keyword **del**. Note that you cannot remove elements from a tuple because it is mutation-free.

In a list, the element is removed by giving the del clause a reference to the element to be removed. For example,

```python 
list = [1,2,3,4,5,6]

# remove the second value
del list[1] 
print(list)

# remove the final value
del list[-1]
print(list)

# remove the first value
del list[0]
print(list)
 ```

Program outputs:
``` 
[1, 3, 4, 5, 6]
[1, 3, 4, 5]
[3, 4, 5]
 ```


From the dictionary, an element is deleted by referring to the key of the element to be deleted:

```python 
heigths = {"Kim": 180, "Lisa": 171, "Ann": 145, "Alex": 164}

# Remove Kim
del heigths["Kim"]
print(heigths)

# Remove Anni
del heigths["Ann"]
print(heigths)
 ```

Program outputs:
```
{'Lisa': 171, 'Ann': 145, 'Alex': 164}
{'Lisa': 171, 'Alex': 164}
 ```

Removing elements inside the loop can mess up the iteration. Consider the following example, where you go through the loop, print each element, and remove an element if it is an even number. Note that deleting an element will cause the loop to skip over the next element and eventually the loop execution will end in an error because the list is shorter than it was when the loop execution started.

```python 
list = [1, 2, 3, 4, 6, 7, 8, 10, 11]

for i in range(len(list)):
    element = list[i]
    print(element)

    if element % 2 == 0:
        del list[i]
 ```

Program outputs:
```
1
2
4
7
8
11
Traceback (most recent call last):
  File "remove.py", line 8, in <module>
    del list[element]
IndexError: list assignment index out of range
 ```

Deleting elements in a loop must therefore be done in some other way, for example with a while statement or by copying the stored elements to another data structure instead of deleting them.

A related exercise can be found on the last page of the tutorial.
