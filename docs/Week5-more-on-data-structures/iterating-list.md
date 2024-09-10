---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Iterating list

In the fifth, we practiced creating lists, adding and modifying elements, and extracting individual elements from lists. However, it is often necessary to go through all the elements in a list. A typical reason might be, for example, to search for a particular (e.g. minimum or maximum) value in a list, or any operation that you want to apply to all the elements in a list.

Naturally, the list elements can be traversed using a while loop, for example, the following program prints all the list elements of a list one by one:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Example%20list%0Alist%20%3D%20%5B5,2,3,4,10,7%5D%0A%0Aindex%20%3D%200%0Awhile%20index%20%3C%20len%28list%29%3A%0A%20%20%20%20print%28list%5Bindex%5D%29%0A%20%20%20%20index%20%2B%3D%201&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

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

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Example%20list%0Alist%20%3D%20%5B5,2,3,4,10,7%5D%0A%0Afor%20element%20in%20list%3A%0A%20%20%20%20print%28element%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Note that when using the for clause, we don't need to worry about changing the value of a variable or breaking a condition with a break clause. The for clause automatically extracts all the elements in order from first to last and places them one by one in the given variable.

Consider another example where the sum of all the elements in a list is calculated:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Example%20list%0Alist%20%3D%20%5B1,%203,%202,%204,%205,%206%5D%0A%0Asum%20%3D%200%0Afor%20element%20in%20list%3A%0A%20%20%20%20sum%20%2B%3D%20element%0A%0Aprint%28f%22Sum%20became%20%7Bsum%7D.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

It is often customary to pick only the elements that are appropriate for the situation, even if all are screened. In the following example, the sum of even-numbered elements is calculated:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
    ``` 
    Sum became 12.
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Example%20list%0Alist%20%3D%20%5B1,%203,%202,%204,%205,%206%5D%0A%0Asum%20%3D%200%0Afor%20element%20in%20list%3A%0A%20%20%20%20%23%20Let's%20only%20choose%20even%20numbers%0A%20%20%20%20if%20element%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20sum%20%2B%3D%20element%0A%0Aprint%28f%22Sum%20became%20%7Bsum%7D.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

A third example, where only the elements that are divisible by two and three are printed:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Example%20list%0Alist%20%3D%20%5B1,2,3,4,5,6,7,8,9,10,11,12%5D%0A%0Afor%20element%20in%20list%3A%0A%20%20%20%20%23%20Let's%20only%20choose%20numbers%20divisible%20by%202%20and%203%0A%20%20%20%20if%20element%20%25%202%20%3D%3D%200%20and%20element%20%25%203%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20print%28element%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The repeat clause formed by a for-clause is called a **definite** repeat. This means that when we write the sentence, we already know which elements are to be run through. Similarly, a repetition formed by a while clause is called an indefinite repetition, because the length of the repetition is not automatically determined by the mere condition in the while clause.

A definite repeat clause also works with strings. In this case, the characters are extracted one by one from the string and placed in the given variable:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Example string
    name = "Pete Python"

    # Print characters one by one
    for char in name:
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Example%20string%0Aname%20%3D%20%22Pete%20Python%22%0A%0A%23%20Print%20characters%20one%20by%20one%0Afor%20char%20in%20name%3A%0A%20%20%20%20print%28char%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

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

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Let's%20print%20every%20third%20number%3A%0Afor%20i%20in%20range%281,%2020,%203%29%3A%0A%20%20%20%20print%28i%29%0A%0A%0A%23%20Let's%20print%20numbers%20from%20largest%20to%20smallest%3A%0Afor%20i%20in%20range%285,%200,%20-1%29%3A%0A%20%20%20%20print%28i%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

A list can also be created from the series if required. This can be done with the function list:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=my_list%20%3D%20list%28range%281,%2020,%202%29%29%0Aprint%28my_list%29%0A%0A%23%20Series%20can%20be%20saved%20in%20a%20variable%0Adown_from10%20%3D%20range%2810,%200,%20-1%29%0Aprint%28down_from10%29%0A%0Alist2%20%3D%20list%28down_from10%29%0Aprint%28list2%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Range is also useful with lists, for example when we want to change a list. Consider the following example:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=my_list%3D%20%5B1,%202,%203,%204%5D%0A%0Aprint%28%22List%20before%3A%22,%20my_list%29%0A%0Afor%20element%20in%20my_list%3A%0A%20%20%20%20element%20%2B%3D%201%0A%0Aprint%28%22List%20after%3A%22,%20my_list%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Printing the list at the end reveals that the placement in the loop variable does not change the original list. This is because the variable is copied one by one with the values of the list, but after copying, the variable no longer has a "link" to the list. Changing the value of a loop variable is therefore not passed on to the values in the list in any way.

However, the indexes in the list can be referenced by using the range function and information about the length of the list. Thus, using the range function, all the indices in the list from zero to length minus one are generated and passed through the for loop:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=my_list%3D%20%5B1,%202,%203,%204%5D%0A%0Aprint%28%22List%20before%3A%22,%20my_list%29%0A%0A%23%20If%20you%20leave%20out%20the%20starting%20parameter,%0A%23%20Python%20assumes%20that%20it's%20zero%0A%23%20range%284%29%20is%20the%20same%20as%20range%280,%204%29%0Afor%20i%20in%20range%28len%28my_list%29%29%3A%0A%20%20%20%20my_list%5Bi%5D%20%2B%3D%201%0A%0Aprint%28%22List%20after%3A%22,%20my_list%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Let's take a look at a second example:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=my_list%3D%20list%28range%281,10%29%29%0A%0Aprint%28%22List%20before%3A%22,%20my_list%29%0A%0A%23%20Let's%20convert%20all%20even%20values%20into%0A%23%20negatives%0Afor%20i%20in%20range%28len%28my_list%29%29%3A%0A%20%20%20%20if%20my_list%5Bi%5D%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20my_list%5Bi%5D%20%3D%20-my_list%5Bi%5D%0A%0Aprint%28%22List%20after%3A%22,%20my_list%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>