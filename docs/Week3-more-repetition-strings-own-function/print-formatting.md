---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Print formatting

As noted earlier, Python can print several different objects with a single call to the print function by listing the different objects separated by commas:

However, if there are several things to print, the printout will be quite complex. In addition, a comma always adds an extra space to the printout, which is not always desirable:

For more complex output sentences or string formatting, you should use Python's **f-strings**, for example. The idea is that you type a small f before the string. Now you can write variable names or expressions in brackets inside the string:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    num1 = int(input("Give 1st number: "))
    num2 = int(input("Give 2nd number: "))

    print(f"When we count {num1} + {num2}, the result will be {num1 + num2}.")
    ```

    Example execution:
    ```
    Give 1st number: 17
    Give 2nd number: 32
    When we count 17 + 32, the result will be  49.
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=num1%20%3D%20int%28input%28%22Give%201st%20number%3A%20%22%29%29%0Anum2%20%3D%20int%28input%28%22Give%202nd%20number%3A%20%22%29%29%0A%0Aprint%28f%22When%20we%20count%20%7Bnum1%7D%20%2B%20%7Bnum2%7D,%20the%20result%20will%20be%20%7Bnum1%20%2B%20num2%7D.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Another example program that asks the user to enter values and then formats them into two strings:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    name = input("Give a name: ")
    city = input("Give a home city: ")
    pnumber = input("Give a phone number: ")

    print(f"Hi, my name is {name}, I live in a city called {city}.") 
    print(f"My phone number is {pnumber}, if you want to chat.")
    ```

    Example execution:
    ```
    Give a name: Peter
    Give a home city: Paris
    Give a phone number: 123-456 789
    Hi, my name is Peter, I live in a city called Paris.
    My phone number is 123-456 789, if you want to chat.
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=name%20%3D%20input%28%22Give%20a%20name%3A%20%22%29%0Acity%20%3D%20input%28%22Give%20a%20home%20city%3A%20%22%29%0Apnumber%20%3D%20input%28%22Give%20a%20phone%20number%3A%20%22%29%0A%0Aprint%28f%22Hi,%20my%20name%20is%20%7Bname%7D,%20I%20live%20in%20a%20city%20called%20%7Bcity%7D.%22%29%20%0Aprint%28f%22My%20phone%20number%20is%20%7Bpnumber%7D,%20if%20you%20want%20to%20chat.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Python's f-strings can also be used for many other purposes, for example to make it easier to format the output of floating-point numbers:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    num = 1.2345678

    # Prints the number as is
    print(num)

    # f-strings can specify the number of decimals
    print(f"Only two decimals: {num:.2f}")
    print(f"Here there are four decimals: {num:.4f}")

    num2 = 1.5
    print(f"Hey, this can also round: {num2:.0f}")
    ```

    Program outputs
    ``` 
    1.2345678
    Only two decimals: 1.23
    Here there are four decimals: 1.2346
    Hey, this can also round: 2
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=num%20%3D%201.2345678%0A%0A%23%20Prints%20the%20number%20as%20is%0Aprint%28num%29%0A%0A%23%20f-strings%20can%20specify%20the%20number%20of%20decimals%0Aprint%28f%22Only%20two%20decimals%3A%20%7Bnum%3A.2f%7D%22%29%0Aprint%28f%22Here%20there%20are%20four%20decimals%3A%20%7Bnum%3A.4f%7D%22%29%0A%0Anum2%20%3D%201.5%0Aprint%28f%22Hey,%20this%20can%20also%20round%3A%20%7Bnum2%3A.0f%7D%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The subject is described more in the [Python documentation.](https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals)