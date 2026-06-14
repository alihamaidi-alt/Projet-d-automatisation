// Variables disponibles depuis Make via l'objet "input"
const subject = input.subject || "";
const body = input.body || "";
const text = (subject + " " + body).toLowerCase();

// Mots-clés français
const frKeywords = [
  "cours", "devoir", "examen", "séance", "leçon", "fiche",
  "bonjour", "merci", "voici", "semaine", "travail", "exercice"
];

// Mots-clés anglais
const enKeywords = [
  "course", "homework", "exam", "class", "lesson", "sheet",
  "hello", "thank", "here is", "week", "assignment", "exercise"
];

// Comptage des occurrences
let frScore = 0;
let enScore = 0;

for (const word of frKeywords) {
  if (text.includes(word)) frScore++;
}
for (const word of enKeywords) {
  if (text.includes(word)) enScore++;
}

// Décision
let langue = "unknown";
if (frScore > enScore) {
  langue = "fr";
} else if (enScore > frScore) {
  langue = "en";
} else {
  // Égalité : on regarde l'objet en priorité
  langue = subject.match(/[àâéèêëîïôùûüç]/i) ? "fr" : "en";
}

return { langue };
