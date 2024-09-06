---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Several parameters

Last time, all the examples and functions in the exercises had only one parameter. However, there can be more than one parameter. In this case, the parameters are separated by commas, both in the function definition and in the function call.

Consider an example of a function that prints the larger of the two numbers it receives as parameters:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def print_larger(num1, num2):
        if num1 > num2:
            print(num1)
        else:
            print(num2)


    # Example call
    print_larger(20, 10)
    print_larger(5 + 5, 5 * 5)
    ```

    Program outputs:
    ``` 
    20
    25
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20print_larger%28num1,%20num2%29%3A%0A%20%20%20%20if%20num1%20%3E%20num2%3A%0A%20%20%20%20%20%20%20%20print%28num1%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28num2%29%0A%0A%0A%23%20Example%20call%0Aprint_larger%2820,%2010%29%0Aprint_larger%285%20%2B%205,%205%20*%205%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Of course, there can be even more parameters. The function `average` calculates and prints on the screen the average of the four numbers it receives as parameters:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def average(num1, num2, num3, num4):
        sum = num1 + num2 + num3 + num4
        print(sum / 4)


    # Testing function
    average(1,2,3,4)
    average(10, 9, 10, 7)
    ```

    Program outputs:
    ``` 
    2.5
    9.0
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20average%28num1,%20num2,%20num3,%20num4%29%3A%0A%20%20%20%20sum%20%3D%20num1%20%2B%20num2%20%2B%20num3%20%2B%20num4%0A%20%20%20%20print%28sum%20/%204%29%0A%0A%0A%23%20Testing%20function%0Aaverage%281,2,3,4%29%0Aaverage%2810,%209,%2010,%207%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Parameters can also be of different types. The function `multiply` prints the given string under the given number:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def multiply(string, amount):
        i = 0
        while i < amount:
            print(string)
            i += 1

    # Testing
    multiply("Yippee", 4)
    multiply("Tutturuu", 2)
    ```

    Program outputs:
    ``` 
    Yippee
    Yippee
    Yippee
    Yippee
    Tutturuu
    Tutturuu
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20multiply%28string,%20amount%29%3A%0A%20%20%20%20i%20%3D%200%0A%20%20%20%20while%20i%20%3C%20amount%3A%0A%20%20%20%20%20%20%20%20print%28string%29%0A%20%20%20%20%20%20%20%20i%20%2B%3D%201%0A%0A%23%20Testing%0Amultiply%28%22Yippee%22,%204%29%0Amultiply%28%22Tutturuu%22,%202%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Let's look at one more example that prints the shorter of the two given strings:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def print_shorter(str1, str2):
        if len(str1) < len(str2):
            print(str1)
        else:
            print(str2)


    # Testing
    print_shorter("First", "Second")
    print_shorter("Hellooo", "Hi")
    ```

    Program outputs:
    ``` 
    First
    Hi
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20print_shorter%28str1,%20str2%29%3A%0A%20%20%20%20if%20len%28str1%29%20%3C%20len%28str2%29%3A%0A%20%20%20%20%20%20%20%20print%28str1%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28str2%29%0A%0A%0A%23%20Testing%0Aprint_shorter%28%22First%22,%20%22Second%22%29%0Aprint_shorter%28%22Hellooo%22,%20%22Hi%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Formal and actual parameter

Functions are often referred to as **formal** and **actual** parameters. A formal parameter refers to a parameter variable used in the definition of a function. For example, formal parameters of a function called `multiply` are a string and a field:

```python 
def multiply(string, amount):
    print(string * amount)
 ```

The actual value is the value that the parameter takes when the function is called. The actual parameter can therefore take different values at different call times. For example, in the following example, the function `multiply` receives the actual parameter values "xyz" and 5:


```python 
def multiply(string, amount): 
    print(string * amount)

# Calling function
multiply("xyz", 5)
 ```

Program outputs:
```
xyzxyzxyzxyzxyz
 ```

Here again, the actual parameter values are "abracadabra" and 4:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def multiply(string, amount):
        print(string * amount)

    # Calling function
    multiply("abrakadabra", 4)
    ```

    Program outputs:
    ``` 
    abrakadabraabrakadabraabrakadabraabrakadabra
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20multiply%28string,%20amount%29%3A%0A%20%20%20%20print%28string%20*%20amount%29%0A%0A%23%20Calling%20function%0Amultiply%28%22abrakadabra%22,%204%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Local variables

The variables initialized within a function are the local variables of the function. This means that they only exist during the execution of the function. This also applies to the parameters of the function.

Note that a function can have variables with the same name as the main program (or other functions). However, they are different variables.

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def increase_and_print(num):
        # num is a local variable in the function
        num += 1
        print("Value in the function increase_and_print:", num)

    # This num is the main program's variable
    # It's a different one from the function's variable
    num = 10
    print("Value before call:", num)

    increase_and_print(num)

    # Main program's variable hasn't changed
    print("Value after call:", num)
    ```

    Program outputs:
    ```
    Value before call: 10
    Value in the function increase_and_print: 11
    Value after call: 10
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20increase_and_print%28num%29%3A%0A%20%20%20%20%23%20num%20is%20a%20local%20variable%20in%20the%20function%0A%20%20%20%20num%20%2B%3D%201%0A%20%20%20%20print%28%22Value%20in%20the%20function%20increase_and_print%3A%22,%20num%29%0A%0A%23%20This%20num%20is%20the%20main%20program's%20variable%0A%23%20It's%20a%20different%20one%20from%20the%20function's%20variable%0Anum%20%3D%2010%0Aprint%28%22Value%20before%20call%3A%22,%20num%29%0A%0Aincrease_and_print%28num%29%0A%0A%23%20Main%20program's%20variable%20hasn't%20changed%0Aprint%28%22Value%20after%20call%3A%22,%20num%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

If you try to reference the local variables of a function from outside the function, an error will result:

```python 
def print_numbers(max):
    counter = 1
    while counter <= max:
        print(counter)
        counter +=1

# Calling function...
print_numbers(5)

# Now attempt to reference to counter provides an error,
# since the counter exists only within function
print(counter)
 ```

Program outputs:
``` 
1
2
3
4
5
Traceback (most recent call last):
  File "counter.py", line 12, in <module>
    print(counter)
NameError: name 'counter' is not defined
 ```

However, variables in the main program can be referenced within a function:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def add_interest(amount):
        #  interest rate defined in the main program is visible here...
        amount += (amount * interest)
        print("Money now:", amount)


    # Define interest rate
    interest = 0.05

    add_interest(1000)
    ```

    Program outputs:
    ```
    Money now: 1050.0
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20add_interest%28amount%29%3A%0A%20%20%20%20%23%20%20interest%20rate%20defined%20in%20the%20main%20program%20is%20visible%20here...%0A%20%20%20%20amount%20%2B%3D%20%28amount%20*%20interest%29%0A%20%20%20%20print%28%22Money%20now%3A%22,%20amount%29%0A%0A%0A%23%20Define%20interest%20rate%0Ainterest%20%3D%200.05%0A%0Aadd_interest%281000%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

However, variables can only be read within a function. If an attempt is made to change the value, the result is again an error message:

```python 
def add_interest(amount):
    # Attempt to modify the interest, this results in an error
    interest = interest + 0.25

    amount += (amoount * interest)
    print("Money now:", amount)



# Define interest rate
interest = 0.05

add_interest(1000)
 ```

Program outputs:
```
Traceback (most recent call last):
  File "interest.py", line 13, in <module>
    add_interest(1000)
  File "interest.py", line 3, in add_interest
    interest = interest + 0.25
UnboundLocalError: local variable 'interest' referenced before assignment
 ```

If there is a need to change a variable in the main program within a function, access to the variable can be opened with the **global** keyword:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def add_interest(amount):
        # when interest is defined as global, it can be referenced
        global interest
    
        interest = interest + 0.25

        amount += (amount * interest)
        print("Money now:", amount)



    # Define interest rate
    interest = 0.05

    add_interest(1000)
    ```

    Program outputs:
    ```
    Money now: 1300.0
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20add_interest%28amount%29%3A%0A%20%20%20%20%23%20when%20interest%20is%20defined%20as%20global,%20it%20can%20be%20referenced%0A%20%20%20%20global%20interest%0A%20%20%20%20%0A%20%20%20%20interest%20%3D%20interest%20%2B%200.25%0A%0A%20%20%20%20amount%20%2B%3D%20%28amount%20*%20interest%29%0A%20%20%20%20print%28%22Money%20now%3A%22,%20amount%29%0A%0A%0A%0A%23%20Define%20interest%20rate%0Ainterest%20%3D%200.05%0A%0Aadd_interest%281000%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

However, this is usually not desirable. It is almost always best to pass a value to the function as a parameter rather than as a function:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def add_interest(amount, interest):
        # Now interest is passed as a parameter
        interest = interest + 0.25

        amount += (amount * interest)
        print("Money now:", amount)



    # Define interest rate
    interest = 0.05

    # Interest is now an actual parameter
    add_interest(1000, interest)
    ```

    Program ouptuts:
    ```
    Money now: 1300.0
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20add_interest%28amount,%20interest%29%3A%0A%20%20%20%20%23%20Now%20interest%20is%20passed%20as%20a%20parameter%0A%20%20%20%20interest%20%3D%20interest%20%2B%200.25%0A%0A%20%20%20%20amount%20%2B%3D%20%28amount%20*%20interest%29%0A%20%20%20%20print%28%22Money%20now%3A%22,%20amount%29%0A%0A%0A%0A%23%20Define%20interest%20rate%0Ainterest%20%3D%200.05%0A%0A%23%20Interest%20is%20now%20an%20actual%20parameter%0Aadd_interest%281000,%20interest%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Changing the values of the variables in the main program is also called a side effect. We will talk more about side effects and reasons to avoid them next week.