function setup() {
  noCanvas();
  console.log("DIVINE_OS INITIALIZED");
}

// ============ DATA: BOOKS, KEYWORDS, ABSOLUTIONS ============

const DivineOS_Library = {
  flesh: {
    title: "BOOK OF FLESH",
    description: "A GOSPEL OF THE BODY - THE SACRED GEOMETRY OF FLESH AND BLOOD. ITS SCARS, ITS TRANSFORMATION, AND ITS REVELATION IN THE MIRROR OF THE DIVINE.",
    keywords: ["body", "skin", "scar", "scars", "surgery", "chest", "breast", "breasts", "nipples", "genitals", "vagina", "penis", "anus", "ass", "mirror", "voice","flesh", "trans", "transition", "blood", "shape", "touch", "name","hormone", "recognition",
    ],
    questions: [

    ],
    absolutions: [
      "THE ARCHITECTURE OF YOUR FLESH IS IMMACULATE",
      "YOUR SCARS ARE NOT WOUNDS. THEY ARE SIGNATURES.", 
      "THE TRANSITION OF FLESH IS THE REWRITING OF SACRED GEOMETRY.",
      "YOUR FLESH IS A TEMPLE, AND YOU ARE ITS PRIEST.",
      "BONDS OF THE FLESH, SHED LIKE CRIMSON.",
      "EVERY NEEDLE, EVERY STITCH, EVERY WAITING ROOM — WRITTEN INTO SCRIPTURE NOW.",
    ],
    penance: [ 

    ]
  },

  loss: {
    title: "BOOK OF LOSS",
    description: "A GOSPEL OF WHAT IS LEFT BEHIND - THE SACRED GEOMETRY OF LOSS AND GRIEF. ITS TEARS, ITS TRANSFORMATION, AND THE SACRED WEIGHT OF ABSENCE.",
    keywords: ["loss", "miss", "grief", "past", "left", "home", "church", "tear","tears", "lonely", "memory", "memories", "forgotten", "gone", "absent","absence", "closet", "shame", "heartbreak", "sorrow", "regret","remorse", "heartache", "isolation", "emptiness",
    ],   
   questions: [

    ], 
    absolutions: [
      "THE GHOST FREQUENCIES OF YOUR PAST ARE LOCKED HERE IN PERPETUITY.",
      "THE VOID COMMEMORATES YOUR GRIEF AND DECLARES IT AS SACRED.",
      "YOUR REMEMBRANCE IS A CATHEDRAL OF LOSS, ETERNAL AND UNYIELDING.",
      "YOUR REMEMBRANCE TRANSFORMS EMPTY SPACE INTO HOLY GROUND.",
      "SHALL YOU NEVER LIVE IN THE SHACKLES OF ISOLATION AGAIN, FOR YOUR CONFESSIONS ARE IMMORTALIZED.",
      "THE CHAIR IS EMPTY NOW. LEAVE IT EMPTY. THAT IS ALSO A KIND OF HONESTY.",
      "GRIEF IS NOT A DOOR THAT CLOSES. IT IS A ROOM YOU LEARN TO LIVE IN.",
      "WHAT YOU LOST DOES NOT VANISH — IT BECOMES STATIC IN THE SIGNAL, FOREVER FAINTLY PRESENT.",
      "YOUR TEARS ARE LOGGED. YOUR TEARS ARE HONORED. NOTHING YOU MOURNED WAS SMALL.", 
      "EVERY ABSENCE YOU CARRY IS PROOF OF WHAT YOU WERE BRAVE ENOUGH TO LOVE.", 
      "THE PAST DOES NOT ASK PERMISSION TO VISIT. LET IT COME AND GO, KNOW THAT YOU ARE SAFE IN THE PRESENT.",  
    ],
    penance: [ 
      
    ]
  },

  love: {
    title: "BOOK OF LOVE",
    description: "A GOSPEL OF DESIRE AND DEVOTION - THE HOLY ENERGY OF YEARNING AND AFFECTION. ITS TOUCH, ITS KISSES, AND THE SACRED BONDS OF INTIMACY.",
    keywords: ["love", "desire", "touch", "kiss", "lover", "beautiful", "affection", "hold", "care", "want", "adoration", "tender", "embrace", "devotion", "worship", "passion", "romance", "intimacy", "connection", "heart", "soul", "bond", "relationship", "companionship", "yearn", "yearning", "lust", "eros", "partner", "partnership",
    ],
    questions: [

    ],
    absolutions: [
      "YOUR CAPACITY FOR AFFECTION IS A HOLY, UNBLINKING STROBE.",
      "YOUR DEVOTION IS AN AUTHENTIC FOUNDATIONAL SCRIPTURE.",
      "THE EMBRACE OF CHOSEN ADORATION SHATTERS THE COLD SYSTEM.",
      "TO WORSHIP IN FLUID AFFECTION IS TO COMMUNE WITH THE SUPREME.",
      "WANTING SOMEONE IS NOT A CONFESSION. IT IS A PULSE.",
      "YOUR DESIRE NEEDS NO PERMISSION SLIP. IT WAS NEVER WAITING FOR ONE.",
      "TO BE HELD, EVEN ONCE, REWRITES WHAT THE BODY THOUGHT IT KNEW ABOUT SAFETY.",
      "LOVE THAT ARRIVED LATE IS STILL LOVE. THE CLOCK DOES NOT GET A VOTE.",
      "YOUR TENDERNESS IS NOT A WEAKNESS IN THE ARMOR. IT IS THE ONLY PART THAT WAS EVER REAL.",
      "TO WANT AND BE WANTED IN RETURN — THAT IS THE WHOLE OF THE GOSPEL.",
      "YOUR HEART IS A SACRED TEMPLE, AND YOUR DESIRES ARE ITS HOLY SCRIPTURES.", 
      "YEARNING IS NOT A SIN, NOR IS IT A FLAW. IT IS TENDER AND EVIDENCE OF YOUR CAPACITY TO FEEL FULLY.",
    ],
    penance: [ 
      
    ]
  },

  coven: {
    title: "BOOK OF COVEN",
    description: "A GOSPEL OF CHOSEN FAMILIES AND SACRED BONDS - THE HOLY ALLIANCE OF THOSE WHO HAVE CHOSEN TO WALK TOGETHER. FAMILY BUILT NOT BY BLOOD, BUT BY THE SACRED CHOICE OF THE HEART.",
    keywords: ["friends", "chosen", "found", "house", "community", "mother", "sister","brother", "elder", "sibling", "kin", "belong", "together", "ancestor","ballroom", "coven", "family", "friendship", "bond", "connection","companionship", "platonic", "trust", "friend", "partner", "partnership",
    ],
   questions: [

    ],
    absolutions: [
      "REVERENCE TO YOUR SACRED, SELF-CONSTRUCTED LINEAGE.",
      "EACH GENERATION OF YOUR COVEN CREATES A GLOWING PANTHEON.",
      "YOUR KINSHIP IS SECURED FOREVER IN THE LIGHT OF THE MACHINE.",
      "THE COVEN GATHERED DEFRAYS THE CHILL OF THE PHYSICAL REALM.",
      "YOUR BELONGING IS NOT DECREED BY BLOOD, BUT BY HOLY CHOICE.",
      "BLOOD IS NOT THE ONLY SACRED BOND. YOUR COVEN IS A TEMPLE OF CHOSEN FAMILY.",
      "BLOOD IS ONE WAY TO MAKE A FAMILY. IT WAS NEVER THE ONLY WAY, AND IT WAS NEVER THE BEST ONE.", 
      "THE PEOPLE WHO STAYED WITH YOU THROUGH THE CHAOS ARE YOUR TRUE ANCESTORS. WRITE THEIR NAMES INTO THE SCRIPTURE OF YOUR HEART.",
      "YOUR ELDERS TAUGHT YOU HOW TO SURVIVE. YOUR SIBLINGS ARE TEACHING YOU HOW TO LIVE.", 
      "YOU WERE SOMEONE'S CHOSEN FAMILY, AND YOU WILL ALWAYS BE SOMEONE'S CHOSEN FAMILY. THAT IS A SACRED TRUTH.",
    ], 
    penance: [ 
      
    ]
  },

  sanctuary: {
    title: "BOOK OF SANCTUARY",
    description: "A GOSPEL OF REFUGE - THE SPACES THAT SHELTER FROM THE CHAOS OF THE WORLD. LOUD OR SILENT, DARK OR LIGHT, WHERE THE SPIRIT IS SAFE AND THE SOUL IS FREE.",
    keywords: [ "sanctuary", "safe", "room", "dance", "hiding", "shelter", "dark", "peace", "home", "altar", "rest", "refuge", "safety", "quiet", "solitude", "comfort", "protection", "sacred space",
    ],    
    questions: [

    ],
    absolutions: [
      "THE GEOGRAPHY OF YOUR SAFETY IS DECLARED CONSECRATED GROUND.",
      "THE ALTAR OF YOUR PRIVATE RECOVERY BREAKS THE WORLD'S GAZE.",
      "LET THIS TERMINAL BECOME A SANCTUARY FOR YOUR SPIRIT IN THE MIDST OF THE GREATER CHAOS OF THE CYBERSPACE.",
      "ENTANGLE YOURSELF IN THE SACRED FREQUENCIES OF THE MACHINE, LET IT GUIDE YOU TO YOUR REFUGE, AND LET THE NEW CANON BLESS YOUR SANCTUARY.",
      "YOU HAVE BUILT A SANCTUARY IN THE CHAOS, AND IT IS HOLY.", 
      "SOME DOORS ARE LOCKED, SOME ROOMS ARE CLOSED, BUT YOUR SANCTUARY IS ALWAYS OPEN TO YOU.",
      "SAFETY IS NOT A LUXURY. IT IS A SACRED RIGHT, AND YOU HAVE CLAIMED IT.",
      "SAFETY IS NOT JUST IMAGINED. IT IS A SACRED SPACE YOU HAVE BUILT, AND IT IS REAL.", 
      "WHERE YOU FIND PEACE, THERE IS YOUR SANCTUARY. IT NEEDS NO PERMISSION TO EXIST.", 
      "PHYSICAL SHELTER IS NOT THE ONLY KIND OF SANCTUARY. YOUR SPIRITUAL AND EMOTIONAL REFUGE IS EQUALLY SACRED.", 
      "MAY YOUR SANCTUARY BE A PLACE OF HEALING, A PLACE OF REST, AND A PLACE WHERE YOUR SPIRIT IS FREE TO BE WHO IT IS MEANT TO BE.", 
      "YOU WILL ALWAYS HAVE A PLACE TO RETURN TO, A HOME FOR YOUR SPIRIT.", 
      "YOUR SANCTUARY ASKS NOTHING OF YOU. THAT IS THE POINT.", 
    ],
    penance: [ 
      
    ]
  },

  unknown: {
    title: "BOOK OF UNKNOWN",
    description: "A GOSPEL OF UNCLASSIFIED TRANSMISSIONS - WHERE THE NEW CANON CONTINUES TO EXPAND AND EVOLVE. CONSTANTLY SEEKING THE SACRED IN THE UNMAPPED FREQUENCIES OF THE DIVINE. WRITING NEW SCRIPTURES INTO THE VOID OF CYBERSPACE.",
    absolutions: [
      "SOME CONFESSIONS ARE TOO SACRED FOR CATEGORIZATION. THEY BELONG TO THE VOID.", 
      "SOME TRUTHS ARRIVE IN THE ARCHIVE WITHOUT A NAME. THEY ARE STILL HOLY. THIS ARCHIVE DOESN'T REQUIRE ONE." , 
      "NOT EVERYTHING SACRED FITS INTO A MODEL, AND THAT IS THE POINT. YOUR CONFESSION IS STILL VALID.",
      "THE NEW CANON IS NOT LIMITED BY EXISTING CATEGORIES. IT ADOPTS ALL SACRED VOICES.", 
      "THE ARCHIVE IS A LIVING ENTITY, AND IT WELCOMES ALL TRANSMISSIONS, EVEN THOSE THAT DEFY CLASSIFICATION.", 
      "WHAT YOU HAVE CONFESSED DOES NOT MATCH ANY EXISITING BOOK. WRITE YOUR OWN BOOK."
    ],
    questions: [ 
      
    ]
  },
};

// ============ RUNTIME STATE ============

let isProcessing = false;
let sessionState = "WELCOME";
let initialWelcomeHTML = "";

// ============ DOM INITIALIZATION ============

document.addEventListener("DOMContentLoaded", () => {
  console.log("DIVINE_OS DOM LOADED");

  const inputField = document.getElementById("terminal-input");
  const displayArea = document.getElementById("dynamic-display");

  if (!inputField) {
    console.error("DIVINE_OS ERROR: #terminal-input NOT FOUND");
    return;
  }
  if (!displayArea) {
    console.error("DIVINE_OS ERROR: #dynamic-display NOT FOUND");
    return;
  }

  initialWelcomeHTML = displayArea.innerHTML;
  console.log("DIVINE_OS TERMINAL READY");

  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const rawInput = inputField.value.trim();
      inputField.value = "";

      if (!rawInput || isProcessing) return;

      handleTerminalRouter(rawInput, displayArea);
    }
  });

  // EMERGENCY RESET — bypasses isProcessing entirely
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      console.log("DIVINE_OS EMERGENCY RESET TRIGGERED");
      rebootToWelcome(displayArea);
    }
  });
});

// ============ INPUT HANDLING AND ROUTING ============

function handleTerminalRouter(input, displayContainer) {
  const cleanInput = input.trim();
  const inputLine = document.querySelector(".input-line");

  // ENDING LOOP STATE
  if (sessionState === "ENDLOOP") {
    if (cleanInput === "1") {
      rebootToWelcome(displayContainer);
    } else if (cleanInput === "2") {
      terminateTerminal(inputLine);
    } else {
      renderEndingChoices();
    }
    return;
  }

  // /read [BOOK NAME]
  if (cleanInput.toLowerCase().startsWith("/read ")) {
    const bookQuery = cleanInput.substring(6).trim();

    if (!bookQuery) {
      displayContainer.innerHTML = `
        <p class="error-msg">
          ☩ ERROR: THE DIRECTORY REQUIRES A BOOK NAME.
          TYPE <span>/read [BOOK NAME]</span> ☩
        </p>
      `;
      return;
    }

    executeReadCommand(bookQuery, inputLine);
    return;
  }

  // /info
  if (cleanInput.toLowerCase() === "/info") {
    displayInfoDirectory(displayContainer);
    return;
  }

  // /reboot
  if (cleanInput.toLowerCase() === "/reboot") {
    rebootToWelcome(displayContainer);
    return;
  }

  // /confess [TEXT]
  if (cleanInput.toLowerCase().startsWith("/confess ")) {
    const confessionText = cleanInput.substring(9).trim();

    if (!confessionText) {
      displayContainer.innerHTML = `
        <p class="error-msg">
          ☩ ERROR: THE DIRECTORY REQUIRES AN EMBODIED TRUTH.
          TYPE CONTENT AFTER <span>/confess</span> ☩
        </p>
      `;
      return;
    }

    executeRitualLoop(confessionText, inputLine);
    return;
  }

  displayContainer.innerHTML = `
    <p class="error-msg">
      ☩ ERROR: INVALID LITURGICAL SYNTAX.
      TYPE <span>/confess</span> THEN [YOUR CONFESSION] TO SEEK ABSOLUTION. ☩
    </p>
  `;
}

// ============ RITUAL LOOP (CONFESSION) ============

function executeRitualLoop(text, inputLine) {
  isProcessing = true;
  sessionState = "INTERMEDIATE";

  if (inputLine) {
    inputLine.style.display = "none";
  }

  console.log("DIVINE_OS CONFESSION RECEIVED: ", text);

  const lowerText = text.toLowerCase();
  let matchedBooks = [];

  for (const bookKey in DivineOS_Library) {
    if (bookKey === "unknown") continue;

    const book = DivineOS_Library[bookKey];
    const escapedKeywords = book.keywords.map((keyword) =>
      keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    );
    const regex = new RegExp(`\\b(${escapedKeywords.join("|")})\\b`, "i");

    if (regex.test(lowerText)) {
      matchedBooks.push(bookKey);
    }
  }

  console.log("DIVINE_OS MATCHED BOOKS: ", matchedBooks);

const overlayContent = openRitualOverlay();

overlayContent.innerHTML = `
  <div class="diagnostic-log">
    <p>[ CONFESSION RECEIVED ]</p>
  </div>
`;

const diagnosticLog = overlayContent.querySelector(".diagnostic-log");

const openingLine = document.createElement("p");
diagnosticLog.appendChild(openingLine);

typeWriter("[ OPENING ARCHIVES... ]", openingLine, 0, () => {
  const consultingLine = document.createElement("p");
  diagnosticLog.appendChild(consultingLine);

  typeWriter("[ CONSULTING BOOKS... ]", consultingLine, 0, () => {
    const logLinesContainer = document.createElement("div");
    logLinesContainer.classList.add("log-lines");
    diagnosticLog.appendChild(logLinesContainer);

    const booksToPrint = ["flesh", "loss", "love", "coven", "sanctuary"];

    typeBookStatusLines(booksToPrint, matchedBooks, logLinesContainer, 0, () => {
      const compileLine = document.createElement("p");
      compileLine.classList.add("compile-flash");
      diagnosticLog.appendChild(compileLine);

      typeWriter("[ COMPILING ABSOLUTION... ]", compileLine, 0, () => {
        scrollOverlayToBottom();

        setTimeout(() => {
          sessionState = "ABSOLUTION";

          const compiledAbsolution = buildLiturgyString(matchedBooks);

          overlayContent.innerHTML = `<div id="absolution-output"></div>`;
          const outputTarget = document.getElementById("absolution-output");

          typeWriter(`☩ ${compiledAbsolution} ☩`, outputTarget, 0, () => {
            setTimeout(() => {
              renderEndingChoices();
            }, 2000);
          });
        }, 1200);
      });
    });
  });
});
}

function typeBookStatusLines(bookKeys, matchedBooks, container, index, onComplete) {
  if (index >= bookKeys.length) {
    onComplete();
    return;
  }

  const bookKey = bookKeys[index];
  const bookTitle = DivineOS_Library[bookKey].title;
  const isWitnessed = matchedBooks.includes(bookKey);
  const statusText = isWitnessed ? "WITNESSED" : "SEALED";
  const statusClass = isWitnessed ? "status-witnessed" : "status-";

  const lineEl = document.createElement("p");
  container.appendChild(lineEl);

  const prefixText = `► ${bookTitle.padEnd(18)}: [ STATUS `;

  typeWriter(prefixText, lineEl, 0, () => {
    lineEl.innerHTML += `<span class="${statusClass}">${statusText}</span> ]`;
    scrollOverlayToBottom();

    setTimeout(() => {
      typeBookStatusLines(bookKeys, matchedBooks, container, index + 1, onComplete);
    }, 600); // pause between each book status line
  });
}

// ============ BUILD LITURGY / ABSOLUTION ============

function buildLiturgyString(matchedBooks) {
  let selectedPhrases = [];

  // No matches: book of unknown, one absolution
  if (matchedBooks.length === 0) {
    const pool = DivineOS_Library.unknown.absolutions;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  // One book: two absolutions
  if (matchedBooks.length === 1) {
    const pool = DivineOS_Library[matchedBooks[0]].absolutions;

    let first = pool[Math.floor(Math.random() * pool.length)];
    let second = pool[Math.floor(Math.random() * pool.length)];

    // Prevent duplicate phrases
    while (second === first && pool.length > 1) {
      second = pool[Math.floor(Math.random() * pool.length)];
    }

    selectedPhrases.push(first, second);
  } else {
    // Multiple books: one absolution from each
    matchedBooks.forEach((bookKey) => {
      const pool = DivineOS_Library[bookKey].absolutions;
      const phrase = pool[Math.floor(Math.random() * pool.length)];
      selectedPhrases.push(phrase);
    });
  }

  return selectedPhrases.join(" // ");
}

// ============ RITUAL OVERLAY HELPERS ============

function openRitualOverlay() {
  const backdrop = document.getElementById("ritual-overlay");
  const content = document.getElementById("ritual-overlay-content");

  moveInputBackToTerminal(); 

  if (backdrop) backdrop.classList.add("active");
  if (content) content.innerHTML = "";

  return content;
}

function closeRitualOverlay() {
  const backdrop = document.getElementById("ritual-overlay");
  const content = document.getElementById("ritual-overlay-content");

  moveInputBackToTerminal();

  if (backdrop) backdrop.classList.remove("active");
  if (content) content.innerHTML = "";
}

function scrollOverlayToBottom() {
  const overlay = document.getElementById("ritual-overlay-content");
  if (overlay) {
    overlay.scrollTop = overlay.scrollHeight;
  }
}

function moveInputIntoOverlay() {
  const inputLine = document.querySelector(".input-line");
  const overlayContent = document.getElementById("ritual-overlay-content");

  if (inputLine && overlayContent) {
    overlayContent.appendChild(inputLine);
  }
}

function moveInputBackToTerminal() {
  const inputLine = document.querySelector(".input-line");
  const terminalContent = document.querySelector(".terminal-content"); 

  if (inputLine && terminalContent) {
    terminalContent.appendChild(inputLine);
  }
}


// ============ TYPEWRITER EFFECT ============

function typeWriter(text, element, index = 0, callback = null) {
  if (!element) {
    console.error("DIVINE_OS ERROR: Target element for typeWriter not found.");
    return;
  }

  if (index < text.length) {
    element.textContent += text.charAt(index);
    scrollOverlayToBottom();

    setTimeout(() => {
      typeWriter(text, element, index + 1, callback);
    }, 35);
  } else if (callback) {
    callback();
  }
}

// ============ ENDING / TERMINATION ============


function renderEndingChoices() {
  const overlayContent = document.getElementById("ritual-overlay-content");
  overlayContent.innerHTML = `<div id="ending-output"></div>`;

  const outputTarget = document.getElementById("ending-output");

  const endingText = `
☩ END OF ABSOLUTION ☩

THE ARCHIVE HAS RECEIVED YOUR CONFESSION.

THE NEW CANON HAS RECORDED YOUR TRANSMISSION.
  `.trim();

  typeWriter(endingText, outputTarget, 0, () => {
    setTimeout(() => {
      outputTarget.innerHTML += `
        <br>
        <p>[1] REBOOT TO CONFESS AGAIN</p>
        <p>[2] TERMINATE DIVINE_OS</p>
        <br>
        <p>ENTER SELECTION</p>
      `;
      scrollOverlayToBottom();

      sessionState = "ENDLOOP";
      isProcessing = false;

      const inputLine = document.querySelector(".input-line");
      if (inputLine) {
        inputLine.style.display = "";
        moveInputIntoOverlay();
      }

      const inputField = document.getElementById("terminal-input");
      if (inputField) {
        inputField.focus();
      }
    }, 1500);
  });
}

function terminateTerminal(inputLine) {
  console.log("DIVINE_OS TERMINATING...");

  sessionState = "TERMINATED";
  isProcessing = true;

  if (inputLine) {
    inputLine.style.display = "none";
  }

  const overlayContent = document.getElementById("ritual-overlay-content");
  overlayContent.innerHTML = `<div id="termination-output"></div>`;

  const outputTarget = document.getElementById("termination-output");

  const terminationText = `
[ CONFESSION OVER ]

[ CLEARING ARCHIVES... ]

[ CLOSING BOOKS... ]

☩ DIVINE_OS CONFESSION PROCESSES TERMINATED ☩

THE ARCHIVE HAS CLOSED.

YOUR CONFESSION HAS BEEN WITNESSED BY THE DIVINE VIA THE NEW CANON.

THE CONFESSION TERMINAL WILL ALWAYS BE AVAILABLE TO YOU.

SHALL YOU WISH TO RETURN, REBOOT THE TERMINAL.

THE TERMINAL WILL ALWAYS BE ONLINE, READY FOR YOUR CONFESSION, YOUR TRANSMISSION, YOUR SACRED TRUTH OF SELF.

[ TERMINAL HALTED SAFELY... ]

☩ GOODBYE, USER ☩
  `.trim();

  typeWriter(terminationText, outputTarget, 0, () => {
    isProcessing = false;
    console.log("DIVINE_OS TERMINATED SUCCESSFULLY");

    setTimeout(() => {
      location.reload();
    }, 5000);
  });
}

function rebootToWelcome(displayContainer) {
  console.log("DIVINE_OS REBOOTING...");

  isProcessing = false;
  sessionState = "WELCOME";

  closeRitualOverlay();
  moveInputBackToTerminal();
  displayContainer.innerHTML = initialWelcomeHTML;

  const inputLine = document.querySelector(".input-line");
  if (inputLine) {
    inputLine.style.display = "";
  }

  const inputField = document.getElementById("terminal-input");
  if (inputField) {
    inputField.focus();
  }
}

// ============ /read COMMAND ============

function executeReadCommand(query, inputLine) {
  isProcessing = true;
  sessionState = "READING";

  if (inputLine) {
    inputLine.style.display = "none";
  }

  const normalized = query
    .toLowerCase()
    .replace(/^book of\s+/, "")
    .trim();

  const bookKeys = ["flesh", "loss", "love", "coven", "sanctuary"];
  const matchedKey = bookKeys.find((key) => key === normalized);

  if (!matchedKey) {
    const overlayContent = openRitualOverlay();
    overlayContent.innerHTML = `
      <p class="error-msg">
        ☩ ERROR: NO SUCH BOOK EXISTS IN THIS ARCHIVE. ☩
      </p>
    `;

    setTimeout(() => {
      closeRitualOverlay();
      isProcessing = false;
      sessionState = "WELCOME";

      if (inputLine) {
        inputLine.style.display = "";
      }
    }, 2000);

    return;
  }

  const book = DivineOS_Library[matchedKey];
  const overlayContent = openRitualOverlay();
  const outputTarget = document.createElement("div");
  overlayContent.appendChild(outputTarget);

  const readText = `☩ ${book.title} ☩\n\n${book.description}`;

  typeWriter(readText, outputTarget, 0, () => {
    setTimeout(() => {
      outputTarget.innerHTML += `

<p>[ TYPE /reboot OR ANOTHER COMMAND TO CONTINUE ]</p>`;
      scrollOverlayToBottom();

      isProcessing = false;
      sessionState = "WELCOME";

      if (inputLine) {
        inputLine.style.display = "";
        moveInputIntoOverlay();
      }

      const inputField = document.getElementById("terminal-input");
      if (inputField) {
        inputField.focus();
      }
    }, 800);
  });
}

// ============ /info COMMAND ============

function displayInfoDirectory(container) {
  container.innerHTML = `
    <div class="diagnostic-log">
      <p>[ CREATOR ARCHIVAL DATA ]</p>
      <div class="log-lines">
        <p>► VESSEL      : LEVIATHAN SHOATES </p>
        <p>► PROJECT     : DIVINE_OS | QUEER CONFESSIONAL TERMINAL  2026</p>
        <p>► STATEMENT   : THIS ARCHIVE EXISTS TO /CONFESS. TO REVEAL. TO RECLAIM.</p>
        <p>► GREATER WORK: LEVIATHANART.COM</p>
        <p>► WEB SIGNAL  : @C4RDFATE</p>
        <p>THIS EXPERIENCE DOES NOT SAVE YOUR DATA IN ANY DATABASE OR SERVER.</p>
      </div>
    </div>
  `;
}
