import { Recipe } from "./recipe.model";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply a test', 'https://www.tasteofhome.com/wp-content/uploads/2020/01/Easy-Pad-Thai_EXPS_FT20_249632_F_0109_1.jpg?resize=768,768'),new Recipe('Another Test Recipe', 'This is a simply a test', 'https://www.tasteofhome.com/wp-content/uploads/2020/01/Easy-Pad-Thai_EXPS_FT20_249632_F_0109_1.jpg?resize=768,768')
      ];

    getRecipes() {
        return this.recipes.slice();
    }
}