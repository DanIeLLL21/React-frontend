import React from 'react'
import {useState,useEffect} from 'react'
import App from './App'
import './App.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



function ProductComponent (props) {

	let [goBack,setGoBack] = useState(false);

	if(goBack) {
		return <App/>
	}

	return (
		<div className="eachproduct-container">
    <div className="eachproduct-image-container">
    <Slide>
    {props.image[0].map((a,i)=>{
            return(
             <div key={i}>
              <div  className="eachproduct-image-slider" style={{'backgroundImage': `url(${a})` }}>
              </div>
            </div>)
    })}
      </Slide>
     </div>
    <div className="eachproduct-details-container">
		  <h1 className="eachproduct-details-heading">{props.name}</h1>
		  <p className="eachproduct-details-description">{props.description}</p>
      <div className="eachproduct-details-brand-container">
      <span class="eachproduct-brand-tag">
        <a>BRAND</a>
      </span>
      <span class="eachproduct-brand-name">
        <a>{props.brand}</a>
      </span>
      </div>
      <div className="eachproduct-details-pricing">
      <ul className="eachproduct-details-pricinglist">
        <li className="eachProduct-details-list price"><a>PRICE</a> <span>{props.price}$</span></li>
        <li className="eachProduct-details-list ">RATING <span>{props.rating}</span></li>
        <li className="eachProduct-details-list "><span>STOCK</span> <span>{props.stock}</span></li>
      </ul>
      </div>
      <div className="eachproduct-details-buttons">
      <button className="eachproduct-details-activebutton" onClick={()=>setGoBack(true)}>Go back</button>
      <button className="eachproduct-details-disablebutton">Add to cart</button>
      </div>
    </div>
		</div>
		)
} 


export default ProductComponent;