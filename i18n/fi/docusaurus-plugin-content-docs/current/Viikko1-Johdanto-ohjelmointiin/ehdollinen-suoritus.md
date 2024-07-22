---
sidebar_position: 5
---

# Ehdollinen suoritus

Aikaisemmin mainittiin, että ohjelmoija voi vaikuttaa ohjelman lauseiden suoritusjärjestykseen. Tyypillinen tapa kontrolloida ohjelman suoritusta on **ehdollinen suoritus**. Ehdollisessa suorituksessa ideana on, että ohjelmaan määritellään lohko (tai lohkoja), joka suoritetaan ainoastaan silloin kun jokin **ehto on tosi**.

**Lohkolla** tarkoitetaan yhtä tai useampaa yhteen kuuluvaa koodiriviä. Pythonissa lohko merkitään sisentämällä lohkoon kuuluvat rivit samalle tasolle. Sisennykseen käytetään joko välilyöntejä tai tabulaattoria (tab-näppäimellä).

![](/img/w1-4.png)

Ehdollisesti suoritettava lohko toteutetaan if-lauseella. Ehtolauseen kielioppi näyttää tältä:

```python 
if <ehto>:
    <suoritettava lohko>
 ```

Ehtolauseessa ehdon jälkeinen sisennetty lohko suoritetaan ainoastaan silloin, kun ehto on tosi. Jos ehto on epätosi, hypätään kokonaan lohkon yli:

![](/img/w1-5.png)

Tarkastellaan tällä kerralla ehdon muodostamista yhtäsuuruusoperaattorin avulla. Operaattorilla voidaan tarkastaa, onko jonkin lausekkeen arvo täsmälleen sama kuin toisen lausekkeen. Käytännössä tarkastelemme aluksi, onko jollain muuttujalla täsmälleen haluttu arvo. Operaattori koostuu kahdesta yhtäsuuruusmerkistä - tämä siksi, että se eroaa muuttujan asetusoperaattorista.

Esimerkkiohjelma pyytää käyttäjää syöttämään nimen, ja tulostaa sitten viestin "Moi Pekka", jos käyttäjä antaa nimekseen merkkijonon "Pekka Python". Lopuksi tulostetaan viesti "Ohjelma loppu" riippumatta nimestä. Ehdollisesti suoritettavaan lohkoon kuuluu siis ainoastaan yksi rivi (eli rivi, jolla tulostetaan "Moi Pekka!"):

```python 
# Kysytään ensin nimi
nimi = input("Syötä nimesi: ")

# Jos nimi on Pekka Python...
if nimi == "Pekka Python":
    print("Moi Pekka!")

# Tämä suoritetaan joka tapauksessa
print("Ohjelma loppu.")
 ```

Esimerkkisuoritus 1:
```python 
Syötä nimesi: Pekka Python
Moi Pekka!
Ohjelma loppu.
 ```

Esimerkkisuoritus 2:
```python 
Syötä nimesi: Jarmo Java
Ohjelma loppu.
 ```

Toinen esimerkkiohjelma pyytää käyttäjää syöttämään kaksi lukua ja tulostaa tiedon siitä, onko lukujen summa täsmälleen 10:

```python 
# Lue luvut
luku1 = int(input("Anna luku 1: "))
luku2 = int(input("Anna luku 2: "))

if luku1 + luku2 == 10:
    print("Syötit luvut", luku1, "ja", luku2)
    print("...joiden summa on tasan 10")

print("Kiitos syötöstä!")
 ```

Esimerkkisuoritus 1:
```python 
Anna luku 1: 7
Anna luku 2: 3
Syötit luvut 7 ja 3
...joiden summa on tasan 10
Kiitos syötöstä!
 ```

Esimerkkisuoritus 2:
```python 
Anna luku 1: 8
Anna luku 2: 5
Kiitos syötöstä!
 ```