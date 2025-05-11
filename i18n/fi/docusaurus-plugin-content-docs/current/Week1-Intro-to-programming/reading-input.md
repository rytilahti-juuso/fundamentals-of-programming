---
sidebar_position: 4
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Syötteiden lukeminen

Käyttäjän pitää yleensä pystyä vaikuttamaan ohjelman suoritukseen. Tyypillisesti käyttäjä antaa ohjelmalle syötteen, jonka perusteella ohjelma muodostaa sopivan tulosteen. Yksinkertainen esimerkki voisi olla vaikkapa se, että käyttäjä syöttää kaksi kokonaislukua ja ohjelma laskee ja tulostaa niiden summan. Sama periaate näkyy monimutkaisemmin vaikkapa ohjelmassa, jossa ohjelma muodostaa käyttäjän lataamien videoiden perusteella uuden videon, tai ohjelmassa, joka laskee geenien perusteella todennäköisyyden sairastua johonkin tiettyyyn sairauteen.

Perusperiaate voidaan kuvata seuraavasti:

![Perusperiaate](/img/img-fi/w1-3.png)

Pythonissa voimme lukea käyttäjän tekstimuotoisen (eli yleensä näppäimistöltä syötettävän) syötteen **input**-funktiolla. Funktiolle annetaan parametriksi käyttäjälle esitettävä **kehote** (eli teksti, joka ohjaa käyttäjää syöttämään oikeantyyppisen arvon). Funktio **palauttaa arvon**, joka yleensä tallennetaan johonkin muuttujaan.

Tarkastellaan esimerkkiä, jossa ohjelma kysyy käyttäjän nimen ja tulostaa sitten tervehdyksen:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Kysytään nimi ja tallennetaan se muuttujaan nimi
    nimi = input("Anna nimesi: ")

    # Tulostetaan tervehdys
    print("Moi vaan, " + nimi + "!")
    ```

    Esimerkkisuoritus:
    ``` 
    Anna nimesi: Paula Python
    Moi vaan, Paula Python!
    ```

    Sama ohjelma suoritettuna toisella syötteellä antaa luonnollisesti erilaisen tulosteen:

    Esimerkkisuoritus:
    ``` 
    Anna nimesi: Jarmo Java
    Moi vaan, Jarmo Java!
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Kysyt%C3%A4%C3%A4n%20nimi%20ja%20tallennetaan%20se%20muuttujaan%20nimi%0Animi%20%3D%20input%28%22Anna%20nimesi%3A%20%22%29%0A%0A%23%20Tulostetaan%20tervehdys%0Aprint%28%22Moi%20vaan,%20%22%20%2B%20nimi%20%2B%20%22!%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toisessa esimerkissä kysytään käyttäjältä erikseen etunimi, sukunimi ja puhelinnumero ja tulostetaan sitten tervehdys.

```python 
etunimi = input("Anna etunimi: ")
sukunimi = input("Anna sukunimi: ")
pnro = input("Anna puhelinnumero: ")

print("Moi vaan, " + etunimi + " " + sukunimi) # välilyönti erottamaan nimet
print("Puhelinnumerosi on " + pnro)
 ```

Esimerkkisuoritus:
``` 
Anna etunimi: Olli
Anna sukunimi: Ohjelmoija
Anna puhelinnumero: 123-456 7890
Moi vaan, Olli Ohjelmoija
Puhelinnumerosi on 123-456 7890
 ```

## Lukutyyppiset syötteet

Funktio input palauttaa aina merkkijonotyyppisen arvon. Tämä on ongelma, jos haluttaisiin käsitellä syötettä lukuina. Esimerkiksi seuraava ohjelma näyttää toimivan hiukan omituisesti:

```python 
luku1 = input("Anna luku 1: ")
luku2 = input("Anna luku 2: ")

print("Lukujen summa on", (luku1 + luku2))
 ```

Esimerkkisuoritus:
```
Anna luku 1: 5
Anna luku 2: 8
Lukujen summa on 58
 ```

Merkkijonotyyppinen arvo voidaan kuitenkin muuntaa kokonaislukutyyppiseksi käyttämällä funktiota int. 

Funktio toimii seuraavasti:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    # Luku merkkijonon sisällä
    jono = "5"

    # Nyt plus-operaattori katenoi jonot uudeksi merkkijonoksi
    print(jono + jono)

    # Muunnetaan luvuksi
    luku = int(jono)

    # Nyt plus-operaattori laskee luvut yhteen
    print(luku + luku)
    ```

    Ohjelma tulostaa:
    ``` 
    55
    10
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%20Luku%20merkkijonon%20sis%C3%A4ll%C3%A4%0Ajono%20%3D%20%225%22%0A%0A%23%20Nyt%20plus-operaattori%20katenoi%20jonot%20uudeksi%20merkkijonoksi%0Aprint%28jono%20%2B%20jono%29%0A%0A%23%20Muunnetaan%20luvuksi%0Aluku%20%3D%20int%28jono%29%0A%0A%23%20Nyt%20plus-operaattori%20laskee%20luvut%20yhteen%0Aprint%28luku%20%2B%20luku%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Nyt voimme korjata edellä esitetyn ohjelman niin, että yhteenlasku luvuilla toimii oikein:

```python 
# Muunnetaan syötteet lukutyyppisiksi int-funktiolla
luku1 = int(input("Anna luku 1: "))
luku2 = int(input("Anna luku 2: "))

print("Lukujen summa on", (luku1 + luku2))
 ```

Esimerkkisuoritus:
``` 
Anna luku 1: 5
Anna luku 2: 8
Lukujen summa on 13
 ```

Vastaava funktio syötteen muuttamiseksi liukuluvuksi on nimeltään float. Luonnollisesti voimme lukea samassa ohjelmassa sekä merkkijono- että lukutyyppisiä syötteitä:

```python 
# Kysytään nimi merkkijonona
nimi = input("Anna nimesi: ")

# Ikä on kokonaisluku eli int
ika = int(input("Anna ikäsi: "))

# Pituus on liukuluku eli float
pituus = float(input("Anna pituus: "))

print("Nimesi on siis " + nimi)
print("Ikäsi on", ika)
print("...ja pituutesi", pituus)
 ```

Esimerkkisuoritus:
``` 
Anna nimesi: Esko Esimerkki
Anna ikäsi: 52
Anna pituus: 165.5
Nimesi on siis Esko Esimerkki
Ikäsi on 52
...ja pituutesi 165.5
 ```

## Syötteet: vähän turvallisuudesta

Käyttäjän syöte voi olla monenlaista: tekstiä, numeerisia arvoja, ääni-, teksti- tai videotiedostoja, kuvia jne. Sovellus voi saada odottamattoman syötteen, joka voi jopa olla haitallinen. Tämä muodostaa turvallisuusriskin!

Mutta mitä voi tapahtua? 

1. Luvaton pääsy järjestelmään tai arkaluonteisiin tietoihin (esimerkiksi todennusprosessin tietoturva-aukkojen vuoksi) voi mahdollistaa tietojen lukemisen tietokannasta, muistista tai tiedostoista.
2. Luvaton muokkaus (edellyttää kuitenkin ensin pääsyn järjestelmään) voi johtaa tietojen muuttamiseen tietokannassa, muistissa tai tiedostoissa sekä haitallisen koodin suorittamiseen.
3. Saavutettavuusongelmat: sovellus voi kaatua tai jäädä loputtomaan tilaan, jos odottamattomia syötteitä ei käsitellä asianmukaisesti. Tällaisia tilanteita voidaan hyödyntää hyökkäysten aloittamiseen ja esimerkiksi luvattoman pääsyn hankkimiseen.

### Syötteen validointi toimenpiteenä

Sovelluksen suojaamiseksi odottamattomalta toiminnalta, joka voi jopa aiheuttaa tietoturvaongelmia, on tärkeää varmistaa, että käyttäjän syöte on hyväksyttävää. Tätä prosessia kutsutaan syötteiden validoinniksi. Validointi voidaan toteuttaa eri tavoin sen mukaan, millaista tietotyyppiä sovellus odottaa.

| Semanttinen validointi eli tietojen merkityksen tarkistaminen                                             | Syntaktinen validointi eli rakenteellinen tarkistaminen                                                                                                                |
|----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Sopiva arvojoukko: hyväksyttäville arvoille asetetaan rajoituksia. Esimerkiksi kuukausien kohdalla hyväksytään vain tietyt kuukaudennimet, ja hintojen kohdalla vain arvot, jotka ovat suurempia kuin 0. | Oikea tietotyyppi: esimerkiksi ikä on kokonaisluku, hinta on liukuluku, ja etu- sekä sukunimi ovat merkkijonoja, jotka koostuvat kirjaimista ja sallituista merkeistä. |
| Aritmeettiset vaatimukset: esimerkiksi että käyttäjä ei voi syöttaa nolla nimittäjäksi koska se ei ole sallittua.                                    | Sopiva datan pituus: esimerkiksi salasanan tulee olla vähintään 8 merkkiä pitkä, ja etu- sekä sukunimet eivät saa olla tyhjiä.                                         |
| Kelpoisuusvaatimukset: esimerkiksi käyttäjän syöttämän sähköpostiosoitteen tulee olla olemassa oleva.                                  | Oikea muoto: esimerkiksi että sähköpostiosoiteessa pittää olla kolme pääkomponenttia: kättäjänimi, @-symboli ja verkkotunnus                                           |

Pääsääntönä on, että sovellus ei saa hyväksyä syötteitä, jotka rikkovat määriteltyjä ehtoja. Tämä on helppo tehdä käyttäjän syötteille, kuten numeerisille arvoille tai yksittäisille sanoille, määrittelemällä koodissa, mitkä arvot ovat sallittuja (ns. sallittulista, eng. allowlist). Esimerkiksi vapaamuotoisen tekstin kohdalla prosessi on hieman monimutkaisempi. Jos käyttäjän syötteeseen upotettu haitallinen koodi onnistuu suorittamaan, se voi johtaa tietojen varastamiseen tai muuttamiseen. Välttääkseen mahdollisesti vaarallisten merkkien negatiivisen vaikutuksen, suositus on koodata nämä merkit. Koodaus muuntaa lähdetiedot turvalliseen muotoon ennen kuin sovellus käsittelee niitä edelleen, mikä on ratkaisevan tärkeää turvallisuuden kannalta. Esimerkki: `<script>` palautetaan muodossa `&lt;script&gt;`. Muita tapa on poistaa mahdollisesti vaarallisia merkkejä.

Kurssin myöhemmässä vaiheessa tarkastelemme esimerkkejä siitä, miten käyttäjän syötteiden validointi voidaan toteuttaa käytännössä. Haluatko tietää lisää? Lue https://cwe.mitre.org/data/definitions/20.html ja https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html (OWASP (Open Web Application Security Project) on voittoa tavoittelematon organisaatio, joka keskittyy ohjelmistojen turvallisuuden parantamiseen).
