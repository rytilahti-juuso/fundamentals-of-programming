---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


# Sanakirja ja tuple

Pythonissa on myös useita muita tietorakenteita. Tarkastellaan seuraavaksi **sanakirjaa** (engl. **dictionary**).

Sanakirja on tietorakenne, jossa **avaimet** osoittavat **alkioihin**. Alkioilla ei ole varsinaisesti järjestystä - sanakirjasta ei voi siis poimia ensimmäistä tai viimeistä alkiota. Sanakirjasta voidaan kuitenkin poimia hyvin nopeasti jokin arvo, jos tiedetään siihen osoittava avain.

Seuraava kuva havainnollistaa sanakirjaa: opiskelijanumerot osoittavat opiskelijoiden nimiin.

![Sanakirja esimerkki](/img/img-fi/w5-3.png)

## Sanakirja Pythonissa

Uuden tyhjän sanakirjan voi luoda samalla tavalla kuin listankin - ainoa erotus on käytettävät sulut: sanakirjassa käytetään aaltosulkeita { } hakasulkeiden sijasta.

Luodaan siis uusi tyhjä sanakirja ja tallennetaan viittaus siihen muuttujaan opiskelijat:

```python 
opiskelijat = {}
 ```

Sanakirjaan voidaan tallentaa arvoja listoista tutun hakasulkunotaation avulla. Lisätään sanakirjaan pari arvoa ja katsotaan miltä se sen jälkeen näyttää:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    opiskelijat = {}

    opiskelijat["12345"] = "Olli Opiskelija"
    opiskelijat["54321"] = "Outi Oppilas"

    print(opiskelijat)

    opiskelijat["99999"] = "Heikki Hikipinko"
    opiskelijat["55555"] = "Keijo Keksitty"

    print(opiskelijat)
    ```

    Ohjelma tulostaa:
    ```
    {'12345': 'Olli Opiskelija', '54321': 'Outi Oppilas'}
    {'12345': 'Olli Opiskelija', '54321': 'Outi Oppilas', '99999': 'Heikki Hikipinko', '55555': 'Keijo Keksitty'}
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=opiskelijat%20%3D%20%7B%7D%0A%0Aopiskelijat%5B%2212345%22%5D%20%3D%20%22Olli%20Opiskelija%22%0Aopiskelijat%5B%2254321%22%5D%20%3D%20%22Outi%20Oppilas%22%0A%0Aprint%28opiskelijat%29%0A%0Aopiskelijat%5B%2299999%22%5D%20%3D%20%22Heikki%20Hikipinko%22%0Aopiskelijat%5B%2255555%22%5D%20%3D%20%22Keijo%20Keksitty%22%0A%0Aprint%28opiskelijat%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Huomaa, että jos avain on jo olemassa sanakirjassa, vanha arvo korvataan uudella:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    hinnat = {}
    hinnat["Omena"] = 5.95
    hinnat["Banaani"] = 3.90
    hinnat["Appelsiini"] = 4.50

    print(hinnat)

    # Nyt Omena on jo sanakirjassa, joten uuden
    # alkion sijasta vaihdetaan arvo
    hinnat["Omena"] = 4.25

    print(hinnat)

    # Ananas ei ollut aikaisemmin sanakirjassa, 
    # se siis lisätään uutena avain-arvo-parina
    hinnat["Ananas"] = 7.90

    print(hinnat)
    ```

    Ohjelma tulostaa:
    ``` 
    {'Omena': 5.95, 'Banaani': 3.9, 'Appelsiini': 4.5}
    {'Omena': 4.25, 'Banaani': 3.9, 'Appelsiini': 4.5}
    {'Omena': 4.25, 'Banaani': 3.9, 'Appelsiini': 4.5, 'Ananas': 7.9}
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=hinnat%20%3D%20%7B%7D%0Ahinnat%5B%22Omena%22%5D%20%3D%205.95%0Ahinnat%5B%22Banaani%22%5D%20%3D%203.90%0Ahinnat%5B%22Appelsiini%22%5D%20%3D%204.50%0A%0Aprint%28hinnat%29%0A%0A%23%20Nyt%20Omena%20on%20jo%20sanakirjassa,%20joten%20uuden%0A%23%20alkion%20sijasta%20vaihdetaan%20arvo%0Ahinnat%5B%22Omena%22%5D%20%3D%204.25%0A%0Aprint%28hinnat%29%0A%0A%23%20Ananas%20ei%20ollut%20aikaisemmin%20sanakirjassa,%20%0A%23%20se%20siis%20lis%C3%A4t%C3%A4%C3%A4n%20uutena%20avain-arvo-parina%0Ahinnat%5B%22Ananas%22%5D%20%3D%207.90%0A%0Aprint%28hinnat%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Sanakirjasta voidaan hakea arvo avaimen perusteella:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    hinnat = {}
    hinnat["Omena"] = 5.95
    hinnat["Banaani"] = 3.90
    hinnat["Appelsiini"] = 4.50
    hinnat["Ananas"] = 7.90

    print("Omena maksaa:", hinnat["Omena"])

    print("Banaanin hinta on", hinnat["Banaani"])

    yhteensa = hinnat["Appelsiini"] + hinnat["Ananas"]
    print("Appelsiini ja ananas yhdessä:", yhteensa)
    ```

    Ohjelma tulostaa:
    ```
    Omena maksaa: 5.95
    Banaanin hinta on 3.9
    Appelsiini ja ananas yhdessä: 12.4
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=hinnat%20%3D%20%7B%7D%0Ahinnat%5B%22Omena%22%5D%20%3D%205.95%0Ahinnat%5B%22Banaani%22%5D%20%3D%203.90%0Ahinnat%5B%22Appelsiini%22%5D%20%3D%204.50%0Ahinnat%5B%22Ananas%22%5D%20%3D%207.90%0A%0Aprint%28%22Omena%20maksaa%3A%22,%20hinnat%5B%22Omena%22%5D%29%0A%0Aprint%28%22Banaanin%20hinta%20on%22,%20hinnat%5B%22Banaani%22%5D%29%0A%0Ayhteensa%20%3D%20hinnat%5B%22Appelsiini%22%5D%20%2B%20hinnat%5B%22Ananas%22%5D%0Aprint%28%22Appelsiini%20ja%20ananas%20yhdess%C3%A4%3A%22,%20yhteensa%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Jos avainta ei ole olemassa, seuraa virhe - tämä muistuttaa siis tilannetta, jossa yritetään hakea listalta alkio sellaisen indeksin avulla, jota ei ole olemassa listassa:

```python 
hinnat = {}
hinnat["Omena"] = 5.95
hinnat["Banaani"] = 3.90
hinnat["Appelsiini"] = 4.50
hinnat["Ananas"] = 7.90

# Sanakirjassa ei ole avainta "Rypäle"
print(hinnat["Rypäle"])
 ```

Ohjelma tulostaa:
``` 
Traceback (most recent call last):
  File "sanakirja.py", line 8, in <module>
    print(hinnat["Rypäle"])
KeyError: 'Rypäle'
 ```

Sanakirjan kaikki arvot voidaan käydä läpi **for**-silmukalla. Silmukka palauttaa yksi kerrallaan sanakirjan **avaimet**, joiden avulla saadaan tarvittaessa poimittua vastaavat arvot.

Tuttuun tapaan funktio **len** palauttaa alkoiden - tässä tapauksessa avain-arvo-parien määrän.

Esimerkissä on myös esitetty sanakirjan alustus arvoja antamalla. Avain-arvopari annetaan kaksoispisteellä erotettuna.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Alustetaan sanakirja antamalla jotain alkioita valmiiksi
    kaannokset = {"auto": "car", "vene": "boat", "pyörä": "bike", "lentokone": "plane"}

    # len palauttaa alkoiden määrän
    print("Sanakirjassa alkioita:", len(kaannokset))

    # lisätään alkio
    kaannokset["mopo"] = "moped"

    print("Sanakirjassa nyt alkioita:", len(kaannokset))

    # tulostetaan avaimet ja arvot
    for avain in kaannokset:
        print(f"Avaimella {avain} löytyy arvo {kaannokset[avain]}")
    ```

    Ohjelma tulostaa:
    ``` 
    Sanakirjassa alkioita: 4
    Sanakirjassa nyt alkioita: 5
    Avaimella auto löytyy arvo car
    Avaimella vene löytyy arvo boat
    Avaimella pyörä löytyy arvo bike
    Avaimella lentokone löytyy arvo plane
    Avaimella mopo löytyy arvo moped
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Alustetaan%20sanakirja%20antamalla%20jotain%20alkioita%20valmiiksi%0Akaannokset%20%3D%20%7B%22auto%22%3A%20%22car%22,%20%22vene%22%3A%20%22boat%22,%20%22py%C3%B6r%C3%A4%22%3A%20%22bike%22,%20%22lentokone%22%3A%20%22plane%22%7D%0A%0A%23%20len%20palauttaa%20alkoiden%20m%C3%A4%C3%A4r%C3%A4n%0Aprint%28%22Sanakirjassa%20alkioita%3A%22,%20len%28kaannokset%29%29%0A%0A%23%20lis%C3%A4t%C3%A4%C3%A4n%20alkio%0Akaannokset%5B%22mopo%22%5D%20%3D%20%22moped%22%0A%0Aprint%28%22Sanakirjassa%20nyt%20alkioita%3A%22,%20len%28kaannokset%29%29%0A%0A%23%20tulostetaan%20avaimet%20ja%20arvot%0Afor%20avain%20in%20kaannokset%3A%0A%20%20%20%20print%28f%22Avaimella%20%7Bavain%7D%20l%C3%B6ytyy%20arvo%20%7Bkaannokset%5Bavain%5D%7D%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Tuplet

**Tuple** on tietorakenne, joka muistuttaa listaa. Toisin kuin lista, tuple on kuitenkin **mutatoitumaton**. Tämä tarkoittaa siis sitä, että tuplen alkoita ei voida muuttaa luomisen jälkeen, eikä tupleen voi myöskään lisätä tai poistaa siitä alkioita.

Tuplet on tarkoitettu **arvoryhmien** muodostamiseen. Niiden avulla voidaan siis helposti yhdistää toisiinsa kuuluvat arvot yhteen rakenteeseen.

Syntaksin kannalta tuplen alustus muistuttaa listan alustusta - hakasulkeiden sijasta tuplessa käytetään kuitenkin kaarisulkeita ().

Seuraavassa on annettu esimerkkejä tuplen erilaisista käyttötarkoituksista:

```python 
# koordinaattipari
koordinaatit = (25.25, 55.15)

# opiskelijan tiedot: nimi, opiskelijanumero, opintopisteet, sposti
opiskelija = ("Olli Opiskelija", 12345, 26, "olli@example.com")

# ristinollapelin siirto: koordinaatit ja merkki
siirto = (5, 2, "X")

# pelikortti: maa ja numero 
siirto = ("pata", 4)
 ```

Tyypillinen tapa käyttää tupleja on tallentaa samanmuotoiset (eli samantyyppisiä arvoja samassa järjestyksessä sisältävät) tuplet listaan tai sanakirjaan. Näin voitaisiin esimerkiksi kätevästi tallentaa useampia koordinaattipareja tai opiskelijoita kaikkine tietoineen yhteen tietorakenteeseen.

Seuraavassa esimerkissä kysellään käyttäjältä koordinaatteja ja tallennetaan niistä muodostetut parit tupleina listaan:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    koordinaatit = []

    while True:
        x = int(input("Anna x-koordinaatti (-1 lopettaa): "))
        if x == -1:
            break

        y = int(input("Anna y-koordinaatti: "))

        pari = (x, y)
        koordinaatit.append(pari)

    print(koordinaatit)
    ```

    Ohjelma tulostaa:
    ```
    Anna x-koordinaatti (-1 lopettaa): 4
    Anna y-koordinaatti: 6
    Anna x-koordinaatti (-1 lopettaa): 2
    Anna y-koordinaatti: 5
    Anna x-koordinaatti (-1 lopettaa): 10
    Anna y-koordinaatti: 9
    Anna x-koordinaatti (-1 lopettaa): -1
    [(4, 6), (2, 5), (10, 9)]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=koordinaatit%20%3D%20%5B%5D%0A%0Awhile%20True%3A%0A%20%20%20%20x%20%3D%20int%28input%28%22Anna%20x-koordinaatti%20%28-1%20lopettaa%29%3A%20%22%29%29%0A%20%20%20%20if%20x%20%3D%3D%20-1%3A%0A%20%20%20%20%20%20%20%20break%0A%0A%20%20%20%20y%20%3D%20int%28input%28%22Anna%20y-koordinaatti%3A%20%22%29%29%0A%0A%20%20%20%20pari%20%3D%20%28x,%20y%29%0A%20%20%20%20koordinaatit.append%28pari%29%0A%0Aprint%28koordinaatit%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toinen esimerkki, jossa funktio saa parametrikseen listan tupleja, jotka sisältävät jääkiekko-otteluiden tietoja. Jokainen tuple sisältää järjestyksessä alkiot kotijoukkuetta, vierasjoukkuetta sekä molempien joukkueiden maalimääriä varten. Funktio palauttaa uuden tuplen, joka sisältää järjestyksessä kotivoittojen, tasapelien ja vierasvoittojen määrän.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    def tilastot(ottelut: list) -> tuple:
        kotivoitot = 0
        tasapelit = 0
        vierasvoitot = 0

        for ottelu in ottelut:
            # alkiot järjestyksessä: 
            # kotijoukkue, vierasjoukkue, kotimaalit, vierasmaalit
            kotimaalit = ottelu[2]
            vierasmaalit = ottelu[3]

            if kotimaalit > vierasmaalit:
                kotivoitot += 1
            elif vierasmaalit > kotimaalit:
                vierasvoitot += 1
            else:
                tasapelit += 1

        return (kotivoitot, tasapelit, vierasvoitot)

    # Testataan funktiota
    ottelulista = []
    ottelulista.append(("JPS", "PPS", 1, 0))
    ottelulista.append(("PPS", "Pallerot", 2, 2))
    ottelulista.append(("JPS", "Pallerot", 2, 3))
    ottelulista.append(("HC Python", "HC python", 5, 5))
    ottelulista.append(("HC Python", "PPS", 2, 1))
    ottelulista.append(("JPS", "HC python", 1, 4))
    ottelulista.append(("HC python", "PPS", 2, 0))

    tilastot = tilastot(ottelulista)

    print("Kotivoittoja:", tilastot[0])
    print("Tasapelejä:", tilastot[1])
    print("Vierasvoittoja:", tilastot[2])
    ```

    Ohjelma tulostaa:
    ``` 
    Kotivoittoja: 3
    Tasapelejä: 2
    Vierasvoittoja: 2
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=def%20tilastot%28ottelut%3A%20list%29%20-%3E%20tuple%3A%0A%20%20%20%20kotivoitot%20%3D%200%0A%20%20%20%20tasapelit%20%3D%200%0A%20%20%20%20vierasvoitot%20%3D%200%0A%0A%20%20%20%20for%20ottelu%20in%20ottelut%3A%0A%20%20%20%20%20%20%20%20%23%20alkiot%20j%C3%A4rjestyksess%C3%A4%3A%20%0A%20%20%20%20%20%20%20%20%23%20kotijoukkue,%20vierasjoukkue,%20kotimaalit,%20vierasmaalit%0A%20%20%20%20%20%20%20%20kotimaalit%20%3D%20ottelu%5B2%5D%0A%20%20%20%20%20%20%20%20vierasmaalit%20%3D%20ottelu%5B3%5D%0A%0A%20%20%20%20%20%20%20%20if%20kotimaalit%20%3E%20vierasmaalit%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20kotivoitot%20%2B%3D%201%0A%20%20%20%20%20%20%20%20elif%20vierasmaalit%20%3E%20kotimaalit%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20vierasvoitot%20%2B%3D%201%0A%20%20%20%20%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20tasapelit%20%2B%3D%201%0A%0A%20%20%20%20return%20%28kotivoitot,%20tasapelit,%20vierasvoitot%29%0A%0A%23%20Testataan%20funktiota%0Aottelulista%20%3D%20%5B%5D%0Aottelulista.append%28%28%22JPS%22,%20%22PPS%22,%201,%200%29%29%0Aottelulista.append%28%28%22PPS%22,%20%22Pallerot%22,%202,%202%29%29%0Aottelulista.append%28%28%22JPS%22,%20%22Pallerot%22,%202,%203%29%29%0Aottelulista.append%28%28%22HC%20Python%22,%20%22HC%20python%22,%205,%205%29%29%0Aottelulista.append%28%28%22HC%20Python%22,%20%22PPS%22,%202,%201%29%29%0Aottelulista.append%28%28%22JPS%22,%20%22HC%20python%22,%201,%204%29%29%0Aottelulista.append%28%28%22HC%20python%22,%20%22PPS%22,%202,%200%29%29%0A%0Atilastot%20%3D%20tilastot%28ottelulista%29%0A%0Aprint%28%22Kotivoittoja%3A%22,%20tilastot%5B0%5D%29%0Aprint%28%22Tasapelej%C3%A4%3A%22,%20tilastot%5B1%5D%29%0Aprint%28%22Vierasvoittoja%3A%22,%20tilastot%5B2%5D%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Huomaa, että vaikka tuplea ei voi muuttaa, voi sen korvata kuitenkin uudella tuplella. Seuraavassa muokataan henkilöitä sisältävää listaa niin, että kaikki sähköpostiosoitteiden loppuosat muuttuvat. Olemassaolevat tuplet korvataan siis uusilla.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    ossi = ("Ossi", "ossi@example.com",)
    outi = ("Outi", "outi@example.com")
    kimmo = ("Kimmo", "kimmo@example.com")
    kirsi = ("Kirsi", "kirsi@example.com")

    henkilot = [ossi, outi, kimmo, kirsi]

    # Iteroidaan läpi ja muutetaan sähköpostit
    # Huomaa, että listan alkioiden muuttamiseksi
    # käytetään range-funktiota iteroinnissa
    for i in range(len(henkilot)):
        hlo = henkilot[i]
        
        # sposti on toinen alkio
        sposti = hlo[1]

        # korvataan domain-osuus
        sposti = sposti.replace("example.com", "example.fi")

        # tallennetaan takaisin listaan
        # nimi pysyy samana
        henkilot[i] = (hlo[0], sposti)


    for henkilo in henkilot:
        print(henkilo)
    ```

    Ohjelma tulostaa:
    ```
    ('Ossi', 'ossi@example.fi')
    ('Outi', 'outi@example.fi')
    ('Kimmo', 'kimmo@example.fi')
    ('Kirsi', 'kirsi@example.fi')
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=ossi%20%3D%20%28%22Ossi%22,%20%22ossi%40example.com%22,%29%0Aouti%20%3D%20%28%22Outi%22,%20%22outi%40example.com%22%29%0Akimmo%20%3D%20%28%22Kimmo%22,%20%22kimmo%40example.com%22%29%0Akirsi%20%3D%20%28%22Kirsi%22,%20%22kirsi%40example.com%22%29%0A%0Ahenkilot%20%3D%20%5Bossi,%20outi,%20kimmo,%20kirsi%5D%0A%0A%23%20Iteroidaan%20l%C3%A4pi%20ja%20muutetaan%20s%C3%A4hk%C3%B6postit%0A%23%20Huomaa,%20ett%C3%A4%20listan%20alkioiden%20muuttamiseksi%0A%23%20k%C3%A4ytet%C3%A4%C3%A4n%20range-funktiota%20iteroinnissa%0Afor%20i%20in%20range%28len%28henkilot%29%29%3A%0A%20%20%20%20hlo%20%3D%20henkilot%5Bi%5D%0A%20%20%20%20%0A%20%20%20%20%23%20sposti%20on%20toinen%20alkio%0A%20%20%20%20sposti%20%3D%20hlo%5B1%5D%0A%0A%20%20%20%20%23%20korvataan%20domain-osuus%0A%20%20%20%20sposti%20%3D%20sposti.replace%28%22example.com%22,%20%22example.fi%22%29%0A%0A%20%20%20%20%23%20tallennetaan%20takaisin%20listaan%0A%20%20%20%20%23%20nimi%20pysyy%20samana%0A%20%20%20%20henkilot%5Bi%5D%20%3D%20%28hlo%5B0%5D,%20sposti%29%0A%0A%0Afor%20henkilo%20in%20henkilot%3A%0A%20%20%20%20print%28henkilo%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Alkioiden poisto tietorakenteista

Alkioita voidaan poistaa sanakirjasta ja listasta esimerkiksi avainsanan del avulla. Huomaa, että tuplesta alkioita ei voida poistaa, koska se on mutatoitumaton.

Listasta alkio poistetaan antamalla del-lauseelle viittaus poistettavaan alkioon. Esimerkiksi

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lista = [1,2,3,4,5,6]

    # poistetaan toinen arvo
    del lista[1] 
    print(lista)

    # poistetaan viimeinen arvo
    del lista[-1]
    print(lista)

    # poistetaan eka arvo
    del lista[0]
    print(lista)
    ```

    Ohjelma tulostaa:
    ```
    [1, 3, 4, 5, 6]
    [1, 3, 4, 5]
    [3, 4, 5]
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lista%20%3D%20%5B1,2,3,4,5,6%5D%0A%0A%23%20poistetaan%20toinen%20arvo%0Adel%20lista%5B1%5D%20%0Aprint%28lista%29%0A%0A%23%20poistetaan%20viimeinen%20arvo%0Adel%20lista%5B-1%5D%0Aprint%28lista%29%0A%0A%23%20poistetaan%20eka%20arvo%0Adel%20lista%5B0%5D%0Aprint%28lista%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Sanakirjasta alkio poistetaan viittamalla poistettavan alkion avaimeen:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    pituudet = {"Keijo": 180, "Liisa": 171, "Antero": 145, "Aune": 164}

    # Poistetaan Keijo
    del pituudet["Keijo"]
    print(pituudet)

    # Poistetaan Antero
    del pituudet["Antero"]
    print(pituudet)
    ```

    Ohjelma tulostaa:
    ```
    {'Liisa': 171, 'Antero': 145, 'Aune': 164}
    {'Liisa': 171, 'Aune': 164}
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=pituudet%20%3D%20%7B%22Keijo%22%3A%20180,%20%22Liisa%22%3A%20171,%20%22Antero%22%3A%20145,%20%22Aune%22%3A%20164%7D%0A%0A%23%20Poistetaan%20Keijo%0Adel%20pituudet%5B%22Keijo%22%5D%0Aprint%28pituudet%29%0A%0A%23%20Poistetaan%20Antero%0Adel%20pituudet%5B%22Antero%22%5D%0Aprint%28pituudet%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Alkioiden poisto silmukan sisällä voi sotkea iteroinnin. Tarkastellaan seuraavassa esimerkkiä, jossa käydään silmukka läpi, tulostetaan jokainen alkio ja poistetaan alkio, jos se on parillinen. Huomaa, että alkion poisto johtaa siihen, että silmukka hyppää seuraavan alkion yli ja lopulta silmukan suoritus päättyyy virheeseen, koska lista on lyhyempi kuin mitä se oli silmukan suoritusta aloitettaessa.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    lista = [1, 2, 3, 4, 6, 7, 8, 10, 11]

    for i in range(len(lista)):
        alkio = lista[i]
        print(alkio)

        if alkio % 2 == 0:
            del lista[i]
    ```

    Ohjelma tulostaa:
    ``` 
    1
    2
    4
    7
    8
    11
    Traceback (most recent call last):
      File "poisto.py", line 8, in <module>
        del lista[alkio]
    IndexError: list assignment index out of range
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=lista%20%3D%20%5B1,%202,%203,%204,%206,%207,%208,%2010,%2011%5D%0A%0Afor%20i%20in%20range%28len%28lista%29%29%3A%0A%20%20%20%20alkio%20%3D%20lista%5Bi%5D%0A%20%20%20%20print%28alkio%29%0A%0A%20%20%20%20if%20alkio%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20del%20lista%5Bi%5D&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=30&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Alkioiden poisto silmukassa pitää siis toteuttaa jollain toisella tavalla, esimerkiksi while-lauseella tai poistamisen sijasta kopioimalla säilytettävät alkiot toiseen tietorakenteeseen.