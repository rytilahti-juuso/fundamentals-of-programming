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

  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">

  </TabItem>
</Tabs>

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

  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">

  </TabItem>
</Tabs>

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

  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">

  </TabItem>
</Tabs>

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

Samoin matriisin alkioiden arvoja voidaan muuttaa hyödyntämällä range-funktiota for-silmukan kanssa:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>

  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">

  </TabItem>
</Tabs>

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