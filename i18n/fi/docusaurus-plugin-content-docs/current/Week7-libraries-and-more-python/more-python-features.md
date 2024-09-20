---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Lisää Pythonin ominaisuuksia, osa 1

Käydään vielä kurssin lopuksi läpi eräitä Pythonin hyödyllisiä ominaisuuksia. Vaikkei tällaisia ominaisuuksia itse ohjelmissaan käyttäisikään, on niistä kuitenkin hyödyllistä tietää. Tässä osiossa esitettyjen ominaisuuksien lisäksi Pythonista kiinnostuneen kannattaa tutustua esimerkiksi seuraaviin asioihin:

- Omat luokat ja oliot
- Funktionaalinen ohjelmointi: map, filter, reduce
- Generaattorifunktiot
- Funktiot funktioiden parametreina
- Säännölliset lausekkeet
- Operaattoreiden ylikuormitus
- Ulkoiset kirjastot
- pip

Osa yllä mainituista asioista käsitellään Java-kielellä Olio-ohjelmoinnin jatkokurssilla.

## Listakoosteet

Listakooste on tekniikka, jonka avulla voidaan yhdellä lausekkeella luoda olemassa olevasta sarjasta (esimerkiksi lista, merkkijono, sanakirja tai tuple) uusi lista. Koosteen syntaksi on

`[<lauseke> for <alkio> in <sarja>]`

Esimerkiksi seuraavassa luodaan uusi lista, jolla alkuperäisen listan alkiot on kerrottu kolmella:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lukulista = [1, 3, 2, 4, 6, 5]

    # Luodaan listakoosteella uusi lista
    lista2 = [alkio * 3 for alkio in lukulista]

    print(lista2)
    ```

    Ohjelma tulostaa:
    ```
    [3, 9, 6, 12, 18, 15]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lukulista%20%3D%20%5B1,%203,%202,%204,%206,%205%5D%0A%0A%23%20Luodaan%20listakoosteella%20uusi%20lista%0Alista2%20%3D%20%5Balkio%20*%203%20for%20alkio%20in%20lukulista%5D%0A%0Aprint%28lista2%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Käytännössä lopputulos vastaa siis tilannetta, jossa luomme uuden tyhjän listan ja lisäämme sinne alkiot esimerkiksi for-silmukan avulla:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lukulista = [1, 3, 2, 4, 6, 5]

    lista2 = []
    for alkio in lukulista:
        lista2.append(alkio * 3)

    print(lista2)
    ```

    Ohjelma tulostaa:
    ```
    [3, 9, 6, 12, 18, 15]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lukulista%20%3D%20%5B1,%203,%202,%204,%206,%205%5D%0A%0Alista2%20%3D%20%5B%5D%0Afor%20alkio%20in%20lukulista%3A%0A%20%20%20%20lista2.append%28alkio%20*%203%29%0A%0Aprint%28lista2%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Listakooste on kätevä esimerkiksi silloin, kun halutaan muodostaa merkkijonolistasta lukutyyppinen lista (tai päinvastoin):

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def lukulistaksi(lista: list) -> list:
        return [int(alkio) for alkio in lista]

    def merkkilistaksi(lista: list) -> list:
        return [str(alkio) for alkio in lista]


    # Testataan lukulistalla
    luvut = list(range(1,10))
    print(luvut)
    mluvut = merkkilistaksi(luvut)
    print(mluvut)

    # Testataan merkkijonolistalla
    merkit = "1 2 3 22 11 44 5 3 2 9".split()
    print(merkit)
    luvut = lukulistaksi(merkit)
    print(luvut)
    ```

    Ohjelma tulostaa:
    ```
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    ['1', '2', '3', '22', '11', '44', '5', '3', '2', '9']
    [1, 2, 3, 22, 11, 44, 5, 3, 2, 9]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20lukulistaksi%28lista%3A%20list%29%20-%3E%20list%3A%0A%20%20%20%20return%20%5Bint%28alkio%29%20for%20alkio%20in%20lista%5D%0A%0Adef%20merkkilistaksi%28lista%3A%20list%29%20-%3E%20list%3A%0A%20%20%20%20return%20%5Bstr%28alkio%29%20for%20alkio%20in%20lista%5D%0A%0A%0A%23%20Testataan%20lukulistalla%0Aluvut%20%3D%20list%28range%281,10%29%29%0Aprint%28luvut%29%0Amluvut%20%3D%20merkkilistaksi%28luvut%29%0Aprint%28mluvut%29%0A%0A%23%20Testataan%20merkkijonolistalla%0Amerkit%20%3D%20%221%202%203%2022%2011%2044%205%203%202%209%22.split%28%29%0Aprint%28merkit%29%0Aluvut%20%3D%20lukulistaksi%28merkit%29%0Aprint%28luvut%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Listakoosteeseen voidaan myös yhdistää ehto. Ehdon avulla voidaan rajata alkiot, jotka uudelle listalle tulevat mukaan. Ehtolauseke kirjoitetaan koosteen loppuun alla olevan esimerkin mukaisesti:

`[<lauseke> for <alkio> in <sarja> if <ehtolauseke>]`

Katsotaan ensin esimerkki lausekkeesta, joka poimii uudelle listalle ainoastaan positiiviset alkiot:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lukulista = [2, -2, 3, 4, -1, -5, 11, -3, -9, 2, 3]

    positiiviset = [alkio for alkio in lukulista if alkio > 0]

    print(positiiviset)
    ```

    Ohjelma tulostaa:
    ```
    [2, 3, 4, 11, 2, 3]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lukulista%20%3D%20%5B2,%20-2,%203,%204,%20-1,%20-5,%2011,%20-3,%20-9,%202,%203%5D%0A%0Apositiiviset%20%3D%20%5Balkio%20for%20alkio%20in%20lukulista%20if%20alkio%20%3E%200%5D%0A%0Aprint%28positiiviset%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toinen esimerkki, jossa kokonaislukulistalta muunnetaan merkkijonoksi ainostaan parilliset luvut:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def parilliset_merkeiksi(lukulista: list) -> list:
        return [str(luku) for luku in lukulista if luku % 2 == 0]

    luvut = list(range(1,15))
    print(luvut)

    mluvut = parilliset_merkeiksi(luvut)
    print(mluvut)
    ```

    Ohjelma tulostaa:
    ``` 
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    ['2', '4', '6', '8', '10', '12', '14']
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20parilliset_merkeiksi%28lukulista%3A%20list%29%20-%3E%20list%3A%0A%20%20%20%20return%20%5Bstr%28luku%29%20for%20luku%20in%20lukulista%20if%20luku%20%25%202%20%3D%3D%200%5D%0A%0Aluvut%20%3D%20list%28range%281,15%29%29%0Aprint%28luvut%29%0A%0Amluvut%20%3D%20parilliset_merkeiksi%28luvut%29%0Aprint%28mluvut%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>