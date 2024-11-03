import { useCart } from './CartContext';
import Nav from './Header';
import Remove from '../public/delete.svg'
import './Cart.css';

function Cart() {
    const { cart, addToCart, removeFromCart, removeOneFromCart, clearCart } = useCart();

    const handleCheckout =() => {
        alert('Checked out successfully!');
        clearCart();
    }

    const totalQuantity = () => cart.reduce((sum, item) => sum + Math.floor(item.quantity), 0);
    const total = () => cart.reduce((sum, item) => sum + Math.floor(item.price*item.quantity), 0);

    return (
        <div>
            <Nav />
            <h1>Your Cart</h1>
            <div className="cart-template">
                {cart.length > 0 ? (
                    <>
                        <div className="cart-container">
                            {cart.map((item, index) => (
                                <div className='cart' key={index}>
                                    <div className="item-description">
                                        <img src={item.image} alt="item image" height={100} width={100} />
                                        <div>{item.title}</div>
                                    </div>
                                    <div className="count-change">
                                        <div className='price'>${item.price*item.quantity}</div>
                                        <div className="redact-num">
                                            <button onClick={() => removeOneFromCart(item.title, item.quantity)}>-</button>
                                            <div>{item.quantity}</div>
                                            <button onClick={() => addToCart(item)}>+</button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.title)}><img src={Remove} alt='trash image' height={30} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="total">
                            <div className="quantity">
                                <div>Number of items:</div>
                                <div>{totalQuantity()}</div>
                            </div>
                            <div className="amount">
                                <div>Total Amount:</div>
                                <div>${total()}</div>
                            </div>
                            <button onClick={handleCheckout}>Checkout</button>
                        </div>
                    </>
                    ) : (
                        <h2>Your cart is empty.</h2>
                )}
            </div>
        </div>
    );
}

export default Cart;