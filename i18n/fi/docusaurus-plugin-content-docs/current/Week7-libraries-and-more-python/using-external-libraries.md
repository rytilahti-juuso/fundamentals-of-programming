---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ulkoisten kirjastojen käyttö

Ohjelmointiin kuuluu olennaisena osana se, ettei pyörää tarvitse aina keksiä itse uudestaan. Pythonin mukana tulee useita valmiita kirjastoja (eli moduuleja), joiden käyttäminen voi helpottaa omien ohjelmien kirjoittamista huomattavasti. Tämän lisäksi toiminnallisuutta voi laajentaa lataamalla käyttöön verkosta (usein ilmaisia) lisää kirjastoja. Näihin ei tämän kurssin puitteissa tutustuta sen tarkemmin, mutta hyviä esimerkkejä ovat vaikkapa koneoppimiseen tarkoitettu TensorFlow (https://www.tensorflow.org/) tai pelien tekemiseen tarkoitettu Pygame (https://www.pygame.org). Ulkoisten kirjastojen hakemisen yhteydessä on hyvä tutustua Pythonin pip-työkaluun (https://pypi.org/project/pip/), jonka avulla kirjastojen asennus on helppoa.

## Satunnaisuus kirjastolla Random

Satunnaislukuja tarvitaan tyypillisesti esimerkiksi peleissä, mutta ne ovat tarpeen myös vaikkapa kryptografiaan liittyvissä ohjelmissa tai ohjelmien testauksessa satunnaisilla arvoilla. Tietokoneella ei kuitenkaan voida yleensä generoida aidosti satunnaisia lukuja (johtuen niiden ennustettavasta toiminnasta), vaan niiden sijasta puhutaan ns. pseudosatunnaisluvuista. Useimpiin tarkoituksiin luvut ovat kuitenkin riittävän satunnaisia.

Pythonissa satunnaislukuja voidaan generoida esimerkiksi kirjaston **random** avulla. Kirjasto otetaan käyttöön **import**-lauseella, jonka syntaksi on

`import <kirjaston nimi>`

Yleensä on järkevää kirjoittaa kaikki ohjelman tarvitsemat import-lauseet heti ohjelman alkuun, jotta on helppo todeta mitä kirjastoja ohjelma käyttää. Kun kirjasto on otettu käyttöön, voidaan viitata siinä määriteltyihin operaatioihin syntaksin

`<kirjaston nimi>.<operaation nimi>`

avulla. Toinen tapa on määritellä käyttöön otettava operaatio suoraan import-lauseessa, esimerkiksi

```python 
from random import randint
 ```

...jolloin operaatioon voi viitata suoraan ilman kirjaston nimeä.

Seuraavassa esimerkissä käytetään random-kirjastosta löytyvää funktiota `randint(alku: int, loppu: int)`, joka palauttaa satunnaisen kokonaisluvun väliltä [alku, loppu]. Huomaa, että tässä yhteydessä myös alku- ja loppupisteet ovat siis mukana välillä:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    import random

    # Funktio palauttaa satunnaisluvun
    # väliltä 1...6
    def heita_noppaa():
        return random.randint(1, 6)


    # Testataan
    for i in range(5):
        print("Noppa antoi", heita_noppaa())
    ```

    Esimerkkisuoritus:
    ```
    Noppa antoi 2
    Noppa antoi 4
    Noppa antoi 6
    Noppa antoi 1
    Noppa antoi 1
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=import%20random%0A%0A%23%20Funktio%20palauttaa%20satunnaisluvun%0A%23%20v%C3%A4lilt%C3%A4%201...6%0Adef%20heita_noppaa%28%29%3A%0A%20%20%20%20return%20random.randint%281,%206%29%0A%0A%0A%23%20Testataan%0Afor%20i%20in%20range%285%29%3A%0A%20%20%20%20print%28%22Noppa%20antoi%22,%20heita_noppaa%28%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toinen näppärä random-kirjastosta löytyvä operaatio on `choice(sarja)`, joka palauttaa satunnaisen alkion annetusta sarjasta - esimerkiksi alkion listasta tai merkin merkkijonosta:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    import random

    etunimet = ["Jarmo", "Pekka", "Jaana", "Paula"]
    sukunimet = ["Virtanen", "Lahtinen", "Pythonen"]

    nimi = random.choice(etunimet) + " " + random.choice(sukunimet)

    print("Satunnainen nimi:", nimi)
    ```

    Esimerkkisuoritus:
    ``` 
    Satunnainen nimi: Pekka Pythonen
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=import%20random%0A%0Aetunimet%20%3D%20%5B%22Jarmo%22,%20%22Pekka%22,%20%22Jaana%22,%20%22Paula%22%5D%0Asukunimet%20%3D%20%5B%22Virtanen%22,%20%22Lahtinen%22,%20%22Pythonen%22%5D%0A%0Animi%20%3D%20random.choice%28etunimet%29%20%2B%20%22%20%22%20%2B%20random.choice%28sukunimet%29%0A%0Aprint%28%22Satunnainen%20nimi%3A%22,%20nimi%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Kätevä operaatio on myös esimerkiksi sample, joka palauttaa satunnaisen kokoisen otoksen alkoita annetusta sarjasta. Kaikki alkiot ovat uniikkeja - tämän vuoksi alkuperäisessä joukossa pitää olla vähintään saman verran alkioita kuin arvottavassa joukossa.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    import random
+
    def lottonumerot():
        numerot = list(range(1, 40))
        # Arvotaan 7 numeron otos numeroista
        return random.sample(numerot, 7)

    for i in range(3):
        print(sorted(lottonumerot()))
    ```

    Esimerkkisuoritus:
    ```
    [1, 11, 12, 17, 28, 29, 37]
    [1, 3, 6, 15, 25, 29, 33]
    [3, 13, 22, 32, 34, 35, 38]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=import%20random%0A%0Adef%20lottonumerot%28%29%3A%0A%20%20%20%20numerot%20%3D%20list%28range%281,%2040%29%29%0A%20%20%20%20%23%20Arvotaan%207%20numeron%20otos%20numeroista%0A%20%20%20%20return%20random.sample%28numerot,%207%29%0A%0Afor%20i%20in%20range%283%29%3A%0A%20%20%20%20print%28sorted%28lottonumerot%28%29%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>