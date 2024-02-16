import React from 'react'
import './Css/ShopCategory.css'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../component/assets/dropdown_icon.png'
import Item from '../component/Item/Item'
const ShopCategory = (props) =>  {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-category'>
     <img className= 'shopcategory-banner'src={props.banner} alt="" />
     <div className="shopcategory-indexSort">
      <p>
        <span>
          Showing 1-12
        </span>
        out of 36 products
      </p>
      <div className="shopcategory-sort">
        Sort by <img src={dropdown_icon} alt="" />
      </div>
     </div>
     <div className="shopcategory-products">
      {all_product.map((item,i)=>{
        if (props.category===item.category){
      return <Item/>
        }
        else{
          return null;
        }
      })}
     </div>
     <div className="shopcategory-loadmore">
      Explore More
     </div>
    </div>
  )
}

export default ShopCategory