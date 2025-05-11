---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Merkkijonometodit

Merkkijonojen käsittelyä varten Pythonista löytyy erilaisia käteviä valmiita metodeita. Tarkastellaan tässä muutamaa niistä.

Metodilla tarkoitetaan funktiota, joka kohdistuu johonkin olioon. Merkkijonometodien tapauksessa olio on alkuperäinen merkkijono. Metodit erotetaan oliosta (eli yleensä merkkijonon sisältävästä muuttujasta) pisteen avulla.

## Osajonojen etsiminen

Merkkijonosta voidaan etsiä toinen osajono metodin **find** avulla. Metodi palauttaa sen indeksin, josta ensimmäinen osajonon esiintymä löytyy tai -1, jos osajonoa ei löydy.

Metodikutsu kirjoitetaan muodossa

`merkkijono.find(osajono)`

Esimerkiksi metodikutsu

`"abcabc".find("bc")`

palauttaisi 1, koska ensimmäinen osajonon "bc" esiintymä merkkijonossa "abcabc" alkaa indeksin 1 kohdalta.

Esimerkkiohjelma kertoo, mistä indeksistä annettu sana lauseesta löytyy:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    while True:
        lause = input("Lause (tyhjä lopettaa): ")

        if lause == "":
            break

        sana = input("Sana: ")
        
        ind = lause.find(sana)

        if ind < 0:
            print("Sanaa ei löydy lauseesta")
        else:
            print("Sana löytyy indeksin", ind, "kohdalta")
    ```

    Esimerkkisuoritus:
    ``` 
    Lause (tyhjä lopettaa): Moi kaikki
    Sana: kaikki
    Sana löytyy indeksin 4 kohdalta
    Lause (tyhjä lopettaa): Hei sun heissulivei
    Sana: heissulivei
    Sana löytyy indeksin 8 kohdalta
    Lause (tyhjä lopettaa): Joka toiselle kaivaa, joka toiselle ei
    Sana: joka
    Sana löytyy indeksin 22 kohdalta
    Lause (tyhjä lopettaa): Hellurei ja herkät tunteet
    Sana: JA
    Sanaa ei löydy lauseesta
    Lause (tyhjä lopettaa):
    Sana:
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=while%20True%3A%0A%20%20%20%20lause%20%3D%20input%28%22Lause%20%28tyhj%C3%A4%20lopettaa%29%3A%20%22%29%0A%0A%20%20%20%20if%20lause%20%3D%3D%20%22%22%3A%0A%20%20%20%20%20%20%20%20break%0A%0A%20%20%20%20sana%20%3D%20input%28%22Sana%3A%20%22%29%0A%20%20%20%20%0A%20%20%20%20ind%20%3D%20lause.find%28sana%29%0A%0A%20%20%20%20if%20ind%20%3C%200%3A%0A%20%20%20%20%20%20%20%20print%28%22Sanaa%20ei%20l%C3%B6ydy%20lauseesta%22%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28%22Sana%20l%C3%B6ytyy%20indeksin%22,%20ind,%20%22kohdalta%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Huomaa, että jos osajonon tarkan sijainnin sijasta haluamme kuitenkin ainoastaan tietää, löytyykö osajonoa ollenkaan, on helpointa käyttää operaattoria **in**. Lauseke

osajono `in` merkkijono

palauttaa `True`, jos osajono esiintyy merkkijonossa. Seuraava esimerkki havainnollistaa sen käyttöä:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    beatles = "Paul John George Ringo"
    print("Paul" in beatles)
    print("John" in beatles)
    print("Pete Best" in beatles)

    if "Ringo" in beatles:
        print("On Ringokin!")

    if "Elton John" in beatles:
        print("Oliko näin?")
    ```

    Ohjelma tulostaa:
    ```
    True
    True
    False
    On Ringokin!
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=beatles%20%3D%20%22Paul%20John%20George%20Ringo%22%0Aprint%28%22Paul%22%20in%20beatles%29%0Aprint%28%22John%22%20in%20beatles%29%0Aprint%28%22Pete%20Best%22%20in%20beatles%29%0A%0Aif%20%22Ringo%22%20in%20beatles%3A%0A%20%20%20%20print%28%22On%20Ringokin!%22%29%0A%0Aif%20%22Elton%20John%22%20in%20beatles%3A%0A%20%20%20%20print%28%22Oliko%20n%C3%A4in%3F%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Osajonojen laskeminen

Osajonojen esiintymien määrä merkkijonossa voidaan laskea metodin **count** avulla. Syntaksi on samantapainen kuin metodin count osalta:

`merkkijono.count(osajono)`

Metodi palauttaa joko nollan tai positiviisen kokonaisluvun sen mukaan, kuinka monta kertaa annettu osajono esiintyy annetussa merkkijonossa.

Esimerkiksi metodikutsu

`"abcabcabc".count("ab")`

palauttaisi arvon 3, koska osajono "ab" esiintyy kolme kertaa merkkijonossa "abcabcabc".
Huomaa, että vain kokonaiset osajonot lasketaan - esimerkiksi merkkijonosta "aaaa" löytyy vain kaksi osajonoa "aa".

Esimerkkiohjelma laskee a-kirjaimien määrän lauseessa:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    while True:
        lause = input("Anna lause, tyhjä lopettaa: ")

        if lause == "":
            break

        print("Lauseessa on", lause.count("a"), "a-kirjainta")
    ```

    Esimerkkisuoritus:
    ```
    Anna lause, tyhjä lopettaa: hei
    Lauseessa on 0 a-kirjainta
    Anna lause, tyhjä lopettaa: Tämä on testilause
    Lauseessa on 1 a-kirjainta
    Anna lause, tyhjä lopettaa: Lallatilaa, hauska täälä on asustaa
    Lauseessa on 9 a-kirjainta
    Anna lause, tyhjä lopettaa:
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=while%20True%3A%0A%20%20%20%20lause%20%3D%20input%28%22Anna%20lause,%20tyhj%C3%A4%20lopettaa%3A%20%22%29%0A%0A%20%20%20%20if%20lause%20%3D%3D%20%22%22%3A%0A%20%20%20%20%20%20%20%20break%0A%0A%20%20%20%20print%28%22Lauseessa%20on%22,%20lause.count%28%22a%22%29,%20%22a-kirjainta%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Osajonojen korvaaminen

Viimeisenä esiteltävänä metodina käsitellään osajonon korvaaminen toisella osajonolla. Käytettävän replace-metodin syntaksi näyttää seuraavalta:

`merkkijono.replace(osajono1, osajono2)`

Metodi palauttaa uuden merkkijonon, jossa kaikki osajonon 1 esiintymät on korvattu osajonolla 2. Esimerkiksi metodikutsu

`"abcabc".replace("a", "xx")`

palauttaisi uuden merkkijonon "xxbcxxbc".

Huomaa, että metodi ei muokkaa olemassaolevaa merkkijonoa vaan luo kokonaan uuden merkkijonon. Seuraava esimerkki havainnnolistaa asiaa:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lause = "Hei vaan, onpa hauska tavata."
    lause2 = lause.replace("Hei", "Moikka")

    print(lause)
    print(lause2)

    # replace on myös kätevä, kun halutaan "poistaa" osajonoja:
    # korvataan osajono tyhjällä merkkijonolla
    lause2 = lause2.replace("onpa", "")

    print(lause2)
    ```

    Ohjelma tulostaa:
    ```
    Hei vaan, onpa hauska tavata.
    Moikka vaan, onpa hauska tavata.
    Moikka vaan,  hauska tavata.
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lause%20%3D%20%22Hei%20vaan,%20onpa%20hauska%20tavata.%22%0Alause2%20%3D%20lause.replace%28%22Hei%22,%20%22Moikka%22%29%0A%0Aprint%28lause%29%0Aprint%28lause2%29%0A%0A%23%20replace%20on%20my%C3%B6s%20k%C3%A4tev%C3%A4,%20kun%20halutaan%20%22poistaa%22%20osajonoja%3A%0A%23%20korvataan%20osajono%20tyhj%C3%A4ll%C3%A4%20merkkijonolla%0Alause2%20%3D%20lause2.replace%28%22onpa%22,%20%22%22%29%0A%0Aprint%28lause2%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Merkkijono metoodit syötteen puhdistamiseen ja koodaamiseen

Suositeltu lähestymistapa käyttäjän syötteelle on niin sanottu sallittujen listaus (allowlist), mikä tarkoittaa, että sovellus hyväksyy vain tietynlaisen käyttäjän syötteen, ja jos syöte ei täytä näitä kriteerejä, se hylätään. Tämä on helppo toteuttaa numeerisille arvoille tai yksittäisille sanoille, jotka käyttäjä syöttää, mutta vapaamuotoisen tekstin (esimerkiksi sosiaalisen median viestin) kohdalla prosessi on monimutkaisempi, koska käyttäjien kirjoittamien merkkien yhdistelmiä on valtavasti. Näissä tapauksissa on kaksi lähestymistapaa: syötteen puhdistaminen (eng. input sanitization) ja syötteen koodaaminen (eng. input encoding, voidaan kutsua output encoding myös). Ensimmäinen keskittyy syötteen puhdistamiseen siten, että kielletyt merkit poistetaan, kun taas jälkimmäinen esittää nämä merkit turvallisella tavalla, jotta niitä voidaan käsitellä tavallisena tekstinä. Hyvä käytäntö on hyödyntää olemassa olevia turvallisia kirjastoja tähän tarkoitukseen. Lisätietoja löydät täältä: https://go.snyk.io/rs/677-THP-415/images/Python_Cheatsheet_whitepaper.pdf ja https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html#validating-free-form-unicode-text (kuvaa myös muita mahdollisia lähestymistapoja tekstin käsittelyyn). 

Havainnollistamistarkoituksessa näytämme, kuinka Pythonin funktiota string.replace, jonka juuri opimme, voidaan soveltaa syötteen puhdistamiseen ja koodaamiseen. Alla olevissa esimerkeissä keskitymme skriptitunnisteisiin, jotka, jos ne välitetään tässä muodossa HTML-koodiin, käsitellään koodina ja ne näyttävät käyttäjän antaman viestin sisältävän hälytyslaatikon. Jos käyttäjä syöttää haitallista koodia, se voidaan injektoida lailliselle verkkosivustolle ja vaarantaa turvallisuuden. Pythonissa alla esitetyt esimerkit eivät aiheuta ongelmia annetuissa käyttötapauksissa, keskitymme vain siihen, miten syöte voidaan puhdistaa ja koodata.

Syötteen puhdistaminen: 

```python 
viesti = input("Kirjoita viestisi tähän: ")
output = viesti.replace("<", "").replace(">", "")
print(output)
 ```
Esimerkkisuoritus:

```python
Kirjoita viestisi tähän: <script>alert('Oops!')</script>
scriptalert('Oops!')/script
 ```
Koodaus:

```python 
viesti = input("Kirjoita viestisi tähän: ")
#Tämä on ennalta määritetty HTML-tyyli, joka koodaa < ja > niin, että selaimet käsittelevät ne tavallisena tekstinä:
output = viesti.replace("<", "&lt;").replace(">", "&gt;")
print(output)
 ```
Esimerkkisuoritus:

```python
Kirjoita viestisi tähän: <script>alert('Oops!')</script>
&lt;script&gt;alert('Oops!')&lt;/script&gt;
 ```