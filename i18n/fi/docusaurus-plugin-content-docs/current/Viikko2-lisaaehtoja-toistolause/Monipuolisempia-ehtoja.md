---
sidebar_position: 3
---

# Monipuolisempia ehtoja

Ehtolauseita voi kirjoittaa myös sisäkkäin. Tämä tarkoittaa, että voidaan kirjoittaa rakenteita, joissa jonkin ehdon totuutta tarkastellaan vain silloin, kun jokin toinen ehto on ollut tosi (tai epätosi). Sisäkkäisiä ehtolauseita kirjoitettaessa pitää kiinnittää erityisesti huomioita lohkojen sisennyksiin, koska Python päättelee jokaiseen ehtoon kuuluvan lohkon oikeasta sisennyksestä.

Esimerkki ohjelmasta, joka kysyy käyttäjältä luvun ja tulostaa tiedon siitä onko luku parillinen vai pariton. Tarkastelu parillisuudesta kuitenkin tehdään vain silloin, jos luku on suurempi kuin nolla.

```python 
luku = int(input("Anna luku: "))

# Testataan aluksi onko luku suurempi kuin nolla
if luku > 0:
    # Jos oli, testataan onko parillinen vai ei
    if luku % 2 == 0:
        print("Luku oli parillinen")
    else:
        print("Luku on pariton")
# Tämä else liityy ekaan if-lauseeseen
else:
    print("Luku oli pienempi kuin nolla")
 ```

Esimerkkisuoritukset:
```python 
Anna luku: 17
Luku on pariton
 ```

```python 
Anna luku: 32
Luku oli parillinen
 ```

```python 
Anna luku: -6
Luku oli pienempi kuin nolla
 ```

Toinen esimerkki, jossa käyttäjältä kysytään nimi ja kotipaikka. Jos kotipaikkakunta on Turku, kysytään vielä tarkentava kysymys:

```python 
kaupunki = input("Mistä olet kotoisin? ")

if kaupunki == "Turku":
    puoli = input("Kummalta puolelta jokea? ")

    if puoli == "Toispualt":
        print("Siellä on kauppatori")
    else:
        print("Siellä on tuomiokirkko")
elif kaupunki == "Tampere":
    print("Siellä on Särkänniemi")
else:
    print("Se on varmaan ihan kiva kaupunki.")
 ```

Esimerkkisuorituksia:
```python 
Mistä olet kotoisin? Turku
Kummalta puolelta jokea? Toispualt
Siellä on kauppatori
 ```

```python 
Mistä olet kotoisin? Tampere
Siellä on Särkänniemi
 ```
## Loogiset operaattorit

Useita ehtoja voidaan myös yhdistää yhteen ehtolausekkeeseen. Yhdistämiseen käytetään loogisia operaattoreita.

Tarkastellaan ensin **and**-operaattoria. Operaattorin avulla voidaan määritellä yhdistelmälausekkeita, joissa kaikkien ehtojen pitää olla tosia, jotta koko lauseke on tosi.

Näinpä lauseke

A and B

on tosi ainostaan silloin, kun molemmat sekä A että B ovat tosia. Jos jompikumpi on epätosi, koko lauseke on epätosi.

Operaattori toimii siis jotakuinkin samalla tavalla kuin luonnollisen kielen vastineensa: lause

**"Kahvikuppi on pöydällä ja kupissa on kahvia"**

on tosi ainoastaan silloin, kun kuppi on pöydällä **ja** siinä on kahvia. Jos kuppi on jossain muualla kuin pöydällä, koko lause on epätosi. Samoin koko lause on epätosi, jos kupissa on teetä.

Esimerkkejä:

```python 
luku1 = 20
luku2 = 10

# Molemmat tosia --> lauseke on tosi
if luku1 == 20 and luku1 > luku2:
    print("Eka on tosi")

# Molemmat tosia --> lauseke on tosi
if luku2 < luku1 and luku2 != 20:
    print("Toka on tosi")

# Nyt toinen "alilauseke" on epätosi --> lauseke on epätosi
if luku1 == 20 and luku2 == 20:
    print("Kolmas on tosi")

# Samoin nyt:
if luku1 < 15 and luku2 < 15:
    print("Neljäs on tosi")

# Tässä molemmat ovat epätosia --> koko lauseke on epätosi
if luku1 < 15 and luku2 < 5:
    print("Viides on tosi")
 ```

Ohjelma tulostaa:
```python 
Eka on tosi
Toka on tosi
 ```

Operaattorin **or** avulla voidaan muodostaa lausekkeita, jotka ovat tosia jos yksi tai useampi osalauseke on tosi. Lauseke

A or B

on siis tosi jos joko A tai B tai molemmat ovat tosia. Jos molemmat ovat epätosia, koko lauseke on epätosi.

Esimerkkejä:

```python 
luku1 = 20
luku2 = 10

# Molemmat tosia --> lauseke on tosi
if luku1 == 20 or luku1 > luku2:
    print("Eka on tosi")

# Toinen tosi --> lauseke on tosi
if luku1 == 20 or luku2 == 20:
    print("Toinen on tosi")

# Samoin nyt:
if luku1 < 15 or luku2 < 15:
    print("Kolmas on tosi")

# Tässä molemmat ovat epätosia --> koko lauseke on epätosi
if luku1 < 15 or luku2 < 5:
    print("Neljäs on tosi")
 ```

Ohjelma tulostaa:
```python 
Eka on tosi
Toinen on tosi
Kolmas on tosi
 ```

Lopuksi operaattori not, joka kääntää totuusarvon päinvastaiseksi. Lauseke

not A

on siis tosi, jos A on epätosi, tai epätosi jos A on tosi.

```python 
luku1 = 20
luku2 = 10

# Alunperin epätosi, nyt sis tosi
if not luku1 < luku2:
    print("Eka on tosi")

# Alunperin tosi, nyt siis epätosi
if not luku1 != luku2:
    print("Toka on epätosi")
 ```

Ohjelma tulostaa:
```python 
Eka on tosi
 ```

Alla olevassa taulukossa on esitetty kaikkien loogisten operaattorien toiminta eri operandeille:

| A | B | A and B | A or B | not A |
| - | - | - | - | - |
| Tosi | Tosi | Tosi | Tosi | Epätosi |
| Tosi | Epätosi | Epätosi | Tosi | Epätosi |
| Epätosi | Tosi | Epätosi | Tosi | Tosi |
| Epätosi | Epätosi | Epätosi | Epätosi | Tosi |