import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

export default function Shopping_List({
  updateShoppingList,
  shoppingList,
  addItem,
}) {
  if (!shoppingList || !Array.isArray(shoppingList)) {
    return <p>No items in the shopping list.</p>;
  }

  return shoppingList.map((item) => {
    return (
      <ul key={item.id}>
        <Item item={item} updateShoppingList={updateShoppingList} />
      </ul>
    );
  });
}

function Item({ item, updateShoppingList }) {
  return (
    <div>
      <li>
        <div className='items'>
          <h1>{item.name}</h1>
          <div className='plus_minus'>
            Amount:{" "}
            <button onClick={() => updateShoppingList(item.id, 1)}>
              <CiSquarePlus />
            </button>
            <span>{item.quantity}</span>
            <button onClick={() => updateShoppingList(item.id, -1)}>
              <CiSquareMinus />
            </button>
          </div>

          <p>Cost: {item.price}</p>
        </div>
      </li>
    </div>
  );
}
