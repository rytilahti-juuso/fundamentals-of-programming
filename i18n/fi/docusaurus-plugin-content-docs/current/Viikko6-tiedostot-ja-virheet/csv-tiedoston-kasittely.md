---
sidebar_position: 2
---

# CSV-tiedoston käsittely

Usein tiedostossa on yhdellä rivillä enemmän kuin yksi datapiste. Tyypillisesti esimerkiksi numeerista dataa sisältävässä tiedostossa voi olla useita lukuja samalla rivillä. Luvut on erotettu toisistaan jollain erotinmerkillä, esimerkiksi pilkulla, tabulaattorilla tai puolipisteellä.

Tarkastelllaan esimerkkinä tiedostoa luvut.csv:

```
18,6,18,18,12,2,1,16,13,15,8,10
10,11,18,19,20,5,3,12,1,12,20,15
17,13,9,17,6,18,3,5,20,17,10,12
13,12,15,18,4,12,16,8,18,1,13,3
8,12,6,4,19,17,12,4,6,5,9,17
 ```

Tiedosto luetaan aikaisempien esimerkkien tapaan rivi kerrallaan. Kun rivi on luettu muistiin, se pitää saada jotenkin purettua välimerkkien kohdalta palasiksi. Tämä onnistuu helposti esimerkiksi metodin **split** avulla. Metodille annetaan parametriksi haluttu välimerkki, ja se palauttaa listan välimerkin erottamista palasista (tai koko merkkijonon, jos siitä ei löytynyt yhtään annettua välimerkkiä):

```python 
# Esimerkkejä split-metodin käytöstä
rivi = "1,2,3,4,2,3,4,5,6"

palat = rivi.split(",")
print(palat)

for pala in palat:
    print(pala)

rivi2 = "eka;toka;kolmas;neljäs;viides"

sanat = rivi2.split(";")
print(sanat)

lause = "Tiku ja Taku ja Tupu ja Hupu ja Lupu"
hahmot = lause.split(" ja ")
print(hahmot)
 ```

Ohjelma tulostaa:
```
['1', '2', '3', '4', '2', '3', '4', '5', '6']
1
2
3
4
2
3
4
5
6
['eka', 'toka', 'kolmas', 'neljäs', 'viides']
['Tiku', 'Taku', 'Tupu', 'Hupu', 'Lupu']
 ```

Koska split-metodi palauttaa **merkkijonolistan**, pitää alkiot tarvittaessa vielä muuntaa toiseen muotoon. Tämä onnistuu esimerkiksi aikaisemmin esitetyn int-funktion avulla.
Esimerkkiohjelma lukee edellä esitetyn tiedoston `luvut.csv`, purkaa joka rivin palasiksi, muuntaa palaset kokonaisluvuiksi ja laskee lukujen summan:

```python 
with open("luvut.csv") as tiedosto:
    luvut = []
    for rivi in tiedosto:
        luvut_rivilla = rivi.strip().split(",")
        for pala in luvut_rivilla:
            luvut.append(int(pala))

    print("Lukujen summa:", sum(luvut))
    print("Maksimi:", max(luvut))
    print("Minimi:", min(luvut))
 ```

Ohjelma tulostaa:
```
Lukujen summa: 682
Maksimi: 20
Minimi: 1
 ```

Tarkastellaan vielä toista esimerkkiä. Tiedostossa `opiskelijat.txt` on jokaisella rivillä opiskelijasta seuraavat tiedot puolipisteillä eroteltuna:

- nimi (merkkijono)
- opiskelijanumero (kokonaisluku)
- opintopistemäärä (kokonaisluku)
- kengän numero (liukuluku)

Tiedosto näyttää siis esimerkiksi tältä:

```
Olli Opiskelija;12345;23;44.25
Frank Fuksi;54321;7;40.0
Pirjo Piltti;99999;11;36.5
Outi Opiskelija;88888;89;37.0
Ville Valmistuja;987987;315;47.25
Kirsi Kandi;887766;191;35.0
 ```

Esimerkkiohjelma lukee tiedoston ja purkaa jokaisen rivin tupleksi. Samalla muunnetaan merkkijonomuotoinen tieto oikeaan muotoon. Tuplet tallennetaan listaan, joka lopulta palautetaan:

```python 
def lue_opiskelijat() -> list:
    olista = []
    with open("opiskelijat.txt") as tiedosto:
        for rivi in tiedosto:
            odata = rivi.strip().split(";")
            opiskelija = (odata[0], int(odata[1]), int(odata[2]), float(odata[3]))
            olista.append(opiskelija)

    return olista

for opiskelija in lue_opiskelijat():
    print(opiskelija)
 ```

Ohjelma tulostaa:
```
('Olli Opiskelija', 12345, 23, 44.25)
('Frank Fuksi', 54321, 7, 40.0)
('Pirjo Piltti', 99999, 11, 36.5)
('Outi Opiskelija', 88888, 89, 37.0)
('Ville Valmistuja', 987987, 315, 47.25)
('Kirsi Kandi', 887766, 191, 35.0)
 ```
