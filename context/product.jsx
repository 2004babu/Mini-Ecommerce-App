import React, { createContext, useState } from 'react'

export const Productcontext=createContext({});

export const ContextProvider=({children})=>{
    const [cart,setCart]=useState([])
    const [page,setpage]=useState("Home")
    const [Search,setsearch]=useState('')
    const [data,setdata]=useState([
        {
            "name": "OPPO F21s Pro 5G",
            "price": 245.67,
            "description": "OPPO F21s Pro 5G is a powerful device with a RAM extension feature, that offers brilliant operational speed to users.",
            "ratings": 4.5,
            "images": [
              {
                "image": "https://images.fonearena.com/blog/wp-content/uploads/2022/09/OPPO-F21s-Pro-1024x997.jpg"
              },
              {
                "image": "/images/products/2.jpg"
              }
            ],
            "category": "Mobile Phones",
            "seller": "Amazon",
            "stock": 5
          },
          {
            "name": "WRISTIO HD, Bluetooth Calling Smart Watch",
            "price": 150.32,
            "description": "Minix watches are exclusively designed to fulfill the advanced tech needs of today’s generation.",
            "ratings": 3.5,
            "images": [
              {
                "image": "https://tse3.mm.bing.net/th?id=OIP.636tOMYNoABmNSduSyuvEAHaHa&pid=Api&P=0&h=220"
              }
            ],
            "category": "Accessories",
            "seller": "Flipkart",
            "stock": 9
          },
          {
            "name": "Dell Inspiron 3511 Laptop",
            "price": 440.57,
            "description": "Dell Inspiron 3511 11th Generation Intel Core i5-1135G7 Processor (8MB Cache, up to 4.2 GHz);Operating System: Windows 10 Home Single Language, English",
            "ratings": 2,
            "images": [
              {
                "image": "https://tse1.mm.bing.net/th?id=OIP.FfrWEHlHeTQfoX4oHhcFLwHaEd&pid=Api&P=0&h=220"
              }
            ],
            "category": "Laptops",
            "seller": "Ebay",
            "stock": 9
          },
          {
            "name": "Lenovo IdeaPad Slim 3 Laptop",
            "price": 250.45,
            "description": "Lenovo IdeaPad Slim 311th Gen Intel Core i5-1135G7 | Speed: 2.4 GHz (Base) - 4.2 GHz (Max) | 4 Cores | 8 Threads | 8 MB Cache",
            "ratings": 4,
            "images": [
              {
                "image": "https://tse4.mm.bing.net/th?id=OIP.98irOnoQO4c3CrnBEGlSpQHaFQ&pid=Api&P=0&h=220"
              }
            ],
            "category": "Laptops",
            "seller": "Ebay",
            "stock": 9
          },
          {
            "name": "ASUS VivoBook 15 Laptop",
            "price": 767.32,
            "description": "ASUS VivoBook 15 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W",
            "ratings": 5,
            "images": [
              {
                "image": "https://tse4.mm.bing.net/th?id=OIP.vZcqgacBq7_NWvRiyFC9bAHaE9&pid=Api&P=0&h=220"
              }
            ],
            "category": "Laptops",
            "seller": "Ebay",
            "stock": 9
          },
          {
            "name": "PTron Newly Launched Tangent Sports, 60Hrs Playtime",
            "price": 15.46,
            "description": "Gigantic 60 + Hours of music playtime on a single charge; BT5.2 Wireless headphones with ENC (Environmental Noise Cancellation) Technology to enhance your voice quality over the voice calls",
            "ratings": 5,
            "images": [
              {
                "image": "https://tse4.mm.bing.net/th?id=OIP.7zpq07tmjuoX1aH5dhz83AHaHa&pid=Api&P=0&h=220"
              }
            ],
            "category": "Headphones",
            "seller": "Amazon",
            "stock": 4
          },
          {
            "name": "Campus Men's Maxico Running Shoes",
            "price": 10.12,
            "description": "The high raised back cover with extra padding.",
            "ratings": 3,
            "images": [
              {
                "image": "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/MAXICO-CG-345-BLU-RED_2.jpg?v=1670326320"
              }
            ],
            "category": "Sports",
            "seller": "Ebay",
            "stock": 6
          }
    ])
    
    return(
        <Productcontext.Provider value={{Search,setsearch,cart,setCart,data,setdata,page,setpage}}>
            {children}
        </Productcontext.Provider>
    )
}
