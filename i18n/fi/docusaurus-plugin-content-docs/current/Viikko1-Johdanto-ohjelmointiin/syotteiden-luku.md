---
sidebar_position: 4
---

# Syötteiden lukeminen

Käyttäjän pitää yleensä pystyä vaikuttamaan ohjelman suoritukseen. Tyypillisesti käyttäjä antaa ohjelmalle syötteen, jonka perusteella ohjelma muodostaa sopivan tulosteen. Yksinkertainen esimerkki voisi olla vaikkapa se, että käyttäjä syöttää kaksi kokonaislukua ja ohjelma laskee ja tulostaa niiden summan. Sama periaate näkyy monimutkaisemmin vaikkapa ohjelmassa, jossa ohjelma muodostaa käyttäjän lataamien videoiden perusteella uuden videon, tai ohjelmassa, joka laskee geenien perusteella todennäköisyyden sairastua johonkin tiettyyyn sairauteen.

Perusperiaate voidaan kuvata seuraavasti:

![Perusperiaate](/img/w1-3.png)

Pythonissa voimme lukea käyttäjän tekstimuotoisen (eli yleensä näppäimistöltä syötettävän) syötteen **input**-funktiolla. Funktiolle annetaan parametriksi käyttäjälle esitettävä **kehote** (eli teksti, joka ohjaa käyttäjää syöttämään oikeantyyppisen arvon). Funktio **palauttaa arvon**, joka yleensä tallennetaan johonkin muuttujaan.

Tarkastellaan esimerkkiä, jossa ohjelma kysyy käyttäjän nimen ja tulostaa sitten tervehdyksen:

```python 
# Kysytään nimi ja tallennetaan se muuttujaan nimi
nimi = input("Anna nimesi: ")

# Tulostetaan tervehdys
print("Moi vaan, " + nimi + "!")
 ```

Esimerkkisuoritus:
```python 
Anna nimesi: Paula Python
Moi vaan, Paula Python!
 ```

Sama ohjelma suoritettuna toisella syötteellä antaa luonnollisesti erilaisen tulosteen:

Esimerkkisuoritus:
```python 
Anna nimesi: Jarmo Java
Moi vaan, Jarmo Java!
 ```

Toisessa esimerkissä kysytään käyttäjältä erikseen etunimi, sukunimi ja puhelinnumero ja tulostetaan sitten tervehdys.

```python 
etunimi = input("Anna etunimi: ")
sukunimi = input("Anna sukunimi: ")
pnro = input("Anna puhelinnumero: ")

print("Moi vaan, " + etunimi + " " + sukunimi) # välilyönti erottamaan nimet
print("Puhelinnumerosi on " + pnro)
 ```

Esimerkkisuoritus:
```python 
Anna etunimi: Olli
Anna sukunimi: Ohjelmoija
Anna puhelinnumero: 123-456 7890
Moi vaan, Olli Ohjelmoija
Puhelinnumerosi on 123-456 7890
 ```

## Lukutyyppiset syötteet

Funktio input palauttaa aina merkkijonotyyppisen arvon. Tämä on ongelma, jos haluttaisiin käsitellä syötettä lukuina. Esimerkiksi seuraava ohjelma näyttää toimivan hiukan omituisesti:

```python 
luku1 = input("Anna luku 1: ")
luku2 = input("Anna luku 2: ")

print("Lukujen summa on", (luku1 + luku2))
 ```

Esimerkkisuoritus:
```python 
Anna luku 1: 5
Anna luku 2: 8
Lukujen summa on 58
 ```

Merkkijonotyyppinen arvo voidaan kuitenkin muuntaa kokonaislukutyyppiseksi käyttämällä funktiota int. 

Funktio toimii seuraavasti:

```python 
# Luku merkkijonon sisällä
jono = "5"

# Nyt plus-operaattori katenoi jonot uudeksi merkkijonoksi
print(jono + jono)

# Muunnetaan luvuksi
luku = int(jono)

# Nyt plus-operaattori laskee luvut yhteen
print(luku + luku)
 ```

Ohjelma tulostaa:
```python 
55
10
 ```

Nyt voimme korjata edellä esitetyn ohjelman niin, että yhteenlasku luvuilla toimii oikein:

```python 
# Muunnetaan syötteet lukutyyppisiksi int-funktiolla
luku1 = int(input("Anna luku 1: "))
luku2 = int(input("Anna luku 2: "))

print("Lukujen summa on", (luku1 + luku2))
 ```

Esimerkkisuoritus:
```python 
Anna luku 1: 5
Anna luku 2: 8
Lukujen summa on 13
 ```

Vastaava funktio syötteen muuttamiseksi liukuluvuksi on nimeltään float. Luonnollisesti voimme lukea samassa ohjelmassa sekä merkkijono- että lukutyyppisiä syötteitä:

```python 
# Kysytään nimi merkkijonona
nimi = input("Anna nimesi: ")

# Ikä on kokonaisluku eli int
ika = int(input("Anna ikäsi: "))

# Pituus on liukuluku eli float
pituus = float(input("Anna pituus: "))

print("Nimesi on siis " + nimi)
print("Ikäsi on", ika)
print("...ja pituutesi", pituus)
 ```

Esimerkkisuoritus:
```python 
Anna nimesi: Esko Esimerkki
Anna ikäsi: 52
Anna pituus: 165.5
Nimesi on siis Esko Esimerkki
Ikäsi on 52
...ja pituutesi 165.5
 ```