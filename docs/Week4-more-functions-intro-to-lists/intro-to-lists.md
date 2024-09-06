---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction to lists

Variables are essential in programs for temporarily storing data. Strings, numbers and truth values are very suitable for storing a wide range of data, but are simply inadequate if there is a lot of data. Consider, for example, a situation where we need to store 10 000 lines of textual data for processing: setting and processing 10 000 separate variables would be impractical.

When there is a lot of data, data structures are usually used in programming. In data structures, it is typical that the data is somehow parallel: for example, the 10 000 lines of text mentioned above, or, say, a million numbers.

Let's start by looking at data structures in the form of lists. A list is made up of successive elements. A tuple refers to a single unit of data, or entity, stored in a list - for example, a single number, a string, a truth value or, say, another list.

In Python, a list is a dynamic data structure. This dynamicity means that the size of a list can change after it is initialized: new elements can be added to the list and old elements can be deleted. In addition, the elements of a list can be replaced by other elements.

In Python, a list can be created by typing the desired elements inside square brackets. Usually, the list reference is stored in a variable, so that the list can be referenced even after it has been created. The syntax is similar to the creation of any variable:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # List with integers
    lotterynumbers = [2, 15, 8, 32, 37, 6, 9]

    # List with floats
    temperatures = [11.5, 14.25, 18.5, 11.05, 5.5, -2.0, -5.75]

    # List with strings
    nephews = ["Huey", "Dewey", "Louie"]

    # Python can print the list a printable form
    print(lotterynumbers)
    print(temperatures)
    print(nephews)
    ```

    Program outputs:
    ```
    [2, 15, 8, 32, 37, 6, 9]
    [11.5, 14.25, 18.5, 11.05, 5.5, -2.0, -5.75]
    ['Huey', 'Dewey', 'Louie']
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20List%20with%20integers%0Alotterynumbers%20%3D%20%5B2,%2015,%208,%2032,%2037,%206,%209%5D%0A%0A%23%20List%20with%20floats%0Atemperatures%20%3D%20%5B11.5,%2014.25,%2018.5,%2011.05,%205.5,%20-2.0,%20-5.75%5D%0A%0A%23%20List%20with%20strings%0Anephews%20%3D%20%5B%22Huey%22,%20%22Dewey%22,%20%22Louie%22%5D%0A%0A%23%20Python%20can%20print%20the%20list%20a%20printable%20form%0Aprint%28lotterynumbers%29%0Aprint%28temperatures%29%0Aprint%28nephews%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Handling list elements

The elements of the list are referenced in the same way as the characters in the string: by hook notation and indexes. The indexing of list elements also starts from zero. As usual, the length of the list is returned by the len function.

For example:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # List with integers
    lotterynumbers = [2, 15, 8, 32, 37, 6, 9]

    # Printing the first element of the list
    print("First element:", lotterynumbers[0])

    # List's last element can be found out either
    # by formula length - 1 or by using negative index
    length = len(lotterynumbers)

    print("List length:", length)
    print("Last element:", lotterynumbers[len(lotterynumbers) - 1])
    print("Also last element:", lotterynumbers[-1])
    ```

    Program outputs:
    ```
    First element: 2
    List length: 7
    Last element: 9
    Also last element: 9
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20List%20with%20integers%0Alotterynumbers%20%3D%20%5B2,%2015,%208,%2032,%2037,%206,%209%5D%0A%0A%23%20Printing%20the%20first%20element%20of%20the%20list%0Aprint%28%22First%20element%3A%22,%20lotterynumbers%5B0%5D%29%0A%0A%23%20List's%20last%20element%20can%20be%20found%20out%20either%0A%23%20by%20formula%20length%20-%201%20or%20by%20using%20negative%20index%0Alength%20%3D%20len%28lotterynumbers%29%0A%0Aprint%28%22List%20length%3A%22,%20length%29%0Aprint%28%22Last%20element%3A%22,%20lotterynumbers%5Blen%28lotterynumbers%29%20-%201%5D%29%0Aprint%28%22Also%20last%20element%3A%22,%20lotterynumbers%5B-1%5D%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

In fact, strings are similar to lists in other ways, both supporting many of the same operations. The main difference is that strings are mutation-free: once created, the contents of a string cannot be changed. However, the values of the string starts can be changed:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    numbers = [1,2,3,4,5]

    # List can be changed
    numbers[0] = 10

    print("List now:", numbers)
    ```
    Program outputs:
    ``` 
    List now: [10, 2, 3, 4, 5]
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=numbers%20%3D%20%5B1,2,3,4,5%5D%0A%0A%23%20List%20can%20be%20changed%0Anumbers%5B0%5D%20%3D%2010%0A%0Aprint%28%22List%20now%3A%22,%20numbers%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

An attempt to change the string, on the other hand, will result in an error message:

```python 
string = "Hello!"

# An attempt to change a string leads to an error...
string[0] = "m"
 ```

Program outputs:
```
Traceback (most recent call last):
  File "string.py", line 10, in <module>
    string[0] = "m"
TypeError: 'str' object does not support item assignment
 ```


You can add a new element to the list with the **append** method. The new element is added as the last element of the list, increasing the length of the list by one.

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # An empty list can be created by specifying just square brackets
    list = []

    # Adding elements to the list
    list.append(10)
    list.append(5)
    list.append(20)
    list.append(55)

    print(list)

    # Just a few more
    list.append(1 + 1)
    list.append(10 + 10 + 10)
    list.append(len(list))

    print(list)
    ```

    Program outputs:
    ```
    [10, 5, 20, 55]
    [10, 5, 20, 55, 2, 30, 6]
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20An%20empty%20list%20can%20be%20created%20by%20specifying%20just%20square%20brackets%0Alist%20%3D%20%5B%5D%0A%0A%23%20Adding%20elements%20to%20the%20list%0Alist.append%2810%29%0Alist.append%285%29%0Alist.append%2820%29%0Alist.append%2855%29%0A%0Aprint%28list%29%0A%0A%23%20Just%20a%20few%20more%0Alist.append%281%20%2B%201%29%0Alist.append%2810%20%2B%2010%20%2B%2010%29%0Alist.append%28len%28list%29%29%0A%0Aprint%28list%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>


Next week, we'll look in more detail at the properties of a list, including iterating through the elements of a list (i.e. iterating), non-numeric lists, and removing and adding elements to the beginning or middle of a list. The use of lists as function parameters and return values is also discussed, and an overview of various useful list methods is given.