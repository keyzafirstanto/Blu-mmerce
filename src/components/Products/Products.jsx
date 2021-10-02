import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import 'boxicons';
import { API_URL } from '../../helper';
import Axios from 'axios';

// file directory
import Product from './Product/Product';
import { SidebarData } from '../Sidebar/SidebarData';
import SubMenu from '../Sidebar/SubMenu';

//styling
import useStyles from './productsstyles';
import '../Sidebar/sidebarstyles.css';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';

// mock products
const products = [
  {
    id: 1,
    name: 'Generic Prescriptions',
    description: 'Custom generic prescription drugs',
    price: 59,
    image:
      'https://media.phillyvoice.com/media/images/01_120518_PillsStock_Carroll.2e16d0ba.fill-735x490.jpg',
  },
  {
    id: 2,
    name: 'Azurette',
    description: 'Birth Control Pills.',
    price: 29,
    image:
      'https://post.healthline.com/wp-content/uploads/2020/09/birth-control-pills_thumb.jpg',
  },
  {
    id: 3,
    name: 'Rhinos SR',
    description: 'Fever Medicine.',
    price: 159,
    image:
      'https://static.sehatq.com/cdn-cgi/image/f=auto,onerror=redirect/tokoq/products/variants/5ettgcze0pcvykcgorxjkkl98sut/d97e3be92024a5385a06cc064c78b64ef6e8cb509c7c09b07c1b2407807306e8',
  },
  {
    id: 4,
    name: 'Blackmores',
    description: 'Calcium + D3 120 teblets.',
    price: 19,
    image:
      'https://s1.bukalapak.com/img/1166303111/large/BLACKMORES_Calcium___D3_120_tablets__Untuk_kesehatan_tulang_.png',
  },
  {
    id: 5,
    name: 'Blackmores',
    description: 'Omega Daily.',
    price: 39,
    image:
      'https://kalcare.s3-ap-southeast-1.amazonaws.com/moch4/uploads/catalog/product/o/m/omega-daily-blackmores.jpg',
  },
  {
    id: 6,
    name: 'Swisse',
    description: 'Ultiboost Zinc (60 Tablets).',
    price: 19,
    image:
      'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//99/MTA-8975330/swisse_swisse_ultiboost_zinc-_60_tablet_full01_hfmmttgs.jpg',
  },
  {
    id: 7,
    name: 'Swisse',
    description: "Men's Multivitamin (120 tablets).",
    price: 29,
    image:
      'https://ae01.alicdn.com/kf/He822ceef448a4b6a84a3ba98e4401785J/Australia-Swisse-Men-S-Ultivite-Multivitamin-120-Tablet-Menjaga-Tingkat-Energi-Kewaspadaan-Mental-Stamina-Vitalitas-Tonik.jpg_Q90.jpg_.webp',
  },
  {
    id: 8,
    name: 'Tramadol',
    description: 'Obat anti banting.',
    price: 299,
    image: 'https://upload.wikimedia.org/wikipedia/id/1/1a/Tramadol2.jpg',
  },
];

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

const Products = ({ onAddToCart }) => {
  const [productsFetch, setProductsFetch] = useState({
    productList: [],
    filteredProducts: [],
    itemPerPage: 10,
    searchCategory: [
      'Obat Generik',
      'Antibiotic',
      'Multivitamin',
      'Obat Kecantikan',
      'Antiseptic',
      'Obat Lambung',
    ],
  });

  const [searchInput, setSearchInput] = useState({
    name: '',
  });

  const fetchProducts = () => {
    Axios.get(`${API_URL}/products`).then((res) => {
      setProductsFetch({ productList: res });
    });
  };

  const inputHandler = (e) => {
    const value = e.target.value;
    setSearchInput({ search: value });
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
                <input
                  onChange={inputHandler}
                  type="text"
                  placeholder="...Search"
                />
                <button>
                  <box-icon name="search"></box-icon>
                </button>
              </div>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
          <div>
            <button>prev</button>
            <button>next</button>
          </div>
        </Nav>
      </IconContext.Provider>
      <div className={classes.toolbar}>
        <h1>Antibiotics</h1>
      </div>
      <Grid container justifyContent="center" spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
