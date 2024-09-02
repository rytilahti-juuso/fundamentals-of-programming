---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Reading input

In general, the user must be able to influence the execution of the program. Typically, the user provides input to the program, and the program uses this input to generate the appropriate output. A simple example might be, for example, where the user enters two integers and the program calculates and prints the sum of the two. The same principle can be seen in a more complex way, for example, in a program that generates a new video based on videos uploaded by the user, or a program that calculates the probability of contracting a certain disease based on genes.

The basic principle can be described as follows:

![Input principle](/img/img-en/w1-3.png)

In Python, we can read the user's textual input (usually from the keyboard) with an input function. The function is given a prompt (i.e. text that instructs the user to enter the correct type of value) as a parameter and returns a value, which is usually stored in a variable.

Consider an example where the program asks for the user's name and then prints a greeting:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Let's ask for a name and then save it in the variable "name"
    name = input("Input your name: ")

    # Let's print the greeting
    print("Hello there, " + name + "!")
    ```

    Example performance:
    ```
    Input your name: Paula Python
    Hello there, Paula Python!
    ```
    The same program run on a different input will, of course, give a different result:

    Example performance:
    ```
    Input your name: Jack Java
    Hello there, Jack Java!
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Let's%20ask%20for%20a%20name%20and%20then%20save%20it%20in%20the%20variable%20%22name%22%0Aname%20%3D%20input%28%22Input%20your%20name%3A%20%22%29%0A%0A%23%20Let's%20print%20the%20greeting%0Aprint%28%22Hello%20there,%20%22%20%2B%20name%20%2B%20%22!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The second example asks the user separately for their first name, last name and phone number and then prints a greeting.

```python 
fname = input("Input your first name: ")
sname = input("Input your surname: ")
pnumber = input("Input your phone number: ")

print("Hello there, " + fname + " " + sname) # space to separate the names
print("Your phone number is" + pnumber)
 ```

Example performance:
```
Input your first name: Pat
Input your surname: Programmer
Input your phone number: 123-456 7890
Hello there, Pat Programmer
Your phone number is 123-456 7890
 ```

## Numerical inputs

The **input** function returns a **string** type value. This is a problem, if we want to handle the input as a number. For example, the following program seems to be working rather oddly
```python 
num1 = input("Give number 1: ")
num2 = input("Give number 2: ")

print("The sum on numbers is", (num1 + num2))
 ```

Example output:
``` 
Give number 1: 5
Give number 2: 8
The sum of numbers is 58
 ```

A string type value can be **converted** to an integer type number by using the function **int**. This is how it works:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Number inside string
    s = "5"

    # Now the plus operator concatenates the strings into a new string
    print(s + s)

    # Convert to number
    number = int(s)

    # Now the plus operator adds numbers
    print(number + number)
    ```

    Program outputs:
    ``` 
    55
    10
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Number%20inside%20string%0As%20%3D%20%225%22%0A%0A%23%20Now%20the%20plus%20operator%20concatenates%20the%20strings%20into%20a%20new%20string%0Aprint%28s%20%2B%20s%29%0A%0A%23%20Convert%20to%20number%0Anumber%20%3D%20int%28s%29%0A%0A%23%20Now%20the%20plus%20operator%20adds%20numbers%0Aprint%28number%20%2B%20number%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Now we can fix the previous program so that the addition works correctly

```python 
# Convert values to integers using int function
num1 = int(input("Give number 1: ")) 
num2 = int(input("Give number 2: ")) 

print("The sum on numbers is", (num1 + num2))
 ```

Example output:
``` 
Give number 1: 5
Give number 2: 8
The sum of numbers is 13
 ```

The function to convert numbers into decimal numbers is called **float**. Naturally, we can input all types of values in the same program:

```python 
# Query the name as a string
name = input("Give your name: ")

# Age is an integer (int)
age = int(input("Give your age: "))

# Height as a decimal (float)
height = float(input("Give your height: "))

print("Your name is " + name)
print("Your age is", age)
print("...and your height", height)
 ```

Example output:
```
Give your name: Ellie Example
Give your age: 52
Give your height: 165.5
Your name is Ellie Example
Your age is 52
...and your height 165.5
 ```