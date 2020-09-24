import instance from '../utils/config.js';

function Products(params) {
  return instance({
    url: '/carts',
    method: 'get',
    params
  })
}

export default Products;
