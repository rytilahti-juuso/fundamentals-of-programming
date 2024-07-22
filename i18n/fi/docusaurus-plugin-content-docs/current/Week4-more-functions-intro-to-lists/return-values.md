---
sidebar_position: 3
---

# Paluuarvot

Palataan vielä kurssin alkupuolella esitettyihin Pythonin sisäänrakennettuihin funktioihin. Funktiot kuten `input` ja `len` **palauttavat kutsuttaessa arvon**, joka voidaan esimerkiksi ottaa talteen johonkin muuttujaan. Omat funktiomme kuitenkin ovat ainoastaan tulostaneet lopputuloksen ruudulle.

Omastakin funktiosta voidaan kuitenkin palauttaa arvo. Arvo palautetaan **return**-lauseella, jonka syntaksi on

`return <lauseke>`

Lause päättää välittömästi funktion suorituksen ja palauttaa suorituksen kutsujalle. Mukana seuraa lausekkeen lopputuloksen mukainen paluuarvo.

Esimerkiksi seuraava funktio palauttaa parametrinaan saamiensa arvojen summan:

```python 
def summa(luku1: int, luku2: int):
    # lasketaan summa
    summa = luku1 + luku2

    # palautetaan summa
    return summa
 ```

Nyt kun funktiota kutsutaan, voidaan palautusarvoa käyttää osana lauseketta:

```python 
def summa(luku1: int, luku2: int):
    # lasketaan summa
    summa = luku1 + luku2

    # palautetaan summa
    return summa


# Tallennetaan paluuarvo muuttujaan
tulos = summa(10, 20)

# tulostetaan se
print(tulos)

# Käytetään paluuarvoa osana lauseketta
tulos2 = summa(2,2) + 5 * summa(3, 3)
print(tulos2)
 ```

Ohjelma tulostaa:
```
30
34
 ```

Jos palautusarvolle ei tehdä mitään, näyttää siltä, ettei funktio tee yhtään mitään:

```python 
def summa(luku1: int, luku2: int):
    # lasketaan summa
    summa = luku1 + luku2

    # palautetaan summa
    return summa


# Kutsutaan funktiota, muttei tehdä paluuarvolle mitään
summa(10, 20)
 ```

Ohjelma tulostaa:

**-- Ei tulostetta --**

Tarkastellaan vielä muutamaa esimerkkiä funktioista, jotka palauttavat jonkin arvon ja niiden kutsumisesta. Aluksi funktio, joka palauttaa merkkijonon monistettuna:

```python 
def monista(jono: str, maara: int):
    return jono * maara

# Esimerkkejä kutsuista
viesti = "Moi kaikki!"
print(viesti)
print(monista("*", len(viesti)))

# Toinen esimerkki
luku = 1
jono = ""
while luku < 10:
    jono += monista(str(luku), luku)
    luku += 1

print(jono)
 ```

Ohjelma tulostaa:
``` 
Moi kaikki!
***********
122333444455555666666777777788888888999999999
 ```

Seuraava esimerkki on funktiosta, joka palauttaa summan väliltä alku...loppu:

```python 
def summa(alku: int, loppu: int):
    summa = 0
    while alku <= loppu:
        summa += alku
        alku += 1

    return summa


# Esimerkkejä kutsusta
alku = int(input("Anna luku: "))
loppu = int(input("Anna luku 2: "))
print("Summa on", summa(alku, loppu))


isompi_summa = summa(1,10) + summa(5,15) + summa(100,105)
print(isompi_summa)
 ```

Ohjelma tulostaa:
```
Anna luku: 2
Anna luku 2: 6
Summa on 20
780
 ```

## Palautus vai tuloste

Onkin tärkeä huomata ero siinä, että funktio palauttaa jotain tai että funktio tulostaa jotain ruudulle. Tämä on usein ohjelmointia aloittaessa kuitenkin vaikeasti hahmotettava ero.

Seuraava esimerkki pyrkivät havainnollistamaan eroa:

```python 
def tulosta_suurempi(a: int, b: int):
    if a > b:
        print(a)
    else:
        print(b)


def palauta_suurempi(a: int, b: int):
    if a > b:
        return a
    else:
        return b


# Kutsutaan tulostusta
tulosta_suurempi(10, 15)


# Funktion paluuarvo tulee käsitellä
suurempi = palauta_suurempi(100,200)

# Se voidaan toki tulostaa ruudulle...
print("Paluuarvo oli", suurempi)

# ... tai käyttää sitä lausekkeessa
print("Paluuarvo kertaa 10 on", suurempi * 10)
 ```

Ohjelma tulostaa:
```
15
Paluuarvo oli 200
Paluuarvo kertaa 10 on 2000
 ```

Vielä yksi esimerkki arvojen palautuksesta. Seuraava funktio saa parametrinaan kaksi merkkijonoa ja palauttaa sen merkkijonon, josta löytyy useampi välilyönti:

```python 
def enemman_sanoja(lause1: str, lause2: str):
    valit1 = lause1.count(" ")
    valit2 = lause2.count(" ")

    if valit1 > valit2:
        return lause1
    else:
        return lause2


# Testataan
l1 = "Moi vaan kaikki tyypit!"
l2 = "Hei sun heipparallaa vaan täältä toivottelen!"

print("Enemmän sanoja lauseessa:")
print(enemman_sanoja(l1, l2))
 ```

Ohjelma tulostaa:
```python 
Enemmän sanoja lauseessa:
Hei sun heipparallaa vaan täältä toivottelen!
 ```

## Paluuarvon  tyyppivihje

Myös paluuarvolle voidaan merkitä tyyppivihje. Tyyppivihjeellä ilmoitetaan kutsujalle, että funktio palauttaa tietyntyyppisen arvon.

Kurssilla ei aina käytetä tyyppivihjeitä paluuarvojen yhteydessä, mutta niiden syntaksi esitellään joka tapauksessa seuraavissa esimerkeissä:

```python 
# Funktio palauttaa kokonaisluvun
def palauta_kolme() -> int:
    return 3

# Funktio palautta liukuluvun
def keskiarvo(a: int, b: int, c: int) -> float:
    return (a + b + c) / 3

# Funktio palauttaa merkkijonon (str)
def enemman_sanoja(lause1: str, lause2: str) -> str:
    valit1 = lause1.count(" ")
    valit2 = lause2.count(" ")

    if valit1 > valit2:
        return lause1
    else:
        return lause2
 ```
