# Kurssimateriaalien sivupohja

Sivupohja on rakennettu [Docusauruksella](https://docusaurus.io/). Tässä pohjassa on valmiiksi määriteltynä suurin osa tärkeistä asetuksista, ja tämän pohjan avulla voi luoda uuden sivuston kurssin tekstimateriaalia varten. Sivusto luo automaattisesti navigoinnin ja sisällysuettelot materiaalille. Esimerkkitoteutus tämän pohjan kanssa luotuna on nähtävissä esim. täällä: [Advanced course in OOP materiaali](https://open-programming.utugit.fi/advanced-object-oriented-programming)

Tarvitset siis pohjan lisäksi halutun kurssimateriaalin .md tiedostoina. Markdown formaattiin löytyy ohjeita esim [täältä](https://www.markdownguide.org/) tai docusauruksen pienestä markdown ohjeesta ominaisuuksineen [täältä](https://docusaurus.io/docs/markdown-features).

## Huom!
Sivu julkaistaan automaattisesti Gitlabin pages ominaisuudella. Sivun osoite on tämän takia muotoa: 

`https://<nimiavaruus>.utugit.fi/<repositorion nimi>` 

esimerkiksi Advanced course in OOP materiaalin osoite on: 

`https://open-programming.utugit.fi/advanced-object-oriented-programming`

Osoitteen määrittäminen on selitetty alempana kohdassa "Gitlabin pages konfiguraatio".

## Paikallinen kehitys

Tarvitset paikalliseen kehitykseen: 
- Node.js vähintään versio 18.0

Kloonaa tai forkkaa tämä template repositorio.

Asenna riippuvuudet komennolla:

```
$ npm install
```

Kehitysympäristön käynnistys tapahtuu komennolla:

```
$ npm run start
```

Komento käynnistää koneelle paikallisen kehityspalvelimen ja avaa sivun kehitysversion selaimeen. Suurin osa koodiin tehdyistä muutoksista näkyy heti sivulla ilman serverin uudelleenkäynnistystä.

Materiaalia voi myös muokata selaimessa Gitlabin omalla editorilla ilman ympäristön asentamista. Tällöin koodia ei voi testata niin helposti ja virheiden käsittely on vaikeampaa.

## Miten pääsen alkuuun

Vaihdettavat konfiguraatiot on merkitty kommenteilla ja löytyvät tiedostoista:

- docusaurus.config.js
- package.json

### Etusivun muokkaaminen

### Materiaalin kansiorakenne

Materiaali

Kuvat

### Kieliversiot

Pohjaan on rakennettu tuki englannin ja suomenkieliselle sisällölle.
Jos et tarvitse, niin poista 

Lisää

Aja TODO jotta kieliversiot päivittyvät ja päivitä vastaaviin kohtiin 


Docusauruksen oma tutoriaali löytyy täältä 

## Julkaisu

Sivusto julkaistaan automaattisesti Gitlabin pages sivustolle. Tämän ominaisuuden konfiguraatio on tiedostossa .gitlab-ci.yml. Siihen ei tarvitse tehdä muutoksia.

### Gitlabin pages konfiguraatio


