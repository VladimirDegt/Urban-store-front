import { useState } from 'react';
import tShirt1 from '../../../public/assets/images/T-shirt 1.png';
import tShirt2 from '../../../public/assets/images/T-shirt 2.png';
import styles from './ImageGallery.module.scss'
const ImageGallery = () => {
  const images = [tShirt1, tShirt2];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <section className={styles.gallery}>
      <div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setSelectedImage(image)}
            style={{
              cursor: 'pointer',
              order: selectedImage === image ? '2px solid #007bff' : '2px solid transparent',
              width: '88px',
              height: '88px',
              marginBottom: '20px',
              borderRadius:'8px',
            }}
          />
        ))}
      </div>
      <div>
        <img className={styles.gallery__mainIm} src={selectedImage} alt="Selected product" />
      </div>
    </section>
  );
};

export default ImageGallery;
