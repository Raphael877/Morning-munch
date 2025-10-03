import React from 'react'
import styled from 'styled-components'
import WebApp_image from '../../assets/WebApp_image.png'
import { useNavigate } from 'react-router-dom';


const CitySub_breakfast = () => {
  const [orderItems, setOrderItems] =React.useState([]);
  const navigate = useNavigate();


  const Array = [
    {
      id: 1,
      img: WebApp_image,
      name: 'Jollof Indomie, and Egg with Beef',
      desc: 'Spicy jollof noodles served with a perfectly cooked egg and tender, seasoned beef a quick, tasty and satisfying meal.',
      price: '8,000.00'
    },
    {
      id: 1,
      img: WebApp_image,
      name: 'Jollof Indomie, and Egg with Beef',
      desc: 'Spicy jollof noodles served with a perfectly cooked egg and tender, seasoned beef a quick, tasty and satisfying meal.',
      price: '8,000.00'
    },
    {
      id: 1,
      img: WebApp_image,
      name: 'Jollof Indomie, and Egg with Beef',
      desc: 'Spicy jollof noodles served with a perfectly cooked egg and tender, seasoned beef a quick, tasty and satisfying meal.',
      price: '8,000.00'
    },
    {
      id: 1,
      img: WebApp_image,
      name: 'Jollof Indomie, and Egg with Beef',
      desc: 'Spicy jollof noodles served with a perfectly cooked egg and tender, seasoned beef a quick, tasty and satisfying meal.',
      price: '8,000.00'
    },
    {
      id: 1,
      img: WebApp_image,
      name: 'Jollof Indomie, and Egg with Beef',
      desc: 'Spicy jollof noodles served with a perfectly cooked egg and tender, seasoned beef a quick, tasty and satisfying meal.',
      price: '8,000.00'
    },
    {
      id: 1,
      img: WebApp_image,
      name: 'Jollof Indomie, and Egg with Beef',
      desc: 'Spicy jollof noodles served with a perfectly cooked egg and tender, seasoned beef a quick, tasty and satisfying meal.',
      price: '8,000.00'
    },
  ]
  return (
    <Food>
        <Food_wrapper>
            <Left>
              {Array.map((item) => (
                <div className='food_info'>
                    <div className='food_info_wrapper'>
                        <img src={item.img} />
                        <div className='info'>
                            <p>{item.name}</p>
                            <p style={{color : 'grey'}}>{item.desc}</p>
                            <div className='money_icon'>
                                <h3 style={{color: '#5fd861'}}>{item.price}</h3>
                                <div style={{ cursor:"pointer"}}
                                
                                onClick={() => setOrderItems([...orderItems, item])}>+</div>
                            </div>
                        </div>
                    </div>
                </div>
              ))}
            </Left>
            <Right>
  <div className='right_info'>
    <div className='right_info_wrapper'>
      <h2 style={{ textAlign: "center" }}>Your Order</h2>

      {/* Render Ordered Items */}
      <div>
        {orderItems.map((order, index) => (
          <div key={index} style={{ marginBottom: '1rem' }}>
            <p><strong>{order.name}</strong></p>
            <p style={{ color: '#5fd861' }}>{order.price}</p>
          </div>
        ))}
      </div>

      {/* Place Order Button */}
      {orderItems.length > 0 && (
        <button style={{
          width: '100%',
          padding: '1rem',
          marginTop: '2rem',
          backgroundColor: '#5fd861',
          color: 'white',
          border: 'none',
          borderRadius: '0.3rem',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
        onClick={() => navigate('/cart', { state: { orderItems } })}>
          Place Order
        </button>
      )}
    </div>
  </div>
</Right>
        </Food_wrapper>
    </Food>
  )
}

export default CitySub_breakfast

const Food = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

const Food_wrapper = styled.div`
  width: 82%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .food_info{
    width: 100%;
    height: 26vh;
    border: 1px solid lightgray;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    .food_info_wrapper{
        width: 96%;
        height: 86%;
        display: flex;
        gap: 1.3rem;

        img{
            width: 30%;
            height: 100%;
            border-radius: 0.5rem;
        }

        .info{
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .money_icon{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
  }
`

const Right = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: flex-end;

  .right_info{
    width: 100%;
    height: 100vh;
    border: 1px solid lightgray;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 40vh;

    .right_info_wrapper{
        width: 95%;
        height: 95%;

    }
  }
`