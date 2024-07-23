---
sidebar_position: 1
---
<style type="text/css">
  img {
    background-color: #ffff;
  }
</style>

# Introduction: Programming and code

**Programming** refers to a process, in which a **programmer** writes **code**. The program is written in order to solve a problem. It's noteworthy, that program in this context can refer to a wide variety of different tasks ranging from really simple to very complex.

A program is written in a **programming language**. Like in natural language, programming language has it's own grammar (or in this case syntax). Grammar describes accurately the individual commands and the structure of the sentences formed from them, which are then to be used in a programming language.

For example Python's, this courses programming language's, syntax looks like this (understanding how this program behaves is not required at this point - you'll understand it as the course goes on):

```python 
def best_result(results: list) -> dict:
    d = {}
    
    if results:
        best = results[0]
    else:
        return None

    without_emptys = [r for r in results if r[1]]
    
    for result in without_emptys:
        if result[1] > best[1]:
            best = result

    return best
 ```

After a program is written it can be **executed**. Before executing the program must be (usually) converted to an executable format. For example, the Python programming language used on this course functions so, that first the program is **translated** to a language which the Python-**interpreter** understands and then the interpreter runs the translated program.

![Running code visualization](/img/img-en/w1-1.png)

Execution is performed in a so-called virtual machine. Instead of every program being written separately for each operating system, writing one virtual machine for each of them is sufficient. This way the same Python program can be run in numerous various environments.

Luckily for the programmer this process is in practice quite straightforward. Pressing one button and executing the written program is usually enough (provided there are no mistakes that prevent execution).

## Sequence and output

Programming involves the concept of sequencing: this means that a program consists of a sequence of instructions (i.e. programming language sentences), which are executed one by one in a given order. When all the instructions have been executed, the execution of the program ends.

For our first command, let's take a look at print. The purpose of a print statement is to convey a message, or string, to the user of the program. The grammar, or syntax, of the statement is as follows:

`print("message to be printed")`

Note that the syntax must be followed exactly in order for the program to run. The message to be printed is surrounded by quotes (Python accepts both 'single' and 'double' quotes). In addition, the entire message to be printed is enclosed in parentheses. The print command must be written in all lower case, e.g. `PRINT` or `Print` is not acceptable.

An example of a program that prints the names of Donald Duck's nephews below:

```python 
print("Dewey")
print("Huey")
print("Louie")
 ```

Program outputs
```
Dewey
Huey
Louie
 ```

The print statements of the program are therefore executed in the given order from first to last, one by one. Each sentence is written on its own line. If you wish, you can place blank lines in the program to make it clearer; they do not affect execution:

The next program prints a recipe on the screen:

```python 
print("A simple soup")

print("Potatoes")
print("Water")

print("Instructions:")
print("Mix and heat.")
 ```

Program outputs
```
A simple soup
Potatoes
Water
Instructions:
Mix and heat.
 ```

The order in which commands are executed can be changed using different control structures. However, we will come back to these later.