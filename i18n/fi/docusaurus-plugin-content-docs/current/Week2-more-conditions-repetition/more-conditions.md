---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lisää ehtoja

Viime viikolla aloitettiin tutustuminen ehtolauseeseen tarkastelemalla ehtoja, joissa tutkittiin kahden operandin yhtäsuuruutta. Lauseke

a == b

on siis tosi, mikäli lausekkeet a ja b saavat evaluoinnin jälkeen täsmälleen saman arvon. Yhtäsuuruus pätee niin lukuihin kuin merkkijonoihinkin.

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    if 50 == 25 + 25:
        print("Tämä on tosi")

    if 50 / 2 == 20:
        print("Tämä ei ollut tosi")

    if "Eka Vekara" == "Eka" + " " + "Vekara":
        print("Tämä on taas tosi")

    if "ABC" == "abc":
        print("Tämä ei ollut tosi")
    ```

    Ohjelma tulostaa:
    ``` 
    Tämä on tosi
    Tämä on taas tosi
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=if%2050%20%3D%3D%2025%20%2B%2025%3A%0A%20%20%20%20print%28%22T%C3%A4m%C3%A4%20on%20tosi%22%29%0A%0Aif%2050%20/%202%20%3D%3D%2020%3A%0A%20%20%20%20print%28%22T%C3%A4m%C3%A4%20ei%20ollut%20tosi%22%29%0A%0Aif%20%22Eka%20Vekara%22%20%3D%3D%20%22Eka%22%20%2B%20%22%20%22%20%2B%20%22Vekara%22%3A%0A%20%20%20%20print%28%22T%C3%A4m%C3%A4%20on%20taas%20tosi%22%29%0A%0Aif%20%22ABC%22%20%3D%3D%20%22abc%22%3A%0A%20%20%20%20print%28%22T%C3%A4m%C3%A4%20ei%20ollut%20tosi%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Monissa tapauksissa ehtojen määrittelyä voidaan helpottaa hyödyntämällä muitakin vertailuoperaattoreita kuin yhtäsuuruutta.

Kahden operandin erisuuruuutta voidaan esimerkiksi tarkastella erisuurusoperaattorilla !=. Lauseke

a != b

on siis tosi, mikäli lausekkeet a ja b eivät saa evaluoinnin jälkeen täsmälleen samaa arvoa.

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    eka = 10 * 10
    toka = 50

    if eka == toka:
        print("Ovat yhtäsuuria")

    if eka != toka:
        print("Ovat erisuuria")

    if "Eka Vekara" != "Eka" + "Vekara":
        print("Ei ollut sama jono, välilyönti puuttuu toisesta")
    ```

    Ohjelma tulostaa:
    ```python 
    Ovat erisuuria
    Ei ollut sama jono, välilyönti puuttuu toisesta
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=eka%20%3D%2010%20*%2010%0Atoka%20%3D%2050%0A%0Aif%20eka%20%3D%3D%20toka%3A%0A%20%20%20%20print%28%22Ovat%20yht%C3%A4suuria%22%29%0A%0Aif%20eka%20!%3D%20toka%3A%0A%20%20%20%20print%28%22Ovat%20erisuuria%22%29%0A%0Aif%20%22Eka%20Vekara%22%20!%3D%20%22Eka%22%20%2B%20%22Vekara%22%3A%0A%20%20%20%20print%28%22Ei%20ollut%20sama%20jono,%20v%C3%A4lily%C3%B6nti%20puuttuu%20toisesta%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Pienempi tai suurempi kuin

Lausekkeiden suuruusjärjestystä voidaan tarkastella matematiikasta tutuilla vertailuoperaattoreilla:

Lauseke

a < b

on tosi, jos evaluoinnin jälkeen lauseke a on suurusjärjestyksessä ennen lauseketta b. 

Lauseke

a > b

taas on tosi, jos a on suuruusjärjestyksessä b:n jälkeen. Esimerkiksi

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    eka = 25
    toka = 40

    if eka < toka:
        print("Eka on pienempi")

    if eka > toka:
        print("Eka on suurempi")

    if toka < eka:
        print("Toka on pienempi")

    if toka > eka:
        print("Toka on suurempi")
    ```

    Ohjelma tulostaa:
    ``` 
    Eka on pienempi
    Toka on suurempi
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=eka%20%3D%2025%0Atoka%20%3D%2040%0A%0Aif%20eka%20%3C%20toka%3A%0A%20%20%20%20print%28%22Eka%20on%20pienempi%22%29%0A%0Aif%20eka%20%3E%20toka%3A%0A%20%20%20%20print%28%22Eka%20on%20suurempi%22%29%0A%0Aif%20toka%20%3C%20eka%3A%0A%20%20%20%20print%28%22Toka%20on%20pienempi%22%29%0A%0Aif%20toka%20%3E%20eka%3A%0A%20%20%20%20print%28%22Toka%20on%20suurempi%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Huomaa, että lukujen lisäksi myös merkkijonojen suuruusjärjestystä voidaan vertailla. Merkkijonojen suuruus määräytyy yksittäisten merkkien järjestyksen mukaisesti, mikä taas riippuu käytettävästä merkistöstä. Yleensä järjestys noudattaa englannin kielen aakkosjärjestystä. Huomaa kuitenkin, että pienet ja isot kirjaimet lasketaan taas eri merkeiksi:

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    eka = "abc"
    toka = "defg"

    if eka < toka:
        print("Eka on pienempi")

    if eka > toka:
        print("Eka on suurempi")

    toka = "DEFG"

    if eka < toka:
        print("Nyt eka on pienempi")

    if eka > toka:
        print("Nyt eka on suurempi")
    ```

    Ohjelma tulostaa:
    ``` 
    Eka on pienempi
    Nyt eka on suurempi
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=eka%20%3D%20%22abc%22%0Atoka%20%3D%20%22defg%22%0A%0Aif%20eka%20%3C%20toka%3A%0A%20%20%20%20print%28%22Eka%20on%20pienempi%22%29%0A%0Aif%20eka%20%3E%20toka%3A%0A%20%20%20%20print%28%22Eka%20on%20suurempi%22%29%0A%0Atoka%20%3D%20%22DEFG%22%0A%0Aif%20eka%20%3C%20toka%3A%0A%20%20%20%20print%28%22Nyt%20eka%20on%20pienempi%22%29%0A%0Aif%20eka%20%3E%20toka%3A%0A%20%20%20%20print%28%22Nyt%20eka%20on%20suurempi%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Operaattoreiden perään voidaan kirjoittaa yhtäsuuruusmerkki, jolloin ne käytännössä vastaavat matematiikasta tuttuja operaattoreita pienempi kuin tai yhtäsuuri kuin ja suurempi kuin tai yhtäsuuri kuin.

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    luku1 = 10
    luku2 = 10
    luku3 = 20

    if luku1 <= luku2:
        print("Luku1 on pienempi tai yhtäsuuri kuin luku2")
    
    if luku1 <= luku3:
        print("Luku1 on pienempi tai yhtäsuuri kuin luku3")
    ```

    Ohjelma tulostaa:
    ``` 
    Luku1 on pienempi tai yhtäsuuri kuin luku2
    Luku1 on pienempi tai yhtäsuuri kuin luku3
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku1%20%3D%2010%0Aluku2%20%3D%2010%0Aluku3%20%3D%2020%0A%0Aif%20luku1%20%3C%3D%20luku2%3A%0A%20%20%20%20print%28%22Luku1%20on%20pienempi%20tai%20yht%C3%A4suuri%20kuin%20luku2%22%29%0A%20%20%20%20%0Aif%20luku1%20%3C%3D%20luku3%3A%0A%20%20%20%20print%28%22Luku1%20on%20pienempi%20tai%20yht%C3%A4suuri%20kuin%20luku3%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Jakojäännös

Jakojäännösoperaattori ei ole vertailuoperaattori, mutta se on usein hyödyllinen vertailuja tehdessä. Lauseke

A % B

palauttaa kokonaislukujakolaskun "A jaettuna B:llä" jakojäännöksen. Operaattori on hyödyllinen esimerkiksi silloin, kun haluamme tutkia luvun parillisuutta (eli sitä, onko luku tasan jaollinen kahdella):

<Tabs>
  <TabItem value="code" label="Code Example" default>
    ```python 
    # Jaetaan 5 kahdella --> tulos 2, jakojäännös 1
    print(5 % 2)

    luku = 9

    # Onko luku parillinen
    if luku % 2 == 0:
        print("On parillinen!")

    # Onko luku pariton
    if luku % 2 == 1:
        print("On pariton!")

    #...vaihtoehtoisesti (jos tiedetään, että on kokonaisluku):
    if luku % 2 != 0:
        print("On edelleen pariton")
    ```

    Ohjelma tulostaa:
    ``` 
    On pariton!
    On edelleen pariton
    ```
  </TabItem>
  <TabItem value="Visualization" label="Visualization">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Jaetaan%205%20kahdella%20--%3E%20tulos%202,%20jakoj%C3%A4%C3%A4nn%C3%B6s%201%0Aprint%285%20%25%202%29%0A%0Aluku%20%3D%209%0A%0A%23%20Onko%20luku%20parillinen%0Aif%20luku%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20print%28%22On%20parillinen!%22%29%0A%0A%23%20Onko%20luku%20pariton%0Aif%20luku%20%25%202%20%3D%3D%201%3A%0A%20%20%20%20print%28%22On%20pariton!%22%29%0A%0A%23...vaihtoehtoisesti%20%28jos%20tiedet%C3%A4%C3%A4n,%20ett%C3%A4%20on%20kokonaisluku%29%3A%0Aif%20luku%20%25%202%20!%3D%200%3A%0A%20%20%20%20print%28%22On%20edelleen%20pariton%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>