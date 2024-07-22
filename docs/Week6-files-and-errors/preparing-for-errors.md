---
sidebar_position: 4
---

# Preparing for errors

File handling is a typical example of a situation that can lead to an error. Examples of possible error situations include a missing or corrupt file or insufficient permissions to read or write to a file.

Such error situations cannot usually be corrected programmatically, but can be anticipated in software. A good program will not crash with an error message even if the file cannot be processed, but will tell the user why the program cannot be executed and possibly provide guidance on how to correct the error.

Error situations are not in themselves linked to files, but different error situations can occur in other ways. Typically, errors are usually related to situations where information is introduced into the program from outside - for example, when reading an input from the user in some form.

We can guard against some of these errors by checking the input with conditional statements. The following program asks the user to enter his age and checks that the age is (probably at least) correct:

```python 
age = int(input("Enter your age: "))

if age < 0:
    print("Age can't be negative!")

elif age > 150:
    print("I don't believe you're this old.")
 ```

However, preconditions are not enough for every situation. The example program will crash if the string entered by the user cannot be interpreted as an integer using the int function:

```
Enter your age: twentythree
Traceback (most recent call last):
  File "age.py", line 1, in <module>
    age= int(input("Enter your age: "))
ValueError: invalid literal for int() with base 10: 'twentythree'
 ```

## try-except

In Python, you can prepare for various errors by using the **try-except** structure. The idea is to place code inside the **try** block that may produce an error. The error is caught by an **except** statement placed after the try block.

Consider the previous example, where the program is prepared for an error of the ValueError type when parsing a string into a number:

```python 
try:
    age = int(input("Enter your age: "))

    if age < 0:
        print("Age can't be negative!")

    elif age > 150:
        print("I don't believe you're this old.")

except ValueError:
    print("Age must be given as a number!")
 ```

Example execution:
```
Enter your name: twentythree
Age must be given as a number!
 ```

If an error occurs in the try block, and an except block corresponding to the error is defined, execution will be moved to the except block as soon as the error occurs.

Another example where an OSError type error is expected when reading a file, for example, if the file is not found:

```python 
try:
    numlist = []
    with open("numbers.csv") as file:
        for row in file:
            numbers = [int(num) for num in row.strip().split(",")]
            numlist.append(numbers)

    print(numlist)
    
except OSError:
    print("File numbers.csv can't be opened!")
    print("Check that the file exists and that you have read access to it.")
 ```

## Different errors

The following is a list of some of the most common errors in Python. For a comprehensive list, see for example the Python documentation (https://docs.python.org/3/library/exceptions.html)

**ValueError**

This error is usually caused by the value being the wrong value. A typical example is, for example, calling an int function with the parameter "two", which Python cannot parse to an integer.

**TypeError**

An error occurs because the value is of the completely wrong type. For example, passing an integer or string to the sorted function.

**OSError**

This error covers a variety of exception situations related to the operation of the operating system. Typical examples include error situations related to file handling, such as a missing or incorrectly named file or insufficient permissions to handle a file.

**ZeroDivisionError**

Error caused by an attempt to divide by zero. Typically, an error may occur, for example, when the length of a list or string is zero.

**IndexError** or **KeyError**

Errors result from an attempt to reference an element that does not exist in the data structure being processed. Typical examples are, for example, using too large an index to refer to a character in a string or a list element, or trying to retrieve a dictionary element with a key that does not exist.

Note that multiple errors can be caught by writing multiple except blocks after the try block:

```python 
while True:
    try:
        num1 = int(input("Dividend: "))
        if num1 == 0:
            break
        num2 = int(input("Divisor:   "))
        print(f"{num1} divided by {num2} is {num1 / num2}")
    # Prepare for wrong number format
    except ValueError:
        print("Numbers must be given in numerical form!")
    except ZeroDivisionError:
        print("Can't divide by zero!")
 ```

Example execution:
``` 
Dividend: 5
Divisor:   2
5 divided by 2 is 2.5
Dividend: 10
Divisor:  three
Numbers must be given in numerical form!
Dividend: 4
Divisor:   0
Can't divide by zero!
Dividend: 0
 ```

It is also possible to catch all exceptions by leaving the exception to be caught completely unspecified.

Note, however, that this will also catch errors made by the programmer, which is usually not the intention:

```python 
try:
    with open("file.txt") as file:
        for row in file:
            print(row)

except:
    print("File can't be opened!")
 ```

The program always prints the error message "Cannot open file" at runtime because the programmer has misspelled the variable name on the third line (data header when it should be a file). Since there is no error to catch, Python also catches the programmer's error. So it is almost always a good idea to define catchable errors separately!
