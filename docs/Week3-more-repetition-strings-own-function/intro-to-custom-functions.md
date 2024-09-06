---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction to custom functions

We have previously explored and used several different functions. Examples include **input** and **len**. A function is an independent part of a program that can be called from within the program. When called, a function is often passed a parameter or parameters and can return a value. Usually the value returned is somehow dependent on the values of the parameters.

For example, when you call the len function, you pass it a string as a parameter. The function returns the number of characters in the string (i.e. its length):

```python 
string = "Bye!"

print(f"Length of the string is {len(string)} characters.")
 ```

Program outputs:
```
Length of the string is 4 characters.
 ```

Similarly, when an input function is called, it is passed a string to be printed as a prompt to the user as a parameter. The function returns the user input as a string:

```python 
name = input("Give a name: ")
print("Function returned name:", name)

# Function call can also be part of a clause
print("Hi, my name is", input("Give a name: "))
 ```

Example execution:
```
Give a name: Pat
Function returned name: Pat
Give a name: Paula
Hi, my name is Paula
 ```

More generally, a function is called by its name and the parameters are written in brackets after the name.

## Defining your custom function

We can also define our own functions. Functions are defined with the keyword def (short for define). Let's define a simple function called "greet", which has no parameters:

```python 
def greet():
    print("Hello!")
 ```

When you run a program that defines a function, nothing seems to happen yet. Indeed, the program code contained in the function is executed only when the function is called (as seen in the earlier examples of calling the internal functions len and input).

So let's call the function hello. Note that when calling, parentheses are written after the function name, even if the function has no parameters:

```python 
def greet():
    print("Hello!")


# Let's call the function with its name
greet()
 ```

Program outputs:
``` 
Hello!
 ```

Once defined, the function can be called several times. In fact, one typical use for functions is to write frequently needed code as a function - in this case, the same code snippet can easily be executed multiple times.

```python 
def greet():
    print("Hello!")


# Let's call the function several times
greet()
greet()
greet()
greet()
greet()
 ```

Program outputs:
```
Hello!
Hello!
Hello!
Hello!
Hello!
 ```

Let's look at another example where the function print_menu is defined. As its name implies, the program prints a menu that instructs the user to select the correct function from the program:
```python 
def print_menu():
    print("Welcome to the phonebook program!")
    print("What do you wish to do?")
    print("1. Add numbers")
    print("2. Browse numbers")
    print("3. Search for numbers")
    print("4. Edit numbers")
    print("0. Exit program")
 ```

Another typical way to use functions is to use them to split **a larger program into smaller entities**. This makes the program code clearer and easier to maintain. It is also easier to reuse parts of a program in other programs when it is broken down into smaller units.

## Function parameters

From the previous examples, it was noticed that, even without this, the purpose of functions is rather limited: executing a function produces the same result every time. Functions can be made more general by giving them **parameters**.

A parameter is a variable whose value is passed to a function when it is called.

Parameters are defined in parentheses after the function name. Parameters are in fact variables that exist only inside the function. Variables (in most cases) have no initial value before the function is called. So when a parameter variable is defined, it is not yet given a value, just a name.

Let's consider an example where we define the function **shout**. The function has one parameter, called message:

```python 
def shout(message):
    # Print the message and exclamation marks
    print(message + "!!!")
 ```

Now, when calling a function, the parameter must be given a value. If we try to call the function without a parameter (or by giving the wrong number of parameters), an error will result:

```python 
def shout(message):
    # Print the message and exclamation marks
    print(message + "!!!")


# Let's try to call without parameter
shout()
 ```

Program throws an error:
```
Traceback (most recent call last):
  File "shout.py", line 7, in <module>
    shout()
TypeError: shout() missing 1 required positional argument: 'message'
 ```

A parameter is given a value by typing it inside parentheses in the function call. This mechanism is familiar from calls to functions such as input and len:

```python 
def shout(message):
    # Print the message and exclamation marks
    print(message + "!!!")


# Work with a parameter
shout("Hi")

# Let's shout something else
shout("Helloyello")

# Parameter can be a phrase
shout("Hi " + "to " + "everyone")
 ```

Program outputs:
```
Hi!!!
Helloyello!!!
Hi to everyone!!!
 ```

From the above, we see that the string output by the function now depends on the value of the parameter. Thus, the function may produce a different result for different calls.

Let's look at another example where the parameter of the function is an integer. Let's define a function `output_several` with a single parameter `amount` and test the performance of the function with a few different parameter values:

```python 
def output_several(amount):
    index = 0
    while index < amount:
        print("Goodbye!")
        index += 1


# Let's first print thrice
output_several(3)

print("That was brilliant.")
print("Again five times:")

# ...and then five times
output_several(5)
 ```

Program outputs:
``` 
Goodbye!
Goodbye!
Goodbye!
That was brilliant.
Again five times:
Goodbye!
Goodbye!
Goodbye!
Goodbye!
Goodbye!
 ```
