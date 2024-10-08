import { faArrowRight, faCartShopping, faHeart, faRotateRight, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './product.css'

function Product (props) {
  return (
    <div className='ProductContainer'>
        <div className='ProductImage'>
            <div className='productGlobalImgCont'>
                <img src={props.globalImg} alt='' className='productGlobalImg'/>
            </div>
            <div className='productOtherImgCont'>
                <img src={props.img1} alt='' className='productOtherImg'/>
                <img src={props.img2} alt='' className='productOtherImg'/>
                <img src={props.img3} alt='' className='productOtherImg'/>
            </div>
        </div>
        <div className='ProductDescription'>
            <h1 className='ProductTitle'>{props.titleProd}</h1>
            <div className='petitDetailPro'>
                <div className='matiereProd'>{props.matiereProd}</div>
                <div className='PrixProd'>{props.PrixProd} DA</div>
            </div>
            <div>
                <p className='descriptionProduit'>
                    {props.descrip}
                </p>
            </div>
            <div className='productLivraison'>
                <FontAwesomeIcon icon={faTruckFast} className='truckIcon'/>
                Free shipping  to orders over {props.delivery} DA
            </div>
            <div className='productReturn'>
                <FontAwesomeIcon icon={faRotateRight} className='rotateIcon'/>
                free {props.returnProd} days return
            </div>
            <div className='productBtns'>
                <div>
                    <button className='ProductBtn'>Add To Cart <FontAwesomeIcon icon={faCartShopping} className='cartIcon'/></button>
                </div>
                <div >
                    <button className='btnFavorisProd'><FontAwesomeIcon icon={faHeart} className='heartIcon'/></button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Product