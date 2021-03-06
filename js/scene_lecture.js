/***********************************************************************************
 *    Definition Vorlesung.
 *    
 *    Hinweis: ready ist ein jQuery Ereignis das aufgerufen wird, sobald der Browser
 *             das erstellen des DOM-Baums beendet hat.
 *    Dokumentation zu TweenMax und allen unterstützen Optionen: http://www.greensock.com/tweenmax/
 **********************************************************************************/
$(document).ready(function($) {
	// Der Himmel hinter dem Vorlesungsraum (im Fenster).
	var backgroundSky = TweenMax.to("#lecture > .sky", 1, {left: "364px", ease: Linear.easeNone});
	
	// Die Zeitleiste der Animationen im Fenster des Vorlesungsraums.
	var windowTimeline = new TimelineMax()
		// Der Baum verliert seine roten Blaetter.
		.append(TweenMax.fromTo("#lecture > .tree.leaves.red", 0.2, {autoAlpha: 1}, {autoAlpha: 0, ease: Linear.easeNone}))
		// ... 10% danach verliert er die Orangenen.
		.append(TweenMax.fromTo("#lecture > .tree.leaves.orange", 0.2, {autoAlpha: 1}, {autoAlpha: 0, ease: Linear.easeNone}), 0.1)
		// ... und dann beginnt es im Fenster zu schneien.
		.append(TweenMax.fromTo("#lecture > .snow", 0.6, {top: "-442px"}, {top: "100px", ease: Linear.easeNone}));		
	
	// Der Professor
	var prof = TweenMax.fromTo("#lecture > .prof", 1, {left: "90%"}, {left: "29%"});
	
	// Reihen und Personen
	var row1 = TweenMax.to("#lecture > .row.first", 1, {left: "-=1%", ease: Linear.easeNone});
	var row2 = TweenMax.to("#lecture > .row.second", 1, {left: "-=5.5%", ease: Linear.easeNone});
	var row3 = TweenMax.to("#lecture > .row.third", 1, {left: "-=9%", ease: Linear.easeNone});
	
	// Vordergrund-Sitzreihe
	var foreground = TweenMax.to("#lecture > .foreground", 1, {left: "-3.3%", ease: Linear.easeNone});

	// Die Zeitleiste fuer die Studenten die nach und nach verschwinden.
	var personLeaveTimeline = new TimelineMax()
		// Ein Student verschwindet alle 10% der Szene.
	  .append(TweenMax.to("#lecture > .row.first.student.two", 0.1, {autoAlpha: 0}), 0.1)
	  .append(TweenMax.to("#lecture > .row.first.student.four", 0.1, {autoAlpha: 0}), 0.1)
	  .append(TweenMax.to("#lecture > .row.second.student.two", 0.1, {autoAlpha: 0}), 0.1)
	  .append(TweenMax.to("#lecture > .row.third.student.one", 0.1, {autoAlpha: 0}), 0.1);
	
	// Gedankenblasen
	var think1 = TweenMax.fromTo("#lecture > .think.first", 1, {top: "56%", left: "32%", autoAlpha: 0}, {left: "28.5%", autoAlpha: 1});
	var think2 = TweenMax.fromTo("#lecture > .think.second", 1, {top: "52%", left: "88%", autoAlpha: 0}, {left: "79%", autoAlpha: 1});
	var think3 = TweenMax.fromTo("#lecture > .think.third", 1, {top: "50%", left: "20%", autoAlpha: 0}, {left: "11%", autoAlpha: 1});

	// Die Zeitleiste fuer den Folienwechsel.
	var slideTimeline = new TimelineMax()
		// Anfangsfolie nach 10% der Szene ueber eine Laenge von 10% ausblenden. 
		.append(TweenMax.fromTo("#lecture > .boardslide > .ppt.first", 0.1, {autoAlpha: 1}, {autoAlpha: 0}), 0.1)
		// ... dann zweite Folie ueber 20% einblenden.
		.append(TweenMax.fromTo("#lecture > .boardslide > .ppt.second", 0.2, {autoAlpha: 0}, {autoAlpha: 1}))
		// ... dann dritte Folie nach 10% ueber 20% einblenden.
		.append(TweenMax.fromTo("#lecture > .boardslide > .ppt.third", 0.2, {autoAlpha: 0}, {autoAlpha: 1}), 0.1);
	
	// Textbloecke vorselektieren
	var firstTextblock  = $("#lecture > .textblock:nth-of-type(1)");
	var secondTextblock = $("#lecture > .textblock:nth-of-type(2)");
	var thirdTextblock  = $("#lecture > .textblock:nth-of-type(3)");
	
	// Die Zeitleiste fuer die einzelnen Textblock-Animationen.
	var textTimeline = new TimelineMax()
		// Ab start der Zeitleiste den ersten Textblock ueber eine Dauer von 10% einblenden. 
		.append(TweenMax.from(firstTextblock, 0.10, {left: "-40%", ease: Linear.easeNone}))
		// .. danach 15% lang warten, dann den ersten Textblock ueber eine Dauer von 5% ausblenden.
		.append(TweenMax.to(firstTextblock, 0.05, {delay: 0.15, autoAlpha: 0}))
		// .. danach zweiten Textblock ueber eine Dauer von 10% einblenden etc.
		.append(TweenMax.from(secondTextblock, 0.10, {left: "-40%", ease: Linear.easeNone}))
		.append(TweenMax.to(secondTextblock, 0.05, {delay: 0.15, autoAlpha: 0}))
		.append(TweenMax.from(thirdTextblock, 0.10, {left: "-40%", ease: Linear.easeNone}));

	// Die Zeitleiste der Szene
	var sceneTimeline = new TimelineMax()
		.add([
			backgroundSky,
			prof,
			row1, row2, row3,
			foreground,
			think1, think2, think3,
			slideTimeline,
			personLeaveTimeline,
			windowTimeline,
			textTimeline
		])
		// Eigene Erweiterungsmethode um einen Szenenwechsel einzufuegen.
		.addSceneChange($("#lecture > .sceneChange"), $("#selfstudy1"));
	
	// Die Scroll Magic Szene definieren und hinzufuegen.
	addScene("lecture", new ScrollScene({duration: 7500})
		.setTween(sceneTimeline)
		.addTo(controller)
		.on("enter", scene_enter)
		.on("progress", scene_progress));
			
	/***********************************************************************************
	 *    Event-Handler der beim Eintritt in die Szene aufgerufen wird.
	 *    
	 *    @param event Objekt vom Typ "enter"
	 **********************************************************************************/
	function scene_enter(event) {
		// in scene_intro2.js wird globalCounterFirstTime in scene_progress beim Uhrstellen auf false gesetzt.
		// hier wieder auf true setzen, um urspruenglichen Wert zu erhalten.
		globalCounterFirstTime = true;	
	}
		
	/***********************************************************************************
	 *    Event-Handler der bei Fortschrittsaenderung ("progress") der Szene aufgerufen wird.
	 *    
	 *    @param event Objekt vom Typ "progress"
	 **********************************************************************************/
	function scene_progress(event) {
		/* ScrollPosition auslesen
		target liefert das DOM-Element, das das Event ausgeloest hat, also ScrollScene.
		Parent der ScrollScene ist ScrollMagic (get the parent controller).
		info("scrollPos") liefert die aktuelle ScrollPosition als Ganzzahl. */
		var scrollPosition = event.target.parent().info("scrollPos");
		
		/* ScrollRichtung auslesen
		Objekt vom Typ progress liefert mit .scrollDirection die Scrollrichtung FORWARD REVERSE oder PAUSED. */
		var scrollDirection = event.scrollDirection;
		
		// manuelles setzen der ScrollPosition auf PAUSED, falls sich ScrollPosition nicht, um mehr als +-1px geaendert hat
		if(scrollPosition == (globalTempScrollPosition+1) || scrollPosition == (globalTempScrollPosition-1))
			scrollDirection = "PAUSED";
		
		// globale Variablen siehe global.js
		// globale temporaere Scrollposition setzen, um beim naechsten Aufruf dieser Funktion pruefen zu koennen, ob sich der Wert um mehr als 1px geaendert hat
		globalTempScrollPosition = scrollPosition;

		/* 	UhrTyp (sekundenGeschwindigkeit, schnellVorwaerts, schnellRueckwaerts)
			mit Canvas entsprechend der Scrollposition und der Scrollrichtung ein bzw ausblenden */	
		
		// Zunaechst UhrTyp schnellVorwaerts, schnellRueckwaerts in Abhaengigkeit der Scrollrichtung ein- ausblenden
		if (scrollDirection == "REVERSE") { //ScrollRichtung rechts links: schnellRueckwaerts sichtbar
			$("#lecture > .clock > .canvasClockFastReverse").css({visibility: "visible"});
			$("#lecture > .clock > .canvasClockFast").css({visibility: "hidden"});
		} else if (scrollDirection == "FORWARD") {	//ScrollRichtung links rechts: schnellVorwaerts sichtbar
			$("#lecture > .clock > .canvasClockFast").css({visibility: "visible"});
			$("#lecture > .clock > .canvasClockFastReverse").css({visibility: "hidden"});
		}
		
		// Zu Beginn der Szene bis ScrollPosition 9500 UhrTyp "sekundenGeschwindigkeik" einblenden, andere ausblenden
		if ( scrollPosition < 9500 ) {
			$("#lecture > .clock > .canvasClockFast").css({visibility: "hidden"});
			$("#lecture > .clock > .canvasClockFastReverse").css({visibility: "hidden"});
			$("#lecture > .clock > .canvasClock").css({visibility: "visible"});
		}
		
		// Falls ScrollPosition PAUSED UhrTyp "sekundenGeschwindigkeik" einblenden, andere ausblenden
		if (scrollDirection == "PAUSED") {
			$("#lecture > .clock > .canvasClockFast").css({visibility: "hidden"});
			$("#lecture > .clock > .canvasClockFastReverse").css({visibility: "hidden"});
			$("#lecture > .clock > .canvasClock").css({visibility: "visible"});
		}	
		
		/* UhrTyp ENDE */
	}
});