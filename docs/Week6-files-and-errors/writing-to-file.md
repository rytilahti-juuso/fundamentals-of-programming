---
sidebar_position: 3
---

# Writing to file

Although reading files is more common, there is also the occasional need to write files. A typical example would be, for example, reading a source file and, after editing, writing the data - or part of it - to another file. Log files of various programs and the recording of measurements are also fairly typical situations where writing to a file is necessary.

Also when writing to a file, the file is opened with the open function. The difference is that the function is given a second parameter in addition to its name, specifying the state of the file to be opened as w (i.e. write). After the file is opened, the write method can be used to write strings to the file.

Note that in w mode, opening a file

- creates a new file if the file does not exist OR
- overwrites any existing data in the file if it already exists.

So extreme care must be taken when writing files.

The following example creates a file hello.txt and writes a few lines of text into it:

```python 
# Opening file in write mode
# in the "w" mode
with open("hello.txt", "w") as file:
    # Adding row change to the end
    file.write("Hello everyone." + "\n")

    # Of course you can just write the change
    # to the same string
    file.write("Here's another row of text.\n")

    file.write("And one more.")
 ```

After ´this example the file looks like this:

```
Hello everyone.
Here's another row of text.
And one more.
 ```

Note that while line breaks should usually be removed when reading, they should be added when writing. If line breaks are not entered....

```python 
with open("hello.txt", "w") as file:
    file.write("Hello everyone.")
    
    file.write("Here's another row of text.")

    file.write("And one more.")
 ```

...after writing file looks like this:

```
Hello everyone.Here's another row of text.And one more.
 ```

## Writing different types of data

Note that the write method can only write string data. This means that data in any other format must first be converted to a string.

A single number can easily be converted to a string using the **str** method:

```python 
num = 10
numstr = str(num)

print("Number is " + numstr)

num1 = 10
num2 = 20
num3 = 30

numbers = str(num1) + ", " + str(num2) + ", " + str(num3)
print(numbers)
 ```

Program outputs:
```
Number is 10
10, 20, 30
 ```

The example function takes a list of integers as its parameter and writes them to the file `numbers.txt` so that each line contains one number:

```python 
def write_tofile(numbers: list):
    with open("numbers.txt", "w") as file:
        for num in numbers:
            file.write(str(num) + "\n")


# Testing
list = [1,2,3,1,2,3,4,5,6,4,5,6]
write_tofile(list)
 ```

After executing above example the file looks like this:

```
1
2
3
1
2
3
4
5
6
4
5
6
 ```

If you want to write several data points on a single line, it can get complicated to link individual data points and commas together by concatenation. One possible solution is to use the f-string to form a string to be written:

```python 
def write_students(list: list):
    # Student tuple contains the following:
    # name (string)
    # student id (integer)
    # study points (integer)
    # shoe size (float)
    with open("students.csv", "w") as t:
        for student in list:
            s = f"{student[0]}, {str(student[1])}, "
            s += f"{str(student[2])}, {str(student[3])}"
            s += "\n"

            t.write(s)


# Testing
s1 = ("Sam Student", 12345, 23, 43.5)
s2 = ("Sally Student", 54321, 89, 38.0)
s3 = ("Mike Madeup", 99999, 142, 46.25)
s4 = ("Nancy Nonexistent", 101010, 214, 35.5)

write_students([s1, s2, s3, s4])
 ```

The file `students.csv` looks like this after running the program:

```
Sam Student, 12345, 23, 43.5
Sally Student, 54321, 89, 38.0
Mike Madeup, 99999, 142, 46.25
Nancy Nonexistent, 101010, 214, 35.5
 ```

Another way is to use Python's join method, which combines the elements of a string table into a single string. Note that the method is a bit roundabout in that it targets the character to be used and the data structure to be decoded is given as a parameter.

So, for example, the method works like this:

```python 
# List of Strings
names = ["Sam", "Sally", "Mike", "Nancy"]

# Joining different ways with the join-method
str1 = " ".join(names)
print(str1)

str2 = ", ".join(names)
print(str2)

str3= ";".join(names)
print(str3)

str4= " and ".join(names)
print(str4)
 ```

Program outputs:

``` 
Sam Sally Mike Nancy
Sam, Sally, Mike, Nancy
Sam;Sally;Mike;Nancy
Sam and Sally and Mike and Nancy
 ```

If the data in the table is not already in string format, the join method will not work. In this case, the table must first be converted to a table containing strings. This can be done naturally, for example in a for loop by calling the str function:

```python 
def convert_tostrings(numbers: list) -> str:
    strnumbers = []
    for num in numbers:
        strnumbers.append(str(num))

    return ",".join(strnumbers)


# Testing
matrix = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [4,3,2,1]]

with open("matrix.csv", "w") as t:
    for row in matrix:
        t.write(convert_tostrings(row) + "\n")
 ```

After running the program, the file `matrix.csv` looks like this:
```
1,2,3,4
5,6,7,8
9,10,11,12
4,3,2,1
 ```

A slightly more straightforward (and more "Python-like") way is to use a **list composition** for the conversion, as shown in the following example:

```python 
def convert_tostrings(numbers: list) -> str:
    # list conversion converts a list of integers into a list of strings
    strnumbes = [str(num) for num in numbers]
    return ",".join(strnumbers)


# Testing
matrix = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [4,3,2,1]]

with open("matrix.csv", "w") as t:
    for row in matrix:
        t.write(convert_tostrings(row) + "\n")
 ```
The output of the program is similar to the previous example.

You can use the example for this exercise if you wish, but we will go into more detail next week.