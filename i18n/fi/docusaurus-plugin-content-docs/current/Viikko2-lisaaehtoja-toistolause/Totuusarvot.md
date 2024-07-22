---
sidebar_position: 4
---

# Totuusarvot

Ehtolausekkeet ovat kuin mitkä tahansa muutkin lausekkeet Pythonissa: ne evaluoidaan, ja niiden lopputuloksena on jokin arvo (Pythonissa käytännössä objekti eri olio). Kun matemaattisen lausekkeen lopputulos on yleensä luku ja merkkijonolausekkeen merkkijono...

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

Yllä olevasta esimerkistä näkyy myös aikaisemmin esitelty not-operaattori, joka kääntää totuusarvon päinvastaiseksi.