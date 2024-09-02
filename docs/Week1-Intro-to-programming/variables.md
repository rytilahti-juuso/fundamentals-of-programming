---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Variables

In general, programs are designed to process some information (i.e. data) in different ways. Data can be text and numbers, for example, or even images or videos. In each case, the programmer needs to store the data somewhere for processing.

Variables are used to temporarily store data. A variable, as the name suggests, is a container into which a value can be stored. The programmer can later replace the value with another value (hence the name variable: value can change).

A variable has a name (or identifier) to refer to it. For example, a variable can be thought of as a named compartment into which a value is placed, and from which the value can be extracted using the name.

In Python, a variable is initialized by placing a value in it. The value can be any expression. For example:

```python 
# Initializing variables of different types

result = 25 # integer
sum = 32 + 43 #...as is this one

height = 175.25 
average = (2 + 4 + 3) / 3 # floating-point numbers

name = "Peter Python" # strings
address = "Python Rd. 23 apt. 4"
pnumber = "099-1234 567" # a phone number is a string, too
 ```

The program initializes three variables, and stores a different value for each. The value of a variable can be returned by referring to the variable name:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Initialize variables
    name = "Peter Python"
    age = 22
    shoe_size = 39

    # Print name
    print(name)

    # Comma works in a print clause now, too
    print("I am", age, "ýears old")

    print("My shoe size is", shoe_size)
    ```

    Program Outputs:
    ```
    Peter Python
    I am 22 years old 
    My shoe size is 39
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Initialize%20variables%0Aname%20%3D%20%22Peter%20Python%22%0Aage%20%3D%2022%0Ashoe_size%20%3D%2039%0A%0A%23%20Print%20name%0Aprint%28name%29%0A%0A%23%20Comma%20works%20in%20a%20print%20clause%20now,%20too%0Aprint%28%22I%20am%22,%20age,%20%22%C3%BDears%20old%22%29%0A%0Aprint%28%22My%20shoe%20size%20is%22,%20shoe_size%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Naming variables

The aim is to name the variables in such a way that the purpose of the data stored in the variable is clear from the name.

In Python, variables are usually written in all lower case. Variable names may contain letters, numbers and underscores, but no other characters. Variable names must not begin with a number. In general, it is best to use only the English alphabet in variable names - this way there are no problems editing the code in any environment.

The following are examples of allowed variable names:

- age
- phonenumber
- third_point
- file4
- _temporary

Furthermore, the following variable names are not allowed in Python.

- second address
- 3rd_lane
- works?

## Using variables

Of course, the value of the variables can change. If a new value is placed in a variable, the old value disappears. So you can think of a variable as a container that can hold exactly one value at a time:

```python 
balance = 25.90
print("Balance is", balance)

# set the balance to 125
balance = 125
print("Balance is now", balance)

# Let's add 200
balance = balance + 200
print("After addition the balance is", balance)
 ```

Program outputs:
```
Balance is 25.9
Balance is now 125
After addition the balance is 325
 ```

The values of the variables can be used as part of an expression:

```python 
money = 100
interest = 0.05

# Adding interest
money = money + money * interest
print("After ínterest:", money)
 ```

Program outputs:
```
After interest: 105.0
 ```

## Variable type

In Python, variables always have a type. The type is automatically deduced according to the value placed in the variable:

The type affects the expressions in which the variable can be used (and the result). For example, the sum of two integers is an integer, but if one of the operands is a floating point number, the result is also a floating point number. If two strings are combined with the "+"-operator, the result is a new string.

```python 
# Two integers
print(4 + 2)

first = 23
second = 33
sum = first + second
print(sum)

# One or both floating-point numbers
print(2.5 + 1)

balance1 = 0.50
balance2 = 2.75
print(balance1 + balance2)

# Strings
fname = "Kim"
sname = "Python"
name = fname + " " + sname # space added

print("Name is " + name)
 ```

The program prints:
```
6
56
3.5
3.25
Name is Kim Python
 ```

However, the string and the number cannot be combined and an error message is displayed:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    divided = 10
    divider = 2.5

    division = divided / divider
    print(division)

    # This raises an error
    # For example, the parts to be printed should be separated by a comma instead of the + operator
    print("Result is " + division)
    ```

    The final output of the program:
    ``` 
    4.0

    Traceback (most recent call last):
        File "example.py", line 8, in <module>
            print("Result is " + division)
    TypeError: must be str, not float
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=divided%20%3D%2010%0Adivider%20%3D%202.5%0A%0Adivision%20%3D%20divided%20/%20divider%0Aprint%28division%29%0A%0A%23%20This%20raises%20an%20error%0A%23%20For%20example,%20the%20parts%20to%20be%20printed%20should%20be%20separated%20by%20a%20comma%20instead%20of%20the%20%2B%20operator%0Aprint%28%22Result%20is%20%22%20%2B%20division%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>


However, numbers can be printed with strings in the same print statement by separating the objects to be printed with commas. Note, however, that a comma adds an extra space to the printout:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    divided = 10
    divider = 2.5

    division = divided / divider

    # This works
    print("Result is ", division)

    print("When we calculate", divided, " / ", divider, "the result will be", division)
    ```

    Output:
    ``` 
    Result is 4.0
    When we calculate 10  /  2.5 the result will be 4.0
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=divided%20%3D%2010%0Adivider%20%3D%202.5%0A%0Adivision%20%3D%20divided%20/%20divider%0A%0A%23%20This%20works%0Aprint%28%22Result%20is%20%22,%20division%29%0A%0Aprint%28%22When%20we%20calculate%22,%20divided,%20%22%20/%20%22,%20divider,%20%22the%20result%20will%20be%22,%20division%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>