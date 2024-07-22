---
sidebar_position: 4
---

# Lisää Pythonin ominaisuuksia, osa 1

Käydään vielä kurssin lopuksi läpi eräitä Pythonin hyödyllisiä ominaisuuksia. Vaikkei tällaisia ominaisuuksia itse ohjelmissaan käyttäisikään, on niistä kuitenkin hyödyllistä tietää. Tässä osiossa esitettyjen ominaisuuksien lisäksi Pythonista kiinnostuneen kannattaa tutustua esimerkiksi seuraaviin asioihin:

- Omat luokat ja oliot
- Funktionaalinen ohjelmointi: map, filter, reduce
- Generaattorifunktiot
- Funktiot funktioiden parametreina
- Säännölliset lausekkeet
- Operaattoreiden ylikuormitus
- Ulkoiset kirjastot
- pip

Osa yllä mainituista asioista käsitellään Java-kielellä Olio-ohjelmoinnin jatkokurssilla.

## Listakoosteet

Listakooste on tekniikka, jonka avulla voidaan yhdellä lausekkeella luoda olemassa olevasta sarjasta (esimerkiksi lista, merkkijono, sanakirja tai tuple) uusi lista. Koosteen syntaksi on

`[<lauseke> for <alkio> in <sarja>]`

Esimerkiksi seuraavassa luodaan uusi lista, jolla alkuperäisen listan alkiot on kerrottu kolmella:

```python 
lukulista = [1, 3, 2, 4, 6, 5]

# Luodaan listakoosteella uusi lista
lista2 = [alkio * 3 for alkio in lukulista]

print(lista2)
 ```

Ohjelma tulostaa:
```
[3, 9, 6, 12, 18, 15]
 ```

Käytännössä lopputulos vastaa siis tilannetta, jossa luomme uuden tyhjän listan ja lisäämme sinne alkiot esimerkiksi for-silmukan avulla:

```python 
lukulista = [1, 3, 2, 4, 6, 5]

lista2 = []
for alkio in lukulista:
    lista2.append(alkio * 3)

print(lista2)
 ```

Ohjelma tulostaa:
```
[3, 9, 6, 12, 18, 15]
 ```

Listakooste on kätevä esimerkiksi silloin, kun halutaan muodostaa merkkijonolistasta lukutyyppinen lista (tai päinvastoin):

```python 
def lukulistaksi(lista: list) -> list:
    return [int(alkio) for alkio in lista]

def merkkilistaksi(lista: list) -> list:
    return [str(alkio) for alkio in lista]


# Testataan lukulistalla
luvut = list(range(1,10))
print(luvut)
mluvut = merkkilistaksi(luvut)
print(mluvut)

# Testataan merkkijonolistalla
merkit = "1 2 3 22 11 44 5 3 2 9".split()
print(merkit)
luvut = lukulistaksi(merkit)
print(luvut)
 ```

Ohjelma tulostaa:
```
[1, 2, 3, 4, 5, 6, 7, 8, 9]
['1', '2', '3', '4', '5', '6', '7', '8', '9']
['1', '2', '3', '22', '11', '44', '5', '3', '2', '9']
[1, 2, 3, 22, 11, 44, 5, 3, 2, 9]
 ```

Listakoosteeseen voidaan myös yhdistää ehto. Ehdon avulla voidaan rajata alkiot, jotka uudelle listalle tulevat mukaan. Ehtolauseke kirjoitetaan koosteen loppuun alla olevan esimerkin mukaisesti:

`[<lauseke> for <alkio> in <sarja> if <ehtolauseke>]`

Katsotaan ensin esimerkki lausekkeesta, joka poimii uudelle listalle ainoastaan positiiviset alkiot:

```python 
lukulista = [2, -2, 3, 4, -1, -5, 11, -3, -9, 2, 3]

positiiviset = [alkio for alkio in lukulista if alkio > 0]

print(positiiviset)
 ```

Ohjelma tulostaa:
```
[2, 3, 4, 11, 2, 3]
 ```

Toinen esimerkki, jossa kokonaislukulistalta muunnetaan merkkijonoksi ainostaan parilliset luvut:

```python 
def parilliset_merkeiksi(lukulista: list) -> list:
    return [str(luku) for luku in lukulista if luku % 2 == 0]

luvut = list(range(1,15))
print(luvut)

mluvut = parilliset_merkeiksi(luvut)
print(mluvut)
 ```

Ohjelma tulostaa:
``` 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
['2', '4', '6', '8', '10', '12', '14']
 ```