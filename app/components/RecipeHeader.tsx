'use client'

import { Clock, Users, ChefHat } from 'lucide-react'

interface RecipeHeaderProps {
  title: string
  description: string
  prepTime: string
  cookTime: string
  totalTime: string
  servings: string
}

export default function RecipeHeader({
  title,
  description,
  prepTime,
  cookTime,
  totalTime,
  servings
}: RecipeHeaderProps) {
  return (
    <header className="mb-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 text-balance">
          {title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Prep Time</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">{prepTime}</p>
        </div>
        
        <div className="text-center">
          <ChefHat className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Cook Time</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">{cookTime}</p>
        </div>
        
        <div className="text-center">
          <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Time</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">{totalTime}</p>
        </div>
        
        <div className="text-center">
          <Users className="w-6 h-6 text-amber-600 mx-auto mb-2" />
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Servings</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">{servings}</p>
        </div>
      </div>
    </header>
  )
}