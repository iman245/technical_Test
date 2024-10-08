import React from 'react'
import './productDetail.css'
import Navbar from '../../components/navbar/Navbar'
import Product from '../../components/Product/Product'
import femme from '../../assets/images/fam.jpg'
import bague from '../../assets/images/bague.jpg'
import bracelet from '../../assets/images/bracelet.jpg'
import ear from '../../assets/images/colis.jpg'
import {gridCards} from '../../components/data'
import Cards from './../../components/Cards/Card';

function ProductDetail () {
  return (
    <div className='ProductDetail'>
        <Navbar/>
        <Product 
            globalImg={femme}
            img1={bague}
            img2={bracelet}
            img3={ear}
            titleProd='Round Ring in Fairmined'
            matiereProd='Yellow Gold'
            PrixProd='37900'
            descrip='This stunning ring is the perfect accessory to add a touch of sparkle to any outfit. Crafted in a modern, contemporary design, it features a unique, eye-catching shape, featuring a central setting that showcases a shimmering, radiant gemstone. The smooth lines of the band are crafted from the finest gold, while the setting and stone are encased in pave diamonds for a touch of added glamour. This timeless piece will be a treasured addition to any jewelry collection.The smooth lines of the band are crafted from the finest gold, while the setting and stone are encased in pave diamonds for a touch of added glamour.
            This timeless piece will be a treasured addition to any jewelry collection.The smooth lines of the band are crafted from the finest gold, while the setting and stone are encased in pave diamonds for a touch of added glamour.'
            delivery='5000'
            returnProd='30'
            />
        <div className='shopContainer'>
            <h1 className='ProductTitle centred'>you might also like</h1>
            <div className='shopProducts'>
              {gridCards.map((item, index) =>{
                return(
                  <Cards 
                    photo={item.photo}
                    description={item.description}
                    prix={item.prix}
                    />
                )
              })}
            </div>
        </div>
    </div>
  )
}

export default ProductDetail