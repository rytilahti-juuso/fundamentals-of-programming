---
sidebar_position: 3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Monipuolisempia ehtoja

Ehtolauseita voi kirjoittaa myös sisäkkäin. Tämä tarkoittaa, että voidaan kirjoittaa rakenteita, joissa jonkin ehdon totuutta tarkastellaan vain silloin, kun jokin toinen ehto on ollut tosi (tai epätosi). Sisäkkäisiä ehtolauseita kirjoitettaessa pitää kiinnittää erityisesti huomioita lohkojen sisennyksiin, koska Python päättelee jokaiseen ehtoon kuuluvan lohkon oikeasta sisennyksestä.

Esimerkki ohjelmasta, joka kysyy käyttäjältä luvun ja tulostaa tiedon siitä onko luku parillinen vai pariton. Tarkastelu parillisuudesta kuitenkin tehdään vain silloin, jos luku on suurempi kuin nolla.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luku = int(input("Anna luku: "))

    # Testataan aluksi onko luku suurempi kuin nolla
    if luku > 0:
        # Jos oli, testataan onko parillinen vai ei
        if luku % 2 == 0:
            print("Luku oli parillinen")
        else:
            print("Luku on pariton")
    # Tämä else liityy ekaan if-lauseeseen
    else:
        print("Luku oli pienempi kuin nolla")
    ```

    Esimerkkisuoritukset:
    ``` 
    Anna luku: 17
    Luku on pariton
    ```

    ``` 
    Anna luku: 32
    Luku oli parillinen
    ```

    ``` 
    Anna luku: -6
    Luku oli pienempi kuin nolla
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku%20%3D%20int%28input%28%22Anna%20luku%3A%20%22%29%29%0A%0A%23%20Testataan%20aluksi%20onko%20luku%20suurempi%20kuin%20nolla%0Aif%20luku%20%3E%200%3A%0A%20%20%20%20%23%20Jos%20oli,%20testataan%20onko%20parillinen%20vai%20ei%0A%20%20%20%20if%20luku%20%25%202%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20print%28%22Luku%20oli%20parillinen%22%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28%22Luku%20on%20pariton%22%29%0A%23%20T%C3%A4m%C3%A4%20else%20liityy%20ekaan%20if-lauseeseen%0Aelse%3A%0A%20%20%20%20print%28%22Luku%20oli%20pienempi%20kuin%20nolla%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Toinen esimerkki, jossa käyttäjältä kysytään nimi ja kotipaikka. Jos kotipaikkakunta on Turku, kysytään vielä tarkentava kysymys:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    kaupunki = input("Mistä olet kotoisin? ")

    if kaupunki == "Turku":
        puoli = input("Kummalta puolelta jokea? ")

        if puoli == "Toispualt":
            print("Siellä on kauppatori")
        else:
            print("Siellä on tuomiokirkko")
    elif kaupunki == "Tampere":
        print("Siellä on Särkänniemi")
    else:
        print("Se on varmaan ihan kiva kaupunki.")
    ```

    Esimerkkisuorituksia:
    ``` 
    Mistä olet kotoisin? Turku
    Kummalta puolelta jokea? Toispualt
    Siellä on kauppatori
    ```

    ``` 
    Mistä olet kotoisin? Tampere
    Siellä on Särkänniemi
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=kaupunki%20%3D%20input%28%22Mist%C3%A4%20olet%20kotoisin%3F%20%22%29%0A%0Aif%20kaupunki%20%3D%3D%20%22Turku%22%3A%0A%20%20%20%20puoli%20%3D%20input%28%22Kummalta%20puolelta%20jokea%3F%20%22%29%0A%0A%20%20%20%20if%20puoli%20%3D%3D%20%22Toispualt%22%3A%0A%20%20%20%20%20%20%20%20print%28%22Siell%C3%A4%20on%20kauppatori%22%29%0A%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20print%28%22Siell%C3%A4%20on%20tuomiokirkko%22%29%0Aelif%20kaupunki%20%3D%3D%20%22Tampere%22%3A%0A%20%20%20%20print%28%22Siell%C3%A4%20on%20S%C3%A4rk%C3%A4nniemi%22%29%0Aelse%3A%0A%20%20%20%20print%28%22Se%20on%20varmaan%20ihan%20kiva%20kaupunki.%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

## Loogiset operaattorit

Useita ehtoja voidaan myös yhdistää yhteen ehtolausekkeeseen. Yhdistämiseen käytetään loogisia operaattoreita.

Tarkastellaan ensin **and**-operaattoria. Operaattorin avulla voidaan määritellä yhdistelmälausekkeita, joissa kaikkien ehtojen pitää olla tosia, jotta koko lauseke on tosi.

Näinpä lauseke

A and B

on tosi ainostaan silloin, kun molemmat sekä A että B ovat tosia. Jos jompikumpi on epätosi, koko lauseke on epätosi.

Operaattori toimii siis jotakuinkin samalla tavalla kuin luonnollisen kielen vastineensa: lause

**"Kahvikuppi on pöydällä ja kupissa on kahvia"**

on tosi ainoastaan silloin, kun kuppi on pöydällä **ja** siinä on kahvia. Jos kuppi on jossain muualla kuin pöydällä, koko lause on epätosi. Samoin koko lause on epätosi, jos kupissa on teetä.

Esimerkkejä:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luku1 = 20
    luku2 = 10

    # Molemmat tosia --> lauseke on tosi
    if luku1 == 20 and luku1 > luku2:
        print("Eka on tosi")

    # Molemmat tosia --> lauseke on tosi
    if luku2 < luku1 and luku2 != 20:
        print("Toka on tosi")

    # Nyt toinen "alilauseke" on epätosi --> lauseke on epätosi
    if luku1 == 20 and luku2 == 20:
        print("Kolmas on tosi")

    # Samoin nyt:
    if luku1 < 15 and luku2 < 15:
        print("Neljäs on tosi")

    # Tässä molemmat ovat epätosia --> koko lauseke on epätosi
    if luku1 < 15 and luku2 < 5:
        print("Viides on tosi")
    ```

    Ohjelma tulostaa:
    ```python 
    Eka on tosi
    Toka on tosi
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku1%20%3D%2020%0Aluku2%20%3D%2010%0A%0A%23%20Molemmat%20tosia%20--%3E%20lauseke%20on%20tosi%0Aif%20luku1%20%3D%3D%2020%20and%20luku1%20%3E%20luku2%3A%0A%20%20%20%20print%28%22Eka%20on%20tosi%22%29%0A%0A%23%20Molemmat%20tosia%20--%3E%20lauseke%20on%20tosi%0Aif%20luku2%20%3C%20luku1%20and%20luku2%20!%3D%2020%3A%0A%20%20%20%20print%28%22Toka%20on%20tosi%22%29%0A%0A%23%20Nyt%20toinen%20%22alilauseke%22%20on%20ep%C3%A4tosi%20--%3E%20lauseke%20on%20ep%C3%A4tosi%0Aif%20luku1%20%3D%3D%2020%20and%20luku2%20%3D%3D%2020%3A%0A%20%20%20%20print%28%22Kolmas%20on%20tosi%22%29%0A%0A%23%20Samoin%20nyt%3A%0Aif%20luku1%20%3C%2015%20and%20luku2%20%3C%2015%3A%0A%20%20%20%20print%28%22Nelj%C3%A4s%20on%20tosi%22%29%0A%0A%23%20T%C3%A4ss%C3%A4%20molemmat%20ovat%20ep%C3%A4tosia%20--%3E%20koko%20lauseke%20on%20ep%C3%A4tosi%0Aif%20luku1%20%3C%2015%20and%20luku2%20%3C%205%3A%0A%20%20%20%20print%28%22Viides%20on%20tosi%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Operaattorin **or** avulla voidaan muodostaa lausekkeita, jotka ovat tosia jos yksi tai useampi osalauseke on tosi. Lauseke

A or B

on siis tosi jos joko A tai B tai molemmat ovat tosia. Jos molemmat ovat epätosia, koko lauseke on epätosi.

Esimerkkejä:

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luku1 = 20
    luku2 = 10

    # Molemmat tosia --> lauseke on tosi
    if luku1 == 20 or luku1 > luku2:
        print("Eka on tosi")

    # Toinen tosi --> lauseke on tosi
    if luku1 == 20 or luku2 == 20:
        print("Toinen on tosi")

    # Samoin nyt:
    if luku1 < 15 or luku2 < 15:
        print("Kolmas on tosi")

    # Tässä molemmat ovat epätosia --> koko lauseke on epätosi
    if luku1 < 15 or luku2 < 5:
        print("Neljäs on tosi")
    ```

    Ohjelma tulostaa:
    ``` 
    Eka on tosi
    Toinen on tosi
    Kolmas on tosi
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku1%20%3D%2020%0Aluku2%20%3D%2010%0A%0A%23%20Molemmat%20tosia%20--%3E%20lauseke%20on%20tosi%0Aif%20luku1%20%3D%3D%2020%20or%20luku1%20%3E%20luku2%3A%0A%20%20%20%20print%28%22Eka%20on%20tosi%22%29%0A%0A%23%20Toinen%20tosi%20--%3E%20lauseke%20on%20tosi%0Aif%20luku1%20%3D%3D%2020%20or%20luku2%20%3D%3D%2020%3A%0A%20%20%20%20print%28%22Toinen%20on%20tosi%22%29%0A%0A%23%20Samoin%20nyt%3A%0Aif%20luku1%20%3C%2015%20or%20luku2%20%3C%2015%3A%0A%20%20%20%20print%28%22Kolmas%20on%20tosi%22%29%0A%0A%23%20T%C3%A4ss%C3%A4%20molemmat%20ovat%20ep%C3%A4tosia%20--%3E%20koko%20lauseke%20on%20ep%C3%A4tosi%0Aif%20luku1%20%3C%2015%20or%20luku2%20%3C%205%3A%0A%20%20%20%20print%28%22Nelj%C3%A4s%20on%20tosi%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Lopuksi operaattori not, joka kääntää totuusarvon päinvastaiseksi. Lauseke

not A

on siis tosi, jos A on epätosi, tai epätosi jos A on tosi.

<Tabs>
  <TabItem value="code" label="Koodiesimerkki" default>
    ```python 
    luku1 = 20
    luku2 = 10

    # Alunperin epätosi, nyt sis tosi
    if not luku1 < luku2:
        print("Eka on tosi")

    # Alunperin tosi, nyt siis epätosi
    if not luku1 != luku2:
        print("Toka on epätosi")
    ```

    Ohjelma tulostaa:
    ``` 
    Eka on tosi
    ```
  </TabItem>
  <TabItem value="Visualisaatio" label="Visualisaatio">
    <iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=luku1%20%3D%2020%0Aluku2%20%3D%2010%0A%0A%23%20Alunperin%20ep%C3%A4tosi,%20nyt%20sis%20tosi%0Aif%20not%20luku1%20%3C%20luku2%3A%0A%20%20%20%20print%28%22Eka%20on%20tosi%22%29%0A%0A%23%20Alunperin%20tosi,%20nyt%20siis%20ep%C3%A4tosi%0Aif%20not%20luku1%20!%3D%20luku2%3A%0A%20%20%20%20print%28%22Toka%20on%20ep%C3%A4tosi%22%29&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
  </TabItem>
</Tabs>

Alla olevassa taulukossa on esitetty kaikkien loogisten operaattorien toiminta eri operandeille:

| A | B | A and B | A or B | not A |
| - | - | - | - | - |
| Tosi | Tosi | Tosi | Tosi | Epätosi |
| Tosi | Epätosi | Epätosi | Tosi | Epätosi |
| Epätosi | Tosi | Epätosi | Tosi | Tosi |
| Epätosi | Epätosi | Epätosi | Epätosi | Tosi |