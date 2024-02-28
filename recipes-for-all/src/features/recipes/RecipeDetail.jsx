import { useIngredientId } from "../ingredients/useIngredientId";
import { useGetRecipeInstructions } from "./useGetRecipeInstructions";
import Spinner from "../../ui/Spinner";
import HR from "../../ui/HR";
import Results from "../../ui/Results";

function Recipe() {
  const { ingredient, isLoading } = useIngredientId();
  const { instructions, isLoading: isLoading2 } = useGetRecipeInstructions();

  if (isLoading || isLoading2) return <Spinner />;
  return (
    <>
      <Results>{ingredient?.ingredients?.length} result(s) shown</Results>
      <HR>Ingredients</HR>
      {ingredient.ingredients
        .filter((ing) => ing.name !== "removed")
        .map((ing) => (
          <div
            className="grid grid-cols-2 items-center border-r-indigo-300"
            key={ing.name + Math.random()}
          >
            <p>{ing.name}</p>{" "}
            <span>{`${ing.amount.us.value} ${ing.amount.us.unit}`}</span>
          </div>
        ))}
      <HR>Instructions</HR>
      {instructions[0]?.steps.map((step) => (
        <div className="flex flex-col" key={step.number}>
          <p className="mb-2">
            {step.number}. {step.step}
          </p>
        </div>
      ))}
    </>
  );
}

export default Recipe;
