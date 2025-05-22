

export const groupProductsByCategories = (products) => {
  const grouped = {};

  for (const product of products) {
    const { name, category } = product;

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push(name);
  }

  return grouped;
};