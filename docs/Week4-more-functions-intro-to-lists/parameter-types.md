---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Parameter types

For the sake of an example, let us consider a situation where we have defined a function like the one described above from many. The function has two parameters and prints the result of the multiplication of its parameters:

```python 
def multiply(string, num):
    print(string * num)
 ```

The function can now be called, for example, by passing a string and an integer as real parameters:

```python 
def multiply(string, num):
    print(string * num)

multiply("hi", 3)
 ```

Program outputs:
```
hihihi
 ```

However, the function also produces a result when two numbers are passed to it as parameters. This is, of course, because the multiplication of two numbers is a Python expression:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    def multiply(string, num):
        print(string * num)

    multiply(5, 2)
    multiply(10, 2.5)
    multiply(1.5, 5.5)
    ```

    Program outputs:
    ``` 
    10
    25.0
    8.25
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20multiply%28string,%20num%29%3A%0A%20%20%20%20print%28string%20*%20num%29%0A%0Amultiply%285,%202%29%0Amultiply%2810,%202.5%29%0Amultiply%281.5,%205.5%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

However, if the function is given two strings as parameters, an error occurs:

```python 
def multiply(string, num):
    print(string * num)

multiply("hi", "hello")
 ```

Program outputs:
``` 
Traceback (most recent call last):
  File "multiply.py", line 4, in <module>
    multiply("hi", "hello")
  File "multiply.py", line 2, in multiply
    print(string * num)
TypeError: can't multiply sequence by non-int of type 'str'
 ```

## Type hints

Python does not specify the type of variables, but the type is automatically derived based on the value placed in the variable. As noted above, this can be problematic with functions. Therefore, type hints can be defined for the function parameters, so that the caller knows what type the actual parameters should be.

The type hint is written after the formal parameter, separated by a colon. The type reference is usually the name of an object's type - for example, an integer is called int and a string is called str.

A function of many could therefore be defined as follows with type hints:

```python 
def multiply(string: str, number: int):
    print(string * number)
 ```

Note that type hints still do not force the caller to use the correct types. Their role is to act as a comment-like hint as to which types should be used in the invitation. However, various external checkers can be used to ensure that the correct types have been used in calls.

More types are presented in the table below:

| Type | Name in Python |
| ---- | -------------- |
| Number | int |
|Floating point number | float |
| String | str |
| Truth value | bool |

The example function prints the person's details:
```python 
def print_person(name: str, address: str, height: float, age: int):
    print(f"Hello, my name is {name} and I am {age} years old.")
    print(f"I live at {address}.")
    print(f"I am {height:.2f} cm. tall.")


# Testing
print_person("Paul", "Pythonroad 2", 167.5, 22)
 ```

Program outputs:
```
Hello, my name is Paul and I am 22 years old.
I live at Python road 2.
I am 167.50 cm. tall.
 ```

## Type conversions

Note that functions with the above type names can also be used for type conversions. In the past, we have at least used the functions int and float when we wanted to convert a string of user input into an integer.

Let's review some examples of conversions:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    string = "243"

    # As we know, string can be converted to
    # numbers, if it contains only numbers
    integer = int(string)
    floatNumber = float(string)

    print(integer)
    print(floatNumber)

    # An integer can be converted to a float and vice versa
    a = 1.23
    b = 10

    a2 = int(a)
    b2 = float(b)

    print(a2)
    print(b2)

    # An integer can also be converted into a string
    # This simplifies some tasks like catenation
    integer = 234

    result = "Result is " + str(integer)
    print(result)
    ```

    Program outputs:
    ```
    243
    243.0
    1
    10.0
    Result is 234
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=string%20%3D%20%22243%22%0A%0A%23%20As%20we%20know,%20string%20can%20be%20converted%20to%0A%23%20numbers,%20if%20it%20contains%20only%20numbers%0Ainteger%20%3D%20int%28string%29%0AfloatNumber%20%3D%20float%28string%29%0A%0Aprint%28integer%29%0Aprint%28floatNumber%29%0A%0A%23%20An%20integer%20can%20be%20converted%20to%20a%20float%20and%20vice%20versa%0Aa%20%3D%201.23%0Ab%20%3D%2010%0A%0Aa2%20%3D%20int%28a%29%0Ab2%20%3D%20float%28b%29%0A%0Aprint%28a2%29%0Aprint%28b2%29%0A%0A%23%20An%20integer%20can%20also%20be%20converted%20into%20a%20string%0A%23%20This%20simplifies%20some%20tasks%20like%20catenation%0Ainteger%20%3D%20234%0A%0Aresult%20%3D%20%22Result%20is%20%22%20%2B%20str%28integer%29%0Aprint%28result%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Note that type conversions do not always correspond to mathematical rounding, for example: converting a floating point number to an integer only drops the whole decimal part (in mathematics, this is called a floor function).

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    num1 = 1.1
    num2 = 1.5
    num3 = 1.999

    # Converting to integer results in 1,
    # because int()-operation only drops
    # the decimal part
    print(int(num1))
    print(int(num2))
    print(int(num3))
    ```

    Program outputs:
    ```
    1
    1
    1
     ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=num1%20%3D%201.1%0Anum2%20%3D%201.5%0Anum3%20%3D%201.999%0A%0A%23%20Converting%20to%20integer%20results%20in%201,%0A%23%20because%20int%28%29-operation%20only%20drops%0A%23%20the%20decimal%20part%0Aprint%28int%28num1%29%29%0Aprint%28int%28num2%29%29%0Aprint%28int%28num3%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>