
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    

    // recipeSelected = new EventEmitter<Recipe>();
    // recipeSelected = new Subject<Recipe>();

    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel',
             'A super-tasty Schnitzel - just awesome',
              'https://thumbs.dreamstime.com/b/tasty-schnitzel-breading-fried-potato-onion-mushrooms-191837873.jpg',
              [
                  new Ingredient('Meat', 1),
                  new Ingredient('French Fries', 20)
              ]),
        new Recipe(
            'Big Fat Burger',
             'Need I say more?',
              'https://www.thebeijinger.com/sites/default/files/thebeijinger/blog-images/313215/fatburger_0.jpg',
              [
                new Ingredient('Buns', 2),
                new Ingredient('Patties', 3)
              ])
      ];

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}