---
sidebar_position: 3
---

# Muuttujat

Yleensä ohjelmissa on tarkoituksena käsitellä eri tavoin jotain tietoa (eli dataa). Tieto voi olla esimerkiksi tekstiä ja lukuja tai vaikkapa kuvia tai videoita. Jokaisessa tapauksessa ohjelmoijan tulee tallentaa tieto johonkin käsittelyä varten.

Tiedon väliaikaiseen tallentamiseen käytetään **muuttujia**. Muuttuja on nimensä mukaisesti säiliö, johon voidaan tallentaa jokin **arvo**. Ohjelmoija voi myöhemmin korvata arvon toisella arvolla (tästä siis nimi muuttuja: arvo voi muuttua).

Muuttujalla on nimi (eli **tunniste**), jonka avulla siihen viitataan. Muuttujaa voikin ajatella esimerkiksi nimettynä lokerona, johon arvo laitetaan, ja josta arvon voi poimia nimeä käyttämällä.

Pythonissa muuttuja alustetaan sijoittamalla siihen jokin arvo. Arvoksi käy mikä tahansa lauseke.

Esimerkiksi

```python 
# Alustetaan eri tyyppisiä muuttujia

tulos = 25 # kokonaisluku
summa = 32 + 43 #...samoin kuin tämäkin

pituus = 175.25 
keskiarvo = (2 + 4 + 3) / 3 # liukulukuja

nimi = "Pekka Python" # merkkijonoja
osoite = "Pythonkuja 23 as. 4"
pnumero = "099-1234 567" # puhelinnumerokin on merkkijono
 ```

Ohjelmassa alustetaan kolme muuttujaa, ja tallennetaan jokaiseen eri arvo. Muuttujan arvo saadaan palautettua viittaamalla muuttujan nimeen:

```python 
# alustetaan muuttujat
nimi = "Pekka Python"
ika = 22
kengan_numero = 39

# Tulosta nimi
print(nimi)

# Pilkku toimii tulostuslauseessa nytkin
print("Olen", ika, "vuotta vanha")

print("Kengän numeroni on", kengan_numero)
 ```

Ohjelma tulostaa:
```python 
Pekka Python
Olen 22 vuotta vanha 
Kengän numeroni on 39
 ```
## Muuttujien nimeämisestä

Muuttujat pyritään nimeämään niin, että nimestä selviää muuttujaan tallennetun tiedon tarkoitus.

Pythonissa muuuttujat kirjoitetaan yleensä kokonaan pienillä kirjaimilla. Muuttujien nimissä saa käyttää kirjaimia, numeroita ja alaviivaa, muttei muita merkkejä. Muuttujan nimi ei saa alkaa numerolla. Yleensä on järkevintä käyttää muuttujan nimissä vain englanninkielen aakkosia - näin ohjelmakoodin muokkaus ei tuota ongelmia missään ympäristössä.

Seuraavat ovat esimerkkejä sallituista muuttujien nimistä:

- ika
- puhelinnumero
- kolmas_piste
- tiedosto4
- _valiaikainen

Seuraavat muuttujien nimet taas eivät ole sallittuja Pythonissa.

- toinen osoite
- 3s_linja
- toimiiko?

## Muuttujien käyttäminen
Muuttujien arvo voi tietysti muuttua. Jos muuttujaan sijoitetaan uusi arvo, vanha arvo katoaa alta pois. Muuttujan voi siis kuvitella säiliönä, johon mahtuu tasan yksi arvo kerrallaan:

```python 
saldo = 25.90
print("Saldo on", saldo)

# saldon arvoksi 125
saldo = 125
print("Saldo on nyt", saldo)

# Lisätään 200
saldo = saldo + 200
print("Lisäyksen jälkeen saldo on", saldo)
 ```

Ohjelma tulostaa:
```python 
Saldo on 25.9
Saldo on nyt 125
Lisäyksen jälkeen saldo on 325
 ```

Muuttujien arvoja voidaan käyttää osana lauseketta:

```python 
rahaa = 100
korko = 0.05

# Lisätään korko
rahaa = rahaa + rahaa * korko
print("Lisäyksen jälkeen:", rahaa)
 ```

Ohjelma tulostaa:
```python 
Lisäyksen jälkeen: 105.0
 ```

## Muuttujan tyyppi

Pythonissa muuttujilla on aina tyyppi. Tyyppi päätellään automaattisesti muuttujaan sijoitettavan arvon mukaisesti:

Tyyppi vaikuttaa siihen, millaisissa lausekkeissa muuttujaa voi käyttää (ja mikä on lopputulos). Esimerkiksi kahden kokonaisluvun summa on kokonaisluku, mutta jos toinen operandeista on liukuluku, on tulos myös liukuluku. Jos kaksi merkkijonoa yhdistetään +-operaattorilla, tuloksena on uusi merkkijono.

```python 
# Kaksi kokonaislukua
print(4 + 2)

eka = 23
toka = 33
summa = eka + toka
print(summa)

# Toinen tai molemmat liukulukuja
print(2.5 + 1)

saldo1 = 0.50
saldo2 = 2.75
print(saldo1 + saldo2)

# Merkkijonot
etunimi = "Kimmo"
sukunimi = "Pythonainen"
nimi = etunimi + " " + sukunimi # välilyönti lisätty

print("Nimi on " + nimi)
 ```

Ohjelma tulostaa:
```python 
6
56
3.5
3.25
Nimi on Kimmo Pythonainen
 ```

Merkkijonon ja luvun yhdistäminen ei kuitenkaan onnistu, vaan tuloksena on virheilmoitus:

```python 
jaettava = 10
jakaja = 2.5

osamaara = jaettava / jakaja
print(osamaara)

# Tämä aiheuttaa virheen
# Tulostettavat osat pitäisi esim. erotella pilkulla +-operaattorin sijaan
print("Tulos oli " + osamaara)
 ```

Ohjelman lopputulos:
```python 
4.0

Traceback (most recent call last):
  File "esimerkki.py", line 8, in <module>
    print("Tulos oli " + osamaara)
TypeError: must be str, not float
 ```

Lukuja voidaan kuitenkin tulostaa merkkijonojen kanssa samalla print-lauseella erottelemalla tulostettavat objektit pilkuilla. Huomaa kuitenkin, että pilkku tekee tulostukseen ylimääräisen välilyönnin:

```python 
jaettava = 10
jakaja = 2.5

osamaara = jaettava / jakaja

# Tämä toimii
print("Tulos oli", osamaara)

print("Kun lasketaan", jaettava, " / ", jakaja, "saadaan tulokseksi", osamaara)
 ```

Ohjelma tulostaa:
```python 
Tulos oli 4.0
Kun lasketaan 10  /  2.5 saadaan tulokseksi 4.0
 ```