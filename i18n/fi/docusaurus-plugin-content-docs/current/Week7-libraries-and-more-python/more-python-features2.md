---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lisää Pythonin ominaisuuksia, osa 2

## Järjestelyt järjestykseen

Listojen yhteydessä tarkasteltiin erilaisia mahdollisuuksia listojen järjestämiseen luonnolliseen järjestykseen. Vaikka onkin erittäin käyttökelpoinen, on järjestely sellaisenaan hiukan puutteellinen: esimerkiksi tupleja sisältävän listan järjestetään oletuksena aina tuplejen ensimmäisen alkion mukaan.

Järjestysfunktiolle (tai -metodille) voidaan kuitenkin antaa parametriksi funktio, jota järjestettävien alkoiden arvon määrittämiseen käytetään. Näin esimerkiksi tuple-lista voidaan järjestää minkä tahansa alkion (tai vaikka alkioiden summan) perusteella.

Alla oleva esimerkki havainnollistaa tuple-listan järjestämistä kahden eri periaatteen mukaan. Huomaa, että key-parametri saa arvokseen funktion, ei funktiokutsun tulosta! Funktion nimen perään ei siis tule tässä tilanteessa sulkeita.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Palauttaa%20tuplen%20toisen%20alkion%0Adef%20toinen_alkio%28t%3A%20tuple%29%20-%3E%20int%3A%0A%20%20%20%20return%20t%5B1%5D%0A%0A%23%20Palauttaa%20alkioiden%20tulon%0Adef%20tulo%28t%3A%20tuple%29%20-%3E%20int%3A%0A%20%20%20%20return%20t%5B0%5D%20*%20t%5B1%5D%0A%0A%0Alista%20%3D%20%5B%281,%206%29,%20%283,%201%29,%20%283,%204%29,%20%282,%207%29,%20%288,%201%29%5D%0A%0A%23%20J%C3%A4rjestet%C3%A4%C3%A4n%20lista%20oletusarvon%20eli%20ekan%20alkion%20mukaisesti%0Alista.sort%28%29%0Aprint%28lista%29%0A%0A%23%20J%C3%A4rjestet%C3%A4%C3%A4n%20lista%20jokaisen%20tuplen%20toisen%20alkion%20mukaan%0Alista.sort%28key%3Dtoinen_alkio%29%0Aprint%28lista%29%0A%0A%23%20J%C3%A4rjestet%C3%A4%C3%A4n%20lista%20alkoiden%20tulon%20mukaisesti%0Alista.sort%28key%3Dtulo%29%0Aprint%28lista%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toinen esimerkki, jossa merkkijonot järjestetään merkkimäärän mukaiseen järjestykseen. Koska len-funktio on jo olemassa, sitä ei tarvitse määritellä uudestaan:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    nimet = ["Santeri", "Liisa", "Aki", "Marjaana", "Jari"]

    nimet.sort(key=len)
    print(nimet)
    ```

    Ohjelma tulostaa:
    ```
    ['Aki', 'Jari', 'Liisa', 'Santeri', 'Marjaana']
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=nimet%20%3D%20%5B%22Santeri%22,%20%22Liisa%22,%20%22Aki%22,%20%22Marjaana%22,%20%22Jari%22%5D%0A%0Animet.sort%28key%3Dlen%29%0Aprint%28nimet%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Huomaa, että myös min- ja max-funktiot hyväksyvät key-parametrin. On siis mahdollista määritellä, minkä arvon perusteella minimi tai maksimi poimitaan. Seuraava esimerkki poimii siis listasta pisimmän merkkijonon:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    nimet = ["Santeri", "Liisa", "Aki", "Marjaana", "Jari"]

    print("Pisin nimi on", max(nimet, key=len))
    ```

    Ohjelma tulostaa:
    ``` 
    Pisin nimi on Marjaana
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=nimet%20%3D%20%5B%22Santeri%22,%20%22Liisa%22,%20%22Aki%22,%20%22Marjaana%22,%20%22Jari%22%5D%0A%0Aprint%28%22Pisin%20nimi%20on%22,%20max%28nimet,%20key%3Dlen%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toinen esimerkki, jossa listasta poimitaan itseisarvoltaan pienin alkio:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20itseisarvo%28alkio%3A%20int%29%20-%3E%20int%3A%0A%20%20%20%20if%20alkio%20%3C%200%3A%0A%20%20%20%20%20%20%20%20return%20-alkio%0A%20%20%20%20return%20alkio%0A%0Aluvut%20%3D%20%5B4,%20-5,%202,%20-1,%206,%208,%20-10%5D%0Aprint%28%22Itseisarvoltaan%20pienin%3A%22,%20min%28luvut,%20key%3Ditseisarvo%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

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

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20yhdista_alkiot%28lista%3A%20list,%20valimerkki%3D%22,%22%29%3A%0A%20%20%20%20return%20valimerkki.join%28lista%29%0A%0Alista%20%3D%20%5B%22Tupu%22,%20%22Hupu%22,%20%22Lupu%22%5D%0A%0A%23%20Jos%20ei%20anneta%20v%C3%A4limerkki%C3%A4,%20k%C3%A4ytet%C3%A4%C3%A4n%20pilkkua%0Aprint%28yhdista_alkiot%28lista%29%29%0A%0A%23%20Jos%20annetaan%20v%C3%A4limerkki,%20se%20korvaa%20pilkun%0Aprint%28yhdista_alkiot%28lista,%20%22%3B%22%29%29%0Aprint%28yhdista_alkiot%28lista,%20%22%20ja%20%22%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>
