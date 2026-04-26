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
  {
    slug: "trois-questions-avant-valider-tarif",
    tag: "Tarification",
    title: "3 questions que tout Directeur Technique devrait poser avant de valider un tarif. Presque personne ne les pose.",
    excerpt:
      "Un tarif qui couvre en moyenne ne suffit pas. Si 30 scénarios sur 100 mènent au déficit, votre prime est fragile. La moyenne rassure. La distribution révèle la vérité.",
    date: "2026-04-20",
    readingTime: "4 min",
    content: [
      "3 questions que chaque Directeur technique santé devrait poser avant de valider un tarif. Pourtant, presque personne ne les pose.",
      "1 — Quel est le taux de couverture de cette prime sous stress ? Un tarif qui couvre \"en moyenne\" ne suffit pas. Si 30 scénarios sur 100 mènent au déficit, votre prime est fragile. La moyenne rassure. La distribution révèle la vérité.",
      "2 — Quelle marge reste-t-il après concession commerciale ? Le commercial négocie -10%. Le courtier demande -5% de plus. Personne ne chiffre ce que ces -15% font au risque de perte.",
      "3 — À partir de quel rabais le groupe devient-il déficitaire ? C'est la question la plus importante. Et c'est souvent celle qu'on ne pose jamais.",
      "Si votre processus de tarification ne répond pas à ces 3 questions, vous ne tarifez pas. Vous estimez.",
    ],
  },
  {
    slug: "sante-porte-entree-boulet-portefeuille",
    tag: "Gouvernance",
    title: "La santé collective, porte d'entrée hier. Boulet de portefeuille aujourd'hui.",
    excerpt:
      "On casse le prix. On décroche le compte. On espère se rattraper ailleurs. Ce raisonnement fonctionnait quand la santé pesait peu. Il ne tient plus quand elle pèse 20 à 30% du portefeuille.",
    date: "2026-04-13",
    readingTime: "4 min",
    content: [
      "C'est la stratégie la plus utilisée en CIMA. Et c'est en train de devenir le premier problème de portefeuille.",
      "On casse le prix. On décroche le compte. On espère se rattraper ailleurs. Ce raisonnement fonctionnait quand la santé pesait peu. Il ne tient plus quand elle pèse 20 à 30% du portefeuille.",
      "La branche grossit. Compter sur les autres garanties pour compenser vous coûtera cher.",
      "Utiliser la santé comme garantie d'appel, c'est laisser le marché fixer votre prix.",
      "La santé, porte d'entrée hier, devient boulet de portefeuille aujourd'hui. C'est là que la perte commence.",
    ],
  },
];
