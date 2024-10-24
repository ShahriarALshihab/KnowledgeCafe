
import Hero from "./navComponent/Hero";
import Navbar from "./navComponent/navBar";
import Recipes from "./Recipes";
import RecipesTitle from "./RecipesTitle";
import Sidebar from "./Sidebar";

function App() {
 

  const addRecipeToQueue = (recipe) => {
    console.log(recipe);
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
          <Sidebar></Sidebar>
        </section>
      </div>
    </>
  );
}

export default App;
