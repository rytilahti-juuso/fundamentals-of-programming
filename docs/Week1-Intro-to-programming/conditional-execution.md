---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Conditional execution

Earlier, it was mentioned that the programmer can influence the order in which the statements in the program are executed. A typical way to control the execution of a program is through conditional execution. In conditional execution, the idea is that a block (or blocks) is defined in the program that is executed only when a **condition is true**.

A **block** refers to one or more related lines of code. In Python, a block is denoted by indenting the lines belonging to the block at the same level. The indentation is done using either spaces or a tabulator (tab key).

![Tab key](/img/img-en/w1-4.png)

The block to be conditionally executed is implemented with an **if-statement**. The grammar of the conditional clause looks like this:

```python 
if <condition>:
    <executable block>
 ```

In a conditional clause, the nested block after the condition is only executed when the condition is true. If the condition is false, the block is skipped entirely:

![Condition chart](/img/img-en/w1-5.png)

This time, let's look at condition forming using the equality operator. The operator can be used to check whether the value of one clause is exactly the same as the value of another clause. In practice, we start by checking whether a variable has exactly the desired value. The operator consists of two equal signs - this is because it is different from the variable setting operator.

The example program asks the user to enter a name, and then prints the message "Hello Pete" if the user enters the string "Pete Python" as his name. Finally, the message "Program finished" is printed, regardless of the name. The block to be conditionally executed thus contains only one line (i.e. the line to print "Hello Pete!"):

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # First we'll ask for the name
    name = input("Input your name: ")

    # If the name is Pete Python...
    if name == "Pete Python":
        print("Hello Pete!")

    # This line is executed regardless
    print("Program finished.")
    ```

    Example execution 1:
    ```
    Input your name: Pete Python
    Hello Pete!
    Program finished.
    ```

    Example execution 2:
    ```
    Input your name: Jane Java
    Program finished.
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20First%20we'll%20ask%20for%20the%20name%0Aname%20%3D%20input%28%22Input%20your%20name%3A%20%22%29%0A%0A%23%20If%20the%20name%20is%20Pete%20Python...%0Aif%20name%20%3D%3D%20%22Pete%20Python%22%3A%0A%20%20%20%20print%28%22Hello%20Pete!%22%29%0A%0A%23%20This%20line%20is%20executed%20regardless%0Aprint%28%22Program%20finished.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Another example program asks the user to enter two numbers and prints out whether the sum of the numbers is exactly 10:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Read numbers
    num1 = int(input("Give number 1: "))
    num2 = int(input("Give number 2: "))

    if num1 + num2 == 10:
        print("You inputted numbers", num1, "and", num2)
        print("...the sum of which is exactly 10")

    print("Thanks for the input!")
    ```

    Example execution 1:
    ```
    Give number 1: 7
    Give number 2: 3
    You inputted numbers 7 and 3
    ...the sum of which is exactly 10
    Thanks for the input!
    ```

    Example execution 2:
    ``` 
    Give number 1: 8
    Give number 2: 5
    Thanks for the input!
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Read%20numbers%0Anum1%20%3D%20int%28input%28%22Give%20number%201%3A%20%22%29%29%0Anum2%20%3D%20int%28input%28%22Give%20number%202%3A%20%22%29%29%0A%0Aif%20num1%20%2B%20num2%20%3D%3D%2010%3A%0A%20%20%20%20print%28%22You%20inputted%20numbers%22,%20num1,%20%22and%22,%20num2%29%0A%20%20%20%20print%28%22...the%20sum%20of%20which%20is%20exactly%2010%22%29%0A%0Aprint%28%22Thanks%20for%20the%20input!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>
