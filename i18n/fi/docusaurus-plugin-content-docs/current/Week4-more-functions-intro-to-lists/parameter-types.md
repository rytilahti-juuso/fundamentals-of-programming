---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


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

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20monista%28merkkijono,%20luku%29%3A%0A%20%20%20%20print%28merkkijono%20*%20luku%29%0A%0Amonista%285,%202%29%0Amonista%2810,%202.5%29%0Amonista%281.5,%205.5%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

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

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=mjono%20%3D%20%22243%22%0A%0A%23%20Merkkijono%20voidaan%20muuntaa%20tuttuun%20tapaan%20%0A%23%20luvuiksi,%20jos%20sen%20sis%C3%A4ll%C3%A4%20on%20vain%20numeroita%0Akokonaisluku%20%3D%20int%28mjono%29%0Aliukuluku%3D%20float%28mjono%29%0A%0Aprint%28kokonaisluku%29%0Aprint%28liukuluku%29%0A%0A%23%20Kokonaisluvun%20voi%20muuntaa%20liukuluvuksi%20ja%20p%C3%A4invastoin%0Aa%20%3D%201.23%0Ab%20%3D%2010%0A%0Aa2%20%3D%20int%28a%29%0Ab2%20%3D%20float%28b%29%0A%0Aprint%28a2%29%0Aprint%28b2%29%0A%0A%23%20Luvun%20voi%20muuntaa%20my%C3%B6s%20merkkijonoksi%0A%23%20T%C3%A4m%C3%A4%20helpottaa%20esim.%20katenointia%0Aluku%20%3D%20234%0A%0Atulos%20%3D%20%22Tulos%20on%20%22%20%2B%20str%28luku%29%0Aprint%28tulos%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Huomaa, että tyyppimuunnokset eivät aina vastaa esimerkiksi matemaattista pyöristystä: liukuluvun muuntaminen kokonaisluvuksi ainoastaan tiputtaa koko desimaaliosan pois (matematiikassa puhutaan ns. lattiafunktiosta).

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku1%20%3D%201.1%0Aluku2%20%3D%201.5%0Aluku3%20%3D%201.999%0A%0A%23%20Lukujen%20muuntaminen%20tuotta%20tulokseksi%20ykk%C3%B6sen,%0A%23%20koska%20int%28%29-operaatio%20ainoastaan%20tiputtaa%0A%23%20desimaalin%20pois%0Aprint%28int%28luku1%29%29%0Aprint%28int%28luku2%29%29%0Aprint%28int%28luku3%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>