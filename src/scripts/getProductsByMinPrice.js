import fs from 'node:fs/promises';
import path from 'node:path';

export const getProductsByMinPrice = async (minPrice) => {
     const dbPath = path.resolve('src/db/db.json');
     const rawData = await fs.readFile(dbPath, 'utf-8');
     const products = JSON.parse(rawData);

     const filtered = products.filter((product) => product.price >= minPrice);
     console.log(`Products at a price ${minPrice}:`, filtered);
     return filtered;
};







