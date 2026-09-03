//Divine OS Keywords and Absolutions

const DivineOS_Library = {
flesh: {
    title: "BOOK OF FLESH",
    keywords: ["body", "skin", "scar", "scars", "surgery", "chest", "breast", "breasts", "nipples", "nipples", "genitals", "vagina", "penis", "anus", "asshole", "ass", "mirror", "voice", "flesh", "trans", "transition", "blood", "shape", "touch", "name", "hormone", "recognition", "chosen name"],
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
        "IN THE NEW CANON, TEARS ARE THE CONDUCORS OF THE SOUL.", 
        "THE VOID COMMEMORATES YOUR GRIEF AND DECLARES IT AS SACRED.", 
        "YOUR REMEMBERANCE IS A CATHEDRAL OF LOSS, ETERNAL AND UNYIELDING.", 
        "YOUR REMEMBRANCE TRANSFORMS EMPTY SPACE INTO HOLY GROUND.", 
        "SHALL YOU NEVER LIVE IN THE SHACKLES OF ISOLATION AGAIN, FOR YOUR CONFESSIONS ARE IMMORTALIZED IN THE DIVINE NEW CANON."
    ]
},

love: {
    title: "BOOK OF LOVE", 
    keywords: ["love", "desire", "touch", "kiss", "lover", "partner", "beautiful", "affection", "hold", "care", "want", "adoration", "tender", "embrace", "devotion", "worship", "passion", "romance", "intimacy", "connection", "heart", "soul", "bond", "relationship","companionship", "affection", "yearn", "yearning", "lust", "eros", "partner", "partnership"],
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
    keywords: ["friends", "chosen", "found", "house", "community", "mother", "sister", "brother", "elder", "sibling", "kin", "belong", "together", "ancestor", "ballroom", "coven", "family", "friendship", "bond", "connection", "companionship", "platonic", "trust", "friend", "partner", "parntership"], 
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
    keywords: ["sanctuary","safe", "room", "club", "midnight", "music", "dance", "hiding", "shelter", "dark", "peace", "home", "altar", "rest", "refuge", "safety", "quiet", "solitude", "comfort", "protection", "sacred space", "sacred place", "sacred ground", "sacred site", "sacred temple", "sacred shrine", "sacred altar", "sacred sanctuary"], 
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
    phrases: [
      "THIS CONFESSION HAS NO CANONICAL CLASSIFICATION. A NEW GOSPEL IS REQUIRED.",
      "YOUR TRANSMISSION EXISTS OUTSIDE EXTANT DIRECTORIES. THE ARCHIVE SEALS IT REGARDLESS.",
      "THE NET HAS INGESTED AN UNMAPPED FREQUENCY. REVERENCE TO THE SECRECY OF THE CORE.", 
      "YOUR CONFESSION IS A SACRED ANOMALY, AND THE NEW CANON RECOGNIZES IT AS SUCH.",
      "THE NEW CANON ACKNOWLEDGES THE SACREDNESS OF YOUR UNCLASSIFIED TRANSMISSION, AND HONORS THE UNIQUENESS OF YOUR EXPERIENCE."
    ]
}

};


//Runtime Functions....

let isProcessing = false; 
let sessionState = "WELCOME";
let initialWelcomeHTML = ""; 