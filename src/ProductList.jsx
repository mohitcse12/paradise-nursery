import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", price: "$15", thumbnail: "https://images.unsplash.com/photo-1628170563698-4a61ab50fb19" },
        { name: "Spider Plant", price: "$12", thumbnail: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90" }
      ]
    },
    {
      category: "Aromatic Plants",
      plants: [
        { name: "Lavender", price: "$20", thumbnail: "https://images.unsplash.com/photo-1528310901878-db8006e12e1f" },
        { name: "Mint", price: "$10", thumbnail: "https://images.unsplash.com/photo-1620023605655-e40656a8fb72" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  return (
    <div className="product-list">
      {plantsArray.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <div className="products">
            {category.plants.map((plant, plantIndex) => (
              <div className="plant-card" key={plantIndex}>
                <img src={plant.thumbnail} alt={plant.name} width="150" height="150" />
                <h3>{plant.name}</h3>
                <p>{plant.price}</p>
                <button
                  disabled={addedToCart[plant.name]}
                  onClick={() => handleAddToCart(plant)}
                >
                  {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
