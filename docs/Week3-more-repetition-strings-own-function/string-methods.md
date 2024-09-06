---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# String methods

For handling strings, Python provides a variety of handy pre-built methods. Let's look at a few of them here.

A method is a function that is applied to an object. In the case of string methods, the entity is the original string. Methods are separated from the object (usually the variable containing the string) by a dot.

## Finding substrings

Another substring of the string can be found using the find method. The method returns the index where the first occurrence of the substring is found, or -1 if no substring is found.

The method call is written in the form

`string.find(substring)`

For example, a method call

`"abcabc".find("bc")`

would return 1, because the first occurrence of the substring "bc" in the string "abcabc" starts at index 1.

The example program will tell you which index the given word in the sentence is found in:

```python 
while True:
    sentence = input("Sentence (empty quits): ")

    if sentence == "":
        break

    word = input("Word: ")
    
    ind = sentence.find(word)

    if ind < 0:
        print("Word is not found in the sentence")
    else:
        print("Word is found from the index", ind)
 ```

Example execution:
```
Sentence (empty quits): Hi everyone
Word: everyone
Word is found from the index 3
Sentence (empty quits): How are you doing
Word: you
Word is found from the index 8
Sentence (empty quits): I am doing fine
Word: bad
Word is not found in the sentence
Sentence (empty quits):
Word:
 ```

Note that if, instead of the exact location of the substring, we only want to know if a substring is found at all, it is easiest to use the operator **in**. Clause

`substring in string`

returns **True** if the substring occurs in a string. The following example illustrates its use:

```python 
beatles = "Paul John George Ringo"
print("Paul" in beatles)
print("John" in beatles)
print("Pete Best" in beatles)

if "Ringo" in beatles:
    print("Ringo too!")

if "Elton John" in beatles:
    print("Are you sure?")
 ```

Program outputs:
```
True
True
False
Ringo too!
 ```

## Calculating substrings

The number of occurrences of substrings in a string can be calculated using the **count** method. The syntax is similar to that for method count:

`string.count(substring)`

The method returns either zero or a positive integer depending on the number of times the given substring occurs in the given string.

For example, method call

`"abcabcabc".count("ab")`

would return 3, because the substring "ab" occurs three times in the string "abcabcabc".

Note that only complete substrings are counted - for example, in a string "aaaa" there are only two substrings of "aa".

The example program calculates the number of a's in a sentence:

```python 
while True:
    sentence = input("Give a sentence, empty ends: ")

    if sentence == "":
        break

    print("Sentence has", sentence.count("a"), "a letters.")
 ```

Example execution:
```
Give a sentence, empty ends: hi
Sentence has 0 a letters.
Give a sentence, empty ends: This is a test sentence
Sentence has 1 a letters.
Give a sentence, empty ends: Lalalala, what an amazing day
Sentence has 9 a letters.
Give a sentence, empty ends:
 ```

## Replacing substrings

The last method to be presented is the substitution of a substring by another substring. The syntax of the **replace** method used looks like this:

`string.replace(substring1, substring2)`

The method returns a new string in which all occurrences of substring 1 have been replaced by substring 2. For example, a method call

`"abcabc".replace("a", "xx")`

would return a new string "xxbcxxbc".

Note that the method does not modify an existing string, but creates a completely new string. The following example illustrates the point:

```python 
sentence = "Hi, nice to meet you."
sentence2 = sentence.replace("Hi", "Hello")

print(sentence)
print(sentence2)

# replace is also useful, when you want to "remove" substrings
# replace substring with an empty string
sentence2 = sentence2.replace("you", "")

print(sentence2)
 ```

Program outputs:
```
Hi, nice to meet you.
Hello, nice to meet you.
Hello, nice to meet .
 ```