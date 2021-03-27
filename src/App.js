import {useState, useEffect} from 'react'
import './App.css';
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import styled from 'styled-components'
import {auth, db} from './firebase'
import Login from './login'

function App() {
  const[user, setUser] =useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setcartItems]=useState([]);

  const getCartItems=()=>{
    db.collection('cartItems').onSnapshot((snapshot)=>{
      const tempItems=snapshot.docs.map((doc)=>({
        id:doc.id,
        product:doc.data()
      }))
      setcartItems(tempItems);
    })
  }

  const signOut=()=>{
    auth.signOut().then(()=>{
      localStorage.removeItem('user')
      setUser(null)
    })
  }

  useEffect(()=>{
    	getCartItems();
  }, [])

  console.log(cartItems);

  return (
    <Router>
      {
        !user ? (
        <Login setUser={setUser}/>
        ):(
      <Container>
        <Header 
          user={user}
          cartItems={cartItems}
          signOut={signOut}/>
        <Switch>

          <Route path="/cart">
            <Cart cartItems={cartItems}/>
          </Route>
          
          <Route path="/"><Home/></Route>
        </Switch>
      </Container>
      )
    }
    </Router>
  );
}

export default App;

const Container= styled.div`
  background-color: #EAEDED;
`