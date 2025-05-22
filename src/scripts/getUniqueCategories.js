import fs from 'node:fs/promises';
import path from 'node:path';

export const getUniqueCategories = async () => {
  const dbPath = path.resolve('src/db/db.json');
  const rawData = await fs.readFile(dbPath, 'utf-8');
  const products = JSON.parse(rawData);

  const categories = products.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];

  return uniqueCategories;
};

getUniqueCategories()
  .then((categories) => {
    console.log('Unique categories:', categories);
  })
  .catch((error) => {
    console.error('Error getting categories:', error);
  });
