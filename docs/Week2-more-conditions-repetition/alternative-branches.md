---
sidebar:position: 2
---

# Alternative branches

It would often be necessary to present two alternative functions in the context of a condition. For example, if the number is positive, action A is taken, and if it is negative, action B is taken. Of course, such functionality can be achieved with two consecutive conditions:

```python 
num = int(input("Give number: "))

if num > 0:
    print("Number was positive")

if num < 0:
    print("Number was negative")
 ```

Example execution:
```
Give number: -6
Number was negative
 ```

...but the structure seems a bit clumsy, and not even suitable for all possible situations. An easier way is to use the alternative branch of the conditional clause. In Python, this is done with an else-clause with the following syntax:

```python 
if <conditional clause>:
    <block 1>
else:
    <block 2>
 ```

The optional else-branch is written after the block following the if-statement, so the else-branch cannot occur without an if-statement preceding it. The idea is that in each case one of the blocks is executed.

![condition blocks](/img/img-en/w2-1.png)

The previous example, implemented using the else branch, would look like this:

```python 
num = int(input("Give a number: "))

if num > 0:
    print("Number was positive")
else:
    print("Number was negative or zero")
 ```

Two example executions:
```
Give a number: 7
Number was positive
 ```

``` 
Give a number: -55
Number was negative or zero
 ```

Similarly, a program that prints a message about paying debts only to a specific user would be implemented like this:

```python 
name = input("Hi, who are you? ")

if name == "Donald Duck":
    print("Pay your debt!")
else:
    print("No debt.")
 ```

Two example executions:
```
Hi, who are you? Scrooge McDuck
No debts.
 ```

```
Hi, who are you? Donald Duck
Pay your debt!
 ```

## More branches

In many situations, however, more than two possible branches would be needed. For example, in the example of a positive and negative number, you might want to react differently if the number is zero.

After a conditional statement, an **elif**-clause can be used to write a second condition, which is only considered if the condition in the if-clause is false. As many such conditions as desired can be listed after the if-clause. Finally, there may be an else clause, followed by a block that is executed if none of the conditions were true.

So the syntax of the whole conditional clause looks like this:

```python 
if <condition1>:
    <block 1>
elif <condition2>:
    <block 2>
else:
    <block 3>
 ```

An example that prints whether the number entered was positive, negative or zero:

```python 
num = int(input("Give a number: "))

if num < 0:
    print("Number was negative")
elif num > 0:
    print("Number was positive")
else:
    print("Number was zero")
 ```

Example executions:
```
Give a number: 5
Number was positive
 ```

```
Give a number: -5
Number was negative
 ```

``` 
Give a number: 0
Number was zero
 ```

Another example, which prints information about which of the given numbers was higher (or whether the numbers were equal):
```python 
num1 = int(input("Give a number 1: "))
num2 = int(input("Give a number 2: "))

if num1 > num2:
    print("Number 1 was greater")
elif num2 > num1:
    print("Number 2 was greater")
else:
    print("Numbers were equal")
 ```

Example executions:
```
Give number 1: 10
Give number 2: 5
Number 1 was greater
 ```

```
Give number 1: 9
Give number 2: 99
Number 2 was greater
 ```

``` 
Give number 1: 22
Give number 2 2: 22
Numbers were equal
 ```

If there is no else clause, and none of the conditions are true, of course none of the specified blocks are executed:

```python 
director = input("Give the director's name: ")

if director == "James Cameron":
    print("Directed Titanic")
elif director == "Francis Ford Coppola":
    print("Directed the Godfathers")
elif director == "Steven Spielberg":
    print("did he direct E.T.?")
 ```

Two example executions:
``` 
Give the director's name: Francis Ford Coppola
Directed the Godfathers
 ```

```
Give the director's name: Ere Kokkonen
 ```