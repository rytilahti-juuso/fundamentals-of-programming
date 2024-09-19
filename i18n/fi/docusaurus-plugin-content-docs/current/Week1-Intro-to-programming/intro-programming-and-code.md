---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Johdanto: ohjelmointi ja ohjelmakoodi

Ennen aloittamista, vastaa ViLLEssä olevaan tutkimuslupakyselyyn!

Ohjelmointi tarkoittaa prosessia, jossa *ohjelmoija* kirjoittaa *ohjelmakoodia*. Ohjelma kirjoitetaan jonkin ongelman ratkaisemiseksi. Kannattaa huomata, että ongelma voi tässä yhteydessä tarkoittaa laajaa joukkoa erilaisia tehtäviä hyvin yksinkertaisesta erittäin monimutkaiseen.

Ohjelma kirjoitetaan *ohjelmointikielellä*. Ohjelmointikielellä on kielioppi (eli syntaksi) samoin kuin luonnollisillakin kielillä. Kielioppi määrittelee tarkasti ohjelmointikielessä käytettävät yksittäiset käskyt ja niistä muodostettavien lauseiden rakenteen.

Kurssilla käytettävän Python-ohjelmointikielen syntaksi näyttää esimerkiksi tältä (ohjelman toiminnasta ei tarvitse vielä tässä vaiheessa ymmärtää mitään - se selviää kurssin loppuun mennessä):

```python 
def paras_tulos(tulokset: list) -> dict:
    d = {}
    
    if tulokset:
        paras = tulokset[0]
    else:
        return None

    ilman_tyhjia = [t for t in tulokset if t[1]]
    
    for tulos in ilman_tyhjia:
        if tulos[1] > paras[1]:
            paras = tulos

    return paras
 ```

Kun ohjelma on kirjoitettu, se voidaan **suorittaa**. Ennen suorittamista ohjelma pitää (yleensä) muuntaa sellaiseen muotoon, jossa se on suoritettavissa. Esimerkiksi kurssilla käytettävä Python-ohjelmointikieli toimii niin, että ohjelma **käännetään** kielelle, jota **Python-tulkki** ymmärtää, ja tulkki sitten suorittaa käännetyn ohjelman.

!['Ohjelman kääntö'](/img/img-fi/w1-1.png)

Suoritus tapahtuu ns. virtuaalikoneessa. Sen sijaan, että jokainen ohjelma kirjoitettaisiin erikseen jokaiselle käyttöjärjestelmälle, riittää, että kirjoitetaan jokaiselle käyttöjärjestelmälle yksi virtuaalikone. Näin samaa Python-ohjelmaa voidaan ajaa lukuisissa eri ympäristöissä.

Ohjelmoijan onneksi prosessi on käytännössä melko suoraviivainen. Yleensä riittää, että painetaan yhtä painiketta ja kirjoitettu ohjelma suoritetaan (edellyttäen, ettei siinä ole sellaisia virheitä, jotka estävät suorituksen).

## Peräkkäisyys ja tuloste

Ohjelmointiin liittyy peräkkäisyyden käsite: tämä tarkoittaa, että ohjelma muodostuu peräkkäisistä käskyistä (eli ohjelmointikielen lauseista), jotka suoritetaan annetussa järjestyksessä yksi kerrallaan. Kun kaikki käskyt on suoritettu, ohjelman suoritus päättyy.

Tarkastellaan ensimmäisenä käskynä tulostuskäskyä **print**. Tulostuslauseen tarkoituksena on välittää ohjelman käyttäjälle jokin viesti eli merkkijono. Lauseen kielioppi eli syntaksi on seuraava:

`print("tulostettava viesti")`

Huomaa, että syntaksia tulee noudattaa täsmällisesti, jotta ohjelma voidaan suorittaa. Tulostettava viesti ympäröidään lainausmerkeillä (Python hyväksyy niin 'yksinkertaiset' kuin "kaksinkertaiset" merkit). Lisäksi koko tulostettava viesti kirjoitetaan sulkujen sisään. Komento print pitää kirjoittaa kokonaan pienillä kirjaimilla, esimerkiksi `PRINT` tai `Print` ei käy.

Esimerkki ohjelmasta, joka tulostaa allekkain Aku Ankan veljenpoikien nimet:

```python 
print("Tupu")
print("Hupu")
print("Lupu")
 ```

Ohjelma tulostaa
```python 
Tupu
Hupu
Lupu
 ```

Ohjelman tulostuslauseet siis suoritetaan annetussa järjestyksessä ensimmäisestä viimeiseen yksi kerrallaan. Jokainen lause kirjoitetaan omalle rivilleen. Ohjelmaan voi halutessaan sijoittaa tyhjiä rivejä sen selkeyttämiseksi, ne eivät vaikuta suoritukseen:

Seuraava ohjelma tulostaa ruudulle reseptin:

:::info

Suurin osa koodiesimerkeistä on myös mahdollista visualisoida, eli katsoa koodin suoritusta rivi riviltä. Visualisointia on mahdollisuus kokeilla pyhontutor.com sivustolla. Jotkut materiaalin visualisoinnit voivat avautua uuteen välilehteen pythontutor.com sivulle.

Visualisaatiot löytyvät aina Visualisaatio -välilehden takaa kuten alla.

:::


<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    print("Yksinkertainen keitto")

    print("Perunoita")
    print("Vettä")

    print("Ohjeet:")
    print("Yhdistä ja lämmitä.")
    ```

    Ohjelma tulostaa:
    ``` 
    Yksinkertainen keitto
    Perunoita
    Vettä
    Ohjeet:
    Yhdistä ja lämmitä.
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=print%28%22Yksinkertainen%20keitto%22%29%0A%0Aprint%28%22Perunoita%22%29%0Aprint%28%22Vett%C3%A4%22%29%0A%0Aprint%28%22Ohjeet%3A%22%29%0Aprint%28%22Yhdist%C3%A4%20ja%20l%C3%A4mmit%C3%A4.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Käskyjen suoritusjärjestystä voidaan muuttaa erilaisilla ohjausrakenteilla. Palataan näihin kuitenkin myöhemmin.