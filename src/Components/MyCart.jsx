import React from 'react'
import SecondHeader from '../Components/SecondHeader'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';

const MyCart = () => {
  const location = useLocation();
  const orderItems = location.state?.orderItems || [];

  return (
    <MyCart_content>
      <MyCart_wrapper>
        <SecondHeader />
        <div className='space'>.</div>

        <div style={{ padding: '2rem' }}>
          <h2>My Cart</h2>
          {orderItems.length === 0 ? (
            <p></p>
          ) : (
            orderItems.map((item, index) => (
              <div key={index} style={{
                borderBottom: '1px solid lightgray',
                padding: '1rem 0'
              }}>
                <p><strong>{item.name}</strong></p>
                <p style={{ color: '#5fd861' }}>{item.price}</p>
              </div>
            ))
          )}
        </div>
      </MyCart_wrapper>
    </MyCart_content>
  );
};


export default MyCart

const MyCart_content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MyCart_wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .space{
        width: 100%;
        height: 20vh;
    }
`