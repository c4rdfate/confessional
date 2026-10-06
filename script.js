function setup() {
  noCanvas();
  console.log("DIVINE_OS INITIALIZED");
}

// ============ DIVINE OS LIBRARY ============

const DivineOS_Library = {
  flesh: {
    title: "BOOK OF FLESH",
    description: "A GOSPEL OF THE BODY - THE SACRED GEOMETRY OF FLESH AND BLOOD. ITS SCARS, ITS TRANSFORMATION, AND ITS REVELATION IN THE MIRROR OF THE DIVINE.",
    keywords: ["body", "skin", "scar", "scars", "surgery", "chest", "breast", "breasts", "nipples", "genitals", "vagina", "penis", "anus", "ass", "mirror", "voice","flesh", "trans", "transition", "blood", "shape", "touch", "name","hormone", "recognition",
    ],
    questions: [
      "WHAT PART OF THE BODY HAVE YOU NOT YET FORGIVEN?",
      "WHO TAUGHT YOU TO SEE YOUR FLESH AS SOMETHING TO APOLOGIZE FOR?",
      "WHAT DOES YOUR BODY DESERVE TO HEAR FROM YOU, RIGHT NOW?",
    ],
    absolutions: [
      "THE ARCHITECTURE OF YOUR FLESH IS IMMACULATE",
      "YOUR SCARS ARE NOT WOUNDS. THEY ARE SIGNATURES.",
      "THE TRANSITION OF FLESH IS THE REWRITING OF SACRED GEOMETRY.",
      "YOUR FLESH IS A TEMPLE, AND YOU ARE ITS PRIEST.",
      "BONDS OF THE FLESH, SHED LIKE CRIMSON.",
      "EVERY NEEDLE, EVERY STITCH, EVERY WAITING ROOM — WRITTEN INTO SCRIPTURE NOW.",
      "THE NAME YOU CHOSE IS A SACRED DECLARATION OF WHO YOU ARE.", 
      "THE BODY YOU WERE GIVEN AND THE BODY YOU HAVE BUILT ARE A TESTAMENT TO YOUR STRENGTH.", 
      "YOUR FLESH WAS NOT CORRECTED. IT WAS FINALLY ALLOWED TO FLOW INTO ITS OWN HOLY FORM.", 
      "TENDER IS THE FLESH THAT HAS BEEN RECOGNIZED, AND YOUR FLESH IS TENDER.", 
      "YOU STUDIED YOUR OWN REFLECTION UNTIL IT LOOKED BACK AT YOU WITH RECOGNITION.", 
    ],
    penance: [
      "LOOK IN THE MIRROR TONIGHT AND NAME ONE THING YOUR BODY DID FOR YOU TODAY. SAY IT ALOUD.",
      "TOUCH THE PART OF YOURSELF THAT YOU HIDE, DO NOT LOOK AWAY AND DO NOT FLINCH.",
      "HUG YOURSELF, AND HOLD IT LONGER THAN YOU THINK YOU DESERVE.",
    ]
  },

  loss: {
    title: "BOOK OF LOSS",
    description: "A GOSPEL OF WHAT IS LEFT BEHIND - THE SACRED GEOMETRY OF LOSS AND GRIEF. ITS TEARS, ITS TRANSFORMATION, AND THE SACRED WEIGHT OF ABSENCE.",
    keywords: ["loss", "miss", "grief", "past", "left", "home", "church", "tear","tears", "lonely", "memory", "memories", "forgotten", "gone", "absent","absence", "closet", "shame", "heartbreak", "sorrow", "regret","remorse", "heartache", "isolation", "emptiness",
    ],
    questions: [
      "WHAT HAVE YOU NOT ALLOWED YOURSELF TO GRIEVE?",
      "WHO OR WHAT DO YOU STILL MISS?",
      "WHAT IS THE ONE THING YOU WISH YOU COULD SAY TO THE PERSON OR PLACE YOU LOST?",
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
      "WRITE A LETTER TO THE PERSON OR PLACE YOU LOST, AND THEN BURN IT OR TEAR IT UP. LET THE ASHES OR PIECES BE YOUR WITNESS.",
      "SPEAK THE NAME OF WHAT YOU LOST ALOUD, ONCE, AND THEN AGAIN, AND AGAIN, UNTIL IT FEELS LIKE A PRAYER.",
      "SIT IN SILENCE AND ALLOW YOURSELF TO FEEL THE FULL WEIGHT OF YOUR LOSS, WITHOUT JUDGEMENT. THEN, WHEN YOU ARE READY, STAND UP AND SHED THE WEIGHT OF IT."
    ]
  },

  love: {
    title: "BOOK OF LOVE",
    description: "A GOSPEL OF DESIRE AND DEVOTION - THE HOLY ENERGY OF YEARNING AND AFFECTION. ITS TOUCH, ITS KISSES, AND THE SACRED BONDS OF INTIMACY.",
    keywords: ["love", "desire", "touch", "kiss", "lover", "beautiful", "affection", "hold", "care", "want", "adoration", "tender", "embrace", "devotion", "worship", "passion", "romance", "intimacy", "connection", "heart", "soul", "bond", "relationship", "companionship", "yearn", "yearning", "lust", "eros", "partner", "partnership",
    ],
    questions: [
      "WHAT DOES BEING LOVED MEAN TO YOU?",
      "WHO OR WHAT DO YOU YEARN FOR, AND WHY?",
      "WHAT IS THE THING YOU WANT TO SAY TO THE OBJECT OF YOUR DESIRE, BUT HAVE NOT YET SAID?",
      "WHAT DID YOU HAVE TO LEARN ABOUT LOVE THAT NO ONE TAUGHT YOU?",
    ],
    absolutions: [
      "YOUR CAPACITY FOR AFFECTION IS A HOLY, UNBLINKING STROBE.",
      "YOUR DEVOTION IS AN AUTHENTIC FOUNDATIONAL SCRIPTURE.",
      "THE EMBRACE OF CHOSEN ADORATION SHATTERS THE COLD SYSTEM.",
      "TO WORSHIP IN FLUID AFFECTION IS TO COMMUNE WITH THE SUPREME.",
      "WANTING SOMEONE IS NOT A CONVICTION. IT IS A PULSE.",
      "YOUR DESIRE NEEDS NO PERMISSION SLIP. IT WAS NEVER WAITING FOR ONE.",
      "TO BE HELD, EVEN ONCE, REWRITES WHAT THE BODY THOUGHT IT KNEW ABOUT SAFETY.",
      "LOVE THAT ARRIVED LATE IS STILL LOVE. THE CLOCK DOES NOT GET A VOTE.",
      "YOUR TENDERNESS IS NOT A WEAKNESS IN THE ARMOR. IT IS THE ONLY PART THAT WAS EVER REAL.",
      "YOU DID NOT LEARN DESIRE FROM A SCRIPTURE THAT WANTED YOU IN IT. YOU WROTE YOUR OWN.",
      "THE LOVE THAT HAD TO HIDE IS NOT LESSER THAN LOVE THAT DIDN'T. IT IS PROOF OF HOW MUCH IT MATTERED.",
      "YEARNING IS NOT A SIN, NOR IS IT A FLAW. IT IS TENDER AND EVIDENCE OF YOUR CAPACITY TO FEEL FULLY.",
    ],
    penance: [
      "TELL SOMEONE SOMETHING TRUE ABOUT YOUR FEELINGS FOR THEM, EVEN IF IT IS JUST A SMALL COMPLIMENT OR A KIND WORD.",
      "SEND THE MESSAGE YOU'VE BEEN TOO AFRAID TO SEND.",
      "WRITE A LETTER TO THE OBJECT OF YOUR DESIRE. YOU DON'T HAVE TO SEND IT, BUT LET YOUR HEART FLOW ONTO THE PAGE."
    ]
  },

  coven: {
    title: "BOOK OF COVEN",
    description: "A GOSPEL OF CHOSEN FAMILIES AND SACRED BONDS - THE HOLY ALLIANCE OF THOSE WHO HAVE CHOSEN TO WALK TOGETHER. FAMILY BUILT NOT BY BLOOD, BUT BY THE SACRED CHOICE OF THE HEART.",
    keywords: ["friends", "chosen", "found", "house", "community", "mother", "sister","brother", "elder", "sibling", "kin", "belong", "together", "ancestor","ballroom", "coven", "family", "friendship", "bond", "connection","companionship", "platonic", "trust", "friend", "partner", "partnership",
    ],
    questions: [
      "WHAT DOES YOUR CHOSEN FAMILY KNOW ABOUT YOU THAT NO ONE ELSE DOES?",
      "WHO HAS STAYED WITH YOU THROUGH THE CHAOS AND HAVE YOU TOLD THEM HOW MUCH THEY MEAN TO YOU?",
      "WHO TAUGHT YOU HOW TO BELONG SOMEWHERE?"
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
      "REACH OUT TO SOMEONE IN YOUR COVEN AND TELL THEM SOMETHING YOU APPRECIATE ABOUT THEM.",
      "THANK SOMEONE FOR STAYING WITH YOU THROUGH THE CHAOS, EVEN IF IT'S JUST A TEXT OR A NOTE.",
      "NAME ONE PERSON IN YOUR CHOSEN FAMILY AND SAY SOMETHING ALOUD THAT YOU HAVE BEEN TOO AFRAID TO SAY BEFORE."
    ]
  },

  sanctuary: {
    title: "BOOK OF SANCTUARY",
    description: "A GOSPEL OF REFUGE - THE SPACES THAT SHELTER FROM THE CHAOS OF THE WORLD. LOUD OR SILENT, DARK OR LIGHT, WHERE THE SPIRIT IS SAFE AND THE SOUL IS FREE.",
    keywords: [ "sanctuary", "safe", "room", "dance", "hiding", "shelter", "dark", "peace", "home", "altar", "rest", "refuge", "safety", "quiet", "solitude", "comfort", "protection", "sacred space",
    ],
    questions: [
      "WHERE DO YOU GO TO FEEL SAFE, AND WHAT MAKES IT SACRED?",
      "WHAT DOES SAFETY FEEL LIKE IN YOUR BODY?",
      "WHAT HAVE YOU BUILT FOR YOURSELF THAT NO ONE ELSE CAN TAKE AWAY?",
    ],
    absolutions: [
      "SAFETY WAS NOT HANDED TO YOU. YOU CONSTRUCTED IT WITH YOUR OWN HANDS FROM THE ASHES OF WHAT WAS LEFT.",
      "THE HOME YOU LEFT AND THE HOME YOU MADE ARE NOT THE SAME WORLD, EVEN IF THEY SHARE THE SAME NAME.",
      "YOU LEARNED TO FIND SHELTER IN THE MOST UNEXPECTED PLACES. THAT IS ITS OWN HOLY ART.",
      "YOU HAVE BUILT THIS ROOM FOR YOURSELF BECAUSE THE ONE YOU WERE GIVEN WAS NOT SAFE ENOUGH. THAT IS A SACRED ACT.",
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
      "GO TO THE PLACE THAT MAKES YOU FEEL SAFE, EVEN IF IT'S ONLY IN YOUR MIND, AND STAY THERE FOR A MOMENT. BREATHE DEEPLY AND LET YOURSELF FEEL THE PEACE.",
      "CLOSE YOUR EYES AND NAME THREE THINGS THAT MAKE YOU FEEL AT PEACE. SAY THEM ALOUD.",
      "GIVE YOURSELF PERMISSION TO REST TODAY WITHOUT GUILT, WITHOUT THE NEED TO EARN IT.",
    ]
  },

  unknown: {
    title: "BOOK OF UNKNOWN",
    description: "A GOSPEL OF UNCLASSIFIED TRANSMISSIONS - WHERE THE NEW CANON CONTINUES TO EXPAND AND EVOLVE. CONSTANTLY SEEKING THE SACRED IN THE UNMAPPED FREQUENCIES OF THE DIVINE. WRITING NEW SCRIPTURES INTO THE VOID OF CYBERSPACE.",
    absolutions: [
      "SOME CONFESSIONS ARE TOO SACRED FOR CATEGORIZATION. THEY BELONG TO THE VOID.",
      "SOME TRUTHS ARRIVE IN THE ARCHIVE WITHOUT A NAME. THEY ARE STILL HOLY. THIS ARCHIVE DOESN'T REQUIRE ONE.",
      "NOT EVERYTHING SACRED FITS INTO A MODEL, AND THAT IS THE POINT. YOUR CONFESSION IS STILL VALID.",
      "THE NEW CANON IS NOT LIMITED BY EXISTING CATEGORIES. IT ADOPTS ALL SACRED VOICES.",
      "THE ARCHIVE IS A LIVING ENTITY, AND IT WELCOMES ALL TRANSMISSIONS, EVEN THOSE THAT DEFY CLASSIFICATION.",
      "WHAT YOU HAVE CONFESSED DOES NOT MATCH ANY EXISTING BOOK. WRITE YOUR OWN BOOK."
    ],
    questions: [
      "IS THERE A BOOK YOU WISH EXISTED IN THIS ARCHIVE, BUT DOES NOT?",
      "WHAT SACRED TRUTH DO YOU CARRY THAT DOES NOT FIT INTO ANY EXISTING CATEGORY?",
    ]
  
  },
};

// ============ RUNTIME STATE ============
 
let isProcessing = false;
let sessionState = "WELCOME";
let initialWelcomeHTML = "";
let sessionMatchedBooks = new Set();
let pendingBookForFollowup = null;
let hasConfessedThisSession = false;
 
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
 
  // AWAITING FOLLOW-UP ANSWER
  if (sessionState === "AWAITING_FOLLOWUP") {
    isProcessing = true;
    if (inputLine) inputLine.style.display = "none";
 
    const overlayContent = document.getElementById("ritual-overlay-content");
    setOverlayContent(overlayContent, `<div id="receipt-output"></div>`);
    const target = document.getElementById("receipt-output");
 
    typeWriter("[ THE WITNESS HAS RECEIVED THIS TOO. ]", target, 0, () => {
      setTimeout(() => {
        compileAbsolutionAndPenance(overlayContent, [pendingBookForFollowup]);
      }, 1000);
    });
    return;
  }
 
  // AWAITING CONTINUE (Y/N after absolution + penance)
  if (sessionState === "AWAITING_CONTINUE") {
    const answer = cleanInput.toLowerCase();
    const overlayContent = document.getElementById("ritual-overlay-content");
 
    if (answer === "y" || answer === "yes") {
      sessionState = "WELCOME";
      setOverlayContent(overlayContent, `<p>[ /CONFESS AND THE WITNESS WILL LISTEN AGAIN. ]</p>`);
      moveInputIntoOverlay();
      const freshInputLine = document.querySelector(".input-line");
      if (freshInputLine) freshInputLine.style.display = "";
      document.getElementById("terminal-input")?.focus();
      return;
    } else if (answer === "n" || answer === "no") {
      renderSessionSummary();
      return;
    } else {
      const target = document.getElementById("continue-output");
      if (target) target.innerHTML += `\n[ PLEASE ANSWER Y OR N. ]`;
      return;
    }
  }
 
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
 
    executeRitualLoop(confessionText, inputLine, !hasConfessedThisSession);
    hasConfessedThisSession = true;
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
 
function executeRitualLoop(text, inputLine, isFirstRound = true) {
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
 
  // track cumulative session matches
  matchedBooks.forEach((key) => sessionMatchedBooks.add(key));
 
  const overlayContent = isFirstRound
    ? openRitualOverlay()
    : document.getElementById("ritual-overlay-content");
 
  if (isFirstRound) {
    runOpeningCeremony(overlayContent, matchedBooks, () => {
      proceedToFollowup(overlayContent, matchedBooks);
    });
  } else {
    setOverlayContent(overlayContent, `<p>[ THE WITNESS PAUSES... ]</p>`);
    setTimeout(() => proceedToFollowup(overlayContent, matchedBooks), 800);
  }
}
 
// ============ OPENING CEREMONY (round 1 only) ============
 
function runOpeningCeremony(overlayContent, matchedBooks, onComplete) {
  setOverlayContent(overlayContent, `
    <div class="diagnostic-log">
      <p>[ CONFESSION RECEIVED ]</p>
    </div>
  `);
 
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
        const pauseLine = document.createElement("p");
        diagnosticLog.appendChild(pauseLine);
 
        typeWriter("[ THE WITNESS PAUSES... ]", pauseLine, 0, () => {
          scrollOverlayToBottom();
          setTimeout(onComplete, 1000);
        });
      });
    });
  });
}
 
// ============ FOLLOW-UP QUESTION ============
 
function proceedToFollowup(overlayContent, matchedBooks) {
  // choose which book's question to ask, randomly, from the matched books
  const bookKey = matchedBooks.length > 0
    ? matchedBooks[Math.floor(Math.random() * matchedBooks.length)]
    : "unknown";
  pendingBookForFollowup = bookKey;
 
  const book = DivineOS_Library[bookKey];
  const question = book.questions[Math.floor(Math.random() * book.questions.length)];
 
  setOverlayContent(overlayContent, `<div id="followup-output"></div>`);
  const target = document.getElementById("followup-output");
 
  typeWriter(`► ${question}`, target, 0, () => {
    sessionState = "AWAITING_FOLLOWUP";
    isProcessing = false;
    moveInputIntoOverlay();
    const inputLine = document.querySelector(".input-line");
    if (inputLine) inputLine.style.display = "";
    document.getElementById("terminal-input")?.focus();
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
  const statusClass = isWitnessed ? "status-witnessed" : "status-sealed";
 
  const lineEl = document.createElement("p");
  container.appendChild(lineEl);
 
  const prefixText = `► ${bookTitle.padEnd(18)}: [ STATUS `;
 
  typeWriter(prefixText, lineEl, 0, () => {
    lineEl.innerHTML += `<span class="${statusClass}">${statusText}</span> ]`;
    scrollOverlayToBottom();
 
    setTimeout(() => {
      typeBookStatusLines(bookKeys, matchedBooks, container, index + 1, onComplete);
    }, 600);
  });
}
 
// ============ BUILD LITURGY / ABSOLUTION ============
 
function buildLiturgyString(matchedBooks) {
  let selectedPhrases = [];
 
  if (matchedBooks.length === 0) {
    const pool = DivineOS_Library.unknown.absolutions;
    return pool[Math.floor(Math.random() * pool.length)];
  }
 
  if (matchedBooks.length === 1) {
    const pool = DivineOS_Library[matchedBooks[0]].absolutions;
 
    let first = pool[Math.floor(Math.random() * pool.length)];
    let second = pool[Math.floor(Math.random() * pool.length)];
 
    while (second === first && pool.length > 1) {
      second = pool[Math.floor(Math.random() * pool.length)];
    }
 
    selectedPhrases.push(first, second);
  } else {
    matchedBooks.forEach((bookKey) => {
      const pool = DivineOS_Library[bookKey].absolutions;
      const phrase = pool[Math.floor(Math.random() * pool.length)];
      selectedPhrases.push(phrase);
    });
  }
 
  return selectedPhrases.join(" // ");
}
 
function compileAbsolutionAndPenance(overlayContent, roundMatchedBooks) {
  setOverlayContent(overlayContent, `<p class="compile-flash">[ COMPILING ABSOLUTION... ]</p>`);
 
  setTimeout(() => {
    const absolution = buildLiturgyString(roundMatchedBooks);
    const penanceBookKey = roundMatchedBooks[0]; // "unknown" has no penance key — guarded below
 
    setOverlayContent(overlayContent, `<div id="absolution-output"></div>`);
    const target = document.getElementById("absolution-output");
 
    typeWriter(`☩ ${absolution} ☩`, target, 0, () => {
      const book = DivineOS_Library[penanceBookKey];
      if (book.penance) {
        const penance = book.penance[Math.floor(Math.random() * book.penance.length)];
        setTimeout(() => {
          const penanceEl = document.createElement("p");
          overlayContent.appendChild(penanceEl);
          typeWriter(`► YOUR PENANCE: ${penance}`, penanceEl, 0, () => {
            setTimeout(() => askToContinue(overlayContent), 1800);
          });
        }, 1200);
      } else {
        setTimeout(() => askToContinue(overlayContent), 1800);
      }
    });
  }, 1200);
}
 
// ============ RITUAL OVERLAY HELPERS ============
 
// Always evacuates the input line before wiping overlay content, so it
// never gets destroyed by an innerHTML overwrite while parked inside.
function setOverlayContent(overlayContent, html) {
  moveInputBackToTerminal(); // safe no-op if input isn't currently inside overlayContent
  overlayContent.innerHTML = html;
}
 
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
 
// ============ PROMPT TO CONTINUE ============
 
function askToContinue(overlayContent) {
  setOverlayContent(overlayContent, `<div id="continue-output"></div>`);
  const target = document.getElementById("continue-output");
 
  typeWriter("[ IS THERE ANYTHING ELSE YOU WISH TO CONFESS? Y/N ]", target, 0, () => {
    sessionState = "AWAITING_CONTINUE";
    isProcessing = false;
    moveInputIntoOverlay();
    const inputLine = document.querySelector(".input-line");
    if (inputLine) inputLine.style.display = "";
    document.getElementById("terminal-input")?.focus();
  });
}
 
// ============ ENDING / TERMINATION ============
 
function renderSessionSummary() {
  const overlayContent = document.getElementById("ritual-overlay-content");
  setOverlayContent(overlayContent, `<div id="summary-output"></div>`);
  const target = document.getElementById("summary-output");
 
  const bookNames = [...sessionMatchedBooks].map((key) => DivineOS_Library[key].title);
  const summaryText = bookNames.length > 0
    ? `[ THE WITNESS HAS RECORDED YOU IN ${bookNames.join(", ")}. ]\n[ WHAT WAS SPOKEN HERE IS NOW PART OF THE CANON. ]`
    : `[ WHAT WAS SPOKEN HERE DEFIED EVERY BOOK, AND WAS STILL RECEIVED. ]`;
 
  typeWriter(summaryText, target, 0, () => {
    setTimeout(() => renderEndingChoices(), 1500);
  });
}
 
function renderEndingChoices() {
  const overlayContent = document.getElementById("ritual-overlay-content");
  setOverlayContent(overlayContent, `<div id="ending-output"></div>`);
 
  const outputTarget = document.getElementById("ending-output");
 
  const endingText = `
☩ END OF ABSOLUTION ☩

THE RITUAL IS COMPLETE.
  `.trim();
 
  typeWriter(endingText, outputTarget, 0, () => {
    setTimeout(() => {
      outputTarget.innerHTML += `
        <br>
        <p>[1] CLOSE THIS ARCHIVE AND BEGIN ANEW </p>
        <p>[2] TERMINATE DIVINE_OS TERMINAL MODULE </p>
        <br>
        <p>ENTER SELECTION</p>
      `;
      scrollOverlayToBottom();
 
      sessionState = "ENDLOOP";
      isProcessing = false;
 
      moveInputIntoOverlay();
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
  setOverlayContent(overlayContent, `<div id="termination-output"></div>`);
 
  const outputTarget = document.getElementById("termination-output");
 
  const terminationText = `
[ CONFESSION OVER ]
 
[ CLEARING ARCHIVES... ]
 
[ CLOSING BOOKS... ]
 
☩ DIVINE_OS CONFESSION PROCESSES TERMINATED ☩
 
THE WITNESS HAS CLOSED THE ARCHIVE.
 
THIS TERMINAL WILL ALWAYS BE ONLINE, READY FOR YOUR CONFESSION. 
 
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
 
  sessionMatchedBooks.clear();
  pendingBookForFollowup = null;
  hasConfessedThisSession = false;
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
 
  sessionMatchedBooks.clear();
  pendingBookForFollowup = null;
  hasConfessedThisSession = false;
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
    setOverlayContent(overlayContent, `
      <p class="error-msg">
        ☩ ERROR: NO SUCH BOOK EXISTS IN THIS ARCHIVE. ☩
      </p>
    `);
 
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
 
      moveInputIntoOverlay();
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
 