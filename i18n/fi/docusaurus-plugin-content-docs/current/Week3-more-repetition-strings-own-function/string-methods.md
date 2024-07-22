---
sidebar_position: 3
---

# Merkkijonometodit

Merkkijonojen käsittelyä varten Pythonista löytyy erilaisia käteviä valmiita metodeita. Tarkastellaan tässä muutamaa niistä.

Metodilla tarkoitetaan funktiota, joka kohdistuu johonkin olioon. Merkkijonometodien tapauksessa olio on alkuperäinen merkkijono. Metodit erotetaan oliosta (eli yleensä merkkijonon sisältävästä muuttujasta) pisteen avulla.

## Osajonojen etsiminen

Merkkijonosta voidaan etsiä toinen osajono metodin **find** avulla. Metodi palauttaa sen indeksin, josta ensimmäinen osajonon esiintymä löytyy tai -1, jos osajonoa ei löydy.

Metodikutsu kirjoitetaan muodossa

`merkkijono.find(osajono)`

Esimerkiksi metodikutsu

`"abcabc".find("bc")`

palauttaisi 1, koska ensimmäinen osajonon "bc" esiintymä merkkijonossa "abcabc" alkaa indeksin 1 kohdalta.

Esimerkkiohjelma kertoo, mistä indeksistä annettu sana lauseesta löytyy:

```python 
while True:
    lause = input("Lause (tyhjä lopettaa): ")

    if lause == "":
        break

    sana = input("Sana: ")
    
    ind = lause.find(sana)

    if ind < 0:
        print("Sanaa ei löydy lauseesta")
    else:
        print("Sana löytyy indeksin", ind, "kohdalta")
 ```

Esimerkkisuoritus:
``` 
Lause (tyhjä lopettaa): Moi kaikki
Sana: kaikki
Sana löytyy indeksin 4 kohdalta
Lause (tyhjä lopettaa): Hei sun heissulivei
Sana: heissulivei
Sana löytyy indeksin 8 kohdalta
Lause (tyhjä lopettaa): Joka toiselle kaivaa, joka toiselle ei
Sana: joka
Sana löytyy indeksin 22 kohdalta
Lause (tyhjä lopettaa): Hellurei ja herkät tunteet
Sana: JA
Sanaa ei löydy lauseesta
Lause (tyhjä lopettaa):
Sana:
 ```

Huomaa, että jos osajonon tarkan sijainnin sijasta haluamme kuitenkin ainoastaan tietää, löytyykö osajonoa ollenkaan, on helpointa käyttää operaattoria **in**. Lauseke

osajono `in` merkkijono

palauttaa `True`, jos osajono esiintyy merkkijonossa. Seuraava esimerkki havainnollistaa sen käyttöä:

```python 
beatles = "Paul John George Ringo"
print("Paul" in beatles)
print("John" in beatles)
print("Pete Best" in beatles)

if "Ringo" in beatles:
    print("On Ringokin!")

if "Elton John" in beatles:
    print("Oliko näin?")
 ```

Ohjelma tulostaa:
```
True
True
False
On Ringokin!
 ```

## Osajonojen laskeminen

Osajonojen esiintymien määrä merkkijonossa voidaan laskea metodin **count** avulla. Syntaksi on samantapainen kuin metodin count osalta:

`merkkijono.count(osajono)`

Metodi palauttaa joko nollan tai positiviisen kokonaisluvun sen mukaan, kuinka monta kertaa annettu osajono esiintyy annetussa merkkijonossa.

Esimerkiksi metodikutsu

`"abcabcabc".count("ab")`

palauttaisi arvon 3, koska osajono "ab" esiintyy kolme kertaa merkkijonossa "abcabcabc".
Huomaa, että vain kokonaiset osajonot lasketaan - esimerkiksi merkkijonosta "aaaa" löytyy vain kaksi osajonoa "aa".

Esimerkkiohjelma laskee a-kirjaimien määrän lauseessa:

```python 
while True:
    lause = input("Anna lause, tyhjä lopettaa: ")

    if lause == "":
        break

    print("Lauseessa on", lause.count("a"), "a-kirjainta")
 ```

Esimerkkisuoritus:
```
Anna lause, tyhjä lopettaa: hei
Lauseessa on 0 a-kirjainta
Anna lause, tyhjä lopettaa: Tämä on testilause
Lauseessa on 1 a-kirjainta
Anna lause, tyhjä lopettaa: Lallatilaa, hauska täälä on asustaa
Lauseessa on 9 a-kirjainta
Anna lause, tyhjä lopettaa:
 ```

## Osajonojen korvaaminen

Viimeisenä esiteltävänä metodina käsitellään osajonon korvaaminen toisella osajonolla. Käytettävän replace-metodin syntaksi näyttää seuraavalta:

`merkkijono.replace(osajono1, osajono2)`

Metodi palauttaa uuden merkkijonon, jossa kaikki osajonon 1 esiintymät on korvattu osajonolla 2. Esimerkiksi metodikutsu

`"abcabc".replace("a", "xx")`

palauttaisi uuden merkkijonon "xxbcxxbc".

Huomaa, että metodi ei muokkaa olemassaolevaa merkkijonoa vaan luo kokonaan uuden merkkijonon. Seuraava esimerkki havainnnolistaa asiaa:

```python 
lause = "Hei vaan, onpa hauska tavata."
lause2 = lause.replace("Hei", "Moikka")

print(lause)
print(lause2)

# replace on myös kätevä, kun halutaan "poistaa" osajonoja:
# korvataan osajono tyhjällä merkkijonolla
lause2 = lause2.replace("onpa", "")

print(lause2)
 ```

Ohjelma tulostaa:
```
Hei vaan, onpa hauska tavata.
Moikka vaan, onpa hauska tavata.
Moikka vaan,  hauska tavata.
 ```