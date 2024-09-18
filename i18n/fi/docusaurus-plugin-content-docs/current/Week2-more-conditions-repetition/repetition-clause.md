---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Toistolause
Ehtolauseen lisäksi toinen olennainen kontrollirakenne ohjelmissa on toistolause. Toistolauseen avulla voidaan toistaa jotain toimintoa useita kertoja. Toisto on itse asiassa yksi tärkeimmistä syistä tietokoneiden tehokkuuteen: nykyisetkään suorittimet eivät sinänsä osaa tehdä hirveän monimutkaisia asioita, mutta toistamalla yksinkertaisia operaatioita useita kertoja nopeasti, voidaan ratkaista hyvinkin monimutkaisia ongelmia.

Aloitetaan toistolauseeseen tutustuminen yksinkertaisen while-silmukan avulla. Seuraavassa ohjelmassa kysytään käyttäjältä lukuja ja tulostetaan niiden neliöitä (luku^2 eli luku * luku) kunnes käyttäjä syöttää nollan. Huomaa, että ohjelman suoritus siis jatkuu "ikuisesti", ellei nollaa syötetä:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # "Ikuinen" silmukka
    while True:
        luku = int(input("Anna luku: "))
    
        if luku == 0:
            # Poistutaan silmukasta
            break

        print("Luvun", luku, "neliö on", luku * luku)

    print("Kiitos ja moi!")
    ```

    Esimerkkisuoritus:
    ``` 
    Anna luku: 5
    Luvun 5 neliö on 25
    Anna luku: 3
    Luvun 3 neliö on 9
    Anna luku: 9
    Luvun 9 neliö on 81
    Anna luku: 2
    Luvun 2 neliö on 4
    Anna luku: 0
    Kiitos ja moi!
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20%22Ikuinen%22%20silmukka%0Awhile%20True%3A%0A%20%20%20%20luku%20%3D%20int%28input%28%22Anna%20luku%3A%20%22%29%29%0A%20%20%20%20%0A%20%20%20%20if%20luku%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20%23%20Poistutaan%20silmukasta%0A%20%20%20%20%20%20%20%20break%0A%0A%20%20%20%20print%28%22Luvun%22,%20luku,%20%22neli%C3%B6%20on%22,%20luku%20*%20luku%29%0A%0Aprint%28%22Kiitos%20ja%20moi!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toistolause muistuttaa syntaksiltaan ehtolausetta. Erotuksena onkin vain se, että toistolausetta seuraavaa lohkoa suoritetaan yhä uudelleen niin kauan kun ehto on tosi:

![](/img/img-fi/w2-2.png)

Toistolauseen sisältä löytyvä **break**-lause päättää välittömästi toiston (eli silmukan suorituksen). Toisto jatkuu break-lauseen jälkeen silmukkalohkoa seuraavasta lauseesta Jos silmukkalohkon jälken ei ole enempää lauseita, ohjelman suoritus päättyy kokonaan.

Aluksi kirjoitamme toistolauseet käyttäen ehtolausekkeena vakioarvoa True. Tämä tarkoittaa, että silmukan sisällä pitää jossain tilanteessa (yleensä sopivan ehdon täyttyessä) suorittaa break-lause, tai silmukan suoritus ei pääty koskaan. "Ikuisen" silmukan saa editorissa katkaistua painamalla **CTRL + C**, ViLLE huolehtii ikuisten silmukoiden katkaisusta automaattisesti.

Tarkastellaan vielä muutamaa esimerkkiä. Ensimmäinen tulostaa lukuja käyttäjän antamasta luvusta alkaen kasvattaen sitä joka kierroksella yhdellä. Ohjelma pysähtyy, kun on tulostettu 10 lukua:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Laskuri muistaa kuinka monta lukua on tulostettu
    laskuri = 0

    luku = int(input("Anna aloitusarvo: "))

    while True:
        print("Luku on nyt", luku)

        # Kasvatetaan laskuria ja lukua yhdellä
        laskuri = laskuri + 1
        luku = luku + 1

        if laskuri == 10:
            break
    ```

    Esimerkkisuoritus:
    ``` 
    Anna aloitusarvo: 301
    Luku on nyt 301
    Luku on nyt 302
    Luku on nyt 303
    Luku on nyt 304
    Luku on nyt 305
    Luku on nyt 306
    Luku on nyt 307
    Luku on nyt 308
    Luku on nyt 309
    Luku on nyt 310
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Laskuri%20muistaa%20kuinka%20monta%20lukua%20on%20tulostettu%0Alaskuri%20%3D%200%0A%0Aluku%20%3D%20int%28input%28%22Anna%20aloitusarvo%3A%20%22%29%29%0A%0Awhile%20True%3A%0A%20%20%20%20print%28%22Luku%20on%20nyt%22,%20luku%29%0A%0A%20%20%20%20%23%20Kasvatetaan%20laskuria%20ja%20lukua%20yhdell%C3%A4%0A%20%20%20%20laskuri%20%3D%20laskuri%20%2B%201%0A%20%20%20%20luku%20%3D%20luku%20%2B%201%0A%0A%20%20%20%20if%20laskuri%20%3D%3D%2010%3A%0A%20%20%20%20%20%20%20%20break&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toinen esimerkkiohjelma kysyy käyttältä yksitellen merkkijonon ja luvun. Ohjelma tulostaa luvun mukaisen määrän merkkijonoja kunnes käyttäjä syöttää tyhjän merkkijonon. Esimerkistä huomataan, että Python sallii merkkijonon kertomisen kokonaisluvulla - esimerkiksi `"A" * 3` tuottaa tulokseksi uuden merkkijonon `"AAA"`.

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    while True:
        jono = input("Anna merkkijono: ")
        if jono == "":
            break

        maara = int(input("Anna määrä: "))

        print(jono * maara)
    ```

    Esimerkkisuoritus:
    ```python 
    Anna merkkijono: a
    Anna määrä: 5
    aaaaa
    Anna merkkijono: *
    Anna määrä: 20
    ********************
    Anna merkkijono: moi
    Anna määrä: 3
    moimoimoi
    Anna merkkijono:
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=while%20True%3A%0A%20%20%20%20jono%20%3D%20input%28%22Anna%20merkkijono%3A%20%22%29%0A%20%20%20%20if%20jono%20%3D%3D%20%22%22%3A%0A%20%20%20%20%20%20%20%20break%0A%0A%20%20%20%20maara%20%3D%20int%28input%28%22Anna%20m%C3%A4%C3%A4r%C3%A4%3A%20%22%29%29%0A%0A%20%20%20%20print%28jono%20*%20maara%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>