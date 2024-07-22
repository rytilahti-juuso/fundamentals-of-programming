---
sidebar_location: 1
---

# Reading files

So far we have used the input function to read input from the user. It's a handy way when there's not a lot of data to input.

However, there can be a considerable amount of data - up to gigabytes. Feeding a larger data set to the program one read at a time would not only be very slow, but also very error-prone. So a better way is needed.

Python makes it fairly easy to read and write data files. Usually the input data is already in text format, or at least it is easy to convert it from binary format (e.g. an Excel file) to text format.

A text file is therefore a file that consists of text only. For example, a Word file contains a lot more than text (formatting information, images, tables, etc.), so it is not very easy to handle it in your own program without an external library.

## Iterating file with for-clause

Let's assume that we have a file called `story.txt`:

```
Once upon a time there was a tiny programmer.
The programmer lived in a house and programmed from dawn to dusk.
The programmers dreams were full of programming.
Such was the tiny programmer.
 ```

The simplest way to read the contents of a file is to open the file with the open function and go through the lines one by one with the for statement. This will read the contents of the file one line at a time:

```python 
with open("story.txt") as file:
    for row in file:
        print(row)
 ```

Program outputs:
``` 
Once upon a time there was a tiny programmer.

The programmer lived in a house and programmed from dawn to dusk.

The programmers dreams were full of programming.

Such was the tiny programmer.
 ```

Let's look at the example in a little more detail. The function open is enclosed in a with-statement. This way, the user does not have to worry about closing the resource (in this case, the file) after use, but Python automatically closes it after exiting the block following the with statement. The open-function takes the name of the file as its parameter (and the file path if the file is not found in the default directory - usually the same directory as the program file).

In the example, the open-function opens the file in read-only mode. The contents of the file can then be iterated using the for statement in the same way as, say, the start of a list. The loop extracts lines from the file one by one and returns them as strings.

Note that when the file is read, each line is followed by the line break character "\n" by default (it is a single character, even though it is represented by two characters). This can be seen, for example, when printing the contents of a file to the screen, an 'extra' space is printed between the lines. Usually you want to remove these characters - this is easily done with the strip() function, which also removes the other empty characters at the beginning and end of the string. If you want to keep the other characters (for example, spaces at the beginning or end of a line), you can replace the line break with an empty string using the replace method:

```python 
with open("story.txt") as file:
    for row in file:
        # Remove empty characters from start and end
        row = row.strip()
        print(row)
 ```

Program outputs:
```
Once upon a time there was a tiny programmer.
The programmer lived in a house and programmed from dawn to dusk.
The programmers dreams were full of programming.
Such was the tiny programmer.
 ```

## Other ways to read files

There are other ways to read a file in Python besides the for statement. The entire contents of a file can be read with the **read**-method. This method returns the contents of the file as a single string:

```python 
with open("story.txt") as file:
    content = file.read()
    
    # replacing a word in the text
    content = content.replace("tiny", "huge")
    
    print(content)
 ```

Program outputs:
```
Once upon a time there was a huge programmer.
The programmer lived in a house and programmed from dawn to dusk.
The programmers dreams were full of programming.
Such was the huge programmer.
 ```

Sometimes the **readlines()** method is also useful. It returns the contents of the file as a list, so that each element of the list corresponds to one line of the file.

```python 
# Function returns the file contents
# Row changes have been removed
def file_aslist(filename: str) -> list:
    with open(filename) as file:
        content = file.readlines()

    for i in range(len(content)):
        content[i] = content[i].replace("\n","")

    return content


list = file_aslist("story.txt")
print(f"File has {len(list)} rows:")
for row in list:
    print(row)
 ```

Program outputs:
```
File has 4 rows:
Once upon a time there was a tiny programmer.
The programmer lived in a house and programmed from dawn to dusk.
The programmers dreams were full of programming.
Such was the tiny programmer.
 ```

Note, however, that when processing very large files, it is possible that the whole file will not fit in memory at once. In such a case, iteration with the for loop may be a more viable option - where the file is read one line at a time.
