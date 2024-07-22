---
sidebar_position: 2
---

# Merkkijonot, merkit ja alijonot
Niinkuin aikaisemmin todettiin, merkkijono on nollasta, yhdestä tai useammasta merkistä koostuva jono. Merkkijonossa esiintyvät merkit voivat olla mitä tahansa käytetyssä merkistössä esiintyviä merkkejä. Pythonissa käytetään kolmosversiossa oletuksena [Unicode](https://en.wikipedia.org/wiki/UTF-8)-nimistä merkistökoodausta, jolla voidaan esittää lähes kaikki yleisesti tarvittavat merkit (se mitä merkkejä ruudulle voidaan tulostaa riippuu toki myös käytettävästä kirjasimesta eli fontista).

Merkkijonosta löytyvien merkkien määrän voi palauttaa funktiolla `len`. Esimerkiksi:

```python 
jono = "Moi"
print(len(jono))

nimi = "Pekka Python"
print(len(nimi))

# Kaikki merkit, myös välilyönnit, lasketaan pituuteen
jono2 = "a b c d"

pituus= len(jono2)
print(pituus)

# Tyhjän merkkijonon pituus on nolla
print(len(""))
 ```

Ohjelma tulostaa:
```python 
3
12
7
0
 ```

Funktio saa siis parametrikseen merkkijonon ja palauttaa tiedon sen pituudesta -. palautettu arvo on siis nolla tai positiivinen kokonaisluku.

## Merkit merkkijonossa

Kaikilla merkkijonon merkeillä on **indeksi** (eli järjestysluku). Indeksin avulla voidaan viitata merkkijonon yksittäisiin merkkeihin, esimerkiksi poimia jonkin merkkijonon ensimmäinen, toinen tai viimeinen merkki.

Pythonissa, kuten useimmissa muissa ohjelmointikielissä, indeksointi alkaa yleensä **nollasta**. Tämä tarkoittaa, että merkkijonon ensimmäinen merkki on indeksin nolla kohdalla. Vastaavasti merkkijonon viimeinen merkki on indeksin (merkkijonon pituus miinus yksi) kohdalla:

![](/img/img-fi/w3-1.png)

Yksittäiseen merkkiin voidaan viitata hakasulkunotaatiolla. Hakasulkeet kirjoitetaan merkkijonomuuttujan tai merkkijonovakion perään. Hakasulkeiden sisään kirjoitetaan sen merkin indeksi, joka halutaan palauttaa.

Esimerkiksi

```python 
jono = "Pekka Python"

# eka merkki
print("Eka:", jono[0])

# kolmas merkki
print("Kolmas:", jono[2])

# eka, toka ja kolmas merkki
print("Eka, toka, kolmas:", jono[0] + jono[1] + jono[2])

# Merkin voi poimia myös merkkijonovakiosta
print("abcdef"[2])
 ```

Ohjelma tulostaa:
```python 
Eka: P
Toka: k
Eka, toka, kolmas: Pek
c
 ```

Seuraava ohjelma tulostaa käyttäjän syöttämän merkkijonon ensimmäisen ja viimeisen merkin allekkain:

```python 
while True:
    jono = input("Anna merkkijono, tyhjä lopettaa: ")
    if jono == "":
        break

    print("1. merkki:", jono[0])

    # viimeinen merkki on indeksin pituus - 1 kohdalla
    print("Viimeinen merkki:", jono[len(jono) - 1])
 ```

Esimerkkisuoritus:
```python 
Anna merkkijono, tyhjä lopettaa: Moikka
1. merkki: M
Viimeinen merkki: a
Anna merkkijono, tyhjä lopettaa: Terve
1. merkki: T
Viimeinen merkki: e
Anna merkkijono, tyhjä lopettaa: Moro vaan
1. merkki: M
Viimeinen merkki: n
Anna merkkijono, tyhjä lopettaa:
 ```

Huomaa, että jos yritetään viitata sellaiseen merkkiin, jota ei ole merkkijonossa, seuraa virheilmoitus:

```python 
jono = "abc"

# Eka, toka ja kolmas indeksi toimivat
print(jono[0])
print(jono[1])
print(jono[2])

# Neljättä indeksiä ei ole, tämä antaa virheen
print(jono[3])
 ```

Ohjelma tulostaa:
``` 
a
b
c
Traceback (most recent call last):
  File "merkit.py", line 9, in <module>
    print(jono[3])
IndexError: string index out of range
 ```

## Negatiiviset indeksit

Pythonissa voidaan viitata merkkeihin myös negatiivisten indeksien avulla. Indeksi -1 tarkoittaa jonon viimeistä merkkiä, -2 jonon toiseksi viimeistä merkkiä ja niin edelleen:

![](/img/img-fi/w3-2.png)

Jokaisella merkkijonon merkillä on siis kaksi indeksiä: positiivinen ja negatiivinen. Merkkijonon viimeiseen merkkiin voidaan viitata joko sen pituuden avulla tai käyttäen negatiivista indeksiä:

```python 
sana = input("Anna sana: ")

# Viimeinen merkki pituuden avulla
print("Viimeinen merkki: " + sana[len(sana) - 1])

# Viimeinen merkki negatiivisen indeksin avulla:
print("Viimeinen merkki: " + sana[-1])
 ```

Esimerkkisuoritus:
```python 
Anna sana: Testi
Viimeinen merkki: i
Viimeinen merkki: i
 ```

## Osajonot

Merkkijonon osajonolla (substring) tarkoitetaan alkuperäisen merkkijonon "sisältä" löytyvää jonoa. Merkkijonon "Python" osajonoja olisivat siis esimerkiksi jonot "Py", "ytho", "hon" ja "Python".

Osajono voidaan poimia merkkijonosta hyödyntämällä hakasulkuoperaattoria, jossa on annettu poimittavan osajonon alku- ja loppuindeksi. Indeksien väliin kirjoitetaan kaksoispiste.

Osajonoa poimiessa on tärkeä muistaa, että alkuindeksin mukainen merkki tulee mukaan osajonoon, mutta loppuindeksin mukainen ei. Muistisääntönä voi esimerkiksi ajatella merkkien indeksi pystyviivoina, jotka piirretään merkkien vasemmalle puolelle:

Jos esimerkiksi merkkijonosta "Pekka Python" otettaisiin osajono indeksien 3 ja 8 välillä...

![](/img/img-fi/w3-3.png)

...tuloksena olisi osajono "ka Py":

```python 
nimi = "Pekka Python"

osajono = nimi[3:8]

print(osajono)
 ```

Ohjelma tulostaa:
```python 
ka Py
 ```

Lisää esimerkkejä osajonojen poimimisesta:

```python 
aakkoset = "ABCDEFGHIJKL"

alku = aakkoset[0:5]
loppu = aakkoset[7:12]
keskelta = aakkoset[3:9]

print(alku)
print(loppu)
print(keskelta)
 ```

Ohjelma tulostaa:
```python 
ABCDE
HIJKL
DEFGHI
 ```

Toisin kuin merkkiä poimiessa, osajonossa on sallittua viitata sellaiseen indeksiin, jota merkkijonosta ei löydy. Tällöin kuitenkin osajonossa voi olla odotettua pienempi määrä merkkejä:

```python 
nimi = "Pirjo"

indeksi = 0

while indeksi < len(nimi):
    osa_nimesta = nimi[indeksi: indeksi + 3]
    print(osa_nimesta)

    indeksi += 1
 ```

Ohjelma tulostaa:

```python 
Pir
irj
rjo
jo
o
 ```