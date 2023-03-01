import './App.css';
import React from 'react';
import ProductComponent from './components'
import {useState,useEffect} from 'react'
import ReactPaginate from 'react-paginate'

function App() {


  // Variables to store data,API url, and each product that we want to display.

  const URL = "https://dummyjson.com/products?limit=10";
  let [productData,setProductData] = useState([]);
  let [showProduct,setShowProduct] = useState(false);
  let [eachProduct,setEachProduct] = useState({
    title:"",
    description:"",
    brand:"",
    category:"",
    price:Number,
    rating:Number,
    Instock:Number,
    imagesURL:[]
  })

  const [page, setPage] = useState(0),
  maxPage = Math.ceil(productData.length/2)


   // Functions to make application work. For getting data,handling clicks and showing component.
   const fetchData = async () => {
   
      const res = await fetch(URL);
      const data = await res.json();


      setProductData(data.products);
      console.log(data)
    }

  const handlePageClick = (click) => {
    setPage(click.selected)
  }

  const showEach = (product) => {

      setEachProduct({
        title:product.title,
        description:product.description,
        brand:product.brand,
        category:product.category,
        price:product.price,
        rating:product.rating,
        Instock:product.stock,
        imagesURL:[product.images]
      })

      setShowProduct(true);
  }


  // Making API call on first application render and appending it to variable.

  useEffect(() => { 
    fetchData();
  },[]);


  // Condition to render Product component if user clicks on image or heading.

  if(showProduct) {
    return <ProductComponent

    name={eachProduct.title} 
    description={eachProduct.description} 
    image={eachProduct.imagesURL}
    brand={eachProduct.brand}
    category={eachProduct.category}
    price={eachProduct.price}
    rating={eachProduct.rating}
    stock={eachProduct.Instock}

    />
  }


  // Rendering inital App component with product details.

    return (
   <div className="product-container">
        {
          productData
            .slice(page*1,1*(page+1))
            .map((content,key) => (
              <div>
                 <h1 className="product-title-heading" onClick={()=>showEach(content)}>{content.title}</h1>
                  <p>{content.description}</p>
                  <img className="product-image" onClick={()=>showEach(content)} src={content.thumbnail.toString()}/>
              </div>
           ))
        }
        <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        pageCount={10}
        marginPagesDisplayed={10}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active-page'}
        nextLinkClassName={'page-link'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        />
    </div>
  );

}

export default App;