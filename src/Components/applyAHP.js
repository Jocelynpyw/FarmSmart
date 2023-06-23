export default function applyAHP(courses) {
  // Étape 1 : Comparaison par paires et construction de matrices de comparaison
  const pairwiseComparisons = [
    [1, 3, 5, 7], // Comparaisons pour le critère de coût
    [1 / 3, 1, 3, 5], // Comparaisons pour le critère d'expérience
    [1 / 5, 1 / 3, 1, 3], // Comparaisons pour le critère de rating
    [1 / 7, 1 / 5, 1 / 3, 1], // Comparaisons pour le critère d'heures
  ];

  // Étape 2 : Calcul des poids des critères
  const criteriaWeights = pairwiseComparisons.map((row) =>
    row.map((value) => value / row.reduce((acc, val) => acc + val, 0))
  );

  // Calcul des moyennes pondérées des colonnes
  const columnSum = criteriaWeights.reduce(
    (acc, row) => row.map((value, j) => value + acc[j]),
    Array(criteriaWeights[0].length).fill(0)
  );

  const criteriaWeightsNormalized = columnSum.map(
    (sum) => sum / columnSum.reduce((acc, val) => acc + val, 0)
  );

  // Étape 3 : Évaluation des alternatives
  const courseScores = courses.map((course) => {
    const score =
      course.cost * criteriaWeightsNormalized[0] +
      course.experience * criteriaWeightsNormalized[1] +
      course.rating * criteriaWeightsNormalized[2] +
      course.hours * criteriaWeightsNormalized[3];

    return { ...course, score };
  });

  // Étape 4 : Sélection du meilleur cours
  const sortedCourses = courseScores.sort((a, b) => b.score - a.score);
  const bestCourse = sortedCourses[0];

  return bestCourse;
}

// Dans cet exemple, nous supposons que les matrices de comparaison des critères (criteriaMatrix) sont déjà définies, ainsi que les poids des critères (criteriaWeights). La fonction applyAHP effectue les étapes suivantes :

// Calcul des valeurs propres et vecteurs propres à partir de la matrice de comparaison des critères.
// Calcul du vecteur pondéré des priorités des critères en combinant les valeurs propres et les vecteurs propres.
// Normalisation du vecteur pondéré des priorités des critères pour obtenir les poids normalisés des critères.
// Calcul de la note globale pour chaque cours en pondérant les critères avec les poids normalisés.
// Sélection du meilleur cours en fonction de la note globale.
// Notez que dans cet exemple, nous utilisons la bibliothèque `numeric

// function applyAHP(courses, criteriaMatrix, criteriaWeights) {
//     // Matrice de comparaison des critères (exemples)
//     const criteriaMatrix = [
//       [1, 3, 5],
//       [1/3, 1, 2],
//       [1/5, 1/2, 1]
//     ];

//     // Poids des critères (exemples)
//     const criteriaWeights = [0.4, 0.3, 0.3];

//     // Étape 1 : Calcul des valeurs propres et vecteurs propres
//     const n = criteriaMatrix.length;
//     const eigenvectors = [];
//     const eigenvalues = numeric.eig(criteriaMatrix).lambda.x;

//     for (let i = 0; i < n; i++) {
//       eigenvectors[i] = [];
//       for (let j = 0; j < n; j++) {
//         eigenvectors[i][j] = numeric.eig(criteriaMatrix).E.x[i][j];
//       }
//     }

//     // Étape 2 : Calcul du vecteur pondéré des priorités des critères
//     const weightedPriorities = [];
//     for (let i = 0; i < n; i++) {
//       let priority = 0;
//       for (let j = 0; j < n; j++) {
//         priority += eigenvectors[i][j] * eigenvalues[j];
//       }
//       weightedPriorities[i] = priority;
//     }

//     // Étape 3 : Normalisation du vecteur pondéré des priorités des critères
//     const sumOfPriorities = weightedPriorities.reduce((acc, val) => acc + val, 0);
//     const normalizedPriorities = weightedPriorities.map(val => val / sumOfPriorities);

//     // Étape 4 : Calcul de la note globale pour chaque cours
//     for (let i = 0; i < courses.length; i++) {
//       const course = courses[i];
//       let overallScore = 0;

//       // Calcul de la note pondérée pour chaque critère du cours
//       for (let j = 0; j < criteriaWeights.length; j++) {
//         overallScore += course.criteria[j] * criteriaWeights[j];
//       }

//       course.overallScore = overallScore;
//     }

//     // Étape 5 : Sélection du meilleur cours
//     const sortedCourses = courses.sort((a, b) => b.overallScore - a.overallScore);
//     const bestCourse = sortedCourses[0];

//     return bestCourse;
//   }
