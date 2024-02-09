export function filterAndSortObjects(objects: any[], filterStr: string) {
  // Helper function to calculate match score
  function calculateScore(name: string, filterStr: string) {
    let score = 0;
    let filterStrIndex = 0;
    for (let i = 0; i < name.length; i++) {
      if (
        filterStrIndex < filterStr.length &&
        name[i].toLowerCase() === filterStr[filterStrIndex].toLowerCase()
      ) {
        score += 1;
        filterStrIndex += 1;
      }
    }
    return score;
  }

  // Filter and score each object
  const scoredObjects = objects
    .filter((obj) => obj.name.toLowerCase().includes(filterStr.toLowerCase()))
    .map((obj) => {
      return {
        obj: obj,
        score: calculateScore(obj.name, filterStr),
      };
    });

  // Sort objects by score in descending order
  scoredObjects.sort((a, b) => b.score - a.score);

  // Return sorted objects without scores
  return scoredObjects.map((item) => item.obj);
}

// Example usage
const objects = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'Dave', age: 40 },
  { name: 'Eve', age: 22 },
];

const filterStr = 'Al';
const filteredAndSortedObjects = filterAndSortObjects(objects, filterStr);
console.log(filteredAndSortedObjects);
