import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Shopping_List from "./components/Shopping_List";

const initialShoppingList = [
  { id: 1, name: "Milk", quantity: 1, price: 2.99, unitPrice: 2.99 },
  { id: 2, name: "Bread", quantity: 1, price: 1.49, unitPrice: 1.49 },
  { id: 3, name: "Eggs", quantity: 1, price: 0.99, unitPrice: 0.99 },
  { id: 4, name: "Butter", quantity: 1, price: 0.89, unitPrice: 0.89 },
  { id: 5, name: "Apples", quantity: 1, price: 2.09, unitPrice: 2.09 },
  { id: 6, name: "Orange Juice", quantity: 1, price: 1.75, unitPrice: 1.75 },
];

function App() {
  const [shoppingList, setShoppingList] = useState(initialShoppingList);

  function updateShoppingList(id, amount) {
    setShoppingList((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(item.quantity + amount, 1);
          const newPrice = newQuantity * item.unitPrice;
          return { ...item, quantity: newQuantity, price: newPrice };
        }
        return item;
      });
    });
  }
  return (
    <>
      <div>
        <Shopping_List
          updateShoppingList={updateShoppingList}
          shoppingList={shoppingList}
        />
      </div>
    </>
  );
}

export default App;
