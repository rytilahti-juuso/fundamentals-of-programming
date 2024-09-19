---
sidebar_position: 5
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Tietorakenteet funktioissa

Pythonissa kaikki tieto on tallennettu olioina. Tämä tarkoittaa, että kun johonkin muuttujaan tallennetaan jokin arvo, tallennetaankin oikeasti viittaus olioon, joka sisältää arvon. Mutatoitumattomien olioiden (esimerkiksi luvut, totuusarvot, merkkijonot tai tuple) tapauksessa tällä ei yleensä ole ohjelmoijan kannalta kovin suurta merkitystä, mutta mutatoituvien rakenteiden - esimerkiksi listojen tai sanakirjojen osalta on.

Aloitetaan tilanteesta, jossa luomme uuden listan ja tallennamme viittauksen muuttujaan luvut:

```python 
luvut = [1, 2, 3, 5, 4]
 ```

![Asetus](/img/img-fi/w5-4.png)

Asetetaan nyt muuttujan **luvut** arvo muuttujaan **luvut2**. Koska arvo on itse asiassa viittaus, kopioituu asetettaessa viittaus, ei lista.

```python 
luvut = [1, 2, 3, 5, 4]
luvut2 = luvut
 ```

 ![Viittaus](/img/img-fi/w5-5.png)

Nyt meillä on kaksi muuttujaa, jotka molemmat osoittavat samaan listaan. Listaa voidaan siis käsitellä kumman tahansa muuttujan kautta:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luvut = [1, 2, 3, 5, 4]
    luvut2 = luvut

    luvut[0] = 10
    luvut2[-1] = 99

    print(luvut)
    print(luvut2)
    ```

    ![Käyttöesimerkki](/img/img-fi/w5-6.png)

    Ohjelma tulostaa:
    ```
    [10, 2, 3, 5, 99]
    [10, 2, 3, 5, 99]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luvut%20%3D%20%5B1,%202,%203,%205,%204%5D%0Aluvut2%20%3D%20luvut%0A%0Aluvut%5B0%5D%20%3D%2010%0Aluvut2%5B-1%5D%20%3D%2099%0A%0Aprint%28luvut%29%0Aprint%28luvut2%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>    
</Tabs>

## Tietorakenteet parametreina

Sama ilmiö tulee vastaan silloin, kun välitämme jonkin mutatoituvan olion **parametrina** jollekin funktiolle. Tarkastellaan esimerkkiä, jossa luodaan lista ja välitetään se parametriksi funktiolle, joka lisää listaan uuden arvon:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Huomaa, että funktio ei palauta mitään
    def lisaa_arvo(lista: list):
        lista.append(10)

    # Luodaan lista
    lista = [1,2,3,4,5]

    print("Lista ennen:", lista)

    # Kutsutaan funktiota
    lisaa_arvo(lista)

    print("Lista jälkeen:", lista)
    ```

    Ohjelma tulostaa:
    ```
    Lista ennen: [1, 2, 3, 4, 5]
    Lista jälkeen: [1, 2, 3, 4, 5, 10]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Huomaa,%20ett%C3%A4%20funktio%20ei%20palauta%20mit%C3%A4%C3%A4n%0Adef%20lisaa_arvo%28lista%3A%20list%29%3A%0A%20%20%20%20lista.append%2810%29%0A%0A%23%20Luodaan%20lista%0Alista%20%3D%20%5B1,2,3,4,5%5D%0A%0Aprint%28%22Lista%20ennen%3A%22,%20lista%29%0A%0A%23%20Kutsutaan%20funktiota%0Alisaa_arvo%28lista%29%0A%0Aprint%28%22Lista%20j%C3%A4lkeen%3A%22,%20lista%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>



Esimerkistä huomataan, että funktio **voi muuttaa** parametrinaan saamaansa listaa. Läheskään aina tämä ei kuitenkaan ole tarkoituksenmukaista.

Tarkastellaan toista esimerkkiä, jossa funktion tarkoituksena on etsiä listalta toiseksi pienin arvo. Ohjelmoija on käyttänyt mielestään ovelaa kikkaa, jossa aluksi järjestetään alkiot suuruusjärjestykseen ja sitten poimitaan toinen alkio:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def toiseksi_pienin_alkio(lista: list) -> int:
        # Järjestetään lista...
        lista.sort()

        # ...jolloin toinen alkio on toiseksi pienin
        return lista[1]

    # Luodaan lista
    lista = [1, 5, 4, 6, 2, 3, 7, 8]

    print("Lista ennen:", lista)

    # Kutsutaan funktiota
    print("Toiseksi pienin:", toiseksi_pienin_alkio(lista))

    # Listan järjestys on muuttunut
    print("Lista jälkeen:", lista)
    ```

    Ohjelma tulostaa:
    ```
    Lista ennen: [1, 5, 4, 6, 2, 3, 7, 8]
    Toiseksi pienin: 2
    Lista jälkeen: [1, 2, 3, 4, 5, 6, 7, 8]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20toiseksi_pienin_alkio%28lista%3A%20list%29%20-%3E%20int%3A%0A%20%20%20%20%23%20J%C3%A4rjestet%C3%A4%C3%A4n%20lista...%0A%20%20%20%20lista.sort%28%29%0A%0A%20%20%20%20%23%20...jolloin%20toinen%20alkio%20on%20toiseksi%20pienin%0A%20%20%20%20return%20lista%5B1%5D%0A%0A%23%20Luodaan%20lista%0Alista%20%3D%20%5B1,%205,%204,%206,%202,%203,%207,%208%5D%0A%0Aprint%28%22Lista%20ennen%3A%22,%20lista%29%0A%0A%23%20Kutsutaan%20funktiota%0Aprint%28%22Toiseksi%20pienin%3A%22,%20toiseksi_pienin_alkio%28lista%29%29%0A%0A%23%20Listan%20j%C3%A4rjestys%20on%20muuttunut%0Aprint%28%22Lista%20j%C3%A4lkeen%3A%22,%20lista%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Kun nyt kutsutaan funktiota ja välitetään sille parametriksi lista, huomataan, että funktion kutsumisen jälkeen listan alkiot ovat eri järjestyksessä kuin ennen kutsua. Tämä saattaa vaikuttaa muun ohjelman toimintaan ja tuottaa vaikeasti löydettäviä virheitä - funktion tarkoituksena ei ole muuttaa listaa vaan palauttaa toiseksi suurin alkio.

Funktion parametrinaan saamiinsa olioihin tekemiä (usein odottamattomia) muutoksia kutsutaan **funktion sivuvaikutukseksi**.

Yleensä lähes aina on toivottavaa, että funktiot **eivät muuta** parametrinaan saamiaan olioita. Jos tietorakennetta on tarkoitus muokata, on yleensä hyvä ottaa siitä kopio ja muokata alkuperäisen sijasta tätä kopiota:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def toiseksi_pienin_alkio(lista: list) -> int:
        # Tehdään listasta järjestetty kopio
        kopio = sorted(lista)

        # ...ja poimitaan toinen alkio kopiosta
        return kopio[1]

    # Luodaan lista
    lista = [1, 5, 4, 6, 2, 3, 7, 8]

    print("Lista ennen:", lista)

    # Kutsutaan funktiota
    print("Toiseksi pienin:", toiseksi_pienin_alkio(lista))

    # Listan järjestys on edellee sama
    print("Lista jälkeen:", lista)
    ```

    Ohjelma tulostaa:
    ```
    Lista ennen: [1, 5, 4, 6, 2, 3, 7, 8]
    Toiseksi pienin: 2
    Lista jälkeen: [1, 5, 4, 6, 2, 3, 7, 8]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20toiseksi_pienin_alkio%28lista%3A%20list%29%20-%3E%20int%3A%0A%20%20%20%20%23%20Tehd%C3%A4%C3%A4n%20listasta%20j%C3%A4rjestetty%20kopio%0A%20%20%20%20kopio%20%3D%20sorted%28lista%29%0A%0A%20%20%20%20%23%20...ja%20poimitaan%20toinen%20alkio%20kopiosta%0A%20%20%20%20return%20kopio%5B1%5D%0A%0A%23%20Luodaan%20lista%0Alista%20%3D%20%5B1,%205,%204,%206,%202,%203,%207,%208%5D%0A%0Aprint%28%22Lista%20ennen%3A%22,%20lista%29%0A%0A%23%20Kutsutaan%20funktiota%0Aprint%28%22Toiseksi%20pienin%3A%22,%20toiseksi_pienin_alkio%28lista%29%29%0A%0A%23%20Listan%20j%C3%A4rjestys%20on%20edellee%20sama%0Aprint%28%22Lista%20j%C3%A4lkeen%3A%22,%20lista%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Tietorakenteet paluuarvoina

Funktio voi myös palauttaa tietorakenteen. Yleensä kyseessä on tilanne jossa joko
1. luodaan kokonaan uusi tietorakenne joidenkin parametrien perusteella tai
2. kopioidaan ja muutetaan parametrina saatua tietorakennetta.

Esimerkki ensimmäisestä tilanteesta voisi olla vaikkapa funktio, joka muodostaa parametrien mukaisen listan:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def monista_arvoa(arvo: int, maara: int) -> list:
        # Listan kertominen tuottaa uuden listan
        # jossa alkuperäistä on monistettu annettu 
        # määrä
        lista = [arvo] * maara
        return lista


    # Testataan
    print(monista_arvoa(5, 10))

    kolmoslista = monista_arvoa(3, 5)
    print(kolmoslista)
    ```

    Ohjelma tulostaa:
    ``` 
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    [3, 3, 3, 3, 3]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20monista_arvoa%28arvo%3A%20int,%20maara%3A%20int%29%20-%3E%20list%3A%0A%20%20%20%20%23%20Listan%20kertominen%20tuottaa%20uuden%20listan%0A%20%20%20%20%23%20jossa%20alkuper%C3%A4ist%C3%A4%20on%20monistettu%20annettu%20%0A%20%20%20%20%23%20m%C3%A4%C3%A4r%C3%A4%0A%20%20%20%20lista%20%3D%20%5Barvo%5D%20*%20maara%0A%20%20%20%20return%20lista%0A%0A%0A%23%20Testataan%0Aprint%28monista_arvoa%285,%2010%29%29%0A%0Akolmoslista%20%3D%20monista_arvoa%283,%205%29%0Aprint%28kolmoslista%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Jälkimmäisestä esimerkkinä toimii funktio, joka saa parametriksi sanakirjan, jossa avaimina toimivat luvut ja arvoina lukujen neliöt. Funktio palauttaa uuden sanakirjan, jolla on alkuperäisestä sanakirjasta ainoastaan sellaiset alkiot, joissa avain on negatiivinen:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def negatiiviset_avaimet(neliot: dict) -> dict:
        negat = {}

        for avain in neliot:
            if avain < 0:
                negat[avain] = neliot[avain]

        return negat

    # testataan funktiota
    neliokirja = {}

    # generoidaan sanakirja avainlistasta
    avaimet = [1,-1,2,-2,4,-4,5,6,-7,8]
    for avain in avaimet:
        neliokirja[avain] = avain * avain

    print(neliokirja)

    print(negatiiviset_avaimet(neliokirja))
    ```

    Ohjelma tulostaa:
    ```
    {1: 1, -1: 1, 2: 4, -2: 4, 4: 16, -4: 16, 5: 25, 6: 36, -7: 49, 8: 64}
    {-1: 1, -2: 4, -4: 16, -7: 49}
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20negatiiviset_avaimet%28neliot%3A%20dict%29%20-%3E%20dict%3A%0A%20%20%20%20negat%20%3D%20%7B%7D%0A%0A%20%20%20%20for%20avain%20in%20neliot%3A%0A%20%20%20%20%20%20%20%20if%20avain%20%3C%200%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20negat%5Bavain%5D%20%3D%20neliot%5Bavain%5D%0A%0A%20%20%20%20return%20negat%0A%0A%23%20testataan%20funktiota%0Aneliokirja%20%3D%20%7B%7D%0A%0A%23%20generoidaan%20sanakirja%20avainlistasta%0Aavaimet%20%3D%20%5B1,-1,2,-2,4,-4,5,6,-7,8%5D%0Afor%20avain%20in%20avaimet%3A%0A%20%20%20%20neliokirja%5Bavain%5D%20%3D%20avain%20*%20avain%0A%0Aprint%28neliokirja%29%0A%0Aprint%28negatiiviset_avaimet%28neliokirja%29%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>