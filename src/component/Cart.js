import productList from '../productList.json';

import { removeFromCart, clearAllItem } from '../redux/CartSlice';
import { BiCart } from "react-icons/bi";
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';

function Cart(){
    const {cartProductIds} = useSelector(state => state.cart);
    const cartProductData = productList.products.filter( product => cartProductIds.includes(product.id));
    const dispatch = useDispatch();

    return (
        <div>
            <h3>내일의 회</h3>
            <div className='boxPage'>
                {cartProductData.map((product)=>{
                    return (
                        <figure key={product.id}>
                            <img src={product.imageUrl} alt={product.name}/>
                            <figcaption>
                                <dl>
                                    <dt>{product.name}</dt>
                                    <dd>{product.detail}</dd>
                                    <dd>
                                        { 
                                            <button type='button'
                                        onClick={() => dispatch(removeFromCart(product.id))}>삭제</button>}
                                    </dd>
                                </dl>
                            </figcaption>
                        </figure>
                    )
                })}
               
                
            </div>
            <div>
                <footer>
                    <p>
                        <button type='button'
                        onClick={() => dispatch(clearAllItem)}>비우기</button>
                    </p>
                    
                    {cartProductData.length < 1 &&
                    (<div className='infomation'>
                        <BiCart />
                        <p>장바구니가 비었습니다.<br/>
                            카트에 항목을 추가하지 않았습니다</p>
                    </div>)}
                </footer>
            </div>
            
            
        </div>
    )
}

export default Cart;