'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

interface Ingredient {
  id: string
  amount: string
  item: string
  notes?: string
}

interface IngredientsListProps {
  ingredients: Ingredient[]
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(new Set())

  const toggleIngredient = (id: string) => {
    const newChecked = new Set(checkedIngredients)
    if (newChecked.has(id)) {
      newChecked.delete(id)
    } else {
      newChecked.add(id)
    }
    setCheckedIngredients(newChecked)
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Ingredients
      </h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <ul className="space-y-4">
          {ingredients.map((ingredient) => {
            const isChecked = checkedIngredients.has(ingredient.id)
            
            return (
              <li key={ingredient.id} className="flex items-start space-x-3">
                <button
                  onClick={() => toggleIngredient(ingredient.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                    isChecked
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-gray-300 dark:border-gray-600 hover:border-green-500 dark:hover:border-green-400'
                  }`}
                  aria-label={`Mark ${ingredient.item} as ${isChecked ? 'unchecked' : 'checked'}`}
                >
                  {isChecked && <Check className="w-4 h-4" />}
                </button>
                
                <div className={`flex-1 transition-all duration-200 ${
                  isChecked ? 'opacity-60' : ''
                }`}>
                  <span className={`text-gray-800 dark:text-white ${
                    isChecked ? 'line-through' : ''
                  }`}>
                    <span className="font-medium">{ingredient.amount}</span> {ingredient.item}
                  </span>
                  {ingredient.notes && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {ingredient.notes}
                    </p>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}