---
sidebar_position: 1
---

# Listan iterointi

VIimeksi harjoiteltiin luomaan listoja, lisäämään ja muuttamaan alkioita ja poimimaan yksittäisiä alkioita listoista. Usein on kuitenkin tarpeen käydä kaikki listan alkiot läpi. Tyypillinen syy voisi olla vaikkapa tietyn (esimerkiksi minimi- tai maksimiarvon) etsiminen listasta, tai mikä tahansa operaatio, joka halutaan kohdistaa kaikkiin listan alkioihin.

Listan alkiot voidaan luonnollisesti käydä läpi while-silmukkaa hyödyntäen, esimerkiksi seuraava ohjelma tulostaa kaikki listan lista alkiot yksitellen:

```python 
# Esimerkkilista
lista = [5,2,3,4,10,7]

indeksi = 0
while indeksi < len(lista):
    print(lista[indeksi])
    indeksi += 1
 ```

Ohjelma tulostaa:
```
5
2
3
4
10
7
 ```

Listan alkioiden läpikäyntiin on kuitenkin helpompikin tapa.

## Definiitti toisto for-lauseella

Pythonin for-lauseen avulla voidaan läpikäydä eli iteroida mikä tahansa sitä tukeva tietorakenne. Lauseen syntaksi on muotoa

```
for <muuttuja> in <tietorakenne>:
   <lohko>
```

Ideana on, että for-silmukassa kaikki alkiot poimitaan yksitellen järjestyksessä tietorakenteesta ja asetetaan annetun muuttujan arvoksi. Seuraava kaavio havainnollistaa silmukan toimintaa:

![Silmukan toiminta](/img/img-fi/w5-1.png)

Tarkastellaan edellistä esimerkkiä, jossa listan alkiot tulostetaan yksitellen, nyt for-lauseella toteutettuna:

```python 
# Esimerkkilista
lista = [5,2,3,4,10,7]

for alkio in lista:
    print(alkio)
 ```

Ohjelma tulostaa:
```
5
2
3
4
10
7
 ```

Huomaa, että for-lausetta käytettäessä meidän ei tarvitse erikseen huolehtia muuttujan arvon muutoksesta tai ehdon katkaisusta break-lauseella. For-lause poimii automaattisesti kaikki alkiot järjestyksessä ensimmäisestä viimeiseen ja sijoittaa ne yksitellen annettuun muuttujaan.

Tarkastellaan toista esimerkkiä, jossa lasketaan kaikkien listan alkioiden summa:

```python 
# Esimerkkilista
lista = [1, 3, 2, 4, 5, 6]

summa = 0
for alkio in lista:
    summa += alkio

print(f"Summaksi tuli {summa}.")
 ```

Ohjelma tulostaa:
```
Summaksi tuli 21.
 ```

Usein on tapana poimia alkioista vain tilanteeseen sopivat, vaikka kaikki käytäisiinkin läpi. Seuraavassa esimerkissä lasketaan parillisten alkioiden summa:

```python 
# Esimerkkilista
lista = [1, 3, 2, 4, 5, 6]

summa = 0
for alkio in lista:
    # Huomoidaan nyt vain parilliset
    if alkio % 2 == 0:
        summa += alkio

print(f"Summaksi tuli {summa}.")
 ```

Ohjelma tulostaa:
``` 
Summaksi tuli 12.
 ```


Vielä kolmas esimerkki, jossa tulostetaan ainoastaan ne alkiot, jotka ovat jaollisia kahdella ja kolmella:

```python 
# Esimerkkilista
lista = [1,2,3,4,5,6,7,8,9,10,11,12]

for alkio in lista:
    # Huomoidaan nyt vain parilliset
    if alkio % 2 == 0 and alkio % 3 == 0:
        print(alkio)
 ```

Ohjelma tulostaa:
```
6
12
 ```

For-lauseella muodostettavaa toistolausetta kutsutaan **definiitiksi toistoksi**. Tämä tarkoittaa, että jo lausetta kirjoitettaessa meillä on tiedossa, mitkä alkiot on tarkoitus käydä läpi. Vastaavasti while-lauseella muodostettavaa toistoa kutsutaan **indefiniitiksi toistoksi**, koska siinä toiston pituus ei  selviä automaattisesti pelkästä while-lauseen ehdosta.

Definiitti toistolause toimii myös merkkijonojen kanssa. Tällöin merkkijonosta poimitaan merkit yksi kerrallaan ja sijoitetaan ne annettuun muuttujaan:

```python 
# Esimerkkijono
nimi = "Pekka Python"

# Tulostetaan merkit allekkain
for merkki in nimi:
    print(merkki)
 ```

Ohjelma tulostaa:
```python 
P
e
k
k
a

P
y
t
h
o
n
 ```

## Toistolause ja range-funktio

Definiittiä toistoa olisi näppärä hyödyntää myös tilanteissa, joissa ei varsinaisesti tarvita listaa. Jos halutaan esimerkiksi etsiä alkuluvut väliltä 1...1 000 000, ei ole varsinaista syytä tallentaa kaikkia miljoonaa lukua erikseen listaan - tämä veisi lähinnä turhaan muistia. Iteroinnin voi toki tehdä while-lauseen avulla, mutta tähän löytyy näppärämpikin tapa.

Funktion range avulla voidaan luoda sarja arvoja, jotka voidaan iteroida läpi for-lauseen avulla. Funktio ei muodosta varsinaista listaa, joten muistiakaan sen tallentamiseksi ei kulu turhaan.

Funktion syntaksi on muotoa

`range(<alku>, <loppu> [, askel])`

Tuttuun tapaan loppuaskel ei taaskaan ole mukana muodostetussa sarjassa, joten esimerkiksi kutsu range(1, 10) palauttaa sarjan, jossa on luvut yhdestä yhdeksään:

```python 
for i in range(1, 10):
    print(i)
 ```

Ohjelma tulostaa:
```
1
2
3
4
5
6
7
8
9
 ```

Tarkastellaan esimerkkiä, jossa lasketaan lukujen 1 - 10000 summa:

```python 
summa = 0
for i in range(1, 10001):
    summa += i

print(summa)
 ```

Ohjelma tulostaa:
``` 
50005000
 ```

Sarjalle voidaan siis antaa myös kolmas parametri, askel. Näin voidaan luoda helposti eri tavoin askeltavia sarjoja. Negatiivinen askel tuottaa suuremmasta pienempään kulkevan sarjan:

```python 
# Tulostetaan kolmen välein lukuja:
for i in range(1, 20, 3):
    print(i)


# Tulostetaan lukuja suuremmasta pienempään:
for i in range(5, 0, -1):
    print(i)
 ```

Ohjelma tulostaa:
```
1
4
7
10
13
16
19
5
4
3
2
1
 ```

Sarjasta voidaan myös muodostaa tarvittaessa lista. Tämä onnistuu funktiolla list:

```python 
lista = list(range(1, 20, 2))
print(lista)

# Sarja voidaan myös tallentaa muuttujaan
kympista_alas = range(10, 0, -1)
print(kympista_alas)

lista2 = list(kympista_alas)
print(lista2)
 ```

Ohjelma tulostaa:
```
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
range(10, 0, -1)
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 ```

Range on hyödyllinen myös listojen kanssa esimerkiksi silloin, kun haluamme muuttaa listaa. Tarkastellaan seuraavaa esimerkkiä:

```python 
lista = [1, 2, 3, 4]

print("Lista ennen:", lista)

for alkio in lista:
    alkio += 1

print("Lista jälkeen:", lista)
 ```

Ohjelma tulostaa:
```
Lista ennen: [1, 2, 3, 4]
Lista jälkeen: [1, 2, 3, 4]
 ```

Listan tulostus lopussa paljastaa, ettei silmukkamuuttujaan sijoitus muuta alkuperäistä listaa. Tämä johtuu siitä, että muuttujaan kopioidaan listan arvot yksitellen, mutta kopioinnin jälkeen muutujalla ei enää ole "yhteyttä" listaan. Silmukkamuuttujan arvon muuttaminen ei siis välity listan arvoihin mitenkään.

Listan indekseihin voidaan kuitenkin viitata hyödyntämällä range-funktiota ja tietoa listan pituudesta. Muodostetaan siis range-funktiolla kaikki listan indeksit nollasta pituus miinus yhteen asti ja käydään ne läpi for-silmukassa:

```python 
lista = [1, 2, 3, 4]

print("Lista ennen:", lista)

# Jos rangesta jättää alkuparametrin pois,
# python olettaa, että se on nolla
# range(4) on siis sama kuin range(0, 4)
for i in range(len(lista)):
    lista[i] += 1

print("Lista jälkeen:", lista)
 ```

Ohjelma tulostaa:
```
Lista ennen: [1, 2, 3, 4]
Lista jälkeen: [2, 3, 4, 5]
 ```

Tarkastellaan vielä toista esimerkkiä:

```python 
lista = list(range(1,10))

print("Lista ennen:", lista)

# Muutetaan kaikki listan parilliset arvot
# negatiivisiksi
for i in range(len(lista)):
    if lista[i] % 2 == 0:
        lista[i] = -lista[i]

print("Lista jälkeen:", lista)
 ```

Ohjelma tulostaa:
```
Lista ennen: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Lista jälkeen: [1, -2, 3, -4, 5, -6, 7, -8, 9]
 ```