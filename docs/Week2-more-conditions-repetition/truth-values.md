---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Truth values

Conditional clauses are like any other Python clause: they are evaluated, and they result in a value (in Python, effectively an object as opposed to an entity). While the result of a mathematical clause is usually a number, the result of a string clause is a string...

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Result is an integer
    result = 2 * 5 + 10 - 3
    print("Value", result, "is type", type(result))

    # Result is a floating point number
    floatresult = 2 * 5.0 / 4
    print("Value", floatresult, "is type", type(floatresult))

    # Result is a string
    sresult = "Hi" + " " + "everyone"
    print("Value", sresult, "is type", type(sresult))
    ```

    Program outputs:
    ```
    Value 17 is type <class 'int'>
    Value 2.5 is type <class 'float'>
    Value Hi everyone is type <class 'str'>
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Result%20is%20an%20integer%0Aresult%20%3D%202%20*%205%20%2B%2010%20-%203%0Aprint%28%22Value%22,%20result,%20%22is%20type%22,%20type%28result%29%29%0A%0A%23%20Result%20is%20a%20floating%20point%20number%0Afloatresult%20%3D%202%20*%205.0%20/%204%0Aprint%28%22Value%22,%20floatresult,%20%22is%20type%22,%20type%28floatresult%29%29%0A%0A%23%20Result%20is%20a%20string%0Asresult%20%3D%20%22Hi%22%20%2B%20%22%20%22%20%2B%20%22everyone%22%0Aprint%28%22Value%22,%20sresult,%20%22is%20type%22,%20type%28sresult%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

...then the result of the condition clause is the truth value. There are two truth values:

**True** and

**False**

Note that the values are capitalized.

The existence of truth values can be seen, for example, by printing out a condition clause:

```python 
print(20 < 10)
print(100 == 2 * 5 * 5 * 2)
 ```

Program outputs:
``` 
False
True
 ```

A truthful clause can also be set as the value of a variable. As such, such a variable can be used as a conditional clause:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    truth = True

    # This is true
    if truth:
        print("It's true.")

    # Set the value to not True -> False
    truth = not True

    if truth:
        print("True again.")

    # Clause for a value
    truth = 20 > 10

    if truth:
        print("Third is true.")
    ```

    Program outputs:
    ``` 
    It's true.
    Third is true.
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=truth%20%3D%20True%0A%0A%23%20This%20is%20true%0Aif%20truth%3A%0A%20%20%20%20print%28%22It's%20true.%22%29%0A%0A%23%20Set%20the%20value%20to%20not%20True%20-%3E%20False%0Atruth%20%3D%20not%20True%0A%0Aif%20truth%3A%0A%20%20%20%20print%28%22True%20again.%22%29%0A%0A%23%20Clause%20for%20a%20value%0Atruth%20%3D%2020%20%3E%2010%0A%0Aif%20truth%3A%0A%20%20%20%20print%28%22Third%20is%20true.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The example above also shows the not-operator introduced earlier, which reverses the truth value.