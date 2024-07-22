---
sidebar_position: 3
---

# Tiedoston kirjoittaminen

Vaikka tiedoston lukeminen onkin yleisempää, on silloin tällöin tarvetta myös kirjoittaa tiedostoja. Tyypillinen esimerkki olisi vaikkapa tilanne, jossa luetaan jokin lähdetiedosto ja kirjoitetaan muokkausten jälkeen tiedot - tai osa niistä - toiseen tiedostoon. Myös erilaiset ohjelmien lokitiedostot ja mittausten tallennus ovat melko tyypillisiä tilanteita, joissa tiedostoon kirjoittaminen on tarpeellista.

Myös tiedostoon kirjoittaessa tiedosto avataan open-funktiolla. Erotuksena on se, että funktiolle annetaan nimen lisäksi toinen parametri, jossa määritetään avattavan tiedoston **tilaksi w** (eli write). Avaamisen jälkeen tiedostoon voidaan kirjoittaa merkkijonoja metodin write avulla.

Huomaa, että w-moodissa tiedoston avaaminen

- luo uuden tiedoston, jos tiedostoa ei ole olemassa TAI
- ylikirjoittaa kaiken olemassaolevan tiedon tiedostossa, jos se on jo olemassa.

Tiedostojen kirjoittamisen kanssa **pitää siis olla äärimmäisen varovainen**.

Seuraava esimerkki luo tiedoston moikka.txt ja kirjoittaa sinne pari riviä tekstiä:

```python 
# Avataan tiedosto kirjoitustilassa
# eli tilassa "w"
with open("moikka.txt", "w") as tiedosto:
    # Liitetään rivin perään rivinvaihto
    tiedosto.write("Moi kaikki" + "\n")

    # Toki vaihdon voi suoraan kirjoittaa
    # samaan merkkijonoon
    tiedosto.write("Tässä on toinen rivi tekstiä.\n")

    tiedosto.write("Ja vielä yksi rivi.")
 ```

Esimerkin suorittamisen jälkeen tiedosto näyttää tältä:

```
Moi kaikki
Tässä on toinen rivi tekstiä.
Ja vielä yksi rivi.
 ```

Huomaa, että kun lukiessa rivinvaihdot pitää yleensä poistaa, tulee ne vastaavasti kirjoittaessa lisätä. Jos rivinvaihtoja ei kirjoiteta….

```python 
with open("moikka.txt", "w") as tiedosto:
    tiedosto.write("Moi kaikki")
    
    tiedosto.write("Tässä on toinen rivi tekstiä.")

    tiedosto.write("Ja vielä yksi rivi.")
 ```

...tiedosto näyttää kirjoittamisen jälkeen tältä:

``` 
Moi kaikkiTässä on toinen rivi tekstiä.Ja vielä yksi rivi.
 ```

## Eri tyyppisten tietojen kirjoittaminen

Huomaa, että write-metodilla voidaan kirjoittaa vain merkkijonomuotoista tietoa. Tämä tarkoittaa, että muussa muodossa oleva tieto tulee ensin muuntaa merkkijonoksi.

Yksittäinen luku voidaan muuntaa helposti merkkijonoksi **str**-metodilla:

```python 
luku = 10
merkkijonona = str(luku)

print("Luku on " + merkkijonona)

luku1 = 10
luku2 = 20
luku3 = 30

luvut = str(luku1) + ", " + str(luku2) + ", " + str(luku3)
print(luvut)
 ```

Ohjelma tulostaa:
```
Luku on 10
10, 20, 30
 ```

Esimerkkifunktio saa parametrikseen listan kokonaislukuja ja kirjoittaa ne tiedostoon **luvut.txt** siten, että jokaisella rivillä on yksi luku:

```python 
def kirjoita_tiedostoon(luvut: list):
    with open("luvut.txt", "w") as tiedosto:
        for luku in luvut:
            tiedosto.write(str(luku) + "\n")


# Testataan
lista = [1,2,3,1,2,3,4,5,6,4,5,6]
kirjoita_tiedostoon(lista)
 ```

Ohjelman suorituksen jälkeen tiedosto näyttää tältä:

``` 
1
2
3
1
2
3
4
5
6
4
5
6
 ```

Jos halutaan kirjoittaa yhdelle riville useampi datapiste, yksittäisten tietojen ja pilkkujen liittäminen yhteen katenoimalla menee helposti monimutkaiseksi. Yksi mahdollinen ratkaisutapa on käyttää f-merkkijonoa kirjoitettavan merkkijonon muodostamiseen:

```python 
def kirjoita_opiskelijat(lista: list):
    # Opiskelijatuplessa tiedot muodossa
    # nimi (merkkijono)
    # opiskelijanumero (kokonaisluku)
    # opintopisteet (kokonaisluku)
    # kengän koko (liukuluku)
    with open("opiskelijat.csv", "w") as t:
        for opiskelija in lista:
            s = f"{opiskelija[0]}, {str(opiskelija[1])}, "
            s += f"{str(opiskelija[2])}, {str(opiskelija[3])}"
            s += "\n"

            t.write(s)


# Testataan
o1 = ("Olli Opiskelija", 12345, 23, 43.5)
o2 = ("Outi Opiskelija", 54321, 89, 38.0)
o3 = ("Kalle Keksitty", 99999, 142, 46.25)
o4 = ("Olivia Olematon", 101010, 214, 35.5)

kirjoita_opiskelijat([o1, o2, o3, o4])
 ```

Tiedosto **opiskelijat.csv** näyttää ohjelman suorituksen jälkeen tältä:
```python 
Olli Opiskelija, 12345, 23, 43.5
Outi Opiskelija, 54321, 89, 38.0
Kalle Keksitty, 99999, 142, 46.25
Olivia Olematon, 101010, 214, 35.5
 ```

Toinen  tapa on käyttää Pythonin join-metodia, joka yhdistää **merkkijonotaulukon alkiot** yhdeksi merkkijonoksi. Huomaa, että hiukan nurinkurisesti metodi kohdistuu käytettävään välimerkkiin ja purettava tietorakenne annetaan parametrina.

Metodi toimii siis esimerkiksi näin:
```python 
# Merkkijonolista
nimet = ["Olli", "Oskari", "Petra", "Pirkko"]

# Yhdistetään eri tavoin join-metodilla
mjono1 = " ".join(nimet)
print(mjono1)

mjono2 = ", ".join(nimet)
print(mjono2)

mjono3 = ";".join(nimet)
print(mjono3)

mjono4 = " ja ".join(nimet)
print(mjono4)
 ```

Ohjelma tulostaa:
```
Olli Oskari Petra Pirkko
Olli, Oskari, Petra, Pirkko
Olli;Oskari;Petra;Pirkko
Olli ja Oskari ja Petra ja Pirkko
 ```

Jos taulukossa oleva tieto ei ole valmiiksi merkkijonomuotoista, ei join-metodi toimi. Tällöin taulukko pitää ensin muuntaa merkkijonoja sisältäväksi taulukoksi. Tämä onnistuu luonnollisesti esimerkiksi for-silmukassa str-funktiota kutsumalla:

```python 
def muuta_merkeiksi(luvut: list) -> str:
    mluvut = []
    for luku in luvut:
        mluvut.append(str(luku))

    return ",".join(mluvut)


# Testataan
matriisi = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [4,3,2,1]]

with open("matriisi.csv", "w") as t:
    for rivi in matriisi:
        t.write(muuta_merkeiksi(rivi) + "\n")
 ```

Ohjelman suorituksen jälkeen tiedosto **matriisi.csv** näyttää tältä:
```
1,2,3,4
5,6,7,8
9,10,11,12
4,3,2,1
 ```

Hiukan suoraviivaisempi (ja "Pythonmaisempi") tapa on käyttää muuntamiseen **listakoostetta** seuraavan esimerkin mukaisesti:

```python 
def muuta_merkeiksi(luvut: list) -> str:
    # listakooste muodostaa lukulistasta merkkijonolistan
    mluvut = [str(luku) for luku in luvut]
    return ",".join(mluvut)


# Testataan
matriisi = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [4,3,2,1]]

with open("matriisi.csv", "w") as t:
    for rivi in matriisi:
        t.write(muuta_merkeiksi(rivi) + "\n")
 ```
Ohjelman tulostus on vastaava kuin edellisessä esimerkissä.

Voit halutessasi hyödyntää esimerkkiä tämän kerran tehtävissä, tarkemmin siihen paneudutaan kuitenkin vasta ensi viikolla.