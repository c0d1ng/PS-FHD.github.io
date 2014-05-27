// Die Scrolldauer fuer alle Szenen insgesamt.
var totalScrollDuration = 7000;

// Der globale Scroll Magic Controller.
var controller;

// Die breite einer Szene (fuer jede Szene gleich).
var sceneWidth;

/* ** Variablen die Ergebnisse zur Browser Feature Detection speichern. ** */
/* Gibt das jQuery-Element an, fuer das die Scrollposition der Seite gesetzt 
   werden kann. Dabei handelt es sich normalerweise um das BODY-Element, manche 
   Browser nutzen dafuer aber das HTML-Element (Safari z.B.).
   Moegliche Werte sind das HTML-Element, BODY-Element oder undefined.*/
var fd_pageScrollElement;

/***********************************************************************************
 *    Grundsaetzliches einrichten der Javascript funktionalitaet der Website.
 *    
 *    Hinweis: ready ist ein jQuery Ereignis das aufgerufen wird, sobald der Browser
 *             das erstellen des DOM-Baums beendet hat.
 **********************************************************************************/
$(document).ready(function($) {
	setupScrollMagic();
	
	/* Achtung: Muss nach setupScrollMagic aufgerufen werden, da diese Funktion fuer 
	   einige tests einen scrollbaren Bereich benoetigt.*/
	browserFeatureDetection();
	
	// Event-Handler "window_resize" an das "resize" Ereignis von Window binden. 
	$(window).resize(window_resize);
	// Den Event-Handler einmal manuell Aufrufen.
	window_resize();
	
	/***********************************************************************************
	 *    Grundsaetzliches einrichten von Scroll Magic.
	 *    Erstellen des controllers und einrichten der Szene fuer den dauerpin.
	 **********************************************************************************/    
	function setupScrollMagic() {
		// Erstellen des Scroll Magic Controllers und horizontales Scrollen konfigurieren.
		controller = new ScrollMagic({vertical: false, loglevel: 3});
		
		/* Eine Scroll Magic Szene die nur dazu dient, #intro1 ueber die gesamte Dauer des scrollings zu Pinnen.
		   Hinweis: Durch einen Pin wird die Szene quasi auf dem Bildschirm fixiert. Da die erste Szene alle weiteren
		   Szenen enthaelt, kann diese einfach dauerhaft Gepinnt werden. Neue Szenen schieben sich dann nach und nach
		   ueber die Erste. Achtung: Als Ersatz kann hier nicht der scrollContainer verwendet werden, da dieser 
		   absolut positioniert sein muss. */
		new ScrollScene({duration: totalScrollDuration, loglevel: 3})
			.setPin("#intro1")
			.addTo(controller);
		
		// Allgemeine Breite einer Szene feststellen, wobei jede Szene nach CSS immer so Breit wie der Scrollcontainer ist. 
		sceneWidth = parseInt($("#scrollContainer").css("width"), 10);
		
		// Header und Footer ueber die gesamte Scrolllaenge strecken.
		$("#scrollContainer > header, #scrollContainer > footer").css("width", totalScrollDuration + sceneWidth + "px");
	}
	
	/***********************************************************************************
	 *    Stellt fest, ob der Browser alle benoetigten Funktionen unterstuezt und falls nicht, wendet
	 *    entsprechende Workarounds an um diese Probleme zu umgehen.  
	 **********************************************************************************/
	function browserFeatureDetection() {
		// Pruefen ob die Scrollposition der Seite ueber das HTML-Element oder BODY-Element gesetzt werden kann.
		var htmlElement = $("html");
		var bodyElement = $("body");
		
		htmlElement.scrollLeft(1);
		bodyElement.scrollLeft(1);
		
		if (htmlElement.scrollLeft() == 1)
			fd_pageScrollElement = htmlElement;
		else if (bodyElement.scrollLeft() == 1)
			fd_pageScrollElement = bodyElement;
		
		htmlElement.scrollLeft(0);
		bodyElement.scrollLeft(0);
	}

	/****************************************************************************************************
	 *    Event-Handler fuer das window.resize Ereignis.
	 *    Passt Elemente in ihrer groesse neu an die mittels CSS nur unzureichend Konfiguriert werden
	 *    koennen.
	 ***************************************************************************************************/
	function window_resize() {
		var bodyElement = $("body");
		/* Beim Aendern der groesse muss leider wieder an den Anfang gescrollt werden, sonst ergeben sich manchmal eigenartige 
		   fehler bei der Berechnung der Hoehe.
		   Zudem ist es schwierig die Szenenbereite richtig anzupassen waehrend sie gerade "abespielt" wird. */
		fd_pageScrollElement.scrollLeft(0);
		
		// Berechnete Hoehe des Scrollcontainers ermitteln.
		var scrollContainerHeight = parseInt($("#scrollContainer").css("height"), 10);
		
		// Die Schrift soll relativ zur hoehe des scrollContainers ausgerichtet werden.
		var newFontSize = scrollContainerHeight * 0.03;
		bodyElement.css("font-size", newFontSize + "px");
	}
});