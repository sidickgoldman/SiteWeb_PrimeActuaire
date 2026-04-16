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
    slug: "degradation-sante-collective",
    tag: "Gouvernance",
    title: "Pourquoi la santé collective se dégrade avant que les suivis ne l'avouent",
    excerpt:
      "Les tableaux de bord classiques mesurent ce qui est passé. La dérive, elle, est déjà en cours.",
    date: "2026-03-15",
    readingTime: "5 min",
    content: [
      "En assurance santé collective, la dégradation d'un portefeuille ne commence pas le jour où le ratio S/P dépasse 100%. Elle commence bien avant — dans les hypothèses non révisées, les remises accordées sans recalcul, les postes de soins dont personne ne suit l'inflation réelle.",
      "Le problème n'est pas l'absence de données. C'est l'absence de lecture prospective. Les tableaux de bord classiques montrent ce qui s'est passé. Ils ne montrent pas ce qui est en train de se passer.",
      "Un portefeuille peut afficher un S/P de 85% et être en dérive structurelle. Comment ? Parce que l'inflation médicale locale dépasse 8% par an en zone CIMA, parce que la fréquence d'utilisation sur certains postes (pharmacie, hospitalisation) augmente sans que le tarif ne suive.",
      "Le DT qui attend la clôture pour constater le problème a déjà perdu la bataille. Le renouvellement sera une négociation sous pression, pas une décision éclairée.",
      "Ce qu'il faut, c'est un suivi infra-annuel par poste de soins, avec des seuils d'alerte calibrés sur l'historique. Pas un tableau figé — un outil qui signale les dérives dès qu'elles apparaissent.",
      "La gouvernance technique, ce n'est pas produire des chiffres. C'est les lire au bon moment, avec les bonnes hypothèses, pour prendre la bonne décision avant qu'il ne soit trop tard.",
    ],
  },
  {
    slug: "hausse-pas-toujours-solution",
    tag: "Tarification",
    title: "Une hausse n'est pas toujours une solution",
    excerpt:
      "Augmenter la prime sans corriger la cause, c'est repousser la tension au cycle suivant.",
    date: "2026-02-28",
    readingTime: "4 min",
    content: [
      "Le réflexe le plus courant face à un portefeuille déficitaire : augmenter la prime. +15%. +20%. Parfois +30%. Le comité valide. Le commercial négocie. L'assureur respire — pour un an.",
      "Mais la hausse ne corrige rien si la cause de la dérive persiste. Un poste pharmacie qui explose à cause d'un réseau de prestataires non contrôlé ? Une hausse ne changera pas le comportement. Un groupe de 200 adhérents avec une fréquence de sinistres 3 fois supérieure à la moyenne ? Une hausse globale dilue le problème au lieu de l'isoler.",
      "Le vrai travail, c'est la segmentation. Identifier les groupes déficitaires, comprendre quels postes de soins tirent le S/P vers le haut, et proposer des ajustements ciblés : restructuration des garanties, plafonds par poste, exclusions chirurgicales justifiées.",
      "Une hausse sans diagnostic, c'est un pansement. Et en zone CIMA, où la concurrence est féroce sur les appels d'offres, une hausse non justifiée peut coûter le contrat.",
      "Le DT qui arrive en comité avec un backtesting chiffré, une segmentation par groupe, et un scénario de renouvellement documenté ne propose pas juste un prix — il propose une position défendable.",
      "C'est la différence entre tarifer et décider.",
    ],
  },
  {
    slug: "hypotheses-pas-la-prime",
    tag: "Méthode",
    title: "Le vrai sujet n'est pas la prime, mais les hypothèses",
    excerpt:
      "Un tarif technique est aussi solide que les hypothèses qui le portent. Encore faut-il les tester.",
    date: "2026-02-10",
    readingTime: "4 min",
    content: [
      "Quand un DT présente un tarif en comité, la première question devrait être : quelles sont les hypothèses derrière ce chiffre ? Pas : est-ce que le commercial va accepter ce prix ?",
      "Le tarif technique est le résultat d'un calcul. Ce calcul repose sur des hypothèses : taux de fréquence, coût moyen par poste, inflation médicale projetée, taux de chargement. Chacune de ces hypothèses est une décision.",
      "En zone CIMA, l'inflation médicale dépasse 8% par an sur certains postes. Pourtant, la majorité des tarifications reconduisent les hypothèses de l'année précédente sans les challenger. Le résultat : un tarif qui semble stable mais qui est structurellement sous-estimé.",
      "Les stress tests ne sont pas un luxe académique. Ils répondent à une question simple : que se passe-t-il si mes hypothèses sont fausses de 10% ? De 20% ? Si la fréquence augmente de 15% sur le poste hospitalisation ?",
      "Un tarif technique sans fourchette de confiance est une opinion déguisée en chiffre. Avec un stress test Monte Carlo, le DT peut dire : \"Notre tarif central est de X, avec une fourchette à 95% entre Y et Z.\" C'est une position. C'est défendable.",
      "La rigueur n'est pas dans le chiffre final. Elle est dans la transparence des hypothèses qui y mènent.",
    ],
  },
  {
    slug: "provisions-enr-sous-estimees",
    tag: "Conformité",
    title: "Vos provisions ENR sont probablement sous-estimées",
    excerpt:
      "L'article 334-8 CIMA exige des provisions traçables. La plupart des estimations ne résisteraient pas à un audit.",
    date: "2026-01-20",
    readingTime: "5 min",
    content: [
      "Les Engagements Non Réglés (ENR) sont le point aveugle de beaucoup de portefeuilles santé collective en zone CIMA. La raison est simple : estimer correctement les ENR nécessite un historique de développement des sinistres que la plupart des assureurs ne maintiennent pas proprement.",
      "L'article 334-8 du code CIMA est clair : les provisions doivent être suffisantes pour couvrir les engagements résiduels. En pratique, les méthodes utilisées vont d'un pourcentage forfaitaire appliqué aux primes (\"on met 15% d'ENR\") à une extrapolation approximative des derniers mois.",
      "Le problème ? Un pourcentage forfaitaire ne tient pas compte de la saisonnalité, du délai de déclaration, ni de la structure du portefeuille. Un portefeuille avec 60% d'hospitalisation n'a pas le même profil de développement qu'un portefeuille dominé par la pharmacie.",
      "Les méthodes actuarielles standard — Chain Ladder, Bornhuetter-Ferguson — existent pour cela. Mais elles nécessitent un triangle de développement propre et un calibrage sur les données historiques de l'assureur.",
      "Un outil qui automatise la construction des triangles, applique plusieurs méthodes, et produit une fourchette de provisions avec intervalle de confiance transforme un exercice de conformité en un outil de pilotage.",
      "Les provisions ENR ne sont pas juste un chiffre pour le bilan. Elles sont un indicateur avancé de la santé réelle du portefeuille.",
    ],
  },
  {
    slug: "fraude-assurance-sante-cima",
    tag: "Pilotage",
    title: "La fraude en santé collective : ce que les données révèlent",
    excerpt:
      "Des prestataires qui facturent plus que la moyenne, des assurés aux profils atypiques — les signaux sont dans les données.",
    date: "2026-01-05",
    readingTime: "4 min",
    content: [
      "En assurance santé collective en zone CIMA, la fraude n'est pas toujours spectaculaire. Elle est souvent diffuse : un prestataire qui facture systématiquement au plafond, un assuré qui consulte 4 spécialistes par semaine, des ordonnances avec des combinaisons de médicaments statistiquement improbables.",
      "Le problème n'est pas l'absence de suspicion — les équipes techniques ont souvent des intuitions. Le problème est l'absence de preuves chiffrées pour agir.",
      "Une analyse statistique des feuilles de soins permet d'identifier les anomalies : prestataires dont le coût moyen dépasse de 2 écarts-types la moyenne de leur catégorie, assurés dont la fréquence de consommation est 3 fois supérieure au reste du groupe, postes de soins avec des pics de consommation inexpliqués.",
      "Ces signaux ne sont pas des preuves de fraude. Ce sont des alertes qui justifient une investigation. Et c'est exactement ce dont un DT a besoin : des données pour agir, pas des opinions pour suspecter.",
      "Un tableau de bord de détection d'atypies, calibré sur l'historique de l'assureur, permet de passer d'une gestion réactive (\"on découvre la fraude à la clôture\") à une gestion proactive (\"on identifie les signaux en cours d'année\").",
      "La fraude non détectée n'est pas un coût caché. C'est un coût visible — dans le ratio S/P. Il suffit de savoir où regarder.",
    ],
  },
];
