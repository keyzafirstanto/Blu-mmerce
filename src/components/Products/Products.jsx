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

const Products = ({ onAddToCart }) => {
  const classes = useStyles();
  // if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}>
        <h1>Most Sought Items</h1>
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
