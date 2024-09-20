---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Päivämäärät ja kellonajat

Päivämäärien ja kellonaikojen käsittely on hyvä esimerkki operaatiosta, joka saattaa vaikuttaa yksinkertaiselta, mutta joka onkin oletettua monimutkaisempi, esimerkiksi aikavyöhykkeiden ja karkausvuosien (tai karkaussekuntien) takia. Tämän takia aikamääreiden käsittelyyn kannattaa yleensä aina käyttää ulkoisia kirjastoja.

Aikojen käsittelyyn voi käyttää esimerkiksi Pythonin **datetime**-kirjastoa.

Huomaa, että datetime kannattaa tuoda käyttöön syntaksin

```python 
from datetime import datetime
 ```

avulla, jotta luokkaan viitatessa ei tarvitse kirjoittaa datetime.datetime.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    from datetime import datetime

    # Nykyinen päivämäärä
    tanaan = datetime.now()
    print(tanaan)

    # Joulu 2021
    # Arvot järjestyksessä vuosi, kuukausi, päivä
    # Jos aikaa ei anna, oletusarvo on keskiyö
    joulu = datetime(2021, 12, 24)
    print(joulu)

    # Viimeinen tutoriaali
    # Päivän lisäksi voi antaa myös ajan, ensin tunnit
    # ja sitten minuutit
    viim_tuto = datetime(2021, 12, 9, 14, 15)
    print(viim_tuto)
    ```

    Esimerkkisuoritus:
    ``` 
    2021-11-30 18:28:51.715194
    2021-12-24 00:00:00
    2021-12-09 14:15:00
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=from%20datetime%20import%20datetime%0A%0A%23%20Nykyinen%20p%C3%A4iv%C3%A4m%C3%A4%C3%A4r%C3%A4%0Atanaan%20%3D%20datetime.now%28%29%0Aprint%28tanaan%29%0A%0A%23%20Joulu%202021%0A%23%20Arvot%20j%C3%A4rjestyksess%C3%A4%20vuosi,%20kuukausi,%20p%C3%A4iv%C3%A4%0A%23%20Jos%20aikaa%20ei%20anna,%20oletusarvo%20on%20keskiy%C3%B6%0Ajoulu%20%3D%20datetime%282021,%2012,%2024%29%0Aprint%28joulu%29%0A%0A%23%20Viimeinen%20tutoriaali%0A%23%20P%C3%A4iv%C3%A4n%20lis%C3%A4ksi%20voi%20antaa%20my%C3%B6s%20ajan,%20ensin%20tunnit%0A%23%20ja%20sitten%20minuutit%0Aviim_tuto%20%3D%20datetime%282021,%2012,%209,%2014,%2015%29%0Aprint%28viim_tuto%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Esimerkistä huomataan, että datetime-tyyppisen olion tulostaminen print-lauseella ei tuota kovin siistiä lopputulosta. Oliolla on strftime-metodi, jonka avulla voidaan tulostaa halutut aikamääreet. Seuraavassa listassa on esitetty eräitä käyttökelpoisia metodin ymmärtämiä muotoiluja:

- **%d**   päivä (01- 31)
- **%m**   kuukausi (01 - 12)
- **%Y**   vuosi
- **%H**   tunnit
- **%M**   minuutit
- **%S**   sekunnit


Metodia käytetään seuraavan esimerkin mukaisesti:

```python 
from datetime import datetime

# Nykyinen päivämäärä
tanaan = datetime.now()

print(tanaan.strftime("Tänään on %d.%m., vuosi on %Y"))
print(tanaan.strftime("Kello on nyt %H:%M"))

# Jouluaatto
jouluaatto = datetime(2021, 12, 24)
print(jouluaatto.strftime("Joulua juhlitaan %m. kuukauden %d. päivänä"))
 ```

Esimerkkisuoritus:
```
Tänään on 30.11., vuosi on 2021
Kello on nyt 18:35
Joulua juhlitaan 12. kuukauden 24. päivänä
 ```

datetime-tyyppiseltä oliolta voidaan kysyä erikseen eri aikamääreitä seuraavan esimerkin mukaisesti. Kaikki metodit palauttavat kokonaisluvun.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    from datetime import datetime

    # Nykyinen päivämäärä
    tanaan = datetime.now()

    print("Vuosi:", tanaan.year)
    print("Kuukausi:", tanaan.month)
    print("Päivä:", tanaan.day)
    print("Tunti:", tanaan.hour)
    print("Minuutit:", tanaan.minute)
    print("Sekunnit:", tanaan.second)
    ```

    Esimerkkisuoritus:
    ```
    Vuosi: 2021
    Kuukausi: 11
    Päivä: 30
    Tunti: 18
    Minuutit: 44
    Sekunnit: 7
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=from%20datetime%20import%20datetime%0A%0A%23%20Nykyinen%20p%C3%A4iv%C3%A4m%C3%A4%C3%A4r%C3%A4%0Atanaan%20%3D%20datetime.now%28%29%0A%0Aprint%28%22Vuosi%3A%22,%20tanaan.year%29%0Aprint%28%22Kuukausi%3A%22,%20tanaan.month%29%0Aprint%28%22P%C3%A4iv%C3%A4%3A%22,%20tanaan.day%29%0Aprint%28%22Tunti%3A%22,%20tanaan.hour%29%0Aprint%28%22Minuutit%3A%22,%20tanaan.minute%29%0Aprint%28%22Sekunnit%3A%22,%20tanaan.second%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Aikoja voidaan vertailla normaalien vertailuoperaattorien avulla:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    from datetime import datetime

    # Nykyinen päivämäärä
    tanaan = datetime.now()

    # Joulu
    joulu = datetime(2021, 12, 24)

    if tanaan > joulu:
        print("Joulu meni jo")
    else:
        print("Joulu on tulossa")
    ```

    Esimerkkisuoritus (30.11.2021):
    ```
    Joulu on tulossa
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=from%20datetime%20import%20datetime%0A%0A%23%20Nykyinen%20p%C3%A4iv%C3%A4m%C3%A4%C3%A4r%C3%A4%0Atanaan%20%3D%20datetime.now%28%29%0A%0A%23%20Joulu%0Ajoulu%20%3D%20datetime%282021,%2012,%2024%29%0A%0Aif%20tanaan%20%3E%20joulu%3A%0A%20%20%20%20print%28%22Joulu%20meni%20jo%22%29%0Aelse%3A%0A%20%20%20%20print%28%22Joulu%20on%20tulossa%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Aikojen välisen erotuksen voi laskea myös normaalisti vähennyslaskuna. Tuloksena on kuitenkin **timedelta**-tyyppinen olio. Oliota käytetään alla olevan esimerkin mukaisesti:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    from datetime import datetime

    # Nykyinen päivämäärä
    tanaan = datetime.now()

    # Joulu
    joulu = datetime(2021, 12, 24)

    # Aikojen erotus
    erotus = joulu - tanaan

    print(f"Jouluun on {erotus.days} päivää.")
    print(f"...tai tarkemmin {erotus.seconds} sekuntia.")
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=from%20datetime%20import%20datetime%0A%0A%23%20Nykyinen%20p%C3%A4iv%C3%A4m%C3%A4%C3%A4r%C3%A4%0Atanaan%20%3D%20datetime.now%28%29%0A%0A%23%20Joulu%0Ajoulu%20%3D%20datetime%282021,%2012,%2024%29%0A%0A%23%20Aikojen%20erotus%0Aerotus%20%3D%20joulu%20-%20tanaan%0A%0Aprint%28f%22Jouluun%20on%20%7Berotus.days%7D%20p%C3%A4iv%C3%A4%C3%A4.%22%29%0Aprint%28f%22...tai%20tarkemmin%20%7Berotus.seconds%7D%20sekuntia.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Tarvittaessa timedelta-olion voi muodostaa itsekin. Olio pitää kuitenkin ottaa käyttään import-lauseella. Olion muodostamisen jälkeen sen avulla voi "pyöräyttää" datetime-oliota eli siirtää aikaa eteen- tai taaksepäin:

```python 
from datetime import datetime, timedelta

# Nykyinen päivämäärä
tanaan = datetime.now()

# 100 päivää
pv100 = timedelta(days=100)
tulevaisuus = tanaan + pv100

print(tanaan.strftime("Nyt on %d.%m.%Y"))
print(tulevaisuus.strftime("100 päivän päästä on %d.%m.%Y"))

# 2 tuntia
h2 = timedelta(hours=2)
lahitulevaisuus = tanaan + h2

print(tanaan.strftime("Nyt kello on %H:%M"))
print(lahitulevaisuus.strftime("2 tunnin päästä kello on %H:%M"))
 ```

Esimerkkisuoritus:
``` 
Nyt on 30.11.2021
100 päivän päästä on 10.03.2022
Nyt kello on 18:54
2 tunnin päästä kello on 20:54
 ```
