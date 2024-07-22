---
sidebar_position: 1
---

# More conditions

Last week, we began our exploration of the conditional clause by looking at conditions that tested the equality of two operands. Clause

a == b

is true if, after evaluation, clauses a and b have exactly the same value. Equivalence applies to numbers as well as to strings.

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

In many cases, the definition of conditions can be facilitated by using other comparison operators than equality.

For example, the difference between two operands can be examined with the difference operator !=. Clause

a != b

is **true** if clauses a and b do not have exactly the same value after evaluation.

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

## Lesser or greater than

The order of magnitude of clauses can be examined using comparison operators familiar from mathematics: Clause

a < b

is true if, after evaluation, clause a comes before clause b in order of magnitude. Clause

a > b

is true if a is in order of magnitude after b. For example

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

Note that in addition to numbers, the order of magnitude of strings can also be compared. The size of strings is determined by the order of the individual characters, which in turn depends on the character set used. In general, the order follows the alphabetical order of the English language. Note, however, that upper and lower case letters are again counted as different characters:

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

The operators can be followed by an equal sign, so that they correspond in practice to the operators less than or equal to and greater than or equal to, familiar from mathematics.

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

## Remainder

The remainder operator is not a comparison operator, but it is often useful when making comparisons. Clause

A % B

returns the division remainder of the integer calculus "A divided by B". The operator is useful, for example, when we want to investigate the even-oddness of a number (i.e. whether a number is evenly divisible by two):

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
    print("Is still odd!"
 ```

Program outputs:
```
Is odd!
Is still odd
 ```