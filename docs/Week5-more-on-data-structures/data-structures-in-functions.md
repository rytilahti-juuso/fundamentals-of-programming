---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=numbers%20%3D%20%5B1,%202,%203,%205,%204%5D%0Anumbers2%20%3D%20numbers%0A%0Anumbers%5B0%5D%20%3D%2010%0Anumbers2%5B-1%5D%20%3D%2099%0A%0Aprint%28numbers%29%0Aprint%28numbers2%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Data structures as parameters

The same phenomenon occurs when we pass a mutable entity as a parameter to a function. Consider the example of creating a list and passing it as a parameter to a function that adds a new value to the list:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Note, that the function doesn't return anything
    def add_value(list: list):
        list.append(10)

    # Creating list
    list = [1,2,3,4,5]

    print("List before:", list)

    # Call the function
    add_value(list)

    print("List after:", list)
    ```

    Program outputs:
    ```
    List before: [1, 2, 3, 4, 5]
    List after: [1, 2, 3, 4, 5, 10]
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Note,%20that%20the%20function%20doesn't%20return%20anything%0Adef%20add_value%28list%3A%20list%29%3A%0A%20%20%20%20list.append%2810%29%0A%0A%23%20Creating%20list%0Alist%20%3D%20%5B1,2,3,4,5%5D%0A%0Aprint%28%22List%20before%3A%22,%20list%29%0A%0A%23%20Caal%20the%20function%0Aadd_value%28list%29%0A%0Aprint%28%22List%20after%3A%22,%20list%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

From the example, you can see that the function can change the list it receives as a parameter. However, this is not always appropriate.

Consider another example where the function is intended to find the second smallest value in the list. The programmer has used what he thinks is a clever trick of first ordering the elements in order of magnitude and then picking the second element:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20second_smallest_element%28my_list%3A%20list%29%20-%3E%20int%3A%0A%20%20%20%20%23%20Sorting%20list...%0A%20%20%20%20my_list.sort%28%29%0A%0A%20%20%20%20%23%20...when%20second%20smallest%20element%20is%20the%20second%20element%0A%20%20%20%20return%20my_list%5B1%5D%0A%0A%23%20Creating%20list%0Atestlist%20%3D%20%5B1,%205,%204,%206,%202,%203,%207,%208%5D%0A%0Aprint%28%22List%20before%3A%22,%20testlist%29%0A%0A%23%20Calling%20function%0Aprint%28%22Second%20smallest%3A%22,%20second_smallest_element%28testlist%29%29%0A%0A%23%20The%20order%20has%20changes%0Aprint%28%22List%20after%3A%22,%20testlist%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Now, when you call a function and pass a list as a parameter, you will notice that after the function is called, the elements of the list are in a different order than before the call. This may affect the rest of the program and produce hard-to-find errors - the function is not intended to modify the list, but to return the second largest element.

The (often unexpected) changes made to the entities that the function receives as parameters are called **side effects of the function**.

In general, it is almost always desirable that functions **do not change** the objects they are given as parameters. If a data structure is to be modified, it is usually a good idea to take a copy of it and modify that copy instead of the original:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20second_smallest_element%28list%3A%20list%29%20-%3E%20int%3A%0A%20%20%20%20%23%20Creating%20a%20sorted%20copy%20of%20the%20original%0A%20%20%20%20copy%20%3D%20sorted%28list%29%0A%0A%20%20%20%20%23%20...and%20choosing%20second%20element%20from%20the%20copy%0A%20%20%20%20return%20copy%5B1%5D%0A%0A%23%20Creating%20list%0Alist%20%3D%20%5B1,%205,%204,%206,%202,%203,%207,%208%5D%0A%0Aprint%28%22List%20before%3A%22,%20list%29%0A%0A%23%20Calling%20function%0Aprint%28%22Second%20smallest%3A%22,%20second_smallest_element%28list%29%29%0A%0A%23%20Lists%20order%20is%20the%20same%20after%20function%0Aprint%28%22List%20after%3A%22,%20list%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Data structures as return values

The function can also return a data structure. Usually this is a situation where either

1. a completely new data structure is created based on some parameters, or
2. copying and modifying the data structure received as a parameter.

An example of the first situation could be, for example, a function that creates a list of parameters:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20multiply_value%28value%3A%20int,%20amount%3A%20int%29%20-%3E%20list%3A%0A%20%20%20%20%23%20List%20multiplication%20produces%20a%20new%20list%0A%20%20%20%20%23%20where%20the%20original%20is%20multiplied%0A%20%20%20%20%23%20by%20the%20given%20value%0A%20%20%20%20list%20%3D%20%5Bvalue%5D%20*%20amount%0A%20%20%20%20return%20list%0A%0A%0A%23%20Testing%0Aprint%28multiply_value%285,%2010%29%29%0A%0Athreelist%20%3D%20multiply_value%283,%205%29%0Aprint%28threelist%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

An example of the latter is a function that takes a dictionary as a parameter, where the keys are numbers and the values are squares of numbers. The function returns a new dictionary with only those elements from the original dictionary where the key is negative:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20negative_keys%28squares%3A%20dict%29%20-%3E%20dict%3A%0A%20%20%20%20negat%20%3D%20%7B%7D%0A%0A%20%20%20%20for%20key%20in%20squares%3A%0A%20%20%20%20%20%20%20%20if%20key%20%3C%200%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20negat%5Bkey%5D%20%3D%20squares%5Bkey%5D%0A%0A%20%20%20%20return%20negat%0A%0A%23%20testing%20function%0Asquarebook%20%3D%20%7B%7D%0A%0A%23%20generating%20dictionary%20from%20key%20list%0Akeys%20%3D%20%5B1,-1,2,-2,4,-4,5,6,-7,8%5D%0Afor%20key%20in%20keys%3A%0A%20%20%20%20squarebook%5Bkey%5D%20%3D%20key%20*%20key%0A%0Aprint%28squarebook%29%0A%0Aprint%28negative_keys%28squarebook%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>