import { Link } from "react-router-dom";

function Recipes() {
  return (
    <Link className="hover:text-blue-500 hover:underline" to=":recipe">
      recipe
    </Link>
  );
}

export default Recipes;
