import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import {useState} from 'react'


function Review({reviewData}) {
    const [open, setOpen] = useState(false);
  return (
    <>
         <Button className='mt-5 ms-3'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
      
        See Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {

                reviewData.map(item=>
                    <div className='p-2 mt-1'>
                        <h3>{item.name} {item.date}</h3>
                        <h6 className=''>Rating : {item.rating}</h6>
                        <h6>{item.comments}</h6>
                    </div>
                )
            }
          </div>
        </Collapse>
    </div>
    </>
  )
}

export default Review