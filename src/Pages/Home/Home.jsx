import React from 'react'
import { Header } from '../../Components/Header/Header'
import { useState, useEffect } from 'react';
import { Product } from '../../Components/Products/Product';
import styles from '../Home/Home.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Footer } from '../../Components/Footer/Footer';
import ReactModal from 'react-modal';


export const Home = () => {

  const [products, setProducts] = useState([]);
  console.log(products)
  useEffect(() => {
    fetch('https://646bafb47d3c1cae4ce42749.mockapi.io/products')
    .then(response => response.json())
    .then(json => {
      setProducts(json)})
    });

  return (
    <>

    
    
    <div className={styles.wrapper}>
        <div>
          <Header/>
        </div>

        <div>
          <h1 className={styles.title}>Популярные товары</h1>
          <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src="/images/slider/podushka.jpg" alt="podushka" /></SwiperSlide>
          <SwiperSlide><img src="/images/slider/postel.jpg" alt="podushka" /></SwiperSlide>
          <SwiperSlide><img src="/images/slider/skoworoda.jpg" alt="podushka" /></SwiperSlide>
          <SwiperSlide><img src="/images/slider/zerkalo.jpg" alt="podushka" /></SwiperSlide>
          
        </Swiper>
        </div>

        <div className={styles.catalog}>

            <h1 className={styles.title}>Каталог</h1>

            <div className={styles.catalog__list}>
              {products.map((product, index)=>( 
              <Product key={index} props={product}/>
              )) 
            }
            </div>
  
        </div>

        <Footer/>
        
    </div>
        
    </>

  )
}

