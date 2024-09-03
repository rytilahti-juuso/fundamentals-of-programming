---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# More conditions

Last week, we began our exploration of the conditional clause by looking at conditions that tested the equality of two operands. Clause

a == b

is true if, after evaluation, clauses a and b have exactly the same value. Equivalence applies to numbers as well as to strings.

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    if 50 == 25 + 25:
        print("This is true")

    if 50 / 2 == 20:
        print("This isn't true")

    if "Pete Python" == "Pete" + " " + "Python":
        print("This is also true")

    if "ABC" == "abc":
        print("This isn't true")
    ```

    Program outputs:
    ```
    This is true
    This is also true
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=if%2050%20%3D%3D%2025%20%2B%2025%3A%0A%20%20%20%20print%28%22This%20is%20true%22%29%0A%0Aif%2050%20/%202%20%3D%3D%2020%3A%0A%20%20%20%20print%28%22This%20isn't%20true%22%29%0A%0Aif%20%22Pete%20Python%22%20%3D%3D%20%22Pete%22%20%2B%20%22%20%22%20%2B%20%22Python%22%3A%0A%20%20%20%20print%28%22This%20is%20also%20true%22%29%0A%0Aif%20%22ABC%22%20%3D%3D%20%22abc%22%3A%0A%20%20%20%20print%28%22This%20isn't%20true%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

In many cases, the definition of conditions can be facilitated by using other comparison operators than equality.

For example, the difference between two operands can be examined with the difference operator !=. Clause

a != b

is **true** if clauses a and b do not have exactly the same value after evaluation.

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    first = 10 * 10
    second = 50

    if first == second:
        print("Are equal")

    if first != second:
        print("Aren't equal")

    if "Pete Python" != "Pete" + "Python":
        print("Wasn't the same string, a space was missing")
    ```

    Program outputs:
    ```
    Aren't equal
    Wasn't the same string, a space was missing
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=first%20%3D%2010%20*%2010%0Asecond%20%3D%2050%0A%0Aif%20first%20%3D%3D%20second%3A%0A%20%20%20%20print%28%22Are%20equal%22%29%0A%0Aif%20first%20!%3D%20second%3A%0A%20%20%20%20print%28%22Aren't%20equal%22%29%0A%0Aif%20%22Pete%20Python%22%20!%3D%20%22Pete%22%20%2B%20%22Python%22%3A%0A%20%20%20%20print%28%22Wasn't%20the%20same%20string,%20a%20space%20was%20missing%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Lesser or greater than

The order of magnitude of clauses can be examined using comparison operators familiar from mathematics: Clause

a < b

is true if, after evaluation, clause a comes before clause b in order of magnitude. Clause

a > b

is true if a is in order of magnitude after b. For example

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    first = 25
    second = 40

    if first < second:
        print("First is smaller")

    if first > second:
        print("First is greater")

    if second < first:
        print("Second is smaller")

    if second > first:
        print("Second is greater")
    ```

    Program outputs:
    ``` 
    First is smaller
    Second is greater
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=first%20%3D%2025%0Asecond%20%3D%2040%0A%0Aif%20first%20%3C%20second%3A%0A%20%20%20%20print%28%22First%20is%20smaller%22%29%0A%0Aif%20first%20%3E%20second%3A%0A%20%20%20%20print%28%22First%20is%20greater%22%29%0A%0Aif%20second%20%3C%20first%3A%0A%20%20%20%20print%28%22Second%20is%20smaller%22%29%0A%0Aif%20second%20%3E%20first%3A%0A%20%20%20%20print%28%22Second%20is%20greater%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Note that in addition to numbers, the order of magnitude of strings can also be compared. The size of strings is determined by the order of the individual characters, which in turn depends on the character set used. In general, the order follows the alphabetical order of the English language. Note, however, that upper and lower case letters are again counted as different characters:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    first = "abc"
    second = "defg"

    if first < second:
        print("First is smaller")

    if first > second:
        print("First is greater")

    second = "DEFG"

    if first < second:
        print("Now first is smaller")

    if first > second:
        print("Now first is greater")
    ```

    Program outputs:
    ```
    First is smaller
    Now first is greater
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=first%20%3D%20%22abc%22%0Asecond%20%3D%20%22defg%22%0A%0Aif%20first%20%3C%20second%3A%0A%20%20%20%20print%28%22First%20is%20smaller%22%29%0A%0Aif%20first%20%3E%20second%3A%0A%20%20%20%20print%28%22First%20is%20greater%22%29%0A%0Asecond%20%3D%20%22DEFG%22%0A%0Aif%20first%20%3C%20second%3A%0A%20%20%20%20print%28%22Now%20first%20is%20smaller%22%29%0A%0Aif%20first%20%3E%20second%3A%0A%20%20%20%20print%28%22Now%20first%20is%20greater%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The operators can be followed by an equal sign, so that they correspond in practice to the operators less than or equal to and greater than or equal to, familiar from mathematics.

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    num1 = 10
    num2 = 10
    num3 = 20

    if num1 <= num2:
        print("Num1 is lesser than or equal to num2")
    
    if num1 <= num3:
        print("Num1 is lesser than or equal to num3")
    ```

    Program outputs:
    ``` 
    Num1 is lesser than or equal to num2
    Num1 is lesser than or equal to num3
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=num1%20%3D%2010%0Anum2%20%3D%2010%0Anum3%20%3D%2020%0A%0Aif%20num1%20%3C%3D%20num2%3A%0A%20%20%20%20print%28%22Num1%20is%20lesser%20than%20or%20equal%20to%20num2%22%29%0A%20%20%20%20%0Aif%20num1%20%3C%3D%20num3%3A%0A%20%20%20%20print%28%22Num1%20is%20lesser%20than%20or%20equal%20to%20num3%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Remainder

The remainder operator is not a comparison operator, but it is often useful when making comparisons. Clause

A % B

returns the division remainder of the integer calculus "A divided by B". The operator is useful, for example, when we want to investigate the even-oddness of a number (i.e. whether a number is evenly divisible by two):

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Divide 5 by 2 --> result 2, remainder 1
    print(5 % 2)

    num = 9

    # Is the number even
    if num % 2 == 0:
        print("Is even!")

    # Is the number odd
    if num % 2 == 1:
        print("Is odd!")

    #...alternatively (if we know that it's an integer ):
    if num % 2 != 0:
        print("Is still odd!")
    ```

    Program outputs:
    ```
    Is odd!
    Is still odd
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Divide%205%20by%202%20--%3E%20result%202,%20remainder%201%0Aprint%285%20%25%202%29%0A%0Anum%20%3D%209%0A%0A%23%20Is%20the%20number%20even%0Aif%20num%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20print%28%22Is%20even!%22%29%0A%0A%23%20Is%20the%20number%20odd%0Aif%20num%20%25%202%20%3D%3D%201%3A%0A%20%20%20%20print%28%22Is%20odd!%22%29%0A%0A%23...alternatively%20%28if%20we%20know%20that%20it's%20an%20integer%20%29%3A%0Aif%20num%20%25%202%20!%3D%200%3A%0A%20%20%20%20print%28%22Is%20still%20odd!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>