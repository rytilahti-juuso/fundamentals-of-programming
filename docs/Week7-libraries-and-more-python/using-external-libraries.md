---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

<Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=import%20random%0A%0A%23%20Function%20returns%20a%20random%20number%0A%23%20between%201...6%0Adef%20roll_dice%28%29%3A%0A%20%20%20%20return%20random.randint%281,%206%29%0A%0A%0A%23%20Testing%0Afor%20i%20in%20range%285%29%3A%0A%20%20%20%20print%28%22Dice%20result%20is%22,%20roll_dice%28%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=25&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Another clever operation found in the random library is `choice(series)`, which returns a random element from a given series - for example, an element from a list or a string of characters:

 <Tabs>
  <TabItem value="code" label="Code Example" default>
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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=import%20random%0A%0Afnames%20%3D%20%5B%22Jack%22,%20%22Pete%22,%20%22Jane%22,%20%22Paula%22%5D%0Asnames%20%3D%20%5B%22Smith%22,%20%22Wayne%22,%20%22Jackson%22%5D%0A%0Aname%20%3D%20random.choice%28fnames%29%20%2B%20%22%20%22%20%2B%20random.choice%28snames%29%0A%0Aprint%28%22Random%20name%3A%22,%20name%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Another handy operation is, for example, sample, which returns a randomly sized sample of primitives from a given sequence. All elements are unique - therefore the original set must have at least the same number of elements as the set to be guessed.

 <Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    import random

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
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=import%20random%0A%0Adef%20lotterynumbers%28%29%3A%0A%20%20%20%20numbers%20%3D%20list%28range%281,%2040%29%29%0A%20%20%20%20%23%20A%20sample%20of%207%20numbers%20will%20be%20drawn%0A%20%20%20%20return%20random.sample%28numbers,%207%29%0A%0Afor%20i%20in%20range%283%29%3A%0A%20%20%20%20print%28sorted%28lotterynumbers%28%29%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>