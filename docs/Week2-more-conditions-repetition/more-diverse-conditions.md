---
sidebar_position: 3
---

# More diverse conditions

Conditional clauses can also be written inside each other. This means that structures can be written in which the truth of a condition is considered only when another condition has been true (or false). When writing nested conditional clauses, special attention must be paid to the indentation of blocks, because Python deduces the correct indentation of the block associated with each condition.

An example of a program that asks the user for a number and prints out whether the number is even or odd. However, the check for even is only made if the number is greater than zero.

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

Another example, where the user is asked for name and address. If the place of residence is Turku, an additional clarifying question is asked:

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

```python 
num1 = 20
num2 = 10

# Both true--> clause is true
if num1 == 20 and num1 > num22:
    print("First is true")

# Both true --> clause is true
if num2 < num1 and num2 != 20:
    print("Second is true")

# Now second "subclause" is false --> clause is false
if luku1 == 20 and luku2 == 20:
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

The operator **or** can be used to form expressions that are true if one or more subexpressions are true. Clause

A or B

is true if either A or B or both are true. If both are false, the whole expression is false.

Examples:

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

Finally, the operator **not**, which reverses the truth value. Clause

not A

is true if A is false, or false if A is true.

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

The table below shows the function of all logical operators for different operands:

| A | B | A and B | A or B | not A |
|---|---|---------|--------|-------|
| True | True | True | True | False |
| True | False | False | True | False |
| False | True | False | True | True |
| True | True | True | False | True |