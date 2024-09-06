---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Return values

Let's return to the Python built-in functions introduced earlier in the course. Functions such as input and len return a value when called, which can, for example, be stored in a variable. Our own functions, however, only print the result to the screen.

However, you can return a value from a function of your own. The value is returned by a return statement, the syntax of which is

`return <clause>`

The clause immediately terminates the execution of the function and returns the execution to the caller. A return value corresponding to the result of the expression is included.

For example, the following function returns the sum of the values it receives as a parameter:

```python 
def sum(num1: int, num2: int):
    # calculating sum
    sum = num1 + num2

    # returning sum
    return sum
 ```

Now when the function is called, the return value can be used as part of the expression:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def sum(num1: int, num2: int): 
        # calculating sum  
        sum = num1 + num2 

        # returning sum 
        return sum


    # Saving the return value in a variable
    result = sum(10, 20)

    # printing it
    print(result)

    # Using the return value part of a clause
    result2 = sum(2,2) + 5 * sum(3, 3)
    print(result2)
    ```

    Program outputs:
    ```
    30
    34
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20sum%28num1%3A%20int,%20num2%3A%20int%29%3A%20%0A%20%20%20%20%23%20calculating%20sum%20%20%0A%20%20%20%20sum%20%3D%20num1%20%2B%20num2%20%0A%0A%20%20%20%20%23%20returning%20sum%20%0A%20%20%20%20return%20sum%0A%0A%0A%23%20Saving%20the%20return%20value%20in%20a%20variable%0Aresult%20%3D%20sum%2810,%2020%29%0A%0A%23%20printing%20it%0Aprint%28result%29%0A%0A%23%20Using%20the%20return%20value%20part%20of%20a%20clause%0Aresult2%20%3D%20sum%282,2%29%20%2B%205%20*%20sum%283,%203%29%0Aprint%28result2%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

If nothing is done to the return value, it appears that the function does nothing at all:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def sum(num1: int, num2: int):
        # calculating sum
        sum = num1 + num2

        # returning sum
        return sum


    # Calling function, but let's not do anything to the return value
    sum(10, 20)
    ```

    Program outputs:

    **-- No output --**
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20sum%28num1%3A%20int,%20num2%3A%20int%29%3A%0A%20%20%20%20%23%20calculating%20sum%0A%20%20%20%20sum%20%3D%20num1%20%2B%20num2%0A%0A%20%20%20%20%23%20returning%20sum%0A%20%20%20%20return%20sum%0A%0A%0A%23%20Calling%20function,%20but%20let's%20not%20do%20anything%20to%20the%20return%20value%0Asum%2810,%2020%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>


Let's look at a few more examples of functions that return a value and how they are called. First, a function that returns a string multiplied

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def multiply(string: str, amount: int):
        return string * amount

    # Example function calls:
    message = "Hello!"
    print(message)
    print(multiply("*", len(message)))

    # Another example
    num = 1
    string = ""
    while num < 10:
        string += multiply(str(num), num)
        num += 1

    print(string)
    ```

    Program outputs:
    ``` 
    Hello!
    ***********
    122333444455555666666777777788888888999999999
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20multiply%28string%3A%20str,%20amount%3A%20int%29%3A%0A%20%20%20%20return%20string%20*%20amount%0A%0A%23%20Example%20function%20calls%3A%0Amessage%20%3D%20%22Hello!%22%0Aprint%28message%29%0Aprint%28multiply%28%22*%22,%20len%28message%29%29%29%0A%0A%23%20Another%20example%0Anum%20%3D%201%0Astring%20%3D%20%22%22%0Awhile%20num%20%3C%2010%3A%0A%20%20%20%20string%20%2B%3D%20multiply%28str%28num%29,%20num%29%0A%20%20%20%20num%20%2B%3D%201%0A%0Aprint%28string%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The following is an example of a function that returns a sum between start...end:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def sum(start: int, end: int):
        sum = 0
        while start <= end:
            sum += start
            start += 1

        return sum


    # Example function calls
    start = int(input("Give the first number: "))
    end = int(input("Give the second number: "))
    print("Sum is", sum(start, end))


    larger_sum = sum(1,10) + sum(5,15) + sum(100,105)
    print(larger_sum)
     ```

    Program outputs:
    ```
    Give the first number: 2
    Give the second number: 6
    Sum is 20
    780
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20sum%28start%3A%20int,%20end%3A%20int%29%3A%0A%20%20%20%20sum%20%3D%200%0A%20%20%20%20while%20start%20%3C%3D%20end%3A%0A%20%20%20%20%20%20%20%20sum%20%2B%3D%20start%0A%20%20%20%20%20%20%20%20start%20%2B%3D%201%0A%0A%20%20%20%20return%20sum%0A%0A%0A%23%20Example%20function%20calls%0Astart%20%3D%20int%28input%28%22Give%20the%20first%20number%3A%20%22%29%29%0Aend%20%3D%20int%28input%28%22Give%20the%20second%20number%3A%20%22%29%29%0Aprint%28%22Sum%20is%22,%20sum%28start,%20end%29%29%0A%0A%0Alarger_sum%20%3D%20sum%281,10%29%20%2B%20sum%285,15%29%20%2B%20sum%28100,105%29%0Aprint%28larger_sum%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Return or print

It is important to note the difference between a function returning something and a function printing something to the screen. However, this is often a difficult distinction to grasp when starting to program.

The following example aims to illustrate the difference:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def print_larger(a: int, b: int):
        if a > b:
            print(a)
        else:
            print(b)


    def return_larger(a: int, b: int):
        if a > b:
            return a
        else:
            return b


    # Calling print
    print_larger(10, 15)


    # Function's return value must be handled
    larger = return_larger(100,200)

    # Of course, it can be printed out on the screen
    print("Return value was", larger)

    # ... or be used in a clause
    print("Return value times 10 is", larger * 10)
    ```

    Program outputs:
    ```
    15
    Return value was 200
    Return value times 10 is 2000
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20print_larger%28a%3A%20int,%20b%3A%20int%29%3A%0A%20%20%20%20if%20a%20%3E%20b%3A%0A%20%20%20%20%20%20%20%20print%28a%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28b%29%0A%0A%0Adef%20return_larger%28a%3A%20int,%20b%3A%20int%29%3A%0A%20%20%20%20if%20a%20%3E%20b%3A%0A%20%20%20%20%20%20%20%20return%20a%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20return%20b%0A%0A%0A%23%20Calling%20print%0Aprint_larger%2810,%2015%29%0A%0A%0A%23%20Function's%20return%20value%20must%20be%20handled%0Alarger%20%3D%20return_larger%28100,200%29%0A%0A%23%20Of%20course,%20it%20can%20be%20printed%20out%20on%20the%20screen%0Aprint%28%22Return%20value%20was%22,%20larger%29%0A%0A%23%20...%20or%20be%20used%20in%20a%20clause%0Aprint%28%22Return%20value%20times%2010%20is%22,%20larger%20*%2010%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

One more example of value recovery. The following function takes two strings as parameters and returns the string with more spaces:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def more_words(phrase1: str, phrase2: str):
        chosen1 = phrase1.count(" ")
        chosen2 = phrase2.count(" ")

        if chosen1 > chosen2:
            return chosen1
        else:
            return chosen2


    # Testing
    l1 = "Hello to all folks!"
    l2 = "Yo yo yo what's up peeps!"

    print("More words in a sentence:")
    print(more_words(l1, l2))
    ```

    Program outputs:
    ```
    More words in a sentence:
    Yo yo yo what's up peeps!
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20more_words%28phrase1%3A%20str,%20phrase2%3A%20str%29%3A%0A%20%20%20%20chosen1%20%3D%20phrase1.count%28%22%20%22%29%0A%20%20%20%20chosen2%20%3D%20phrase2.count%28%22%20%22%29%0A%0A%20%20%20%20if%20chosen1%20%3E%20chosen2%3A%0A%20%20%20%20%20%20%20%20return%20chosen1%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20return%20chosen2%0A%0A%0A%23%20Testing%0Al1%20%3D%20%22Hello%20to%20all%20folks!%22%0Al2%20%3D%20%22Yo%20yo%20yo%20what's%20up%20peeps!%22%0A%0Aprint%28%22More%20words%20in%20a%20sentence%3A%22%29%0Aprint%28more_words%28l1,%20l2%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Retun value's type hint

A type reference can also be assigned to the return value. The type hint informs the caller that the function returns a value of a certain type.

Type hints are not always used in the course in connection with return values, but their syntax is presented in the following examples anyway:

```python 
# Function returns an integer
def return_three() -> int:
    return 3

# Function returns a float
def average(a: int, b: int, c: int) -> float:
    return (a + b + c) / 3

# Function returns a string (str)
def more_words(phrase1: str, phrase2: str) -> str:
    chosen1 = phrase1.count(" ")
    chosen2 = phrase2.count(" ")

    if chosen1 > chosen2:
        return phrase1
    else:
        return phrase2
 ```