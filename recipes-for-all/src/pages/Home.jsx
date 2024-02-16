import { useIngredients } from "../features/ingredients/useIngredients";

function Home() {
  const { data, isLoading } = useIngredients();

  if (isLoading) return <p>...loading</p>;
  console.log(data);
  return (
    <>
      <h2>{data?.menuItems.length} result(s) found</h2>
      <div className="mx-auto gap-6 sm:grid sm:grid-cols-2">
        {data?.menuItems.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.restaurantChain}</p>
            <img
              className="cursor-pointer rounded-full shadow-lg"
              src={item.image}
              onClick={() => console.log(item.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
