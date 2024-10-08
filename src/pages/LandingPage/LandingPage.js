import React, { useEffect, useState } from 'react'
import './landingPage.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brand from "../../assets/images/brand.png";
import Navbar from './../../components/navbar/Navbar';
import Descript from '../../components/descript/Descript';
import grp9 from '../../assets/images/Group9.png'
import pn1 from '../../assets/images/pn1.png';
import pn2 from '../../assets/images/pn2.png';
import pn3 from '../../assets/images/pn3.png';
import bag1 from '../../assets/images/bag1.png';
import bag2 from '../../assets/images/bag2.png';
import grp17 from '../../assets/images/grp_grp.png'
import polygon from '../../assets/images/Polygon.png';
import ellipse1 from '../../assets/images/Ellipse1.png';
import ellipse2 from '../../assets/images/Ellipse2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import polyGn from '../../assets/images/polyGn.png'
import { cards } from '../../components/data';
import { specialCards } from '../../components/data';
import CardSpecial from '../../components/Cards/CardSpecial';
import { nb } from '../../components/data';
import Cards from '../../components/Cards/Card';
import Footer from './../../components/Footer/Footer';

function LandingPage () {
    const items = ["Rings", "Earrings", "Necklaces", "Bracelets"];
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          }
        ]
      };
  return (
    <div className='LandingPageContainer'>
        <Navbar/>
        <div className='accueilPart'>
            <div className='accueilPartGlobal'>
                <div className='accueilPartImgContainer'>
                    <img src={pn1} alt='' className='accueilImg pn1'/>
                    <img src={pn2} alt='' className='accueilImg pn2'/>
                    <img src={pn3} alt='' className='accueilImg pn3'/>
                    <img src={grp9} alt='' className='accueilPartImg'/>
                </div>
                <div>
                    <Descript fill="#ECC5FC" parg='Modern jewelry is made of gold, silver, or platinum'/>
                </div>
            </div>
            <div className='accueilPartParg'>
                <h1 className='accueilPartTitre'>
                    Discover world best jewelry
                </h1>
                <div className='accueilPartBtns'>
                        <button className='CustomPiecesBtn'>Shop All</button>
                    <div className='playIconContnr'>
                        <FontAwesomeIcon icon={faPlayCircle} className='playIcon'/>Our Story
                    </div>
                </div>
            </div>
            <div className='accueilPartProduct'>
                <div className='accueilPartProduct1'>
                    <img src={bag2} alt='' className='accueilProductImg'/>
                    <Descript fill="#B0D6B3" parg='SHOP THE SILVER LINE'/>
                </div>
                <div className='accueilPartProduct2'>
                    <img src={bag1} alt='' className='accueilProductImg'/>
                    <Descript fill="#90670F" parg='SHOP THE GOLD LINE'/>
                </div>
            </div>
        </div>
        <div className='CustomPieces'>
            <div className='CustomPiecesContent'>
                <h1 className='CustomLandingTitre specialMargin'>
                    Custom Pieces
                </h1>
                <p1 className='CustomPiecesParg'>
                    Dadi Bijo presents an exceptional opportunity for those individuals 
                    who desire an engagement ring that represents their unique love tale 
                    but are unsure of the starting point. Our exquisite custom piece design 
                    service guarantees that you can effortlessly create a personalized piece 
                    that embodies your love story in just a few weeks, with no added expense. 
                    Partnering with Dadi Bijo will allow you to bring your dream ring design 
                    to reality and cherish your one-of-a-kind piece for a lifetime.
                </p1>
                <div>
                    <button className='CustomPiecesBtn CustomPiecesMargin'>Create Your Piece</button>
                </div>
            </div>
            <div className='CustomPiecesImg'>
                <img src={grp17} alt=''/>
            </div>
        </div>
        <div className='BrowsingGategorieGlocal'>
            <h1 className='CustomLandingTitre withoutMargin'>Browse By Categories</h1>
            <div className='BrowsingGategorie'>
                <div className='BrowsingGategorieSect1'>
                    <span><img src={polygon} alt='' className='polygon'/></span>
                    <img src={ellipse2} alt='' className='browseLarme1'/>
                </div>
                <div className='BrowsingGategorieSect2'>
                    {
                        items.map((item, index) => (
                            <div key={index} className='browsingGategorieItem'>
                                {item}<span><FontAwesomeIcon icon={faArrowRight} className='ArrowIcon'/></span>
                            </div>
                        ))
                    }
                </div>
                <div className='BrowsingGategorieSect3'>
                    <img src={ellipse1} alt='' className='browseLarme2'/>
                    <span><img src={polygon} alt='' className='polygon right'/></span>
                </div>
            </div>
        </div>
        <div className='SloganContainer'>
            <div className='SloganContent'>
                <div className='SloganSpan'><img src={polyGn} alt='' className='SloganPolygon'/></div>
                <div className='SloganParg'>“ A piece of jewelry can be a symbol of love, of strength, of faith, 
                or of hope. It can represent a moment in time, a milestone, or a memory. 
                But most of all, it can represent the beauty and the complexity of a woman's 
                soul ”</div>
            </div>
        </div>
        <div className='TrendingNowContainer'>
            <h1 className='CustomLandingTitre'>Trending Now</h1>
            <div>
                <Slider {...settings}>
                    {specialCards.map((item, index) => {
                        return (
                            <div key={index}>
                                <CardSpecial 
                                    photo1={item.photo1}
                                    photo2={item.photo2} 
                                    name={item.name}
                                    />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
        <div className='BrandPubContainer'>
            {
                nb.map(item =>{
                    return (
                        <div className='BrandPubContent'>
                            <img src={brand} alt='' className='BrandPubImg'/>
                        </div>
                    )
                })
            }
        </div>
        <div className='NewArrivalsContainer'>
            <div className='NewArrivalsHead'>
                <h1 className='CustomLandingTitre'>New Arrivals</h1>
                <button className='CustomPiecesBtn CustomPiecesMargin'>See All <FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
            <div className='NewArrivaksList'>
                {cards.map((card, index) => {
                    return(
                        <Cards 
                            photo = {card.photo} 
                            description = {card.description}
                            prix = {card.prix}/>
                    )
                })}
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LandingPage