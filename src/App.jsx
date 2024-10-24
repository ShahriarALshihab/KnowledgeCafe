import { useState } from "react";
import Hero from "./navComponent/Hero";
import Navbar from "./navComponent/navBar";
import Recipes from "./Recipes";
import RecipesTitle from "./RecipesTitle";
import Sidebar from "./Sidebar";

function App() {
  const [recipeQueue, setRecipeQueue] = useState([]); 
  const [preparedRecipe, setPreparedRecipe] = useState([]); 
  const [totalTime, setTotalTime] = useState(0); 
  const [totalCalories, setTotalCalories] = useState(0); 
  const addRecipeToQueue = (recipe) => {  
    const isExist = recipeQueue.find(previousItem => previousItem.recipe_id === recipe.recipe_id)
    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    }
    else {
      alert('Already in Queue!')
    }
      
    
  }

  const handleRemove = (id) => {
    //find which to remove
    const deletedRecipe = recipeQueue.find(item => item.recipe_id === id)
    
    //remove from want to cook table

    const updatedQueue = recipeQueue.filter(item => item.recipe_id !== id)
    setRecipeQueue(updatedQueue)

    setPreparedRecipe([...preparedRecipe,deletedRecipe])
  }

  const calculateTimeAndCalories = (time,calories) => {
    setTotalTime(totalTime + time); 
    setTotalCalories(totalCalories + calories); 
  }

  return (
    <>
      <div className="container mx-auto">
        {/* navbar  */}
        <Navbar></Navbar>
        {/* hero-Section  */}
        <Hero></Hero>
        {/* Recipe's title Section  */}
        <RecipesTitle></RecipesTitle>

        {/* Recipe card section  */}
        <section className="flex  flex-col md:flex-row gap-5">
          {/* cards section  */}
            <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
          {/* sideBar Section  */}
          <Sidebar handleRemove={handleRemove} recipeQueue={recipeQueue} preparedRecipe={preparedRecipe} calculateTimeAndCalories={calculateTimeAndCalories} totalTime={totalTime} totalCalories={totalCalories}></Sidebar>
        </section>
      </div>
    </>
  );
}

export default App;
