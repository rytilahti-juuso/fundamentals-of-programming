---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Johdatus listoihin

Muuttujat ovat olennaisen tärkeitä ohjelmissa tiedon väliaikaiseen tallentamiseen. Merkkijonot, luvut ja totuusarvot sopivat hyvin monenlaisen tiedon tallentamiseen, mutta ovat pelkästään riittämättömiä, jos tietoa on hyvin paljon. Ajatellaan vaikka tilannetta, jossa meidän pitäisi tallentaa 10 000 riviä tekstimuotoista dataa käsiteltäväksi: kymmenen tuhannen erillisen muuttujan asettaminen ja käsittely ei olisi käytännössä mahdollista.

Kun tietoa on paljon, käytetään ohjelmoinnissa yleensä **tietorakenteita**. Tietorakenteissa on tyypillistä, että tieto on jotenkin rinnasteista: esimerkiksi edellä mainitut 10 000 riviä tekstiä tai vaikkapa miljoona lukua.

Aloitetaan tietorakenteisiin tutustuminen **listoista**. Lista muodostuu peräkkäisistä alkioista. Alkio tarkoittaa siis yhtä listaan tallennettua tietoyksikköä eli oliota - esimerkiksi yksittäistä lukua, merkkijonoa, totuusarvoa tai vaikkapa toista listaa.

Lista on Pythonissa **dynaaminen** tietorakenne. Dynaamisuus tarkoittaa, että listan koko voi muuttua sen alustuksen jälkeen: listaan voi siis lisätä uusia alkioita ja vanhoja voi poistaa. Lisäksi listan alkioita voi korvata toisilla alkioilla.

Pythonissa listan voi luoda kirjoittamalla halutut alkiot hakasulkeiden sisälle. Yleensä listaviittaus tallennetaan johonkin muuttujaan, jolloin listaan voi viitata luomisen jälkeenkin. Syntaksi muistuttaa minkä tahansa muuttujan luomista:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Lista, jossa on kokonaislukuja
    lottonumerot = [2, 15, 8, 32, 37, 6, 9]

    # Lista, jossa on liukulukuja
    lampotilat = [11.5, 14.25, 18.5, 11.05, 5.5, -2.0, -5.75]

    # Lista, jossa on merkkijonoja
    veljenpojat = ["Tupu", "Hupu", "Lupu"]

    # Python osaa tulostaa listan luettavassa muodossa
    print(lottonumerot)
    print(lampotilat)
    print(veljenpojat)
    ```

    Ohjelma tulostaa:
    ``` 
    [2, 15, 8, 32, 37, 6, 9]
    [11.5, 14.25, 18.5, 11.05, 5.5, -2.0, -5.75]
    ['Tupu', 'Hupu', 'Lupu']
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Lista,%20jossa%20on%20kokonaislukuja%0Alottonumerot%20%3D%20%5B2,%2015,%208,%2032,%2037,%206,%209%5D%0A%0A%23%20Lista,%20jossa%20on%20liukulukuja%0Alampotilat%20%3D%20%5B11.5,%2014.25,%2018.5,%2011.05,%205.5,%20-2.0,%20-5.75%5D%0A%0A%23%20Lista,%20jossa%20on%20merkkijonoja%0Aveljenpojat%20%3D%20%5B%22Tupu%22,%20%22Hupu%22,%20%22Lupu%22%5D%0A%0A%23%20Python%20osaa%20tulostaa%20listan%20luettavassa%20muodossa%0Aprint%28lottonumerot%29%0Aprint%28lampotilat%29%0Aprint%28veljenpojat%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Listan alkioiden käsittely

Listan alkioihin viitataan samalla tavalla kuin merkkijonon merkkeihin: hakasulkunotaatiolla ja indeksien avulla. Myös listan alkioiden indeksointi alkaa nollasta. Listan pituuden saa totutusti palautettua len-funktiolla.

Esimerkiksi:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Lista, jossa on kokonaislukuja
    lottonumerot = [2, 15, 8, 32, 37, 6, 9]

    # Tulostetaan listan eka alkio
    print("Eka alkio:", lottonumerot[0])

    # Listan viimeisen alkion saa taas selville
    # joko kaavalla pituus - 1 tai negatiivisella indeksillä
    pituus = len(lottonumerot)

    print("Listan pituus:", pituus)
    print("Viimeinen alkio:", lottonumerot[len(lottonumerot) - 1])
    print("Myös viimeinen alkio:", lottonumerot[-1])
    ```

    Ohjelma tulostaa:
    ``` 
    Eka alkio: 2
    Listan pituus: 7
    Viimeinen alkio: 9
    Myös viimeinen alkio: 9
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Lista,%20jossa%20on%20kokonaislukuja%0Alottonumerot%20%3D%20%5B2,%2015,%208,%2032,%2037,%206,%209%5D%0A%0A%23%20Tulostetaan%20listan%20eka%20alkio%0Aprint%28%22Eka%20alkio%3A%22,%20lottonumerot%5B0%5D%29%0A%0A%23%20Listan%20viimeisen%20alkion%20saa%20taas%20selville%0A%23%20joko%20kaavalla%20pituus%20-%201%20tai%20negatiivisella%20indeksill%C3%A4%0Apituus%20%3D%20len%28lottonumerot%29%0A%0Aprint%28%22Listan%20pituus%3A%22,%20pituus%29%0Aprint%28%22Viimeinen%20alkio%3A%22,%20lottonumerot%5Blen%28lottonumerot%29%20-%201%5D%29%0Aprint%28%22My%C3%B6s%20viimeinen%20alkio%3A%22,%20lottonumerot%5B-1%5D%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Itse asiassa merkkijonot muistuttavat muutenkin listoja, molemmat tukevat useita samoja operaatioita. Suurin ero on, että merkkijonot ovat **mutatoitumattomia** eli muuttumattomia: luomisen jälkeen merkkijonon sisältöä ei voi muuttaa. Listan alkoiden arvoja sen sijaan voi muuttaa:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luvut = [1,2,3,4,5]

    # Listaa voi muuttaa
    luvut[0] = 10

    print("Lista nyt:", luvut)
    ```
    Ohjelma tulostaa:
    ```
    Lista nyt: [10, 2, 3, 4, 5]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luvut%20%3D%20%5B1,2,3,4,5%5D%0A%0A%23%20Listaa%20voi%20muuttaa%0Aluvut%5B0%5D%20%3D%2010%0A%0Aprint%28%22Lista%20nyt%3A%22,%20luvut%29%0A&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Merkkijonon muutosyritys sen sijaan johtaa virheilmoitukseen:

```python 
merkkijono = "Moikka!"

# Merkkijonon muutosyritys johtaa virheeseen...
merkkijono[0] = "m"
 ```

Ohjelma tulostaa:
```
Traceback (most recent call last):
  File "merkkijono.py", line 10, in <module>
    merkkijono[0] = "m"
TypeError: 'str' object does not support item assignment
 ```

Listalle voi lisätä uuden alkion **append**-metodilla. Uusi alkio lisätään listan viimeiseksi alkioksi, samalla listan pituus kasvaa yhdellä

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Tyhjän listan voi luoda antamalla pelkät hakasulkeet
    lista = []

    # Lisätään listalle alkioita
    lista.append(10)
    lista.append(5)
    lista.append(20)
    lista.append(55)

    print(lista)

    # Lisätään vielä pari. 
    lista.append(1 + 1)
    lista.append(10 + 10 + 10)
    lista.append(len(lista))

    print(lista)
    ```

    Ohjelma tulostaa:
    ``` 
    [10, 5, 20, 55]
    [10, 5, 20, 55, 2, 30, 6]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Tyhj%C3%A4n%20listan%20voi%20luoda%20antamalla%20pelk%C3%A4t%20hakasulkeet%0Alista%20%3D%20%5B%5D%0A%0A%23%20Lis%C3%A4t%C3%A4%C3%A4n%20listalle%20alkioita%0Alista.append%2810%29%0Alista.append%285%29%0Alista.append%2820%29%0Alista.append%2855%29%0A%0Aprint%28lista%29%0A%0A%23%20Lis%C3%A4t%C3%A4%C3%A4n%20viel%C3%A4%20pari.%20%0Alista.append%281%20%2B%201%29%0Alista.append%2810%20%2B%2010%20%2B%2010%29%0Alista.append%28len%28lista%29%29%0A%0Aprint%28lista%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Ensi viikolla tutustutaan tarkemmin listan ominaisuuksiin, mm. listan alkioiden läpikäyntiin (eli iterointiin), muihin kuin lukutyyppisiin listoihin sekä alkioiden poistamiseen ja lisäämiseen listan alkuun tai keskelle listaa. Lisäksi keskustellaan listojen käytöistä funktioiden parametreina ja paluuarvoina ja luodaan katsaus erilaisiin hyödyllisiin listametodeihin.