// import React from 'react'
// import Table from "react-bootstrap/Navbar";
// import { useParams } from 'react-router-dom';
// const CardDetails = () => {
//   const {id} = useParams();
//   console.log(id)
//   return (
// <>
// <div className="container mt-2">
//   <h2 className='text-center'>Items Details Page</h2>
//   <section className='container mt-3'>
//     <div className="iteamsdetails">
// <div className="items_img">
//   <img src="https://b.zmtcdn.com/data/pictures/9/18857339/8f53919f1175c08cf0f0371b73704f9b_o2_featured_v2.jpg?output-format=webp" alt="" />
// </div>
// <div className="details">
//   <Table>
//     <tr>
//       <td>
//         <p><strong>Restaurant</strong> : Massala Theory</p>
//             <p><strong>Price</strong> : ₹300</p>
//                 <p><strong>Dishes</strong> : North Indian, Biryani, Mughlai</p>
//                     <p><strong>Total</strong> : ₹300</p>
//       </td>
//       <td>
//         <p><strong>Rating :</strong><span style={{background: 'green',color:'#ffff',padding:'2px 5px',borderRadius:'5px'}}>3.5 ★</span></p>
//         <p><strong>Order Review :</strong><span >1175 +</span>Ordered Placed from here recently</p>
//         <p><strong>Remove :</strong><span ><i className='fas fa-trash' style={{color : 'red',fontSize:'20px',cursor:'pointer'}}></i></span></p>
//       </td>
//     </tr>
//   </Table>
// </div>
//     </div>

//   </section>

// </div>
// </>
//   )
// }

// export default CardDetails



import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table"; // ✅ FIXED: should import from Table, not Navbar
import { useNavigate, useParams } from 'react-router-dom';
import {useDispatch, useSelector}from 'react-redux';;
import { DLT } from '../redux/actions/action';

const CardDetails = () => {
  const [data,setData] = useState([]);
  console.log(data)
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  // usenavigata hook
  const navigate = useNavigate()

const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData);

  const compare = ()=>{
    let compareData = getData.filter((e)=>{return e.id == id});
    setData(compareData)
  }

  // dlt function
  const dlt = (id)=>{
    dispatch(DLT(id));
    navigate('/')
  }
  // useeffect
  useEffect(()=>{
    compare();

  },[id])

  return (
    <>
      <div className="container mt-2">
        <h2 className='text-center'>Items Details Page</h2>
        <section className='container mt-3'>
          <div className="iteamsdetails">
            {data.map((ele)=>{
              return (
                <>
               <div className="items_img">
              <img
                src={ele.imgdata}
                alt="image"
              />
            </div>
            <div className="details">
              <Table>
                <tbody>
                  {/* ✅ Added <tbody> for correct table structure */}
                  <tr>
                    <td>
                      <p><strong>Restaurant</strong> : {ele.rname}</p>
                      <p><strong>Price</strong> : {ele.price}</p>
                      <p><strong>Dishes</strong> : {ele.rname}
            </p>
                      <p><strong>Total</strong> : ₹300</p>
                    </td>
                    <td>
                      <p>
                        <strong>Rating :</strong>
                        <span style={{ background: 'green', color: '#fff', padding: '2px 5px', borderRadius: '5px' }}>
                        {ele.
rating
} ★
                        </span>
                      </p>
                      <p><strong>Order Review :</strong> <span> </span> {ele.somedata}</p>
                      <p>
                        <strong>Remove :</strong>
                        <span>
                          <i className='fas fa-trash' style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }} onClick={()=>dlt(ele.id)}></i>
                        </span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
        
                </>
              )
            })}
           
          </div>
        </section>
      </div>
    </>
  );
}

export default CardDetails;
