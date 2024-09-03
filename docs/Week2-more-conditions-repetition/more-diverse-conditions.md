---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# More diverse conditions

Conditional clauses can also be written inside each other. This means that structures can be written in which the truth of a condition is considered only when another condition has been true (or false). When writing nested conditional clauses, special attention must be paid to the indentation of blocks, because Python deduces the correct indentation of the block associated with each condition.

An example of a program that asks the user for a number and prints out whether the number is even or odd. However, the check for even is only made if the number is greater than zero.

 <Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    number = int(input("Give a number: "))

    # First we'll test if the number is greater than zero
    if number > 0:
        # If it is, we'll check if it's even or not
        if number % 2 == 0:
            print("The number is even")
        else:
            print("The number is odd")
    # This else-clause is related to the previous if-clause
    else:
        print("The number is less or equal to zero")
    ```

    Example executions:
    ```
    Give a number: 17
    The number is odd
    ```

    ```
    Give a number: 32
    The number is even
    ```

    ```
    Give a number: -6
    The number was less than zero
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=number%20%3D%20int%28input%28%22Give%20a%20number%3A%20%22%29%29%0A%0A%23%20First%20we'll%20test%20if%20the%20number%20is%20greater%20than%20zero%0Aif%20number%20%3E%200%3A%0A%20%20%20%20%23%20If%20it%20is,%20we'll%20check%20if%20it's%20even%20or%20not%0A%20%20%20%20if%20number%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20print%28%22The%20number%20is%20even%22%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28%22The%20number%20is%20odd%22%29%0A%23%20This%20else-clause%20is%20related%20to%20the%20previous%20if-clause%0Aelse%3A%0A%20%20%20%20print%28%22The%20number%20is%20less%20or%20equal%20to%20zero%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Another example, where the user is asked for name and address. If the place of residence is Turku, an additional clarifying question is asked:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    city = input("Where are you from? ")

    if city == "Turku":
        side = input("Which side of the river? ")

        if side == "Other side":
            print("There's the city market")
        else:
            print("There's the cathedral")
    elif city == "Tampere":
        print("There's Särkänniemi")
    else:
        print("It might be a pretty nice city.")
    ```

    Example executions:
    ``` 
    Where are you from? Turku
    Which side of the river? Other side
    There's the city market
    ```

    ```
    Where are you from? Tampere
    There's Särkänniemi
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=city%20%3D%20input%28%22Where%20are%20you%20from%3F%20%22%29%0A%0Aif%20city%20%3D%3D%20%22Turku%22%3A%0A%20%20%20%20side%20%3D%20input%28%22Which%20side%20of%20the%20river%3F%20%22%29%0A%0A%20%20%20%20if%20side%20%3D%3D%20%22Other%20side%22%3A%0A%20%20%20%20%20%20%20%20print%28%22There's%20the%20city%20market%22%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28%22There's%20the%20cathedral%22%29%0Aelif%20city%20%3D%3D%20%22Tampere%22%3A%0A%20%20%20%20print%28%22There's%20S%C3%A4rk%C3%A4nniemi%22%29%0Aelse%3A%0A%20%20%20%20print%28%22It%20might%20be%20a%20pretty%20nice%20city.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Logical operators

Several conditions can also be combined in a single condition clause. Logical operators are used to combine them.

First, let's look at the **and**-operator. This operator can be used to define compound clauses, where all conditions must be true for the whole clause to be true.
So, the clause

A and B

is true only when both A and B are true. If either is untrue, the whole clause is untrue.
So the operator works in much the same way as its natural language counterpart: the sentence

**"Coffee cup is on the table and the cup has coffee in it"**

is only true when the cup is on the table and there is coffee in it. If the cup is somewhere other than on the table, the whole sentence is untrue. Similarly, the whole sentence is untrue if there is tea in the cup.

Examples:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    num1 = 20
    num2 = 10

    # Both true--> clause is true
    if num1 == 20 and num1 > num2:
        print("First is true")

    # Both true --> clause is true
    if num2 < num1 and num2 != 20:
        print("Second is true")

    # Now second "subclause" is false --> clause is false
    if num1 == 20 and num2 == 20:
        print("Third is true")

    # Same now:
    if num1 < 15 and num2 < 15:
        print("Fourth is true")

    # Here both are false --> whole clause is false
    if num1 < 15 and num2 < 5:
        print("Fifth is true")
    ```

    Program outputs:
    ``` 
    First is true
    Second is true
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=num1%20%3D%2020%0Anum2%20%3D%2010%0A%0A%23%20Both%20true--%3E%20clause%20is%20true%0Aif%20num1%20%3D%3D%2020%20and%20num1%20%3E%20num2%3A%0A%20%20%20%20print%28%22First%20is%20true%22%29%0A%0A%23%20Both%20true%20--%3E%20clause%20is%20true%0Aif%20num2%20%3C%20num1%20and%20num2%20!%3D%2020%3A%0A%20%20%20%20print%28%22Second%20is%20true%22%29%0A%0A%23%20Now%20second%20%22subclause%22%20is%20false%20--%3E%20clause%20is%20false%0Aif%20num1%20%3D%3D%2020%20and%20num2%20%3D%3D%2020%3A%0A%20%20%20%20print%28%22Third%20is%20true%22%29%0A%0A%23%20Same%20now%3A%0Aif%20num1%20%3C%2015%20and%20num2%20%3C%2015%3A%0A%20%20%20%20print%28%22Fourth%20is%20true%22%29%0A%0A%23%20Here%20both%20are%20false%20--%3E%20whole%20clause%20is%20false%0Aif%20num1%20%3C%2015%20and%20num2%20%3C%205%3A%0A%20%20%20%20print%28%22Fifth%20is%20true%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The operator **or** can be used to form expressions that are true if one or more subexpressions are true. Clause

A or B

is true if either A or B or both are true. If both are false, the whole expression is false.

Examples:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    num1 = 20
    num2 = 10

    # Both true --> clause is true
    if num1 == 20 or num1 > num2:
        print("First is true")

    # Second true --> clause is true
    if num1 == 20 or num2 == 20:
        print("Second is true")

    # Same here:
    if num1 < 15 or num2 < 15:
        print("Third is true")

    # Here both are false --> whole clause if false
    if num1 < 15 or num22 < 5:
        print("Fourth is true")
    ```

    Program outputs:
    ```
    First is true
    Second is true
    Third is true
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=num1%20%3D%2020%0Anum2%20%3D%2010%0A%0A%23%20Both%20true%20--%3E%20clause%20is%20true%0Aif%20num1%20%3D%3D%2020%20or%20num1%20%3E%20num2%3A%0A%20%20%20%20print%28%22First%20is%20true%22%29%0A%0A%23%20Second%20true%20--%3E%20clause%20is%20true%0Aif%20num1%20%3D%3D%2020%20or%20num2%20%3D%3D%2020%3A%0A%20%20%20%20print%28%22Second%20is%20true%22%29%0A%0A%23%20Same%20here%3A%0Aif%20num1%20%3C%2015%20or%20num2%20%3C%2015%3A%0A%20%20%20%20print%28%22Third%20is%20true%22%29%0A%0A%23%20Here%20both%20are%20false%20--%3E%20whole%20clause%20if%20false%0Aif%20num1%20%3C%2015%20or%20num2%20%3C%205%3A%0A%20%20%20%20print%28%22Fourth%20is%20true%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Finally, the operator **not**, which reverses the truth value. Clause

not A

is true if A is false, or false if A is true.

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    num1 = 20
    num2 = 10

    # Originally false, now true
    if not num1 < num2:
        print("First is true")

    # Originally true, now false
    if not num1 != num2:
        print("Second is false")
    ```

    Program outputs:
    ``` 
    First is true
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=num1%20%3D%2020%0Anum2%20%3D%2010%0A%0A%23%20Originally%20false,%20now%20true%0Aif%20not%20num1%20%3C%20num2%3A%0A%20%20%20%20print%28%22First%20is%20true%22%29%0A%0A%23%20Originally%20true,%20now%20false%0Aif%20not%20num1%20!%3D%20num2%3A%0A%20%20%20%20print%28%22Second%20is%20false%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The table below shows the function of all logical operators for different operands:

| A | B | A and B | A or B | not A |
|---|---|---------|--------|-------|
| True | True | True | True | False |
| True | False | False | True | False |
| False | True | False | True | True |
| True | True | True | False | True |