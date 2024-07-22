---
sidebar_position: 1
---

# Using external libraries

An essential part of programming is not having to reinvent the wheel yourself. Python comes with a number of pre-built libraries (or modules) that can make writing your own programs much easier. In addition, you can extend the functionality by downloading more libraries (often free) from the web. These will not be covered in detail in this course, but good examples include TensorFlow (https://www.tensorflow.org/) for machine learning and Pygame (https://www.pygame.org) for game development. When looking for external libraries, it is a good idea to check out Python's pip tool (https://pypi.org/project/pip/), which makes it easy to install libraries.

## Randomness with the Random library

Random numbers are typically needed in games, for example, but they are also needed in programs such as cryptography or testing programs with random values. However, it is usually not possible to generate truly random numbers on a computer (due to their predictable behaviour), but instead we talk about so-called pseudo-random numbers. For most purposes, however, the numbers are sufficiently random.

In Python, random numbers can be generated using a library such as **random**. The library is introduced by an **import** statement, the syntax of which is

`import <library name>`

It is usually a good idea to write all the import statements needed by the program at the beginning of the program, so that it is easy to see which libraries the program uses. Once a library has been implemented, the operations defined in it can be referred to by the syntax

`<library name>.<operation name>`

with the help of. Another way is to specify the operation to be used directly in the import statement, for example

```python 
from random import randint
 ```

...so that the operation can be referred to directly without the library name.

The following example uses the random library function `randint(start: int, end: int)`, which returns a random integer between [start, end]. Note that in this case, the start and end points are also included in the range:

```python 
import random

# Function returns a random number
# between 1...6
def roll_dice():
    return random.randint(1, 6)


# Testing
for i in range(5):
    print("Dice result is", roll_dice())
 ```

Example execution:
```
Dice result is 2
Dice result is 4
Dice result is 6
Dice result is 1
Dice result is 1
 ```

Another clever operation found in the random library is `choice(series)`, which returns a random element from a given series - for example, an element from a list or a string of characters:

```python 
import random

fnames = ["Jack", "Pete", "Jane", "Paula"]
snames = ["Smith", "Wayne", "Jackson"]

name = random.choice(fnames) + " " + random.choice(snames)

print("Random name:", name)
 ```

Example execution:
``` 
Random name: Pete Smith
 ```

Another handy operation is, for example, sample, which returns a randomly sized sample of primitives from a given sequence. All elements are unique - therefore the original set must have at least the same number of elements as the set to be guessed.

```python 
import random
 ```
```python 
def lotterynumbers():
    numbers = list(range(1, 40))
    # A sample of 7 numbers will be drawn
    return random.sample(numbers, 7)

for i in range(3):
    print(sorted(lotterynumbers()))
 ```

Example execution:
```
[1, 11, 12, 17, 28, 29, 37]
[1, 3, 6, 15, 25, 29, 33]
[3, 13, 22, 32, 34, 35, 38]
 ```