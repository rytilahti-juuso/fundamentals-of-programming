---
sidebar_position: 1
---

# Tiedostojen lukeminen

Olemme tähän asti käyttäneet syötteiden lukemiseen käyttäjältä input-funktiota. Se on näppärä tapa silloin, kun syötettävää dataa ei ole kovin paljoa.

Dataa voi kuitenkin olla huomattavan paljon - jopa gigatavuja. Suuremman datasetin syöttäminen ohjelmalle yksi luku kerrallaan olisi paitsi hyvin hidasta, myös erittäin virhealtista. Tarvitaan siis parempi keino.

Pythonissa voidaan melko helposti lukea ja kirjoittaa datatiedostoja. Yleensä syötedata on valmiiksi tekstimuodossa, tai se on ainakin helppo siirtää binäärimuodosta (esimerkiksi Excel-tiedosto) tekstimuotoiseksi.

Tekstimuotoisella tiedostolla tarkoitetaan siis tiedostoa, joka muodostuu **pelkästään tekstistä**. Esimerkiksi Word-tiedostossa on paljon muutakin kuin tekstiä (muotoilutietoja, kuvia, taulukoita jne.), joten sen käsittely omassa ohjelmassa ilman ulkoista kirjastoa ei onnistu kovinkaan helposti.

## Tiedoston läpikäynti for-lauseella

Oletetaan, että meillä on käytössä seuraava tiedosto `tarina.txt`:

``` 
Olipa kerran pieni ohjelmoija.
Ohjelmoija asui talossa ja ohjelmoi aamusta iltaan.
Nukkuessaan ohjelmoija uneksi ohjelmoinnista.
Sellainen oli pieni ohjelmoija.
 ```

Yksinkertaisin tapa lukea tiedoston sisältö on avata tiedosto open-funktiolla ja käydä läpi rivit yksitellen for-lauseella. Näin saadaan luettua tiedoston sisältö yksi rivi kerrallaan:

```python 
with open("tarina.txt") as tiedosto:
    for rivi in tiedosto:
        print(rivi)
 ```

Ohjelma tulostaa:
```
Olipa kerran pieni ohjelmoija.

Ohjelmoija asui talossa ja ohjelmoi aamusta iltaan.

Nukkuessaan ohjelmoija uneksi ohjelmoinnista.

Sellainen oli pieni ohjelmoija.
 ```

Tarkastellaan esimerkkiä hiukan tarkemmin. Funktio **open** on ympäröity **with**-lauseen sisään. Näin käyttäjän ei tarvitse huolehtia resurssin (tässä tapauksessa tiedoston) sulkemisesta käytön jälkeen, vaan Python sulkee sen automaattisesti sen jälkeen, kun with-lausetta seuraavasta lohkosta poistutaan. Funktio open saa parametrikseen tiedoston nimen (ja tiedostopolun, jos tiedosto ei löydy oletushakemistosta - eli yleensä samasta hakemistosta kuin missä ohjelmatiedosto sijaitsee).

Funktio open avaa esimerkissä tiedoston **lukutilassa**. Tämän jälkeen tiedoston sisältö voidaan iteroida for-lauseella samalla tavalla kuin vaikkapa listan alkiot. Silmukka poimii tiedostosta rivit yksi kerrallaan ja palauttaa ne merkkijonoina.

Huomaa, että tiedostoa luettaessa jokaisen rivin perässä on oletuksena rivinvaihtoa kuvaava merkki "\n" (kyseessä on yksi merkki, vaikka se esitetään kahdella merkillä). Tämä huomataan esimerkiksi siitä, että tulostettaessa tiedoston sisältö ruudulle tulostuu rivien väliin "ylimääräinen" välilyönti. Yleensä kyseiset merkit halutaan poistaa - näppärästi tämä käy vaikkapa strip()-funktiolla, joka tosin poistaa samalla myös muut tyhjät merkit merkkijonon alusta ja lopusta. Jos haluat säilyttää muut merkit (esimerkiksi välilyönnit rivin alussa tai lopussa), voit vaikkapa korvata rivinvaihdon tyhjällä merkkijonolla replace-metodilla:

```python 
with open("tarina.txt") as tiedosto:
    for rivi in tiedosto:
        # Poistetaan tyhjät merkit alusta ja lopusta
        rivi = rivi.strip()
        print(rivi)
 ```

Ohjelma tulostaa:
```
Olipa kerran pieni ohjelmoija.
Ohjelmoija asui talossa ja ohjelmoi aamusta iltaan.
Nukkuessaan ohjelmoija uneksi ohjelmoinnista.
Sellainen oli pieni ohjelmoija.
 ```

## Muita tapoja tiedoston lukemiseen

Tiedoston lukemiseen on Pythonissa for-lauseen lisäksi myös muita tapoja. Koko tiedoston sisältö voidaan lukea metodilla read. Metodi palauttaa tiedoston sisällön yhtenä merkkijonona:

```python 
with open("tarina.txt") as tiedosto:
    sisalto = tiedosto.read()
    
    # korvataan sana tekstissä
    sisalto = sisalto.replace("pieni", "keskikokoinen")
    
    print(sisalto)
 ```

Ohjelma tulostaa:
```
Olipa kerran keskikokoinen ohjelmoija.
Ohjelmoija asui talossa ja ohjelmoi aamusta iltaan.
Nukkuessaan ohjelmoija uneksi ohjelmoinnista.
Sellainen oli keskikokoinen ohjelmoija.
 ```

Joskus myös metodi **readlines()** on hyödyllinen. Se palauttaa tiedoston sisällön listana niin, että jokainen listan alkio vastaa yhtä tiedoston riviä.

```python 
# Funktio palauttaa tiedoston sisällön
# Rivinvaihdot on poistettu
def tiedosto_listana(tiedostonimi: str) -> list:
    with open(tiedostonimi) as tiedosto:
        sisalto = tiedosto.readlines()

    for i in range(len(sisalto)):
        sisalto[i] = sisalto[i].replace("\n","")

    return sisalto


lista = tiedosto_listana("tarina.txt")
print(f"Tiedostossa oli {len(lista)} riviä:")
for rivi in lista:
    print(rivi)
 ```

Ohjelma tulostaa:
``` 
Tiedostossa oli 4 riviä:
Olipa kerran pieni ohjelmoija.
Ohjelmoija asui talossa ja ohjelmoi aamusta iltaan.
Nukkuessaan ohjelmoija uneksi ohjelmoinnista.
Sellainen oli pieni ohjelmoija.
 ```

Huomaa kuitenkin, että kun käsitellään hyvin suuria tiedostoja, on mahdollista, että koko tiedosto ei mahdu kerralla muistiin. Tällaisessa tapauksessa for-silmukan avulla iterointi voi olla toimivampi vaihtoehto - siinä kun tiedostoa luetaan yksi rivi kerrallaan.