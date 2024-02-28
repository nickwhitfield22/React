import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./features/authentication/Login";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import Ingredients from "./pages/Ingredients";
import Ingredient from "./features/ingredients/Ingredient";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import Signup from "./features/authentication/Signup";
import ProtectedRoute from "./ui/ProtectedRoute";
import Recipes from "./pages/Recipes";
import Recipe from "./features/recipes/RecipeDetail";
import Settings from "./pages/Settings";

//An example of a recipe url should be:
//localhost:5173/recipes/pasta?recipeId=283929

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        richColors
        toastOptions={{ duration: 3000 }}
      />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="ingredients" element={<Ingredients />} />
            <Route path="ingredients/:ingredientId" element={<Ingredient />} />
            <Route path="recipes/" element={<Recipes />} />
            <Route path="recipes/:query" element={<Recipes />} />
            <Route path="recipes/:query/:recipeId" element={<Recipe />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
