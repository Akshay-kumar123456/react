// YourComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTotalAirlines, fetchTotalUsers } from '../../actions/executiveActions';
import { Col, Container, Row } from 'react-bootstrap';
 // Adjust the path

function YourComponent() {
  const dispatch = useDispatch();
  const { totalAirlines, totalUsers } = useSelector((state) => state.executive);

  useEffect(() => {
    dispatch(fetchTotalAirlines());
    dispatch(fetchTotalUsers());
  }, [dispatch]);

  return (
    <div>
      <h4>Welcome {localStorage.getItem('name')}</h4>
       <Container style={{marginTop:100}}>
      <Row className="justify-content-center">
        <Col md={4}>
          <div className="card" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
            
            <div className="card-body" style={{
        color: 'var(--BLACK, #060A32)',
        fontFamily: 'Inter',
        fontSize: '64px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '72px'
      }} >{totalAirlines}</div>
      <div className="card-header"  style={{backgroundColor:'darkgrey'}} >
              <h3>Total Airlines</h3>
            </div>
          </div>
        </Col>
        <Col md={2}>
          {/* <div className="card" style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
           
            <div className="card-body"   style={{
        color: 'var(--BLACK, #060A32)',
        fontFamily: 'Inter',
        fontSize: '64px',
        fontStyle: 'normal',
        fontWeight: 700,
        
        lineHeight: '72px'
      }}>{income} /-</div>
       <div className="card-header "  style={{backgroundColor:'darkgrey'}}  >
              <h3>Total Income</h3>
            </div>
          </div> */}
        </Col>
        <Col md={4}>
          <div className="card " style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} >
            
            <div className="card-body"style={{
        color: 'var(--BLACK, #060A32)',
        fontFamily: 'Inter',
        fontSize: '64px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: '72px'
      }}>{totalUsers}</div>
      <div className="card-header "  style={{backgroundColor:'darkgrey'}} >
              <h3>Total Users</h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <br/>
    <br/>
    <br/>

    <hr style={{width:900}}/>
      {/* <p>Total Airlines: {totalAirlines}</p>
      <p>Total Users: {totalUsers}</p> */}
    </div>
  );
}

export default YourComponent;
