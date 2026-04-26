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
    title: "Il a signé la santé comme produit d'appel. Trois ans plus tard, le S/P était à 124%.",
    excerpt:
      "Un compte gagné, un commercial fier, un objectif atteint. Le problème commence après. La santé ne se rattrape pas — elle dérive, silencieusement.",
    date: "2026-04-26",
    readingTime: "5 min",
    content: [
      "Il a gagné le compte. Le commercial était fier. À la fin de l'année, le ratio S/P santé était à 124%.",
      "Le mécanisme est connu. Un assureur veut entrer chez un client. Le client a de l'auto, de l'incendie, du transport. La santé collective devient la porte d'entrée. Sur le moment, ça passe. Le compte est signé. L'objectif commercial est atteint. Le problème commence après.",
      "La santé ne se rattrape pas. Elle dérive. Silencieusement.",
      "Prenons un exemple concret. Une remise de 8 à 10% sur un groupe de 400 adhérents ne réduit pas seulement la marge. Elle change la trajectoire du portefeuille.",
      "Année 1 : S/P maîtrisé en apparence. Année 2 : la dérive commence à apparaître — inflation, fréquence, consommation. Année 3 : le rattrapage devient nécessaire. Mais commercialement difficile à appliquer.",
      "Résultat : le portefeuille entre dans une zone où la correction devient plus coûteuse que la décision initiale.",
      "Une garantie d'appel mal calibrée ne se corrige pas au renouvellement. Elle installe un déficit. Et plus on attend, plus il devient structurel.",
      "Gagner un compte n'est pas toujours créer de la valeur. Parfois, c'est simplement reporter une perte.",
      "Si vous avez déjà vu ce scénario, vous savez exactement de quoi je parle.",
    ],
  },
];
