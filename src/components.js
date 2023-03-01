import React from 'react'
import {useState,useEffect} from 'react'
import App from './App'
import './App.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
  width:'400px'
}

const productImageCont = {
  width:"400px"
}


const productDetailsContainer = {
  backgroundColor:"yellow"
}

const productContainer = {
  display:"flex",
  justifyContent:"space-evenly",
  marginTop:"30vh"
}

function ProductComponent (props) {

	let [goBack,setGoBack] = useState(false);

	if(goBack) {
		return <App/>
	}

	let styles = {
		imageStyle:{
			width:'200px'
		},
    buttonStyle:{
      borderRadius:"13px",
      width:"100px",
      cursor:"pointer"
    }
	}


	return (
		<div className="eachproduct-container">
    <div style={productDetailsContainer}>
		  <h1>{props.name} </h1>
		  <p>Descp :{props.description}</p>
      <p>Brand :{props.brand}</p>
      <p>Cat : {props.category}</p>
      <p>Price :{props.price}</p>
      <p>Rating: {props.rating}</p>
      <p>Stock :{props.stock}</p>
      <button style={styles.buttonStyle} onClick={()=>setGoBack(true)}>Go back</button>
    </div>
    <div style={productImageCont}>
    <Slide>
		{props.image[0].map((a,i)=>{
            return(
             <div key={i}>
              <div styles={styles.imageStyle} style={{ ...divStyle, 'backgroundImage': `url(${a})` }}>
              </div>
            </div>)
    })}
      </Slide>
     </div>
		</div>
		)
} 


export default ProductComponent;