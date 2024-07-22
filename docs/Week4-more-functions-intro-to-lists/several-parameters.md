---
sidebar_position: 1
---

# Several parameters

Last time, all the examples and functions in the exercises had only one parameter. However, there can be more than one parameter. In this case, the parameters are separated by commas, both in the function definition and in the function call.

Consider an example of a function that prints the larger of the two numbers it receives as parameters:

```python 
def print_larger(num1, num2):
    if num1 > num2:
        print(num1)
    else:
        print(num2)


# Example call
print_larger(20, 10)
print_larger(5 + 5, 5 * 5)
 ```

Program outputs:
``` 
20
25
 ```

Of course, there can be even more parameters. The function `average` calculates and prints on the screen the average of the four numbers it receives as parameters:

```python 
def average(num1, num2, num3, num4):
    summa = num1 + num2 + num3 + num4
    print(sum / 4)


# Testing function
average(1,2,3,4)
average(10, 9, 10, 7)
 ```

Program outputs:
``` 
2.5
9.0
 ```

Parameters can also be of different types. The function `multiply` prints the given string under the given number:

```python 
def multiply(string, amount):
    i = 0
    while i < amount:
        print(string)
        i += 1

# Testing
multiply("Yippee", 4)
multiply("Tutturuu", 2)
 ```

Program outputs:
``` 
Yippee
Yippee
Yippee
Yippee
Tutturuu
Tutturuu
 ```

Let's look at one more example that prints the shorter of the two given strings:

```python 
def print_shorter(str1, str2):
    if len(str1) < len(str2):
        print(str1)
    else:
        print(str2)


# Testing
print_shorter("First", "Second")
print_shorter("Hellooo", "Hi")
 ```

Program outputs:
``` 
First
Hi
 ```

## Formal and actual parameter

Functions are often referred to as **formal** and **actual** parameters. A formal parameter refers to a parameter variable used in the definition of a function. For example, formal parameters of a function called `multiply` are a string and a field:

```python 
def multiply(string, amount):
    print(string * amount)
 ```

The actual value is the value that the parameter takes when the function is called. The actual parameter can therefore take different values at different call times. For example, in the following example, the function `multiply` receives the actual parameter values "xyz" and 5:

```python 
def multiply(string, amount): 
    print(string * amount)

# Calling function
multiply("xyz", 5)
 ```

Program outputs:
```
xyzxyzxyzxyzxyz
 ```

Here again, the actual parameter values are "abracadabra" and 4:

```python 
def multiply(string, amount):
    print(string * amount)

# Calling function
multiply("abrakadabra", 4)
 ```

Program outputs:
``` 
abrakadabraabrakadabraabrakadabraabrakadabra
 ```

## Local variables

The variables initialized within a function are the local variables of the function. This means that they only exist during the execution of the function. This also applies to the parameters of the function.

Note that a function can have variables with the same name as the main program (or other functions). However, they are different variables.

```python 
def increase_and_print(num):
    # num is a local variable in the function
    num += 1
    print("Value in the function increase_and_print:", num)

# This num is the main program's variable
# It's a different one from the function's variable
num = 10
print("Value before call:", num)

increase_and_print(num)

# Main program's variable hasn't changed
print("Value after call:", num)
 ```

Program outputs:
```
Value before call: 10
Value in the function increase_and_print: 11
Value after call: 10
 ```

If you try to reference the local variables of a function from outside the function, an error will result:

```python 
def print_numbers(max):
    counter = 1
    while counter <= max:
        print(counter)
        counter +=1

# Calling function...
print_numbers(5)

# Now attempt to reference to counter provides an error,
# since the counter exists only within function
print(counter)
 ```

Program outputs:
``` 
1
2
3
4
5
Traceback (most recent call last):
  File "counter.py", line 12, in <module>
    print(counter)
NameError: name 'counter' is not defined
 ```

However, variables in the main program can be referenced within a function:

```python 
def add_interest(amount):
    #  interest rate defined in the main program is visible here...
    amount += (amount * interest)
    print("Money now:", amount)


# Define interest rate
interest = 0.05

add_interest(1000)
 ```

Program outputs:
```
Money now: 1050.0
 ```

However, variables can only be read within a function. If an attempt is made to change the value, the result is again an error message:

```python 
def add_interest(amount):
    # Attempt to modify the interest, this results in an error
    interest = interest + 0.25

    amount += (amoount * interest)
    print("Money now:", amount)



# Define interest rate
interest = 0.05

add_interest(1000)
 ```

Program outputs:
```
Traceback (most recent call last):
  File "interest.py", line 13, in <module>
    add_interest(1000)
  File "interest.py", line 3, in add_interest
    interest = interest + 0.25
UnboundLocalError: local variable 'interest' referenced before assignment
 ```

If there is a need to change a variable in the main program within a function, access to the variable can be opened with the **global** keyword:

```python 
def add_interets(amount):
    # when interest is defined as global, it can be referenced
    global interest
    
    interest = interest + 0.25

    amount += (amount * interest)
    print("Money now:", amount)



# Define interest rate
interest = 0.05

add_interest(1000)
 ```

Program outputs:
```
Money now: 1300.0
 ```

However, this is usually not desirable. It is almost always best to pass a value to the function as a parameter rather than as a function:

```python 
def add_interest(amount, interest):
    # Now interest is passed as a parameter
    interest = interest + 0.25

    amount += (amount * interest)
    print("Money now:", amount)



# Define interest rate
interest = 0.05

# Interest is now an actual parameter
add_interest(1000, interest)
 ```

Program ouptuts:
```
Money now: 1300.0
 ```


Changing the values of the variables in the main program is also called a side effect. We will talk more about side effects and reasons to avoid them next week.