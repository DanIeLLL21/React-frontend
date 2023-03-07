import '../css/productList.css';
import React,{useState,useEffect} from 'react';
import ReactPaginate from 'react-paginate';

function ProductList() {

  const apiURL = "https://dummyjson.com/products?limit=100";


  const [productListData,setProductListData] = useState([]);
  const [page, setPage] = useState(0)


   const fetchProductListData = async () => {
   
      const res = await fetch(apiURL);
      const data = await res.json();

      setProductListData(data.products);
    }

  const handlePageClick = (click) => {
    let pageNumber = click.selected;
    setPage(pageNumber);
  }


  useEffect(() => { 
    fetchProductListData();
  },[]);


    return (
   <div className="product-list-container">
        {
          productListData
            .slice(page*10,10*(page+1))
            .map((content,key) => (
              <div className="product-container" className="" key={key}>
                 <a  className="product-title-heading" href={`/product/${content.id}`}>{content.title}</a>
                  <p className="product-description">{content.description}</p>
                  <a href={`/product/${content.id}`}><img alt="Represeting product of each brand" href={`/product/${content.id}`} className="product-image" src={content.thumbnail.toString()}/></a>
              </div>
           ))
        }
        <div className="pagination-container"> 
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
    </div>
  );

}

export default ProductList;
