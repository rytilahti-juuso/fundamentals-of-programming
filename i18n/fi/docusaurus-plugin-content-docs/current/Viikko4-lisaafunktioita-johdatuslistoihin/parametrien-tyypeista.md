---
sidebar_position: 2
---

# Parametrien tyypeistä

Tarkastellaan esimerkin vuoksi tilannetta, jossa olemme määritelleet edellä kuvatun kaltaisen funktion `monista`. Funktiolla on kaksi parametria, ja se tulostaa parametriensa kertolaskun tuloksen:

```python 
def monista(merkkijono, luku):
    print(merkkijono * luku)
 ```

Funktiota voi nyt kutsua esimerkiksi välittämällä todellisina parametreina vaikkapa merkkijonon ja kokonaisluvun:

```python 
def monista(merkkijono, luku):
    print(merkkijono * luku)

monista("moro", 3)
 ```

Ohjelma tulostaa:
```python 
moromoromoro
 ```

Funktio kuitenkin tuottaa lopputuloksen myös silloin, kun sille välitetään parametreina kaksi lukua. Tämä johtuu tietysti siitä, että kahden luvun kertolasku on Pythonissa sallittu lauseke:

```python 
def monista(merkkijono, luku):
    print(merkkijono * luku)

monista(5, 2)
monista(10, 2.5)
monista(1.5, 5.5)
 ```

Ohjelma tulostaa:
``` 
10
25.0
8.25
 ```

Jos funktiolle kuitenkin annetaan parametriksi kaksi merkkijonoa, seuraa virhe:

```python 
def monista(merkkijono, luku):
    print(merkkijono * luku)

monista("moro", "heippa")
 ```

Ohjelma tulostaa:
``` 
Traceback (most recent call last):
  File "monistus.py", line 4, in <module>
    monista("moro", "heippa")
  File "monistus.py", line 2, in monista
    print(merkkijono * luku)
TypeError: can't multiply sequence by non-int of type 'str'
 ```

## Tyyppivihjeet

Pythonissa ei määritetä muuttujien tyyppejä, vaan tyyppi päätellän automaattisesti muuttujaan sijoitettavan arvon perustella. Niin kuin edellä huomattiin, tämä voi olla ongelmallista funktioiden yhteydessä. Funktion parametreille voikin määritellä **tyyppivihjeet**, joiden avulla kutsuja tietää minkätyyppiset todellisten parametrien pitäisi olla.

Tyyppivihje kirjoitetaan muodollisen parametrin perään kaksoispisteellä erotettuna. Tyyppivihjeenä käytetään yleensä objektien tyyppien nimiä - esimerkiksi kokonaislukua merkitään siis nimellä int ja merkkijonoa nimellä str.

Funktio monista voitaisiin siis määritellä seuraavasti tyyppivihjeiden kanssa:

```python 
def monista(merkkijono: str, luku: int):
    print(merkkijono * luku)
 ```

Huomaa, että tyyppivihjeet eivät edelleenkään pakota kutsujaa käyttämään oikeita tyyppejä. Niiden rooli onkin toimia kommentin tapaisina vihjeinä siitä, mitä tyyppejä kutsussa pitäisi käyttää. Erilaisten ulkoisten tarkastimien kanssa voidaan kuitenkin varmistua siitä, että kutsuissa on käytetty oikeita tyyppejä.

Lisää tyyppejä on esitelty seuraavassa taulukossa:

| Tyyppi | Nimi Pythonissa |
| ------ | --------------- |
| Kokonaisluku | int |
| Liukuluku | float |
| Merkkijono | str |
| Totuusarvo | bool |

Esimerkkifunktio tulostaa henkilön tiedot:

```python 
def tulosta_hlo(nimi: str, osoite: str, pituus: float, ika: int):
    print(f"Moi, olen {nimi} ja olen {ika} vuotta.")
    print(f"Asun osoitteessa {osoite}.")
    print(f"Olen {pituus:.2f} cm. pitkä.")


# Testataan
tulosta_hlo("Paula", "Pythonkuja 2", 167.5, 22)
 ```

Ohjelma tulostaa:
``` 
Moi, olen Paula ja olen 22 vuotta.
Asun osoitteessa Pythonkuja 2.
Olen 167.50 cm. pitkä.
 ```

## Tyyppimuunnokset

Huomaa, että edellä esitettyjen tyyppinimien mukaisia funktioita voidaan käyttää myös **tyyppimuunnoksiin**. Aikaisemmin olemme käyttäneet ainakin funktioita `int` ja `float`, kun olemme halunneet muuntaa käyttäjän syötteenä antaman merkkijonon kokonaisluvuksi.

Tarkastellaan esimerkkejä muunnoksista:

```python 
mjono = "243"

# Merkkijono voidaan muuntaa tuttuun tapaan 
# luvuiksi, jos sen sisällä on vain numeroita
kokonaisluku = int(mjono)
liukuluku= float(mjono)

print(kokonaisluku)
print(liukuluku)

# Kokonaisluvun voi muuntaa liukuluvuksi ja päinvastoin
a = 1.23
b = 10

a2 = int(a)
b2 = float(b)

print(a2)
print(b2)

# Luvun voi muuntaa myös merkkijonoksi
# Tämä helpottaa esim. katenointia
luku = 234

tulos = "Tulos on " + str(luku)
print(tulos)
 ```

Ohjelma tulostaa:
``` 
243
243.0
1
10.0
Tulos on 234
 ```

Huomaa, että tyyppimuunnokset eivät aina vastaa esimerkiksi matemaattista pyöristystä: liukuluvun muuntaminen kokonaisluvuksi ainoastaan tiputtaa koko desimaaliosan pois (matematiikassa puhutaan ns. lattiafunktiosta).

```python 
luku1 = 1.1
luku2 = 1.5
luku3 = 1.999

# Lukujen muuntaminen tuotta tulokseksi ykkösen,
# koska int()-operaatio ainoastaan tiputtaa
# desimaalin pois
print(int(luku1))
print(int(luku2))
print(int(luku3))
 ```

Ohjelma tulostaa:
```
1
1
1
 ```