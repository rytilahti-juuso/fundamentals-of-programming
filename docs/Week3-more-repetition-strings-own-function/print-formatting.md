---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Print formatting

As noted earlier, Python can print several different objects with a single call to the print function by listing the different objects separated by commas:

However, if there are several things to print, the printout will be quite complex. In addition, a comma always adds an extra space to the printout, which is not always desirable:

For more complex output sentences or string formatting, you should use Python's **f-strings**, for example. The idea is that you type a small f before the string. Now you can write variable names or expressions in brackets inside the string:

```python 
num1 = int(input("Give 1st number: "))
num2 = int(input("Give 2nd number: "))

print(f"When we count {num1} + {num2}, the result will be {num1 + num2}.")
 ```

Example execution:
```
Give 1st number: 17
Give 2nd number: 32
When we count 17 + 32, the result will be  49.
 ```

Another example program that asks the user to enter values and then formats them into two strings:

```python 
name = input("Give a name: ")
city = input("Give a home city: ")
pnumber = input("Give a phone number: ")

print(f"Hi, my name is {name}, I live in a city called {city}.") 
print(f"My phone number is {pnumber}, if you want to chat.")
 ```

Example execution:
```
Give a name: Peter
Give a home city: Paris
Give a phone number: 123-456 789
Hi, my name is Peter, I live in a city called Paris.
My phone number is 123-456 789, if you want to chat.
 ```

Python's f-strings can also be used for many other purposes, for example to make it easier to format the output of floating-point numbers:

```python 
num = 1.2345678

# Prints the number as is
print(num)

# f-strings can specify the number of decimals
print(f"Only two decimals: {num:.2f}")
print(f"Here there are four decimals: {num:.4f}")

num2 = 1.5
print(f"Hey, this can also round: {num2:.0f}")
 ```

Program outputs
``` 
1.2345678
Only two decimals: 1.23
Here there are four decimals: 1.2346
Hey, this can also round: 2
 ```

The subject is described more in the [Python documentation.](https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals)