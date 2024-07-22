---
sidebar_position: 3
---

# Return values

Let's return to the Python built-in functions introduced earlier in the course. Functions such as input and len return a value when called, which can, for example, be stored in a variable. Our own functions, however, only print the result to the screen.

However, you can return a value from a function of your own. The value is returned by a return statement, the syntax of which is

`return <clause>`

The clause immediately terminates the execution of the function and returns the execution to the caller. A return value corresponding to the result of the expression is included.

For example, the following function returns the sum of the values it receives as a parameter:

```python 
def sum(num1: int, num2: int):
    # calculating sum
    sum = num1 + num2

    # returning sum
    return sum
 ```

Now when the function is called, the return value can be used as part of the expression:

```python 
def sum(num1: int, num2: int): 
    # calculating sum  
    sum = num1 + num2 

    # returning sum 
    return sum


# Saving the return value in a variable
result = sum(10, 20)

# printing it
print(result)

# Using the return value part of a clause
result2 = sum(2,2) + 5 * sum(3, 3)
print(result2)
 ```

Program outputs:
```
30
34
 ```

If nothing is done to the return value, it appears that the function does nothing at all:
```python 
def sum(num1: int, num2: int):
    # calculating sum
    sum = num1 + num2

    # returning sum
    return sum


# Calling function, but let's not do anything to the return value
sum(10, 20)
 ```

Program outputs:

**-- No output --**


Let's look at a few more examples of functions that return a value and how they are called. First, a function that returns a string multiplied

```python 
def multiply(string: str, amount: int):
    return string * amount

# Example function calls:
message = "Hello!"
print(message)
print(multiply("*", len(message)))

# Another example
num = 1
str = ""
while num < 10:
    str += multiply(str(num), num)
    num += 1

print(str)
 ```

Program outputs:
``` 
Hello!
***********
122333444455555666666777777788888888999999999
 ```


The following is an example of a function that returns a sum between start...end:

```python 
def sum(start: int, end: int):
    sum = 0
    while start <= end:
        sum += start
        start += 1

    return sum


# Example function calls
start = int(input("Give the first number: "))
end = int(input("Give the second number: "))
print("Sum is", sum(start, end))


larger_sum = sum(1,10) + sum(5,15) + sum(100,105)
print(larger_sum)
 ```

Program outputs:
```
Give the first number: 2
Give the second number: 6
Sum is 20
780
 ```

## Return or print

It is important to note the difference between a function returning something and a function printing something to the screen. However, this is often a difficult distinction to grasp when starting to program.

The following example aims to illustrate the difference:

```python 
def print_larger(a: int, b: int):
    if a > b:
        print(a)
    else:
        print(b)


def return_larger(a: int, b: int):
    if a > b:
        return a
    else:
        return b


# Calling print
print_larger(10, 15)


# Function's return value must be handled
larger = return_larger(100,200)

# Of course, it can be printed out on the screen
print("Return value was", larger)

# ... or be used in a clause
print("Return value times 10 is", larger * 10)
 ```

Program outputs:
```
15
Return value was 200
Return value times 10 is 2000
 ```

One more example of value recovery. The following function takes two strings as parameters and returns the string with more spaces:

```python 
def more_words(phrase1: str, phrase2: str):
    chosen1 = phrase1.count(" ")
    chosen2 = phrase2.count(" ")

    if chosen1 > chosen2:
        return chosen1
    else:
        return chosen2


# Testing
l1 = "Hello to all folks!"
l2 = "Yo yo yo what's up peeps!"

print("More words in a sentence:")
print(more_words(l1, l2))
 ```

Program outputs:
```
More words in a sentence:
Yo yo yo what's up peeps!
 ```

## Retun value's type hint

A type reference can also be assigned to the return value. The type hint informs the caller that the function returns a value of a certain type.

Type hints are not always used in the course in connection with return values, but their syntax is presented in the following examples anyway:

```python 
# Function returns an integer
def return_three() -> int:
    return 3

# Function returns a float
def average(a: int, b: int, c: int) -> float:
    return (a + b + c) / 3

# Function returns a string (str)
def more_words(phrase1: str, phrase2: str) -> str:
    chosen1 = phrase1.count(" ")
    chosen2 = phrase2.count(" ")

    if chosen1 > chosen2:
        return phrase1
    else:
        return phrase2
 ```