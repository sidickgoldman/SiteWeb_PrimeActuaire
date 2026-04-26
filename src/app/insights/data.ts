export interface Article {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "garantie-appel-perte-silencieuse",
    tag: "Tarification",
    title: "Il a signé la santé comme produit d'appel. Trois ans plus tard, le S/P était à 124 %.",
    excerpt:
      "Un compte gagné, un commercial satisfait, un objectif couché dans le rapport. Personne ne parle de ce qui arrive ensuite. La santé ne se rattrape pas — elle dérive.",
    date: "2026-04-26",
    readingTime: "5 min",
    content: [
      "Un compte gagné. Un commercial satisfait. Un objectif trimestriel coché. Personne ne parle des trois années suivantes.",
      "C'est le scénario classique. Pour entrer chez un client multi-lignes — auto, incendie, transport — la santé collective devient la porte d'entrée. Le prix casse. Le compte se signe. Et le problème, lui, commence.",
      "La santé ne se rattrape pas. Elle dérive. Les premières années, le S/P semble sous contrôle. Puis l'inflation médicale s'installe. La fréquence augmente. La consommation par acte grimpe. Et la marge qui n'existait pas au départ devient un déficit structurel.",
      "Prenons les chiffres. Sur un groupe de 400 adhérents, une remise initiale de 10 % représente un manque à gagner considérable sur la durée du contrat. Ce n'est pas une marge sacrifiée. C'est une perte programmée.",
      "Année 1 : le S/P tient. Année 2 : les premiers signaux apparaissent — fréquence en hausse, coûts moyens en progression. Année 3 : le rattrapage tarifaire s'impose. Mais commercialement, il est presque impossible à appliquer. Le client refuse. Le compte se renouvelle à perte, ou se perd.",
      "Une garantie d'appel mal calibrée n'est pas une stratégie commerciale. C'est une dépense différée. Et plus on attend, plus la correction devient coûteuse.",
      "Gagner un compte, ce n'est pas toujours créer de la valeur. Parfois, c'est seulement reporter une perte.",
    ],
  },
  {
    slug: "trois-questions-avant-valider-tarif",
    tag: "Tarification",
    title: "Avant de valider un tarif santé, il y a trois questions à poser. La plupart restent sans réponse.",
    excerpt:
      "Un tarif qui tient en moyenne ne suffit pas. Si 30 scénarios sur 100 mènent au déficit, la prime est fragile. La moyenne rassure. La distribution révèle.",
    date: "2026-04-20",
    readingTime: "4 min",
    content: [
      "Chaque tarif santé collective valide une décision. Une décision qui engage l'assureur sur 12 mois, souvent davantage. Et pourtant, la plupart de ces décisions sont prises sans réponse à trois questions fondamentales.",
      "Première question : quel est le taux de couverture de cette prime sous stress ?",
      "Un tarif qui couvre en moyenne ne suffit pas. L'enjeu, c'est la distribution des scénarios. Si 30 cas sur 100 mènent au déficit, la prime est fragile — même si sa valeur centrale est positive. La moyenne rassure. La distribution, elle, révèle.",
      "Deuxième question : quelle marge reste-t-il après concession commerciale ?",
      "Le commercial cède 10 %. Le courtier demande encore 5 %. Personne ne chiffre l'impact de ces 15 % sur le risque de perte finale. Le tarif technique et le tarif commercial ne sont pas le même document — mais ils devraient se parler.",
      "Troisième question : à partir de quel niveau de rabais le groupe devient-il structurellement déficitaire ?",
      "C'est la question la plus utile. Et c'est systématiquement celle qu'on ne pose pas. Connaître son point de bascule, c'est négocier avec une limite — pas avec une intuition.",
      "Si votre processus de tarification ne répond pas à ces trois questions, vous n'avez pas tarifé. Vous avez estimé.",
    ],
  },
  {
    slug: "sante-porte-entree-boulet-portefeuille",
    tag: "Gouvernance",
    title: "La santé collective : porte d'entrée hier, boulet de portefeuille aujourd'hui.",
    excerpt:
      "On cassait le prix pour décrocher le compte. On espérait se rattraper ailleurs. Ce raisonnement tenait quand la santé pesait peu. Il ne tient plus quand elle représente 20 à 30 % du portefeuille.",
    date: "2026-04-13",
    readingTime: "4 min",
    content: [
      "Il y a dix ans, la stratégie fonctionnait. On cassait le prix sur la santé pour entrer chez un client. On se rattrapait sur les autres lignes. Le mécanisme semblait acceptable, parce que la santé pesait peu dans le portefeuille.",
      "Ce n'est plus le cas.",
      "En zone CIMA, la branche santé collective a pris du poids. Elle représente aujourd'hui 20 à 30 % du portefeuille de certains assureurs. Ce n'est plus une garantie d'appel. C'est une ligne structurelle. Et la traiter comme si elle l'était encore, c'est accepter une perte programmée.",
      "Le raisonnement 'on se rattrapera ailleurs' repose sur une hypothèse : que les autres lignes compensent. Mais les autres lignes ont aussi leurs pressions. L'auto dérive. L'incendie résiste moins. La compensation espérée n'arrive jamais.",
      "Utiliser la santé comme variable d'ajustement commercial, c'est laisser le marché fixer votre prix. C'est le commercial qui décide de la marge — pas l'actuaire.",
      "La conséquence est mécanique. Le portefeuille santé dégrade son S/P. Les renouvellements imposent des hausses difficiles à faire passer. Certains comptes se perdent au moment précis où ils auraient dû devenir rentables.",
      "La santé collective était une porte d'entrée. Pour beaucoup, elle est devenue un boulet de portefeuille. La distinction entre les deux ne tient pas à la branche. Elle tient à la manière dont on l'a tarifée dès le début.",
    ],
  },
];
