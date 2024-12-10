---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# More Python's features, part 2

## Ordering orders

In the context of the lists, different possibilities for arranging the lists in a natural order were examined. Although very useful, the arrangement as such is a bit flawed: for example, a list containing tuples is always ordered by the first element of the tuples by default.

However, an ordering function (or method) can be given a function as a parameter, which is used to determine the value of the substrings to be ordered. For example, a tuple list can be ordered by any element (or even by the sum of elements).

The example below illustrates the ordering of a tuple list according to two different principles. Note that the key parameter takes the value of the function, not the result of a function call! So there are no parentheses after the function name in this situation.

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Returns the second element of the tuple
    def second_element(t: tuple) -> int:
        return t[1]

    # Returns the multiplication of the elements
    def multiply(t: tuple) -> int:
        return t[0] * t[1]


    list = [(1, 6), (3, 1), (3, 4), (2, 7), (8, 1)]

    # Sorting list by the default, first value
    list.sort()
    print(list)

    # Sorting list by every tuple's second element
    list.sort(key=second_element)
    print(list)

    # Sorting list by elements' multiplications
    list.sort(key=multiply)
    print(list)
    ```

    Program outputs:
    ```
    [(1, 6), (2, 7), (3, 1), (3, 4), (8, 1)]
    [(3, 1), (8, 1), (3, 4), (1, 6), (2, 7)]
    [(3, 1), (1, 6), (8, 1), (3, 4), (2, 7)]
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Returns%20the%20second%20element%20of%20the%20tuple%0Adef%20second_element%28t%3A%20tuple%29%20-%3E%20int%3A%0A%20%20%20%20return%20t%5B1%5D%0A%0A%23%20Returns%20the%20multiplication%20of%20the%20elements%0Adef%20multiply%28t%3A%20tuple%29%20-%3E%20int%3A%0A%20%20%20%20return%20t%5B0%5D%20*%20t%5B1%5D%0A%0A%0Alist%20%3D%20%5B%281,%206%29,%20%283,%201%29,%20%283,%204%29,%20%282,%207%29,%20%288,%201%29%5D%0A%0A%23%20Sorting%20list%20by%20the%20default,%20first%20value%0Alist.sort%28%29%0Aprint%28list%29%0A%0A%23%20Sorting%20list%20by%20every%20tuple's%20second%20element%0Alist.sort%28key%3Dsecond_element%29%0Aprint%28list%29%0A%0A%23%20Sorting%20list%20by%20elements'%20multiplications%0Alist.sort%28key%3Dmultiply%29%0Aprint%28list%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>    
</Tabs>

Another example, where strings are ordered by the number of characters. Since the len function already exists, there is no need to redefine it:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    names = ["Mike", "Lissabon", "Al", "Maria", "Edward"]

    names.sort(key=len)
    print(names)
    ```

    Program outputs:
    ```
    ['Al', 'Mike', 'Maria', 'Edward', 'Lissabon']
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=names%20%3D%20%5B%22Mike%22,%20%22Lissabon%22,%20%22Al%22,%20%22Maria%22,%20%22Edward%22%5D%0A%0Anames.sort%28key%3Dlen%29%0Aprint%28names%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Note that the min and max functions also accept the key parameter. It is therefore possible to specify which value is used to pick the minimum or maximum. So the following example picks the longest string from the list:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    names = ["Mike", "Lissabon", "Al", "Maria", "Edward"]

    print("Longest name is", max(names, key=len))
    ```

    Program outputs:
    ```
    Longest name is Lissabon
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=names%20%3D%20%5B%22Mike%22,%20%22Lissabon%22,%20%22Al%22,%20%22Maria%22,%20%22Edward%22%5D%0A%0Aprint%28%22Longest%20name%20is%22,%20max%28names,%20key%3Dlen%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Another example, where the smallest element in the list is extracted:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def absolute(element: int) -> int:
        if element < 0:
            return -element
        return element

    numbers = [4, -5, 2, -1, 6, 8, -10]
    print("Smallest by absolute:", min(numbers, key=absolute))
    ```

    Program outputs:
    ```
    Smallest by absolute: -1
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20absolute%28element%3A%20int%29%20-%3E%20int%3A%0A%20%20%20%20if%20element%20%3C%200%3A%0A%20%20%20%20%20%20%20%20return%20-element%0A%20%20%20%20return%20element%0A%0Anumbers%20%3D%20%5B4,%20-5,%202,%20-1,%206,%208,%20-10%5D%0Aprint%28%22Smallest%20by%20absolute%3A%22,%20min%28numbers,%20key%3Dabsolute%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Anonymous functions

The helper function used in an ordering is a good example of a situation where writing a whole function seems a bit redundant - especially when the function is usually not intended to be called from anywhere other than the ordering. In such a situation, an anonymous function may be a better solution.

The idea of an anonymous function is that it is defined in a situation where you need to provide a function (for example, for an arrangement function or a min or max function), but where the function is not intended to be called in any other way.

Such a function can be defined with a lambda clause. Its syntax is

`lambda <parameters>: <clause>`

The following example uses a lambda clause to define the value function to be assigned to an ordinal function. The function returns the second element of the tuple:

```python 
list = [(4,2), (5,1), (3,3), (9,1), (6,3)]

# Value function is created by lambda clause
# which returns the second value of the tuple
list.sort(key=lambda element: element[1])

print(list)
 ```

Program outputs:
```
[(5, 1), (9, 1), (4, 2), (3, 3), (6, 3)]
 ```

Another example where a maximum function is given a value function that returns the sum of the elements of a tuple:

```python 
list = [(4,2), (5,1), (3,3), (9,1), (6,3), (6,6), (10, 1)]

# Value function is created by lambda clause
# which returns sum of the first two values
largest = max(list, key = lambda element: element[0] + element[1])

print(largest)
 ```

Program outputs:
``` 
(6, 6)
 ```


## Parameter's default values

Python allows you to set a default value for the formal parameters of functions. If a default value is given, the actual parameter value does not have to be given when the function is called. However, if the actual value is given, it overrides the default value.

For example

```python 
def write_rows(filename: str, rows: list, add_rowchanges: bool = True):
    with open(filename, "w") as file:
        for row in rows:
            if add_rowchanges:
                row += "\n"
            file.write(row)



# rows
rows = ["Hello everyone", "Example on parameter's default values", "That's all, bye!"]

# If the third parameter is not given, 
# it gets the default value True
write_rows("example1.txt", rows)

# If the parameter is given a value, 
# it overwrites the default value
write_rows("example2.txt", rows, False)
 ```

The program writes two files:

example1.txt:
```
Hello everyone
Example on parameter's default values
That's all, bye!
 ```

example2.txt:
``` 
Hello everyoneExample on parameter's defaultvaluesThat's all, bye!
 ```

Here's another example:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def combine_elements(list: list, spacer: str = ","):
        return spacer.join(list)

    list = ["Huey", "Dewey", "Louie"]

    # If no spacer is given, comma is used
    print(combine_elements(list))

    # If a spacer is given, it replaces the comma
    print(combine_elements(list, ";"))
    print(combine_elements(list, " and "))
    ```

    Program outputs:
    ```
    Huey,Dewey,Louie
    Huey;Dewey;Louie
    Huey and Dewey and Louie
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20combine_elements%28list%3A%20list,%20spacer%3D%22,%22%29%3A%0A%20%20%20%20return%20spacer.join%28list%29%0A%0Alist%20%3D%20%5B%22Huey%22,%20%22Dewey%22,%20%22Louie%22%5D%0A%0A%23%20If%20no%20spacer%20is%20given,%20comma%20is%20used%0Aprint%28combine_elements%28list%29%29%0A%0A%23%20If%20a%20spacer%20is%20given,%20it%20replaces%20the%20comma%0Aprint%28combine_elements%28list,%20%22%3B%22%29%29%0Aprint%28combine_elements%28list,%20%22%20and%20%22%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>