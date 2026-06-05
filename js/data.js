// =============================================================
// Kermesse 2026 — Données des indices
// =============================================================

const INDICES = {
  maternelle: [
    { num: 1, title: 'Cherche et trouve', emoji: '', shortDesc: 'Patientez...', fullDesc: 'Trouve dehors quelque chose de vert, quelque chose qui vole et quelque chose qui pousse dans la terre.', duration: '', age: '' },
    {
      num: 2,
      title: 'Écoute la chanson',
      emoji: '🐞',
      shortDesc: 'Écoute la chanson',
      fullDesc: 'De quel animal parle-t-on ?',
      duration: '',
      age: '',
      type: 'audio',
      audioSrc: 'audio/coccinelle-demoiselle.mp3',
    },
    {
      num: 3,
      title: 'Devinette',
      shortDesc: 'Qui suis-je ?',
      fullDesc: 'Je suis un insecte, je vole, j\'ai 2 couleurs, j\'ai une reine, je butine, je vis dans une ruche.\n\nQui suis-je ?',
      duration: '',
      age: ''
    },
    {
      num: 4,
      title: 'Code animaux',
      emoji: '🌿',
      shortDesc: 'Décode les animaux',
      fullDesc: 'Remplace chaque lettre par un animal, puis décode le message :',
      duration: '',
      age: '',
      type: 'animal-code',
      cipherKey: [
        { letter: 'A', animal: 'Abeille', emoji: '🐝' },
        { letter: 'B', animal: 'Baleine', emoji: '🐳' },
        { letter: 'D', animal: 'Dauphin', emoji: '🐬' },
        { letter: 'E', animal: 'Écureuil', emoji: '🐿️' },
        { letter: 'I', animal: 'Iguane', emoji: '🦎' },
        { letter: 'O', animal: 'Ours', emoji: '🐻' },
        { letter: 'R', animal: 'Renard', emoji: '🦊' },
        { letter: 'S', animal: 'Serpent', emoji: '🐍' },
        { letter: 'T', animal: 'Tortue', emoji: '🐢' },
        { letter: 'V', animal: 'Vache', emoji: '🐄' },
        { letter: 'Y', animal: 'Yak', emoji: '🐂' },
      ],
      encodedMessage: '🐳 🦎 🐻 🐬 🦎 🐄 É 🦊 🐍 🦎 🐢 É',
    },
  ],
  primaire: [
    { num: 1, title: 'Qui suis-je ?', emoji: '', shortDesc: 'Patientez...', fullDesc: 'Tout ce qui est vivant est concerné.', duration: '', age: '' },
    {
      num: 2,
      title: 'La valise impossible',
      emoji: '🧳',
      shortDesc: 'Observe la photo',
      fullDesc: 'Quel est le point commun de presque tous ces objets ?',
      duration: '',
      age: '',
      type: 'image',
      image: 'images/ce878885-c9a3-4c6d-b13a-ce96dd09a160.png',
    },
    {
      num: 3,
      title: 'La recette bizarre',
      emoji: '🧪',
      shortDesc: 'Lire une "recette"',
      fullDesc: 'Quel grand thème mélange tout ça ?',
      duration: '',
      age: '',
      type: 'recipe',
      recipeItems: [
        '2 oiseaux',
        '5 fleurs',
        '1 forêt',
        '100 abeilles',
        'des poissons',
        'un océan',
      ],
    },
    {
      num: 4,
      title: 'Code secret',
      emoji: '🔐',
      shortDesc: 'Décode le message',
      fullDesc: 'Décode ce message pour trouver le mot mystère :',
      duration: '',
      age: '',
      type: 'secret-code',
      codedMessage: '2-9-15-4-9-22-5-18-19-9-20-5',
      cipherHint: 'A=1, B=2, C=3…',
    },
  ],
  college: [
    { num: 1, title: 'Qui suis-je', emoji: '', shortDesc: 'Patientez...', fullDesc: 'Je suis tout ce qui vit sur Terre, du plus petit au plus grand, sans moi aucun équilibre n\'est possible. Qui suis-je ?', duration: '', age: '' },
    {
      num: 2,
      title: 'Le code animal',
      emoji: '🦊',
      shortDesc: 'Associe chaque animal',
      fullDesc: 'Quel point commun ont-ils ?',
      duration: '',
      age: '',
      type: 'game',
      gameItems: [
        { left: 'Abeille', right: 'Pollinisation' },
        { left: 'Ver de terre', right: 'Sol' },
        { left: 'Arbre', right: 'Oxygène' },
        { left: 'Grenouille', right: 'Équilibre' },
      ],
    },
    {
      num: 3,
      title: 'Énigme',
      shortDesc: 'Résous l\'énigme',
      fullDesc: `Plus il y a d'espèces différentes,\nPlus je suis riche.\n\nJe ne parle pas d'argent!`,
      duration: '',
      age: ''
    },
    {
      num: 4,
      title: 'Étymologie',
      emoji: '🧩',
      shortDesc: 'Trouve le mot',
      fullDesc: `Je suis un mot-valise né du mariage de la science et de la nature.

• Mon préfixe vient du grec ancien « bio » qui signifie « la vie ».
• Mon suffixe désigne la pluralité, le fait que nous soyons tous différents et multiples.

Je désigne le tissu vivant de notre planète, qui va de la plus petite bactérie invisible à la majestueuse baleine bleue. Aujourd'hui, je suis fragile et la kermesse me fête pour apprendre à me protéger.

Qui suis-je ?`,
      duration: '',
      age: '',
    },
  ],
};
