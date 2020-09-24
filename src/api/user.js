import instance from '../utils/config.js';

function Products(params) {
  return instance({
    url: '/products',
    method: 'get',
    params
  })
}

export default Products;
