---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vaihtoehtoiset haarat

Usein olisi ehdon yhteydessä tarpeen esittää kaksi vaihtoehtoista toimintoa. Siis esimerkiksi niin, että jos luku on positiivinen, tehdään toiminto A, ja jos se on negatiivinen, tehdään toiminto B. Tällainen toiminnallisuus saadaan toki aikaan kahdella peräkkäisellä ehdolla:

```python 
luku = int(input("Anna luku: "))

if luku > 0:
    print("Luku oli positiivinen")

if luku < 0:
    print("Luku oli negatiivinen")
 ```

Esimerkkisuoritus:
```python 
Anna luku: -6
Luku oli negatiivinen
 ```

...mutta rakenne vaikuttaa hiukan kömpelöltä, eikä edes sovellu kaikkiin mahdollisiin tilanteisiin. Helpompi tapa on käyttää ehtolauseen vaihtoehtoista haaraa. Pythonissa tämä tapahtuu else-lauseella, jonka syntaksi on seuraavanlainen:

```python 
if <ehtolauseke>:
    <lohko 1>
else:
    <lohko 2>
 ```

Vaihtoehtoinen else-haara kirjoitetaan if-lausetta seuraavan lohkon perään, else-haara ei voi siis esiintyä ilman sitä edeltävää if-lausetta. Ideana on, että jokaisessa tapauksessa suoritetaan jompikumpi lohkoista.

![](/img/img-fi/w2-1.png)

Edellinen esimerkki toteutettuna else-haaraa hyödyntäen näyttäisi siis tältä:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luku = int(input("Anna luku: "))

    if luku > 0:
        print("Luku oli positiivinen")
    else:
        print("Luku oli negatiivinen tai nolla")
    ```

    Kaksi esimerkkisuoritusta:
    ``` 
    Anna luku: 7
    Luku oli positiivinen
    ```

    ``` 
    Anna luku: -55
    Luku oli negatiivinen tai nolla
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku%20%3D%20int%28input%28%22Anna%20luku%3A%20%22%29%29%0A%0Aif%20luku%20%3E%200%3A%0A%20%20%20%20print%28%22Luku%20oli%20positiivinen%22%29%0Aelse%3A%0A%20%20%20%20print%28%22Luku%20oli%20negatiivinen%20tai%20nolla%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Vastaavasti ohjelma, joka tulostaa viestin velkojen maksusta vain tietyn nimiselle käyttäjälle toteutettaisiin esimerkiksi näin:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    nimi = input("Moi, kuka olet? ")

    if nimi == "Joni":
        print("Maksa velkasi!")
    else:
        print("Ei velkoja.")
    ```

    Kaksi esimerkkisuoritusta:
    ``` 
    Moi, kuka olet? Jani
    Ei velkoja.
    ```

    ``` 
    Moi, kuka olet? Joni
    Maksa velkasi!
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=nimi%20%3D%20input%28%22Moi,%20kuka%20olet%3F%20%22%29%0A%0Aif%20nimi%20%3D%3D%20%22Joni%22%3A%0A%20%20%20%20print%28%22Maksa%20velkasi!%22%29%0Aelse%3A%0A%20%20%20%20print%28%22Ei%20velkoja.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Lisää haaroja

Useissa tilanteissa tarvittaisiin kuitenkin enemmän kuin kaksi mahdollista haaraa. Esimerkiksi positiivisen ja negatiivisen luvun esimerkissä voitaisiin haluta reagoida eri tavalla, jos luku on nolla.

Ehtolauseen perään voidaan **elif**-lauseella kirjoittaa toinen ehto, jota tarkastellaan vain siinä tapauksessa että if-lauseessa esitetty ehto on epätosi. Tällaisia elif-lauseella esitettyjä ehtoja voidaan listata if-lauseen perään niin monta kuin halutaan. Lopuksi voi esiintyä vielä else-lause, jota seuraava lohko suoritetaan silloin, kun mikään esitetyistä ehdoista ei ollut tosi.

Koko ehtolauseen syntaksi näyttää siis tältä:
```python 
if <ehto1>:
    <lohko 1>
elif <ehto2>:
    <lohko 2>
else:
    <lohko 3>
 ```

Esimerkki, jossa tulostetaan tieto siitä, oliko syötetty luku positiivinen, negatiivinen vai nolla:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luku = int(input("Anna luku: "))

    if luku < 0:
        print("Luku oli negatiivinen")
    elif luku > 0:
        print("Luku oli positiivinen")
    else:
        print("Luku oli nolla")
    ```

    Esimerkkisuorituksia:
    ``` 
    Anna luku: 5
    Luku oli positiivinen
    ```

    ``` 
    Anna luku: -5
    Luku oli negatiivinen
    ```

    ``` 
    Anna luku: 0
    Luku oli nolla
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku%20%3D%20int%28input%28%22Anna%20luku%3A%20%22%29%29%0A%0Aif%20luku%20%3C%200%3A%0A%20%20%20%20print%28%22Luku%20oli%20negatiivinen%22%29%0Aelif%20luku%20%3E%200%3A%0A%20%20%20%20print%28%22Luku%20oli%20positiivinen%22%29%0Aelse%3A%0A%20%20%20%20print%28%22Luku%20oli%20nolla%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toinen esimerkki, jossa tulostetaan tieto siitä kumpi annetuista luvuista oli suurempi (vai olivatko luvut yhtä suuria):

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luku1 = int(input("Anna luku 1: "))
    luku2 = int(input("Anna luku 2: "))

    if luku1 > luku2:
        print("Luku 1 oli isompi")
    elif luku2 > luku1:
        print("Luku 2 oli isompi")
    else:
        print("Luvut olivat yhtä suuret")
    ```

    Esimerkkisuorituksia:
    ``` 
    Anna luku 1: 10
    Anna luku 2: 5
    Luku 1 oli isompi
    ```

    ``` 
    Anna luku 1: 9
    Anna luku 2: 99
    Luku 2 oli isompi
    ```

    ``` 
    Anna luku 1: 22
    Anna luku 2: 22
    Luvut olivat yhtä suuret
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku1%20%3D%20int%28input%28%22Anna%20luku%201%3A%20%22%29%29%0Aluku2%20%3D%20int%28input%28%22Anna%20luku%202%3A%20%22%29%29%0A%0Aif%20luku1%20%3E%20luku2%3A%0A%20%20%20%20print%28%22Luku%201%20oli%20isompi%22%29%0Aelif%20luku2%20%3E%20luku1%3A%0A%20%20%20%20print%28%22Luku%202%20oli%20isompi%22%29%0Aelse%3A%0A%20%20%20%20print%28%22Luvut%20olivat%20yht%C3%A4%20suuret%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Jos else-lausetta ei ole, eikä mikään ehdoista ole tosi, ei luonnollisesti suoriteta mitään määritellyistä lohkoista:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    ohjaaja = input("Anna ohjaajan nimi: ")

    if ohjaaja == "James Cameron":
        print("Ohjasi Titanicin")
    elif ohjaaja == "Francis Ford Coppola":
        print("Ohjasi Kummisedät")
    elif ohjaaja == "Steven Spielberg":
        print("Ohjasikohan se ET:n...?")
    ```

    Kaksi esimerkkisuoritusta:
    ``` 
    Anna ohjaajan nimi: Francis Ford Coppola
    Ohjasi Kummisedät
    ```

    ``` 
    Anna ohjaajan nimi: Ere Kokkonen
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=ohjaaja%20%3D%20input%28%22Anna%20ohjaajan%20nimi%3A%20%22%29%0A%0Aif%20ohjaaja%20%3D%3D%20%22James%20Cameron%22%3A%0A%20%20%20%20print%28%22Ohjasi%20Titanicin%22%29%0Aelif%20ohjaaja%20%3D%3D%20%22Francis%20Ford%20Coppola%22%3A%0A%20%20%20%20print%28%22Ohjasi%20Kummised%C3%A4t%22%29%0Aelif%20ohjaaja%20%3D%3D%20%22Steven%20Spielberg%22%3A%0A%20%20%20%20print%28%22Ohjasikohan%20se%20ET%3An...%3F%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>