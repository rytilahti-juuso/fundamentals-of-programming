---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lisää tulostuslauseesta

Edellisissä esimerkeissä tulostettiin ruudulle jokin **merkkijono**. Merkkijono on nimensä mukaisesti nollasta tai useammasta merkistä koostuva jono, esimerkiksi sana tai luonnollisen kielen lause. Tulostuslauseessa voidaan kuitenkin antaa vaihtoehtoisesti esimerkiksi matemaattinen **lauseke**. Lauseke koostuu operandeista ja operaattoreista:

![Lauseke](/img/img-fi/w1-2.png)

Esimerkiksi

```python 
print(2 + 4)
print(2 * 5 - 3)
print(1000 * 1000)
 ```

Ohjelma tulostaa
```python 
6
7
1000000
 ```

Nyt Python ei tulosta lauseketta sellaisenaan, vaan **evaluoi** sen ja tulostaa lausekkeen lopputuloksen. Evaluointi tarkoittaa siis sitä, että lauseke saa arvon.

Jos lauseke halutaan evaluoida, sitä ei ympäröidä lainausmerkeillä. Huomaa siis ero:

```python 
# Tulostetaan lauseke sellaisenaan
print("2 * 10 + 30")

# Tulostetaan evaluoidun lausekkeen lopputulos
print(2 * 10 + 30)
 ```

Ohjelma tulostaa
```python 
2 * 10 + 30
50
 ```

Edellisessä esimerkissä nähdään myös **kommentteja**. Kommentit merkitään #-merkillä. Kun koodissa tulee vastaan tämä merkki, Python ei yritä tulkita loppuriviä ollenkaan. Kommentit ovat siis ohjelmoijan tapa tehdä muistiinpanoja tai huomioita ohjelmaan.

## Operaattorit, operandit ja lausekkeet

Lausekkeessa voidaan käyttää matematiikasta tuttuja operaattoreita. Kertolaskua merkitään asteriskilla *, ja jakolaskua kauttaviivalla /.

```python 
# Yhteenlaskuja
print(3 + 20)
print(2 + 4 + 2 + 2 + 5)

# Vähennyslaskuja
print(10 - 3)
print(100 - 10 - 10)

# Kertolaskuja
print(5 * 5)
print(2 * 2 * 3 * 2)

# Jakolaskuja: huomaa että jakolaskun lopputulos on 
# aina liukuluku (eli esim. 4 / 2 = 2.0)
print(20 / 4)
print(1000 / 10 / 2)
 ```

Ohjelma tulostaa
``` 
23
15
7
80
25
24
5.0
50.0
 ```

Huomaa, että lausekkeiden **laskujärjestys** (tai oikeastaan siis evaluointijärjestys) noudattaa pääpiirteittäin matematiikasta tuttuja sääntöjä: kerto- ja jakolaskut lasketaan siis esimerkiksi ennen yhteen- ja vähennyslaskuja. Järjestystä voidaan muuttaa sulkeiden avulla:

```python 
# Ilman sulkeita kertolasku lasketaan ensin
print(2 + 5 * 5)

# Sulkeet muuttavat järjestyksen
print((2 + 5) * 5)
 ```

Ohjelma tulostaa
``` 
27
35
 ```

Samallla tulostuslauseella voidaan tulostaa useita arvoja. Arvot erotetaan toisistaan pilkuilla. Matemaattinen lauseke on tällaisessa tapauksessa usein hyvä ympäröidä sulkeilla selkeyden vuoksi.

```python 
print("Lausekkeen 2 + 5 * 10 arvo on", (2 + 5 *10))
print("Seitsemällä kääpiöllä on yhteensä", (7 * 2 * 2), "raajaa")
 ```

Ohjelma tulostaa
``` 
Lausekkeen 2 + 5 * 10 arvo on 52
Seitsemällä kääpiöllä on yhteensä 28 raajaa
 ```

## Liukuluvut

Aikaisemmassa esimerkissä huomattiin, että jakolaskun lopputuloksen lopussa oli piste ja nolla. Desimaalilukuja käsitellään yleensä ohjelmointikielissä ns. liukulukuina. Desimaalierottimena käytetään pilkun sijasta pistettä, esimerkiksi

```python 
print(5 / 2)
print(2.5 + 2.5)

# Seuraava ei mene tasan
print(10 / 1.5)
 ```

Ohjelma tulostaa
``` 
2.5
5.0
6.666666666666667
 ```

Johtuen liukulukujen tallennustavasta, kaikkia mahdollisia desimaalilukuja ei pystytä aina esittämään riittävällä tarkkuudella. Yleensä tarkkuus on kuitenkin "normaalikäytössä" riittävä - matemaattisissa ohjelmissa voidaan käyttää liukulukujen tallennukseen kuitenkin käyttää jotain normaalista poikkeavaa tapaa.