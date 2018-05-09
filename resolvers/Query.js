module.exports = {
  allContractors: (root, args, context) => {
    const { contractors } = context;
    return contractors;
  },

  allProductTypes: (root, args, context) => {
    const { productTypes } = context;
    return productTypes;
  }
};