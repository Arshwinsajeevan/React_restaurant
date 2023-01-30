// import React from 'react'
// import { useState, useEffect } from 'react'

// function Restaurentlist() {
//   const [allrestaurent, setallrestaurent] = useState([])

//   // function to api call for datas inside json file
//   const getrestaurentdata =async ()=>{
//     await fetch('/restaurents.json').then(data=>{data.json().then(result=>{
//           setallrestaurent(result.restaurants)
//         })
//       })
//   }

//   console.log(allrestaurent);

//   useEffect(()=>{
//     getrestaurentdata()
//   }, [])

//   return (

//     <div>
//       {
//         allrestaurent.map(item=>(
//           <h1>{item.name}</h1>
//         ))
//       }
//     </div>

//   )
// }

// export default Restaurentlist

import  React from 'react'
import  {useState ,useEffect} from 'react'
import Restcard from './Restcard'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Restarauntlist() {
    const [allrestareunt,setallrestareunt]=useState([])
      //function to api call for datas inside json file
      const getrestareuntdata=async ()=>{
        await fetch('/restaurants.json').then(data=>{data.json().then(result=>{
            // console.log(result);
            setallrestareunt(result.restaurants)
        })
      })
    }
      // console.log(allrestareunt);
      useEffect(()=>{
        getrestareuntdata()
      },[])
      
  return (
  
    <Row>
      {
        allrestareunt.map(item=>(
          <Restcard data={item}/>
        ))
      }
    </Row>
  )
}

export default Restarauntlist