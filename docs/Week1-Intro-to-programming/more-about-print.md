---
sidebar_position: 2
---
<style type="text/css">
  img {
    background-color: #ffff;
  }
</style>

# More about the print clause

In the previous examples, a **string** was printed on the screen. A string, as the name implies, is a string of zero or more characters, such as a word or a natural language sentence. However, an alternative way of expressing a print string is to give, for example, a mathematical expression. The expression consists of operands and operators:

![Math expression](/img/img-en/w1-2.png)

For example:

```python 
print(2 + 4)
print(2 * 5 - 3)
print(1000 * 1000)
 ```

Program outputs:
```
6
7
1000000
 ```

Now Python does not print the clause as it is, but evaluates it and prints the result of the clause. Evaluation means that the clause is given a value.

If you want to evaluate a clause, do not surround it with quotation marks. So note the difference:

```python 
# Prints the clause as is
print("2 * 10 + 30")

# Prints the result of the evaluated clause
print(2 * 10 + 30)
 ```

Program outputs:
```
2 * 10 + 30
50
 ```

The previous example also shows comments. Comments are marked with #. When this character is encountered in the code, Python does not attempt to interpret the rest of the line at all. Comments are therefore the programmer's way of making notes or comments on the program.

## Operators, operands, and clauses

Operators familiar from mathematics can be used in the clause. Multiplication is denoted by an asterisk *, and division by a slash /.

```python 
# Addition
print(3 + 20)
print(2 + 4 + 2 + 2 + 5)

# Substraction
print(10 - 3)
print(100 - 10 - 10)

# Multiplication
print(5 * 5)
print(2 * 2 * 3 * 2)

# Division: note that the result of a division is 
# always a floating point number (for example: 4 / 2 = 2.0)
print(20 / 4)
print(1000 / 10 / 2)
 ```

Program outputs:
```
23
15
7
80
25
24
5.0
50.0
 ```

Note that the order in which clauses are calculated (or, more precisely, evaluated) follows the rules familiar from mathematics: for example, multiplication and division are calculated before addition and subtraction. The order can be changed by using parentheses:

```python 
# Without parentheses multiplication is calculated first
print(2 + 5 * 5)

# Parentheses change the order
print((2 + 5) * 5)
 ```

Program outputs:
```
27
35
 ```
Multiple values can be printed with the same printout clause. The values are separated by commas. In such a case, it is often useful to surround the mathematical clause with parentheses for clarity.

```python 
print("The clause 2 + 5 * 10 gives us a result of", (2 + 5 *10))
print("The seven dwarves have a total number of", (7 * 2 * 2), "limbs")
 ```

Ohjelma tulostaa
```
The clause 2 + 5 * 10 gives us a result of 52
The seven dwarves have a total number of 28 limbs
 ```

## Floating point numbers

In the previous example, we noticed that there was a dot and a zero at the end of the result of the division calculation.  Decimal numbers are usually treated in programming languages as so-called floating-point numbers. The decimal separator is a dot instead of a comma, for example:

```python 
print(5 / 2)
print(2.5 + 2.5)

# This won't go even
print(10 / 1.5)
 ```

Program outputs:
``` 
2.5
5.0
6.666666666666667
 ```

Due to the way floating point numbers are stored, it is not always possible to represent all possible decimal numbers with sufficient precision. In general, however, the accuracy is sufficient for "normal use" - mathematical programs may use a different way of storing floating-point numbers.