---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# More list operations

Many of the operations familiar from strings also work for lists. Let's look at some useful operations.

Since a list is a mutable (i.e. variable) data structure, the order of its elements can be changed. The elements of a list can be arranged in a natural order from least to greatest using the **sort** method:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lotterynumbers%20%3D%20%5B17,%205,%204,%2022,%201,%2019,%209%5D%0A%0A%23%20Sort%20the%20numbers%0Alotterynumbers.sort%28%29%0A%0Aprint%28lotterynumbers%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

If you want to preserve the order of the elements in the original list, you can use the **sorted** function to create an ordered copy of the list. Note the difference: sort is a method and sorted is a function, so they are called differently.

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lotterynumbers%20%3D%20%5B17,%205,%204,%2022,%201,%2019,%209%5D%0A%0A%23%20Let's%20create%20and%20ordered%20copy%0A%23%20This%20doesn't%20affect%20the%20original%20list%0Aordered%20%3D%20sorted%28lotterynumbers%29%0A%0Aprint%28%22Original%3A%22,%20lotterynumbers%29%0Aprint%28%22Ordered%3A%22,%20ordered%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The order of the elements in the list can be reversed with the method **reverse**:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=numbers%20%3D%20list%28range%281,5%29%29%0A%0A%23%20add%20another%20list%20with%20the%20%2B-operator%0Anumbers%20%2B%3D%20list%28range%2820,25%29%29%0A%0Aprint%28numbers%29%0A%0A%23%20Invert...%0Anumbers.reverse%28%29%0A%0Aprint%28numbers%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

A **substring** can be extracted from a list in the same way as a substring from a string:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=list%20%3D%20list%28range%2810%29%29%0A%0Aprint%28%22Whole%20list%3A%22,%20list%29%0A%0Aprint%28%22First%20half%3A%22,%20list%5B%20%3A%205%5D%29%0Aprint%28%22Second%20half%3A%22,%20list%5B5%20%3A%20%5D%29%0Aprint%28%22Piece%20from%20the%20middle%3A%22,%20list%5B4%20%3A%208%5D%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

A copy of the entire list (actually a partial copy of the original list from start to finish) is obtained by omitting both the start and end indices. This is often a handy operation when you want to process the elements of a list while preserving the original values and order:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=list%20%3D%20list%28range%2810%29%29%0A%0A%23%20copy%20the%20whole%20list%0Acopy%20%3D%20list%5B%3A%5D%0A%0Acopy.reverse%28%29%0Acopy%5B0%5D%20%3D%201000%0Acopy%5B-1%5D%20%3D%20-10000%0A%0Aprint%28%22Original%3A%22,%20list%29%0Aprint%28%22Copy%3A%20%22,%20copy%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The occurrence of a list element can be viewed using the in operator. The index of the element can be found by using the **index** method. Note that although **index** works with strings, for some reason the find method does not work with lists. Also note that unlike the find method, **index** will return an error if you try to retrieve an instance of an element that is not in a list. So before using the **index** method, it is a good idea to check the occurrence of the element with the in operator.

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=power_twos%20%3D%20%5B1,%202,%204,%208,%2016,%2032,%2064,%20128,%20256%5D%0A%0Afor%20i%20in%20range%281,%2010%29%3A%0A%20%20%20%20if%20i%20in%20power_twos%3A%0A%20%20%20%20%20%20%20%20print%28i,%20%22is%20a%20power%20of%20two%20%22%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28i,%20%22is%20not%20a%20power%20of%20two%22%29%0A%0Aprint%28%224%20is%20found%20from%20the%20index%22,%20power_twos.index%284%29%29%0Aprint%28%22128%20is%20found%20from%20the%20index%22,%20power_twos.index%28128%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Other handy functions for handling lists are at least min, max and sum, which return the smallest or largest element of a list or the sum of all elements in a list. The following example illustrates the use of these functions:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=results%20%3D%20%5B10,%204,%2012,%203,%2016,%207,%209,%207,%2013%5D%0A%0Aprint%28%22Largest%20value%3A%22,%20max%28results%29%29%0Aprint%28%22Smallest%20value%3A%22,%20min%28results%29%29%0Aprint%28%22Sum%3A%22,%20sum%28results%29%29%0Aprint%28%22Average%3A%22,%20sum%28results%29%20/%20len%28results%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>