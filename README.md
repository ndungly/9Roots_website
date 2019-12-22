# Handleiding 9Roots website


## Inhoudsopgave
1. Structuur
2. De website publiceren
3. Afbeelingen aanpassen
4. Section toevoegen
5. My tribe
6. Testimonial pagina toevoegen
7. Hoofdmenu aanpassen
8. Contactformulier



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
Voor het publiceren van de website heb je alleen `index.html` nodig en alles wat in de `public` map zit.



## 3. Afbeeldingen aanpassen
- Zet de afbeelding die je wil toevoegen in het mapje `public/assets/img`.
- Het is beter als de bestandsgrootte niet groter is dan 0.5 MB.
- Pas in de betreffende html pagina dan de relatieve URL van het plaatje aan achter `img src`. Je hoeft dan alleen de naam van het plaatje aan te passen. `./assets/img/` kun je in dit geval laten staan.

Voorbeeld:

```
<img class="s-producten__img" src="./assets/img/TeamGroeiTraject2.jpg" alt="Team groei traject schema" >
```

- De tekst achter `alt` is een beschrijvende tekst van het plaatje. Dit is bedoeld voor slechtzienden die het internet gebruiken. Zij gebruiken een screen reader die in het geval van plaatjes deze `alt` teksten opleest.

- Vaak staan de afbeeldingen in een 'container' (zie hieronder). Dit is zodat we ze altijd dezelfde breedte/hoogte verhouding kunnen meegeven en de layout niet stuk kan gaan doordat er bijvoorbeeld een staand i.p.v. een liggend plaatje wordt toegevoegd. Op dit moment hebben de containers nog geen vaste afmetingen mee gekregen, maar dit zou in de toekomst nog kunnen indien wenselijk.

```
<div class="img-container">
  <img src="https://source.unsplash.com/random/500x350" alt="image desription">
</div>
```

Mochten de plaatjes altijd een vaste hoogte/breedte verhouding krijgen dan betekent dit wel dat alles wat niet binnen deze container past wordt afgesneden. Probeer in dit geval de plaatjes eerst in photoshop in de juiste verhouding te zetten voordat je ze op de website gebruikt.



## 4. Sections
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



## 5. My tribe
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



## 6. Testimonial pagina toevoegen
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



## 7. Hoofdmenu aanpassen
Het hoofdmenu bestaat uit alles wat binnen de `<header class="c-header"> </header>` tags staat, zoals hieronder.

```
<header class="c-header">
  <div class="c-header__top">
    <a href="../">
      <img class="c-header__logo" src="./assets/img/9Roots_logo_plat.png">
    </a>
    <div class="c-header__icon js-nav-trigger"></div>
  </div>
  <nav class="c-header__nav">
    <ul class="c-nav__list">
      <li><a class="a-menu" href="../">Home</a></li>
      <li><a class="a-menu" href="./about.html">Over mij</a></li>
      <li><a class="a-menu" href="./producten.html">Producten</a></li>
      <li><a class="a-menu" href="./tribe.html">Mijn Tribe</a></li>
      <!-- <li><a class="a-menu" href="./blog.html">Blog</a></li> -->
      <li class="active"><a class="a-menu" href="./contact.html">Contact</a></li>
    </ul>
  </nav>
</header>
```

- Het hoofdmenu is nu zo gestyled dat er ruimte is voor 6 items. Er staan nu 5 items in en 1 extra die uitgecommentarieerd is (nu genaamd blog). Om dit item ook te gebruiken haal je de `<!-- ... -->` tekens weg.

- Als je iets aanpast aan het menu dan moet dit op alle html pagina's gebeuren.

- `class="active"` geeft menu styling mee voor de pagina waar je op dat moment bent. Dit is de blauwe cirkel die achter de tekst verschijnt voor dat menu item.



## 8. Contactformulier
De contactpagina bevat nu een contactformulier die nog niet getest is. Deze kan getest worden zodra de bestanden op de hostingserver staan.

Bestanden die bij het formulier horen:
- `contact_sendmail.php` Dit is het script die gerund wordt als de mail verstuurd wordt. Dit is een template van internet en hier ben ik nog niet zo bekend mee dus het is denk ik handig als je hier even naar kijkt met iemand die hier verstand van heeft.
- `contact_error.html` Dit is een error pagina die verschijnt als niet alle velden ingevuld zijn, of als velden foutief ingevuld zijn.
- `contact_thank_you.html` Dit is een pagina die wordt weergegeven als het versturen gelukt is.

#### Het contactformulier verbergen
Mocht het niet lukken dit werkend te krijgen, dan kun je het formulier altijd verbergen door het uit te commentarieren. Dan zet je `<!--` en `-->` voor en na het onderstaande stukje code in het bestand `contact.html`.

```
<section class="contact-form">
  <h1>Neem contact met me op</h1>
    <form method="post" action="send_mail.php">
    <div class="form-field">
      <label for="name">Naam</label>
      <input type="text" name="name" id="name" required>
    </div>
    <div class="form-field">
      <label for="email">E-mail</label>
      <input type="email" id="email" name="email_address" required>
    </div>
    <div class="form-field">
      <label for="message">Bericht</label>
      <textarea name="message" id="message" maxlength="1000" required></textarea>
    </div>
    <button class="c-btn">Verstuur</button>
    </form>
</section>
```

De overige bestanden kun je gewoon laten staan want die kunnen toch niet aangeroepen worden zonder dit formulier.