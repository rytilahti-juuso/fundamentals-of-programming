---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Erityyppiset ja moniulotteiset listat

Listoihin voi luonnollisesti tallentaa minkätyyppistä tietoa tahansa. Seuraavassa esimerkissä luodaan listat merkkijonoille, liukuluvuille ja totuusarvoille:

```python 
# Lista merkkijonoja
nimet = ["Pekka", "Pirjo", "Paula", "Pasi", "Penjamin", "Parpara"]

# Lista liukulukuja
keskiarvot = [7.5, 8.0, 8.25, 6.75, 5.5, 4.25]

# Lista totuusarvoja
jai_luokalleen = [False, False, False, True, True, False]
 ```

Python sallii syntaksin puolesta erityyppisten arvojen tallentamisen samaan listaan. Tämä on kuitenkin yleensä huono idea, koska se voi johtaa erilaisiin virhetilanteisiin. Yleensä listan alkioiden pitäisi kaikkien olla saman tyyppisiä.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Lista, jossa sekalaisia arvoja
    sekalaislista = [10, 20, "Matti", 4.55, True, "Liisa", False]

    # Listan iterointi ja tulostus onnistuu...
    for alkio in sekalaislista:
        print(alkio)

    # Tämä tuottaa virheen
    for alkio in sekalaislista:
        print(alkio + 10)
    ```

    Ohjelma tulostaa:
    ``` 
    10
    20
    Matti
    4.55
    True
    Liisa
    False
    20
    30
    Traceback (most recent call last):
      File "sekalista.py", line 10, in <module>
        print(alkio + 10)
    TypeError: must be str, not int
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Lista,%20jossa%20sekalaisia%20arvoja%0Asekalaislista%20%3D%20%5B10,%2020,%20%22Matti%22,%204.55,%20True,%20%22Liisa%22,%20False%5D%0A%0A%23%20Listan%20iterointi%20ja%20tulostus%20onnistuu...%0Afor%20alkio%20in%20sekalaislista%3A%0A%20%20%20%20print%28alkio%29%0A%0A%23%20T%C3%A4m%C3%A4%20tuottaa%20virheen%0Afor%20alkio%20in%20sekalaislista%3A%0A%20%20%20%20print%28alkio%20%2B%2010%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=22&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Listat listojen sisällä

Listan alkiot voivat olla myös toisia listoja. Tämä on itse asiassa näppärä tapa mallintaa matriiseja eli **kaksiulotteisia taulukoita**. Periaatteeena yleensä on, että jokainen matriisin rivi tallennetaan omaksi listakseen ulomman listan sisälle.

Esimerkiksi seuraava matriisi

![Matriisi](/img/img-fi/w5-2.png)

voitaisiin tallentaa listaksi näin:

```python 
matriisi = [[5, 7, 3], [8, 4, 2], [6, 9, 1]]
 ```

Nyt matriisia mallintavasta listasta voidaan poimia yksittäisiä alkioita viittaamalla ensin riviin ja sitten alkioon seuraavan esimerkin mukaisesti:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    matriisi = [[5, 7, 3], [8, 4, 2], [6, 9, 1]]

    print("Eka rivi, eka alkio:", matriisi[0][0])
    print("Toka rivi, kolmas alkio:", matriisi[1][2])
    print("Kolmas rivi, toka alkio:", matriisi[2][1])
    ```

    Ohjelma tulostaa:
    ```
    Eka rivi, eka alkio: 5
    Toka rivi, kolmas alkio: 2
    Kolmas rivi, toka alkio: 9
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=matriisi%20%3D%20%5B%5B5,%207,%203%5D,%20%5B8,%204,%202%5D,%20%5B6,%209,%201%5D%5D%0A%0Aprint%28%22Eka%20rivi,%20eka%20alkio%3A%22,%20matriisi%5B0%5D%5B0%5D%29%0Aprint%28%22Toka%20rivi,%20kolmas%20alkio%3A%22,%20matriisi%5B1%5D%5B2%5D%29%0Aprint%28%22Kolmas%20rivi,%20toka%20alkio%3A%22,%20matriisi%5B2%5D%5B1%5D%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Tarkastellaan vielä toista esimerkkiä:

```python 
# Mallinnetaan alla oleva 5 x 4 matriisi:
# 
# 2 | 3 | 5 | 3 | 1
# -----------------
# 6 | 5 | 3 | 5 | 6
# -----------------
# 9 | 8 | 7 | 9 | 8
# ------------------
# 3 | 8 | 3 | 4 | 5
#
matriisi = [[2,3,5,3,1], [6,5,3,5,6], [9,8,7,9,8], [3,8,3,4,5]]

while True:
    rivi = int(input("Mikä rivi (-1 lopettaa): "))
    if (rivi == -1):
        break

    sarake = int(input("Mikä sarake: "))

    print(f"Arvo rivillä {rivi} sarakkeessa {sarake} on {matriisi[rivi][sarake]}")
 ```

Esimerkkisuoritus:
``` 
Mikä rivi (-1 lopettaa): 1
Mikä sarake: 1
Arvo rivillä 1 sarakkeessa 1 on 5
Mikä rivi (-1 lopettaa): 0
Mikä sarake: 0
Arvo rivillä 0 sarakkeessa 0 on 2
Mikä rivi (-1 lopettaa): 3
Mikä sarake: 4
Arvo rivillä 3 sarakkeessa 4 on 5
Mikä rivi (-1 lopettaa): 2
Mikä sarake: 2
Arvo rivillä 2 sarakkeessa 2 on 7
Mikä rivi (-1 lopettaa): -1
 ```

Matriisi voidaan iteroida läpi käyttäen kahta for-silmukkaa:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    matriisi = [[1, 2, 3],[6, 5, 4],[9, 7, 8]]

    # Iteroidaan kaikki rivit
    for rivi in matriisi:
        # Iteroidaan kaikki rivin alkiot
        for alkio in rivi:
            print(alkio)
    ```

    Ohjelma tulostaa:
    ``` 
    1
    2
    3
    6
    5
    4
    9
    7
    8
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=matriisi%20%3D%20%5B%5B1,%202,%203%5D,%5B6,%205,%204%5D,%5B9,%207,%208%5D%5D%0A%0A%23%20Iteroidaan%20kaikki%20rivit%0Afor%20rivi%20in%20matriisi%3A%0A%20%20%20%20%23%20Iteroidaan%20kaikki%20rivin%20alkiot%0A%20%20%20%20for%20alkio%20in%20rivi%3A%0A%20%20%20%20%20%20%20%20print%28alkio%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Samoin matriisin alkioiden arvoja voidaan muuttaa hyödyntämällä range-funktiota for-silmukan kanssa:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    matriisi = [[1, 2, 3],[6, 5, 4],[9, 7, 8]]

    # Iteroidaan kaikki rivit
    for i in range(len(matriisi)):
        # Iteroidaan kaikki rivin alkiot
        for j in range(len(matriisi[i])):
            # Kasvatetaan alkiota yhdellä
            matriisi[i][j] += 1

    print(matriisi)
    ```

    Ohjelma tulostaa:
    ```
    [[2, 3, 4], [7, 6, 5], [10, 8, 9]]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=matriisi%20%3D%20%5B%5B1,%202,%203%5D,%5B6,%205,%204%5D,%5B9,%207,%208%5D%5D%0A%0A%23%20Iteroidaan%20kaikki%20rivit%0Afor%20i%20in%20range%28len%28matriisi%29%29%3A%0A%20%20%20%20%23%20Iteroidaan%20kaikki%20rivin%20alkiot%0A%20%20%20%20for%20j%20in%20range%28len%28matriisi%5Bi%5D%29%29%3A%0A%20%20%20%20%20%20%20%20%23%20Kasvatetaan%20alkiota%20yhdell%C3%A4%0A%20%20%20%20%20%20%20%20matriisi%5Bi%5D%5Bj%5D%20%2B%3D%201%0A%0Aprint%28matriisi%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>