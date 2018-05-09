module.exports = {
  addContractor(root, args, context) {
    const { id, name } = args;
    const { contractors } = context;
    console.log('contractors', contractors);
    contractors.push({
      id,
      name
    })
    return contractors;
  },
  addProductType(root, args, context) {
    const { name, id, description } = args;
    const { productTypes } = context;
    productTypes.push({
      id,
      name,
      description
    })
    return productTypes;
  }
};