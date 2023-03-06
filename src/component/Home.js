import productList from '../productList.json';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/CartSlice';
import { fetchAllProducts } from '../redux/ProductList';

import './Home.css';
import { useEffect, useState } from 'react';


function Home(){
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const [data, setData] = useState([]);
    const {cart,products} = state;
    // const {cartProductIds} = useSelector(state => state.cart);
    useEffect(() => {
        dispatch(fetchAllProducts('./productList.json/products'))
    },[dispatch])
    return (
        <div className='boxHome'>
            {/* products.data? true 였을 떄의 작업 : error 연결 */}
            {productList.products.map((product)=>{
                return (
                    <figure key={product.id}>
                    <img src={product.imageUrl} alt={product.name}/>
                    <figcaption>
                        <dl>
                            <dt>{product.name}</dt>
                            <dd>{product.price}원</dd>
                            <dd>
                                { !cart.cartProductIds.includes(product.id) &&
                                (<button type='button'
                                onClick={() => {dispatch(addToCart(product.id))}}>추가</button>)}
                                { cart.cartProductIds.includes(product.id) &&
                                (<button type='button'
                                onClick={() => {dispatch(removeFromCart(product.id))}}>삭제</button>)}
                            </dd>    
                        </dl>
                    </figcaption>
                </figure>
                )
            })}
            <div>
                <footer className='info'>
                    <h2>오늘회 고객센터 1661-1319</h2>
                    <ul className='service'>
                        <li>고객센터</li>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                        <li>공지사항</li>
                        <li>입점문의</li>
                    </ul>
                    <small className='lince'>(주)오늘식탁</small>
                </footer>
            </div>
            
        </div>
    )
}

export default Home;