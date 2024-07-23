---
sidebar_position: 4
---
<style type="text/css">
  img {
    background-color: #ffff;
  }
</style>

# Reading input

In general, the user must be able to influence the execution of the program. Typically, the user provides input to the program, and the program uses this input to generate the appropriate output. A simple example might be, for example, where the user enters two integers and the program calculates and prints the sum of the two. The same principle can be seen in a more complex way, for example, in a program that generates a new video based on videos uploaded by the user, or a program that calculates the probability of contracting a certain disease based on genes.

The basic principle can be described as follows:

![Input principle](/img/img-en/w1-3.png)

In Python, we can read the user's textual input (usually from the keyboard) with an input function. The function is given a prompt (i.e. text that instructs the user to enter the correct type of value) as a parameter and returns a value, which is usually stored in a variable.

Consider an example where the program asks for the user's name and then prints a greeting:
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