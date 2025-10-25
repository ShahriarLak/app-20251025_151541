export const recipeData = {
  header: {
    title: "Perfect Chocolate Chip Cookies",
    description: "These classic chocolate chip cookies are crispy on the edges, chewy in the middle, and loaded with chocolate chips. Perfect for any occasion!",
    prepTime: "15 min",
    cookTime: "12 min",
    totalTime: "27 min",
    servings: "24 cookies"
  },
  
  ingredients: [
    {
      id: "1",
      amount: "2¼ cups",
      item: "all-purpose flour",
      notes: "Spoon and level for best results"
    },
    {
      id: "2",
      amount: "1 tsp",
      item: "baking soda"
    },
    {
      id: "3",
      amount: "1 tsp",
      item: "salt"
    },
    {
      id: "4",
      amount: "1 cup",
      item: "butter, softened",
      notes: "Leave at room temperature for 30-60 minutes"
    },
    {
      id: "5",
      amount: "¾ cup",
      item: "granulated sugar"
    },
    {
      id: "6",
      amount: "¾ cup",
      item: "packed brown sugar",
      notes: "Light or dark brown sugar both work"
    },
    {
      id: "7",
      amount: "2 large",
      item: "eggs",
      notes: "Room temperature works best"
    },
    {
      id: "8",
      amount: "2 tsp",
      item: "vanilla extract"
    },
    {
      id: "9",
      amount: "2 cups",
      item: "chocolate chips",
      notes: "Semi-sweet or milk chocolate chips"
    }
  ],
  
  instructions: [
    {
      id: "1",
      step: 1,
      instruction: "Preheat your oven to 375°F (190°C). Line baking sheets with parchment paper or lightly grease them.",
      tips: "Using parchment paper prevents sticking and makes cleanup easier."
    },
    {
      id: "2",
      step: 2,
      instruction: "In a medium bowl, whisk together flour, baking soda, and salt. Set aside.",
      tips: "Whisking dry ingredients ensures even distribution and prevents lumps."
    },
    {
      id: "3",
      step: 3,
      instruction: "In a large bowl, cream together the softened butter, granulated sugar, and brown sugar until light and fluffy (about 2-3 minutes with an electric mixer).",
      tips: "Properly creamed butter and sugar creates the perfect cookie texture."
    },
    {
      id: "4",
      step: 4,
      instruction: "Beat in eggs one at a time, then add vanilla extract. Mix until well combined.",
      tips: "Add eggs one at a time to prevent the mixture from curdling."
    },
    {
      id: "5",
      step: 5,
      instruction: "Gradually add the flour mixture to the butter mixture, mixing on low speed until just combined. Don't overmix.",
      tips: "Overmixing develops gluten, which can make cookies tough."
    },
    {
      id: "6",
      step: 6,
      instruction: "Fold in the chocolate chips until evenly distributed throughout the dough.",
      tips: "Save a few chocolate chips to press on top of each cookie before baking for a bakery look."
    },
    {
      id: "7",
      step: 7,
      instruction: "Drop rounded tablespoons of dough onto prepared baking sheets, spacing them about 2 inches apart.",
      tips: "Use a cookie scoop for perfectly uniform cookies every time."
    },
    {
      id: "8",
      step: 8,
      instruction: "Bake for 9-11 minutes, or until the edges are golden brown but centers still look slightly underbaked.",
      tips: "Cookies continue cooking on the hot pan after removal, so don't overbake!"
    },
    {
      id: "9",
      step: 9,
      instruction: "Cool on baking sheets for 5 minutes, then transfer to a wire rack to cool completely.",
      tips: "This cooling method prevents cookies from breaking while ensuring they don't continue cooking."
    }
  ],
  
  tips: [
    {
      id: "1",
      title: "Room Temperature Ingredients",
      description: "Use room temperature butter and eggs for the best texture. Cold ingredients don't cream properly and can result in dense cookies.",
      icon: "thermometer" as const
    },
    {
      id: "2",
      title: "Don't Overbake",
      description: "Remove cookies when edges are golden but centers look slightly underdone. They'll continue cooking on the hot pan.",
      icon: "timer" as const
    },
    {
      id: "3",
      title: "Chill the Dough",
      description: "For thicker cookies, chill the dough for 30 minutes before baking. This prevents spreading and creates a chewier texture.",
      icon: "star" as const
    },
    {
      id: "4",
      title: "Storage Tips",
      description: "Store cooled cookies in an airtight container for up to one week. Add a slice of bread to keep them soft.",
      icon: "lightbulb" as const
    }
  ]
}