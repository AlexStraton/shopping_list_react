import { useState } from "react";
import "./App.css";
import Shopping_List from "./components/Shopping_List";
import AddItem from "./components/Add_Item";

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
  const [addedItem, setAddedItem] = useState({ name: "", price: "" });
  const [showAddItem, setShowAddItem] = useState(false);

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

  function addItem(item) {
    setShoppingList((prevItems) => [
      {
        ...item,
        id: prevItems.length + 1,
        quantity: 1,
        unitPrice: parseFloat(item.price),
        price: parseFloat(item.price),
      },
      ...prevItems,
    ]);
    setAddedItem({ name: "", price: "" });
  }

  return (
    <>
      <div>
        <button onClick={() => setShowAddItem(!showAddItem)}>
          {showAddItem ? "Cancel" : "Add Item"}
        </button>
        {showAddItem ? (
          <AddItem
            addItem={addItem}
            addedItem={addedItem}
            setAddedItem={setAddedItem}
          />
        ) : null}

        <Shopping_List
          updateShoppingList={updateShoppingList}
          shoppingList={shoppingList}
          addedItem={addedItem}
          addItem={addItem}
        />
      </div>
    </>
  );
}

export default App;
