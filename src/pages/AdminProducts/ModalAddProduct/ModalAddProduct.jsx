import React, { useState, useEffect } from 'react';
import { API_URL } from '../../../helper';
import Axios from 'axios';
import './modaladdproduct.css';

export const AddModal = ({ showModal, setShowModal }) => {
  const [productFetch, setProductFetch] = useState({
    productDataList: [],
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
        });
      })
      .catch((err) => {
        console.log(err);
      });
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

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const cancelEdit = () => {
    setNewProduct({
      ...newProduct,
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
          setAddImage({
            ...addImage,
            addFile: '',
            addFileName: '',
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {showModal ? (
        <div className="modal_container">
          <div className="m-5">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Form</h2>
              </div>
              <div className="modal-body">
                <div>
                  <div>
                    <img id="imgpreview" alt="" width="100%" />
                  </div>
                  <label for="img" className="text-xl-left">
                    Add image
                  </label>
                  <input
                    onChange={btnAddImage}
                    type="file"
                    className="form-control"
                    id="img"
                  />
                </div>
                <div>
                  <label for="productname" className="text-xl-left">
                    Product Name
                  </label>
                  <input
                    value={newProduct.addProductName}
                    onChange={inputHandler}
                    name="addProductName"
                    type="text"
                    id="productname"
                    placeholder="Product Name"
                    className="form-control"
                  />
                </div>
                <div>
                  <label for="productdescription" className="text-xl-left">
                    Product Description
                  </label>
                  <textarea
                    value={newProduct.addProductDesc}
                    onChange={inputHandler}
                    name="addProductDesc"
                    type="text"
                    id="productdescription"
                    placeholder="Product Description"
                    className="form-control"
                  />
                </div>
                <div>
                  <label for="productstock" className="text-xl-left">
                    Product Stock
                  </label>
                  <input
                    value={newProduct.addProductStock}
                    onChange={inputHandler}
                    name="addProductStock"
                    id="productstock"
                    type="number"
                    placeholder="10"
                    className="form-control"
                  />
                </div>
                <div>
                  <label for="productnetto" className="text-xl-left">
                    Product Netto
                  </label>
                  <input
                    value={newProduct.addProductNetto}
                    onChange={inputHandler}
                    name="addProductNetto"
                    type="number"
                    id="productnetto"
                    placeholder="400"
                    className="form-control"
                  />
                </div>
                <div>
                  <label for="productnettototal" className="text-xl-left">
                    Product Netto Total
                  </label>
                  <input
                    value={newProduct.addProductNettoTotal}
                    onChange={inputHandler}
                    name="addProductNettoTotal"
                    type="number"
                    id="productnettototal"
                    placeholder="4000"
                    className="form-control"
                  />
                </div>
                <div>
                  <label for="productunit" className="text-xl-left">
                    Product Unit
                  </label>
                  <select
                    value={newProduct.addProductUnit}
                    onChange={inputHandler}
                    name="addProductUnit"
                    type="text"
                    id="productunit"
                    placeholder="ml"
                    className="form-control"
                  >
                    <option value="ml">ml</option>
                    <option value="mg">mg</option>
                    <option value="tablet">tablet</option>
                  </select>
                </div>
                <div>
                  <label for="productpriceperstock" className="text-xl-left">
                    Product Price Per Stock
                  </label>
                  <input
                    value={newProduct.addProductPricePerStock}
                    onChange={inputHandler}
                    name="addProductPricePerStock"
                    type="number"
                    id="productpriceperstock"
                    placeholder="5000"
                    className="form-control"
                  />
                </div>
                <div>
                  <label for="productbrand" className="text-xl-left">
                    Product Brand
                  </label>
                  <select
                    value={newProduct.addProductBrand}
                    onChange={inputHandler}
                    name="addProductBrand"
                    type="number"
                    id="productbrand"
                    placeholder="Kimia Farma"
                    className="form-control"
                  >
                    <option value="1">Kimia Farma</option>
                    <option value="2">Combiphar</option>
                    <option value="3">Unilever</option>
                    <option value="4">Vitacimin</option>
                    <option value="5">Sanbe Farma</option>
                  </select>
                </div>
                <div>
                  <label for="productcategory" className="text-xl-left">
                    Product Category
                  </label>
                  <select
                    value={newProduct.addProductCategory}
                    onChange={inputHandler}
                    name="addProductCategory"
                    type="number"
                    id="productcategory"
                    placeholder="Antibiotic"
                    className="form-control"
                  >
                    <option value="1">Obat Generic</option>
                    <option value="2">Antibiotic</option>
                    <option value="3">Suplement Makanan</option>
                    <option value="4">Obat Lambung</option>
                    <option value="5">Antiseptic</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={addNewProduct}
                  className="btn btn-info text-white"
                >
                  Add Product
                </button>
                <button onClick={cancelEdit} className="btn btn-danger">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
