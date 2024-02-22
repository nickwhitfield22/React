import { useNavigate, useSearchParams } from "react-router-dom";
import { useIngredients } from "../features/ingredients/useIngredients";
import Spinner from "../ui/Spinner";
import Results from "../ui/Results";
import { SHOW_IMAGES_sm } from "../utils/helper";

function Ingredients() {
  const { ingredients, isLoading } = useIngredients();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  console.log(ingredients);

  if (isLoading) return <Spinner />;
  return (
    <>
      <Results>{ingredients?.results.length} result(s) found</Results>
      <div className="mx-auto">
        {ingredients?.results.map((item) => (
          <div
            className="grid grid-cols-10 items-center space-y-5 text-center "
            key={item.id}
          >
            <img
              className="col-start-1 h-10 w-10 cursor-pointer rounded-full shadow-lg"
              src={`${SHOW_IMAGES_sm}${item.image}`}
              onClick={() => {
                searchParams.set("ingredientsId", item.id);
                navigate(`/ingredients/${item.id}`);
              }}
            />
            <p className="col-start-3 text-nowrap">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Ingredients;
