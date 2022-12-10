import {useState} from 'react'
import styled from 'styled-components'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  return (
    <MainContainer>
      <CreditCardContainer>
        <Heading>CREDIT CARD</Heading>
        <CreditCardImage data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <p style={{color: '#fff'}}>CARDHOLDER NAME</p>
          <CardName>{name}</CardName>
        </CreditCardImage>
      </CreditCardContainer>
      <PaymentContainer>
        <>
          <Payment>Payment Method</Payment>
          <Input
            onChange={e => setNumber(e.target.value)}
            type="text"
            placeholder="Card Number"
          />
          <Input
            onChange={e => setName(e.target.value)}
            type="text"
            placeholder="Cardholder Name"
          />
        </>
      </PaymentContainer>
    </MainContainer>
  )
}

export default CreditCard

const Input = styled.input`
  width: 100%;
  margin-top: 10px;
`
const Payment = styled.h1``
const PaymentContainer = styled.div`
  padding: 20px;
`

const CreditCardImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 30px;
  width: 400px;
  height: 250px;
  padding: 20px;
`

const CardNumber = styled.p`
     color: '#fff'

  margin-top: 40px;
`
const CardName = styled.p`
  color: '#fff';
`

const CreditCardContainer = styled.div`
  background-color: #3b4b69;
  height: 100vh;
  width: 50vw;
`
const Heading = styled.h1`
  color: #fff;
  text-decoration: underline;
  text-decoration-color: #ffd773;
`

const MainContainer = styled.div`
  display: flex;
`
