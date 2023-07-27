function ItemListContainer({ greeting }) {
  return (
    <div className="text-center text-9xl bg-slate-500 h-screen mt-24">
      <img className="pt-10 pl-80" src="./logo192.png" alt="" />
      <h2 className="pt-60">{greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
