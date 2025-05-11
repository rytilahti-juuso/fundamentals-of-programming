---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Ehdot toistolauseessa

Viime kerralla kaikki ehtolausekkeet silmukoissa olivat muotoa

while True:

Tällaisessa silmukassa sen suorituksen katkaisu tapahtuu break-lauseella. Tämäntapainen toisto sopii erinomaisesti esimerkiksi tilanteeseen, jossa kysytään käyttäjältä toistuvasti jotain syötettä, ja tietynlaisen syötteen (esimerkiksi tyhjä merkkijono, negatiivinen luku tms.) antaminen lopettaa silmukan.

Toistolauseeseen voidaan myös kirjoittaa suoraan jokin monipuolisempi ehto, jonka pitää olla voimassa, että silmukka suoritetaan.

Esimerkiksi

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
    ``` 
    X
    XX      
    XXX     
    XXXX    
    XXXXX   
    XXXXXX  
    XXXXXXX 
    XXXXXXXX
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=leveys%20%3D%201%0A%0A%23%20Silmukkaa%20suoritetaan%20niin%20kauan%20kun%20ehto%20on%20tosi%0Awhile%20leveys%20%3C%3D%208%3A%0A%20%20%20%20print%28leveys%20*%20%22X%22%29%0A%20%20%20%20%0A%20%20%20%20%23%20Muutetaan%20leveytt%C3%A4,%20ett%C3%A4%20silmukka%20p%C3%A4%C3%A4ttyy%20joskus%0A%20%20%20%20%23%20Lauseke%20%0A%20%20%20%20%23%20leveys%20%2B%3D%201%20%0A%20%20%20%20%23%20on%20sama%20kuin%20%0A%20%20%20%20%23%20leveys%20%3D%20leveys%20%2B%201%0A%20%20%20%20leveys%20%2B%3D%201&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Yleisesti toistolausetta voidaankin kuvata seuraavan, jo viime kerralla esitetyn kuvaajan avulla:

![](/img/img-fi/w2-2.png)

Esimerkiksi silmukka, joka tulostaa kaikki luvut väliltä 1 ja 19 kahden askeleen välein voisi näyttää seuraavalta:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luku = 1

    while luku <= 19:
        print(luku)

        luku += 2
    ```

    Ohjelma tulostaa:
    ``` 
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku%20%3D%201%0A%0Awhile%20luku%20%3C%3D%2019%3A%0A%20%20%20%20print%28luku%29%0A%0A%20%20%20%20luku%20%2B%3D%202&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

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

Ikuinen silmukka voi aiheuttaa merkittäviä saatavuusongelmia ohjelmistossa. Tällöin sama prosessi toistuu loputtomasti ilman päätepistettä, mikä johtaa odottamattomaan resurssien kulutukseen, kuten prosessoritehon ja muistin ylikuormittumiseen. Tämän seurauksena ohjelmisto voi hidastua huomattavasti tai lakata vastaamasta kokonaan (tunnetaan nimellä denial of service eli palvelunestotila). Tämä on myös turvallisuusriski, koska se rajoittaa pääsyä kriittisiin resursseihin ja voi olla kyberhyökkäyksen lähtökohta. Ohjelmoijan tulisi aina varmistaa, että while-silmukassa on saavutettavissa oleva lopetusehto. Haluatko tietää lisää? Lue https://cwe.mitre.org/data/definitions/835.html.

## Ehtolauseke vai True?

Huomaa, että ehdon kirjoittaminen toistolauseeseen tai break-lauseen käyttäminen silmukan sisällä ovat vaihtoehtoisia tapoja - molemmilla voi toteuttaa minkä vain silmukan.

Alla on kuvattu kahdella vaihtoehtoisella tavalla ohjelma, joka tulostaa tiedon käyttäjän antamien lukujen parillisuudesta kunnes käyttäjä syöttää luvun nolla.

Aluksi versio, joka käyttää "ikuista" silmukkaa ja break-lausetta:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
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
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=while%20True%3A%0A%20%20%20%20luku%20%3D%20int%28input%28%22Anna%20luku%3A%20%22%29%29%0A%0A%20%20%20%20if%20luku%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20break%0A%20%20%20%20elif%20luku%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20print%28%22Luku%20oli%20parillinen%22%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28%22Luku%20oli%20pariton%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Sen jälkeen sama ohjelma, jossa ehto on kirjoitettu while-lauseeseen:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luku = int(input("Anna luku: "))

    while luku != 0:
        if luku % 2 == 0:
            print("Luku oli parillinen")
        else:
            print("Luku oli pariton")

        luku = int(input("Anna luku: "))
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku%20%3D%20int%28input%28%22Anna%20luku%3A%20%22%29%29%0A%0Awhile%20luku%20!%3D%200%3A%0A%20%20%20%20if%20luku%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20print%28%22Luku%20oli%20parillinen%22%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28%22Luku%20oli%20pariton%22%29%0A%0A%20%20%20%20luku%20%3D%20int%28input%28%22Anna%20luku%3A%20%22%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

On tilannekohtaista (ja mielipidekysymys), kumpi tapa on parempi. Jotkut ohjelmoijat suosivat aina silmukoita, joissa ehtolauseke on annettu, kun toiset taas käyttävät yleisemmin "ikuista" silmukkaa, jonka suoritus katkaistaan tarvittaessa break-lauseella.

Ehkä yleisemmin voi sanoa, että molemmilla on käyttötarkoituksensa. Parin viikon päästä tutustutaan vielä definiittiin toistolauseeseen, joka laajentaa käytössä olevaa silmukkatyökaluvalikoimaa entisestään.