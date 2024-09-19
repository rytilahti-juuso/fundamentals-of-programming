---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Totuusarvot

Ehtolausekkeet ovat kuin mitkä tahansa muutkin lausekkeet Pythonissa: ne evaluoidaan, ja niiden lopputuloksena on jokin arvo (Pythonissa käytännössä objekti eri olio). Kun matemaattisen lausekkeen lopputulos on yleensä luku ja merkkijonolausekkeen merkkijono...

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Tuloksena kokonaisluku
    tulos = 2 * 5 + 10 - 3
    print("Arvo", tulos, "on tyyppiä", type(tulos))

    # Tuloksena liukuluku
    liukutulos = 2 * 5.0 / 4
    print("Arvo", liukutulos, "on tyyppiä", type(liukutulos))

    # Tuloksena merkkijono
    mtulos = "Moi" + " " + "kaikki"
    print("Arvo", mtulos, "on tyyppiä", type(mtulos))
    ```

    Ohjelma tulostaa:
    ```python 
    Arvo 17 on tyyppiä <class 'int'>
    Arvo 2.5 on tyyppiä <class 'float'>
    Arvo Moi kaikki on tyyppiä <class 'str'>
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Tuloksena%20kokonaisluku%0Atulos%20%3D%202%20*%205%20%2B%2010%20-%203%0Aprint%28%22Arvo%22,%20tulos,%20%22on%20tyyppi%C3%A4%22,%20type%28tulos%29%29%0A%0A%23%20Tuloksena%20liukuluku%0Aliukutulos%20%3D%202%20*%205.0%20/%204%0Aprint%28%22Arvo%22,%20liukutulos,%20%22on%20tyyppi%C3%A4%22,%20type%28liukutulos%29%29%0A%0A%23%20Tuloksena%20merkkijono%0Amtulos%20%3D%20%22Moi%22%20%2B%20%22%20%22%20%2B%20%22kaikki%22%0Aprint%28%22Arvo%22,%20mtulos,%20%22on%20tyyppi%C3%A4%22,%20type%28mtulos%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

...niin ehtolausekkeen lopputulos on totuusarvo. Totuusarvoja on kaksi:

**True** (eli tosi) ja

**False** (eli epätosi)

Huomaa, että arvot kirjoitetaan isolla alkukirjaimella.
Totuusarvojen olemassaolon näkee esimerkiksi tulostamalla ehtolausekkeen:

```python 
print(20 < 10)
print(100 == 2 * 5 * 5 * 2)
 ```

Ohjelma tulostaa:
```python 
False
True
 ```

Totuusarvoinen lauseke voidaan myös asettaa muuttujan arvoksi. Tällaista muuttujaa voidaan sellaisenaan käyttää ehtolausekkeena:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    totuus = True

    # Tämä on tosi
    if totuus:
        print("Tosi on.")

    # Arvoksi not True --> False
    totuus = not True

    if totuus:
        print("Tosi on taas.")

    # Arvoksi lauseke
    totuus = 20 > 10

    if totuus:
        print("Kolmas on tosi.")
    ```

    Ohjelma tulostaa:
    ```python 
    Tosi on.
    Kolmas on tosi.
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=totuus%20%3D%20True%0A%0A%23%20T%C3%A4m%C3%A4%20on%20tosi%0Aif%20totuus%3A%0A%20%20%20%20print%28%22Tosi%20on.%22%29%0A%0A%23%20Arvoksi%20not%20True%20--%3E%20False%0Atotuus%20%3D%20not%20True%0A%0Aif%20totuus%3A%0A%20%20%20%20print%28%22Tosi%20on%20taas.%22%29%0A%0A%23%20Arvoksi%20lauseke%0Atotuus%20%3D%2020%20%3E%2010%0A%0Aif%20totuus%3A%0A%20%20%20%20print%28%22Kolmas%20on%20tosi.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Yllä olevasta esimerkistä näkyy myös aikaisemmin esitelty not-operaattori, joka kääntää totuusarvon päinvastaiseksi.