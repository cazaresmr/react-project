/**
 * Filters films by a given director
 * @param {Array} list - An array of film objects
 * @param {string} director - The director to filter by
 * @returns {Array} - An array of film objects
 */
export function filterFilmsByDirector(list, director) {
  if (director) {
    return list.filter((film) => film.director === director);
  }
  return list;
}

/**
 * Gets a list of unique values for a specified property from the list of films
 * @param {Array} list - An array of film objects
 * @param {string} prop - The property to get a list of unique values for
 * @returns {Array} - An array of unique strings
 */
export function getListOf(list, prop) {
  return [...new Set(list.map((film) => film[prop] || ""))];
}

/**
 * Calculates various statistics from the list of films
 * @param {Array} list - An array of film objects
 * @returns {Object} - An object containing statistics: avg_score, acc_score, total, latest
 */
export function getFilmStats(list) {
  const total = list.length;

  // If the list is empty, return zeroed stats to avoid division by zero
  if (total === 0) {
    return { avg_score: 0, acc_score: 0, total: 0, latest: 0 };
  }

  const acc_score = list.reduce(
    (sum, film) => sum + parseInt(film.rt_score),
    0
  );
  const avg_score = acc_score / total;
  const latest = Math.max(...list.map((film) => parseInt(film.release_date)));

  return { avg_score, acc_score, total, latest };
}
