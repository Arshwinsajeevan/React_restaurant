import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Link} from 'react-router-dom'

function Restcard({ data }) {
    console.log(data);
    return (
        <Col className='p-4' sm={12} md={6} lg={4} xl={3} >
           <Container>
              <Link style={{textDecoration:"none",color:"black"}} to={`/view-restaurant/${data.id}`}>
                    <Card className='mt-5 text-center' style={{ width: '100%' }}>
                        <Card.Img className='p-4' variant="top" src={data.photograph}/>
                        <Card.Body>
                            <Card.Title className='fw-bold'>{data.name}</Card.Title>
                            <Card.Text>
                               {data.neighborhood}
                            </Card.Text>
                            {/* <Card.Text className=''>
                               <h6 className=''>{data.address}</h6>
                            </Card.Text> */}
                        </Card.Body>
                    </Card>
              </Link>
           </Container>
        </Col>
    )
}

export default Restcard