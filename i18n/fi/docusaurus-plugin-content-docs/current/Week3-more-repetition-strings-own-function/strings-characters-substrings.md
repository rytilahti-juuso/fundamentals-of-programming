---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Merkkijonot, merkit ja alijonot
Niinkuin aikaisemmin todettiin, merkkijono on nollasta, yhdestä tai useammasta merkistä koostuva jono. Merkkijonossa esiintyvät merkit voivat olla mitä tahansa käytetyssä merkistössä esiintyviä merkkejä. Pythonissa käytetään kolmosversiossa oletuksena [Unicode](https://en.wikipedia.org/wiki/UTF-8)-nimistä merkistökoodausta, jolla voidaan esittää lähes kaikki yleisesti tarvittavat merkit (se mitä merkkejä ruudulle voidaan tulostaa riippuu toki myös käytettävästä kirjasimesta eli fontista).

Merkkijonosta löytyvien merkkien määrän voi palauttaa funktiolla `len`. Esimerkiksi:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    jono = "Moi"
    print(len(jono))

    nimi = "Pekka Python"
    print(len(nimi))

    # Kaikki merkit, myös välilyönnit, lasketaan pituuteen
    jono2 = "a b c d"

    pituus= len(jono2)
    print(pituus)

    # Tyhjän merkkijonon pituus on nolla
    print(len(""))
    ```

    Ohjelma tulostaa:
    ```python 
    3
    12
    7
    0
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=jono%20%3D%20%22Moi%22%0Aprint%28len%28jono%29%29%0A%0Animi%20%3D%20%22Pekka%20Python%22%0Aprint%28len%28nimi%29%29%0A%0A%23%20Kaikki%20merkit,%20my%C3%B6s%20v%C3%A4lily%C3%B6nnit,%20lasketaan%20pituuteen%0Ajono2%20%3D%20%22a%20b%20c%20d%22%0A%0Apituus%3D%20len%28jono2%29%0Aprint%28pituus%29%0A%0A%23%20Tyhj%C3%A4n%20merkkijonon%20pituus%20on%20nolla%0Aprint%28len%28%22%22%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Funktio saa siis parametrikseen merkkijonon ja palauttaa tiedon sen pituudesta -. palautettu arvo on siis nolla tai positiivinen kokonaisluku.

## Merkit merkkijonossa

Kaikilla merkkijonon merkeillä on **indeksi** (eli järjestysluku). Indeksin avulla voidaan viitata merkkijonon yksittäisiin merkkeihin, esimerkiksi poimia jonkin merkkijonon ensimmäinen, toinen tai viimeinen merkki.

Pythonissa, kuten useimmissa muissa ohjelmointikielissä, indeksointi alkaa yleensä **nollasta**. Tämä tarkoittaa, että merkkijonon ensimmäinen merkki on indeksin nolla kohdalla. Vastaavasti merkkijonon viimeinen merkki on indeksin (merkkijonon pituus miinus yksi) kohdalla:

![](/img/img-fi/w3-1.png)

Yksittäiseen merkkiin voidaan viitata hakasulkunotaatiolla. Hakasulkeet kirjoitetaan merkkijonomuuttujan tai merkkijonovakion perään. Hakasulkeiden sisään kirjoitetaan sen merkin indeksi, joka halutaan palauttaa.

Esimerkiksi

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    jono = "Pekka Python"

    # eka merkki
    print("Eka:", jono[0])

    # kolmas merkki
    print("Kolmas:", jono[2])

    # eka, toka ja kolmas merkki
    print("Eka, toka, kolmas:", jono[0] + jono[1] + jono[2])

    # Merkin voi poimia myös merkkijonovakiosta
    print("abcdef"[2])
    ```

    Ohjelma tulostaa:
    ```python 
    Eka: P
    Toka: k
    Eka, toka, kolmas: Pek
    c
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=jono%20%3D%20%22Pekka%20Python%22%0A%0A%23%20eka%20merkki%0Aprint%28%22Eka%3A%22,%20jono%5B0%5D%29%0A%0A%23%20kolmas%20merkki%0Aprint%28%22Kolmas%3A%22,%20jono%5B2%5D%29%0A%0A%23%20eka,%20toka%20ja%20kolmas%20merkki%0Aprint%28%22Eka,%20toka,%20kolmas%3A%22,%20jono%5B0%5D%20%2B%20jono%5B1%5D%20%2B%20jono%5B2%5D%29%0A%0A%23%20Merkin%20voi%20poimia%20my%C3%B6s%20merkkijonovakiosta%0Aprint%28%22abcdef%22%5B2%5D%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Seuraava ohjelma tulostaa käyttäjän syöttämän merkkijonon ensimmäisen ja viimeisen merkin allekkain:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    while True:
        jono = input("Anna merkkijono, tyhjä lopettaa: ")
        if jono == "":
            break

        print("1. merkki:", jono[0])

        # viimeinen merkki on indeksin pituus - 1 kohdalla
        print("Viimeinen merkki:", jono[len(jono) - 1])
    ```

    Esimerkkisuoritus:
    ```python 
    Anna merkkijono, tyhjä lopettaa: Moikka
    1. merkki: M
    Viimeinen merkki: a
    Anna merkkijono, tyhjä lopettaa: Terve
    1. merkki: T
    Viimeinen merkki: e
    Anna merkkijono, tyhjä lopettaa: Moro vaan
    1. merkki: M
    Viimeinen merkki: n
    Anna merkkijono, tyhjä lopettaa:
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=while%20True%3A%0A%20%20%20%20jono%20%3D%20input%28%22Anna%20merkkijono,%20tyhj%C3%A4%20lopettaa%3A%20%22%29%0A%20%20%20%20if%20jono%20%3D%3D%20%22%22%3A%0A%20%20%20%20%20%20%20%20break%0A%0A%20%20%20%20print%28%221.%20merkki%3A%22,%20jono%5B0%5D%29%0A%0A%20%20%20%20%23%20viimeinen%20merkki%20on%20indeksin%20pituus%20-%201%20kohdalla%0A%20%20%20%20print%28%22Viimeinen%20merkki%3A%22,%20jono%5Blen%28jono%29%20-%201%5D%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Huomaa, että jos yritetään viitata sellaiseen merkkiin, jota ei ole merkkijonossa, seuraa virheilmoitus:

```python 
jono = "abc"

# Eka, toka ja kolmas indeksi toimivat
print(jono[0])
print(jono[1])
print(jono[2])

# Neljättä indeksiä ei ole, tämä antaa virheen
print(jono[3])
 ```

Ohjelma tulostaa:
``` 
a
b
c
Traceback (most recent call last):
  File "merkit.py", line 9, in <module>
    print(jono[3])
IndexError: string index out of range
 ```

## Negatiiviset indeksit

Pythonissa voidaan viitata merkkeihin myös negatiivisten indeksien avulla. Indeksi -1 tarkoittaa jonon viimeistä merkkiä, -2 jonon toiseksi viimeistä merkkiä ja niin edelleen:

![](/img/img-fi/w3-2.png)

Jokaisella merkkijonon merkillä on siis kaksi indeksiä: positiivinen ja negatiivinen. Merkkijonon viimeiseen merkkiin voidaan viitata joko sen pituuden avulla tai käyttäen negatiivista indeksiä:

```python 
sana = input("Anna sana: ")

# Viimeinen merkki pituuden avulla
print("Viimeinen merkki: " + sana[len(sana) - 1])

# Viimeinen merkki negatiivisen indeksin avulla:
print("Viimeinen merkki: " + sana[-1])
 ```

Esimerkkisuoritus:
```python 
Anna sana: Testi
Viimeinen merkki: i
Viimeinen merkki: i
 ```

## Osajonot

Merkkijonon osajonolla (substring) tarkoitetaan alkuperäisen merkkijonon "sisältä" löytyvää jonoa. Merkkijonon "Python" osajonoja olisivat siis esimerkiksi jonot "Py", "ytho", "hon" ja "Python".

Osajono voidaan poimia merkkijonosta hyödyntämällä hakasulkuoperaattoria, jossa on annettu poimittavan osajonon alku- ja loppuindeksi. Indeksien väliin kirjoitetaan kaksoispiste.

Osajonoa poimiessa on tärkeä muistaa, että alkuindeksin mukainen merkki tulee mukaan osajonoon, mutta loppuindeksin mukainen ei. Muistisääntönä voi esimerkiksi ajatella merkkien indeksi pystyviivoina, jotka piirretään merkkien vasemmalle puolelle:

Jos esimerkiksi merkkijonosta "Pekka Python" otettaisiin osajono indeksien 3 ja 8 välillä...

![](/img/img-fi/w3-3.png)

...tuloksena olisi osajono "ka Py":

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    nimi = "Pekka Python"

    osajono = nimi[3:8]

    print(osajono)
    ```

    Ohjelma tulostaa:
    ``` 
    ka Py
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=nimi%20%3D%20%22Pekka%20Python%22%0A%0Aosajono%20%3D%20nimi%5B3%3A8%5D%0A%0Aprint%28osajono%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Lisää esimerkkejä osajonojen poimimisesta:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    aakkoset = "ABCDEFGHIJKL"

    alku = aakkoset[0:5]
    loppu = aakkoset[7:12]
    keskelta = aakkoset[3:9]

    print(alku)
    print(loppu)
    print(keskelta)
    ```

    Ohjelma tulostaa:
    ``` 
    ABCDE
    HIJKL
    DEFGHI
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=aakkoset%20%3D%20%22ABCDEFGHIJKL%22%0A%0Aalku%20%3D%20aakkoset%5B0%3A5%5D%0Aloppu%20%3D%20aakkoset%5B7%3A12%5D%0Akeskelta%20%3D%20aakkoset%5B3%3A9%5D%0A%0Aprint%28alku%29%0Aprint%28loppu%29%0Aprint%28keskelta%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toisin kuin merkkiä poimiessa, osajonossa on sallittua viitata sellaiseen indeksiin, jota merkkijonosta ei löydy. Tällöin kuitenkin osajonossa voi olla odotettua pienempi määrä merkkejä:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    nimi = "Pirjo"

    indeksi = 0

    while indeksi < len(nimi):
        osa_nimesta = nimi[indeksi: indeksi + 3]
        print(osa_nimesta)

        indeksi += 1
    ```

    Ohjelma tulostaa:

    ``` 
    Pir
    irj
    rjo
    jo
    o
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=nimi%20%3D%20%22Pirjo%22%0A%0Aindeksi%20%3D%200%0A%0Awhile%20indeksi%20%3C%20len%28nimi%29%3A%0A%20%20%20%20osa_nimesta%20%3D%20nimi%5Bindeksi%3A%20indeksi%20%2B%203%5D%0A%20%20%20%20print%28osa_nimesta%29%0A%0A%20%20%20%20indeksi%20%2B%3D%201&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>