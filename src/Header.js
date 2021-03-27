import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import {Link} from 'react-router-dom'

function Header ({cartItems, user, signOut}) {

    const getCount=()=>{
        let count=0;
        //loop through all cart items
        cartItems.forEach((item) => {
            //add the qty of the cart item to total
            count+=item.product.quantity
        })

        return count;
    }

    return (
        <Container>
            <HeaderLogo>
                <Link to ="/">
                    <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"}/>
                </Link>
            </HeaderLogo>
            
            <HeaderOptionAdress>
                <LocationOnIcon/>
                <HeaderOption>
                    <OptionLineOne>Hello, {user.name}!</OptionLineOne>
                    <OptionLineTwo>Select your adress</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAdress>
            
            <HeaderSearch>
                <HeaderSearchInput type="text"/>
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>

                <HeaderOption onClick={signOut}>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Accounts & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

               
                <HeaderOptionCard>
                    <Link to="/cart">
                        <ShoppingCartIcon/>
                        <CartCounter>{getCount()}</CartCounter>
                    </Link>
                </HeaderOptionCard>
            </HeaderNavItems>
        </Container>
    )
}

export default Header



const Container = styled.div`
    height:60px;
    background-color: #0F1111;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:white;
`
const HeaderLogo=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:100px;
        margin-left:11px;
        margin-top:10px;
    }
`

const HeaderOptionAdress = styled.span`
    padding-left: 9px;
    display:flex;
    align-items:center;
`

const OptionLineOne = styled.div``

const OptionLineTwo = styled.div`
    font-weight: 700;
`

const HeaderSearchInput =styled.input`
    flex-grow:1;
    border:0;
    :focus{
        outline:none;
    }
`

const HeaderSearch=styled.div`
    display:flex;
    flex-grow: 1;
    height:40px;
    border-radius: 4px;
    overflow:hidden;
    margin-left:4px;
    background-color:white;
    :focus-within{
        box-shadow: 0 0 0 2px #F90;
    }
`

const HeaderSearchIconContainer=styled.div`
    background-color: #febd69;
    width:45px;
    color:black;
    display:flex;
    justify-content: center;
    align-items:center;
`

const HeaderOption =styled.div`
    padding: 10px 9px;
    cursor: pointer;
`

const HeaderNavItems =styled.div`
    display:flex;

`

const HeaderOptionCard=styled.div`
    display:flex;
    a{
        display:flex;
        align-items:center;
        padding-right:9px;
        color:white;
        text-decoration:none;
    }
`

const CartCounter =styled.div`
    padding-left: 4px;
    font-weight:700;
    color:#f08804;
`