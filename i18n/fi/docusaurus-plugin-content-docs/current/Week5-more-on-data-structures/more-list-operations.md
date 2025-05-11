---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Lisää listaoperaatioita

Monet merkkijonoista tutut operaatiot toimivat myös listoille. Tarkastellaan seuraavaksi eräitä käyttökelpoisia operaatioita.

Koska lista on mutatoituva (eli muuttuva) tietorakenne, sen alkioiden järjestystä voidaan vaihtaa. Listan alkiot voidaan järjestää luonnolliseen järjestykseen pienimmästä suurimpaan metodin **sort** avulla:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lottonumerot = [17, 5, 4, 22, 1, 19, 9]

    # Järjestetään numerot
    lottonumerot.sort()

    print(lottonumerot)
    ```

    Ohjelma tulostaa:
    ``` 
    [1, 4, 5, 9, 17, 19, 22]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lottonumerot%20%3D%20%5B17,%205,%204,%2022,%201,%2019,%209%5D%0A%0A%23%20J%C3%A4rjestet%C3%A4%C3%A4n%20numerot%0Alottonumerot.sort%28%29%0A%0Aprint%28lottonumerot%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Jos halutaan säilyttää alkuperäisen listan alkioiden järjestys, voidaan listasta muodostaa järjestetty kopio funktion **sorted** avulla. Huomaa ero edelliseen: sort on metodi ja sorted funktio, joten niitä kutsutaan eri tavoilla.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lottonumerot = [17, 5, 4, 22, 1, 19, 9]

    # Tehdään järjestetty kopio
    # Tämä ei vaikuta alkuperäiseen listaan
    jarjestetty = sorted(lottonumerot)

    print("Alkuperäinen:", lottonumerot)
    print("Järjestetty:", jarjestetty)
    ```

    Ohjelma tulostaa:
    ```
    Alkuperäinen: [17, 5, 4, 22, 1, 19, 9]
    Järjestetty: [1, 4, 5, 9, 17, 19, 22]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lottonumerot%20%3D%20%5B17,%205,%204,%2022,%201,%2019,%209%5D%0A%0A%23%20Tehd%C3%A4%C3%A4n%20j%C3%A4rjestetty%20kopio%0A%23%20T%C3%A4m%C3%A4%20ei%20vaikuta%20alkuper%C3%A4iseen%20listaan%0Ajarjestetty%20%3D%20sorted%28lottonumerot%29%0A%0Aprint%28%22Alkuper%C3%A4inen%3A%22,%20lottonumerot%29%0Aprint%28%22J%C3%A4rjestetty%3A%22,%20jarjestetty%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Listan alkioiden järjestyksen saa käännettyä päinvastaiseksi metodilla reverse:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luvut = list(range(1,5))

    # lisätään toinen lista +-operaattorilla
    luvut += list(range(20,25))

    print(luvut)

    # Käännetään...
    luvut.reverse()

    print(luvut)
    ```

    Ohjelma tulostaa:
    ```
    [1, 2, 3, 4, 20, 21, 22, 23, 24]
    [24, 23, 22, 21, 20, 4, 3, 2, 1]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luvut%20%3D%20list%28range%281,5%29%29%0A%0A%23%20lis%C3%A4t%C3%A4%C3%A4n%20toinen%20lista%20%2B-operaattorilla%0Aluvut%20%2B%3D%20list%28range%2820,25%29%29%0A%0Aprint%28luvut%29%0A%0A%23%20K%C3%A4%C3%A4nnet%C3%A4%C3%A4n...%0Aluvut.reverse%28%29%0A%0Aprint%28luvut%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Listasta voidaan poimia **osalista** samalla tavalla kuin osajono merkkijonosta:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lista = list(range(10))

    print("Koko lista:", lista)

    print("Eka puolikas:", lista[ : 5])
    print("Toka puolikas:", lista[5 : ])
    print("Pala keskeltä:", lista[4 : 8])
    ```

    Ohjelma tulostaa:
    ``` 
    Koko lista: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Eka puolikas: [0, 1, 2, 3, 4]
    Toka puolikas: [5, 6, 7, 8, 9]
    Pala keskeltä: [4, 5, 6, 7]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lista%20%3D%20list%28range%2810%29%29%0A%0Aprint%28%22Koko%20lista%3A%22,%20lista%29%0A%0Aprint%28%22Eka%20puolikas%3A%22,%20lista%5B%20%3A%205%5D%29%0Aprint%28%22Toka%20puolikas%3A%22,%20lista%5B5%20%3A%20%5D%29%0Aprint%28%22Pala%20keskelt%C3%A4%3A%22,%20lista%5B4%20%3A%208%5D%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Koko listasta saadaan kopio (eli oikeastaan osalista alkuperäisen listan alusta loppuun) jättämällä pois sekä alku- että loppuindeksi. Tämä on usein näppärä operaatio, kun halutaan käsitellä listan alkioita mutta samalla säilyttää alkuperäiset arvot ja järjestys:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lista = list(range(10))

    # Kopioidaan koko lista
    kopio = lista[:]

    kopio.reverse()
    kopio[0] = 1000
    kopio[-1] = -10000

    print("Alkuperäinen:", lista)
    print("Kopio: ", kopio)
    ```

    Ohjelma tulostaa:
    ``` 
    Alkuperäinen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    Kopio:  [1000, 8, 7, 6, 5, 4, 3, 2, 1, -10000]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lista%20%3D%20list%28range%2810%29%29%0A%0A%23%20Kopioidaan%20koko%20lista%0Akopio%20%3D%20lista%5B%3A%5D%0A%0Akopio.reverse%28%29%0Akopio%5B0%5D%20%3D%201000%0Akopio%5B-1%5D%20%3D%20-10000%0A%0Aprint%28%22Alkuper%C3%A4inen%3A%22,%20lista%29%0Aprint%28%22Kopio%3A%20%22,%20kopio%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Listan alkion esiintymää voidaan tarkastella **in**-operaattorin avulla. Alkion indeksin saa selville metodin **index** avulla. Huomaa, että vaikka **index** toimii myös merkkijonojen kanssa, jostain syystä **find**-metodi ei toimi listojen kanssa. Huomaa myös, että toisin **kuin find**-metodi, index antaa virheen jos yrität hakea sellaisen alkion esiintymää, joka ei ole listalla. Ennen **index**-metodin käyttöä on siis hyvä tarkastaa alkion esiintymä **in**-operaattorilla.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    kakkosen_potenssit = [1, 2, 4, 8, 16, 32, 64, 128, 256]

    for i in range(1, 10):
        if i in kakkosen_potenssit:
            print(i, "on kakkosen potenssi")
        else:
            print(i, "ei ole kakkosen potenssi")

    print("4 löytyy kohdasta", kakkosen_potenssit.index(4))
    print("128 löytyy kohdasta", kakkosen_potenssit.index(128))
    ```

    Ohjelma tulostaa:
    ``` 
    1 on kakkosen potenssi
    2 on kakkosen potenssi
    3 ei ole kakkosen potenssi
    4 on kakkosen potenssi
    5 ei ole kakkosen potenssi
    6 ei ole kakkosen potenssi
    7 ei ole kakkosen potenssi
    8 on kakkosen potenssi
    9 ei ole kakkosen potenssi
    4 löytyy kohdasta 2
    128 löytyy kohdasta 7
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=kakkosen_potenssit%20%3D%20%5B1,%202,%204,%208,%2016,%2032,%2064,%20128,%20256%5D%0A%0Afor%20i%20in%20range%281,%2010%29%3A%0A%20%20%20%20if%20i%20in%20kakkosen_potenssit%3A%0A%20%20%20%20%20%20%20%20print%28i,%20%22on%20kakkosen%20potenssi%22%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28i,%20%22ei%20ole%20kakkosen%20potenssi%22%29%0A%0Aprint%28%224%20l%C3%B6ytyy%20kohdasta%22,%20kakkosen_potenssit.index%284%29%29%0Aprint%28%22128%20l%C3%B6ytyy%20kohdasta%22,%20kakkosen_potenssit.index%28128%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Näppäriä funktioita listojen käsittelyyn ovat lisäksi ainakin min, max ja sum, jotka palauttavat listan pienimmän tai suurimman alkion tai listan kaikkien alkioiden summan. Seuraava esimerkki havainnollistaa funktioiden käyttöä:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    tulokset = [10, 4, 12, 3, 16, 7, 9, 7, 13]

    print("Suurin arvo:", max(tulokset))
    print("Pienin arvo:", min(tulokset))
    print("Summa:", sum(tulokset))
    print("Keskiarvo:", sum(tulokset) / len(tulokset))
    ```

    Ohjelma tulostaa:
    ``` 
    Suurin arvo: 16
    Pienin arvo: 3
    Summa: 81
    Keskiarvo: 9.0
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=tulokset%20%3D%20%5B10,%204,%2012,%203,%2016,%207,%209,%207,%2013%5D%0A%0Aprint%28%22Suurin%20arvo%3A%22,%20max%28tulokset%29%29%0Aprint%28%22Pienin%20arvo%3A%22,%20min%28tulokset%29%29%0Aprint%28%22Summa%3A%22,%20sum%28tulokset%29%29%0Aprint%28%22Keskiarvo%3A%22,%20sum%28tulokset%29%20/%20len%28tulokset%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Sallittujen listojen käyttäminen käyttäjän syötteen validointiin

Tällaisia tietorakenteita kuten listoja voidaan käyttää tekniikan nimeltä sallittujen lista (allowlist) toteuttamiseen, jolloin sovellus tarkistaa, että käyttäjän syöte on sallittujen arvojen joukossa. Tässä on esimerkki:

```python 
täytteet = ["suklaa", "mansikka", "vanilja", "pähkinä", "keksi"]

while True:
    käyttäjän_täyte = input("Valitse jäätelön täyte (suklaa, mansikka, vanilja, pähkinä, keksi): ")
    if käyttäjän_täyte in täytteet:
        print(f"Valitsit täytteen: {käyttäjän_täyte}")
        break
    else:
        print("Virheellinen valinta, yritä uudelleen.")

print("Kiitos valinnastasi! Aloitamme jäätelösi valmistuksen...")
 ```
Esimerkkisuoritus:

```python 
Valitse jäätelön täyte (suklaa, mansikka, vanilja, pähkinä, keksi): mango
Virheellinen valinta, yritä uudelleen.
Valitse jäätelön täyte (suklaa, mansikka, vanilja, pähkinä, keksi): mansikka
Valitsit täytteen: mansikka
Kiitos valinnastasi! Aloitamme jäätelösi valmistuksen...
 ```

Yllä olevassa koodissa tarkistamme, että käyttäjä valitsee olemassa olevan jäätelön täytteen, jotta syöte käsitellään oikein. Pyydämme valitsemaan uudelleen, jos syöte ei täytä kriteerejä. Tämä on myös käyttäjäystävällinen lähestymistapa. Täältä voit lukea lisää sallittujen listasta: https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html#allowlist-vs-denylist