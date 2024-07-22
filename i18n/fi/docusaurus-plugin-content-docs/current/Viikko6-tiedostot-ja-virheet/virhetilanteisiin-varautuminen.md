---
sidebar_position: 4
---

# Virhetilanteisiin varautuminen

Tiedostojen käsittely on tyypillinen esimerkki tilanteesta, joka voi johtaa virheeseen. Esimerkkejä mahdollista virhetilanteista ovat esimerkiksi puuttuva tai korruptoitunut tiedosto tai riittämättömät oikeudet tiedoston lukemiseen tai kirjoittamiseen.

Tällaisia virhetilanteita ei yleensä voida ohjelmallisesti korjata, mutta niihin voidaan ohjelmissa varautua. Hyvin toimiva ohjelma ei kaadu virheilmoitukseen vaikka tiedostoa ei voitaisikaan käsitellä, vaan kertoo käyttäjälle miksi ohjelmaa ei voida suorittaa ja mahdollisesti opastaa virhetilanteen korjaamiseen.

Virhetilanteet eivät sinänsä ole mitenkään sidoksissa tiedostoihin, vaan erilaisia virhetilanteita voi esiintyä muutenkin. Tyypillisesti virheet liittyvät yleensä tilanteisiin, joissa ohjelmaan tulee tietoa ulkopuolelta - esimerkiksi kun luetaan käyttäjältä syöte jossain muodossa.

Osaan tällaisista virheistä voimme varautua tarkastelemalla syötettä ehtolauseiden avulla. Seuraava ohjelma pyytää käyttäjää syöttämään ikänsä ja tarkastaa, että ikä on annettu (todennäköisesti ainakin) oikein:

```python 
ika = int(input("Anna ikäsi: "))

if ika < 0:
    print("Ikä ei voi olla negatiivinen!")

elif ika > 150:
    print("En usko, että olet näin vanha.")
 ```

Ehtolauseet eivät kuitenkaan riitä joka tilanteeseen. Esimerkin ohjelma kaatuu, jos käyttäjän syöttämää merkkijonoa ei voida tulkita kokonaisluvuksi **int**-funktiolla:

```
Anna ikäsi: kaksikymmentäkolme
Traceback (most recent call last):
  File "ika.py", line 1, in <module>
    ika = int(input("Anna ikäsi: "))
ValueError: invalid literal for int() with base 10: 'kaksikymmentäkolme'
 ```

## try-except

Pythonissa voidaan varautua erilaisiin virheisiin **try-except** -rakenteen avulla. Ideana on, että **try**-lohkon sisään sijoitetaan koodi, joka voi tuottaa virheen. Virhe otetaan kiinni try-lohkon jälkeen sijoitettavalla **except**-lauseella.

Tarkastellaan edellistä esimerkkiä niin, että ohjelmassa varaudutaan ValueError-tyyppiseen virheeseen merkkijonoa luvuksi parsiessa:

```python 
try:
    ika = int(input("Anna ikäsi: "))

    if ika < 0:
        print("Ikä ei voi olla negatiivinen!")

    elif ika > 150:
        print("En usko, että olet näin vanha.")

except ValueError:
    print("Ikä pitää antaa lukuna!")
 ```

Esimerkkisuoritus:
```
Anna ikäsi: kaksikymmentäkolme
Ikä pitää antaa lukuna!
 ```

Mikäli try-lohkossa tapahtuu virhe, ja virhettä vastaava except-lohko on määritelty, siirtyy suoritus heti virheen tapahduttua except-lohkoon.

Toinen esimerkki, jossa tiedostoa lukiessa varaudutaan OSError-tyyppiseen virheeseen, esimerkiksi siihen, että tiedostoa ei löydy:
```python 
try:
    lukulista = []
    with open("luvut.csv") as tiedosto:
        for rivi in tiedosto:
            luvut = [int(luku) for luku in rivi.strip().split(",")]
            lukulista.append(luvut)

    print(lukulista)
    
except OSError:
    print("Tiedostoa luvut.csv ei voida avata!")
    print("Tarkista, että tiedosto on olemassa ja että siihen on lukuoikeus.")
 ```

## Erilaiset virheet

Seuraavassa on listattu erilaisia tyypillisimpiä virheitä Pythonissa. Kattavan listauksen löydät esimerkiksi Pythonin dokumentaatiosta (https://docs.python.org/3/library/exceptions.html)

**ValueError**

Virhe johtuu yleensä siitä, että arvo on vääränlainen. Tyypillinen esimerkki on vaikkapa int-funktion kutsuminen parametrilla "kaksi", jota Python ei osaa parsia kokonaisluvuksi.

**TypeError**

Virhe johtuu siitä, että arvo on kokonaan väärää tyyppiä. Esimerkkinä vaikkapa kokonaisluvun tai merkkijonon välittäminen funktiolle sorted.

**OSError**

Virhe kattaa erilaisia käyttöjärjestelmän toimintaan liittyviä poikkeustilanteita. Tyypillisiä esimerkkejä ovat esimerkiksi tiedostojen käsittelyyn liittyvät virhetilanteet, kuten puuttuva tai väärän niminen tiedosto tai riittämättömät oikeudet tiedoston käsittelyyn.

**ZeroDivisionError**

Virhe johtuu siiitä, että yritetään jakaa nollalla. Tyypillisesti virhe voi tulla vastaan esimerkiksi silloin, kun listan tai merkkijonon pituus on nolla.

**IndexError tai KeyError**

Virheet johtuvat siitä, että yritetään viitata sellaiseen alkioon, jota käsiteltävässä tietorakenteessa ei ole. Tyypillinen esimerkki on vaikkapa liian suuren indeksin käyttäminen merkkijonon merkkiin tai listan alkioon viitatessa tai se, että yritetään hakea sanakirjasta alkiota avaimella, jota ei ole olemassa.

Huomaa, että useampia virheitä voidaan ottaa kiinni kirjoittamalla try-lohkon perään useampi except-lohko:

```python 
while True:
    try:
        luku1 = int(input("Jaettava: "))
        if luku1 == 0:
            break
        luku2 = int(input("Jakaja:   "))
        print(f"{luku1} jaettuna {luku2}:lla on {luku1 / luku2}")
    # Varaudutaan väärän muotoiseen lukuun
    except ValueError:
        print("Luvut pitää antaa numeroilla!")
    except ZeroDivisionError:
        print("Ei voi jakaa nollalla!")
 ```

Esimerkkisuoritus:
``` 
Jaettava: 5
Jakaja:   2
5 jaettuna 2:lla on 2.5
Jaettava: 10
Jakaja:   kolme
Luvut pitää antaa numeroilla!
Jaettava: 4
Jakaja:   0
Ei voi jakaa nollalla!
Jaettava: 0
 ```

On myös mahdollista ottaa kaikki poikkeukset kiinni jättämällä kiinniotettava poikkeus kokonaan määrittelemättä.

Huomaa kuitenkin, että tällöin myös ohjelmoijan tekemät virheet otetaan kiinni, mikä ei yleensä ole tarkoitus:
```python 
try:
    with open("tiedosto.txt") as tiedosto:
        for rivi in tiedotso:
            print(rivi)

except:
    print("Tiedostoa ei voi avata!")
 ```

Ohjelma tulostaa aina suorittaessa virheilmoituksen "Tiedostoa ei voi avata", koska ohjelmoija on kirjoittanut väärin muuttujan nimen kolmannella rivillä (tiedotso, kun pitäisi olla tiedosto). Koska kiinniotettavaa virhettä ei ole määritelty, Python ottaa kiinni myös ohjelmoijan virheen. Lähes aina on siis hyvä idea määritellä kiinniotettavat virheet erikseen!
