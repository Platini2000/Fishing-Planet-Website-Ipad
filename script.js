// --- CONFIGURATIE DATABASE ---
// Hier definieer je per meer welke vissen er zijn.
// De 'key' (bv 'lonestar') moet matchen met een woord in de <title> van je HTML pagina.
const fishData = {
    "Lone Star": [
        { id: 'bass', name: 'Spotted Bass' },
        { id: 'buffalo', name: 'Smallmouth Buffalo' },
        { id: 'pickerel', name: 'Grass Pickerel' },
        { id: 'crappie', name: 'White Crappie' },
        { id: 'catfish', name: 'Channel Catfish' },
        { id: 'sunfish', name: 'Bluegill & Sunfish' },
        { id: 'shiner', name: 'Shiners' }
    ],
    "Emerald": [
        { id: 'walleye', name: 'Walleye' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'chainpickerel', name: 'Chain Pickerel' },
        { id: 'redfin', name: 'Redfin Pickerel' },
        { id: 'sauger', name: 'Sauger' },
        { id: 'perch', name: 'Yellow Perch' },
        { id: 'crappie', name: 'Crappie' },
        { id: 'pumpkinseed', name: 'Pumpkinseed' }
    ],
    "Mudwater": [
         { id: 'largemouth', name: 'Largemouth Bass' },
         { id: 'catfish', name: 'Channel Catfish' },
         { id: 'bullhead', name: 'Brown Bullhead' },
         { id: 'pickerel', name: 'Chain Pickerel' },
         { id: 'gar', name: 'Florida Gar' },
         { id: 'bowfin', name: 'Bowfin' },
         { id: 'drum', name: 'Freshwater Drum' },
         { id: 'crappie', name: 'White Crappie' },
         { id: 'sunfish', name: 'Bluegill & Sunfish' },
         { id: 'shiner', name: 'Golden Shiner' }
    ],
    "Rocky": [
        { id: 'rainbow', name: 'Rainbow Trout' },
        { id: 'cutthroat', name: 'Cutthroat Trout' },
        { id: 'golden', name: 'Golden Trout' },
        { id: 'sucker', name: 'White Sucker' },
        { id: 'whitebass', name: 'White Bass' },
        { id: 'crappie', name: 'Black Crappie' },
        { id: 'bluegill', name: 'Bluegill' },
        { id: 'shiner', name: 'Golden Shiner' }
    ],
    "Falcon": [
        { id: 'redband', name: 'Oregon Redband Trout' },
        { id: 'rainbow', name: 'Rainbow Trout' },
        { id: 'brown', name: 'Brown Trout' },
        { id: 'cutthroat', name: 'Cutthroat Trout' },
        { id: 'smallmouth', name: 'Smallmouth Bass' },
        { id: 'pumpkinseed', name: 'Pumpkinseed' },
        { id: 'redbreast', name: 'Redbreast Sunfish' },
        { id: 'rockbass', name: 'Rock Bass' }
    ],
    "Neherrin": [
        { id: 'smallmouth', name: 'Smallmouth Bass' },
        { id: 'largemouth', name: 'Largemouth Bass' },
        { id: 'spotted', name: 'Spotted Bass' },
        { id: 'flathead', name: 'Flathead Catfish' },
        { id: 'bluecat', name: 'Blue Catfish' },
        { id: 'channelcat', name: 'Channel Catfish' },
        { id: 'gar', name: 'Longnose Gar' },
        { id: 'pickerel', name: 'Chain Pickerel' },
        { id: 'blackcrappie', name: 'Black Crappie' },
        { id: 'whitecrappie', name: 'White Crappie' },
        { id: 'redear', name: 'Redear Sunfish' },
        { id: 'bluegill', name: 'Bluegill' },
        { id: 'pumpkinseed', name: 'Pumpkinseed' },
        { id: 'perch', name: 'Yellow Perch' },
        { id: 'shad', name: 'American Shad' },
        { id: 'shiner', name: 'Golden Shiner' }
    ],
    "Everglades": [
        { id: 'peacock', name: 'Butterfly Peacock Bass' },
        { id: 'largemouth', name: 'Largemouth Bass' },
        { id: 'snook', name: 'Common Snook' },
        { id: 'tarpon', name: 'Tarpon' },
        { id: 'gar', name: 'Florida Gar' },
        { id: 'reddrum', name: 'Red Drum' },
        { id: 'gafftopsail', name: 'Gafftopsail Catfish' },
        { id: 'oscar', name: 'Oscar' },
        { id: 'bowfin', name: 'Bowfin' },
        { id: 'bullhead', name: 'Brown Bullhead' },
        { id: 'channelcat', name: 'Channel Catfish' },
        { id: 'warmouth', name: 'Warmouth' },
        { id: 'redear', name: 'Redear Sunfish' },
        { id: 'bluegill', name: 'Bluegill' },
        { id: 'shiner', name: 'Golden Shiner' }
    ],
    "Gent": [
        { id: 'roach', name: 'Common Roach' },
        { id: 'bream', name: 'Common Bream' },
        { id: 'silverbream', name: 'Silver Bream' },
        { id: 'prussian', name: 'Prussian Carp' },
        { id: 'ide', name: 'Ide' },
        { id: 'asp', name: 'Asp' },
        { id: 'perch', name: 'European Perch' },
        { id: 'zander', name: 'Zander' },
        { id: 'pike', name: 'Northern Pike' },
        { id: 'eel', name: 'European Eel' },
        { id: 'commoncarp', name: 'Common Carp' },
        { id: 'mirrorcarp', name: 'Mirror Carp' },
        { id: 'tench', name: 'Tench' },
        { id: 'wels', name: 'Wels Catfish' },
        { id: 'flounder', name: 'European Flounder' },
        { id: 'mullet', name: 'Grey Mullet' },
        { id: 'goby', name: 'Round Goby' }
    ]
};

// --- BEPAAL WELKE LIJST WE MOETEN GEBRUIKEN ---
let currentFishList = [];

// We kijken naar de paginatitel (document.title) om te weten waar we zijn
const pageTitle = document.title; 

if (pageTitle.includes("Lone Star")) {
    currentFishList = fishData["Lone Star"];
} else if (pageTitle.includes("Emerald")) {
    currentFishList = fishData["Emerald"];
} else if (pageTitle.includes("Mudwater")) {
    currentFishList = fishData["Mudwater"];
} else if (pageTitle.includes("Rocky")) {   
    currentFishList = fishData["Rocky"];
} else if (pageTitle.includes("Falcon")) {   
    currentFishList = fishData["Falcon"];
} else if (pageTitle.includes("Neherrin")) {
    currentFishList = fishData["Neherrin"];
} else if (pageTitle.includes("Everglades")) {
    currentFishList = fishData["Everglades"]; 
} else if (pageTitle.includes("Gent")) {
    currentFishList = fishData["Gent"];
} else {
    // Fallback
    console.warn("Geen meer herkend in de titel! Zorg dat de <title> tag klopt.");
    currentFishList = [];
}

document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Initialiseer de Vis Balk met de JUISTE lijst
    setupFishNav();

    // 2. Maak BEIDE balken oneindig scrollbaar
    setupInfiniteScroll("#location-nav");
    setupInfiniteScroll("#fish-nav");

    // 3. Selecteer standaard de EERSTE vis van de huidige lijst
    setTimeout(() => {
        if (currentFishList.length > 0) {
            selectFish(currentFishList[0].id);
        }
    }, 100);
});


/* --- FUNCTIE: VIS BALK VULLEN --- */
function setupFishNav() {
    const nav = document.getElementById('fish-nav');
    if(!nav) return;

    // Maak de balk eerst leeg voor de zekerheid
    nav.innerHTML = '';

    // We maken de HTML linkjes aan op basis van currentFishList
    currentFishList.forEach(fish => {
        const link = document.createElement('a');
        link.href = "#"; // Geen reload
        link.dataset.id = fish.id; // Data attribuut om later te vinden
        link.textContent = fish.name;
        
        // Klik event: vis selecteren
        link.addEventListener('click', (e) => {
            e.preventDefault();
            selectFish(fish.id);
        });

        nav.appendChild(link);
    });
}

/* --- FUNCTIE: VIS SELECTEREN & CENTREREN --- */
function selectFish(fishId) {
    // A. TOON DE KAART
    // Eerst alles verbergen
    document.querySelectorAll('.fish-card').forEach(card => {
        card.style.display = 'none';
    });
    
    // Specifieke kaart tonen
    const targetCard = document.getElementById(fishId);
    if(targetCard) {
        targetCard.style.display = 'block';
    } else {
        console.warn("Kan vis-kaart niet vinden met ID:", fishId);
    }

    // B. UPDATE DE BALK (Visueel)
    const nav = document.getElementById('fish-nav');
    // Let op: door infinite scroll hebben we nu clones. We moeten ALLE links checken.
    const allLinks = Array.from(nav.querySelectorAll('a'));

    // Verwijder active class overal
    allLinks.forEach(link => link.classList.remove('active'));

    // Zoek de index van de vis in de originele lijst
    const originalIndex = currentFishList.findIndex(f => f.id === fishId);
    
    if (originalIndex === -1) return;

    // Omdat we oneindig scrollen (3 sets), pakken we de link in de MIDDELSTE set.
    // Set 1 = length items, Set 2 begint daarna.
    const totalItems = currentFishList.length; 
    
    // Als er oneindige scroll is toegepast (dus meer links in DOM dan in lijst)
    let targetLinkIndex = originalIndex;
    
    if (allLinks.length > totalItems) {
        targetLinkIndex = totalItems + originalIndex; 
    }

    const targetLink = allLinks[targetLinkIndex];

    if (targetLink) {
        targetLink.classList.add('active');
        
        // C. CENTREREN
        // Bereken positie om te scrollen zodat het item in het midden staat
        const navWidth = nav.clientWidth;
        const itemLeft = targetLink.offsetLeft;
        const itemWidth = targetLink.clientWidth;

        const scrollPos = itemLeft - (navWidth / 2) + (itemWidth / 2);

        nav.scrollTo({
            left: scrollPos,
            behavior: 'smooth'
        });
    }
}


/* --- FUNCTIE: ONEINDIGE SCROLL SETUP --- */
function setupInfiniteScroll(selector) {
    const nav = document.querySelector(selector);
    if (!nav) return;

    // Kopieer de items (Original)
    const originalLinks = Array.from(nav.children);
    
    // Als er heel weinig items zijn (minder dan schermbreedte), is scrollen niet nodig/leuk
    if (originalLinks.length === 0) return;

    // Maak de nav leeg en vul opnieuw: [Set 1] [Set 2] [Set 3]
    nav.innerHTML = '';

    const appendItems = (items) => {
        items.forEach(link => {
            let clone = link.cloneNode(true);
            
            // Als het de vis-nav is, moeten we de click event opnieuw koppelen aan de clone
            // (CloneNode kopieert standaard geen event listeners)
            if (selector === '#fish-nav') {
                clone.addEventListener('click', (e) => {
                    e.preventDefault();
                    selectFish(clone.dataset.id);
                });
            }
            
            nav.appendChild(clone);
        });
    };

    appendItems(originalLinks); // Buffer Links (Links)
    appendItems(originalLinks); // Hoofd Set (Midden)
    appendItems(originalLinks); // Buffer Links (Rechts)

    // Scroll logica
    setTimeout(() => {
        const singleSetWidth = nav.scrollWidth / 3;
        
        // Voor de locatiebalk: zoek de actieve map en scroll daar naartoe
        if (selector === '#location-nav') {
            const activeLink = originalLinks.find(l => l.classList.contains('active'));
            if (activeLink) {
                const index = originalLinks.indexOf(activeLink);
                // Omdat we opnieuw hebben opgebouwd, moeten we de nieuwe elementen pakken
                const currentLinks = nav.querySelectorAll('a');
                const target = currentLinks[originalLinks.length + index]; // Middelste set
                
                if(target) {
                    const scrollPos = target.offsetLeft - (nav.clientWidth / 2) + (target.clientWidth / 2);
                    nav.scrollLeft = scrollPos;
                }
            } else {
                nav.scrollLeft = singleSetWidth;
            }
        } else {
             // Voor vissenbalk zetten we de basis scroll op het midden.
             // selectFish() corrigeert dit later nog naar de actieve vis.
             nav.scrollLeft = singleSetWidth;
        }

        // Het oneindige loop event
        nav.addEventListener('scroll', function() {
            if (nav.scrollLeft >= singleSetWidth * 2) {
                nav.scrollLeft -= singleSetWidth; // Spring terug naar set 2
            } else if (nav.scrollLeft <= 5) { // Iets marge voor mobiel bouncen
                nav.scrollLeft += singleSetWidth; // Spring vooruit naar set 2
            }
        });
    }, 50);
}