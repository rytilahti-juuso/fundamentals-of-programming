---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Tulostuksen muotoilusta

Kuten aikaisemmin on todettu, voidaan Pythonissa tulostaa useita eri olioita yhdellä print-funktion kutsulla listaamalla eri oliot pilkuilla erotettuna:

Mikäli tulostettavia asioita on useita, tulee tulostuslauseesta kuitenkin melko monimutkainen. Lisäksi pilkku lisää aina ylimääräisen välilyönnin tulostukseen, mikä ei aina ole toivottavaa:

Monimutkaisemmissa tulostulauseissa tai merkkijonojen muotoiluissa kannattaa käyttää esimerkiksi Pythonin **f-merkkijonoja**. Ideana on, että ennen merkkijonoa kirjoitetaan pieni **f**-kirjain. Nyt merkkijonon sisällä voidaan kirjoittaa **aaltosulkeisiin muuttujien nimiä tai lausekkeita**:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luku1 = int(input("Anna 1. luku: "))
    luku2 = int(input("Anna 2. luku: "))

    print(f"Kun lasketaan {luku1} + {luku2}, saadaan tulokseksi {luku1 + luku2}.")
    ```

    Esimerkkisuoritus:
    ```
    Anna 1. luku: 17
    Anna 2. luku: 32
    Kun lasketaan 17 + 32, saadaan tulokseksi 49.
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku1%20%3D%20int%28input%28%22Anna%201.%20luku%3A%20%22%29%29%0Aluku2%20%3D%20int%28input%28%22Anna%202.%20luku%3A%20%22%29%29%0A%0Aprint%28f%22Kun%20lasketaan%20%7Bluku1%7D%20%2B%20%7Bluku2%7D,%20saadaan%20tulokseksi%20%7Bluku1%20%2B%20luku2%7D.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toinen esimerkkiohjelma, joka pyytää käyttäjää syöttämään arvoja ja muotoilee niistä sitten kaksi merkkijonoa:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    nimi = input("Anna nimi: ")
    kaupunki = input("Anna kotikaupunki: ")
    pnro = input("Anna puhelinnumero: ")

    print(f"Moi, nimeni on {nimi}, asun {kaupunki}-nimisessä kaupungissa.") 
    print(f"Puhelinnumeroni on {pnro}, jos haluat jutella.")
    ```

    Esimerkkisuoritus:
    ``` 
    Anna nimi: Pertti
    Anna kotikaupunki: Porvoo
    Anna puhelinnumero: 123-456 789
    Moi, nimeni on Pertti, asun Porvoo-nimisessä kaupungissa.
    Puhelinnumeroni on 123-456 789, jos haluat jutella.
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=nimi%20%3D%20input%28%22Anna%20nimi%3A%20%22%29%0Akaupunki%20%3D%20input%28%22Anna%20kotikaupunki%3A%20%22%29%0Apnro%20%3D%20input%28%22Anna%20puhelinnumero%3A%20%22%29%0A%0Aprint%28f%22Moi,%20nimeni%20on%20%7Bnimi%7D,%20asun%20%7Bkaupunki%7D-nimisess%C3%A4%20kaupungissa.%22%29%20%0Aprint%28f%22Puhelinnumeroni%20on%20%7Bpnro%7D,%20jos%20haluat%20jutella.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Pythonin f-merkkijonoja voidaan käyttää myös useisiin muihin tarkoituksiin, esimerkiksi muotoilemaan helpommin liukulukujen tulostusta:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luku = 1.2345678

    # Tulostaa luvun sellaisenaan
    print(luku)

    # f-merkkijonolla voidaan antaa desimaalien määrä
    print(f"Vain 2 desimaalia: {luku:.2f}")
    print(f"Tässä desimaaleja on neljä: {luku:.4f}")

    luku2 = 1.5
    print(f"Hei, tämähän myös pyöristää: {luku2:.0f}")
    ```

    Ohjelma tulostaa:
    ```
    1.2345678
    Vain 2 desimaalia: 1.23
    Tässä desimaaleja on neljä: 1.2346
    Hei, tämähän myös pyöristää: 2
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku%20%3D%201.2345678%0A%0A%23%20Tulostaa%20luvun%20sellaisenaan%0Aprint%28luku%29%0A%0A%23%20f-merkkijonolla%20voidaan%20antaa%20desimaalien%20m%C3%A4%C3%A4r%C3%A4%0Aprint%28f%22Vain%202%20desimaalia%3A%20%7Bluku%3A.2f%7D%22%29%0Aprint%28f%22T%C3%A4ss%C3%A4%20desimaaleja%20on%20nelj%C3%A4%3A%20%7Bluku%3A.4f%7D%22%29%0A%0Aluku2%20%3D%201.5%0Aprint%28f%22Hei,%20t%C3%A4m%C3%A4h%C3%A4n%20my%C3%B6s%20py%C3%B6rist%C3%A4%C3%A4%3A%20%7Bluku2%3A.0f%7D%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Tarkemmin asiaa on kuvattu esimerkiksi [Pythonin dokumentaatiossa](https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals).