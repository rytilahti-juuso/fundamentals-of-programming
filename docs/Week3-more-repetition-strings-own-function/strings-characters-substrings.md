---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Strings, characters and substrings

As stated earlier, a string is a sequence of zero, one or more characters. The characters in a string can be any of the characters in the string used. Python version 3 defaults to a character encoding called Unicode, which can be used to represent almost all commonly used characters (of course, the characters that can be printed on the screen also depend on the font used).

The number of characters found in the string can be returned by the **len** function. For example:

```python 
str = "Hi"
print(len(str))

name = "Pete Python"
print(len(name))

# All characters, including spaces are included in the length
str2 = "a b c d"

length = len(str2)
print(length)

# Empty string's length is zero
print(len(""))
 ```

Program outputs:
```
2
11
7
0
 ```

So the function takes a string as a parameter and returns information about its length -. so the value returned is zero or a positive integer.

## Characters in a string

All characters in a string have an index (i.e. an ordinal number). The index can be used to refer to individual characters in a string, for example to pick the first, second or last character in a string.

In Python, as in most other programming languages, indexing usually starts from zero. This means that the first character of the string is at index zero. Similarly, the last character of a string is at the index (string length minus one):

![String indexes](/img/img-en/w3-1.png)

A single character can be referred to by a hook closure notation. Hash brackets are written after a string variable or string constant. The index of the character to be returned is written inside the square brackets.

For example

```python 
name = "Pekka Python"

# first character
print("First:", name[0])

# third character
print("Third:", name[2])

# first, second and third character
print("First, second, third:", name[0] + name[1] + name[2])

# The character can also be extracted from the string standard
print("abcdef"[2])
 ```

Program outputs:

``` 
First: P
Third: k
First, second, third: Pek
c
 ```

The following program prints the first and last characters of the string entered by the user:

```python 
while True:
    s = input("Give a string, empty quits: ")
    if s == "":
        break

    print("1st character:", s[0])

    # last character is at the index of length minus one
    print("Final character:", s[len(s) - 1])
 ```

Example execution
``` 
Give a string, empty quits: Hello
1st character: H
Final character: o
Give a string, empty quits: Goodbye
1st character: G
Final character: e
Give a string, empty quits: Thanks a lot!
1st character: T
Final character: !
Give a string, empty quits:
 ```

Note that if an attempt is made to reference a character that is not in the string, an error message will result:

```python 
s = "abc"

# First, second and third indexes work
print(s[0])
print(s[1])
print(s[2])

# Fourth index does not exist, this will produce an error
print(s[3])
 ```

Program ouputs:
```
a
b
c
Traceback (most recent call last):
  File "chars.py", line 9, in <module>
    print(str[3])
IndexError: string index out of range
 ```

## Negative indexes

In Python, characters can also be referred to using negative indices. An index of -1 indicates the last character in the queue, -2 the second-to-last character in the queue, and so on:

![Negative indexes](/img/img-en/w3-2.png)

Each character in the string therefore has two indices: positive and negative. The last character in the string can be referred to either by its length or by using a negative index:

```python 
word = input("Give a word: ")

# Last character with the length
print("Last character: " + word[len(word) - 1])

# Last character with the negative index
print("Last character: " + word[-1])
 ```

Example execution:
``` 
Give a word: Test
Last character: t
Last character: t
 ```

## Substrings

A substring is a string found "inside" the original string. Examples of substrings of the string "Python" would be "Py", "ytho", "hon" and "Python".

A substring can be extracted from a string by using a hash operator with the start and end index of the substring to be extracted. A colon is written between the indices.

When extracting a sub-string, it is important to remember that the character corresponding to the starting index is included in the sub-string, but the character corresponding to the ending index is not. As a rule of thumb, for example, you can think of the index of characters as vertical lines drawn to the left of the characters:

For example, if the string "Pekka Python" were taken as a substring between indices 3 and 8...

![Specific indices](/img/img-en/w3-3.png)

...the result would be the substring "ka Py":

```python 
name = "Pekka Python"

substring = name[3:8]

print(substring)
 ```

Program outputs:
```
ka Py
 ```

More examples of substring extraction:

```python 
alphabets = "ABCDEFGHIJKL"

start = alphabets[0:5]
end = alphabets[7:12]
middle = alphabets[3:9]

print(start)
print(end)
print(middle)
 ```

Program outputs:
```
ABCDE
HIJKL
DEFGHI
 ```

Unlike when extracting a character, it is allowed to refer to an index in a substring that is not found in the string. In this case, however, the substring may contain a smaller number of characters than expected:
```python 
name = "Leila"

index = 0

while index < len(name):
    part_name = name[index: index + 3]
    print(part_name)

    index += 1
 ```

Program outputs:
```
Lei
eil
ila
la
a
 ```