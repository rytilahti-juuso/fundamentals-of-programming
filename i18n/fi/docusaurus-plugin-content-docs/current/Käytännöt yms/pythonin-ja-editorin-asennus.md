---
sidebar_position: 2
---

# Pythonin ja editorin asennus
Alempana on annettu ohjeet Pythonin ja kehitysympäristön asentamiseen omalle koneelle.
Ohjeissa on annettu kaksi vaihtoehtoa:
Vaihtoehto 1 (Thonny) on tarkoitettu opiskelijoille, joilla ei ole kiinnostusta jatkaa ohjelmointia peruskurssia pidemmälle. Ympäristössä on erityisesti panostettu helppokäyttöisyyteen.
Vaihtoehto 2 (Visual Studio Code) on tarkoitettu opiskelijoille, jotka aikovat todennäköisemmin jatkaa ohjelmointia myös muilla kursseilla (ja ehkä vielä kurssien ulkopuolellakin). Ympäristössä on panostettu monipuolisuuteen, joustavuuteen ja toiminnallisuuteen eri ohjelmointikielten kanssa.
Molemmatkin voi toki halutessaan asentaa.
## Vaihtoehto 1 : Thonny
Thonny on erityisesti aloittelijoille suunnattu integroitu Python-ohjelmointiympäristö. Asennuspaketti asentaa sekä Python-tulkin että varsinaisen ohjelmointiympäristön, joten yksi asennus riittää. Thonnysta löytyy helpon editorin lisäksi mm. sisäänrakennettu debuggeri ja suoritettavan koodin visualisointi.
Voit ladata ympäristön täältä;
https://thonny.org/
## Vaihtoehto 2: Visual Studio Code
Visual Studio Code (ei siis sama kuin Visual Studio) on monipuolinen editori, jonka avulla voi koodata lähes kaikilla moderneilla ohjelmointikielillä. Ympäristö on kohtuullisen kevyt, mutta monipuolinen - erityisesti sen lukuisten laajennusten takia.

1. VSC:n lataaaminen ja asentaminen
Aloita Visual Studio Coden asennus lataamalla asennuspaketti osoitteesta
https://code.visualstudio.com/download
Asenna ladattu paketti koneellesi.
Macissa ladatusta zip-paketista löytyvän sovelluksen voi siirtää Applications-kansioon.

2. Pythonin asentaminen
Lataa viimeisin Python-versio osoitteesta
https://www.python.org/downloads/
Kun asennat Pythonin koneellesi, muista rastittaa asennusikkunasta kohta
"Add Python 3.x to PATH"
Tämä koskee vain Windows-koneita.

3. Python-laajennuksen asentaminen
Visual Studio Codeen kannattaa asentaa Python-laajennus, joka tuo käyttöösi esim. debuggerin. Laajennuksen asennus onnistuu avaamalla Visual Studio Code, ja valitsemalla vasemmasta laidasta ikoni "Extensions".
Kirjoita hakukenttään Python ja valitse lisäosa Python (IntelliSense jne.). Paina Install-painiketta.