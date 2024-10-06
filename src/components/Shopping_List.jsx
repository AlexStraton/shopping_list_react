import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const shoppingList = [
  { id: 1, name: "Milk", quantity: 1, price: 2.99 },
  { id: 2, name: "Bread", quantity: 1, price: 1.49 },
  { id: 3, name: "Eggs", quantity: 1, price: 0.99 },
  { id: 4, name: "Butter", quantity: 1, price: 0.89 },
  { id: 5, name: "Apples", quantity: 1, price: 2.09 },
  { id: 6, name: "Orange Juice", quantity: 1, price: 1.75 },
];

export default function Shopping_List() {
  return shoppingList.map((item, index) => {
    return (
      <ul key={index}>
        <Item item={item} />
      </ul>
    );
  });
}

function Item({ item }) {
  return (
    <div>
      <li>
        <div className='items'>
          <h1>{item.name}</h1>
          <div className='plus_minus'>
            Amount:{" "}
            <div>
              <CiSquarePlus />
            </div>
            <span>{item.quantity}</span>
            <div>
              <CiSquareMinus />
            </div>
          </div>

          <p>Cost: {item.price}</p>
        </div>
      </li>
    </div>
  );
}
