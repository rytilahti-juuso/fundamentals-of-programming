---
sidebar_position: 5
---

# Conditional execution

Earlier, it was mentioned that the programmer can influence the order in which the statements in the program are executed. A typical way to control the execution of a program is through conditional execution. In conditional execution, the idea is that a block (or blocks) is defined in the program that is executed only when a **condition is true**.

A **block** refers to one or more related lines of code. In Python, a block is denoted by indenting the lines belonging to the block at the same level. The indentation is done using either spaces or a tabulator (tab key).

![Tab key](/static/img/img-en/w1-4.png)

The block to be conditionally executed is implemented with an **if-statement**. The grammar of the conditional clause looks like this:

```python 
if <condition>:
    <executable block>
 ```

In a conditional clause, the nested block after the condition is only executed when the condition is true. If the condition is false, the block is skipped entirely:

![Condition chart](/static/img/img-en/w1-5.png)

This time, let's look at condition forming using the equality operator. The operator can be used to check whether the value of one clause is exactly the same as the value of another clause. In practice, we start by checking whether a variable has exactly the desired value. The operator consists of two equal signs - this is because it is different from the variable setting operator.

The example program asks the user to enter a name, and then prints the message "Hello Pete" if the user enters the string "Pete Python" as his name. Finally, the message "Program finished" is printed, regardless of the name. The block to be conditionally executed thus contains only one line (i.e. the line to print "Hello Pete!"):

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

Another example program asks the user to enter two numbers and prints out whether the sum of the numbers is exactly 10:

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
