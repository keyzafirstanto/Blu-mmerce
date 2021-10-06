import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { API_URL } from '../../helper';

const ProductDetail = () => {
  const [productsFetch, setProductsFetch] = useState({
    productList: [],
    quantity: 1,
  });

  // const fetchProducts = () => {
  //     Axios.get(`${API_URL}/products/get`, {
  //         params: {
  //             product_id:
  //         }
  //     })
  // }

  return (
    <div>
      <h1>Product Detail Page</h1>
    </div>
  );
};

export default ProductDetail;
