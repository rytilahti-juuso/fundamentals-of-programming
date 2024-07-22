---
sidebar_position: 4
---

# Truth values

Conditional clauses are like any other Python clause: they are evaluated, and they result in a value (in Python, effectively an object as opposed to an entity). While the result of a mathematical clause is usually a number, the result of a string clause is a string...

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

The example above also shows the not-operator introduced earlier, which reverses the truth value.