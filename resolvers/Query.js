const findBy = (value, array) => array[ array.map(item => item[ 'id' ]).indexOf(value) ];

module.exports = {
  allContractors: (root, args, context) => {
    const { contractors } = context;
    return contractors;
  },

  allProductTypes: (root, args, context) => {
    const { productTypes } = context;
    return productTypes;
  },

  Contractor: (root, args, context) => {
    const { id } = args;
    const { contractors } = context;
    findBy(id, contractors)
  },

  ProductType: (root, args, context) => {
    const { id } = args;
    const { productTypes } = context;
    findBy(id, productTypes)
  }
};