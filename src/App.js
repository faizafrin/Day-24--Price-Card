import { Badge, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Cards } from './components/card';

import Stateless from './components/sateless';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)
  
  
  const data = [
    {
    productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDK29PbASuUnMOlAsH07TvvI6ef8bD3wwP7U2uy89ZJFGud1xLmnjSVSTQaSz7EnO9h5Y&usqp=CAU",
    productName:"Samsung Galaxy S20",
    price:"Rs.45,000 - Rs.55,000",
    rating:"⭐⭐⭐⭐⭐"
   
  },
  {
    productImage:"https://m.media-amazon.com/images/I/31VkQxGf8DL._SX300_SY300_QL70_FMwebp_.jpg",
    productName:"vivo V23",
    price:"Rs.25,000 - Rs.30,000",
    rating:"⭐⭐⭐⭐",
  },
  {
    productImage:"https://www.hilaptop.com/userdata/public/gfx/34103.jpg",
    productName:"Google pixel 6a",
    price:"Rs.30,000-Rs.32,000",
    rating:"⭐⭐⭐⭐"
  
  },
  {
    productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQWGTrrrRGgXi5QzLKWIQg0ry7I-owiCF_ig&usqp=CAU",
    productName:"   IPhone 13 ProMax",
    price:"Rs.129,000-135,000",
    rating:"⭐⭐⭐⭐⭐",
    
  },
  {
    productImage:"https://th.bing.com/th?q=Redmi+Note+7+Pro+Caracteristicas&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    productName:"Redmi note 12 pro",
    price:"RS.25,000-Rs.28,000",
    rating:"⭐⭐⭐"
  },
  {
    productImage:"data:image/jpeg;base64,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",
    productName:"Apple iPhone 14 Pro Max",
    price:"Rs.149,000- Rs.150,000",
    rating:"⭐⭐⭐⭐⭐"
  },
  {
    productImage:"https://th.bing.com/th/id/OIP.AbU5vjKcjPQrptXFr5_d1AHaIg?w=169&h=194&c=7&r=0&o=5&dpr=1.1&pid=1.7",
    productName:"Sony Xperia",
    price:"Rs.18,000 - Rs.20,000",
    rating:"⭐⭐⭐",
  },
  {
    productImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPZbY6jJjhe_X1-r18H5w0d_-60EX38MuYg&usqp=CAU",
    productName:"Samsung Galaxy Z Fold 5G",
    price:"Rs.164,000-Rs.165,000",
    rating:"⭐⭐⭐⭐⭐",
  }
];
  return (
    <div className='App'>

<div className=''>
     <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
            
              <NavDropdown.Item href="/prod.productName">
                All products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Popular item</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                New arrivals
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='template'>
      
      
    </div>
    <div className='cart-value'>
        
        <Badge bg="success">
          🛒Cart {count}
        </Badge>
        </div>
        <div className='offer'>
      <class width="60%" direction="left" scrollamount="20" height="100px">
       <h1><i>Buy now 📲📱📲</i></h1>
     </class>
     <class width="60%" direction="right" scrollamount="20" height="100px">
       <h1><i>Grab <span> 60% Offer🛍️🛍️🎊🎊</span></i></h1>
     </class>
      </div> 
      
      <div className='card-container'>
       {data.map((prod,idx)=> <Cards
        key = {idx}
        idx = {idx}
        prod={prod}
        count={count}
        setCount={setCount}/>      
  )}
       
     </div> 
     <Stateless/> 
    
    </div>
    </div>
  );
    
  }
  
    

export default App;