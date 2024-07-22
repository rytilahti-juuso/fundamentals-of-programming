---
sidebar_position: 1
---

# Ehdot toistolauseessa

Viime kerralla kaikki ehtolausekkeet silmukoissa olivat muotoa

while True:

Tällaisessa silmukassa sen suorituksen katkaisu tapahtuu break-lauseella. Tämäntapainen toisto sopii erinomaisesti esimerkiksi tilanteeseen, jossa kysytään käyttäjältä toistuvasti jotain syötettä, ja tietynlaisen syötteen (esimerkiksi tyhjä merkkijono, negatiivinen luku tms.) antaminen lopettaa silmukan.

Toistolauseeseen voidaan myös kirjoittaa suoraan jokin monipuolisempi ehto, jonka pitää olla voimassa, että silmukka suoritetaan.

Esimerkiksi

```python 
leveys = 1

# Silmukkaa suoritetaan niin kauan kun ehto on tosi
while leveys <= 8:
    print(leveys * "X")
    
    # Muutetaan leveyttä, että silmukka päättyy joskus
    # Lauseke 
    # leveys += 1 
    # on sama kuin 
    # leveys = leveys + 1
    leveys += 1
 ```

Ohjelma tulostaa:
```python 
X
XX      
XXX     
XXXX    
XXXXX   
XXXXXX  
XXXXXXX 
XXXXXXXX
 ```

Yleisesti toistolausetta voidaankin kuvata seuraavan, jo viime kerralla esitetyn kuvaajan avulla:

![](/img/w2-2.png)

Esimerkiksi silmukka, joka tulostaa kaikki luvut väliltä 1 ja 19 kahden askeleen välein voisi näyttää seuraavalta:

```python 
luku = 1

while luku <= 19:
    print(luku)

    luku += 2
 ```

Ohjelma tulostaa:
```python 
1
3
5
7
9
11
13
15
17
19
 ```
Huomaa, että tällaisella silmukalla on kolme osaa: alustus, ehto ja muutos:

```python 
# 1. ALUSTUS
# Alustetaan ehtolausekkeessa käytettävä(t) muuttuja(t)
luku = 1

# 2. EHTO
# Jos ehto on tosi, suoritetaan lohko
while luku <= 19:
    print(luku)

    # 3. MUUTOS
    # Tehdään jokin muutos, joka (usein) vie silmukan 
    # tilan lähemmäs sen loppumista
    luku += 2
 ```

Jos jokin osa-alue on virheellinen, voi syntyä tahattomasti ikuinen silmukka.

Esimerkiksi seuraava ohjelma ei pääty ennen kuin käyttäjä painaa **CTRL + C** tai päättää muuten väkisin ohjelman suorituksen, koska ohjelmoija on sijoittanut muuttujan kasvatuksen ehtolauseen sisälle.

```python 
laskuri = 1

while laskuri < 100:
    print(laskuri)
    
    if laskuri % 2 == 0: 
        print(laskuri, "on parillinen!")  
        # Laskuria kasvatetaan vain kun se on parillinen,
        # joten se jää ikuisiksi ajoiksi tulostamaan ykköstä
        laskuri += 1
 ```

Ohjelma tulostaa:
```python 
1
1
1
1
jne...
 ```

## Ehtolauseke vai True?

Huomaa, että ehdon kirjoittaminen toistolauseeseen tai break-lauseen käyttäminen silmukan sisällä ovat vaihtoehtoisia tapoja - molemmilla voi toteuttaa minkä vain silmukan.

Alla on kuvattu kahdella vaihtoehtoisella tavalla ohjelma, joka tulostaa tiedon käyttäjän antamien lukujen parillisuudesta kunnes käyttäjä syöttää luvun nolla.

Aluksi versio, joka käyttää "ikuista" silmukkaa ja break-lausetta:

```python 
while True:
    luku = int(input("Anna luku: "))

    if luku == 0:
        break
    elif luku % 2 == 0:
        print("Luku oli parillinen")
    else:
        print("Luku oli pariton")
 ```

Sen jälkeen sama ohjelma, jossa ehto on kirjoitettu while-lauseeseen:

```python 
luku = int(input("Anna luku: "))

while luku != 0:
    if luku % 2 == 0:
        print("Luku oli parillinen")
    else:
        print("Luku oli pariton")

    luku = int(input("Anna luku: "))
 ```

On tilannekohtaista (ja mielipidekysymys), kumpi tapa on parempi. Jotkut ohjelmoijat suosivat aina silmukoita, joissa ehtolauseke on annettu, kun toiset taas käyttävät yleisemmin "ikuista" silmukkaa, jonka suoritus katkaistaan tarvittaessa break-lauseella.

Ehkä yleisemmin voi sanoa, että molemmilla on käyttötarkoituksensa. Parin viikon päästä tutustutaan vielä definiittiin toistolauseeseen, joka laajentaa käytössä olevaa silmukkatyökaluvalikoimaa entisestään.