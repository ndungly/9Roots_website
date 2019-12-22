# Handleiding 9Roots website


## Inhoudsopgave
1. Structuur
2. De website publiceren
3. Afbeelingen aanpassen
4. Home page
5. Section toevoegen
6. My tribe
7. Testimonial pagina toevoegen
8. Hoofdmenu aanpassen
9. Contactformulier



## 1. Structuur
Voor het aanpassen van de content zijn alleen de onderstaande bestanden/folders van belang:

- Home page: `index.html` (root folder).
- Overige pagina's: `html` bestanden in de `public` folder.
- Afbeeldingen: `public/assets/img` folder.

- In de `public` map zitten de bestanden, `bundle.css` en `bundle.js`. Hier hoef je in principe niet aan te zitten (meer uitleg hieronder).

- De bestanden `contact_error.html`, `contact_sendmail.php` en `contact_thank_you.html` zijn bedoeld ter afhandeling en feedback op het versturen van het contactformulier op de contact pagina.



#### Overige mappen:
- **public/src/css** hier zitten alle CSS bestanden, opgedeeld in overzichtelijke en herbruikbare componenten. Een pre-processor zorgt ervoor dat alle CSS bestanden worden samengevoegd in één CSS bestand, namelijk `bundle.css` in de `public` folder. Dezelfde pre-processor zorgt er ook voor dat `bundle.css` ge-'minified' wordt (wat ervoor zorgt dat het bestand lichter is) en omgezet wordt naar een CSS taal die alle type browsers (Chrome, Safari, IE, etc) begrijpen.

- **public/src/js** hier zitten alle Javascript bestanden in. Nu alleen gebruikt voor het responsive gedrag van het menu. Ook deze worden gebundeld in `bundle.js` in de `public` folder.

- **Overige bestanden** zijn scripts/configuraties/hulpprogramma's om de website voor de developer goed te laten draaien (en om de bundle bestanden te genereren). Hier hoef je niks mee.



## 2. De website publiceren
Voor het publiceren van de website heb je alleen `index.html` nodig en als wat in de `public` map zit.



## 3. Afbeeldingen aanpassen
- Zet de afbeelding die je wil toevoegen in het mapje `public/assets/img`.
- Het is beter als de bestandsgrootte niet groter is dan 0.5 MB.
- Pas in de betreffende html pagina dan de relatieve URL van het plaatje aan achter `img src`. Je hoeft dan alleen de naam van het plaatje aan te passen en `./assets/img/` laten staan.

Voorbeeld:

```
<img class="s-producten__img" src="./assets/img/TeamGroeiTraject2.jpg" alt="Team groei traject schema" >
```

- De tekst achter `alt` is een beschrijvende tekst van het plaatje. Dit is bedoeld voor slechtzienden die het internet gebruiken. Zij gebruiken een screen reader die in het geval van plaatjes deze `alt` teksten opleest.



## 4. Home page

## 5. Sections
In zowel de home page als de productpagina zitten sections. Dit zijn de blokken met een afbeelding (om en om links/rechts) met een titel en tekst ernaast.

Om een section toe te voegen hoef je alleen maar het stukje html te kopieren die de class `c-section` heeft en vervolgens de afbeelding en tekst aanpassen:

```
<section class="c-section">
  <div class="img-container">
    <img src="./assets/img/DNA_Structuur.png" alt="image desription">
  </div>
  <div class="section-text">
    <h2>Structuur</h2>
    <p>All you need to paint is a few tools, a little instruction, and a vision in your mind. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. The only prerequisite is that it makes you happy. If it makes you happy then it's good.</p>
  </div>
</section>
```

De afbeeldingen verspringen automatisch naar links/rechts.



## 6. My tribe
Om een persoon op de tribe pagina toe te voegen kopieer je het stukje html met de class `c-people__person`. Deze moet nog wel binnen de section `c-people` liggen.

```
<div class="c-people__person">
  <div class="c-people__img-container">
    <img class="c-people__img" src="./assets/img/foto_karlijn.jpg">
  </div>
  <p class="c-people__name">Karlijn Kwint</p>
  <p class="c-people__text">Pretend you're water. Just floating without any effort.</p>
  <a href="./testimonial-karlijn.html" class="c-btn">Lees meer</a>
</div>
```

Vervolgens:
- Pas je de foto en de tekst aan. Let erop dat de oorspronkelijke foto vierkant is met het gezicht in het midden zodat deze ook netjes door de cirkel afgesneden wordt.
- Maak je de bijbehorende `testimonial` pagina aan (zie hieronder).
- Pas je de link aan achter `a href` zodat hij ook naar de juiste `testimonial` pagina linkt.


## 7. Testimonial pagina toevoegen
- Kopieer een bestaande testimonial pagina.
- Pas de naam aan van het bestand aan, bijv. `testimonial-nieuwenaam.html`.
- Pas de portretfoto aan binnen deze pagina.

```
<div class="portrait-container">
  <img class="portrait" src="./assets/img/foto_fer.jpg">
</div>
```

- Pas de teksten aan binnen deze pagina. Knip de teksten op door stukken afzonderlijk in `<p>` tags te zetten.
- Pas de afbeeldingen aan.

```
<div class="img-container img-container--right">
    <img class="img" src="https://source.unsplash.com/random/600x600">
</div>
```

- Voeg de persoon toe op de `My tribe` pagina (zie hierboven).

