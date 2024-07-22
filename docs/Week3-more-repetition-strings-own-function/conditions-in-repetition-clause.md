---
sidebar_position: 1
---

# Conditions in a repetition clause

Last time, all the conditional clauses in the loops were of the form

`while True:`

In such a loop, its execution is terminated by a break statement. This type of repetition is ideal for situations where, for example, the user is repeatedly asked for some input, and giving some input (e.g. an empty string, a negative number, etc.) terminates the loop.

A repetiton clause can also be directly written with a more versatile condition that must hold for the loop to be executed.

For example

```python 
width = 1

# The loop is executed as long as the condition is true
while width <= 8:
    print(width * "X")
    
    # Change the width to make the loop end sometime
    # Clause
    # width += 1 
    # is the same as  
    # width = width + 1
    width += 1
 ```

Program outputs:
```
X
XX      
XXX     
XXXX    
XXXXX   
XXXXXX  
XXXXXXX 
XXXXXXXX
 ```

In general, the repetition clause can be described by the following graph, already presented last time:

![Condition clause graph](/img/img-en/w2-2.png)

For example, a loop that prints all numbers between 1 and 19 every two steps might look like this:

```python 
num = 1

while num <= 19:
    print(num)

    num += 2
 ```

Program outputs:
```
1
3
5
7
9
11
13
15
17
19
 ```
Note that such a loop has three parts: initialization, condition and change:

```python 
# 1. INITIALIZATION
# Initialise the variable(s) to be used in the condition clause
num = 1

# 2. CONDITION
# If condifiton is true, execute block
while num <= 19:
    print(num)

    # 3. CHANGE
    # Make a change which (often) moves the loop
    # state closer to its end
    num += 2
 ```

If any part is incorrect, an unintended perpetual loop can be created.

For example, the following program will not terminate until the user presses CTRL + C or otherwise forcibly terminates the execution of the program because the programmer has placed the increment of the variable inside the conditional clause.

```python 
counter = 1

while counter < 100:
    print(counter)
    
    if counter % 2 == 0: 
        print(counter, "is even!")  
        # Counter is increased only when it's even
        # so it will print one forever
        counter += 1
 ```

Program outputs:
```
1
1
1
1
and so on...
 ```

## Condition clause or True?

Note that writing a condition in a repeat clause or using a break clause inside a loop are alternative ways - both can be used to implement any loop.

Below are two alternatives for a program that prints information about the even number of numbers entered by the user until the user enters zero.

Initially, a version that uses a "perpetual" loop and a break clause:

```python 
while True:
    num = int(input("Give a number: "))

    if num == 0:
        break
    elif num % 2 == 0:
        print("Number was even")
    else:
        print("Number was odd")
 ```

Then the same program where the condition is written in the while statement:

```python 
num = int(input("Give a number: "))

while num != 0:
    if num % 2 == 0:
        print("Number was even")
    else:
        print("Number was odd")

    num = int(input("Give a number: "))
 ```

It is a matter of situation (and opinion) which way is better. Some programmers always prefer loops where a condition clause is given, while others more commonly use a "perpetual" loop, whose execution is interrupted by a break statement if necessary.

Perhaps more generally, both have their uses. In a couple of weeks, we'll be exploring the definition of a repetition clause, which will further expand the range of looping tools available.