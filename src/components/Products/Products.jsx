import React from 'react';
import Grid from '@material-ui/core/Grid';

// file directory
import Product from './Product/Product';

//styling
import useStyles from './productsstyles';

// mock products
const products = [
  {
    id: 1,
    name: 'Bang & Olufsen',
    description: 'Bang & Olufsen Headphone.',
    price: 899,
    image:
      'https://id-live-01.slatic.net/original/491ca87b4b7e445d368a517e38d10e69.jpg',
  },
  {
    id: 2,
    name: 'Mug',
    description: 'Handmade Mug.',
    price: 99,
    image:
      'https://homecoming.imgix.net/products/work_black_mug_1.jpg?v=1613169071&crop=entropy&fit=crop&h=1200&w=900',
  },
  {
    id: 3,
    name: 'Kettle',
    description: 'Black Kettle.',
    price: 159,
    image:
      'https://cdn.shopify.com/s/files/1/0084/7770/4252/products/TIM556_Youth_Kettle_Black_WEB_2048x.jpg?v=1600432506',
  },
  {
    id: 4,
    name: 'Iphone 12 Pro',
    description: 'Apple Iphone 12 Pro.',
    price: 99,
    image:
      'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-13744780/apple_apple_iphone_12_pro_max_512gb_full03_iupc5fe4.jpg',
  },
  {
    id: 5,
    name: 'Gibson',
    description: 'Gibson Black Beauty.',
    price: 2999,
    image:
      'https://img.kytary.com/eshop_co_uk/stredni_v4x/na/637115135235800000/e5ee3ccb/64706839/gibson-1972-les-paul-custom-black-beauty.jpg',
  },
  {
    id: 6,
    name: 'Black Tumbler',
    description: 'Starbucks Black Tumbler.',
    price: 19,
    image: 'https://cf.shopee.co.id/file/f7f5a86f8ae2d054c9613ad5cc1d5ebb',
  },
  {
    id: 7,
    name: 'Klean Kanteen',
    description: '946ml Black Tumbler.',
    price: 29,
    image:
      'https://sesa.id/media/catalog/product/cache/f61383106a1b8344240b674c513f8333/i/n/insulated-classic_946-ml_shale-black.jpg',
  },
  {
    id: 8,
    name: 'KBDFans Keyboard',
    description: '65% Layout Keyboard.',
    price: 299,
    image:
      'https://cdn.shopify.com/s/files/1/1473/3902/products/8b9cc7c9808a81fc8db0eaf67a4d79d7_bb914357-895c-460b-9f92-26bc45624f08_1024x1024.jpg?v=1624079771',
  },
];

const Products = ({ onAddToCart }) => {
  const classes = useStyles();
  // if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <h1>B L V C K</h1>
      </div>
      <Grid container justifyContent="center" spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
      <div></div>
    </main>
  );
};

export default Products;
