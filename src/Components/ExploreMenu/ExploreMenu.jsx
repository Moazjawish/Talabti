/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category , setCategory}) => {
return (
<div className='explore-menu flex  flex-col gap-5' id='explore-menu'>
    <h1 >Explore our menu</h1>
    <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut est unde at quibusdam similique, nisi voluptatibus eaque, numquam nam quidem pariatur provident explicabo illum cumque, voluptatem quis facilis veritatis sint!</p>
    <div className="explore-menu-list flex  justify-center items-center  text-center">
    {menu_list.map((item , indexed)=>{
        return( <div onClick={()=>setCategory(prev=> prev===item.menu_name ? 'All': item.menu_name)} key={indexed} className='explore-menu-list-item'>
            <img className={category === item.menu_name ?'active' : ''} src={item.menu_image} alt=""/>
            <p>{item.menu_name}</p>
        </div>)
    })}
        </div>
        <hr/>
    </div>
)}

export default ExploreMenu
