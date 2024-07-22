---
sidebar_position: 2
---

# Date and time

The handling of dates and times is a good example of an operation that may seem simple, but is actually more complex than expected, for example because of time zones and leap years (or leap seconds). This is why it is usually always a good idea to use external libraries to handle time variables.

For example, the Python **datetime** library can be used to handle time.

Note that datetime should be introduced with the syntax

```python 
from datetime import datetime
 ```

so that when referring to a class, you don't have to write datetime.datetime.

```python 
from datetime import datetime

# Current date
today = datetime.now()
print(today)

# Christmas 2022
# Values in order of year, month, day
# Default time is midnight
christmas = datetime(2022, 12, 24)
print(christmas)

# Last tutorial
# Time can be given in addition to date
# first the hours and then the minutes
last_tuto = datetime(2022, 12, 9, 14, 15)
print(last_tuto)
 ```

Example execution:
```
2023-02-23 15:28:51.715194
2022-12-24 00:00:00
2022-12-09 14:15:00
 ```

From the example, you can see that printing a datetime-type entity with a print statement does not produce a very clean result. The object has a strftime method that can be used to print the desired time constants. The following list shows some useful formulations understood by the method:

- **%d**   date (01- 31)
- **%m**   month (01 - 12)
- **%Y**   year
- **%H**   hours
- **%M**   minutes
- **%S**   seconds

The method is used according to the following example:

```python 
from datetime import datetime

# Current date
today = datetime.now()

print(today.strftime("Today is %d.%m., the year is %Y"))
print(today.strftime("It's %H:%M o'clock"))

# Christmas eve
ceve = datetime(2022, 12, 24)
print(ceve.strftime("Christmas eve is on the %m. months %d. day"))
 ```

Example execution:
```
Today is 23.02., year is 2023
It's 15:35 o'clock
Christmas eve is on the 12. months 24. day
 ```

an entity of type datetime can be asked separately for different time limits, as shown in the following example. All methods return an integer.

```python 
from datetime import datetime

# Nykyinen päivämäärä
today = datetime.now()

print("Year:", today.year)
print("Month:", today.month)
print("Day:", today.day)
print("Hour:", today.hour)
print("Minutes:", today.minute)
print("Seconds:", today.second)
 ```

Example execution:
```
Year: 2023
Month: 02
Day: 23
Hours: 15
Minutes: 41
Seconds: 7
 ```

Times can be compared using the normal comparing operators

```python 
from datetime import datetime

# current date
today = datetime.now()

# christmas
christmas = datetime(2022, 12, 24)

if today > christmas:
    print("Christmas came and went")
else:
    print("Christmas is coming")
 ```

Example execution (23.02.2023):
```
Christmas came and went
 ```

The difference between the periods can also be calculated as a normal deduction. However, the result is a timedelta-type object. The object is used as shown in the example below:

```python 
from datetime import datetime

# Current date
today = datetime.now()

# christmas
christmas = datetime(2023, 12, 24)

# Times subtracted
sub = christmas - today

print(f"Christmas is {sub.days} days away.")
print(f"...or more accurately {sub.seconds} seconds.")
 ```

If necessary, you can create a timedelta-olio yourself. However, the object must be accessed with an import statement. Once the object has been created, it can be used to "rotate" the datetime object, i.e. move time forward or backward:

```python 
from datetime import datetime, timedelta

# current date
today = datetime.now()

# 100 day
d100 = timedelta(days=100)
future = today + d100

print(today.strftime("It is %d.%m.%Y"))
print(future.strftime("After 100 days it is %d.%m.%Y"))

# 2 hours
h2 = timedelta(hours=2)
nfuture = today + h2

print(today.strftime("The clock shows %H:%M"))
print(nfuture.strftime("After 2 hours the time is %H:%M"))
 ```

Example execution:
``` 
It is 23.02.2023
After 100 days it is 04.06.2023
The clock shows 15:58
After 2 hours the time is 17:58
 ```