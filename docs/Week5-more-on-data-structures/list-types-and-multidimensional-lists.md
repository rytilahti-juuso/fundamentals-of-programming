---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Different types and multidimensional lists

Naturally, any type of data can be stored in the lists. The following example creates lists for strings, floats and truth values:

```python 
# List of strings
names = ["Pete", "Pia", "Paula", "Pat", "Benjamin", "Barbara"]

# List of floats
averages = [7.5, 8.0, 8.25, 6.75, 5.5, 4.25]

# List of truth values
repeated_year = [False, False, False, True, True, False]
 ```

Python syntax allows you to store different types of values in the same list. However, this is usually a bad idea, as it can lead to various error situations. In general, the elements of a list should all be of the same type.

```python 
# List, with mixed values
mixedlist = [10, 20, "Matt", 4.55, True, "Lisa", False]

# List iteration and print is doable
for element in mixedlist:
    print(element)

# This produces an error
for element in mixedlist:
    print(element + 10)
 ```

Program outputs:
```
10
20
Matt
4.55
True
Lisa
False
20
30
Traceback (most recent call last):
  File "mixedlist.py", line 10, in <module>
    print(element + 10)
TypeError: must be str, not int
 ```

## List inside list

The elements of a list can also be other lists. This is actually a clever way to model matrices, i.e. two-dimensional tables. The principle is usually that each row of the matrix is stored as a separate list inside an outer list.

For example, the following matrix

![3x3 matrix image](/img/img-en/w5-2.png)

could be saved as a list this way:

```python 
matrix = [[5, 7, 3], [8, 4, 2], [6, 9, 1]]
 ```

Now, from the list that models the matrix, individual elements can be extracted by referring first to a row and then to an element, as shown in the following example:

```python 
matrix = [[5, 7, 3], [8, 4, 2], [6, 9, 1]]

print("First row, first element:", matrix[0][0])
print("Second row, third element:", matrix[1][2])
print("Third row, second element:", matrix[2][1])
 ```

Program outputs:
``` 
First row, first element: 5
Second row, third element: 2
Thrid row, second element: 9
 ```


Let's look at another example:
```python 
# Modeling 5 x 4 shown below:
# 
# 2 | 3 | 5 | 3 | 1
# -----------------
# 6 | 5 | 3 | 5 | 6
# -----------------
# 9 | 8 | 7 | 9 | 8
# ------------------
# 3 | 8 | 3 | 4 | 5
#
matrix = [[2,3,5,3,1], [6,5,3,5,6], [9,8,7,9,8], [3,8,3,4,5]]

while True:
    row = int(input("Which row (-1 quits): "))
    if (row == -1):
        break

    column = int(input("Which column: "))

    print(f"Value on row {row} in column {column} is {matrix[row][column]}")
 ```

Example execution:
``` 
Which row (-1 quits): 1
Which column: 1
Value on row 1 in column 1 is 5
Which row (-1 quits): 0
whichcolumn: 0
Value on row 0 in column 0 is 2
Which row (-1 quits): 3
Which column: 4
Value on row 3 in column 4 is 5
Which row (-1 quits): 2
Which column: 2
Value on row 2 in column 2 is 7
Which row (-1 quits): -1
 ```

The matrix can be iterated through using two for loops:

```python 
matrix = [[1, 2, 3],[6, 5, 4],[9, 7, 8]]

# Iterate through all rows
for row in matrix:
    # Iterate through all row's elements
    for element in row:
        print(element)
 ```

Program outputs:
```
1
2
3
6
5
4
9
7
8
 ```

Similarly, the values of the matrix elements can be changed by using the range function with the for loop:

```python 
matrix = [[1, 2, 3],[6, 5, 4],[9, 7, 8]]

# Iterate through all rows
for i in range(len(matrix)):
    # Iterate through all row's elements
    for j in range(len(matrix[i])):
        # Increase element's value by one
        matrix[i][j] += 1

print(matrix)
 ```

Program outputs:
```
[[2, 3, 4], [7, 6, 5], [10, 8, 9]]
 ```