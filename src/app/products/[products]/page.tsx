import React from 'react';


const products = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: "$20",
    image: "./chair.2.png", 
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: "$20",
    image: "./cair3.png", 
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: "$20",
    image: "./chair4.png", 
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: "$20",
    image: "./chair5.png", 
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: "$20",
    image: "./images/chair6.png", 
  },
  {
    id: 6,
    name: "Library Stool Chair",
    price: "$20",
    image: "./images/chair7.png", 
  },
  {
    id: 7,
    name: "Library Stool Chair",
    price: "$20",
    image: "./images/chair8.png", 
  },
  {
    id: 8,
    name: "Library Stool Chair",
    price: "$20",
    image: "./images/chair9.png", 
  },
];

const Product = () => {
  return (
    <div>
      <div>
        <span className="text-4xl flex font-bold w-[205px] mt-12 h-[35px] ml-[557px]">
          Our Products
        </span>
      </div>

      <section className="mt-24 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={product.name} 
                    className="object-cover object-center w-[312px] h-[312px] block"
                    src={product.image} 
                  />
                </a>
                <div className="mt-4">
                  <h2 className="text-cyan-600 title-font text-lg font-medium">
                    {product.name} 
                  </h2>
                  <p className="mt-1">{product.price} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
