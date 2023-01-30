import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Image, Button } from 'react-bootstrap'
import Operatingtime from './Operatingtime'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Review from './Review'


function ViewRestaurant() {

  const params = useParams()
  // console.log(params.id);

  const [allrestareunt, setallrestareunt] = useState([])
  //function to api call for datas inside json file
  const getrestareuntdata = async () => {
    await fetch('/restaurants.json').then(data => {
      data.json().then(result => {
        // console.log(result);
        setallrestareunt(result.restaurants)
      })
    })
  }

  // console.log(allrestareunt);

  const restdata = allrestareunt.find(item => item.id == params.id)
  console.log(restdata);

  useEffect(() => {
    getrestareuntdata()
  }, [])


  return (
    <>
     {restdata?(

        <Row>
          <Col>
            <Image className='p-5' src={restdata.photograph} fluid/>
          </Col>
          <Col className='mt-5'>
            <h1 className='mt-5 fw-bold'>{restdata.name}</h1>
            <h3 className='mt-1'>{restdata.neighborhood}</h3>
            <h5 className='mt-4'>Cusine name : {restdata.cuisine_type}</h5>
            <h6 className='mt-3'>Address : {restdata.address}</h6>

            <Operatingtime timedata={restdata.operating_hours}></Operatingtime>

            <Review reviewData={restdata.reviews}></Review>

          </Col>
        </Row>

          

      ) : 'null'}

    </>

  )
}

export default ViewRestaurant