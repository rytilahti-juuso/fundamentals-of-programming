---
sidebar_position: 4
---

# Sanakirja ja tuple

Pythonissa on myös useita muita tietorakenteita. Tarkastellaan seuraavaksi **sanakirjaa** (engl. **dictionary**).

Sanakirja on tietorakenne, jossa **avaimet** osoittavat **alkioihin**. Alkioilla ei ole varsinaisesti järjestystä - sanakirjasta ei voi siis poimia ensimmäistä tai viimeistä alkiota. Sanakirjasta voidaan kuitenkin poimia hyvin nopeasti jokin arvo, jos tiedetään siihen osoittava avain.

Seuraava kuva havainnollistaa sanakirjaa: opiskelijanumerot osoittavat opiskelijoiden nimiin.

![Sanakirja esimerkki](/img/img-fi/w5-3.png)

## Sanakirja Pythonissa

Uuden tyhjän sanakirjan voi luoda samalla tavalla kuin listankin - ainoa erotus on käytettävät sulut: sanakirjassa käytetään aaltosulkeita { } hakasulkeiden sijasta.

Luodaan siis uusi tyhjä sanakirja ja tallennetaan viittaus siihen muuttujaan opiskelijat:

```python 
opiskelijat = {}
 ```

Sanakirjaan voidaan tallentaa arvoja listoista tutun hakasulkunotaation avulla. Lisätään sanakirjaan pari arvoa ja katsotaan miltä se sen jälkeen näyttää:

```python 
opiskelijat = {}

opiskelijat["12345"] = "Olli Opiskelija"
opiskelijat["54321"] = "Outi Oppilas"

print(opiskelijat)

opiskelijat["99999"] = "Heikki Hikipinko"
opiskelijat["55555"] = "Keijo Keksitty"

print(opiskelijat)
 ```

Ohjelma tulostaa:
```
{'12345': 'Olli Opiskelija', '54321': 'Outi Oppilas'}
{'12345': 'Olli Opiskelija', '54321': 'Outi Oppilas', '99999': 'Heikki Hikipinko', '55555': 'Keijo Keksitty'}
 ```

Huomaa, että jos avain on jo olemassa sanakirjassa, vanha arvo korvataan uudella:

```python 
hinnat = {}
hinnat["Omena"] = 5.95
hinnat["Banaani"] = 3.90
hinnat["Appelsiini"] = 4.50

print(hinnat)

# Nyt Omena on jo sanakirjassa, joten uuden
# alkion sijasta vaihdetaan arvo
hinnat["Omena"] = 4.25

print(hinnat)

# Ananas ei ollut aikaisemmin sanakirjassa, 
# se siis lisätään uutena avain-arvo-parina
hinnat["Ananas"] = 7.90

print(hinnat)
 ```

Ohjelma tulostaa:
``` 
{'Omena': 5.95, 'Banaani': 3.9, 'Appelsiini': 4.5}
{'Omena': 4.25, 'Banaani': 3.9, 'Appelsiini': 4.5}
{'Omena': 4.25, 'Banaani': 3.9, 'Appelsiini': 4.5, 'Ananas': 7.9}
 ```

Sanakirjasta voidaan hakea arvo avaimen perusteella:

```python 
hinnat = {}
hinnat["Omena"] = 5.95
hinnat["Banaani"] = 3.90
hinnat["Appelsiini"] = 4.50
hinnat["Ananas"] = 7.90

print("Omena maksaa:", hinnat["Omena"])

print("Banaanin hinta on", hinnat["Banaani"])

yhteensa = hinnat["Appelsiini"] + hinnat["Ananas"]
print("Appelsiini ja ananas yhdessä:", yhteensa)
 ```

Ohjelma tulostaa:
```
Omena maksaa: 5.95
Banaanin hinta on 3.9
Appelsiini ja ananas yhdessä: 12.4
 ```

Jos avainta ei ole olemassa, seuraa virhe - tämä muistuttaa siis tilannetta, jossa yritetään hakea listalta alkio sellaisen indeksin avulla, jota ei ole olemassa listassa:

```python 
hinnat = {}
hinnat["Omena"] = 5.95
hinnat["Banaani"] = 3.90
hinnat["Appelsiini"] = 4.50
hinnat["Ananas"] = 7.90

# Sanakirjassa ei ole avainta "Rypäle"
print(hinnat["Rypäle"])
 ```

Ohjelma tulostaa:
``` 
Traceback (most recent call last):
  File "sanakirja.py", line 8, in <module>
    print(hinnat["Rypäle"])
KeyError: 'Rypäle'
 ```

Sanakirjan kaikki arvot voidaan käydä läpi **for**-silmukalla. Silmukka palauttaa yksi kerrallaan sanakirjan **avaimet**, joiden avulla saadaan tarvittaessa poimittua vastaavat arvot.

Tuttuun tapaan funktio **len** palauttaa alkoiden - tässä tapauksessa avain-arvo-parien määrän.

Esimerkissä on myös esitetty sanakirjan alustus arvoja antamalla. Avain-arvopari annetaan kaksoispisteellä erotettuna.

```python 
# Alustetaan sanakirja antamalla jotain alkioita valmiiksi
kaannokset = {"auto": "car", "vene": "boat", "pyörä": "bike", "lentokone": "plane"}

# len palauttaa alkoiden määrän
print("Sanakirjassa alkioita:", len(kaannokset))

# lisätään alkio
kaannokset["mopo"] = "moped"

print("Sanakirjassa nyt alkioita:", len(kaannokset))

# tulostetaan avaimet ja arvot
for avain in kaannokset:
    print(f"Avaimella {avain} löytyy arvo {kaannokset[avain]}")
 ```

Ohjelma tulostaa:
``` 
Sanakirjassa alkioita: 4
Sanakirjassa nyt alkioita: 5
Avaimella auto löytyy arvo car
Avaimella vene löytyy arvo boat
Avaimella pyörä löytyy arvo bike
Avaimella lentokone löytyy arvo plane
Avaimella mopo löytyy arvo moped
 ```

## Tuplet

**Tuple** on tietorakenne, joka muistuttaa listaa. Toisin kuin lista, tuple on kuitenkin **mutatoitumaton**. Tämä tarkoittaa siis sitä, että tuplen alkoita ei voida muuttaa luomisen jälkeen, eikä tupleen voi myöskään lisätä tai poistaa siitä alkioita.

Tuplet on tarkoitettu **arvoryhmien** muodostamiseen. Niiden avulla voidaan siis helposti yhdistää toisiinsa kuuluvat arvot yhteen rakenteeseen.

Syntaksin kannalta tuplen alustus muistuttaa listan alustusta - hakasulkeiden sijasta tuplessa käytetään kuitenkin kaarisulkeita ().

Seuraavassa on annettu esimerkkejä tuplen erilaisista käyttötarkoituksista:

```python 
# koordinaattipari
koordinaatit = (25.25, 55.15)

# opiskelijan tiedot: nimi, opiskelijanumero, opintopisteet, sposti
opiskelija = ("Olli Opiskelija", 12345, 26, "olli@example.com")

# ristinollapelin siirto: koordinaatit ja merkki
siirto = (5, 2, "X")

# pelikortti: maa ja numero 
siirto = ("pata", 4)
 ```

Tyypillinen tapa käyttää tupleja on tallentaa samanmuotoiset (eli samantyyppisiä arvoja samassa järjestyksessä sisältävät) tuplet listaan tai sanakirjaan. Näin voitaisiin esimerkiksi kätevästi tallentaa useampia koordinaattipareja tai opiskelijoita kaikkine tietoineen yhteen tietorakenteeseen.

Seuraavassa esimerkissä kysellään käyttäjältä koordinaatteja ja tallennetaan niistä muodostetut parit tupleina listaan:

```python 
koordinaatit = []

while True:
    x = int(input("Anna x-koordinaatti (-1 lopettaa): "))
    if x == -1:
        break

    y = int(input("Anna y-koordinaatti: "))

    pari = (x, y)
    koordinaatit.append(pari)

print(koordinaatit)
 ```

Ohjelma tulostaa:
```
Anna x-koordinaatti (-1 lopettaa): 4
Anna y-koordinaatti: 6
Anna x-koordinaatti (-1 lopettaa): 2
Anna y-koordinaatti: 5
Anna x-koordinaatti (-1 lopettaa): 10
Anna y-koordinaatti: 9
Anna x-koordinaatti (-1 lopettaa): -1
[(4, 6), (2, 5), (10, 9)]
 ```

Toinen esimerkki, jossa funktio saa parametrikseen listan tupleja, jotka sisältävät jääkiekko-otteluiden tietoja. Jokainen tuple sisältää järjestyksessä alkiot kotijoukkuetta, vierasjoukkuetta sekä molempien joukkueiden maalimääriä varten. Funktio palauttaa uuden tuplen, joka sisältää järjestyksessä kotivoittojen, tasapelien ja vierasvoittojen määrän.

```python 
def tilastot(ottelut: list) -> tuple:
    kotivoitot = 0
    tasapelit = 0
    vierasvoitot = 0

    for ottelu in ottelut:
        # alkiot järjestyksessä: 
        # kotijoukkue, vierasjoukkue, kotimaalit, vierasmaalit
        kotimaalit = ottelu[2]
        vierasmaalit = ottelu[3]

        if kotimaalit > vierasmaalit:
            kotivoitot += 1
        elif vierasmaalit > kotimaalit:
            vierasvoitot += 1
        else:
            tasapelit += 1

    return (kotivoitot, tasapelit, vierasvoitot)

# Testataan funktiota
ottelulista = []
ottelulista.append(("JPS", "PPS", 1, 0))
ottelulista.append(("PPS", "Pallerot", 2, 2))
ottelulista.append(("JPS", "Pallerot", 2, 3))
ottelulista.append(("HC Python", "HC python", 5, 5))
ottelulista.append(("HC Python", "PPS", 2, 1))
ottelulista.append(("JPS", "HC python", 1, 4))
ottelulista.append(("HC python", "PPS", 2, 0))

tilastot = tilastot(ottelulista)

print("Kotivoittoja:", tilastot[0])
print("Tasapelejä:", tilastot[1])
print("Vierasvoittoja:", tilastot[2])
 ```

Ohjelma tulostaa:
``` 
Kotivoittoja: 3
Tasapelejä: 2
Vierasvoittoja: 2
 ```

Huomaa, että vaikka tuplea ei voi muuttaa, voi sen korvata kuitenkin uudella tuplella. Seuraavassa muokataan henkilöitä sisältävää listaa niin, että kaikki sähköpostiosoitteiden loppuosat muuttuvat. Olemassaolevat tuplet korvataan siis uusilla.

```python 
ossi = ("Ossi", "ossi@example.com",)
outi = ("Outi", "outi@example.com")
kimmo = ("Kimmo", "kimmo@example.com")
kirsi = ("Kirsi", "kirsi@example.com")

henkilot = [ossi, outi, kimmo, kirsi]

# Iteroidaan läpi ja muutetaan sähköpostit
# Huomaa, että listan alkioiden muuttamiseksi
# käytetään range-funktiota iteroinnissa
for i in range(len(henkilot)):
    hlo = henkilot[i]
    
    # sposti on toinen alkio
    sposti = hlo[1]

    # korvataan domain-osuus
    sposti = sposti.replace("example.com", "example.fi")

    # tallennetaan takaisin listaan
    # nimi pysyy samana
    henkilot[i] = (hlo[0], sposti)


for henkilo in henkilot:
    print(henkilo)
 ```

Ohjelma tulostaa:
```
('Ossi', 'ossi@example.fi')
('Outi', 'outi@example.fi')
('Kimmo', 'kimmo@example.fi')
('Kirsi', 'kirsi@example.fi')
 ```

## Alkioiden poisto tietorakenteista

Alkioita voidaan poistaa sanakirjasta ja listasta esimerkiksi avainsanan del avulla. Huomaa, että tuplesta alkioita ei voida poistaa, koska se on mutatoitumaton.

Listasta alkio poistetaan antamalla del-lauseelle viittaus poistettavaan alkioon. Esimerkiksi

```python 
lista = [1,2,3,4,5,6]

# poistetaan toinen arvo
del lista[1] 
print(lista)

# poistetaan viimeinen arvo
del lista[-1]
print(lista)

# poistetaan eka arvo
del lista[0]
print(lista)
 ```

Ohjelma tulostaa:
```
[1, 3, 4, 5, 6]
[1, 3, 4, 5]
[3, 4, 5]
 ```

Sanakirjasta alkio poistetaan viittamalla poistettavan alkion avaimeen:

```python 
pituudet = {"Keijo": 180, "Liisa": 171, "Antero": 145, "Aune": 164}

# Poistetaan Keijo
del pituudet["Keijo"]
print(pituudet)

# Poistetaan Antero
del pituudet["Antero"]
print(pituudet)
 ```

Ohjelma tulostaa:
```
{'Liisa': 171, 'Antero': 145, 'Aune': 164}
{'Liisa': 171, 'Aune': 164}
 ```

Alkioiden poisto silmukan sisällä voi sotkea iteroinnin. Tarkastellaan seuraavassa esimerkkiä, jossa käydään silmukka läpi, tulostetaan jokainen alkio ja poistetaan alkio, jos se on parillinen. Huomaa, että alkion poisto johtaa siihen, että silmukka hyppää seuraavan alkion yli ja lopulta silmukan suoritus päättyyy virheeseen, koska lista on lyhyempi kuin mitä se oli silmukan suoritusta aloitettaessa.

```python 
lista = [1, 2, 3, 4, 6, 7, 8, 10, 11]

for i in range(len(lista)):
    alkio = lista[i]
    print(alkio)

    if alkio % 2 == 0:
        del lista[i]
 ```

Ohjelma tulostaa:
``` 
1
2
4
7
8
11
Traceback (most recent call last):
  File "poisto.py", line 8, in <module>
    del lista[alkio]
IndexError: list assignment index out of range
 ```

Alkioiden poisto silmukassa pitää siis toteuttaa jollain toisella tavalla, esimerkiksi while-lauseella tai poistamisen sijasta kopioimalla säilytettävät alkiot toiseen tietorakenteeseen.