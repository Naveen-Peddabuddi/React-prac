import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex,
    
`
const Mid = styled.div`
    
`
const Image = styled.div`
    margin-right: 20px;
`
const Votes = styled.div`
    margin-left: 40px;
`
const Restaurant = ({data}) => {
    
  return (
    <Container>
   <Image>
    <img src={data.image} alt="" width="150px"/> 
    </Image>
    <Mid>
            {data.Title} <br/>
            {data.Categories.join(" ")} <br/>
           Cost for Two : {data.CostforTwo} <br/>
            {Object.keys(data.PaymentMethods)}
    </Mid>
    <Votes>
            Reviews: {data.Reviews} <br/>
            TotalVotes : {data.TotalVotes} <br/>
            Rating: {data.Rating}
    </Votes>
    </Container>
  )
}

export default Restaurant