import React,{useState,useEffect} from 'react'
import '../css/App.css'
import { Slide } from 'react-slideshow-image';
import {useParams} from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css';


function ProductDetails () {


    const [productDetailsData,setProductDetailsData] = useState([]);
    const params = useParams();

    useEffect(()=>{

    async function fetchProductDetailsData () {

      let res = await fetch(`https://dummyjson.com/products/${params.id}`);
      let data = await res.json();
      
      setProductDetailsData(data); }

    fetchProductDetailsData();

    },[params])


    if(!productDetailsData.images) {
      return <div>Loading..</div>
    }

    return (
        <div className="eachproduct-container">
    <div className="eachproduct-image-container">
    <Slide>
     {productDetailsData.images.map((a,i)=>{
            return(
             <div key={i}>
              <div  className="eachproduct-image-slider" style={{'backgroundImage': `url(${a})` }}>
              </div>
            </div>)
    })}
      </Slide>
     </div>
    <div className="eachproduct-details-container">
      <h1 className="eachproduct-details-heading">{productDetailsData.name}</h1>
      <p className="eachproduct-details-description">{productDetailsData.description}</p>
      <div className="eachproduct-details-brand-container">
      <span className="eachproduct-brand-tag">
        <p>BRAND</p>
      </span>
      <span className="eachproduct-brand-name">
        <p>{productDetailsData.brand}</p>
      </span>
      </div>
      <div className="eachproduct-details-pricing">
      <ul className="eachproduct-details-pricinglist">
        <li className="eachProduct-details-list price"><p>PRICE</p> <span>{productDetailsData.price}$</span></li>
        <li className="eachProduct-details-list ">RATING <span>{productDetailsData.rating}</span></li>
        <li className="eachProduct-details-list "><span>STOCK</span> <span>{productDetailsData.stock}</span></li>
      </ul>
      </div>
      <div className="eachproduct-details-buttons">
      <a href="/products"> Go Home </a>
      <button className="eachproduct-details-disablebutton">Add to cart</button>
      </div>
    </div>
    </div>
      )     
} 


export default ProductDetails;