import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { API_URL } from '../../helper';

// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

const Admin = () => {
  const [productFetch, setProductFetch] = useState({
    productDataList: [],
    pagination: 1,
    maximumPage: 0,
    dataPerPage: 5,
  });

  const [newProduct, setNewProduct] = useState({
    addProductName: '',
    addProductDesc: '',
    addProductStock: 0,
    addProductNetto: 0,
    addProductNettoTotal: 0,
    addProductUnit: 0,
    addProductPricePerUnit: 0,
    addProductPricePerStock: 0,
    addProductBrand: '',
    addProductCategory: '',
  });

  const [editProduct, setEditProduct] = useState({
    editId: 0,
    editProductName: '',
    editProductDesc: '',
    editProductStock: null,
    editProductNetto: null,
    editProductNettoTotal: null,
    editProductUnit: null,
    editProductPricePerUnit: null,
    editProductPricePerStock: null,
    editProductBrand: '',
    editProductCategory: '',
  });

  const [addImage, setAddImage] = useState({
    addFile: '',
    addFileName: '',
  });

  const fetchProducts = () => {
    Axios.get(`${API_URL}/products/get`)
      .then((res) => {
        setProductFetch({
          ...productFetch,
          productDataList: res.data,
          maximumPage: Math.ceil(res.data.length / productFetch.dataPerPage),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editProducts = (editData) => {
    setEditProduct({
      ...editProduct,
      editId: editData.product_id,
      editProductName: editData.product_name,
      editProductDesc: editData.product_desc,
      editProductStock: editData.stock,
      editProductNetto: editData.netto,
      editProductNettoTotal: editData.netto_total,
      editProductUnit: editData.unit,
      editProductPricePerUnit: editData.price_per_unit,
      editProductPricePerStock: editData.price_per_stock,
      editProductBrand: editData.brand_id,
      editProductCategory: editData.category_id,
    });
  };

  const cancelEdit = () => {
    setEditProduct({ ...editProduct, editId: 0 });
  };

  const saveBtnHandler = () => {
    if (addImage.addFile) {
      let formData = new FormData();

      formData.append('file', addImage.addFile);

      formData.append(
        'data',
        JSON.stringify({
          product_name: editProduct.editProductName,
          product_desc: editProduct.editProductDesc,
          stock: editProduct.editProductStock,
          netto: editProduct.editProductNetto,
          netto_total: editProduct.editProductNettoTotal,
          unit: editProduct.editProductUnit,
          price_per_unit: editProduct.editProductPricePerUnit,
          price_per_stock: editProduct.editProductPricePerStock,
          brand_id: editProduct.editProductBrand,
          category_id: editProduct.editProductCategory,
        })
      );

      Axios.patch(`${API_URL}/products/update/${editProduct.editId}`, formData)
        .then((res) => {
          alert(res.data.message);
          fetchProducts();
          cancelEdit();
        })
        .catch(() => {
          alert(`Terjadi Kesalahan`);
        });
    } else if (!addImage.addFile) {
      Axios.patch(`${API_URL}/products/update/${editProduct.editId}`, {
        product_name: editProduct.editProductName,
        product_desc: editProduct.editProductDesc,
        product_img: productFetch.productDataList.product_img,
        stock: editProduct.editProductStock,
        netto: editProduct.editProductNetto,
        netto_total: editProduct.editProductNettoTotal,
        unit: editProduct.editProductUnit,
        price_per_unit: editProduct.editProductPricePerUnit,
        price_per_stock: editProduct.editProductPricePerStock,
        brand_id: editProduct.editProductBrand,
        category_id: editProduct.editProductCategory,
      })
        .then((res) => {
          alert(res.data.message);
          fetchProducts();
          cancelEdit();
        })
        .catch(() => {
          alert(`Terjadi Kesalahan`);
        });
    }
  };

  const deleteBtnHandler = (deleteId) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete this products?`
    );
    if (confirmDelete) {
      Axios.delete(`${API_URL}/products/delete/${deleteId}`)
        .then(() => {
          fetchProducts();
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert(`Cancelled to delete product.`);
    }
  };

  const btnAddImage = (e) => {
    if (e.target.files[0]) {
      setAddImage({
        ...addImage,
        addFileName: e.target.files[0].name,
        addFile: e.target.files[0],
      });

      let preview = document.getElementById('imgpreview');
      preview.src = URL.createObjectURL(e.target.files[0]);
    }
  };

  const renderProducts = () => {
    const productPagination =
      (productFetch.pagination - 1) * productFetch.dataPerPage;

    let rawData = [...productFetch.productDataList];

    const itemPerPage = rawData.slice(
      productPagination,
      productPagination + productFetch.dataPerPage
    );

    return itemPerPage.map((product) => {
      if (product.product_id === editProduct.editId) {
        return (
          <tr>
            <td>{product.product_id}</td>
            <td>
              <input
                value={editProduct.editProductName}
                onChange={inputHandler}
                type="text"
                className="form-control"
                name="editProductName"
              />
            </td>
            <td>
              <input
                value={editProduct.editProductDesc}
                onChange={inputHandler}
                type="text"
                className="form-control"
                name="editProductDesc"
              />
            </td>
            <td>
              <img id="imgpreview" alt="" width="100%" />
              <input
                onChange={btnAddImage}
                type="file"
                className="form-control"
                id="img"
              />
            </td>
            <td>
              <input
                value={editProduct.editProductStock}
                onChange={inputHandler}
                type="number"
                className="form-control"
                name="editProductStock"
              />
            </td>
            <td>
              <input
                value={editProduct.editProductNetto}
                onChange={inputHandler}
                type="number"
                className="form-control"
                name="editProductNetto"
              />
            </td>
            <td>
              <input
                value={editProduct.editProductNettoTotal}
                onChange={inputHandler}
                type="number"
                className="form-control"
                name="editProductNettoTotal"
              />
            </td>
            <td>
              <select
                value={editProduct.editProductUnit}
                onChange={inputHandler}
                type="text"
                className="form-control"
                name="editProductUnit"
              >
                <option value="ml">ml</option>
                <option value="mg">mg</option>
                <option value="tablet">tablet</option>
              </select>
            </td>
            <td>
              <input
                value={editProduct.editProductPricePerUnit}
                onChange={inputHandler}
                type="number"
                className="form-control"
                name="editProductPricePerUnit"
              />
            </td>
            <td>
              <input
                value={editProduct.editProductPricePerStock}
                onChange={inputHandler}
                type="number"
                className="form-control"
                name="editProductPricePerStock"
              />
            </td>
            <td>
              <select
                value={editProduct.editProductBrand}
                onChange={inputHandler}
                type="number"
                className="form-control"
                name="editProductBrand"
              >
                <option value="1">Kimia Farma</option>
                <option value="2">Combiphar</option>
                <option value="3">Unilever</option>
                <option value="4">Vitacimin</option>
                <option value="5">Sanbe Farma</option>
              </select>
            </td>
            <td>
              <select
                value={editProduct.editProductCategory}
                onChange={inputHandler}
                type="number"
                className="form-control"
                name="editProductCategory"
              >
                <option value="1">Obat Generic</option>
                <option value="2">Antibiotic</option>
                <option value="3">Suplement Makanan</option>
                <option value="4">Obat Lambung</option>
                <option value="5">Antiseptic</option>
              </select>
            </td>
            <td>
              <button onClick={saveBtnHandler} className="btn btn-secondary">
                Save
              </button>
            </td>
            <td>
              <button onClick={cancelEdit} className="btn btn-danger">
                Cancel
              </button>
            </td>
          </tr>
        );
      }
      return (
        <tr>
          <td>{product.product_id}</td>
          <td>{product.product_name}</td>
          <td>{product.product_desc}</td>
          <td>
            <img src={API_URL + product.product_img} width="100%" alt="" />
          </td>
          <td>{product.stock}</td>
          <td>{product.netto}</td>
          <td>{product.netto_total}</td>
          <td>{product.unit}</td>
          <td>{product.price_per_unit}</td>
          <td>{product.price_per_stock}</td>
          <td>{product.products_brands}</td>
          <td>{product.products_category}</td>
          <td>
            <button
              className="btn btn-secondary"
              onClick={() => editProducts(product)}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => deleteBtnHandler(product.product_id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  const nextHandler = () => {
    if (productFetch.pagination < productFetch.maximumPage) {
      setProductFetch({
        ...productFetch,
        pagination: productFetch.pagination + 1,
      });
    }
  };

  const prevHandler = () => {
    if (productFetch.pagination > 1) {
      setProductFetch({
        ...productFetch,
        pagination: productFetch.pagination - 1,
      });
    }
  };

  const addNewProduct = () => {
    if (addImage.addFile) {
      let formData = new FormData();
      formData.append(
        'data',
        JSON.stringify({
          product_name: newProduct.addProductName,
          product_desc: newProduct.addProductDesc,
          stock: parseInt(newProduct.addProductStock),
          netto: parseInt(newProduct.addProductNetto),
          netto_total: parseInt(newProduct.addProductNettoTotal),
          unit: newProduct.addProductUnit,
          price_per_unit: parseInt(newProduct.addProductPricePerUnit),
          price_per_stock: parseInt(newProduct.addProductPricePerStock),
          brand_id: newProduct.addProductBrand,
          category_id: newProduct.addProductCategory,
        })
      );
      formData.append('file', addImage.addFile);

      Axios.post(`${API_URL}/products/post`, formData)
        .then((res) => {
          alert(res.data.message);
          fetchProducts();
          setNewProduct({
            addProductName: '',
            addProductDesc: '',
            addProductStock: 0,
            addProductNetto: 0,
            addProductNettoTotal: 0,
            addProductUnit: 0,
            addProductPricePerUnit: 0,
            addProductPricePerStock: 0,
            addProductBrand: '',
            addProductCategory: '',
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
    setEditProduct({ ...editProduct, [name]: value });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Manage Products</h1>
          <table className="table mt-6">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
                <th>Stock</th>
                <th>Netto</th>
                <th>Total Netto</th>
                <th>Unit</th>
                <th>Price Per Unit</th>
                <th>Price Per Stock</th>
                <th>Brand</th>
                <th>Category</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>{renderProducts()}</tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>
                  <input
                    value={newProduct.addProductName}
                    onChange={inputHandler}
                    name="addProductName"
                    type="text"
                    placeholder="Product Name"
                    className="form-control"
                  ></input>
                </td>
                <td>
                  <input
                    value={newProduct.addProductDesc}
                    onChange={inputHandler}
                    name="addProductDesc"
                    type="text"
                    placeholder="Product Description"
                    className="form-control"
                  ></input>
                </td>
                <td>
                  <img id="imgpreview" alt="" width="100%" />
                  <input
                    onChange={btnAddImage}
                    type="file"
                    id="img"
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    value={newProduct.addProductStock}
                    onChange={inputHandler}
                    name="addProductStock"
                    type="number"
                    placeholder="10"
                    className="form-control"
                  ></input>
                </td>
                <td>
                  <input
                    value={newProduct.addProductNetto}
                    onChange={inputHandler}
                    name="addProductNetto"
                    type="number"
                    placeholder="400"
                    className="form-control"
                  ></input>
                </td>
                <td>
                  <input
                    value={newProduct.addProductNettoTotal}
                    onChange={inputHandler}
                    name="addProductNettoTotal"
                    type="number"
                    placeholder="4000"
                    className="form-control"
                  ></input>
                </td>
                <td>
                  <select
                    value={newProduct.addProductUnit}
                    onChange={inputHandler}
                    name="addProductUnit"
                    type="text"
                    placeholder="ml"
                    className="form-control"
                  >
                    <option value="ml">ml</option>
                    <option value="mg">mg</option>
                  </select>
                </td>
                <td>
                  <input
                    value={newProduct.addProductPricePerUnit}
                    onChange={inputHandler}
                    name="addProductPricePerUnit"
                    type="number"
                    placeholder="200"
                    className="form-control"
                  ></input>
                </td>
                <td>
                  <input
                    value={newProduct.addProductPricePerStock}
                    onChange={inputHandler}
                    name="addProductPricePerStock"
                    type="number"
                    placeholder="5000"
                    className="form-control"
                  ></input>
                </td>
                <td>
                  <select
                    value={newProduct.addProductBrand}
                    onChange={inputHandler}
                    name="addProductBrand"
                    type="number"
                    placeholder="Kimia Farma"
                    className="form-control"
                  >
                    <option value="1">Kimia Farma</option>
                    <option value="2">Combiphar</option>
                    <option value="3">Unilever</option>
                    <option value="4">Vitacimin</option>
                    <option value="5">Sanbe Farma</option>
                  </select>
                </td>
                <td>
                  <select
                    value={newProduct.addProductCategory}
                    onChange={inputHandler}
                    name="addProductCategory"
                    type="number"
                    placeholder="Antibiotic"
                    className="form-control"
                  >
                    <option value="1">Obat Generic</option>
                    <option value="2">Antibiotic</option>
                    <option value="3">Suplement Makanan</option>
                    <option value="4">Obat Lambung</option>
                    <option value="5">Antiseptic</option>
                  </select>
                </td>

                <td colSpan="2">
                  <button
                    onClick={addNewProduct}
                    className="btn btn-info text-white"
                  >
                    Add Product
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="mt-3">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <button
                disabled={productFetch.pagination === 1}
                onClick={() => prevHandler()}
                className="btn btn-dark"
              >
                {'<'}
              </button>
              <div className="text-center">
                Page {productFetch.pagination} of {productFetch.maximumPage}
              </div>
              <button
                disabled={productFetch.pagination === productFetch.maximumPage}
                onClick={() => nextHandler()}
                className="btn btn-dark"
              >
                {'>'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
