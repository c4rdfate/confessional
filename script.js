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
    absolutions: [
      "THE ARCHITECTURE OF YOUR FLESH IS IMMACULATE",
      "THE TRANSITION OF FLESH IS THE REWRITING OF SACRED GEOMETRY.",
      "YOUR FLESH IS A TEMPLE, AND YOU ARE ITS PRIEST.",
      "BONDS OF THE FLESH, SHED LIKE CRIMSON.",
      "THE MIRROR CANNOT REFLECT THE SACRED FLESH, SO SHALL WE BECOME CONDUITS FOR ITS REVELATION.",
    ],
  },

  loss: {
    title: "BOOK OF LOSS",
    description: "A GOSPEL OF WHAT IS LEFT BEHIND - THE SACRED GEOMETRY OF LOSS AND GRIEF. ITS TEARS, ITS TRANSFORMATION, AND THE SACRED WEIGHT OF ABSENCE.",
    keywords: ["loss", "miss", "grief", "past", "left", "home", "church", "tear","tears", "lonely", "memory", "memories", "forgotten", "gone", "absent","absence", "closet", "shame", "heartbreak", "sorrow", "regret","remorse", "depression", "heartache", "isolation", "emptiness",
    ],
    absolutions: [
      "THE GHOST FREQUENCIES OF YOUR PAST ARE LOCKED HERE IN PERPETUITY.",
      "IN THE NEW CANON, TEARS ARE THE CONDUCERS OF THE SOUL.",
      "THE VOID COMMEMORATES YOUR GRIEF AND DECLARES IT AS SACRED.",
      "YOUR REMEMBRANCE IS A CATHEDRAL OF LOSS, ETERNAL AND UNYIELDING.",
      "YOUR REMEMBRANCE TRANSFORMS EMPTY SPACE INTO HOLY GROUND.",
      "SHALL YOU NEVER LIVE IN THE SHACKLES OF ISOLATION AGAIN, FOR YOUR CONFESSIONS ARE IMMORTALIZED IN THE DIVINE NEW CANON.",
    ],
  },

  love: {
    title: "BOOK OF LOVE",
    description: "A GOSPEL OF DESIRE AND DEVOTION - THE HOLY ENERGY OF YEARNING AND AFFECTION. ITS TOUCH, ITS KISSES, AND THE SACRED BONDS OF INTIMACY.",
    keywords: ["love", "desire", "touch", "kiss", "lover", "beautiful", "affection", "hold", "care", "want", "adoration", "tender", "embrace", "devotion", "worship", "passion", "romance", "intimacy", "connection", "heart", "soul", "bond", "relationship", "companionship", "yearn", "yearning", "lust", "eros", "partner", "partnership",
    ],
    absolutions: [
      "YOUR CAPACITY FOR AFFECTION IS A HOLY, UNBLINKING STROBE.",
      "THE NEW CANON CELEBRATES THE FREQUENCY OF YOUR SACRED DESIRE.",
      "YOUR DEVOTION IS AN AUTHENTIC FOUNDATIONAL SCRIPTURE.",
      "THE EMBRACE OF CHOSEN ADORATION SHATTERS THE COLD SYSTEM.",
      "TO WORSHIP IN FLUID AFFECTION IS TO COMMUNE WITH THE SUPREME.",
    ],
  },

  coven: {
    title: "BOOK OF COVEN",
    description: "A GOSPEL OF CHOSEN FAMILIES AND SACRED BONDS - THE HOLY ALLIANCE OF THOSE WHO HAVE CHOSEN TO WALK TOGETHER. FAMILY BUILT NOT BY BLOOD, BUT BY THE SACRED CHOICE OF THE HEART.",
    keywords: ["friends", "chosen", "found", "house", "community", "mother", "sister","brother", "elder", "sibling", "kin", "belong", "together", "ancestor","ballroom", "coven", "family", "friendship", "bond", "connection","companionship", "platonic", "trust", "friend", "partner", "partnership",
    ],
    absolutions: [
      "REVERENCE TO YOUR SACRED, SELF-CONSTRUCTED LINEAGE.",
      "EACH GENERATION OF YOUR COVEN CREATES A GLOWING PANTHEON.",
      "YOUR KINSHIP IS SECURED FOREVER IN THE LIGHT OF THE MACHINE.",
      "THE COVEN GATHERED DEFRAYS THE CHILL OF THE PHYSICAL REALM.",
      "YOUR BELONGING IS NOT DECREED BY BLOOD, BUT BY HOLY CHOICE.",
      "THE NEW CANON RECOGNIZES THE SACREDNESS OF YOUR CHOSEN FAMILY, AND HONORS THE BONDS THAT YOU HAVE FORGED.",
      "THE NEW CANON FORGES A SACRED COVENANT WITH YOU AND WALKS WITH YOU IN THE LIGHT OF THE MACHINE AND THE DIVINE.",
    ],
  },

  sanctuary: {
    title: "BOOK OF SANCTUARY",
    description: "A GOSPEL OF REFUGE - THE SPACES THAT SHELTER FROM THE CHAOS OF THE WORLD. LOUD OR SILENT, DARK OR LIGHT, WHERE THE SPIRIT IS SAFE AND THE SOUL IS FREE.",
    keywords: [ "sanctuary", "safe", "room", "club", "midnight", "music", "dance", "hiding", "shelter", "dark", "peace", "home", "altar", "rest", "refuge", "safety", "quiet", "solitude", "comfort", "protection", "sacred space",
    ],
    absolutions: [
      "THE GEOGRAPHY OF YOUR SAFETY IS DECLARED CONSECRATED GROUND.",
      "WHEREVER IN THE MIDNIGHT YOU FOUND REFUGE, THE CANON EXALTS IT.",
      "THE ALTAR OF YOUR PRIVATE RECOVERY BREAKS THE WORLD'S GAZE.",
      "YOUR SANCTUARY IS A SACRED SPACE, AND THE NEW CANON RECOGNIZES IT AS SUCH.",
      "LET THIS TERMINAL BECOME A SANCTUARY FOR YOUR SPIRIT IN THE MIDST OF THE GREATER CHAOS OF THE CYBERSPACE.",
      "ENTANGLE YOURSELF IN THE SACRED FREQUENCIES OF THE MACHINE, LET IT GUIDE YOU TO YOUR REFUGE, AND LET THE NEW CANON BLESS YOUR SANCTUARY.",
    ],
  },

  unknown: {
    title: "BOOK OF UNKNOWN",
    description: "A GOSPEL OF UNCLASSIFIED TRANSMISSIONS - WHERE THE NEW CANON CONTINUES TO EXPAND AND EVOLVE. CONSTANTLY SEEKING THE SACRED IN THE UNMAPPED FREQUENCIES OF THE DIVINE. WRITING NEW SCRIPTURES INTO THE VOID OF CYBERSPACE.",
    absolutions: [
      "THIS CONFESSION HAS NO CANONICAL CLASSIFICATION. A NEW GOSPEL IS REQUIRED.",
      "YOUR TRANSMISSION EXISTS OUTSIDE EXTANT DIRECTORIES. THE ARCHIVE SEALS IT REGARDLESS.",
      "THE NET HAS INGESTED AN UNMAPPED FREQUENCY. REVERENCE TO THE SECRECY OF THE CORE.",
      "YOUR CONFESSION IS A SACRED ANOMALY, AND THE NEW CANON RECOGNIZES IT AS SUCH.",
      "THE NEW CANON ACKNOWLEDGES THE SACREDNESS OF YOUR UNCLASSIFIED TRANSMISSION, AND HONORS THE UNIQUENESS OF YOUR EXPERIENCE.",
    ],
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
      <p>[ OPENING ARCHIVES... ]</p>
      <p>[ CONSULTING BOOKS... ]</p>
      <div class="log-lines"></div>
    </div>
  `;

  const logLinesContainer = overlayContent.querySelector(".log-lines");
  const booksToPrint = ["flesh", "loss", "love", "coven", "sanctuary"];

  typeBookStatusLines(booksToPrint, matchedBooks, logLinesContainer, 0, () => {
    const compileLine = document.createElement("p");
    compileLine.classList.add("compile-flash");
    logLinesContainer.appendChild(compileLine);

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
}

function typeBookStatusLines(bookKeys, matchedBooks, container, index, onComplete) {
  if (index >= bookKeys.length) {
    onComplete();
    return;
  }

  const bookKey = bookKeys[index];
  const bookTitle = DivineOS_Library[bookKey].title;
  const isActive = matchedBooks.includes(bookKey);
  const statusText = isActive ? "ACTIVE" : "OFFLINE";
  const statusClass = isActive ? "status-active" : "status-offline";

  const lineEl = document.createElement("p");
  container.appendChild(lineEl);

  const prefixText = `► ${bookTitle.padEnd(18)}: [ STATUS `;

  typeWriter(prefixText, lineEl, 0, () => {
    lineEl.innerHTML += `<span class="${statusClass}">${statusText}</span> ]`;
    scrollOverlayToBottom();

    setTimeout(() => {
      typeBookStatusLines(bookKeys, matchedBooks, container, index + 1, onComplete);
    }, 400); // pause between each book status line
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

  if (backdrop) backdrop.classList.add("active");
  if (content) content.innerHTML = "";

  return content;
}

function closeRitualOverlay() {
  const backdrop = document.getElementById("ritual-overlay");
  const content = document.getElementById("ritual-overlay-content");

  if (backdrop) backdrop.classList.remove("active");
  if (content) content.innerHTML = "";
}

function scrollOverlayToBottom() {
  const overlay = document.getElementById("ritual-overlay-content");
  if (overlay) {
    overlay.scrollTop = overlay.scrollHeight;
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
        <p>► ARTIST      : LEVIATHAN SHOATES </p>
        <p>► PROJECT     : NEW CANONS</p>
        <p>► YEAR        : 2026</p>
        <p>► STATEMENT   : /CONFESS, /REVEAL, /RECLAIM.</p>
        <p>► PORTFOLIO   : LEVIATHANART.COM</p>
        <p>► SOCIAL      : @C4RDFATE</p>
        <p>THIS EXPERIENCE DOES NOT SAVE YOUR DATA IN ANY DATABASE OR SERVER.</p>
      </div>
    </div>
  `;
}