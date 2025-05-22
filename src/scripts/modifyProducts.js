import fs from "node:fs/promises";
import path from "node:path";


export const modifyProducts = async () => {
  const dbPath = path.resolve('src/db/db.json');
  const readFile = await fs.readFile(dbPath, 'utf-8');
    const products = JSON.parse(readFile);
    

  const modifiedProducts = products.map(({ description, ...rest }) => rest);

 
  await fs.writeFile(
    dbPath,
    JSON.stringify(modifiedProducts, null, 2),
    'utf-8',
  );

  console.log('File successfully updated without field description.');
};


modifyProducts().catch((error) => {
  console.error('Error updating products:', error);
});