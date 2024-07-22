---
sidebar_position: 2
---

# Päivämäärät ja kellonajat

Päivämäärien ja kellonaikojen käsittely on hyvä esimerkki operaatiosta, joka saattaa vaikuttaa yksinkertaiselta, mutta joka onkin oletettua monimutkaisempi, esimerkiksi aikavyöhykkeiden ja karkausvuosien (tai karkaussekuntien) takia. Tämän takia aikamääreiden käsittelyyn kannattaa yleensä aina käyttää ulkoisia kirjastoja.

Aikojen käsittelyyn voi käyttää esimerkiksi Pythonin **datetime**-kirjastoa.

Huomaa, että datetime kannattaa tuoda käyttöön syntaksin

```python 
from datetime import datetime
 ```

avulla, jotta luokkaan viitatessa ei tarvitse kirjoittaa datetime.datetime.

```python 
from datetime import datetime

# Nykyinen päivämäärä
tanaan = datetime.now()
print(tanaan)

# Joulu 2021
# Arvot järjestyksessä vuosi, kuukausi, päivä
# Jos aikaa ei anna, oletusarvo on keskiyö
joulu = datetime(2021, 12, 24)
print(joulu)

# Viimeinen tutoriaali
# Päivän lisäksi voi antaa myös ajan, ensin tunnit
# ja sitten minuutit
viim_tuto = datetime(2021, 12, 9, 14, 15)
print(viim_tuto)
 ```

Esimerkkisuoritus:
``` 
2021-11-30 18:28:51.715194
2021-12-24 00:00:00
2021-12-09 14:15:00
 ```

Esimerkistä huomataan, että datetime-tyyppisen olion tulostaminen print-lauseella ei tuota kovin siistiä lopputulosta. Oliolla on strftime-metodi, jonka avulla voidaan tulostaa halutut aikamääreet. Seuraavassa listassa on esitetty eräitä käyttökelpoisia metodin ymmärtämiä muotoiluja:

- **%d**   päivä (01- 31)
- **%m**   kuukausi (01 - 12)
- **%Y**   vuosi
- **%H**   tunnit
- **%M**   minuutit
- **%S**   sekunnit


Metodia käytetään seuraavan esimerkin mukaisesti:

```python 
from datetime import datetime

# Nykyinen päivämäärä
tanaan = datetime.now()

print(tanaan.strftime("Tänään on %d.%m., vuosi on %Y"))
print(tanaan.strftime("Kello on nyt %H:%M"))

# Jouluaatto
jouluaatto = datetime(2021, 12, 24)
print(jouluaatto.strftime("Joulua juhlitaan %m. kuukauden %d. päivänä"))
 ```

Esimerkkisuoritus:
```
Tänään on 30.11., vuosi on 2021
Kello on nyt 18:35
Joulua juhlitaan 12. kuukauden 24. päivänä
 ```

datetime-tyyppiseltä oliolta voidaan kysyä erikseen eri aikamääreitä seuraavan esimerkin mukaisesti. Kaikki metodit palauttavat kokonaisluvun.

```python 
from datetime import datetime

# Nykyinen päivämäärä
tanaan = datetime.now()

print("Vuosi:", tanaan.year)
print("Kuukausi:", tanaan.month)
print("Päivä:", tanaan.day)
print("Tunti:", tanaan.hour)
print("Minuutit:", tanaan.minute)
print("Sekunnit:", tanaan.second)
 ```

Esimerkkisuoritus:
```
Vuosi: 2021
Kuukausi: 11
Päivä: 30
Tunti: 18
Minuutit: 44
Sekunnit: 7
 ```

Aikoja voidaan vertailla normaalien vertailuoperaattorien avulla:

```python 
from datetime import datetime

# Nykyinen päivämäärä
tanaan = datetime.now()

# Joulu
joulu = datetime(2021, 12, 24)

if tanaan > joulu:
    print("Joulu meni jo")
else:
    print("Joulu on tulossa")
 ```

Esimerkkisuoritus (30.11.2021):
```
Joulu on tulossa
 ```

Aikojen välisen erotuksen voi laskea myös normaalisti vähennyslaskuna. Tuloksena on kuitenkin **timedelta**-tyyppinen olio. Oliota käytetään alla olevan esimerkin mukaisesti:

```python 
from datetime import datetime

# Nykyinen päivämäärä
tanaan = datetime.now()

# Joulu
joulu = datetime(2021, 12, 24)

# Aikojen erotus
erotus = joulu - tanaan

print(f"Jouluun on {erotus.days} päivää.")
print(f"...tai tarkemmin {erotus.seconds} sekuntia.")
 ```

Tarvittaessa timedelta-olion voi muodostaa itsekin. Olio pitää kuitenkin ottaa käyttään import-lauseella. Olion muodostamisen jälkeen sen avulla voi "pyöräyttää" datetime-oliota eli siirtää aikaa eteen- tai taaksepäin:

```python 
from datetime import datetime, timedelta

# Nykyinen päivämäärä
tanaan = datetime.now()

# 100 päivää
pv100 = timedelta(days=100)
tulevaisuus = tanaan + pv100

print(tanaan.strftime("Nyt on %d.%m.%Y"))
print(tulevaisuus.strftime("100 päivän päästä on %d.%m.%Y"))

# 2 tuntia
h2 = timedelta(hours=2)
lahitulevaisuus = tanaan + h2

print(tanaan.strftime("Nyt kello on %H:%M"))
print(lahitulevaisuus.strftime("2 tunnin päästä kello on %H:%M"))
 ```

Esimerkkisuoritus:
``` 
Nyt on 30.11.2021
100 päivän päästä on 10.03.2022
Nyt kello on 18:54
2 tunnin päästä kello on 20:54
 ```
