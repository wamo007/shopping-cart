import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import './Shop.css';
import Nav from "./Header";

function Shop () {
    
    const [cards, setCards] = useState([]);
    const [category, setCategory] = useState();
    const { addToCart } = useCart();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", { mode: 'cors' })
            .then((response) => response.json())
            .then((response) => {
                const newCard = response.map(item => ({
                    title: item.title,
                    category: item.category,
                    price: item.price,
                    image: item.image,
                    quantity: 1
                }));
                setCards(newCard);
            })
            .catch((error) => console.error(error));
    }, []);

    const categoryChange = (event) => {
        const catItem = event.target.value;
        setCategory(catItem);
    }

    return (
        cards && (
            <>
                <Nav />
                <div className="general">
                    <select name="shop-drop" id="shop-drop" onChange={categoryChange} defaultValue=''>
                        <option value="" disabled>Category</option>
                        <option value="all">All</option>
                        <option value="men's clothing">Men</option>
                        <option value="women's clothing">Women</option>
                        <option value="jewelery">Jewelry</option>
                        <option value="electronics">Electronics</option>
                    </select>

                    <h1>{category ? category.toUpperCase() : "ALL ITEMS"}</h1>

                    <div className="card-container">
                        {cards
                        .filter(card => category === 'all' || card.category === category || !category)
                        .map((card, index) => (
                                <div className='card' key={index}>
                                    <img src={card.image} alt="" width={100} />
                                    <div className="description">
                                        <h3>${card.price}</h3>
                                        <h4>{card.title}</h4>
                                        <button onClick={() => addToCart(card)}>Add To Cart</button>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </>
        )
    )
}

export default Shop ;