import { Link } from "react-router-dom";
import { BiHome, BiCart } from "react-icons/bi";

import './Navbar.css';
import { useSelector } from "react-redux";

function Navbar(){
    const {cartProductIds} = useSelector(state => state.cart);
    
    return (
        <nav>
            <h1>내일의 회</h1>
            <div className="next" id="loginAlert" onClick={() => alert("comming soon 3월15일에 만나요!")}>Odrer</div>
            <ul>
                <li>
                    <Link to='/'>
                        <BiHome />
                    </Link>
                </li>
                <li>
                    <Link to='/cart'>
                        <BiCart />
                        <span>{cartProductIds.length}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;