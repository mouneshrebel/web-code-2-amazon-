import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://img.freepik.com/free-vector/dairy-farm-text-label_1308-89775.jpg?size=626&ext=jpg&uid=R101342376&ga=GA1.1.1061175198.1706787495&semt=ais"
          alt="logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option" onClick={login}>
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span className="header__optionLineTwo"> & Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">ARKM</span>
            <span className="header__optionLineTwo">Dairy</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import { useStateValue } from "../../components/StateProvider/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "../../components/Checkoutproduct/Checkoutproduct";
import Subtotal from "../../components/Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="http://www.jibal.ma/wp-content/uploads/2023/02/jibal.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy or more items, click "Add
              to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;


home.js 


const Home = () => {
  return (
    
    <div className="home">
      <div className='heading'>
        AKRM Dairy Manager
      </div>
      <img
         className="home__image"
         src="https://jefflambert.com/wpb/wp-content/uploads/2010/09/landing_dannon-products.png"
         alt=""
       />
      
      
      <div className="home__row">
        <Product
          id="12345123"
          title=" ARKM Combo of Milkshake Drink Mix 100g x 8 Flavors (Chocolate, Strawberry, Rose, Mango)"
          image="https://tse1.mm.bing.net/th?id=OIP.roCedugkllKrAHH7y28_PQHaE8&pid=Api&P=0&h=180"
          price={120}
          rating={5}
        />
        <Product
          id="12345123"
          title="GOOD&MOORE Combo of 5 | Sugar free Roasted Hazelnut, Sugar free Cinnamon | For Coffee, Milkshake, Frappe, Cold-coffee"
          image="https://tse2.mm.bing.net/th?id=OIP.6JVT5SSWJsmMEfbrJFo5tAHaE8&pid=Api&P=0&h=180"
         
          price={699}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="123445"
          title="Chocolate Shake with Real Belgian Chocolate| Milk Shakes|Choco Milk Shake Bottle, 180 ml
          Chocolat"
          image="https://tse1.mm.bing.net/th?id=OIP.Ar3Kt3sIHz_83SU6u7InXAHaHa&pid=Api&P=0&h=180"
          price={30}
          rating={4}
        />

        
        <Product
          id="123423"
          title=" Organic Cow Milk (UHT) Pack Of 4 (1 Ltr), Liquid Pure Antibiotic-Free Milk, Long-Shelf Life, Low-Calorie, Low-Fat, No Chemical Residues, Convenient And Ready-To-Use, Nutritious…"
          image="https://tse2.mm.bing.net/th?id=OIP.ctT_oS2vZcP-EdpjMbuNegHaKX&pid=Api&P=0&h=180"
          price={499}
          rating={4}
        />
        <Product
          id="123423"
          title="Organic Cow Milk , Liquid Pure Antibiotic-Free Milk,"
          image="https://tse2.mm.bing.net/th?id=OIP.kRM92M93Ea5rRv8vJKy08gHaOU&pid=Api&P=0&h=180"
          price={60}
          rating={4}
        />
        <Product
          id="11544"
          title="Organic Curd, home-style curd, zero- preservatives, fresh and nutritious by nature - 200g "
          image="https://tse3.mm.bing.net/th?id=OIP.4lcWNnAeJDVfRG6n8iz8IQAAAA&pid=Api&P=0&h=180"
          price={25}
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id="12347653"
          title="Milk & Milk Products Mango Lassi Tetra Pak, 180 ml (Pack of 15)"
          image="https://tse3.mm.bing.net/th?id=OIP.nqkRZ7vYaoVAOqOLS_fWmwHaE3&pid=Api&P=0&h=180"
          price={375}
          rating={4}
        />

        <Product
          id="12347653"
          title="Nutra Vita Grated Pizza Cheese (Freeze Dried, Natural, Rehydratable, Long Shelf Life, Travel Friendly) (200 Gram)"
          image="https://tse2.mm.bing.net/th?id=OIP.rbyG8UUM_MCAegE4ZJw8igHaGL&pid=Api&P=0&h=180"
          price={110}
          rating={4}
        />
        <Product
          id="12347653"
          title="Probiotics Greek Yogurt Starter Culture - Creamy, Tangy, and Nutrient-Packed "
          image="https://tse3.mm.bing.net/th?id=OIP.nZBm3A9iPaVubour-loyrgHaGo&pid=Api&P=0&h=180"
          price={50}
          rating={4}
        />

         <Product
          id="12347653"
          title="Triple Zero Greek Yogurt Starter Culture - Creamy, Tangy, and Nutrient-Packed |"
          image="https://tse4.mm.bing.net/th?id=OIP.eiVcRL0sjotR8ZevUICHWwHaHa&pid=Api&P=0&h=180"
          price={60}
          rating={4}
        />
        
      </div>
      <div className="home__row">
        <Product
          id="12345123"
          title=" Oh Greek Yogurt Starter Culture - Creamy, Tangy, and Nutrient-Packed"
          image="https://tse3.mm.bing.net/th?id=OIP.eLDs7zOpCUGTlpmTfAC1tgHaFi&pid=Api&P=0&h=180"
          price={55}
          rating={5}
        />
        <Product
          id="12345123"
          title="Combo Triple Zero Protein dairy Starter Culture - Creamy, Tangy, and Nutrient-Packed |"
          image="https://tse2.mm.bing.net/th?id=OIP.5UZ6VYc6jFkyDYIZv3OIPAHaCY&pid=Api&P=0&h=180"
         
          price={250}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="12345123"
          title="Combo Triple Zero Greek shake Starter Culture - Creamy, Tangy, and Nutrient-Packed |"
          image="https://tse4.mm.bing.net/th?id=OIP.KLDaOTe2pkpZZK3wKx6p3QAAAA&pid=Api&P=0&h=180"
          price={899}
          rating={5}
        />
        </div>

        <div>
          
        </div>




    </div>
  )
};

 checkout.js

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="http://www.jibal.ma/wp-content/uploads/2023/02/jibal.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket. To buy or more items, click "Add
              to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your shopping basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

login.js

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };
  
  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {})
      .catch((err) => alert(err.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://img.freepik.com/free-vector/dairy-farm-text-label_1308-89775.jpg?size=626&ext=jpg&uid=R101342376&ga=GA1.1.1061175198.1706787495&semt=ais"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login__signInButton" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to  ARKM Dairy  farm manager of Use & Sale. Please
          see our Privacy Noticy, our Cookies Notice and our Internet-Based Ads
          Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your ARKM Dairy Farm Account
        </button>
      </div>
    </div>
  );
};