import React,{useState,useEffect} from 'react'
import {Link,useHistory}  from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { CreateProductNew, GetProduct } from "../actions/ProductActions";
import {GetProductList} from '../actions/ProductActions'
import { propertyOf } from 'lodash';
import './Product.css'
export const CreateProduct = (props) => {
    // const name=props.name
    // console.log(name)
    const history=useHistory()
    const [title1,setTitle] = useState("")
    const [ProductId,setPid]=useState()
   const [postData,setPostdata]=useState({
      // id:null,
       title:"",
       image:"",
       category:"",
       price:0,
   })
    const dispatch=useDispatch();
   const postData1=useSelector((state)=> state.CreateProduct)
   const products=useSelector((state)=> state.ProductList)
   console.log(products)
   let data1=[...products.data]
  // const [data1,setData1]=useState([...products.data])
   console.log(data1)
   data1.push(postData1.data)
   console.log(data1)
  // products=data1
   console.log("products is=",data1)
    console.log(postData1)
  console.log(postData1.data.id)
  console.log(postData1.data.title)
  
 
const handleSubmit=(e)=>{
  e.preventDefault();
  
   
  //dispatch(createPosts(postData))
  dispatch(CreateProductNew(postData))
 
   
    
}
const changeImage=(e)=>{
    try {
    //   setImage(
    //     URL.createObjectURL(e.target.files[0])
    //  )
    setPostdata({...postData,image:URL.createObjectURL(e.target.files[0])})
    }
    catch {
      return 0
    }
    

  }
useEffect(()=>{
   
    dispatch(GetProductList())
},[dispatch])
const Delete=({id})=>{
console.log({id})
}
    return (
        <>
        <Link to="/ProductList">Products</Link>
        <div className="main">
            
            <div style={{position:"relative",border:'5px solid #1dd1a1'}} className="item">
                 <label for="file">Please select am image</label>
               
           
<input type="file" onChange={changeImage} name="image" id="file"/>




  
   <img src={postData.image} width="200px" height="190px" style={postData.image === "" ? {display: "none"} : {position:"absolute",top:"200px" ,right:"270px",
   
   }}
   
   />
   </div>
   <div className="item">
   
            <form onSubmit={handleSubmit}>
            
          
               
                <label>Title</label><br/>
                <input type="text" value={postData.title} onChange={(e)=>setPostdata({...postData,title:e.target.value})}  />
                <br/>
                <label>Category</label><br/>
                <input type="text" value={postData.category} onChange={(e)=>setPostdata({...postData,category:e.target.value})}  />
                <br/>
                <label>Price</label><br/>
                <input type="number" value={postData.price} onChange={(e)=>setPostdata({...postData,price:e.target.value})}  />
             
                <br/>
                <br/>
                <input type="submit" value="Create product"/>

            </form>
            </div>
            {/* <h2>
                {postData1.data.id}
                {postData1.data.title}
            </h2> */}
            <div className="main" style={{textAlign:'center'}}>
                <span><h2>Latest Products</h2></span><br/>
           <table  width="1200px" border="5" cellSpacing="2">
               <tr>
                   <th>
                       Id:
                   </th>
                   <th>
                       Category:
                   </th>
                   <th>
                       Title:
                   </th>
                   <th>
                       Price:
                   </th>
                   <th>
                       Picture:
                   </th>
                   <th>
                       Actions:
                   </th>
               </tr>
               {
                   data1.map(product=>{
                       const {id,title,category,price,image}=product
                       return(<>
                       <tr key={id}>
                           <td> {id}</td>
                           <td>{title}</td>
                           <td>{category}</td>
                           <td>{price}</td>
                           <td><img src={image} alt="ll" width="200px"  height="200px"/></td>
                           <td>{<Link to={`/Product/${id}`}>Update</Link> }</td>
                           <td>{<button onClick={()=>
                           {
                             
                          console.log("delet prsessed")
                           }
                        }
                         
                        
                        >Delete</button> }</td>

                       </tr>
                       
                       </>)
                   })
               }
           </table>
           </div>
        
        </div>
        </>
    )
}
