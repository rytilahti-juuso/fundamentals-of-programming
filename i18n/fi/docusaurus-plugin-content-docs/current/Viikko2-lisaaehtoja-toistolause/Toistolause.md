---
sidebar_position: 5
---

# Toistolause
Ehtolauseen lisäksi toinen olennainen kontrollirakenne ohjelmissa on toistolause. Toistolauseen avulla voidaan toistaa jotain toimintoa useita kertoja. Toisto on itse asiassa yksi tärkeimmistä syistä tietokoneiden tehokkuuteen: nykyisetkään suorittimet eivät sinänsä osaa tehdä hirveän monimutkaisia asioita, mutta toistamalla yksinkertaisia operaatioita useita kertoja nopeasti, voidaan ratkaista hyvinkin monimutkaisia ongelmia.

Aloitetaan toistolauseeseen tutustuminen yksinkertaisen while-silmukan avulla. Seuraavassa ohjelmassa kysytään käyttäjältä lukuja ja tulostetaan niiden neliöitä (luku^2 eli luku * luku) kunnes käyttäjä syöttää nollan. Huomaa, että ohjelman suoritus siis jatkuu "ikuisesti", ellei nollaa syötetä:

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
```python 
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

Toistolause muistuttaa syntaksiltaan ehtolausetta. Erotuksena onkin vain se, että toistolausetta seuraavaa lohkoa suoritetaan yhä uudelleen niin kauan kun ehto on tosi:

![](/img/w2-2.png)

Toistolauseen sisältä löytyvä **break**-lause päättää välittömästi toiston (eli silmukan suorituksen). Toisto jatkuu break-lauseen jälkeen silmukkalohkoa seuraavasta lauseesta Jos silmukkalohkon jälken ei ole enempää lauseita, ohjelman suoritus päättyy kokonaan.

Aluksi kirjoitamme toistolauseet käyttäen ehtolausekkeena vakioarvoa True. Tämä tarkoittaa, että silmukan sisällä pitää jossain tilanteessa (yleensä sopivan ehdon täyttyessä) suorittaa break-lause, tai silmukan suoritus ei pääty koskaan. "Ikuisen" silmukan saa editorissa katkaistua painamalla **CTRL + C**, ViLLE huolehtii ikuisten silmukoiden katkaisusta automaattisesti.

Tarkastellaan vielä muutamaa esimerkkiä. Ensimmäinen tulostaa lukuja käyttäjän antamasta luvusta alkaen kasvattaen sitä joka kierroksella yhdellä. Ohjelma pysähtyy, kun on tulostettu 10 lukua:

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
```python 
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

Toinen esimerkkiohjelma kysyy käyttältä yksitellen merkkijonon ja luvun. Ohjelma tulostaa luvun mukaisen määrän merkkijonoja kunnes käyttäjä syöttää tyhjän merkkijonon. Esimerkistä huomataan, että Python sallii merkkijonon kertomisen kokonaisluvulla - esimerkiksi `"A" * 3` tuottaa tulokseksi uuden merkkijonon `"AAA"`.

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