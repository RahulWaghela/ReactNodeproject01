import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets';

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
       <h1>Explore our Menu</h1>
     <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequatur accusantium assumenda error odio provident molestias repellat modi similique ut?</p>
     <div className="explore-menu-list">
        {menu_list.map((item, index) =>{
            return(
                <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name ? "All" : item.menu_name)} className="explore-menu-list-item">
                    <img className={category===item.menu_name ? "active" :""} src={item.menu_image} alt={item.menu_name} />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
     </div>
    </div>
  )
}

export default ExploreMenu