---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Johdatus omiin funktioihin

Olemme aikaisemmin tutustuneet ja käyttäneet useita eri funktioita. Esimerkkejä ovat vaikkapa **input** ja **len**. Funktiolla tarkoitetaan itsenäistä ohjelman osaa, jota voidaan toisaalta ohjelmasta kutsua. Kutsuttaessa funktiolle välitetään usein parametri tai parametreja, ja se voi palauttaa jonkin arvon. Yleensä palautettava arvo on jotenkin riippuvainen parametrien arvoista.

Esimerkiksi len-funktiota kutsuttaessa sille välitetään parametriksi vaikkapa merkkijono. Funktio palauttaa merkkijonon merkkien määrän (eli sen pituuden):

```python 
jono = "Heippa!"

print(f"Jonon pituus on {len(jono)} merkkiä.")
 ```

Ohjelma tulostaa:
```python 
Jonon pituus on 7 merkkiä.
 ```

Samoin input-funktiota kutsuttaessa sille välitetään parametriksi käyttäjälle kehotteena tulostettava merkkijono. Funktio palauttaa käyttäjän antaman syötteen merkkijonona:
```python 
nimi = input("Anna nimi: ")
print("Funktio palautti nimen:", nimi)

# Funktiokutsu voi olla myös osa lauseketta:
print("Moikka, nimeni on", input("Anna nimi: "))
 ```

Esimerkkisuoritus:
```
Anna nimi: Pasi
Funktio palautti nimen: Pasi
Anna nimi: Paula
Moikka, nimeni on Paula
 ```

Yleisemmin voidaan siis todeta, että funktiota kutsutaan sen nimellä ja kirjoittamalla parametrit nimen perään suluissa.

## Oman funktion määrittely

Voimme myös määritellä omia funktioita. Funktiot määritellään avainsanalla `def` (lyhenne sanasta define). Määritellään yksinkertainen funktio moikkaa, jolla ei ole parametreja:

```python 
def moikkaa():
    print("Moikka!")
 ```

Kun ajetaan ohjelma, jossa funktio määritellään, ei vielä näytä tapahtuvan yhtään mitään. Funktion sisältämä ohjelmakoodi suoritetaankin vasta silloin, kun funktiota kutsutaan (niin kuin nähtiin aikaisemmista esimerkeistä, joissa kutsuttiin sisäisiä funktioita len ja input).

Kutsutaan siis funktiota moikkaa. Huomaa, että kutsuttaessa kirjoitetaan sulut funktion nimen perään, vaikkei funktiolla parametreja olisikaan:

```python 
def moikkaa():
    print("Moikka!")


# Kutsutaan funktiota sen nimellä
moikkaa()
 ```

Ohjelma tulostaa:
```python 
Moikka!
 ```

Funktiota voidaan määrittelyn jälkeen kutsua useita kertoja. Itse asiassa yksi tyypillinen käyttötarkoitus funktioille on kirjoittaa usein tarvittava koodi funktioksi - tällöin sama koodinpätkä voidaan helposti suorittaa useita kertoja.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def moikkaa():
        print("Moikka!")


    # Kutsutaan funktiota useita kertoja:
    moikkaa()
    moikkaa()
    moikkaa()
    moikkaa()
    moikkaa()
    ```

    Ohjelma tulostaa:
    ``` 
    Moikka!
    Moikka!
    Moikka!
    Moikka!
    Moikka!
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20moikkaa%28%29%3A%0A%20%20%20%20print%28%22Moikka!%22%29%0A%0A%0A%23%20Kutsutaan%20funktiota%20useita%20kertoja%3A%0Amoikkaa%28%29%0Amoikkaa%28%29%0Amoikkaa%28%29%0Amoikkaa%28%29%0Amoikkaa%28%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Tarkastellaan vielä toista esimerkkiä, jossa on määritelty funktio tulosta_valikko. Nimensä mukaisesti ohjelma tulostaa valikon, jossa käyttäjää ohjataan valitsemaan ohjelmasta oikea toiminto:
```python 
def tulosta_valikko():
    print("Tervetuloa puhelinluettelo-ohjelmaan!")
    print("Mitä haluat tehdä?")
    print("1. Lisää numeroita")
    print("2. Selaile numeroita")
    print("3. Etsi numeroita")
    print("4. Muokkaa numeroita")
    print("0. Poistu ohjelmasta")
 ```

Toinen tyypillinen tapa käyttää funktiota onkin jakaa niiden avulla suurempi ohjelma **pienemmiksi kokonaisuuksiksi**. Tällöin ohjelmakoodi on selkeämpää ja ohjelman ylläpidettävyys helpottuu. Ohjelman osia on myös helpompi käyttää uudestaan muissa ohjelmissa, kun se on jaettu pienempiin kokonaisuuksiin.

## Funktioiden parametrit

Edellisistä esimerkeistä huomattiin, että ilman tällaisenaan funktioiden käyttötarkoitus on melko rajallinen: funktion suoritus tuottaa joka kerta saman tuloksen. Funktioista voidaan tehdä yleiskäyttöisempiä antamalla niille **parametreja**.

Parametrilla tarkoitetaan muuttujaa, jonka arvo välitetään funktiolle sitä kutsuttaessa.

Parametrit määritellään funktion nimen perään sulkuihin. Parametrit ovat itse asiassa muuttujia, jotka ovat olemassa vain funktion sisällä. Muuttujilla ei ole (useimmiten) alkuarvoa ennen kuin funktiota kutsutaan. Parametrimuuttujaa määritellessä ei siis vielä anneta sille arvoa, vaan pelkkä nimi.

Tarkastellaan esimerkkiä, jossa määritellään funktio huuda. Funktiolla on yksi parametri, jonka nimi on viesti:

```python 
def huuda(viesti):
    # Tulostetaan viesti ja huutomerkit
    print(viesti + "!!!")
 ```

Nyt funktiota kutsuttaessa parametrille pitää antaa arvo. Jos yritämme kutsua funktiota ilman parametria (tai antamalla väärän määrän parametreja), seuraa virhe:

```python 
def huuda(viesti):
    # Tulostetaan viesti ja huutomerkit
    print(viesti + "!!!")


# Yritetään kutsua ilman parametria
huuda()
 ```

Ohjelma antaa virheen:
```
Traceback (most recent call last):
  File "huuto.py", line 7, in <module>
    huuda()
TypeError: huuda() missing 1 required positional argument: 'viesti'
 ```

Parametrille annetaan arvo kirjoittamalla se funktiokutsussa sulkeiden sisälle. Mekanismi on tuttu esimerkiksi funktioiden input ja len kutsuista:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def huuda(viesti):
        # Tulostetaan viesti ja huutomerkit
        print(viesti + "!!!")


    # Parametrilla toimii
    huuda("Moikka")

    # Huudetaan jotain muuta
    huuda("Heipparallaa")

    # Parametri voi olla lauseke
    huuda("Hei " + "vaan " + "kaikille")
    ```

    Ohjelma tulostaa:
    ``` 
    Moikka!!!
    Heipparallaa!!!
    Hei vaan kaikille!!!
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20huuda%28viesti%29%3A%0A%20%20%20%20%23%20Tulostetaan%20viesti%20ja%20huutomerkit%0A%20%20%20%20print%28viesti%20%2B%20%22!!!%22%29%0A%0A%0A%23%20Parametrilla%20toimii%0Ahuuda%28%22Moikka%22%29%0A%0A%23%20Huudetaan%20jotain%20muuta%0Ahuuda%28%22Heipparallaa%22%29%0A%0A%23%20Parametri%20voi%20olla%20lauseke%0Ahuuda%28%22Hei%20%22%20%2B%20%22vaan%20%22%20%2B%20%22kaikille%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Edellisestä huomataan, että funktion tulostama merkkijono riippuu nyt parametrin arvosta. Funktio siis voi tuottaa eri kutsukerroilla erilaisen lopputuloksen.

Tarkastellaan vielä toista esimerkkiä, jossa funktion parametri on kokonaisluku. Määritellään funktio `tulosta_monesti`, jolla on yksi parametri `maara` ja testataan funktion suoritusta muutamalla eri parametrin arvolla:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def tulosta_monesti(maara):
        indeksi = 0
        while indeksi < maara:
            print("Morjens!")
            indeksi += 1


    # Tulostetaan ensin kolmesti
    tulosta_monesti(3)

    print("Sehän oli hienoa.")
    print("Vielä uudestaan viidesti:")

    # ...ja sitten viidesti
    tulosta_monesti(5)
    ```

    Ohjelma tulostaa:
    ```python 
    Morjens!
    Morjens!
    Morjens!
    Sehän oli hienoa.
    Vielä uudestaan viidesti:
    Morjens!
    Morjens!
    Morjens!
    Morjens!
    Morjens!
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20tulosta_monesti%28maara%29%3A%0A%20%20%20%20indeksi%20%3D%200%0A%20%20%20%20while%20indeksi%20%3C%20maara%3A%0A%20%20%20%20%20%20%20%20print%28%22Morjens!%22%29%0A%20%20%20%20%20%20%20%20indeksi%20%2B%3D%201%0A%0A%0A%23%20Tulostetaan%20ensin%20kolmesti%0Atulosta_monesti%283%29%0A%0Aprint%28%22Seh%C3%A4n%20oli%20hienoa.%22%29%0Aprint%28%22Viel%C3%A4%20uudestaan%20viidesti%3A%22%29%0A%0A%23%20...ja%20sitten%20viidesti%0Atulosta_monesti%285%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>