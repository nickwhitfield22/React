import { useParams } from "react-router-dom";

function Ingredient() {
  const { ingredientId } = useParams();
  return ingredientId;
}

export default Ingredient;
