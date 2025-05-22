import fs from 'node:fs/promises';
import path from 'node:path';

export const getTotalPrice = async () => {
  const dbPath = path.resolve('src/db/db.json');
  const rawData = await fs.readFile(dbPath, 'utf-8');
  const products = JSON.parse(rawData);

    const totalPrice = products.reduce(
        (sum, product) => sum + Number(product.price || 0), 0);

  console.log(`Total cost of products: ${totalPrice}`);
  return totalPrice;
};


if (process.argv[1].includes('getTotalPrice.js')) {
  getTotalPrice();
}
