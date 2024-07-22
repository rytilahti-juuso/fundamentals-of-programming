---
sidebar_position: 1
---

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

Toinen näppärä random-kirjastosta löytyvä operaatio on `choice(sarja)`, joka palauttaa satunnaisen alkion annetusta sarjasta - esimerkiksi alkion listasta tai merkin merkkijonosta:

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

Kätevä operaatio on myös esimerkiksi sample, joka palauttaa satunnaisen kokoisen otoksen alkoita annetusta sarjasta. Kaikki alkiot ovat uniikkeja - tämän vuoksi alkuperäisessä joukossa pitää olla vähintään saman verran alkioita kuin arvottavassa joukossa.

```python 
import random
 ```
```python 
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