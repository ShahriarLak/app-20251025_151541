import RecipeHeader from './components/RecipeHeader'
import IngredientsList from './components/IngredientsList'
import InstructionsList from './components/InstructionsList'
import RecipeTips from './components/RecipeTips'
import { recipeData } from './data/recipeData'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RecipeHeader {...recipeData.header} />
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <IngredientsList ingredients={recipeData.ingredients} />
          </div>
          
          <div className="lg:col-span-2">
            <InstructionsList instructions={recipeData.instructions} />
          </div>
        </div>
        
        <RecipeTips tips={recipeData.tips} />
        
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Made with ❤️ for cookie lovers everywhere
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              © 2024 Recipe App. Built with Next.js 14.
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}