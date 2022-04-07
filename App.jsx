import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Restaurant from './components/Restaurant';
function App() {
  const [data,setData] = useState([])
  const [rating, setRating] = useState(1)
  const [payment, setPayment] = useState(`true`)
  const [pricesort, setPricesort] = useState(`asc`);
  const [pages, setPages] = useState(1)
  useEffect(()=> {
    Pulling(rating,payment,pricesort,pages)

  },[rating,payment,pricesort,pages]) 
  
  const Pulling = (rating,payment,pricesort,pages)=> {
    axios.get(`http://localhost:3004/get-restaurant/?Rating_gte=${rating}&PaymentMethods.${payment}&_sort=CostforTwo&_order=${pricesort}&_page=${pages}&_limit=4`)
    .then((res)=> {
      setData(res.data)
    })
  }
  const ratings = [{id:1},{id:2},{id:3},{id:4},{id:5}]
  const handlebutton = (e)=> {
      setRating(e)
  }
  const handlepayment = (e)=> {
    console.log(e)
    e? setPayment(`${e}=true`):setPayment(`true`) 
    // setPayment(`${e}=true`)
  }
  const handlepricesort = (e)=> {
      (e)? setPricesort(`desc`) : setPricesort(`asc`)
  }
  const handlepages = (e)=> {
      setPages(pages+(e))
  }
  return (
    <div className="App">
        
       {ratings.map((el)=> (
         <button key={el.id} onClick={() => handlebutton(el.id)}>
           {el.id} Star
         </button>
       ))}
        <br />
        <button onClick={() => handlepayment(false)}> 
          All
        </button>
       <button onClick={() => handlepayment("cash")}>
         Cash
       </button>
       <button onClick={() => handlepayment("card")}>
         Card
       </button>
        <button onClick={() => handlepayment("upi")}>
          Upi
         </button>
          <br />
         <button onClick={()=>handlepricesort(true)}>
           High to Low
         </button>
         <button onClick={()=>handlepricesort(false)}>
           Low to High
         </button>
      {data.map((el)=> (
         <div key={el.id}>
           <hr />
           <Restaurant data = {el}/>
           <hr />
        </div>
      ))}
     <button disabled={pages===5} onClick={()=> handlepages(1)}>
       Next
     </button>
     <button disabled={pages===1} onClick={()=> handlepages(-1)}>
        Prev
     </button>
    </div>
  );
}

export default App;
