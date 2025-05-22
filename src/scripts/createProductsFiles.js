import fs from 'fs/promises';
import path from 'path';
import { PATH_FILES_DIR } from '../contacts/products';
const products = JSON.parse(
  await fs.readFile(new URL('../db/db.json', import.meta.url), 'utf-8'),
);

function formatFileName(productName) {
  return (
    productName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '') + '.json'
  );
}

export async function createProductsFiles() {
  try {
    await fs.mkdir(PATH_FILES_DIR, { recursive: true });

    for (const product of products) {
      const fileName = formatFileName(product.name);
      const filePath = path.join(PATH_FILES_DIR, fileName);
      await fs.writeFile(filePath, JSON.stringify(product, null, 2));
    }

    console.log('Files created successfully!');
  } catch (error) {
    console.error('Error creating files:', error);
  }
}
