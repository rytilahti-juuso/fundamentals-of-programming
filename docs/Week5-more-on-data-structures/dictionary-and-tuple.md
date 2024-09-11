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

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=students%20%3D%20%7B%7D%0A%0Astudents%5B%2212345%22%5D%20%3D%20%22Sam%20Student%22%0Astudents%5B%2254321%22%5D%20%3D%20%22Sally%20Student%22%0A%0Aprint%28students%29%0A%0Astudents%5B%2299999%22%5D%20%3D%20%22Mike%20Madeup%22%0Astudents%5B%2255555%22%5D%20%3D%20%22Tim%20Talented%22%0A%0Aprint%28students%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Note that if the key already exists in the dictionary, the old value will be replaced by the new one:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=prices%20%3D%20%7B%7D%0Aprices%5B%22Apple%22%5D%20%3D%205.95%0Aprices%5B%22Banana%22%5D%20%3D%203.90%0Aprices%5B%22Orange%22%5D%20%3D%204.50%0A%0Aprint%28prices%29%0A%0A%23%20Now%20Apple%20already%20exists%20within%20the%20dictionary,%20so%0A%23%20instead%20of%20creating%20a%20new%20element%20the%20value%20is%20modified%0Aprices%5B%22Apple%22%5D%20%3D%204.25%0A%0Aprint%28prices%29%0A%0A%23%20Pineapple%20didn't%20exist%20earlier%20in%20the%20dictionary,%20%0A%23%20it's%20added%20as%20a%20new%20key-value%20pair%0Aprices%5B%22Pineapple%22%5D%20%3D%207.90%0A%0Aprint%28prices%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

A value can be retrieved from the dictionary based on the key:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=prices%20%3D%20%7B%7D%20%0Aprices%5B%22Apple%22%5D%20%3D%205.95%20%0Aprices%5B%22Banana%22%5D%20%3D%203.90%20%0Aprices%5B%22Orange%22%5D%20%3D%204.50%0Aprices%5B%22Pineapple%22%5D%20%3D%207.90%0A%0Aprint%28%22Apple%20costs%3A%22,%20prices%5B%22Apple%22%5D%29%0A%0Aprint%28%22Banana%20costs%3A%22,%20prices%5B%22Banana%22%5D%29%0A%0Atogether%20%3D%20prices%5B%22Orange%22%5D%20%2B%20prices%5B%22Pineapple%22%5D%0Aprint%28%22Orange%20and%20pineapple%20combined%3A%22,%20together%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

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

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
        print(f"With key {key} value {translations[key]} is found")
    ```

    Program outputs:
    ```
    Elements in the dictionary: 4
    Elements in the dictionary now: 5
    With key auto value car is found
    With key vene value boat is found
    With key pyörä value bike is found
    With key lentokone value plane is found
    With key mopo value moped is found
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Let's%20initialize%20the%20dictionary%20by%20giving%20some%20elements%20to%20complete%0Atranslations%20%3D%20%7B%22auto%22%3A%20%22car%22,%20%22vene%22%3A%20%22boat%22,%20%22py%C3%B6r%C3%A4%22%3A%20%22bike%22,%20%22lentokone%22%3A%20%22plane%22%7D%0A%0A%23%20len%20returns%20the%20number%20of%20elements%0Aprint%28%22Elements%20in%20the%20dictionary%3A%22,%20len%28translations%29%29%0A%0A%23%20add%20element%0Atranslations%5B%22mopo%22%5D%20%3D%20%22moped%22%0A%0Aprint%28%22Elements%20in%20the%20dictionary%20now%3A%22,%20len%28translations%29%29%0A%0A%23%20print%20keys%20and%20values%0Afor%20key%20in%20translations%3A%0A%20%20%20%20print%28f%22With%20key%20%7Bkey%7D%20value%20%7Btranslations%5Bkey%5D%7D%20is%20found%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

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

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
    Give the x-coordinate (-1 quits): -1
    [(4, 6), (2, 5), (10, 9)]
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=coordinates%20%3D%20%5B%5D%0A%0Awhile%20True%3A%0A%20%20%20%20x%20%3D%20int%28input%28%22Give%20the%20x-coordinate%20%28-1%20quits%29%3A%20%22%29%29%0A%20%20%20%20if%20x%20%3D%3D%20-1%3A%0A%20%20%20%20%20%20%20%20break%0A%0A%20%20%20%20y%20%3D%20int%28input%28%22Give%20the%20y-coordinate%3A%20%22%29%29%0A%0A%20%20%20%20pair%20%3D%20%28x,%20y%29%0A%20%20%20%20coordinates.append%28pair%29%0A%0Aprint%28coordinates%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Another example, where the function is given a list of tuples containing hockey match data as a parameter. Each tuple contains, in order, the elements for the home team, the away team, and the goal totals for both teams. The function returns a new tuple containing, in order, the number of home wins, draws and away wins.

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20statistic%28matches%3A%20list%29%20-%3E%20tuple%3A%0A%20%20%20%20homewins%20%3D%200%0A%20%20%20%20draws%20%3D%200%0A%20%20%20%20awaywins%20%3D%200%0A%0A%20%20%20%20for%20match%20in%20matches%3A%0A%20%20%20%20%20%20%20%20%23%20elements%20in%20order%3A%20%0A%20%20%20%20%20%20%20%20%23%20home%20team,%20away%20team,%20home%20goals,%20away%20goals%0A%20%20%20%20%20%20%20%20homegoals%20%3D%20match%5B2%5D%0A%20%20%20%20%20%20%20%20awaygoals%3D%20match%5B3%5D%0A%0A%20%20%20%20%20%20%20%20if%20homegoals%20%3E%20awaygoals%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20homewins%20%2B%3D%201%0A%20%20%20%20%20%20%20%20elif%20awaygoals%20%3E%20homegoals%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20awaywins%20%2B%3D%201%0A%20%20%20%20%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20draws%20%2B%3D%201%0A%0A%20%20%20%20return%20%28homewins,%20draws,%20awaywins%29%0A%0A%23%20Testing%20function%0Amatchlist%20%3D%20%5B%5D%0Amatchlist.append%28%28%22JPS%22,%20%22PPS%22,%201,%200%29%29%0Amatchlist.append%28%28%22PPS%22,%20%22Pallerot%22,%202,%202%29%29%0Amatchlist.append%28%28%22JPS%22,%20%22Pallerot%22,%202,%203%29%29%0Amatchlist.append%28%28%22HC%20Python%22,%20%22HC%20Java%22,%205,%205%29%29%0Amatchlist.append%28%28%22HC%20Python%22,%20%22PPS%22,%202,%201%29%29%0Amatchlist.append%28%28%22JPS%22,%20%22HC%20Java%22,%201,%204%29%29%0Amatchlist.append%28%28%22HC%20Java%22,%20%22PPS%22,%202,%200%29%29%0A%0Astatistics%20%3D%20statistic%28matchlist%29%0A%0Aprint%28%22Home%20wins%3A%22,%20statistics%5B0%5D%29%0Aprint%28%22Draws%3A%22,%20statistics%5B1%5D%29%0Aprint%28%22Away%20wins%3A%22,%20statistics%5B2%5D%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Note that although you cannot change a tuple, you can replace it with a new tuple. In the following, we will edit the list of persons so that all the endings of the email addresses are changed. The existing tuples will be replaced by new ones.

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
        email = prs[1]

        # replace the domain part
        email = email.replace("example.com", "example.fi")

        # save back to the list
        # name stays the same
        personnel[i] = (prs[0], email)


    for person in personnel:
        print(person)
    ```

    Program outputs:
    ```
    ('Sam', 'sam@example.fi')
    ('Sally', 'sally@example.fi')
    ('Mike', 'mike@example.fi')
    ('Tim', 'tim@example.fi')
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=sam%20%3D%20%28%22Sam%22,%20%22sam%40example.com%22,%29%0Asally%20%3D%20%28%22Sally%22,%20%22sally%40example.com%22%29%0Amike%20%3D%20%28%22Mike%22,%20%22mike%40example.com%22%29%0Atim%20%3D%20%28%22Tim%22,%20%22tim%40example.com%22%29%0A%0Apersonnel%20%3D%20%5Bsam,%20sally,%20mike,%20tim%5D%0A%0A%23%20Iterate%20through%20and%20modify%20emails%0A%23%20Note%20that%20in%20order%20to%20modify%20list's%20elements%0A%23%20we'll%20use%20the%20range-function%20in%20the%20iteration%0Afor%20i%20in%20range%28len%28personnel%29%29%3A%0A%20%20%20%20prs%20%3D%20personnel%5Bi%5D%0A%20%20%20%20%0A%20%20%20%20%23%20email%20is%20the%20second%20element%0A%20%20%20%20email%20%3D%20prs%5B1%5D%0A%0A%20%20%20%20%23%20replace%20the%20domain%20part%0A%20%20%20%20email%20%3D%20email.replace%28%22example.com%22,%20%22example.fi%22%29%0A%0A%20%20%20%20%23%20save%20back%20to%20the%20list%0A%20%20%20%20%23%20name%20stays%20the%20same%0A%20%20%20%20personnel%5Bi%5D%20%3D%20%28prs%5B0%5D,%20email%29%0A%0A%0Afor%20person%20in%20personnel%3A%0A%20%20%20%20print%28person%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Removing elements from data structures

You can remove entries from the dictionary and from the list using, for example, the keyword **del**. Note that you cannot remove elements from a tuple because it is mutation-free.

In a list, the element is removed by giving the del clause a reference to the element to be removed. For example,

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=list%20%3D%20%5B1,2,3,4,5,6%5D%0A%0A%23%20remove%20the%20second%20value%0Adel%20list%5B1%5D%20%0Aprint%28list%29%0A%0A%23%20remove%20the%20final%20value%0Adel%20list%5B-1%5D%0Aprint%28list%29%0A%0A%23%20remove%20the%20first%20value%0Adel%20list%5B0%5D%0Aprint%28list%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

From the dictionary, an element is deleted by referring to the key of the element to be deleted:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    heights = {"Kim": 180, "Lisa": 171, "Ann": 145, "Alex": 164}

    # Remove Kim
    del heights["Kim"]
    print(heights)

    # Remove Ann
    del heights["Ann"]
    print(heights)
    ```

    Program outputs:
    ```
    {'Lisa': 171, 'Ann': 145, 'Alex': 164}
    {'Lisa': 171, 'Alex': 164}
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=heights%20%3D%20%7B%22Kim%22%3A%20180,%20%22Lisa%22%3A%20171,%20%22Ann%22%3A%20145,%20%22Alex%22%3A%20164%7D%0A%0A%23%20Remove%20Kim%0Adel%20heights%5B%22Kim%22%5D%0Aprint%28heights%29%0A%0A%23%20Remove%20Ann%0Adel%20heights%5B%22Ann%22%5D%0Aprint%28heights%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Removing elements inside the loop can mess up the iteration. Consider the following example, where you go through the loop, print each element, and remove an element if it is an even number. Note that deleting an element will cause the loop to skip over the next element and eventually the loop execution will end in an error because the list is shorter than it was when the loop execution started.

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=list%20%3D%20%5B1,%202,%203,%204,%206,%207,%208,%2010,%2011%5D%0A%0Afor%20i%20in%20range%28len%28list%29%29%3A%0A%20%20%20%20element%20%3D%20list%5Bi%5D%0A%20%20%20%20print%28element%29%0A%0A%20%20%20%20if%20element%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20del%20list%5Bi%5D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Deleting elements in a loop must therefore be done in some other way, for example with a while statement or by copying the stored elements to another data structure instead of deleting them.