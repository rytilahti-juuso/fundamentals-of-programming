---
sidebar_position: 4
---

# Tulostuksen muotoilusta

Kuten aikaisemmin on todettu, voidaan Pythonissa tulostaa useita eri olioita yhdellä print-funktion kutsulla listaamalla eri oliot pilkuilla erotettuna:

Mikäli tulostettavia asioita on useita, tulee tulostuslauseesta kuitenkin melko monimutkainen. Lisäksi pilkku lisää aina ylimääräisen välilyönnin tulostukseen, mikä ei aina ole toivottavaa:

Monimutkaisemmissa tulostulauseissa tai merkkijonojen muotoiluissa kannattaa käyttää esimerkiksi Pythonin **f-merkkijonoja**. Ideana on, että ennen merkkijonoa kirjoitetaan pieni **f**-kirjain. Nyt merkkijonon sisällä voidaan kirjoittaa **aaltosulkeisiin muuttujien nimiä tai lausekkeita**:

```python 
luku1 = int(input("Anna 1. luku: "))
luku2 = int(input("Anna 2. luku: "))

print(f"Kun lasketaan {luku1} + {luku2}, saadaan tulokseksi {luku1 + luku2}.")
 ```

Esimerkkisuoritus:
```
Anna 1. luku: 17
Anna 2. luku: 32
Kun lasketaan 17 + 32, saadaan tulokseksi 49.
 ```

Toinen esimerkkiohjelma, joka pyytää käyttäjää syöttämään arvoja ja muotoilee niistä sitten kaksi merkkijonoa:

```python 
nimi = input("Anna nimi: ")
kaupunki = input("Anna kotikaupunki: ")
pnro = input("Anna puhelinnumero: ")

print(f"Moi, nimeni on {nimi}, asun {kaupunki}-nimisessä kaupungissa.") 
print(f"Puhelinnumeroni on {pnro}, jos haluat jutella.")
 ```

Esimerkkisuoritus:
``` 
Anna nimi: Pertti
Anna kotikaupunki: Porvoo
Anna puhelinnumero: 123-456 789
Moi, nimeni on Pertti, asun Porvoo-nimisessä kaupungissa.
Puhelinnumeroni on 123-456 789, jos haluat jutella.
 ```

Pythonin f-merkkijonoja voidaan käyttää myös useisiin muihin tarkoituksiin, esimerkiksi muotoilemaan helpommin liukulukujen tulostusta:

```python 
luku = 1.2345678

# Tulostaa luvun sellaisenaan
print(luku)

# f-merkkijonolla voidaan antaa desimaalien määrä
print(f"Vain 2 desimaalia: {luku:.2f}")
print(f"Tässä desimaaleja on neljä: {luku:.4f}")

luku2 = 1.5
print(f"Hei, tämähän myös pyöristää: {luku2:.0f}")
 ```

Ohjelma tulostaa:
```
1.2345678
Vain 2 desimaalia: 1.23
Tässä desimaaleja on neljä: 1.2346
Hei, tämähän myös pyöristää: 2
 ```

Tarkemmin asiaa on kuvattu esimerkiksi [Pythonin dokumentaatiossa](https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals).