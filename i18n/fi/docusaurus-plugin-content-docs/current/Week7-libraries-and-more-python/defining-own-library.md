---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Oman kirjaston määrittely

Pythonissa voi myös määritellä omia kirjastoja. Itse asiassa mikä tahansa omista funktioita koostuva ohjelma kelpaa sellaisenaan kirjastoksi.

Tarkastellaan esimerkkinä ohjelmatiedostoa `laskin.py`, jossa on määritelty seuraavat funktiot:

```python
def yhteenlasku(luku1: int, luku2: int):
    return luku1 + luku2

def kertolasku(luku1: int, luku2: int):
    return luku1 * luku2

def potenssiinkorotus(luku1: int, luku2: int):
    return luku1 ** luku2
 ```

Tiedostossa olevat funktiot voidaan ottaa käyttöön toisessa ohjelmassa import-lauseella. Huomaa kuitenkin, että tiedostojen täytyy tällaisessa tapauksessa yleensä sijaita samassa kansiossa.

```python 
import laskin

# Lasketaan pari laskua
print(laskin.yhteenlasku(10, 20))
print(laskin.kertolasku(20, 30))

print(f"2 potenssiin 6 on ", laskin.potenssiinkorotus(2, 6))
 ```

Ohjelma tulostaa:
```
30
600
2 potenssiin 6 on  64
 ```

Kannattaa kuitenkin huomata, että jos tiedostossa on jotain funktioiden ulkopuolella olevaa koodia, se suoritetaan kun tiedosto otetaan käyttöön toisessa ohjelmassa. Lisätään tiedostoon laskin.py ohjelman toiminnallisuutta testaava koodinpätkä:

```python 
def yhteenlasku(luku1: int, luku2: int):
    return luku1 + luku2

def kertolasku(luku1: int, luku2: int):
    return luku1 * luku2

def potenssiinkorotus(luku1: int, luku2: int):
    return luku1 ** luku2

# Testataan funktioiden toimintaa
print("Yhteenlasku 5 + 5:", yhteenlasku(5,5))
print("Kertolasku 3 * 10:", kertolasku(3, 10))
print("3 potenssiin 3:", potenssiinkorotus(3,3))
 ```

Nyt kun tiedosto otetaan käyttöön toisessa ohjelmassa, myös pääohjelmassa oleva testikoodi suoritetaan automaattisesti:

```python 
import laskin

# Lasketaan pari laskua
print(laskin.yhteenlasku(10, 20))
print(laskin.kertolasku(20, 30))

print(f"2 potenssiin 6 on ", laskin.potenssiinkorotus(2, 6))
 ```

Ohjelma tulostaa:
```
Yhteenlasku 5 + 5: 10
Kertolasku 3 * 10: 30
3 potenssiin 3: 27
30
600
2 potenssiin 6 on  64
 ```

Tämä ei ole toivottavaa, mutta toisaalta olisi kuitenkin hyvä pystyä testaamaan funktioiden toimintaa pääohjelmassa.

Pääohjelman suoritus import-lausetta käytettäessä voidaan estää hyödyntämällä Pythonin sisäänrakennettua muuttujaa, jonka nimi on `__name__` (huomaa kaksi alaviivaa nimen molemilla puolilla). Muuttujaa `__name__` on tallennettu ohjelman kutsujan nimi: käytännössä se tarkoittaa, että muuttujan sisältönä on merkkijono `"__main__"` (huomaa taas alaviivat), jos ohjelma ajettiin itsenäisesti ja jotain muuta, jos ohjelma otettiin käyttöön toisessa ohjelmassa import-lauseella.

Tämä tarkoittaa, että voimme ympäröidä pääohjelman kirjasto-ohjelmassamme seuraavalla lohkolla:

```python 
def yhteenlasku(luku1: int, luku2: int):
    return luku1 + luku2

def kertolasku(luku1: int, luku2: int):
    return luku1 * luku2

def potenssiinkorotus(luku1: int, luku2: int):
    return luku1 ** luku2

# Testataan funktioiden toimintaa
if __name__ == "__main__":
    print("Yhteenlasku 5 + 5:", yhteenlasku(5,5))
    print("Kertolasku 3 * 10:", kertolasku(3, 10))
    print("3 potenssiin 3:", potenssiinkorotus(3,3))
 ```

Kun ohjelma ajetaan sellaisenaan, on muuttujassa `__name__` merkkijono `"__main__"`, jolloin funktioiden testit suoritetaan:

Ohjelma tulostaa:
``` 
Yhteenlasku 5 + 5: 10
Kertolasku 3 * 10: 30
3 potenssiin 3: 27
 ```

Kun omatekemä kirjastomme sen sijaan otetaan käyttöön toisessa ohjelmassa, ei pääohjelman testejä suoriteta:

```python 
import laskin

# Lasketaan lasku
print(laskin.yhteenlasku(100, 100))
 ```

Ohjelma tulostaa:
``` 
200
 ```