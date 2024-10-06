export default function AddItem({ shoppingList, setShoppingList }) {
  return (
    <>
      <form className='form'>
        <label>Item name:</label>
        <input type='text' />

        <label>Cost:</label>
        <input type='text' />
        <button>Add</button>
      </form>
    </>
  );
}
