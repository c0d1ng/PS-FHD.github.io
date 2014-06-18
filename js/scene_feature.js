/***********************************************************************************
 *    Definition Mensa.
 *    
 *    Hinweis: ready ist ein jQuery Ereignis das aufgerufen wird, sobald der Browser
 *             das erstellen des DOM-Baums beendet hat.
 *    Dokumentation zu TweenMax und allen unterst�tzen Optionen: http://www.greensock.com/tweenmax/
 **********************************************************************************/
$(document).ready(function($) {
	// Browserfixes anwenden.
	/* Container stets so gross wie das innere Image ausrichten, ausserdem 2 Pixel kleiner, sonst kann es vorkommen, dass das Hintergrundbild
	   an den Seiten beim Runden der Prozentwerte durchscheint. */
	bf_SizeContainerToInnerImg($("#feature > .window-frame > .middleground"), -2);
	
	var boy1	= TweenMax.to("#feature > .boy.first", 0.5, {left:"25%", autoAlpha: 0, ease: Linear.easeNone, delay:0.5 });
	var boy2	= TweenMax.to("#feature > .boy.second", 0.5, {left:"25%", ease: Linear.easeNone, delay:0.5});
	
//	var logos1In	= TweenMax.fromTo(".window-frame > .logo.column6,.window-frame >  .logo.column9" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.1,ease: Linear.easeNone});
//	var logos2In	= TweenMax.fromTo(".window-frame > .logo.column5, .window-frame >  .logo.column8" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.2,ease: Linear.easeNone});
//	var logos3In	= TweenMax.fromTo(".window-frame > .logo.column4, .window-frame > .logo.column7" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.3,ease: Linear.easeNone});
//	var logos4In	= TweenMax.fromTo(".window-frame > .logo.column3, .window-frame > .logo.column1" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.4,ease: Linear.easeNone});
	var logos1In	= TweenMax.fromTo(".window-frame > .logo.column2" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.1,ease: Linear.easeNone});
	var logos2In	= TweenMax.fromTo(".window-frame > .logo.column7" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.2,ease: Linear.easeNone});
	var logos3In	= TweenMax.fromTo(".window-frame > .logo.column8" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.3,ease: Linear.easeNone});
	var logos4In	= TweenMax.fromTo(".window-frame > .logo.column9" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.4,ease: Linear.easeNone});
	var logos5In	= TweenMax.fromTo(".window-frame > .logo.column6" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.5,ease: Linear.easeNone});
	var logos6In	= TweenMax.fromTo(".window-frame > .logo.column3" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.6,ease: Linear.easeNone});
	var logos7In	= TweenMax.fromTo(".window-frame > .logo.column5" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.7,ease: Linear.easeNone});
	var logos8In	= TweenMax.fromTo(".window-frame > .logo.column1" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.8,ease: Linear.easeNone});
	var logos9In	= TweenMax.fromTo(".window-frame > .logo.column4" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.9,ease: Linear.easeNone});
	
	
//	var logos1In	= TweenMax.fromTo("#feature > .logo.column6, #feature > .logo.column9" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.1,ease: Linear.easeNone});
//	var logos2In	= TweenMax.fromTo("#feature > .logo.column5, #feature > .logo.column8" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.2,ease: Linear.easeNone});
//	var logos3In	= TweenMax.fromTo("#feature > .logo.column4, #feature > .logo.column7" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.3,ease: Linear.easeNone});
//	var logos4In	= TweenMax.fromTo("#feature > .logo.column3, #feature > .logo.column1" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.4,ease: Linear.easeNone});
//	var logos5In	= TweenMax.fromTo("#feature > .logo.column2" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.5,ease: Linear.easeNone});
//	
	
//	var logos1In	= TweenMax.fromTo("#feature > .logo.seventh, #feature > .logo.eighth" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.1,ease: Linear.easeNone});
//	var logos2In	= TweenMax.fromTo("#feature > .logo.third, #feature > .logo.sixth" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.2,ease: Linear.easeNone});
//	var logos3In	= TweenMax.fromTo("#feature > .logo.ninth, #feature > .logo.fifth" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.3,ease: Linear.easeNone});
//	var logos4In	= TweenMax.fromTo("#feature > .logo.fourth, #feature > .logo.first" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.4,ease: Linear.easeNone});
//	var logos5In	= TweenMax.fromTo("#feature > .logo.second" , 0.05,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.5,ease: Linear.easeNone});

	var headIn 	= TweenMax.fromTo("#feature > .textblock", 0.1, {top: "5%", left:"160%"}, { left:"42%", delay: 1.0, ease: Linear.easeNone});

	var logoFadeOut = TweenMax.to("#feature > .logo" , 0.05, {autoAlpha:0, delay: 0.75,ease: Linear.easeNone});
	var logoBlock	= TweenMax.fromTo("#feature > .blackbox" , 0.1,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.75,ease: Linear.easeNone});

	var logos10In	= TweenMax.fromTo("#feature > .logo2" , 0.1,  {autoAlpha: 0} , {autoAlpha:1, delay: 0.75,ease: Linear.easeNone});
	
	// Die Zeitleiste der Szene
	var sceneTimeline = new TimelineMax()
		.add([

		      boy1, boy2,
		       logos1In, logos2In, logos3In, logos4In, logos5In, logos6In, logos7In, logos8In, logos9In,  
		       logoBlock,
		       logoFadeOut,
		       logos10In,
		      headIn
		    ])
		//Eigene Erweiterungsmethode um einen Szenenwechsel einzufuegen.
		.addSceneChange($("#feature > .sceneChange"), $("#outro"));
	
	// Die Scroll Magic Szene definieren und hinzufuegen. Sie wird in einem Scrollbereich von 15000px bis 17500px abgespielt.
	addScene("feature", new ScrollScene({duration: 5000})
		.setTween(sceneTimeline)
		.addTo(controller));
});