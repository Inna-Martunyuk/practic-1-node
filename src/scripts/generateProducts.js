import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import path from 'node:path';

const dbPath = path.resolve('src/db/db.json');

export const generateProducts = async (count) => {
  try {
    let existingProducts = [];

    const newProducts = Array.from({ length: count }, () =>
      createFakeProduct(),
    );
    const updatedProducts = [...existingProducts, ...newProducts];

    await fs.writeFile(
      dbPath,
      JSON.stringify(updatedProducts, null, 2),
      'utf8',
    );

    console.log(
      `${count} products added. Total products: ${updatedProducts.length}`,
    );
  } catch (error) {
    console.error(' Error adding products:', error);
  }
};

generateProducts(9);
