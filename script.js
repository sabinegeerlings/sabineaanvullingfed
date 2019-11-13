//Code randomizer verhalen 
//Voeg toe aan de lijst als er op de knop geklikt word bron: https://codepen.io/derekthatcher/pen/bdRBPx
var list = ["Alzheimer","Blind","Vergezocht","Kinderboek"];

$( "#clickme" ).click(function() {
  //$("#displayme").html(list[Math.floor(Math.random()*list.length)]);
  $('#mySearch').val(list[Math.floor(Math.random()*list.length)]);
});


//Code zoekfunctie checkboxes samen met Arnold Oosterom
/*
 ** Klik functie van zoekopties
*/

// document ready voert alle code pas uit als de html en css compleet is geladen.

$( document ).ready(function() {


/* 

    Een "const" variable kan gebruikt worden in ES6 en hoger. 
    Het is hetzelfde als "var", maar wat je aan "const" 'assigned' kan je niet veranderen, omdat het CONSTant is.
    Dit heeft een groot pluspunt, en dat is de laadtijd veel sneller is!

    Het nadeel is dat "const" en de andere variable "let" niet gelezen worden door hele oude browsers en apparaten.
    Om deze twee "variable" toch werkend te krijgen moet je een "compiler" hebben die het omzet naar "var", 
    wat alle browsers en apparaten wel kunnen lezen.

    Een "compiler", zoals "babel" zet nieuwe code om in oudere code, zodat browsers en apparaten het kunnen lezen.

*/

    const accordion = document.getElementById("accordion");
    const panels = document.getElementsByClassName("panel");

/*

    Als je in de site klikt op een element met het id "accordion", word deze klik functie uitgevoerd.

    Als erop geklikt wordt, word er eerst gekeken of de 
    "inline style"* van het element met het id "panel" gelijk is aan "display: block", dus of het element zichtbaar is.
    Als dat zo is laat het dan verdwijnen door de "inline style" te veranderen naar "display: none", dus ontzichtbaar.

    Als het element geen "display: block" heeft, dus als het ontzichtbaar is geef het dan "display: block" om het te laten zien.

    *styling dat gedevineerd is in het HTML bestand en niet in een css bestand of tussen "style tags" in de 'head'

*/

    accordion.addEventListener("click", function(e) {

    	e.preventDefault();

    	console.log(panels[0]);

        if ( panels[0].style.display === "flex" ) {
            panels[0].style.display = "none";
            panels[1].style.display = "none";
        } else {
            panels[0].style.display = "flex";
            panels[1].style.display = "flex";
        }

    });


/*
 ** Zoekopties met "checkboxes"
*/

/*

    De klik functie kijkt een checkbox doormiddel van: $(".checklist :checkbox").
    Het eerste target: .checklist is de "unordered list" in de HTML en de :checkbox zijn alle "inputs" met de type "checkbox".

    Als erop de een van de "checkboxes" word gedrukt verdwijnen alle articles door de: .hide() functie.


        --SIDENOTE-- 
            Ik had ook, net als in de accordion functie "naamElement.style.display = 'none';" kunnen zeggen, maar omdat dit stuk geschreven is in JQuery
            dacht ik dat het beter was om het geheel in JQuery te schrijven, zodat er minder verwarring ontstaat.
        --/SIDENOTE-- 

        --SIDENOTE-- 
            Je ziet dat ik hier geen 'const' variable schrijf voor de functie. 
            Het is mogelijk om hier variable voor te schrijven en dan aan te roepen. Dit kan ook in normaal javascript:
            document.getElementById("accordion").addEventListener("click", function () { --code-- });.
            Zo kan je je "event listener" ook schrijven, maar het is best lang en des te meer van deze "event listener" 
            je hebt hoe onoverzichtelijker het wordt, daarom zetten wij ze in een variable.

            Jquery daar in tegen maakt het ons heel gemmakkelijk om elementen aan te roepen nu hoeven wij geen: document.getElementById("accordion").
            Maar alleen een "$" te schrijven met de naam en of het een class is: ".", een ID: "#".
            Als je een element wilt dat geen ID of class heeft, kan je ook dit weg laten.
            Bijvoorbeeld als je de header wilt hebben schrijf je: $("header") en het blijft werken.
        --/SIDENOTE-- 


    Nadat alles ontzichtbaar is gemaakt, wordt er een tweede functie uitgevoerd.
    Deze functie kijkt integenstelling tot de eerste naar alle "checkboxes" die "checked" (aangevinkt) door deze code:

    Hierdoor kijkt de functie naar alle "checkboxes" die aangevinkt zijn: $(".checklist :checkbox:checked").
    Door: .each() voor de functie te zetten zeg je tegen de functie "ik wil niet 1 maar alle 'checkboxes' die 'checked'".

    Ik heb nu alle articles ontzichtbaar gemaakt, maar hoe maak ik de articles weer zichtbaar die bij de checkbox horen?
    In mijn HTML heb ik elke "checkbox" een "value" gegeven: 
        -   avontuurlijk
        -   griezilig
        -   kinderlijk
        -   spontaan
    ik heb de "articles" een "class" gegeven met dezelfde naam.

        --voorbeeld--
        <input id="avontuurlijk" class="input" type="checkbox" name="name" value="avontuurlijk">
        <article class="avontuurlijk"> --content-- </article>
        --/voorbeeld--

    In de functie heb ik de "value" van de checkbox gepakt als je erop 1 klik.
    Deze "value" heb ik nodig, omdat de value hetzelfde is als de "articles" die ik wil laten zien.

    $("." + $(this).val()).show();

    Om een element te pakken in JQuery hoef je niet perse alleen een "string" te schrijven. Er kan ook logica in.

        --voorbeeld--
        console.log($(".test-"+3));

        Als je dit wilt uitvoeren in je "console" krijg je een element van "null" (niet bestaand), want wij hebben geen class met de naam "test-3".
        Maar het is wel "valide" jQuery!
        --/voorbeeld--

    Dit is wat ik heb gedaan: Als je op een checkbox klikt wordt de "value" (bijvoorbeeld: avontuurlijk) 
    in de this.val() geplaats en als die lijn code word uitgevoerd krijg je:  $(".avontuurlijk).show();.
    Nu kijkt deze lijn code naar alle elementen in de HTML met de class "avontuurlijk" en laat die weer verschijnen met de ".show()".

    En omdat deze functie kijkt naar alle "checkboxes" die "checked" worden des te meer je aanvinkt des te meer er word getoond.
    Dit komt omdat de functie niks doet met de "checkboxes" die al "checked" zijn!

    Als alle "checkboxes" "checked" zijn en je zed ze daarna allemaal "unchecked", dan zie je geen "articles" meer.
    Hiervoor is de "if statement". De "if statement" kijkt of iets waar (if), niet waar (else) of iets ander is (elseif).

    Wat ik heb gedaan: ik laat de "if statement" kijken of de alle "checkboxes" "unchecked" zijn. Dit doe ik door de .length, 
    de .length kijkt hier naar alle "checkboxes" die "checked" zijn. En als dat gelijk (===) is aan 0, laat dan alle "articles" weer zien.

    De "if statement" staat in de klik functie, omdat hij uitgevoerd moet worden als iemand op een "checkbox" klikt.
        
*/

    $(".checklist :checkbox").click(function () {

        $("article").parent().hide();

        $(".checklist :checkbox:checked").each(function () {
            $("." + $(this).val()).parent().show();

            // .avontuurlijk show
        });

        if ( $(".checklist :checkbox:checked").length === 0 ) {
            $("article").parent().show();
        }

    });


/*
 ** Sorteren
*/

/*

    Ik heb variable gemaakt van de articles, omdat ik ze twee keer nodig had in de "if statement".
    Als ik bijvoorbeeld in mijn HTML de naam van "kinderlijk" naar "speels" wijzig hoef ik deze verandering
    maar één keer door te voeren in mijn javascript bestand i.p.v twee keer.

    Als je veel van dezelfde soort variable maakt (var, let of const) duurt het best lang om zes keer hetzelfde variable te schrijven.
    Je kan daarom in javascript meerdere variable maken met maar één keer het woord (var, let en/of const) te schrijven.
    Dit doe je door gewoon één variable te schrijven en i.p.v een ";" een "," te schrijven en dan de volgende variable schrijven.

*

    const datum_11_maart_likes_120 = $('.griezilig-nieuw'),
          datum_5_mei_likes_76 = $('.griezilig-oud'),
          datum_27_mei_likes_92 = $('.kinderlijk'),
          datum_28_mei_likes_44 = $('.spontaan-oud'),
          datum_6_juli_likes_56 = $('.avontuurlijk'),
          datum_17_juli_likes_45 = $('.spontaan-nieuw');

/* 

    -- HET GESORTEREN MET DE KLIK FUNCTIE --

    In de HTML heb ik in de opties van het "select" element elk optie een "value" gegeven.
    Deze "value" vraag ik op in de "if statement" in de "klik functie" met: $(".keuze").val().
    Ik laat jQuery eerste het element zoeken met de "class" "keuze": $(".keuze").
    Daarna vraag ik de "value" op van het element: .val().

    Als de "value" gelijk is aan het woord "nieuwste": === "nieuwste",
    geeft dan elke element in de "if statement" de "inline style: order", met ieder een apart nummer.


    -- DE "ZOEK" KNOP --

    De zoek knop is een knop met een link. Als je hierop klikt zou je de pagina herladen.
    Om dit te voorkomen moet je het "normale gedrag" van de knop uitschakelen.

    Dit wordt gedaan door de: preventDefault();.
    Zoals de naam al zegt het voorkomt (prevent) het normale (default) gedrag.
    

    -- STYLING ZODAT HET GESOORTEERD WORDT --

    Flexbox heeft een "property" genaamd "order".
    Met "order" kan je de volgorde van elementen veranderen, 
    hoe hoger de waarde van "order" is, des te later je het element zou zien

    Als een element de "inline style" "order" met een waarde van "1" heeft, zou hij als eerste worden getoond 
    en element met de waarde van "2" of hoger als tweede.
    En omdat er in deze "funcite" is gewerkt met "inline styling" word de "order" 
    overschreven als je bijvoorbeeld op een andere waarden gaat sorteren

*

    $(".zoek-functie").click(function (e) {

        e.preventDefault();

        if( $(".keuze").val() === "nieuwste" ) {
            datum_11_maart_likes_120.css('order', '1');
            datum_5_mei_likes_76.css('order', '2');
            datum_27_mei_likes_92.css('order', '3');
            datum_28_mei_likes_44.css('order', '4');
            datum_6_juli_likes_56.css('order', '5');
            datum_17_juli_likes_45.css('order', '6');
        } else {
            datum_11_maart_likes_120.css('order', '1');
            datum_27_mei_likes_92.css('order', '2');
            datum_5_mei_likes_76.css('order', '3');
            datum_6_juli_likes_56.css('order', '4');
            datum_17_juli_likes_45.css('order', '5');
            datum_28_mei_likes_44.css('order', '6');
        }

    });

/*

    Wanneer erop het "element" met de "class name" "reset" word gedrukt, 
    krijg je alle "articles" te zien en worden alle "checkboxes" "unchecked" door ".prop". 

    Ook wordt de volgorde van de "articles" gereset door in de .css('order', '') de tweede "input" leeg te laten.

    Prop kijkt naar de porperties van "checked" door dit stukje code: $("input[type=checkbox]") 
    en het zed het op "unchecked" door ", false".

    Uitleg over "preventDefault()", zie lijn: 180.
    
*/

    $(".reset").click(function (e) {

        e.preventDefault();

        $('article').show().css('order', '');

        $("input[type=checkbox]").prop("checked", false);

    });

    
/*
 ** Zoeken: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_filters_table
*/

/*

    -- WAAR DE FUNCTIE MOET WORDEN UITGEVOERD --
    De "functie" moet kijken waar en wanneer de gebruiker iets in de zoekbalk in typt.
    het kijken waar de gebruiker iets in typt wordt gedaan door "$('#search')", meer info zie lijn: 76.

    -- WANNEER DE FUNCTIE MOET WORDEN UITGEVOERD --
    De "functie" moet worden uitgevoerd als de gebruiker in de zoekbalk typt.
    We moeten kijken naar een "event" (wanneer iets gebeurt).
    Ik gebruik hiervoor het "event" "keyup". "Keyup" is een "event" dat uitgevoerd 
    wordt wanneer een gebruiker een toets van het toetsenbord los laat.
    Als dat gebeurt word de code in de "functie" uitgevoerd.

    -- WAAR KIJKT DE CODE IN DE KEYUP FUNCTIE NAAR --
    De "functie" kijkt naar twee delen.

    Het eerste deel is de "let" "variable".

    Deze "variable" kijkt naar wat er in de zoekbalk word ingetypt door de: ".val()" en zet alle hoofdletter 
    om in kleine letters, zodat het "case-insensetive" wordt. En omdat elke keer als je typt de "keyup functie" 
    opnieuw word uitgevoerd kijkt naar de "variable" opnieuw naar wat erin de zoekbalk staat en word zo automatisch aangepast.

        --SIDENOTE-- 
        "Let" is net als "const" een ES6 (en hoger) variable die de zorgt voor optimalisatie, omdat "let" niet globaal is.
        Het verschil tussen "let" en "const" is dat "const" een constante "variable", wat niet veranderd mag worden meer info zie lijn: 18.
        "Let" daarin tegen mag wel veranderd worden en is daarom constant.
        --/SIDENOTE-- 

    Het tweede deel is de "filter" "functie".

    Deze functie word uitgevoerd op alle "articles" die gefilterd moeten worden.
    De filter functie kijkt naar hoeveel "articles" erzijn en filtert (in deze functie) op de content van alle "articles".


    -- HOE WORDT HET VERANDERD --
    
    -- $(this).toggle( > -1 ); --

    "$(this)" kijkt naar het element waar de "filter" "functie" opstaat, bij deze de "articles"
    ".toggle()" veranderd de zichtbaarheid van als het element zichtbaar is van: zichtbaar naar ontzichtbaar en andersom.

    Door de "> -1" word de "toggle" alleen uitgevoerd als de tekst in het article langer is dan -1.
    De reden dat dit erbij moet staan is (denk ik), omdat het in een "keyup" "functie" staat en de "toggle"
    alleen kijkt naar de tekst als er je op een toets drukt. 
    En wanneer de "functie" is uitgevoerd de "toggle" de tekst in de "articles" 'vergeet' 
    en denkt dat er niks in staat en alles op ontzichtbaar zet.
    Maar als we zeggen "> -1" denkt de "toggle": 'oke, ik moet de tekst filteren, dit heb ik gedaan en alle "articles" zijn gelijk
    langer dan "-1", dus degene die ontzichtbaar en zichtbaar zijn moet zo blijven'

    -- $(this).text().toLowerCase().indexOf(getypt)--

    "$(this)" zie lijn: 291.
    ".text()" kijkt naar alle tekst dat in het "article" staat en zet het om naar kleine letters met 
    ".toLowerCase()" en omdat de "value" van de zoekbalk ook kleine letters zijn maakt het niet 
    uit of je in hoofdletter typt of niet, want het word altijd gevonden.

    De ".indexOf()" simpel gezegd, zoekt alle letters, woorden en zinnen in de "articles".
    Door tussen de haakjes de naam van de "variable", getypt, te zetten kijkt de "indexOf" naar de "value" dat in de zoekbalk word getypt.

    Op deze manier worden de "articles" die gevonden worden door de "filter" "functie" zichtbaar gemaakt, maar de gene die niet gevonden worden ontzichtbaar.


*/

    $("#search").on("keyup", function() {

        let getypt = $("#search")
                        .val()
                        .toLowerCase();
                        
        $("article").filter(function() {

            $(this).toggle( 
                $(this).text()
                    .toLowerCase()
                    .indexOf(getypt) 
            > -1 );

        });
        
    });
    

}); // document.ready close