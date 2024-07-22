---
sidebar_position: 5
---

# Lisää Pythonin ominaisuuksia, osa 2

## Järjestelyt järjestykseen

Listojen yhteydessä tarkasteltiin erilaisia mahdollisuuksia listojen järjestämiseen luonnolliseen järjestykseen. Vaikka onkin erittäin käyttökelpoinen, on järjestely sellaisenaan hiukan puutteellinen: esimerkiksi tupleja sisältävän listan järjestetään oletuksena aina tuplejen ensimmäisen alkion mukaan.

Järjestysfunktiolle (tai -metodille) voidaan kuitenkin antaa parametriksi funktio, jota järjestettävien alkoiden arvon määrittämiseen käytetään. Näin esimerkiksi tuple-lista voidaan järjestää minkä tahansa alkion (tai vaikka alkioiden summan) perusteella.

Alla oleva esimerkki havainnollistaa tuple-listan järjestämistä kahden eri periaatteen mukaan. Huomaa, että key-parametri saa arvokseen funktion, ei funktiokutsun tulosta! Funktion nimen perään ei siis tule tässä tilanteessa sulkeita.

```python 
# Palauttaa tuplen toisen alkion
def toinen_alkio(t: tuple) -> int:
    return t[1]

# Palauttaa alkioiden tulon
def tulo(t: tuple) -> int:
    return t[0] * t[1]


lista = [(1, 6), (3, 1), (3, 4), (2, 7), (8, 1)]

# Järjestetään lista oletusarvon eli ekan alkion mukaisesti
lista.sort()
print(lista)

# Järjestetään lista jokaisen tuplen toisen alkion mukaan
lista.sort(key=toinen_alkio)
print(lista)

# Järjestetään lista alkoiden tulon mukaisesti
lista.sort(key=tulo)
print(lista)
 ```

Ohjelma tulostaa:
``` 
[(1, 6), (2, 7), (3, 1), (3, 4), (8, 1)]
[(3, 1), (8, 1), (3, 4), (1, 6), (2, 7)]
[(3, 1), (1, 6), (8, 1), (3, 4), (2, 7)]
 ```

Toinen esimerkki, jossa merkkijonot järjestetään merkkimäärän mukaiseen järjestykseen. Koska len-funktio on jo olemassa, sitä ei tarvitse määritellä uudestaan:

```python 
nimet = ["Santeri", "Liisa", "Aki", "Marjaana", "Jari"]

nimet.sort(key=len)
print(nimet)
 ```

Ohjelma tulostaa:
```
['Aki', 'Jari', 'Liisa', 'Santeri', 'Marjaana']
 ```

Huomaa, että myös min- ja max-funktiot hyväksyvät key-parametrin. On siis mahdollista määritellä, minkä arvon perusteella minimi tai maksimi poimitaan. Seuraava esimerkki poimii siis listasta pisimmän merkkijonon:

```python 
nimet = ["Santeri", "Liisa", "Aki", "Marjaana", "Jari"]

print("Pisin nimi on", max(nimet, key=len))
 ```

Ohjelma tulostaa:
``` 
Pisin nimi on Marjaana
 ```

Toinen esimerkki, jossa listasta poimitaan itseisarvoltaan pienin alkio:

```python 
def itseisarvo(alkio: int) -> int:
    if alkio < 0:
        return -alkio
    return alkio

luvut = [4, -5, 2, -1, 6, 8, -10]
print("Itseisarvoltaan pienin:", min(luvut, key=itseisarvo))
 ```

Ohjelma tulostaa:
```
Itseisarvoltaan pienin: -1
 ```

## Anonyymit funktiot

Järjestelyssä käytetty apufunktio on hyvä esimerkki tilanteesta, jossa kokonaisen funktion kirjoittaminen tuntuu hiukan turhalta - varsinkin, kun funktiota ei ole yleensä tarkoituskaan kutsua mistään muualta kuin järjestelyn yhteydessä. Tällaisessa tilanteessa **anonyymi funktio** voi olla parempi ratkaisu.

Anonyymin funktion idea on, että se määritellään tilanteessa jossa täytyy antaa funktio (esimerkiksi järjestelyfunktiolle tai min- tai max-funktioille), mutta jossa funktiota ei ole tarkoitus kutsua muuten.

Tällainen funktio voidaan määritellä lambda-lausekkeella. Sen syntaksi on

`lambda <parametrit>: <lauseke>`

Seuraavassa esimerkissä määritellään lambda-lausekkeella järjestysfunktiolle annettava arvofunktio. Funktio palauttaa tuplen toisen alkion:

```python 
lista = [(4,2), (5,1), (3,3), (9,1), (6,3)]

# Arvofunktio toteutetaan lambda-lausekkeella
# joka palauttaa tuplen toisen alkion
lista.sort(key=lambda alkio: alkio[1])

print(lista)
 ```

Ohjelma tulostaa:
```
[(5, 1), (9, 1), (4, 2), (3, 3), (6, 3)]
 ```

Toinen esimerkki, jossa maksimifunktiolle annetaan arvofunktio, joka palauttaa tuplen alkioiden summan:

```python 
lista = [(4,2), (5,1), (3,3), (9,1), (6,3), (6,6), (10, 1)]

# Arvofunktio toteutetaan lambda-lausekkeella
# joka palauttaa tuplen alkioiden summan
suurin = max(lista, key = lambda alkio: alkio[0] + alkio[1])

print(suurin)
 ```

Ohjelma tulostaa:
``` 
(6, 6)
 ```


## Parametrien vakioarvot

Pythonissa voidaan funktioiden muodollisille parametreille asettaa vakioarvo. Jos vakioarvo on annettu, ei todellista parametrin arvoa ole pakko antaa funktiota kutsuttaessa. Jos todellinen arvo kuitenkin annetaan, se korvaa vakioarvon.

Esimerkiksi

```python 
def kirjoita_rivit_tiedostoon(tnimi: str, rivit: list, lisaa_rivinvaihdot=True):
    with open(tnimi, "w") as tiedosto:
        for rivi in rivit:
            if lisaa_rivinvaihdot:
                rivi += "\n"
            tiedosto.write(rivi)



# rivit
rivit = ["Moi kaikki", "Esimerkki parametrien oletusarvoista", "Ei muuta, moi!"]

# Jos kolmatta parametria ei anneta, se 
# saa oletusarvon True
kirjoita_rivit_tiedostoon("esim1.txt", rivit)

# Jos parametrille annetaan arvo, se ylikirjoittaa
# oletusarvon
kirjoita_rivit_tiedostoon("esim2.txt", rivit, False)
 ```

Ohjelma kirjoittaa kaksi tiedostoa.

**esim1.txt**:
``` 
Moi kaikki
Esimerkki parametrien oletusarvoista
Ei muuta, moi!
 ```

**esim2.txt**:
``` 
Moi kaikkiEsimerkki parametrien oletusarvoistaEi muuta, moi!
 ```

Vielä toinen esimerkki:

```python 
def yhdista_alkiot(lista: list, valimerkki=","):
    return valimerkki.join(lista)

lista = ["Tupu", "Hupu", "Lupu"]

# Jos ei anneta välimerkkiä, käytetään pilkkua
print(yhdista_alkiot(lista))

# Jos annetaan välimerkki, se korvaa pilkun
print(yhdista_alkiot(lista, ";"))
print(yhdista_alkiot(lista, " ja "))
 ```

Ohjelma tulostaa:
```
Tupu,Hupu,Lupu
Tupu;Hupu;Lupu
Tupu ja Hupu ja Lupu
 ```
