---
sidebar_position: 2
---

# Handling CSV-files

Often a file has more than one data point on a single line. Typically, for example, a file containing numeric data may have several numbers on the same line. The numbers are separated by a delimiter, such as a comma, tab, or semicolon.

For example, consider the file figures.csv:

```
18,6,18,18,12,2,1,16,13,15,8,10
10,11,18,19,20,5,3,12,1,12,20,15
17,13,9,17,6,18,3,5,20,17,10,12
13,12,15,18,4,12,16,8,18,1,13,3
8,12,6,4,19,17,12,4,6,5,9,17
 ```

As in the previous examples, the file is read line by line. Once a line has been read into memory, it needs to be somehow broken up at the punctuation marks. This is easily done with a method such as **split**. The method is given the desired character as a parameter, and returns a list of fragments separated by the character (or the entire string if none of the given characters were found):

```python 
# Examples of using split-method
row = "1,2,3,4,2,3,4,5,6"

pieces = row.split(",")
print(pieces)

for piece in pieces:
    print(piece)

row2 = "first;second;third;fourth;fifth"

words = row2.split(";")
print(words)

sentence = "Chip and Dale and Huey and Dewey and Louie"
characters = sentence.split(" and ")
print(characters)
 ```

Program outputs:
```
['1', '2', '3', '4', '2', '3', '4', '5', '6']
1
2
3
4
2
3
4
5
6
['first', 'second', 'third', 'fourth', 'fifth']
['Chip', 'Dale', 'Huey', 'Dewey', 'Louie']
 ```
Since the split method returns **a list of strings**, you still need to convert the elements to another format if necessary. This can be done, for example, using the **int** function introduced earlier.

The example program reads the file `figures.csv` above, decomposes each line into chunks, converts the chunks into integers and calculates the sum of the numbers:

```python 
with open("numbers.csv") as file:
    numbers = []
    for row in file:
        numbers_onrow= row.strip().split(",")
        for piece in numbers_onrow:
            numbers.append(int(piece))

    print("Sum of the numbers:", sum(numbers))
    print("Maximum:", max(numbers))
    print("Minimum:", min(numbers))
 ```

Program outputs:
```
Sum of the numbers: 682
Maximum: 20
Minimum: 1
 ```

Let's look at another example. In the file `students.txt`, each line contains the following information about the student, separated by semicolons:

- name (string)
- student id (integer)
- study points (integer)
- shoe size (float)

The file looks like this for example:

``` 
Sally Student;12345;23;44.25
Frank Freshman;54321;7;40.0
Fia Freshman;99999;11;36.5
Sam Student;88888;89;37.0
Gary Graduate;987987;315;47.25
Caitlyn Candidate;887766;191;35.0
 ```

The example program reads the file and decodes each line into a double. At the same time, the string data is converted to the correct format. The tuples are stored in a list, which is eventually returned:

```python 
def read_students() -> list:
    slist = []
    with open("students.txt") as file:
        for row in file:
            sdata = row.strip().split(";")
            student = (sdata[0], int(sdata[1]), int(sdata[2]), float(sdata[3]))
            slist.append(student)

    return slist

for student in read_students():
    print(student)
 ```

Program outputs:
```
('Sally Student', 12345, 23, 44.25)
('Frank Freshman', 54321, 7, 40.0)
('Fia Freshman', 99999, 11, 36.5)
('Sam Student', 88888, 89, 37.0)
('Gary Graduate', 987987, 315, 47.25)
('Caitlyn Candidate', 887766, 191, 35.0)
 ```