import styles from './ProductPage.module.scss';
import BreadCrumbles from '../../components/BreadCrumbles/BreadCrumb';
import ProductPageShortDesc from './ProductPageShortDesc';
import ImageGallery from '../../components/ImageGallery/ImageGallery';
import PassSection from './FullDesc';
const ProductPage = () => (
  <main className={styles.product}>
    <BreadCrumbles />
    <div className={styles.bgGrey}>
      <ImageGallery />
      <ProductPageShortDesc />
    </div>
    <PassSection></PassSection>
  </main>
);

export default ProductPage;
