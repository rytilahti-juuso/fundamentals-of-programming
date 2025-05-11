---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Listan iterointi

VIimeksi harjoiteltiin luomaan listoja, lisäämään ja muuttamaan alkioita ja poimimaan yksittäisiä alkioita listoista. Usein on kuitenkin tarpeen käydä kaikki listan alkiot läpi. Tyypillinen syy voisi olla vaikkapa tietyn (esimerkiksi minimi- tai maksimiarvon) etsiminen listasta, tai mikä tahansa operaatio, joka halutaan kohdistaa kaikkiin listan alkioihin.

Listan alkiot voidaan luonnollisesti käydä läpi while-silmukkaa hyödyntäen, esimerkiksi seuraava ohjelma tulostaa kaikki listan lista alkiot yksitellen:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Esimerkkilista
    lista = [5,2,3,4,10,7]

    indeksi = 0
    while indeksi < len(lista):
        print(lista[indeksi])
        indeksi += 1
    ```

    Ohjelma tulostaa:
    ```
    5
    2
    3
    4
    10
    7
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Esimerkkilista%0Alista%20%3D%20%5B5,2,3,4,10,7%5D%0A%0Aindeksi%20%3D%200%0Awhile%20indeksi%20%3C%20len%28lista%29%3A%0A%20%20%20%20print%28lista%5Bindeksi%5D%29%0A%20%20%20%20indeksi%20%2B%3D%201&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Listan alkioiden läpikäyntiin on kuitenkin helpompikin tapa.

## Definiitti toisto for-lauseella

Pythonin for-lauseen avulla voidaan läpikäydä eli iteroida mikä tahansa sitä tukeva tietorakenne. Lauseen syntaksi on muotoa

```
for <muuttuja> in <tietorakenne>:
   <lohko>
```

Ideana on, että for-silmukassa kaikki alkiot poimitaan yksitellen järjestyksessä tietorakenteesta ja asetetaan annetun muuttujan arvoksi. Seuraava kaavio havainnollistaa silmukan toimintaa:

![Silmukan toiminta](/img/img-fi/w5-1.png)

Tarkastellaan edellistä esimerkkiä, jossa listan alkiot tulostetaan yksitellen, nyt for-lauseella toteutettuna:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Esimerkkilista
    lista = [5,2,3,4,10,7]

    for alkio in lista:
        print(alkio)
    ```

    Ohjelma tulostaa:
    ```
    5
    2
    3
    4
    10
    7
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Esimerkkilista%0Alista%20%3D%20%5B5,2,3,4,10,7%5D%0A%0Afor%20alkio%20in%20lista%3A%0A%20%20%20%20print%28alkio%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Huomaa, että for-lausetta käytettäessä meidän ei tarvitse erikseen huolehtia muuttujan arvon muutoksesta tai ehdon katkaisusta break-lauseella. For-lause poimii automaattisesti kaikki alkiot järjestyksessä ensimmäisestä viimeiseen ja sijoittaa ne yksitellen annettuun muuttujaan.

Tarkastellaan toista esimerkkiä, jossa lasketaan kaikkien listan alkioiden summa:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Esimerkkilista
    lista = [1, 3, 2, 4, 5, 6]

    summa = 0
    for alkio in lista:
        summa += alkio

    print(f"Summaksi tuli {summa}.")
    ```

    Ohjelma tulostaa:
    ```
    Summaksi tuli 21.
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Esimerkkilista%0Alista%20%3D%20%5B1,%203,%202,%204,%205,%206%5D%0A%0Asumma%20%3D%200%0Afor%20alkio%20in%20lista%3A%0A%20%20%20%20summa%20%2B%3D%20alkio%0A%0Aprint%28f%22Summaksi%20tuli%20%7Bsumma%7D.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Usein on tapana poimia alkioista vain tilanteeseen sopivat, vaikka kaikki käytäisiinkin läpi. Seuraavassa esimerkissä lasketaan parillisten alkioiden summa:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Esimerkkilista
    lista = [1, 3, 2, 4, 5, 6]

    summa = 0
    for alkio in lista:
        # Huomoidaan nyt vain parilliset
        if alkio % 2 == 0:
            summa += alkio

    print(f"Summaksi tuli {summa}.")
    ```

    Ohjelma tulostaa:
    ``` 
    Summaksi tuli 12.
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Esimerkkilista%0Alista%20%3D%20%5B1,%203,%202,%204,%205,%206%5D%0A%0Asumma%20%3D%200%0Afor%20alkio%20in%20lista%3A%0A%20%20%20%20%23%20Huomoidaan%20nyt%20vain%20parilliset%0A%20%20%20%20if%20alkio%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20summa%20%2B%3D%20alkio%0A%0Aprint%28f%22Summaksi%20tuli%20%7Bsumma%7D.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>


Vielä kolmas esimerkki, jossa tulostetaan ainoastaan ne alkiot, jotka ovat jaollisia kahdella ja kolmella:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Esimerkkilista
    lista = [1,2,3,4,5,6,7,8,9,10,11,12]

    for alkio in lista:
        # Huomoidaan nyt vain parilliset
        if alkio % 2 == 0 and alkio % 3 == 0:
            print(alkio)
    ```

    Ohjelma tulostaa:
    ```
    6
    12
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Esimerkkilista%0Alista%20%3D%20%5B1,2,3,4,5,6,7,8,9,10,11,12%5D%0A%0Afor%20alkio%20in%20lista%3A%0A%20%20%20%20%23%20Huomoidaan%20nyt%20vain%20parilliset%0A%20%20%20%20if%20alkio%20%25%202%20%3D%3D%200%20and%20alkio%20%25%203%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20print%28alkio%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

For-lauseella muodostettavaa toistolausetta kutsutaan **definiitiksi toistoksi**. Tämä tarkoittaa, että jo lausetta kirjoitettaessa meillä on tiedossa, mitkä alkiot on tarkoitus käydä läpi. Vastaavasti while-lauseella muodostettavaa toistoa kutsutaan **indefiniitiksi toistoksi**, koska siinä toiston pituus ei  selviä automaattisesti pelkästä while-lauseen ehdosta.

Definiitti toistolause toimii myös merkkijonojen kanssa. Tällöin merkkijonosta poimitaan merkit yksi kerrallaan ja sijoitetaan ne annettuun muuttujaan:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Esimerkkijono
    nimi = "Pekka Python"

    # Tulostetaan merkit allekkain
    for merkki in nimi:
        print(merkki)
    ```

    Ohjelma tulostaa:
    ```python 
    P
    e
    k
    k
    a

    P
    y
    t
    h
    o
    n
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Esimerkkijono%0Animi%20%3D%20%22Pekka%20Python%22%0A%0A%23%20Tulostetaan%20merkit%20allekkain%0Afor%20merkki%20in%20nimi%3A%0A%20%20%20%20print%28merkki%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Toistolause ja range-funktio

Definiittiä toistoa olisi näppärä hyödyntää myös tilanteissa, joissa ei varsinaisesti tarvita listaa. Jos halutaan esimerkiksi etsiä alkuluvut väliltä 1...1 000 000, ei ole varsinaista syytä tallentaa kaikkia miljoonaa lukua erikseen listaan - tämä veisi lähinnä turhaan muistia. Iteroinnin voi toki tehdä while-lauseen avulla, mutta tähän löytyy näppärämpikin tapa.

Funktion range avulla voidaan luoda sarja arvoja, jotka voidaan iteroida läpi for-lauseen avulla. Funktio ei muodosta varsinaista listaa, joten muistiakaan sen tallentamiseksi ei kulu turhaan.

Funktion syntaksi on muotoa

`range(<alku>, <loppu> [, askel])`

Tuttuun tapaan loppuaskel ei taaskaan ole mukana muodostetussa sarjassa, joten esimerkiksi kutsu range(1, 10) palauttaa sarjan, jossa on luvut yhdestä yhdeksään:

```python 
for i in range(1, 10):
    print(i)
 ```

Ohjelma tulostaa:
```
1
2
3
4
5
6
7
8
9
 ```

Tarkastellaan esimerkkiä, jossa lasketaan lukujen 1 - 10000 summa:

```python 
summa = 0
for i in range(1, 10001):
    summa += i

print(summa)
 ```

Ohjelma tulostaa:
``` 
50005000
 ```

Sarjalle voidaan siis antaa myös kolmas parametri, askel. Näin voidaan luoda helposti eri tavoin askeltavia sarjoja. Negatiivinen askel tuottaa suuremmasta pienempään kulkevan sarjan:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Tulostetaan kolmen välein lukuja:
    for i in range(1, 20, 3):
        print(i)


    # Tulostetaan lukuja suuremmasta pienempään:
    for i in range(5, 0, -1):
        print(i)
    ```

    Ohjelma tulostaa:
    ```
    1
    4
    7
    10
    13
    16
    19
    5
    4
    3
    2
    1
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Tulostetaan%20kolmen%20v%C3%A4lein%20lukuja%3A%0Afor%20i%20in%20range%281,%2020,%203%29%3A%0A%20%20%20%20print%28i%29%0A%0A%0A%23%20Tulostetaan%20lukuja%20suuremmasta%20pienemp%C3%A4%C3%A4n%3A%0Afor%20i%20in%20range%285,%200,%20-1%29%3A%0A%20%20%20%20print%28i%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Sarjasta voidaan myös muodostaa tarvittaessa lista. Tämä onnistuu funktiolla list:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lista = list(range(1, 20, 2))
    print(lista)

    # Sarja voidaan myös tallentaa muuttujaan
    kympista_alas = range(10, 0, -1)
    print(kympista_alas)

    lista2 = list(kympista_alas)
    print(lista2)
    ```

    Ohjelma tulostaa:
    ```
    [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    range(10, 0, -1)
    [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lista%20%3D%20list%28range%281,%2020,%202%29%29%0Aprint%28lista%29%0A%0A%23%20Sarja%20voidaan%20my%C3%B6s%20tallentaa%20muuttujaan%0Akympista_alas%20%3D%20range%2810,%200,%20-1%29%0Aprint%28kympista_alas%29%0A%0Alista2%20%3D%20list%28kympista_alas%29%0Aprint%28lista2%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Range on hyödyllinen myös listojen kanssa esimerkiksi silloin, kun haluamme muuttaa listaa. Tarkastellaan seuraavaa esimerkkiä:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lista = [1, 2, 3, 4]

    print("Lista ennen:", lista)

    for alkio in lista:
        alkio += 1

    print("Lista jälkeen:", lista)
    ```

    Ohjelma tulostaa:
    ```
    Lista ennen: [1, 2, 3, 4]
    Lista jälkeen: [1, 2, 3, 4]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lista%20%3D%20%5B1,%202,%203,%204%5D%0A%0Aprint%28%22Lista%20ennen%3A%22,%20lista%29%0A%0Afor%20alkio%20in%20lista%3A%0A%20%20%20%20alkio%20%2B%3D%201%0A%0Aprint%28%22Lista%20j%C3%A4lkeen%3A%22,%20lista%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Listan tulostus lopussa paljastaa, ettei silmukkamuuttujaan sijoitus muuta alkuperäistä listaa. Tämä johtuu siitä, että muuttujaan kopioidaan listan arvot yksitellen, mutta kopioinnin jälkeen muutujalla ei enää ole "yhteyttä" listaan. Silmukkamuuttujan arvon muuttaminen ei siis välity listan arvoihin mitenkään.

Listan indekseihin voidaan kuitenkin viitata hyödyntämällä range-funktiota ja tietoa listan pituudesta. Muodostetaan siis range-funktiolla kaikki listan indeksit nollasta pituus miinus yhteen asti ja käydään ne läpi for-silmukassa:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lista = [1, 2, 3, 4]

    print("Lista ennen:", lista)

    # Jos rangesta jättää alkuparametrin pois,
    # python olettaa, että se on nolla
    # range(4) on siis sama kuin range(0, 4)
    for i in range(len(lista)):
        lista[i] += 1

    print("Lista jälkeen:", lista)
    ```

    Ohjelma tulostaa:
    ```
    Lista ennen: [1, 2, 3, 4]
    Lista jälkeen: [2, 3, 4, 5]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lista%20%3D%20%5B1,%202,%203,%204%5D%0A%0Aprint%28%22Lista%20ennen%3A%22,%20lista%29%0A%0A%23%20Jos%20rangesta%20j%C3%A4tt%C3%A4%C3%A4%20alkuparametrin%20pois,%0A%23%20python%20olettaa,%20ett%C3%A4%20se%20on%20nolla%0A%23%20range%284%29%20on%20siis%20sama%20kuin%20range%280,%204%29%0Afor%20i%20in%20range%28len%28lista%29%29%3A%0A%20%20%20%20lista%5Bi%5D%20%2B%3D%201%0A%0Aprint%28%22Lista%20j%C3%A4lkeen%3A%22,%20lista%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Tarkastellaan vielä toista esimerkkiä:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lista = list(range(1,10))

    print("Lista ennen:", lista)

    # Muutetaan kaikki listan parilliset arvot
    # negatiivisiksi
    for i in range(len(lista)):
        if lista[i] % 2 == 0:
            lista[i] = -lista[i]

    print("Lista jälkeen:", lista)
    ```

    Ohjelma tulostaa:
    ```
    Lista ennen: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    Lista jälkeen: [1, -2, 3, -4, 5, -6, 7, -8, 9]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lista%20%3D%20list%28range%281,10%29%29%0A%0Aprint%28%22Lista%20ennen%3A%22,%20lista%29%0A%0A%23%20Muutetaan%20kaikki%20listan%20parilliset%20arvot%0A%23%20negatiivisiksi%0Afor%20i%20in%20range%28len%28lista%29%29%3A%0A%20%20%20%20if%20lista%5Bi%5D%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20lista%5Bi%5D%20%3D%20-lista%5Bi%5D%0A%0Aprint%28%22Lista%20j%C3%A4lkeen%3A%22,%20lista%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Jos teet loogisen virheen ja käytät suurempaa arvoa kuin listan indeksit, for-lause aiheuttaa virheen:

```python 
kirjaimet = ["a", "b", "c", "d", "e"]
for i in range(0, 6):
    print(kirjaimet[i]*i)
```

Esimerkkisuoritus:

```python 

b
cc
ddd
eeee
ERROR!
Traceback (most recent call last):
  File "<main.py>", line 3, in <module>
IndexError: list index out of range
```