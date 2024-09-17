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

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=numlist%20%3D%20%5B1,%203,%202,%204,%206,%205%5D%0A%0A%23%20Creating%20a%20new%20list%20using%20list%20composition%0Alist2%20%3D%20%5Belement%20*%203%20for%20element%20in%20numlist%5D%0A%0Aprint%28list2%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

In practice, the end result is similar to creating a new empty list and adding the elements to it, for example with a for loop:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=numlist%20%3D%20%5B1,%203,%202,%204,%206,%205%5D%0A%0Alist2%20%3D%20%5B%5D%0Afor%20element%20in%20numlist%3A%0A%20%20%20%20list2.append%28element*%203%29%0A%0Aprint%28list2%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

List composition is useful, for example, when you want to form a list of strings into a list of numbers (or vice versa):

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20intlist%28list%3A%20list%29%20-%3E%20list%3A%0A%20%20%20%20return%20%5Bint%28element%29%20for%20element%20in%20list%5D%0A%0Adef%20strlist%28list%3A%20list%29%20-%3E%20list%3A%0A%20%20%20%20return%20%5Bstr%28element%29%20for%20element%20in%20list%5D%0A%0A%0A%23%20Testing%20with%20a%20list%20of%20integers%0Anumbers%20%3D%20list%28range%281,10%29%29%0Aprint%28numbers%29%0Asnums%20%3D%20strlist%28numbers%29%0Aprint%28snums%29%0A%0A%23%20Testing%20with%20character%20list%0Achars%20%3D%20%221%202%203%2022%2011%2044%205%203%202%209%22.split%28%29%0Aprint%28chars%29%0Anumbers%20%3D%20intlist%28chars%29%0Aprint%28numbers%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

A condition can also be combined with a list comprehension. The condition can be used to restrict the elements that will be included in the new list. The condition clause is written at the end of the summary as shown in the example below:

`[<clause> for <element> in <series> if <condition clause>]`

Let's first look at an example of an expression that picks only positive elements from the new list:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    intlist = [2, -2, 3, 4, -1, -5, 11, -3, -9, 2, 3]

    positives = [element for element in intlist if element > 0]

    print(positives)
    ```

    Program outputs:
    ```
    [2, 3, 4, 11, 2, 3]
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=intlist%20%3D%20%5B2,%20-2,%203,%204,%20-1,%20-5,%2011,%20-3,%20-9,%202,%203%5D%0A%0Apositives%20%3D%20%5Belement%20for%20element%20in%20intlist%20if%20element%20%3E%200%5D%0A%0Aprint%28positives%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Another example, where only even numbers are converted from an integer list to a string:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20even_tostring%28intlist%3A%20list%29%20-%3E%20list%3A%0A%20%20%20%20return%20%5Bstr%28num%29%20for%20num%20in%20intlist%20if%20num%20%25%202%20%3D%3D%200%5D%0A%0Anumbers%20%3D%20list%28range%281,15%29%29%0Aprint%28numbers%29%0A%0Astrnumbers%20%3D%20even_tostring%28numbers%29%0Aprint%28strnumbers%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>