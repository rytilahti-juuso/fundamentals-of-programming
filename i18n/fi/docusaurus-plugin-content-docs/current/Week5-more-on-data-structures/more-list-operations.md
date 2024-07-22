---
sidebar_position: 2
---

# Lisää listaoperaatioita

Monet merkkijonoista tutut operaatiot toimivat myös listoille. Tarkastellaan seuraavaksi eräitä käyttökelpoisia operaatioita.

Koska lista on mutatoituva (eli muuttuva) tietorakenne, sen alkioiden järjestystä voidaan vaihtaa. Listan alkiot voidaan järjestää luonnolliseen järjestykseen pienimmästä suurimpaan metodin **sort** avulla:

```python 
lottonumerot = [17, 5, 4, 22, 1, 19, 9]

# Järjestetään numerot
lottonumerot.sort()

print(lottonumerot)
 ```

Ohjelma tulostaa:
``` 
[1, 4, 5, 9, 17, 19, 22]
 ```

Jos halutaan säilyttää alkuperäisen listan alkioiden järjestys, voidaan listasta muodostaa järjestetty kopio funktion **sorted** avulla. Huomaa ero edelliseen: sort on metodi ja sorted funktio, joten niitä kutsutaan eri tavoilla.

```python 
lottonumerot = [17, 5, 4, 22, 1, 19, 9]

# Tehdään järjestetty kopio
# Tämä ei vaikuta alkuperäiseen listaan
jarjestetty = sorted(lottonumerot)

print("Alkuperäinen:", lottonumerot)
print("Järjestetty:", jarjestetty)
 ```

Ohjelma tulostaa:
```
Alkuperäinen: [17, 5, 4, 22, 1, 19, 9]
Järjestetty: [1, 4, 5, 9, 17, 19, 22]
 ```

Listan alkioiden järjestyksen saa käännettyä päinvastaiseksi metodilla reverse:

```python 
luvut = list(range(1,5))

# lisätään toinen lista +-operaattorilla
luvut += list(range(20,25))

print(luvut)

# Käännetään...
luvut.reverse()

print(luvut)
 ```

Ohjelma tulostaa:
```
[1, 2, 3, 4, 20, 21, 22, 23, 24]
[24, 23, 22, 21, 20, 4, 3, 2, 1]
 ```

Listasta voidaan poimia **osalista** samalla tavalla kuin osajono merkkijonosta:

```python 
lista = list(range(10))

print("Koko lista:", lista)

print("Eka puolikas:", lista[ : 5])
print("Toka puolikas:", lista[5 : ])
print("Pala keskeltä:", lista[4 : 8])
 ```

Ohjelma tulostaa:
``` 
Koko lista: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
Eka puolikas: [0, 1, 2, 3, 4]
Toka puolikas: [5, 6, 7, 8, 9]
Pala keskeltä: [4, 5, 6, 7]
 ```

Koko listasta saadaan kopio (eli oikeastaan osalista alkuperäisen listan alusta loppuun) jättämällä pois sekä alku- että loppuindeksi. Tämä on usein näppärä operaatio, kun halutaan käsitellä listan alkioita mutta samalla säilyttää alkuperäiset arvot ja järjestys:

```python 
lista = list(range(10))

# Kopioidaan koko lista
kopio = lista[:]

kopio.reverse()
kopio[0] = 1000
kopio[-1] = -10000

print("Alkuperäinen:", lista)
print("Kopio: ", kopio)
 ```

Ohjelma tulostaa:
``` 
Alkuperäinen: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
Kopio:  [1000, 8, 7, 6, 5, 4, 3, 2, 1, -10000]
 ```

Listan alkion esiintymää voidaan tarkastella **in**-operaattorin avulla. Alkion indeksin saa selville metodin **index** avulla. Huomaa, että vaikka **index** toimii myös merkkijonojen kanssa, jostain syystä **find**-metodi ei toimi listojen kanssa. Huomaa myös, että toisin **kuin find**-metodi, index antaa virheen jos yrität hakea sellaisen alkion esiintymää, joka ei ole listalla. Ennen **index**-metodin käyttöä on siis hyvä tarkastaa alkion esiintymä **in**-operaattorilla.

```python 
kakkosen_potenssit = [1, 2, 4, 8, 16, 32, 64, 128, 256]

for i in range(1, 10):
    if i in kakkosen_potenssit:
        print(i, "on kakkosen potenssi")
    else:
        print(i, "ei ole kakkosen potenssi")

print("4 löytyy kohdasta", kakkosen_potenssit.index(4))
print("128 löytyy kohdasta", kakkosen_potenssit.index(128))
 ```

Ohjelma tulostaa:
``` 
1 on kakkosen potenssi
2 on kakkosen potenssi
3 ei ole kakkosen potenssi
4 on kakkosen potenssi
5 ei ole kakkosen potenssi
6 ei ole kakkosen potenssi
7 ei ole kakkosen potenssi
8 on kakkosen potenssi
9 ei ole kakkosen potenssi
4 löytyy kohdasta 2
128 löytyy kohdasta 7
 ```

Näppäriä funktioita listojen käsittelyyn ovat lisäksi ainakin min, max ja sum, jotka palauttavat listan pienimmän tai suurimman alkion tai listan kaikkien alkioiden summan. Seuraava esimerkki havainnollistaa funktioiden käyttöä:

```python 
tulokset = [10, 4, 12, 3, 16, 7, 9, 7, 13]

print("Suurin arvo:", max(tulokset))
print("Pienin arvo:", min(tulokset))
print("Summa:", sum(tulokset))
print("Keskiarvo:", sum(tulokset) / len(tulokset))
 ```

Ohjelma tulostaa:
``` 
Suurin arvo: 16
Pienin arvo: 3
Summa: 81
Keskiarvo: 9.0
 ```