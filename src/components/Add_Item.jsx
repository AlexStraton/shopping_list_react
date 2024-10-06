export default function AddItem({ addedItem, setAddedItem, addItem }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setAddedItem((prevItem) => ({ ...prevItem, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    addItem(addedItem);
  }

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label>Item name:</label>
        <input
          name='name'
          onChange={handleChange}
          type='text'
          value={addedItem.name}
        />
        <label>Cost:</label>
        <input
          name='price'
          onChange={handleChange}
          value={addedItem.price}
          type='text'
        />
        <button>Add</button>
      </form>
    </>
  );
}
