---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Repetition clause

In addition to the preposition, another essential control structure in programs is the repetition clause. A repetition clause allows an operation to be repeated several times. In fact, repetition is one of the main reasons for the efficiency of computers: even today's CPUs cannot do terribly complex things by themselves, but by repeating simple operations several times quickly, very complex problems can be solved.

Let's start with a simple while loop to introduce the repeat clause. The next program asks the user for numbers and prints their squares (number^2 or number * number) until the user enters zero. Note that the program will therefore continue to run "forever" unless a zero is entered:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # "Infinite" loop
    while True:
      num = int(input("Give a number: "))
    
      if num == 0:
        # Let's exit the loop
        break

      print("Number", num, "squared is", num * num)

    print("Thanks and bye!")
    ```

    Example execution:
    ```
    Give a number: 5
    Number 5 squared is 25
    Give a number: 3
    Number 3 squared is 9
    Give a number: 9
    Number 9 squared is 81
    Give a number: 2
    Number 2 squared is 4
    Give a number: 0
    Thanks and bye!
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20%22Infinite%22%20loop%0Awhile%20True%3A%0A%20%20%20%20num%20%3D%20int%28input%28%22Give%20a%20number%3A%20%22%29%29%0A%20%20%20%20%0A%20%20%20%20if%20num%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20%23%20Let's%20exit%20the%20loop%0A%20%20%20%20%20%20%20%20break%0A%0A%20%20%20%20print%28%22Number%22,%20num,%20%22squared%20is%22,%20num%20*%20num%29%0A%0Aprint%28%22Thanks%20and%20bye!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The repetition of a phrase is similar in syntax to a condition clause. The only difference is that the block following the repeat clause is executed over and over again as long as the condition is true:

![Condition clause chart](/img/img-en/w2-2.png)

The **break** clause inside the repeat clause immediately terminates the repeat (i.e. the loop execution). Playback continues after the break statement from the next statement in the loop block. If there are no more statements after the loop block, the program execution terminates completely.

First, we write the repetition statements using the constant True as a condition clause. This means that at some point within the loop (usually when the appropriate condition is met) a break statement must be executed, or the loop will never terminate. A "perpetual" loop can be broken in the editor by pressing CTRL + C, ViLLE takes care of breaking perpetual loops automatically.

Let's look at a few more examples. The first prints numbers starting from a number given by the user, increasing it by one each round. The program stops when 10 numbers have been printed:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Counter remembers how many numbers have been printed
    counter = 0

    num = int(input("Give a starting value: "))

    while True:
      print("Number is now", num)

      # Let's increase the counter and number with one
      counter = counter + 1
      num = num + 1

      if counter == 10:
        break
    ```

    Example execution:
    ``` 
    Give a starting value: 301
    Number is now 301
    Number is now 302
    Number is now 303
    Number is now 304
    Number is now 305
    Number is now 306
    Number is now 307
    Number is now 308
    Number is now 309
    Number is now 310
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Counter%20remembers%20how%20many%20numbers%20have%20been%20printed%0Acounter%20%3D%200%0A%0Anum%20%3D%20int%28input%28%22Give%20a%20starting%20value%3A%20%22%29%29%0A%0Awhile%20True%3A%0A%20%20%20%20print%28%22Number%20is%20now%22,%20num%29%0A%0A%20%20%20%20%23%20Let's%20increase%20the%20counter%20and%20number%20with%20one%0A%20%20%20%20counter%20%3D%20counter%20%2B%201%0A%20%20%20%20num%20%3D%20num%20%2B%201%0A%0A%20%20%20%20if%20counter%20%3D%3D%2010%3A%0A%20%20%20%20%20%20%20%20break&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

The second example program asks the user one by one for a string and a number. The program prints the number of strings corresponding to the number until the user enters an empty string. Notice from the example that Python allows the string to be multiplied by an integer - for example, "A" * 3 produces a new string "AAA".

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    while True:
      que = input("Give a string: ")
      if que == "":
        break

      amount = int(input("Give an amount: "))

      print(que * amount)
    ```

    Example execution:
    ```
    Give a string: a
    Give an amount: 5
    aaaaa
    Give a string: *
    Give an amount: 20
    ********************
    Give a string: moi
    Give an amount: 3
    moimoimoi
    Give a string:
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=while%20True%3A%0A%20%20%20%20que%20%3D%20input%28%22Give%20a%20string%3A%20%22%29%0A%20%20%20%20if%20que%20%3D%3D%20%22%22%3A%0A%20%20%20%20%20%20%20%20break%0A%0A%20%20%20%20amount%20%3D%20int%28input%28%22Give%20an%20amount%3A%20%22%29%29%0A%0A%20%20%20%20print%28que%20*%20amount%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>