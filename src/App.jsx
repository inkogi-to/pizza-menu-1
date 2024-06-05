import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Footer/>
    </div>)
}

function Header() {
  return (
    <header className="header footer">
      <h1>Fast React Pizza Co.</h1>
    </header>)

}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza/>
    </main>)
}

function Footer() {
  const hour = new Date().getHours()
  const openHour = 12
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  return (
    <footer className="footer">
      {isOpen ? (<Order closeHour={closeHour} openHour={openHour}/>) : (
        <p>Were happy to welcome you between {openHour}:00 and {closeHour}:00.</p>)}

    </footer>
  )
}

function Order({closeHour, openHour}) {
  return (
    <div className="order">
      <p>Were open from {openHour}:00 to {closeHour}:00.Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  )
}

function Pizza() {
  const pizzas = pizzaData; // or use [] to simulate no pizzas
  const numPizzas = pizzas.length;

  return (
    numPizzas > 0 ? (
        <>
          <p>Authentic Italian cuisine.6 creative dishes to chose from. All from our stone oven, all organic,all
            delicious</p>
          <ul className="pizzas">
            {pizzas.map(({name, photoName, price, ingredients, soldOut}, index) => (
              <li key={index} className={`pizza ${soldOut ? "sold-out" : ""}`}>
                <img src={photoName} alt={name}/>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{soldOut ? "SOLD OUT" : "$" + price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </>
      )
      :
      (
        <p>Were still working on our menu. Please come back later :)</p>
      )
  )
    ;
}

export default App;
