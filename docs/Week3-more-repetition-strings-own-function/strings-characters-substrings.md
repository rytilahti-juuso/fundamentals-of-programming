---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Strings, characters and substrings

As stated earlier, a string is a sequence of zero, one or more characters. The characters in a string can be any of the characters in the string used. Python version 3 defaults to a character encoding called Unicode, which can be used to represent almost all commonly used characters (of course, the characters that can be printed on the screen also depend on the font used).

The number of characters found in the string can be returned by the **len** function. For example:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=str%20%3D%20%22Hi%22%0Aprint%28len%28str%29%29%0A%0Aname%20%3D%20%22Pete%20Python%22%0Aprint%28len%28name%29%29%0A%0A%23%20All%20characters,%20including%20spaces%20are%20included%20in%20the%20length%0Astr2%20%3D%20%22a%20b%20c%20d%22%0A%0Alength%20%3D%20len%28str2%29%0Aprint%28length%29%0A%0A%23%20Empty%20string's%20length%20is%20zero%0Aprint%28len%28%22%22%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

So the function takes a string as a parameter and returns information about its length -. so the value returned is zero or a positive integer.

## Characters in a string

All characters in a string have an index (i.e. an ordinal number). The index can be used to refer to individual characters in a string, for example to pick the first, second or last character in a string.

In Python, as in most other programming languages, indexing usually starts from zero. This means that the first character of the string is at index zero. Similarly, the last character of a string is at the index (string length minus one):

![String indexes](/img/img-en/w3-1.png)

A single character can be referred to by a hook closure notation. Hash brackets are written after a string variable or string constant. The index of the character to be returned is written inside the square brackets.

For example

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=name%20%3D%20%22Pekka%20Python%22%0A%0A%23%20first%20character%0Aprint%28%22First%3A%22,%20name%5B0%5D%29%0A%0A%23%20third%20character%0Aprint%28%22Third%3A%22,%20name%5B2%5D%29%0A%0A%23%20first,%20second%20and%20third%20character%0Aprint%28%22First,%20second,%20third%3A%22,%20name%5B0%5D%20%2B%20name%5B1%5D%20%2B%20name%5B2%5D%29%0A%0A%23%20The%20character%20can%20also%20be%20extracted%20from%20the%20string%20standard%0Aprint%28%22abcdef%22%5B2%5D%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The following program prints the first and last characters of the string entered by the user:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=while%20True%3A%0A%20%20%20%20s%20%3D%20input%28%22Give%20a%20string,%20empty%20quits%3A%20%22%29%0A%20%20%20%20if%20s%20%3D%3D%20%22%22%3A%0A%20%20%20%20%20%20%20%20break%0A%0A%20%20%20%20print%28%221st%20character%3A%22,%20s%5B0%5D%29%0A%0A%20%20%20%20%23%20last%20character%20is%20at%20the%20index%20of%20length%20minus%20one%0A%20%20%20%20print%28%22Final%20character%3A%22,%20s%5Blen%28s%29%20-%201%5D%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

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

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    name = "Pekka Python"

    substring = name[3:8]

    print(substring)
    ```

    Program outputs:
    ```
    ka Py
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=name%20%3D%20%22Pekka%20Python%22%0A%0Asubstring%20%3D%20name%5B3%3A8%5D%0A%0Aprint%28substring%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

More examples of substring extraction:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=alphabets%20%3D%20%22ABCDEFGHIJKL%22%0A%0Astart%20%3D%20alphabets%5B0%3A5%5D%0Aend%20%3D%20alphabets%5B7%3A12%5D%0Amiddle%20%3D%20alphabets%5B3%3A9%5D%0A%0Aprint%28start%29%0Aprint%28end%29%0Aprint%28middle%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Unlike when extracting a character, it is allowed to refer to an index in a substring that is not found in the string. In this case, however, the substring may contain a smaller number of characters than expected:

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=name%20%3D%20%22Leila%22%0A%0Aindex%20%3D%200%0A%0Awhile%20index%20%3C%20len%28name%29%3A%0A%20%20%20%20part_name%20%3D%20name%5Bindex%3A%20index%20%2B%203%5D%0A%20%20%20%20print%28part_name%29%0A%0A%20%20%20%20index%20%2B%3D%201&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>