import React from 'react'
import "./Home.css"
import Product from '../../components/Product/Product'


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
       <div>mounesh</div>
      
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
}

export default Home
