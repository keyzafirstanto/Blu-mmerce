import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { API_URL } from '../../helper';
import { Grid, Card, Container } from '@material-ui/core';
import './productdetailstyles.css';

const ProductDetail = (props) => {
  const [product, setProduct] = useState({
    productData: {},
    productStatus: false,
    quantity: 1,
  });

  const fetchProducts = () => {
    const productId = props.match.params.product_id;
    Axios.get(`${API_URL}/products/get/${productId}`)
      .then((res) => {
        if (res.data.length) {
          setProduct({ ...product, productData: res.data[0] });
        } else {
          setProduct({ ...product, productStatus: true });
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const qtyBtnHandler = (action) => {
    if (action === 'increment') {
      setProduct({
        ...product,
        quantity: product.quantity + 1,
      });
    } else if (action === 'decrement' && product.quantity > 1) {
      setProduct({
        ...product,
        quantity: product.quantity - 1,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product_detail_container">
      <Card>
        <Grid xs={5}>
          <Container>
            <img src={API_URL + product.productData.product_img} alt="" />
          </Container>
        </Grid>
        <Grid>
          <Container>
            <div className="product_container">
              <div>
                <div>
                  <h1>{product.productData.product_name}</h1>
                  <hr />
                </div>
                <div>
                  <h6>{product.productData.product_desc}</h6>
                  <hr />
                </div>
                <div>
                  <h6>stock: {product.productData.stock}</h6>
                  <hr />
                </div>
                <div>
                  <h6>netto: {product.productData.netto}</h6>
                  <hr />
                </div>
                <div>
                  <h6>{product.productData.netto_total}</h6>
                  <hr />
                </div>
                <div>
                  <h6>{product.productData.unit}</h6>
                  <hr />
                </div>
                <div>
                  <h6>{product.productData.price_per_unit}</h6>
                  <hr />
                </div>
                <div>
                  <h6>{product.productData.price_per_stock}</h6>
                  <hr />
                </div>
                <div>
                  <h6>{product.productData.brand_id}</h6>
                  <hr />
                </div>
                <div>
                  <h6>{product.productData.category_id}</h6>
                  <hr />
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <button
                  onClick={() => qtyBtnHandler('decrement')}
                  className="btn btn-primary mr-4"
                >
                  -
                </button>
                <h6
                  style={{
                    marginLeft: '20px',
                  }}
                >
                  {product.quantity}
                </h6>
                <button
                  onClick={() => qtyBtnHandler('increment')}
                  className="btn btn-primary mx-4"
                >
                  +
                </button>
              </div>
            </div>
          </Container>
        </Grid>
      </Card>
    </div>
  );
};

export default ProductDetail;
