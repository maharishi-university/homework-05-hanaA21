interface Recipe {
    id: number;
    title: string;
    description: string;
}

interface RecipesResponse {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
}

(async () => {
    try {
        const response = await fetch('https://dummyjson.com/recipes');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: RecipesResponse = await response.json();
        const recipeNames = data.recipes.map(recipe => recipe.title);

        console.log('Recipe Names:');
        recipeNames.forEach(name => console.log(name));
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
})();