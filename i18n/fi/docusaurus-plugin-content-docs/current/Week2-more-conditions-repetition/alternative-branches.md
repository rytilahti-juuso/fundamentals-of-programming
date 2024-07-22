---
sidebar_position: 2
---

# Vaihtoehtoiset haarat

Usein olisi ehdon yhteydessä tarpeen esittää kaksi vaihtoehtoista toimintoa. Siis esimerkiksi niin, että jos luku on positiivinen, tehdään toiminto A, ja jos se on negatiivinen, tehdään toiminto B. Tällainen toiminnallisuus saadaan toki aikaan kahdella peräkkäisellä ehdolla:

```python 
luku = int(input("Anna luku: "))

if luku > 0:
    print("Luku oli positiivinen")

if luku < 0:
    print("Luku oli negatiivinen")
 ```

Esimerkkisuoritus:
```python 
Anna luku: -6
Luku oli negatiivinen
 ```

...mutta rakenne vaikuttaa hiukan kömpelöltä, eikä edes sovellu kaikkiin mahdollisiin tilanteisiin. Helpompi tapa on käyttää ehtolauseen vaihtoehtoista haaraa. Pythonissa tämä tapahtuu else-lauseella, jonka syntaksi on seuraavanlainen:

```python 
if <ehtolauseke>:
    <lohko 1>
else:
    <lohko 2>
 ```

Vaihtoehtoinen else-haara kirjoitetaan if-lausetta seuraavan lohkon perään, else-haara ei voi siis esiintyä ilman sitä edeltävää if-lausetta. Ideana on, että jokaisessa tapauksessa suoritetaan jompikumpi lohkoista.

![](/img/img-fi/w2-1.png)

Edellinen esimerkki toteutettuna else-haaraa hyödyntäen näyttäisi siis tältä:

```python 
luku = int(input("Anna luku: "))

if luku > 0:
    print("Luku oli positiivinen")
else:
    print("Luku oli negatiivinen tai nolla")
 ```

Kaksi esimerkkisuoritusta:
```python 
Anna luku: 7
Luku oli positiivinen
 ```

```python 
Anna luku: -55
Luku oli negatiivinen tai nolla
 ```

Vastaavasti ohjelma, joka tulostaa viestin velkojen maksusta vain tietyn nimiselle käyttäjälle toteutettaisiin esimerkiksi näin:

```python 
nimi = input("Moi, kuka olet? ")

if nimi == "Joni":
    print("Maksa velkasi!")
else:
    print("Ei velkoja.")
 ```

Kaksi esimerkkisuoritusta:
```python 
Moi, kuka olet? Jani
Ei velkoja.
 ```

```python 
Moi, kuka olet? Joni
Maksa velkasi!
 ```
## Lisää haaroja

Useissa tilanteissa tarvittaisiin kuitenkin enemmän kuin kaksi mahdollista haaraa. Esimerkiksi positiivisen ja negatiivisen luvun esimerkissä voitaisiin haluta reagoida eri tavalla, jos luku on nolla.

Ehtolauseen perään voidaan **elif**-lauseella kirjoittaa toinen ehto, jota tarkastellaan vain siinä tapauksessa että if-lauseessa esitetty ehto on epätosi. Tällaisia elif-lauseella esitettyjä ehtoja voidaan listata if-lauseen perään niin monta kuin halutaan. Lopuksi voi esiintyä vielä else-lause, jota seuraava lohko suoritetaan silloin, kun mikään esitetyistä ehdoista ei ollut tosi.

Koko ehtolauseen syntaksi näyttää siis tältä:
```python 
if <ehto1>:
    <lohko 1>
elif <ehto2>:
    <lohko 2>
else:
    <lohko 3>
 ```

Esimerkki, jossa tulostetaan tieto siitä, oliko syötetty luku positiivinen, negatiivinen vai nolla:

```python 
luku = int(input("Anna luku: "))

if luku < 0:
    print("Luku oli negatiivinen")
elif luku > 0:
    print("Luku oli positiivinen")
else:
    print("Luku oli nolla")
 ```

Esimerkkisuorituksia:
```python 
Anna luku: 5
Luku oli positiivinen
 ```

```python 
Anna luku: -5
Luku oli negatiivinen
 ```

```python 
Anna luku: 0
Luku oli nolla
 ```

Toinen esimerkki, jossa tulostetaan tieto siitä kumpi annetuista luvuista oli suurempi (vai olivatko luvut yhtä suuria):

```python 
luku1 = int(input("Anna luku 1: "))
luku2 = int(input("Anna luku 2: "))

if luku1 > luku2:
    print("Luku 1 oli isompi")
elif luku2 > luku1:
    print("Luku 2 oli isompi")
else:
    print("Luvut olivat yhtä suuret")
 ```

Esimerkkisuorituksia:
```python 
Anna luku 1: 10
Anna luku 2: 5
Luku 1 oli isompi
 ```

```python 
Anna luku 1: 9
Anna luku 2: 99
Luku 2 oli isompi
 ```

```python 
Anna luku 1: 22
Anna luku 2: 22
Luvut olivat yhtä suuret
 ```

Jos else-lausetta ei ole, eikä mikään ehdoista ole tosi, ei luonnollisesti suoriteta mitään määritellyistä lohkoista:

```python 
ohjaaja = input("Anna ohjaajan nimi: ")

if ohjaaja == "James Cameron":
    print("Ohjasi Titanicin")
elif ohjaaja == "Francis Ford Coppola":
    print("Ohjasi Kummisedät")
elif ohjaaja == "Steven Spielberg":
    print("Ohjasikohan se ET:n...?")
 ```

Kaksi esimerkkisuoritusta:
```python 
Anna ohjaajan nimi: Francis Ford Coppola
Ohjasi Kummisedät
 ```

```python 
Anna ohjaajan nimi: Ere Kokkonen
 ```