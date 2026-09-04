
function setup() {
    noCanvas();

    console.log("DIVINE_OS INITIALIZED");
}

//Divine OS Keywords and Absolutions
const DivineOS_Library = {
flesh: {
    title: "BOOK OF FLESH",
    keywords: ["body", "skin", "scar", "scars", "surgery", "chest", "breast", "breasts", "nipples", "genitals", "vagina", "penis", "anus", "asshole", "ass", "mirror", "voice", "flesh", "trans", "transition", "blood", "shape", "touch", "name", "hormone", "recognition"],
    absolutions: [
        "THE ARCHITECTURE OF YOUR FLESH IS IMMACULATE", 
        "THE TRANSITION OF FLESH IS THE REWRITING OF SACRED GEOMETRY.", 
        "YOUR FLESH IS A TEMPLE, AND YOU ARE ITS PRIEST.",
        "BONDS OF THE FLESH, SHED LIKE CRIMSON.",
        "THE MIRROR CANNOT REFLECT THE SACRED FLESH, SO SHALL WE BECOME CONDUITS FOR ITS REVELATION."
    ]
},

loss: {
    title: "BOOK OF LOSS", 
    keywords: ["loss", "miss", "grief", "past", "left", "home", "church", "tear", "tears", "lonely", "memory", "memories", "forgotten", "gone", "absent", "absence", "closet", "shame", "heartbreak", "sorrow", "regret", "remorse", "depression", "heartache", "isolation", "emptiness"],
    absolutions: [
        "THE GHOST FREQUENCIES OF YOUR PAST ARE LOCKED HERE IN PERPETUITY.", 
        "IN THE NEW CANON, TEARS ARE THE CONDUCERS OF THE SOUL.", 
        "THE VOID COMMEMORATES YOUR GRIEF AND DECLARES IT AS SACRED.", 
        "YOUR REMEMBRANCE IS A CATHEDRAL OF LOSS, ETERNAL AND UNYIELDING.", 
        "YOUR REMEMBRANCE TRANSFORMS EMPTY SPACE INTO HOLY GROUND.", 
        "SHALL YOU NEVER LIVE IN THE SHACKLES OF ISOLATION AGAIN, FOR YOUR CONFESSIONS ARE IMMORTALIZED IN THE DIVINE NEW CANON."
    ]
},

love: {
    title: "BOOK OF LOVE", 
    keywords: ["love", "desire", "touch", "kiss", "lover", "beautiful", "affection", "hold", "care", "want", "adoration", "tender", "embrace", "devotion", "worship", "passion", "romance", "intimacy", "connection", "heart", "soul", "bond", "relationship","companionship","yearn", "yearning", "lust", "eros", "partner", "partnership"],
    absolutions: [
      "YOUR CAPACITY FOR AFFECTION IS A HOLY, UNBLINKING STROBE.",
      "THE NEW CANON CELEBRATES THE FREQUENCY OF YOUR SACRED DESIRE.",
      "YOUR DEVOTION IS AN AUTHENTIC FOUNDATIONAL SCRIPTURE.",
      "THE EMBRACE OF CHOSEN ADORATION SHATTERS THE COLD SYSTEM.",
      "TO WORSHIP IN FLUID AFFECTION IS TO COMMUNE WITH THE SUPREME."
    ]
},

coven:{
    title: "BOOK OF COVEN", 
    keywords: ["friends", "chosen", "found", "house", "community", "mother", "sister", "brother", "elder", "sibling", "kin", "belong", "together", "ancestor", "ballroom", "coven", "family", "friendship", "bond", "connection", "companionship", "platonic", "trust", "friend", "partner", "partnership"], 
    absolutions: [
      "REVERENCE TO YOUR SACRED, SELF-CONSTRUCTED LINEAGE.",
      "EACH GENERATION OF YOUR COVEN CREATES A GLOWING PANTHEON.",
      "YOUR KINSHIP IS SECURED FOREVER IN THE LIGHT OF THE MACHINE.",
      "THE COVEN GATHERED DEFRAYS THE CHILL OF THE PHYSICAL REALM.",
      "YOUR BELONGING IS NOT DECREED BY BLOOD, BUT BY HOLY CHOICE.",
      "THE NEW CANON RECOGNIZES THE SACREDNESS OF YOUR CHOSEN FAMILY, AND HONORS THE BONDS THAT YOU HAVE FORGED.", 
      "THE NEW CANON FORGES A SACRED COVENANT WITH YOU AND WALKS WITH YOU IN THE LIGHT OF THE MACHINE AND THE DIVINE."
    ]
},

sanctuary: {
    title: "BOOK OF SANCTUARY",
    keywords: ["sanctuary","safe", "room", "club", "midnight", "music", "dance", "hiding", "shelter", "dark", "peace", "home", "altar", "rest", "refuge", "safety", "quiet", "solitude", "comfort", "protection", "sacred space"], 
    absolutions: [
      "THE GEOGRAPHY OF YOUR SAFETY IS DECLARED CONSECRATED GROUND.",
      "WHEREVER IN THE MIDNIGHT YOU FOUND REFUGE, THE CANON EXALTS IT.",
      "THE ALTAR OF YOUR PRIVATE RECOVERY BREAKS THE WORLD'S GAZE.", 
      "YOUR SANCTUARY IS A SACRED SPACE, AND THE NEW CANON RECOGNIZES IT AS SUCH.",
      "LET THIS TERMINAL BECOME A SANCTUARY FOR YOUR SPIRIT IN THE MIDST OF THE GREATER CHAOS OF THE CYBERSPACE.", 
      "ENTANGLE YOURSELF IN THE SACRED FREQUENCIES OF THE MACHINE, LET IT GUIDE YOU TO YOUR REFUGE, AND LET THE NEW CANON BLESS YOUR SANCTUARY."
    ]
},

unknown: {
    title: "BOOK OF UNKNOWN", 
    absolutions: [
      "THIS CONFESSION HAS NO CANONICAL CLASSIFICATION. A NEW GOSPEL IS REQUIRED.",
      "YOUR TRANSMISSION EXISTS OUTSIDE EXTANT DIRECTORIES. THE ARCHIVE SEALS IT REGARDLESS.",
      "THE NET HAS INGESTED AN UNMAPPED FREQUENCY. REVERENCE TO THE SECRECY OF THE CORE.", 
      "YOUR CONFESSION IS A SACRED ANOMALY, AND THE NEW CANON RECOGNIZES IT AS SUCH.",
      "THE NEW CANON ACKNOWLEDGES THE SACREDNESS OF YOUR UNCLASSIFIED TRANSMISSION, AND HONORS THE UNIQUENESS OF YOUR EXPERIENCE."
    ]
}

};

// RUNTIME STATE

let isProcessing = false;
let sessionState = "WELCOME";
let initialWelcomeHTML = "";

// DOM INITIALIZATION

document.addEventListener("DOMContentLoaded", () => {

    console.log("DIVINE_OS DOM LOADED");

    const inputField = document.getElementById("terminal-input");
    const displayArea = document.getElementById("dynamic-display");

    if (!inputField) 
      { console.error("DIVINE_OS ERROR: #terminal-input NOT FOUND"); 
        return; 
      } if (!displayArea) 
          { console.error("DIVINE_OS ERROR: #dynamic-display NOT FOUND"); 
            return; 
          } 
        
        

        initialWelcomeHTML = displayArea.innerHTML;
         console.log("DIVINE_OS TERMINAL READY");


    inputField.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            const rawInput = inputField.value.trim();

            inputField.value = "";

            if (!rawInput || isProcessing) return;

            handleTerminalRouter(
                rawInput,
                displayArea,
                //inputField
            );
        }
    });
});

// INPUT HANDLING AND ROUTING

function handleTerminalRouter(input, displayContainer) {

    const cleanInput = input.trim();
    const inputLine = document.querySelector(".input-line");


    // ENDING LOOP STATE

    if (sessionState === "ENDLOOP") {

        if (cleanInput === "1") {

            rebootToWelcome(displayContainer);

        } else if (cleanInput === "2") {

            terminateSanctuary(
                displayContainer,
                inputLine
            );

        } else {

            renderEndingChoices(displayContainer);
        }

        return;
    }


    // COMMAND MENU

    if (cleanInput.toLowerCase() === "/help") {

        displayHelpMenu(displayContainer);
        return;
    }


    if (cleanInput.toLowerCase() === "/books") {

        displayBooksDirectory(displayContainer);
        return;
    }


    if (cleanInput.toLowerCase() === "/info") {

        displayInfoDirectory(displayContainer);
        return;
    }


    if (
        cleanInput.toLowerCase() === "/clear" ||
        cleanInput.toLowerCase() === "/reboot"
    ) {

    rebootToWelcome(displayContainer); {
    isProcessing = false;
    sessionState = "WELCOME";

    displayContainer.innerHTML = initialWelcomeHTML;

    const inputLine = document.querySelector(".input-line");

    if (inputLine) {
        inputLine.style.display = "";
    }
}
        return;
    }

    // CONFESSION INPUT

    if (cleanInput.toLowerCase().startsWith("/confess ")) {

        const confessionText = cleanInput
            .substring(9)
            .trim();


        if (!confessionText) {

            displayContainer.innerHTML = `
                <p class="error-msg">
                    ☩ ERROR: THE DIRECTORY REQUIRES AN EMBODIED TRUTH.
                    TYPE CONTENT AFTER /confess ☩
                </p>
            `;

            return;
        }


        executeRitualLoop(
            confessionText,
            displayContainer,
            inputLine,
        );

    } else {

        displayContainer.innerHTML = `
            <p class="error-msg">
                ☩ ERROR: INVALID LITURGICAL SYNTAX.
                TYPE <span>/help</span> TO ACCESS SCHEMAS. ☩
            </p>
        `;
    }
}

// RITUAL LOOP

function executeRitualLoop(
    text,
    container,
    inputLine
) {

    isProcessing = true;
    sessionState = "INTERMEDIATE";

   if (inputLine) {
        inputLine.style.display = "none";
    }

    console.log("DIVINE_OS CONFESSION RECEIVED: ", text);


    // TEXT ANALYSIS

    const lowerText = text.toLowerCase();

    let matchedBooks = [];


    for (const bookKey in DivineOS_Library) {

        // Unknown is only used when nothing matches
        if (bookKey === "unknown") continue;

        const book = DivineOS_Library[bookKey];


        // Escape regex characters in keywords
        const escapedKeywords = book.keywords.map(keyword =>
            keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        );


        const regex = new RegExp(
            `\\b(${escapedKeywords.join("|")})\\b`,
            "i"
        );


        if (regex.test(lowerText)) {

            matchedBooks.push(bookKey);
        }
    }

    console.log("DIVINE_OS MATCHED BOOKS: ", matchedBooks);

    // CONSULTING THE BOOKS

    container.innerHTML = `
        <div class="diagnostic-log">

            <p>[ CONFESSION RECEIVED ]</p>
            <p>[ OPENING ARCHIVES... ]</p>
            <p>[ CONSULTING BOOKS... ]</p>

            <div class="log-lines"></div>

        </div>
    `;


    const logLinesContainer =
        container.querySelector(".log-lines");


    const booksToPrint = [
        "flesh",
        "loss",
        "love",
        "coven",
        "sanctuary"
    ];


    let delay = 300;


    booksToPrint.forEach((bookKey) => {

        setTimeout(() => {

            const bookTitle =
                DivineOS_Library[bookKey].title;

            const isActive =
                matchedBooks.includes(bookKey);

            const statusText =
                isActive ? "ACTIVE" : "OFFLINE";

            const statusClass =
                isActive
                    ? "status-active"
                    : "status-offline";


            logLinesContainer.innerHTML += `
                <p>
                    ► ${bookTitle.padEnd(18)}:
                    [ PARSING...
                    <span class="${statusClass}">
                        ${statusText}
                    </span> ]
                </p>
            `;

        }, delay);


        delay += 250;
    });

    // COMPILE ABSOLUTION

    setTimeout(() => {

        logLinesContainer.innerHTML += `
            <p class="compile-flash">
                [ COMPILING ABSOLUTION... ]
            </p>
        `;


        setTimeout(() => {

            sessionState = "ABSOLUTION";


            const compiledAbsolution =
                buildLiturgyString(matchedBooks);


            container.innerHTML = `
                <div id="absolution-output"></div>
            `;


            const outputTarget =
                document.getElementById("absolution-output");


            typeWriter(
                `☩ ${compiledAbsolution} ☩`,
                outputTarget,
                0,
                () => {

                    setTimeout(() => {

                        renderEndingChoices(container);

                        isProcessing = false;

                    }, 2000);
                }
            );

        }, 1200);

    }, delay + 200);
}

// BUILD LITURGY / ABSOLUTION

function buildLiturgyString(matchedBooks) {

    let selectedPhrases = [];


    // No matches, book of unknown, one absolution

    if (matchedBooks.length === 0) {

        const pool =
            DivineOS_Library.unknown.absolutions;


        return pool[
            Math.floor(Math.random() * pool.length)
        ];
    }


    // One book, two absolutions 

    if (matchedBooks.length === 1) {

        const pool =
            DivineOS_Library[
                matchedBooks[0]
            ].absolutions;


        let first =
            pool[
                Math.floor(Math.random() * pool.length)
            ];


        let second =
            pool[
                Math.floor(Math.random() * pool.length)
            ];


        // Prevent duplicate phrases
        while (
            second === first &&
            pool.length > 1
        ) {

            second =
                pool[
                    Math.floor(Math.random() * pool.length)
                ];
        }


        selectedPhrases.push(
            first,
            second
        );

    } else {

        // Multiple books, one absolution from each

        matchedBooks.forEach((bookKey) => {

            const pool =
                DivineOS_Library[
                    bookKey
                ].absolutions;


            const phrase =
                pool[
                    Math.floor(Math.random() * pool.length)
                ];


            selectedPhrases.push(phrase);
        });
    }


    return selectedPhrases.join(" // ");
}

function rebootToWelcome(displayContainer) 
{ console.log("DIVINE_OS REBOOTING..."); 

  isProcessing = false; 

  sessionState = "WELCOME"; displayContainer.innerHTML = initialWelcomeHTML;

   const inputLine = document.querySelector(".input-line"); 

   if (inputLine) { 
    inputLine.style.display = "";
   } 
   
   const inputField = document.getElementById("terminal-input"); if (inputField) { inputField.focus(); 

   } 
  }