---
sidebar_position: 1
---

# Lisää ehtoja

Viime viikolla aloitettiin tutustuminen ehtolauseeseen tarkastelemalla ehtoja, joissa tutkittiin kahden operandin yhtäsuuruutta. Lauseke

a == b

on siis tosi, mikäli lausekkeet a ja b saavat evaluoinnin jälkeen täsmälleen saman arvon. Yhtäsuuruus pätee niin lukuihin kuin merkkijonoihinkin.

```python 
if 50 == 25 + 25:
    print("Tämä on tosi")

if 50 / 2 == 20:
    print("Tämä ei ollut tosi")

if "Eka Vekara" == "Eka" + " " + "Vekara":
    print("Tämä on taas tosi")

if "ABC" == "abc":
    print("Tämä ei ollut tosi")
 ```

Ohjelma tulostaa:
```python 
Tämä on tosi
Tämä on taas tosi
 ```

Monissa tapauksissa ehtojen määrittelyä voidaan helpottaa hyödyntämällä muitakin vertailuoperaattoreita kuin yhtäsuuruutta.

Kahden operandin erisuuruuutta voidaan esimerkiksi tarkastella erisuurusoperaattorilla !=. Lauseke

a != b

on siis tosi, mikäli lausekkeet a ja b eivät saa evaluoinnin jälkeen täsmälleen samaa arvoa.

```python 
eka = 10 * 10
toka = 50

if eka == toka:
    print("Ovat yhtäsuuria")

if eka != toka:
    print("Ovat erisuuria")

if "Eka Vekara" != "Eka" + "Vekara":
    print("Ei ollut sama jono, välilyönti puuttuu toisesta")
 ```

Ohjelma tulostaa:
```python 
Ovat erisuuria
Ei ollut sama jono, välilyönti puuttuu toisesta
 ```

## Pienempi tai suurempi kuin

Lausekkeiden suuruusjärjestystä voidaan tarkastella matematiikasta tutuilla vertailuoperaattoreilla:

Lauseke

a < b

on tosi, jos evaluoinnin jälkeen lauseke a on suurusjärjestyksessä ennen lauseketta b. 

Lauseke

a > b

taas on tosi, jos a on suuruusjärjestyksessä b:n jälkeen. Esimerkiksi

```python 
eka = 25
toka = 40

if eka < toka:
    print("Eka on pienempi")

if eka > toka:
    print("Eka on suurempi")

if toka < eka:
    print("Toka on pienempi")

if toka > eka:
    print("Toka on suurempi")
 ```

Ohjelma tulostaa:
```python 
Eka on pienempi
Toka on suurempi
 ```

Huomaa, että lukujen lisäksi myös merkkijonojen suuruusjärjestystä voidaan vertailla. Merkkijonojen suuruus määräytyy yksittäisten merkkien järjestyksen mukaisesti, mikä taas riippuu käytettävästä merkistöstä. Yleensä järjestys noudattaa englannin kielen aakkosjärjestystä. Huomaa kuitenkin, että pienet ja isot kirjaimet lasketaan taas eri merkeiksi:

```python 
eka = "abc"
toka = "defg"

if eka < toka:
    print("Eka on pienempi")

if eka > toka:
    print("Eka on suurempi")

toka = "DEFG"

if eka < toka:
    print("Nyt eka on pienempi")

if eka > toka:
    print("Nyt eka on suurempi")
 ```

Ohjelma tulostaa:
```python 
Eka on pienempi
Nyt eka on suurempi
 ```

Operaattoreiden perään voidaan kirjoittaa yhtäsuuruusmerkki, jolloin ne käytännössä vastaavat matematiikasta tuttuja operaattoreita pienempi kuin tai yhtäsuuri kuin ja suurempi kuin tai yhtäsuuri kuin.

```python 
luku1 = 10
luku2 = 10
luku3 = 20

if luku1 <= luku2:
    print("Luku1 on pienempi tai yhtäsuuri kuin luku2")
    
if luku1 <= luku3:
    print("Luku1 on pienempi tai yhtäsuuri kuin luku3")
 ```

Ohjelma tulostaa:
```python 
Luku1 on pienempi tai yhtäsuuri kuin luku2
Luku1 on pienempi tai yhtäsuuri kuin luku3
 ```

## Jakojäännös

Jakojäännösoperaattori ei ole vertailuoperaattori, mutta se on usein hyödyllinen vertailuja tehdessä. Lauseke

A % B

palauttaa kokonaislukujakolaskun "A jaettuna B:llä" jakojäännöksen. Operaattori on hyödyllinen esimerkiksi silloin, kun haluamme tutkia luvun parillisuutta (eli sitä, onko luku tasan jaollinen kahdella):

```python 
# Jaetaan 5 kahdella --> tulos 2, jakojäännös 1
print(5 % 2)

luku = 9

# Onko luku parillinen
if luku % 2 == 0:
    print("On parillinen!")

# Onko luku pariton
if luku % 2 == 1:
    print("On pariton!")

#...vaihtoehtoisesti (jos tiedetään, että on kokonaisluku):
if luku % 2 != 0:
    print("On edelleen pariton")
 ```

Ohjelma tulostaa:
```python 
On pariton!
On edelleen pariton
 ```