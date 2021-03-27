import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Product from './Product'
import {db} from './firebase'

function Home() {
    const [products, setProducts] =useState([])

    const getProducts= ()=>{
        db.collection('products').onSnapshot((snapshot)=>{
            let tempProducts=[]

            tempProducts=snapshot.docs.map((doc)=>(
                {
                    id:doc.id,
                    product: doc.data()
                }
            ));
            setProducts(tempProducts);
        })
    }

    useEffect(()=>{
        getProducts()
    }, [])
    
    

    return (
        <Container>
            <Banner>

            </Banner>

            <Content>
                {
                    products.map((data)=>(
                        <Product
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id={data.id}
                        />
                    ))
                }
                
            </Content>
        </Container>
    )
}

export default Home


const Container=styled.div`
    margin: 0 auto;
    max-width: 1800px;
`

const Banner=styled.div`
//https://i.imgur.com/SYHeuYM.jpg
//https://thumbs.dreamstime.com/b/wild-flowers-plant-summer-autumn-nature-background-banner-website-55976971.jpg
    background-image:url(https://i.imgur.com/SYHeuYM.jpg);
    min-height:600px;
    background-position: center;
    background-size:cover;
    z-index:1;
    -webkit-mask-image: linear-gradient(to top, transparent 10%, black 75%);
    mask-image: linear-gradient(to top, transparent 10%, black 75%);
`

const Content=styled.div`
    padding-left:10px;
    padding-right:10px;
    margin-top: -350px;
    display:flex;
    flex-wrap:wrap;
`