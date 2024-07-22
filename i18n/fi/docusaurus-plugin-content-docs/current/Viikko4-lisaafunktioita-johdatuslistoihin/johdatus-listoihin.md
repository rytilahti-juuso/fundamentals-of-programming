---
sidebar_position: 4
---

# Johdatus listoihin

Muuttujat ovat olennaisen tärkeitä ohjelmissa tiedon väliaikaiseen tallentamiseen. Merkkijonot, luvut ja totuusarvot sopivat hyvin monenlaisen tiedon tallentamiseen, mutta ovat pelkästään riittämättömiä, jos tietoa on hyvin paljon. Ajatellaan vaikka tilannetta, jossa meidän pitäisi tallentaa 10 000 riviä tekstimuotoista dataa käsiteltäväksi: kymmenen tuhannen erillisen muuttujan asettaminen ja käsittely ei olisi käytännössä mahdollista.

Kun tietoa on paljon, käytetään ohjelmoinnissa yleensä **tietorakenteita**. Tietorakenteissa on tyypillistä, että tieto on jotenkin rinnasteista: esimerkiksi edellä mainitut 10 000 riviä tekstiä tai vaikkapa miljoona lukua.

Aloitetaan tietorakenteisiin tutustuminen **listoista**. Lista muodostuu peräkkäisistä alkioista. Alkio tarkoittaa siis yhtä listaan tallennettua tietoyksikköä eli oliota - esimerkiksi yksittäistä lukua, merkkijonoa, totuusarvoa tai vaikkapa toista listaa.

Lista on Pythonissa **dynaaminen** tietorakenne. Dynaamisuus tarkoittaa, että listan koko voi muuttua sen alustuksen jälkeen: listaan voi siis lisätä uusia alkioita ja vanhoja voi poistaa. Lisäksi listan alkioita voi korvata toisilla alkioilla.

Pythonissa listan voi luoda kirjoittamalla halutut alkiot hakasulkeiden sisälle. Yleensä listaviittaus tallennetaan johonkin muuttujaan, jolloin listaan voi viitata luomisen jälkeenkin. Syntaksi muistuttaa minkä tahansa muuttujan luomista:

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

## Listan alkioiden käsittely

Listan alkioihin viitataan samalla tavalla kuin merkkijonon merkkeihin: hakasulkunotaatiolla ja indeksien avulla. Myös listan alkioiden indeksointi alkaa nollasta. Listan pituuden saa totutusti palautettua len-funktiolla.

Esimerkiksi:

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

Itse asiassa merkkijonot muistuttavat muutenkin listoja, molemmat tukevat useita samoja operaatioita. Suurin ero on, että merkkijonot ovat **mutatoitumattomia** eli muuttumattomia: luomisen jälkeen merkkijonon sisältöä ei voi muuttaa. Listan alkoiden arvoja sen sijaan voi muuttaa:

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

Ensi viikolla tutustutaan tarkemmin listan ominaisuuksiin, mm. listan alkioiden läpikäyntiin (eli iterointiin), muihin kuin lukutyyppisiin listoihin sekä alkioiden poistamiseen ja lisäämiseen listan alkuun tai keskelle listaa. Lisäksi keskustellaan listojen käytöistä funktioiden parametreina ja paluuarvoina ja luodaan katsaus erilaisiin hyödyllisiin listametodeihin.