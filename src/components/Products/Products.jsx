import React, { useEffect, useState } from 'react';
import { API_URL } from '../../helper';
import Axios from 'axios';

// file directory
import Product from './Product/Product';

//styling
import useStyles from './productsstyles';
import '../Sidebar/sidebarstyles.css';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import Grid from '@material-ui/core/Grid';
import 'boxicons';

const Nav = styled.div`
  background: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #8ccfcd;
  width: 250px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 202px;
  padding-top: 2%;
  padding-bottom: 20%;
  left: 0;
  transition: 350ms;
  z-index: 4;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Products = () => {
  const [productsFetch, setProductsFetch] = useState({
    productList: [],
    page: 1,
    maxPage: 0,
    itemPerPage: 5,
  });

  const [productsFilter, setProductsFilter] = useState({
    filteredProducts: [],
    sortBy: '',
  });

  const [searchProduct, setSearchProduct] = useState({
    searchProductName: '',
    searchProductCategory: '',
  });

  const fetchProducts = () => {
    Axios.get(`${API_URL}/products/get`)
      .then((res) => {
        setProductsFetch({
          ...productsFetch,
          productList: res.data,
          maxPage: Math.ceil(res.data.length / productsFetch.itemPerPage),
        });
        setProductsFilter({ ...productsFilter, filteredProducts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(searchProducts.rawData);

  const renderProducts = () => {
    const productPagination =
      (productsFetch.page - 1) * productsFetch.itemPerPage;

    // unfiltered data = all the available data
    let rawData = [...productsFilter.filteredProducts];

    const compareItem = (a, b) => {
      if (a.product_name < b.product_name) {
        return -1;
      }
      if (a.product_name > b.product_name) {
        return 1;
      }
      return 0;
    };

    switch (productsFilter.sortBy) {
      case 'lowestPrice':
        rawData.sort((a, b) => a.price_per_stock - b.price_per_stock);
        break;
      case 'highestPrice':
        rawData.sort((a, b) => b.price_per_stock - a.price_per_stock);
        break;
      case 'az':
        rawData.sort(compareItem);
        break;
      case 'za':
        rawData.sort((a, b) => compareItem(b, a));
        break;
      default:
        rawData = [...productsFilter.filteredProducts];
        break;
    }

    const currentData = rawData.slice(
      productPagination,
      productPagination + productsFetch.itemPerPage
    );

    return currentData.map((product) => {
      return (
        <Grid key={product.id} item xs={6} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      );
    });
  };

  const nextPageHandler = () => {
    if (productsFetch.page < productsFetch.maxPage) {
      setProductsFetch({ ...productsFetch, page: productsFetch.page + 1 });
    }
  };

  const prevPageHandler = () => {
    if (productsFetch.page > 1) {
      setProductsFetch({ ...productsFetch, page: productsFetch.page - 1 });
    }
  };

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProductsFilter({ ...productsFilter, [name]: value });
    setProductsFetch({ ...productsFetch, [name]: value });
    setSearchProduct({ ...searchProduct, [name]: value });

    console.log(searchProduct.searchProductName);
  };

  const searchBtnHandler = () => {
    const filteredProducts = productsFetch.productList.filter((val) => {
      return val.product_name
        .toLowerCase()
        .includes(searchProduct.searchProductName.toLowerCase());
    });
    setProductsFilter({
      ...productsFilter,
      filteredProducts,
      maxPage: Math.ceil(
        productsFilter.filteredProducts.length / productsFetch.itemPerPage
      ),
    });
    console.log(productsFilter.filteredProducts);
  };

  const classes = useStyles();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <main className={classes.content}>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <SidebarNav>
            <SidebarWrap>
              <div className="input_search">
                <label htmlFor="searchProductName">Product Name</label>
                <input
                  onChange={inputHandler}
                  name="searchProductName"
                  type="text"
                  placeholder="Search..."
                  className="form-control mb-3"
                />
                <label htmlFor="searchCategory">Product Category</label>
                <select
                  onChange={inputHandler}
                  name="searchCategory"
                  className="form-control"
                >
                  <option value="">All Items</option>
                  <option value="Obat Generic">Obat Generic</option>
                  <option value="Antibiotic">Antibiotic</option>
                  <option value="Suplement Makanan">Suplement Makanan</option>
                  <option value="Obat Lambung">Obat Lambung</option>
                  <option value="Antiseptic">Antiseptic</option>
                </select>
                <button
                  onClick={searchBtnHandler}
                  className="btn btn-primary mt-3 button-search"
                >
                  Search
                </button>
              </div>
              <div>
                <label htmlFor="sortBy">Sort Product</label>
                <div className="card-body">
                  <label htmlFor="sortBy">Sort by</label>
                  <select
                    onChange={inputHandler}
                    name="sortBy"
                    className="form-control"
                  >
                    <option value="">Default</option>
                    <option value="lowestPrice">Lowest Price</option>
                    <option value="highestPrice">Highest Price</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                  </select>
                </div>
              </div>
              <div className="mt-3">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <button
                    disabled={productsFetch.page === 1}
                    onClick={prevPageHandler}
                    className="btn btn-dark"
                  >
                    {'<'}
                  </button>
                  <div className="text-center">
                    Page {productsFetch.page} of {productsFetch.maxPage}
                  </div>
                  <button
                    disabled={productsFetch.page === productsFetch.maxPage}
                    onClick={nextPageHandler}
                    className="btn btn-dark"
                  >
                    {'>'}
                  </button>
                </div>
              </div>
            </SidebarWrap>
          </SidebarNav>
          <div>
            <Grid container justifyContent="center" spacing={4}>
              {renderProducts()}
            </Grid>
          </div>
        </Nav>
      </IconContext.Provider>
    </main>
  );
};

export default Products;

// && val.product_category
//   .toLowerCase()
//   .includes(productsFilter.searchProductCategory.toLowerCase())
