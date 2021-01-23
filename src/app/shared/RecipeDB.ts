import { NONE_TYPE } from "@angular/compiler";
import { Recipe } from "./Recipe";

export const RECIPES: Recipe[] = [
  {
    "id": "0",
    "name": "Fresh Spring Rolls",
    "image": "../../assets/images/freshspringrolls.jpg",
    "description": "Light wraps that burst with aroma from Vietnamese herbs and signature ingredients of Vietnamese cuisine",
    "ingredients": [
      {
        "id": 0,
        "name": "Vietnamese Rice Vermicelli",
        "amount": "2 servings",
        "recommended": "Three Ladies brand is the most similar to 'bún tươi', after cooked.",
        "type": "Dry Ingredients"
        //ck
      },
      {
        "id": 1,
        "name": "Lettuce",
        "amount": "1 heads",
        "recommended": "I prefer Boston lettuce because the leaves are not crunchy.",
        "type": "Fresh Vegetables",
        // ck
      },
      {
        "id": 2,
        "name": "Vietnamese Red Perilla (Tía Tô)",
        "amount": "1 oz",
        "type": "Fresh Vegetables",
        "recommended": "Asian grocery stores are the most likely to sell this herb."
        // ck
      },
      {
        "id": 3,
        "name": "Cockscomb Mint (Kính giới)",
        "amount": "1 oz",
        "type": "Fresh Vegetables",
        "recommended": "Asian grocery stores are the most likely to sell this herb."
        //ck
      },
      {
        "id": 4,
        "name": "Eggs",
        "amount": "3 eggs",
        "type": "Poultry",
        "recommended": "Go ahead add use more eggs if you like."
        // ck
      },
      {
        "id": 5,
        "name": "Vietnamese pork meat loaf (Chả Lụa)",
        "amount": "8 oz",
        "type": "Poultry",
        "recommended": "This item can be found at an Asian grocery store."
        //ck
      },
      {
        "id": 6,
        "name": "Pork belly",
        "amount": "2 lb",
        "type": "Poultry",
        "recommended": "I prefer my pork belly to contain as little fat as possible because pork belly is fatty by nature.",
        //ck
      },
      {
        "id": 7,
        "name": "Extra Thin Rice Paper",
        "amount": "12 oz",
        "recommended": "Extra thin rice paper is the best because it's not too chewy.",
        "type": "Dry Ingredients"
        //ck
      },
      {
        "id": 8,
        "name": "Fish Sauce",
        "amount": "1 cup",
        "recommended": " ",
        "type": "Sauce & Seasoning"
        //ck
      },
      {
        "id": 9,
        "name": "Vinegar",
        "amount": "1/2 cup",
        "recommended": "I prefer Apple cider vinegar, but any other vinegar is fine",
        "type": "Sauce & Seasoning",
        //ck
      },
      {
        "id": 10,
        "name": "Sugar",
        "amount": "1 cup",
        "type": "Sauce & Seasoning",
        "recommended": "I use granulated sugar. Be careful with brown sugar because it has a different flavor",
        //
      },
      {
        "id": 11,
        "name": "Garlic",
        "amount": "3 cloves",
        "type": "Sauce & Seasoning",
        "recommended": "If you like spicy, use more garlic and add chopped Thai chilly peppers.",
        //
      }
    ],
    "directions": [
      {
        "id": 0,
        "title": "Boil Pork Belly",
        "detail": [
          "Rinse the meat through water to remove any dirty residues.",
          "Add the pork belly to the boiling water. Make sure to submerge the entire piece in water.",
          "Boil pork belly over medium high heat for 5 minutes. Skim and discard as much foam as you can.",
          "Close the lid and let the pork belly simmer over low medium heat for 30 minutes.",
          "To check if the pork belly is fully cooked, run a knife through middle. If the meat is still red, simmer for another 10 - 15 minutes.",
          "Set the pork belly aside to cool."
        ]
        //ck
      },
      {
        "id": 1,
        "title": "Make Omelette",
        "detail": [
          "Beat eggs in a medium bowl. Add some salt.",
          "Heat a skillet over medium heat. Add just enough egg mixture to cover the entire surface of the skillet.",
          "Flip the eggs to make both sides golden brown.",
          "Repeat until you fry all the egg mixture. Set the omelettes aside to cool."
        ]
        //ck
      },
      {
        "id": 2,
        "title": "Make rice vermicelle",
        "detail": [
          "Follow the instruction on the package to cook the rice vermicelli.",
          "Drain and rinse the noodles through running water to remove all the rice powder residues.",
          "Set aside to cool"
        ]
        // ck
      },
      {
        "id": 3,
        "title": "Wash vegetable",
        "detail": [
          "Keep the leaves of the Vietnamese herbs. Separate the leaves of the lettuce head",
          "Wash the vegetables and let them dry"
        ]
        //ck 
      },
      {
        "id": 4,
        "title": "Make dipping sauce",
        "detail": [
          "Smash and mince the garlic cloves.",
          "In a medium bowl, dissolve sugar in 5 cups of lukewarm water.",
          "Add fish oi, vinegar, and garlic mince. Mix well."
        ]
        //ck
      },
      {
        "id": 5,
        "title": "Slice pork belly, meat Loaf, and omelettes",
        "detail": [
          "Cut the pork belly into thin slices of 3 - 4 inches long.",
          "Slice the meat loaf and omelettes into threads of 5 inches long.",
          "Put the pork belly, meat loaf, and omelettes on serving plates."
        ]
        //ck
      },
      {
        "id": 6,
        "title": "Make spring rolls",
        "detail": [
          "Soak the rice paper in water to soften it. Put it on a big plate.",
          "Put lettuce, herbs, noodle, omelettes, pork belly, and meat loaf on the wet rice paper. Make sure to spread them out. ",
          "Grab the edge of the rice paper closest to you and start rolling it. Apply some pressure to make it tight.", 
          "The rice paper should become sticky at this point, which will help keep everything together once you finish rolling.",
          "Dip the spring roll in the sauce and enjoy!"
        ]
        //
      }
    ]
},
{
    "id": "1",
    "name": "Sautéed Beef Noodle Salad",
    "image": "../../assets/images/bunbotron.jpg",
    "description": "A southern noodle dish that features stirred beef with rice vermicelli and Vietnamese herbs",
    "ingredients": [
      {
        "id": 0,
        "name": "Vietnamese Rice Vermicelli",
        "amount": "2 servings",
        "recommended": "Three Ladies brand is the most similar to 'bún tươi', after cooked.",
        "type": "Dry Ingredients"
        // ck 
      },
      {
        "id": 1,
        "name": "Lettuce",
        "amount": "1 heads",
        "recommended": "I prefer Boston lettuce because the leaves are not crunchy.",
        "type": "Fresh Vegetables",
        // ck
      },
      {
        "id": 2,
        "name": "Vietnamese Red Perilla (Tía Tô)",
        "amount": "1 oz",
        "type": "Fresh Vegetables",
        "recommended": "Asian grocery stores are the most likely to sell this herb."
        //ck
      },
      {
        "id": 3,
        "name": "Cockscomb Mint (Kính giới)",
        "amount": "1 oz",
        "type": "Fresh Vegetables",
        "recommended": "Asian grocery stores are the most likely to sell this herb."
        // ck 
      },
      {
        "id": 4,
        "name": "Beef (any cut)",
        "amount": "1 lb",
        "recommended": "I prefer Angus beef sirloin steak because it is very soft",
        "type": "Poultry",
        //ck
      },
      {
        "id": 5,
        "name": "Onions",
        "amount": "1 EA",
        "recommended": "Sweet onions are the best.",
        "type": "Fresh Vegetables",
        // ck
      },
      {
        "id": 6,
        "name": "Raw peanuts",
        "amount": "4 oz",
        "type": "Toppings",
        "recommended": "You can buy packaged roasted peanuts at the grocery store. Make sure they are unsalted."
        //ck 
      },
      {
        "id": 7,
        "name": "Crispy fried shallot",
        "amount": "4 oz",
        "type": "Toppings",
        "recommended": "Fried shallot (a.k.a. fried red onions) can be found at an Asian grocery store.",
        //ck 
      },
      {
        "id": 8,
        "name": "Fish Sauce",
        "amount": "1 cup",
        "recommended": "The best fish sauce brands, in my opinion, are Phu Quoc, Viet Huong, and Red Boat.",
        "type": "Sauce & Seasoning"
        //ck 
      },
      {
        "id": 9,
        "name": "Vinegar",
        "amount": "1/2 cup",
        "recommended": "I prefer Apple cider vinegar, but any other vinegar is fine",
        "type": "Sauce & Seasoning",
        // ck 
      },
      {
        "id": 10,
        "name": "Sugar",
        "amount": "1 cup",
        "type": "Sauce & Seasoning",
        "recommended": "I use granulated sugar. Be careful with brown sugar because it has a different flavor",
        // ck 
      },
      {
        "id": 11,
        "name": "Garlic",
        "amount": "3 cloves",
        "type": "Sauce & Seasoning",
        "recommended": "If you like spicy, use more garlic and add chopped Thai chilly peppers."
        // ck
      }
    ],
    "directions": [
      {
        "id": 0,
        "title": "Make rice vermicelle",
        "detail": [
          "Follow the instruction on the package to cook the rice vermicelli.",
          "Drain and rinse the noodles through running water to remove all the rice powder residues.",
          "Set aside to cool."
        ]
        // ck
      },
      {
        "id": 1,
        "title": "Roast penuts",
        "detail": [
          "Heat the oven to 350 F. Roast the peanuts for 15 minutes.", 
          "Take peanuts out of the ovens and let them cool.",
          "Remove the skin and crush the peanuts into small pieces."
        ]
        // ck 
      },
      {
        "id": 2,
        "title": "Wash vegetable",
        "detail": [
          "Pick out the leaves of the Vietnamese herbs. Break lettuce heads.",
          "Wash the vegetable and drain off water."
        ]
        // ck 
      },
      {
        "id": 3,
        "title": "Make stirred beef with onions",
        "detail": [
          "Cut beef into thin slices of 3 - 4 inches long.",
          "Peel and minced garlic. Cut onions into thin slices",
          "Heat 1 tsp of oil on a stirring pan over medium heat. Stir garlic until golden brown and aromatic.",
          "Stir beef and cook to medium rare. Put the beef in a separate bowl.",
          "Stir the onions in the same pan. When the onions are half cooked, add in the beef and stir for 2 minutes.",
          "Put the stirred beef in a bowl."
        ]
        // ck 
      },
      {
        "id": 4,
        "title": "Make dipping sauce",
        "detail": [
          "Smash and mince the garlic cloves.",
          "In a medium bowl, dissolve sugar in 5 cups of lukewarm water.",
          "Add fish oi, vinegar, and garlic mince. Mix well."
        ]
        // ck 
      },
      {
        "id": 5,
        "title": "Assemble the beef noodle salad",
        "detail": [
          "In a big bowl, assemble cooked rice vermicelli, lettuce, herbs, beef, roasted peanuts, and crispy shallots.",
          "Pour about 1/2 cup of dipping saurce over the ingredients in the bowl. Mix well and eat."
        ]
      }
    ]
  }
]