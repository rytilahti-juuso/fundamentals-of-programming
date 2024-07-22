---
sidebar_position: 3
---

# Defining own library

Python also allows you to define your own libraries. In fact, any program that has its own functions can be used as a library.

As an example, consider the program file calculator.py, where the following functions are defined:

```python 
def sum(num1: int, num2: int):
    return num1 + num2

def multiply(num1: int, num2: int):
    return num1 * num2

def power(num1: int, num2: int):
    return num1 ** num2
 ```

Functions in a file can be used in another program with an import statement. Note, however, that in such a case the files must usually be located in the same directory.

```python 
import calculator

# A couple of calculations
print(calculator.sum(10, 20))
print(calculator.multiply(20, 30))

print(f"2 to the power of 6 is ", calculator.power(2, 6))
 ```

Program outputs:
```
30
600
2 to the power of 6 is 64
 ```

However, it is worth noting that if there is any non-functional code in the file, it will be executed when the file is used in another program. Add a code snippet to the calculator.py file to test the functionality of the program:

```python 
def sum(num1: int, num2: int):
    return num1 + num2

def multiply(num1: int, num2: int):
    return num1 * num2

def power(num1: int, num2: int):
    return num1 ** num2

# Testing the functions
print("Sum 5 + 5:", sum(5,5))
print("Multiplication 3 * 10:", multiply(3, 10))
print("3 to the power of 3:", power(3,3))
 ```

Now when a file is introduced in another program, the test code in the main program is also executed automatically:

```python 
import calculator

# A couple of calculations
print(calculator.sum(10, 20))
print(calculator.multiply(20, 30))

print(f"2 to the power of 6 is ", calculator.power(2, 6))
 ```

Program outputs:
```
Sum 5 + 5: 10
Multiplication 3 * 10: 30
3 to the power of 3: 27
30
600
2 to the power of 6 is  64
 ```

This is not desirable, but on the other hand it would be good to be able to test the functions in the main program.

The execution of the main program when using the import statement can be prevented by using Python's built-in variable `__name__` (note the two underscores on either side of the name). The variable `__name__` is stored as the name of the program caller: in practice, it means that the variable contains the string `"__main__"` (note the underscores again) if the program was run independently and something else if the program was introduced in another program by an import statement.

This means that we can surround the main program in our library program with the following block:

```python 
def sum(num1: int, num2: int):
    return num1 + num2

def multiply(num1: int, num2: int):
    return num1 * num2

def power(num1: int, num2: int):
    return num1 ** num2

# Testing the functions
if __name__ == "__main__":
    print("Sum 5 + 5:", sum(5,5))
    print("Multiply 3 * 10:", multiply(3, 10))
    print("3 to the power of 3:", power(3,3))
 ```

When the program is run as is, the variable `__name__` contains the string `"__main__"`, and the function tests are executed:

Program outputs:

```
Sum 5 + 5: 10
Multiply 3 * 10: 30
3 to the power of 3: 27
 ```

Instead, when our custom library is deployed in another program, no tests are performed on the main program:

```python 
import calculator

# Calculate
print(calculator.sum(100, 100))
 ```

Program outputs:
```
200
 ```