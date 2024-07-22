---
sidebar_position: 1
---

# Useita parametreja

Viime kerralla kaikissa esimerkeissä ja tehtävissä olevissa funktioissa oli vain yksi parametri. Parametreja voi kuitenkin olla useampi. Tällaisessa tapauksessa parametrit erotetaan toisistaan pilkuilla niin funktion määrittelyssä kuin funktiokutsussakin.

Tarkastellaan esimerkkiä funktiosta, joka tulostaa kahdesta parametrinaan saamastaan luvusta suuremman:

```python 
def tulosta_suurempi(luku1, luku2):
    if luku1 > luku2:
        print(luku1)
    else:
        print(luku2)


# Esimerkki kutsusta
tulosta_suurempi(20, 10)
tulosta_suurempi(5 + 5, 5 * 5)
 ```

Ohjelma tulostaa:
```
20
25
 ```

Parametreja voi luonnollisesti olla vieläkin enemmän. Funktio `keskiarvo` laskee ja tulostaa ruudulle parametrinaan saamansa neljän luvun keskiarvon:

```python 
def keskiarvo(luku1, luku2, luku3, luku4):
    summa = luku1 + luku2 + luku3 + luku4
    print(summa / 4)


# Testataan funktiota
keskiarvo(1,2,3,4)
keskiarvo(10, 9, 10, 7)
 ```

Ohjelma tulostaa:
``` 
2.5
9.0
 ```

Parametrit voivat olla myös eri tyyppisiä. Funktio `monista` tulostaa annettua merkkijonoa allekkain annetun määrän:

```python 
def monista(merkkijono, maara):
    i = 0
    while i < maara:
        print(merkkijono)
        i += 1

# Testataan
monista("Jippikaijei", 4)
monista("Töttöröö", 2)
 ```

Ohjelma tulostaa:
```python 
Jippikaijei
Jippikaijei
Jippikaijei
Jippikaijei
Töttöröö
Töttöröö
 ```

Tarkastellaan vielä yhtä esimerkkiä, joka tulostaa annetuista kahdesta merkkijonosta lyhyemmän:

```python 
def tulosta_lyhyempi(mjono1, mjono2):
    if len(mjono1) < len(mjono2):
        print(mjono1)
    else:
        print(mjono2)


# Testaillaan
tulosta_lyhyempi("Eka", "Toinen")
tulosta_lyhyempi("Moikkeliskoikkelis", "Hei")
 ```

Ohjelma tulostaa:
```python 
Eka
Hei
 ```

## Muodollinen ja todellinen parametri

Funktioiden yhteydessä puhutaan usein **muodollisesta** ja **todellisesta** parametrista. Muodollisella parametrilla tarkoitetaan funktiomäärittelyssä käytettyä parametrimuuttujaa. Esimerkiksi funktion `monista` muodolliset parametrit ovat `merkkijono` ja `maara`:

```python 
def monista(merkkijono, maara):
    print(merkkijono * maara)
 ```

Todellisella arvolla tarkoitetaan sitä arvoa, jonka parametri saa kun funktiota kutsutaan. Todellinen parametrin voi siis saada eri arvon eri kutsukerroilla. Esimerkiksi seuraavassa esimerkissä funktio `monista` saa todelliset parametrin arvot "xyz" ja 5:

```python 
def monista(merkkijono, maara):
    print(merkkijono * maara)

# Kutsutaan funktiota
monista("xyz", 5)
 ```

Ohjelma tulostaa:
```python 
xyzxyzxyzxyzxyz
 ```

Seuraavassa taas todelliset parametrin arvot ovat "abrakadabra" ja 4:

```python 
def monista(merkkijono, maara):
    print(merkkijono * maara)

# Kutsutaan funktiota
monista("abrakadabra", 4)
 ```

Ohjelma tulostaa:
```python 
abrakadabraabrakadabraabrakadabraabrakadabra
 ```

## Paikalliset muuttujat

Funktion sisällä alustetut muuttujat ovat funktion **paikallisia muuttujia**. Tämä tarkoittaa, että ne ovat olemassa ainoastaan funktion suorituksen ajan. Tämä koskee myös funktion parametreja.

Huomaa, että funktiolla voi olla samannimisiä muuttujia kuin pääohjelmalla (tai muilla funktioilla). Ne ovat kuitenkin eri muuttujia.

```python 
def kasvata_ja_tulosta(luku):
    # luku on funktion paikallinen muuttuja
    luku += 1
    print("Arvo funktiossa kasvata_ja_tulosta:", luku)

# Tämä luku on pääohjelman muuttuja
# Se on siis eri muuttuja kuin funktiossa määritelty
luku = 10
print("Luku ennen kutsua:", luku)

kasvata_ja_tulosta(luku)

# Pääohjelman muuttujan arvo ei ole muuttunut
print("Luku kutsun jälkeen:", luku)
 ```

Ohjelma tulostaa:
```
Luku ennen kutsua: 10
Arvo funktiossa kasvata_ja_tulosta: 11
Luku kutsun jälkeen: 10
 ```

Jos funktion paikallisiin muuttujiin yritetään viitata funktion ulkopuolelta, seuraa virhe:

```python 
def tulosta_luvut(maksimi):
    laskuri = 1
    while laskuri <= maksimi:
        print(laskuri)
        laskuri +=1

# Kutsutaan funktiota...
tulosta_luvut(5)

# Nyt yritys viitata laskuriin tuottaa virheen,
# koska laskuri on voimassa vain funktion sisällä
print(laskuri)
 ```

Ohjelma tulostaa:
```
1
2
3
4
5
Traceback (most recent call last):
  File "laskuri.py", line 12, in <module>
    print(laskuri)
NameError: name 'laskuri' is not defined
 ```

Funktion sisällä voidaan kuitenkin viitata pääohjelman muuttujiin:

```python 
def lisaa_korko(rahasumma):
    #  pääohjelmassa määritelty korkoprosentti näkyy tänne...
    rahasumma += (rahasumma * korko)
    print("Rahaa nyt:", rahasumma)


# Määritellään korko
korko = 0.05

lisaa_korko(1000)
 ```

Ohjelma tulostaa:
```
Rahaa nyt: 1050.0
 ```

Muuttujia voidaan kuitenkin vain lukea funktion sisällä. Jos arvoa yritetään muuttaa, on tuloksena taas virheilmoitus:

```python 
def lisaa_korko(rahasumma):
    # Yritetään muuttaa korkoa - tämä johtaa virheeseen
    korko = korko + 0.25

    rahasumma += (rahasumma * korko)
    print("Rahaa nyt:", rahasumma)



# Määritellään korko
korko = 0.05

lisaa_korko(1000)
 ```

Ohjelma tulostaa:
```p
Traceback (most recent call last):
  File "korko.py", line 13, in <module>
    lisaa_korko(1000)
  File "korko.py", line 3, in lisaa_korko
    korko = korko + 0.25
UnboundLocalError: local variable 'korko' referenced before assignment
 ```

Jos funktion sisällä on tarve muuttaa pääohjelman muuttujaa, voidaan pääsy muuttujaan avata avainsanalla global:

```python 
def lisaa_korko(rahasumma):
    # Kun korko määritellään globaaliksi, siihen voi viitata
    global korko
    
    korko = korko + 0.25

    rahasumma += (rahasumma * korko)
    print("Rahaa nyt:", rahasumma)



# Määritellään korko
korko = 0.05

lisaa_korko(1000)
 ```

Ohjelma tulostaa:
``` 
Rahaa nyt: 1300.0
 ```

Yleensä tämä ei kuitenkaan ole suotavaa. Lähes aina paras ratkaisu on välittää funktiolle arvo ennemmin parametrina:

```python 
def lisaa_korko(rahasumma, korko):
    # Nyt korko tulee parametrina
    korko = korko + 0.25

    rahasumma += (rahasumma * korko)
    print("Rahaa nyt:", rahasumma)



# Määritellään korko
korko = 0.05

# Korko on nyt myös todellinen parametri
lisaa_korko(1000, korko)
 ```

Ohjelma tulostaa:
``` 
Rahaa nyt: 1300.0
 ```

Pääohjelman muuttujien arvojen muutosta funktiossa kutsutaan myös **sivuvaikutukseksi**. Sivuvaikutuksista ja syistä niiden välttämiseen puhutaan tarkemmin ensi viikolla.