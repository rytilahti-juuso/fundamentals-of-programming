---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ehdollinen suoritus

Aikaisemmin mainittiin, että ohjelmoija voi vaikuttaa ohjelman lauseiden suoritusjärjestykseen. Tyypillinen tapa kontrolloida ohjelman suoritusta on **ehdollinen suoritus**. Ehdollisessa suorituksessa ideana on, että ohjelmaan määritellään lohko (tai lohkoja), joka suoritetaan ainoastaan silloin kun jokin **ehto on tosi**.

**Lohkolla** tarkoitetaan yhtä tai useampaa yhteen kuuluvaa koodiriviä. Pythonissa lohko merkitään sisentämällä lohkoon kuuluvat rivit samalle tasolle. Sisennykseen käytetään joko välilyöntejä tai tabulaattoria (tab-näppäimellä).

![](/img/img-fi/w1-4.png)

Ehdollisesti suoritettava lohko toteutetaan if-lauseella. Ehtolauseen kielioppi näyttää tältä:

```python 
if <ehto>:
    <suoritettava lohko>
 ```

Ehtolauseessa ehdon jälkeinen sisennetty lohko suoritetaan ainoastaan silloin, kun ehto on tosi. Jos ehto on epätosi, hypätään kokonaan lohkon yli:

![](/img/img-fi/w1-5.png)

Tarkastellaan tällä kerralla ehdon muodostamista yhtäsuuruusoperaattorin avulla. Operaattorilla voidaan tarkastaa, onko jonkin lausekkeen arvo täsmälleen sama kuin toisen lausekkeen. Käytännössä tarkastelemme aluksi, onko jollain muuttujalla täsmälleen haluttu arvo. Operaattori koostuu kahdesta yhtäsuuruusmerkistä - tämä siksi, että se eroaa muuttujan asetusoperaattorista.

Esimerkkiohjelma pyytää käyttäjää syöttämään nimen, ja tulostaa sitten viestin "Moi Pekka", jos käyttäjä antaa nimekseen merkkijonon "Pekka Python". Lopuksi tulostetaan viesti "Ohjelma loppu" riippumatta nimestä. Ehdollisesti suoritettavaan lohkoon kuuluu siis ainoastaan yksi rivi (eli rivi, jolla tulostetaan "Moi Pekka!"):

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Kysyt%C3%A4%C3%A4n%20ensin%20nimi%0Animi%20%3D%20input%28%22Sy%C3%B6t%C3%A4%20nimesi%3A%20%22%29%0A%0A%23%20Jos%20nimi%20on%20Pekka%20Python...%0Aif%20nimi%20%3D%3D%20%22Pekka%20Python%22%3A%0A%20%20%20%20print%28%22Moi%20Pekka!%22%29%0A%0A%23%20T%C3%A4m%C3%A4%20suoritetaan%20joka%20tapauksessa%0Aprint%28%22Ohjelma%20loppu.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toinen esimerkkiohjelma pyytää käyttäjää syöttämään kaksi lukua ja tulostaa tiedon siitä, onko lukujen summa täsmälleen 10:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Lue%20luvut%0Aluku1%20%3D%20int%28input%28%22Anna%20luku%201%3A%20%22%29%29%0Aluku2%20%3D%20int%28input%28%22Anna%20luku%202%3A%20%22%29%29%0A%0Aif%20luku1%20%2B%20luku2%20%3D%3D%2010%3A%0A%20%20%20%20print%28%22Sy%C3%B6tit%20luvut%22,%20luku1,%20%22ja%22,%20luku2%29%0A%20%20%20%20print%28%22...joiden%20summa%20on%20tasan%2010%22%29%0A%0Aprint%28%22Kiitos%20sy%C3%B6t%C3%B6st%C3%A4!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>