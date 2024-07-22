---
sidebar_position: 5
---

# Tietorakenteet funktioissa

Pythonissa kaikki tieto on tallennettu olioina. Tämä tarkoittaa, että kun johonkin muuttujaan tallennetaan jokin arvo, tallennetaankin oikeasti viittaus olioon, joka sisältää arvon. Mutatoitumattomien olioiden (esimerkiksi luvut, totuusarvot, merkkijonot tai tuple) tapauksessa tällä ei yleensä ole ohjelmoijan kannalta kovin suurta merkitystä, mutta mutatoituvien rakenteiden - esimerkiksi listojen tai sanakirjojen osalta on.

Aloitetaan tilanteesta, jossa luomme uuden listan ja tallennamme viittauksen muuttujaan luvut:

```python 
luvut = [1, 2, 3, 5, 4]
 ```

![Asetus](/img/img-fi/w5-4.png)

Asetetaan nyt muuttujan **luvut** arvo muuttujaan **luvut2**. Koska arvo on itse asiassa viittaus, kopioituu asetettaessa viittaus, ei lista.

```python 
luvut = [1, 2, 3, 5, 4]
luvut2 = luvut
 ```

 ![Viittaus](/img/img-fi/w5-5.png)

Nyt meillä on kaksi muuttujaa, jotka molemmat osoittavat samaan listaan. Listaa voidaan siis käsitellä kumman tahansa muuttujan kautta:

```python 
luvut = [1, 2, 3, 5, 4]
luvut2 = luvut

luvut[0] = 10
luvut2[-1] = 99

print(luvut)
print(luvut2)
 ```

![Käyttöesimerkki](/img/img-fi/w5-6.png)

Ohjelma tulostaa:
```
[10, 2, 3, 5, 99]
[10, 2, 3, 5, 99]
 ```

## Tietorakenteet parametreina

Sama ilmiö tulee vastaan silloin, kun välitämme jonkin mutatoituvan olion **parametrina** jollekin funktiolle. Tarkastellaan esimerkkiä, jossa luodaan lista ja välitetään se parametriksi funktiolle, joka lisää listaan uuden arvon:

```python 
# Huomaa, että funktio ei palauta mitään
def lisaa_arvo(lista: list):
    lista.append(10)

# Luodaan lista
lista = [1,2,3,4,5]

print("Lista ennen:", lista)

# Kutsutaan funktiota
lisaa_arvo(lista)

print("Lista jälkeen:", lista)
 ```

Ohjelma tulostaa:

```
Lista ennen: [1, 2, 3, 4, 5]
Lista jälkeen: [1, 2, 3, 4, 5, 10]
 ```

Esimerkistä huomataan, että funktio **voi muuttaa** parametrinaan saamaansa listaa. Läheskään aina tämä ei kuitenkaan ole tarkoituksenmukaista.

Tarkastellaan toista esimerkkiä, jossa funktion tarkoituksena on etsiä listalta toiseksi pienin arvo. Ohjelmoija on käyttänyt mielestään ovelaa kikkaa, jossa aluksi järjestetään alkiot suuruusjärjestykseen ja sitten poimitaan toinen alkio:

```python 
def toiseksi_pienin_alkio(lista: list) -> int:
    # Järjestetään lista...
    lista.sort()

    # ...jolloin toinen alkio on toiseksi pienin
    return lista[1]

# Luodaan lista
lista = [1, 5, 4, 6, 2, 3, 7, 8]

print("Lista ennen:", lista)

# Kutsutaan funktiota
print("Toiseksi pienin:", toiseksi_pienin_alkio(lista))

# Listan järjestys on muuttunut
print("Lista jälkeen:", lista)
 ```

Ohjelma tulostaa:
```
Lista ennen: [1, 5, 4, 6, 2, 3, 7, 8]
Toiseksi pienin: 2
Lista jälkeen: [1, 2, 3, 4, 5, 6, 7, 8]
 ```

Kun nyt kutsutaan funktiota ja välitetään sille parametriksi lista, huomataan, että funktion kutsumisen jälkeen listan alkiot ovat eri järjestyksessä kuin ennen kutsua. Tämä saattaa vaikuttaa muun ohjelman toimintaan ja tuottaa vaikeasti löydettäviä virheitä - funktion tarkoituksena ei ole muuttaa listaa vaan palauttaa toiseksi suurin alkio.

Funktion parametrinaan saamiinsa olioihin tekemiä (usein odottamattomia) muutoksia kutsutaan **funktion sivuvaikutukseksi**.

Yleensä lähes aina on toivottavaa, että funktiot **eivät muuta** parametrinaan saamiaan olioita. Jos tietorakennetta on tarkoitus muokata, on yleensä hyvä ottaa siitä kopio ja muokata alkuperäisen sijasta tätä kopiota:

```python 
def toiseksi_pienin_alkio(lista: list) -> int:
    # Tehdään listasta järjestetty kopio
    kopio = sorted(lista)

    # ...ja poimitaan toinen alkio kopiosta
    return kopio[1]

# Luodaan lista
lista = [1, 5, 4, 6, 2, 3, 7, 8]

print("Lista ennen:", lista)

# Kutsutaan funktiota
print("Toiseksi pienin:", toiseksi_pienin_alkio(lista))

# Listan järjestys on edellee sama
print("Lista jälkeen:", lista)
 ```

Ohjelma tulostaa:
```
Lista ennen: [1, 5, 4, 6, 2, 3, 7, 8]
Toiseksi pienin: 2
Lista jälkeen: [1, 5, 4, 6, 2, 3, 7, 8]
 ```

## Tietorakenteet paluuarvoina

Funktio voi myös palauttaa tietorakenteen. Yleensä kyseessä on tilanne jossa joko
1. luodaan kokonaan uusi tietorakenne joidenkin parametrien perusteella tai
2. kopioidaan ja muutetaan parametrina saatua tietorakennetta.

Esimerkki ensimmäisestä tilanteesta voisi olla vaikkapa funktio, joka muodostaa parametrien mukaisen listan:

```python 
def monista_arvoa(arvo: int, maara: int) -> list:
    # Listan kertominen tuottaa uuden listan
    # jossa alkuperäistä on monistettu annettu 
    # määrä
    lista = [arvo] * maara
    return lista


# Testataan
print(monista_arvoa(5, 10))

kolmoslista = monista_arvoa(3, 5)
print(kolmoslista)
 ```

Ohjelma tulostaa:
``` 
[5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
[3, 3, 3, 3, 3]
 ```

Jälkimmäisestä esimerkkinä toimii funktio, joka saa parametriksi sanakirjan, jossa avaimina toimivat luvut ja arvoina lukujen neliöt. Funktio palauttaa uuden sanakirjan, jolla on alkuperäisestä sanakirjasta ainoastaan sellaiset alkiot, joissa avain on negatiivinen:

```python 
def negatiiviset_avaimet(neliot: dict) -> dict:
    negat = {}

    for avain in neliot:
        if avain < 0:
            negat[avain] = neliot[avain]

    return negat

# testataan funktiota
neliokirja = {}

# generoidaan sanakirja avainlistasta
avaimet = [1,-1,2,-2,4,-4,5,6,-7,8]
for avain in avaimet:
    neliokirja[avain] = avain * avain

print(neliokirja)

print(negatiiviset_avaimet(neliokirja))
 ```

Ohjelma tulostaa:
```
{1: 1, -1: 1, 2: 4, -2: 4, 4: 16, -4: 16, 5: 25, 6: 36, -7: 49, 8: 64}
{-1: 1, -2: 4, -4: 16, -7: 49}
 ```