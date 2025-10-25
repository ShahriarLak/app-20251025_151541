'use client'

import { Lightbulb, Thermometer, Timer, Star } from 'lucide-react'

interface Tip {
  id: string
  title: string
  description: string
  icon: 'lightbulb' | 'thermometer' | 'timer' | 'star'
}

interface RecipeTipsProps {
  tips: Tip[]
}

const iconMap = {
  lightbulb: Lightbulb,
  thermometer: Thermometer,
  timer: Timer,
  star: Star,
}

export default function RecipeTips({ tips }: RecipeTipsProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Pro Tips for Perfect Cookies
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {tips.map((tip) => {
          const Icon = iconMap[tip.icon]
          
          return (
            <div
              key={tip.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}