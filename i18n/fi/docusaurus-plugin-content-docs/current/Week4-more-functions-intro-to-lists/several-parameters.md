---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Useita parametreja

Viime kerralla kaikissa esimerkeissä ja tehtävissä olevissa funktioissa oli vain yksi parametri. Parametreja voi kuitenkin olla useampi. Tällaisessa tapauksessa parametrit erotetaan toisistaan pilkuilla niin funktion määrittelyssä kuin funktiokutsussakin.

Tarkastellaan esimerkkiä funktiosta, joka tulostaa kahdesta parametrinaan saamastaan luvusta suuremman:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def tulosta_suurempi(luku1, luku2):
        if luku1 > luku2:
            print(luku1)
        else:
            print(luku2)


    # Esimerkki kutsusta
    tulosta_suurempi(20, 10)
    tulosta_suurempi(5 + 5, 5 * 5)
    ```

    Ohjelma tulostaa:
    ```
    20
    25
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20tulosta_suurempi%28luku1,%20luku2%29%3A%0A%20%20%20%20if%20luku1%20%3E%20luku2%3A%0A%20%20%20%20%20%20%20%20print%28luku1%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28luku2%29%0A%0A%0A%23%20Esimerkki%20kutsusta%0Atulosta_suurempi%2820,%2010%29%0Atulosta_suurempi%285%20%2B%205,%205%20*%205%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Parametreja voi luonnollisesti olla vieläkin enemmän. Funktio `keskiarvo` laskee ja tulostaa ruudulle parametrinaan saamansa neljän luvun keskiarvon:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def keskiarvo(luku1, luku2, luku3, luku4):
        summa = luku1 + luku2 + luku3 + luku4
        print(summa / 4)


    # Testataan funktiota
    keskiarvo(1,2,3,4)
    keskiarvo(10, 9, 10, 7)
    ```

    Ohjelma tulostaa:
    ``` 
    2.5
    9.0
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20keskiarvo%28luku1,%20luku2,%20luku3,%20luku4%29%3A%0A%20%20%20%20summa%20%3D%20luku1%20%2B%20luku2%20%2B%20luku3%20%2B%20luku4%0A%20%20%20%20print%28summa%20/%204%29%0A%0A%0A%23%20Testataan%20funktiota%0Akeskiarvo%281,2,3,4%29%0Akeskiarvo%2810,%209,%2010,%207%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Parametrit voivat olla myös eri tyyppisiä. Funktio `monista` tulostaa annettua merkkijonoa allekkain annetun määrän:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def monista(merkkijono, maara):
        i = 0
        while i < maara:
            print(merkkijono)
            i += 1

    # Testataan
    monista("Jippikaijei", 4)
    monista("Töttöröö", 2)
    ```

    Ohjelma tulostaa:
    ```python 
    Jippikaijei
    Jippikaijei
    Jippikaijei
    Jippikaijei
    Töttöröö
    Töttöröö
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20monista%28merkkijono,%20maara%29%3A%0A%20%20%20%20i%20%3D%200%0A%20%20%20%20while%20i%20%3C%20maara%3A%0A%20%20%20%20%20%20%20%20print%28merkkijono%29%0A%20%20%20%20%20%20%20%20i%20%2B%3D%201%0A%0A%23%20Testataan%0Amonista%28%22Jippikaijei%22,%204%29%0Amonista%28%22T%C3%B6tt%C3%B6r%C3%B6%C3%B6%22,%202%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Tarkastellaan vielä yhtä esimerkkiä, joka tulostaa annetuista kahdesta merkkijonosta lyhyemmän:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def tulosta_lyhyempi(mjono1, mjono2):
        if len(mjono1) < len(mjono2):
            print(mjono1)
        else:
            print(mjono2)


    # Testaillaan
    tulosta_lyhyempi("Eka", "Toinen")
    tulosta_lyhyempi("Moikkeliskoikkelis", "Hei")
    ```

    Ohjelma tulostaa:
    ```python 
    Eka
    Hei
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20tulosta_lyhyempi%28mjono1,%20mjono2%29%3A%0A%20%20%20%20if%20len%28mjono1%29%20%3C%20len%28mjono2%29%3A%0A%20%20%20%20%20%20%20%20print%28mjono1%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28mjono2%29%0A%0A%0A%23%20Testaillaan%0Atulosta_lyhyempi%28%22Eka%22,%20%22Toinen%22%29%0Atulosta_lyhyempi%28%22Moikkeliskoikkelis%22,%20%22Hei%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Muodollinen ja todellinen parametri

Funktioiden yhteydessä puhutaan usein **muodollisesta** ja **todellisesta** parametrista. Muodollisella parametrilla tarkoitetaan funktiomäärittelyssä käytettyä parametrimuuttujaa. Esimerkiksi funktion `monista` muodolliset parametrit ovat `merkkijono` ja `maara`:

```python 
def monista(merkkijono, maara):
    print(merkkijono * maara)
 ```

Todellisella arvolla tarkoitetaan sitä arvoa, jonka parametri saa kun funktiota kutsutaan. Todellinen parametrin voi siis saada eri arvon eri kutsukerroilla. Esimerkiksi seuraavassa esimerkissä funktio `monista` saa todelliset parametrin arvot "xyz" ja 5:

```python 
def monista(merkkijono, maara):
    print(merkkijono * maara)

# Kutsutaan funktiota
monista("xyz", 5)
 ```

Ohjelma tulostaa:
```python 
xyzxyzxyzxyzxyz
 ```

Seuraavassa taas todelliset parametrin arvot ovat "abrakadabra" ja 4:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def monista(merkkijono, maara):
        print(merkkijono * maara)

    # Kutsutaan funktiota
    monista("abrakadabra", 4)
    ```

    Ohjelma tulostaa:
    ```python 
    abrakadabraabrakadabraabrakadabraabrakadabra
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20monista%28merkkijono,%20maara%29%3A%0A%20%20%20%20print%28merkkijono%20*%20maara%29%0A%0A%23%20Kutsutaan%20funktiota%0Amonista%28%22abrakadabra%22,%204%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Paikalliset muuttujat

Funktion sisällä alustetut muuttujat ovat funktion **paikallisia muuttujia**. Tämä tarkoittaa, että ne ovat olemassa ainoastaan funktion suorituksen ajan. Tämä koskee myös funktion parametreja.

Huomaa, että funktiolla voi olla samannimisiä muuttujia kuin pääohjelmalla (tai muilla funktioilla). Ne ovat kuitenkin eri muuttujia.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def kasvata_ja_tulosta(luku):
        # luku on funktion paikallinen muuttuja
        luku += 1
        print("Arvo funktiossa kasvata_ja_tulosta:", luku)

    # Tämä luku on pääohjelman muuttuja
    # Se on siis eri muuttuja kuin funktiossa määritelty
    luku = 10
    print("Luku ennen kutsua:", luku)

    kasvata_ja_tulosta(luku)

    # Pääohjelman muuttujan arvo ei ole muuttunut
    print("Luku kutsun jälkeen:", luku)
    ```

    Ohjelma tulostaa:
    ```
    Luku ennen kutsua: 10
    Arvo funktiossa kasvata_ja_tulosta: 11
    Luku kutsun jälkeen: 10
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20kasvata_ja_tulosta%28luku%29%3A%0A%20%20%20%20%23%20luku%20on%20funktion%20paikallinen%20muuttuja%0A%20%20%20%20luku%20%2B%3D%201%0A%20%20%20%20print%28%22Arvo%20funktiossa%20kasvata_ja_tulosta%3A%22,%20luku%29%0A%0A%23%20T%C3%A4m%C3%A4%20luku%20on%20p%C3%A4%C3%A4ohjelman%20muuttuja%0A%23%20Se%20on%20siis%20eri%20muuttuja%20kuin%20funktiossa%20m%C3%A4%C3%A4ritelty%0Aluku%20%3D%2010%0Aprint%28%22Luku%20ennen%20kutsua%3A%22,%20luku%29%0A%0Akasvata_ja_tulosta%28luku%29%0A%0A%23%20P%C3%A4%C3%A4ohjelman%20muuttujan%20arvo%20ei%20ole%20muuttunut%0Aprint%28%22Luku%20kutsun%20j%C3%A4lkeen%3A%22,%20luku%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Jos funktion paikallisiin muuttujiin yritetään viitata funktion ulkopuolelta, seuraa virhe:

```python 
def tulosta_luvut(maksimi):
    laskuri = 1
    while laskuri <= maksimi:
        print(laskuri)
        laskuri +=1

# Kutsutaan funktiota...
tulosta_luvut(5)

# Nyt yritys viitata laskuriin tuottaa virheen,
# koska laskuri on voimassa vain funktion sisällä
print(laskuri)
 ```

Ohjelma tulostaa:
```
1
2
3
4
5
Traceback (most recent call last):
  File "laskuri.py", line 12, in <module>
    print(laskuri)
NameError: name 'laskuri' is not defined
 ```

Funktion sisällä voidaan kuitenkin viitata pääohjelman muuttujiin:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def lisaa_korko(rahasumma):
        #  pääohjelmassa määritelty korkoprosentti näkyy tänne...
        rahasumma += (rahasumma * korko)
        print("Rahaa nyt:", rahasumma)


    # Määritellään korko
    korko = 0.05

    lisaa_korko(1000)
    ```

    Ohjelma tulostaa:
    ```
    Rahaa nyt: 1050.0
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20lisaa_korko%28rahasumma%29%3A%0A%20%20%20%20%23%20%20p%C3%A4%C3%A4ohjelmassa%20m%C3%A4%C3%A4ritelty%20korkoprosentti%20n%C3%A4kyy%20t%C3%A4nne...%0A%20%20%20%20rahasumma%20%2B%3D%20%28rahasumma%20*%20korko%29%0A%20%20%20%20print%28%22Rahaa%20nyt%3A%22,%20rahasumma%29%0A%0A%0A%23%20M%C3%A4%C3%A4ritell%C3%A4%C3%A4n%20korko%0Akorko%20%3D%200.05%0A%0Alisaa_korko%281000%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Muuttujia voidaan kuitenkin vain lukea funktion sisällä. Jos arvoa yritetään muuttaa, on tuloksena taas virheilmoitus:

```python 
def lisaa_korko(rahasumma):
    # Yritetään muuttaa korkoa - tämä johtaa virheeseen
    korko = korko + 0.25

    rahasumma += (rahasumma * korko)
    print("Rahaa nyt:", rahasumma)



# Määritellään korko
korko = 0.05

lisaa_korko(1000)
 ```

Ohjelma tulostaa:
```p
Traceback (most recent call last):
  File "korko.py", line 13, in <module>
    lisaa_korko(1000)
  File "korko.py", line 3, in lisaa_korko
    korko = korko + 0.25
UnboundLocalError: local variable 'korko' referenced before assignment
 ```

Jos funktion sisällä on tarve muuttaa pääohjelman muuttujaa, voidaan pääsy muuttujaan avata avainsanalla global:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def lisaa_korko(rahasumma):
        # Kun korko määritellään globaaliksi, siihen voi viitata
        global korko
        
        korko = korko + 0.25

        rahasumma += (rahasumma * korko)
        print("Rahaa nyt:", rahasumma)



    # Määritellään korko
    korko = 0.05

    lisaa_korko(1000)
    ```

    Ohjelma tulostaa:
    ``` 
    Rahaa nyt: 1300.0
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20lisaa_korko%28rahasumma%29%3A%0A%20%20%20%20%23%20Kun%20korko%20m%C3%A4%C3%A4ritell%C3%A4%C3%A4n%20globaaliksi,%20siihen%20voi%20viitata%0A%20%20%20%20global%20korko%0A%20%20%20%20%0A%20%20%20%20korko%20%3D%20korko%20%2B%200.25%0A%0A%20%20%20%20rahasumma%20%2B%3D%20%28rahasumma%20*%20korko%29%0A%20%20%20%20print%28%22Rahaa%20nyt%3A%22,%20rahasumma%29%0A%0A%0A%0A%23%20M%C3%A4%C3%A4ritell%C3%A4%C3%A4n%20korko%0Akorko%20%3D%200.05%0A%0Alisaa_korko%281000%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Yleensä tämä ei kuitenkaan ole suotavaa. Lähes aina paras ratkaisu on välittää funktiolle arvo ennemmin parametrina:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def lisaa_korko(rahasumma, korko):
        # Nyt korko tulee parametrina
        korko = korko + 0.25

        rahasumma += (rahasumma * korko)
        print("Rahaa nyt:", rahasumma)



    # Määritellään korko
    korko = 0.05

    # Korko on nyt myös todellinen parametri
    lisaa_korko(1000, korko)
    ```

    Ohjelma tulostaa:
    ``` 
    Rahaa nyt: 1300.0
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20lisaa_korko%28rahasumma,%20korko%29%3A%0A%20%20%20%20%23%20Nyt%20korko%20tulee%20parametrina%0A%20%20%20%20korko%20%3D%20korko%20%2B%200.25%0A%0A%20%20%20%20rahasumma%20%2B%3D%20%28rahasumma%20*%20korko%29%0A%20%20%20%20print%28%22Rahaa%20nyt%3A%22,%20rahasumma%29%0A%0A%0A%0A%23%20M%C3%A4%C3%A4ritell%C3%A4%C3%A4n%20korko%0Akorko%20%3D%200.05%0A%0A%23%20Korko%20on%20nyt%20my%C3%B6s%20todellinen%20parametri%0Alisaa_korko%281000,%20korko%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Pääohjelman muuttujien arvojen muutosta funktiossa kutsutaan myös **sivuvaikutukseksi**. Sivuvaikutuksista ja syistä niiden välttämiseen puhutaan tarkemmin ensi viikolla.