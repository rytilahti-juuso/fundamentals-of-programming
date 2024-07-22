---
sidebar_position: 5
---

# Repetition clause

In addition to the preposition, another essential control structure in programs is the repetition clause. A repetition clause allows an operation to be repeated several times. In fact, repetition is one of the main reasons for the efficiency of computers: even today's CPUs cannot do terribly complex things by themselves, but by repeating simple operations several times quickly, very complex problems can be solved.

Let's start with a simple while loop to introduce the repeat clause. The next program asks the user for numbers and prints their squares (number^2 or number * number) until the user enters zero. Note that the program will therefore continue to run "forever" unless a zero is entered:

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

The repetition of a phrase is similar in syntax to a condition clause. The only difference is that the block following the repeat clause is executed over and over again as long as the condition is true:

![Condition clause chart](/img/img-en/w2-2.png)

The **break** clause inside the repeat clause immediately terminates the repeat (i.e. the loop execution). Playback continues after the break statement from the next statement in the loop block. If there are no more statements after the loop block, the program execution terminates completely.

First, we write the repetition statements using the constant True as a condition clause. This means that at some point within the loop (usually when the appropriate condition is met) a break statement must be executed, or the loop will never terminate. A "perpetual" loop can be broken in the editor by pressing CTRL + C, ViLLE takes care of breaking perpetual loops automatically.

Let's look at a few more examples. The first prints numbers starting from a number given by the user, increasing it by one each round. The program stops when 10 numbers have been printed:

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

The second example program asks the user one by one for a string and a number. The program prints the number of strings corresponding to the number until the user enters an empty string. Notice from the example that Python allows the string to be multiplied by an integer - for example, "A" * 3 produces a new string "AAA".

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