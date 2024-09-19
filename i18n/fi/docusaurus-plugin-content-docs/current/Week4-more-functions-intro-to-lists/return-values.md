---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


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

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20summa%28luku1%3A%20int,%20luku2%3A%20int%29%3A%0A%20%20%20%20%23%20lasketaan%20summa%0A%20%20%20%20summa%20%3D%20luku1%20%2B%20luku2%0A%0A%20%20%20%20%23%20palautetaan%20summa%0A%20%20%20%20return%20summa%0A%0A%0A%23%20Tallennetaan%20paluuarvo%20muuttujaan%0Atulos%20%3D%20summa%2810,%2020%29%0A%0A%23%20tulostetaan%20se%0Aprint%28tulos%29%0A%0A%23%20K%C3%A4ytet%C3%A4%C3%A4n%20paluuarvoa%20osana%20lauseketta%0Atulos2%20%3D%20summa%282,2%29%20%2B%205%20*%20summa%283,%203%29%0Aprint%28tulos2%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Jos palautusarvolle ei tehdä mitään, näyttää siltä, ettei funktio tee yhtään mitään:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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

  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20summa%28luku1%3A%20int,%20luku2%3A%20int%29%3A%0A%20%20%20%20%23%20lasketaan%20summa%0A%20%20%20%20summa%20%3D%20luku1%20%2B%20luku2%0A%0A%20%20%20%20%23%20palautetaan%20summa%0A%20%20%20%20return%20summa%0A%0A%0A%23%20Kutsutaan%20funktiota,%20muttei%20tehd%C3%A4%20paluuarvolle%20mit%C3%A4%C3%A4n%0Asumma%2810,%2020%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Tarkastellaan vielä muutamaa esimerkkiä funktioista, jotka palauttavat jonkin arvon ja niiden kutsumisesta. Aluksi funktio, joka palauttaa merkkijonon monistettuna:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20monista%28jono%3A%20str,%20maara%3A%20int%29%3A%0A%20%20%20%20return%20jono%20*%20maara%0A%0A%23%20Esimerkkej%C3%A4%20kutsuista%0Aviesti%20%3D%20%22Moi%20kaikki!%22%0Aprint%28viesti%29%0Aprint%28monista%28%22*%22,%20len%28viesti%29%29%29%0A%0A%23%20Toinen%20esimerkki%0Aluku%20%3D%201%0Ajono%20%3D%20%22%22%0Awhile%20luku%20%3C%2010%3A%0A%20%20%20%20jono%20%2B%3D%20monista%28str%28luku%29,%20luku%29%0A%20%20%20%20luku%20%2B%3D%201%0A%0Aprint%28jono%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Seuraava esimerkki on funktiosta, joka palauttaa summan väliltä alku...loppu:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20summa%28alku%3A%20int,%20loppu%3A%20int%29%3A%0A%20%20%20%20summa%20%3D%200%0A%20%20%20%20while%20alku%20%3C%3D%20loppu%3A%0A%20%20%20%20%20%20%20%20summa%20%2B%3D%20alku%0A%20%20%20%20%20%20%20%20alku%20%2B%3D%201%0A%0A%20%20%20%20return%20summa%0A%0A%0A%23%20Esimerkkej%C3%A4%20kutsusta%0Aalku%20%3D%20int%28input%28%22Anna%20luku%3A%20%22%29%29%0Aloppu%20%3D%20int%28input%28%22Anna%20luku%202%3A%20%22%29%29%0Aprint%28%22Summa%20on%22,%20summa%28alku,%20loppu%29%29%0A%0A%0Aisompi_summa%20%3D%20summa%281,10%29%20%2B%20summa%285,15%29%20%2B%20summa%28100,105%29%0Aprint%28isompi_summa%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Palautus vai tuloste

Onkin tärkeä huomata ero siinä, että funktio palauttaa jotain tai että funktio tulostaa jotain ruudulle. Tämä on usein ohjelmointia aloittaessa kuitenkin vaikeasti hahmotettava ero.

Seuraava esimerkki pyrkivät havainnollistamaan eroa:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20tulosta_suurempi%28a%3A%20int,%20b%3A%20int%29%3A%0A%20%20%20%20if%20a%20%3E%20b%3A%0A%20%20%20%20%20%20%20%20print%28a%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28b%29%0A%0A%0Adef%20palauta_suurempi%28a%3A%20int,%20b%3A%20int%29%3A%0A%20%20%20%20if%20a%20%3E%20b%3A%0A%20%20%20%20%20%20%20%20return%20a%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20return%20b%0A%0A%0A%23%20Kutsutaan%20tulostusta%0Atulosta_suurempi%2810,%2015%29%0A%0A%0A%23%20Funktion%20paluuarvo%20tulee%20k%C3%A4sitell%C3%A4%0Asuurempi%20%3D%20palauta_suurempi%28100,200%29%0A%0A%23%20Se%20voidaan%20toki%20tulostaa%20ruudulle...%0Aprint%28%22Paluuarvo%20oli%22,%20suurempi%29%0A%0A%23%20...%20tai%20k%C3%A4ytt%C3%A4%C3%A4%20sit%C3%A4%20lausekkeessa%0Aprint%28%22Paluuarvo%20kertaa%2010%20on%22,%20suurempi%20*%2010%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Vielä yksi esimerkki arvojen palautuksesta. Seuraava funktio saa parametrinaan kaksi merkkijonoa ja palauttaa sen merkkijonon, josta löytyy useampi välilyönti:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20enemman_sanoja%28lause1%3A%20str,%20lause2%3A%20str%29%3A%0A%20%20%20%20valit1%20%3D%20lause1.count%28%22%20%22%29%0A%20%20%20%20valit2%20%3D%20lause2.count%28%22%20%22%29%0A%0A%20%20%20%20if%20valit1%20%3E%20valit2%3A%0A%20%20%20%20%20%20%20%20return%20lause1%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20return%20lause2%0A%0A%0A%23%20Testataan%0Al1%20%3D%20%22Moi%20vaan%20kaikki%20tyypit!%22%0Al2%20%3D%20%22Hei%20sun%20heipparallaa%20vaan%20t%C3%A4%C3%A4lt%C3%A4%20toivottelen!%22%0A%0Aprint%28%22Enemm%C3%A4n%20sanoja%20lauseessa%3A%22%29%0Aprint%28enemman_sanoja%28l1,%20l2%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

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
