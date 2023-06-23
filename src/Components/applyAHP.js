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
