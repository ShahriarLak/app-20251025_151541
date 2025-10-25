'use client'

import { useState } from 'react'
import { Check, ChevronRight } from 'lucide-react'

interface Instruction {
  id: string
  step: number
  instruction: string
  tips?: string
}

interface InstructionsListProps {
  instructions: Instruction[]
}

export default function InstructionsList({ instructions }: InstructionsListProps) {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set())

  const toggleStep = (id: string) => {
    const newCompleted = new Set(completedSteps)
    if (newCompleted.has(id)) {
      newCompleted.delete(id)
    } else {
      newCompleted.add(id)
    }
    setCompletedSteps(newCompleted)
  }

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Instructions
      </h2>
      
      <div className="space-y-6">
        {instructions.map((instruction) => {
          const isCompleted = completedSteps.has(instruction.id)
          
          return (
            <div
              key={instruction.id}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border transition-all duration-200 ${
                isCompleted
                  ? 'border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-start space-x-4">
                <button
                  onClick={() => toggleStep(instruction.id)}
                  className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-200 ${
                    isCompleted
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white dark:border-amber-400 dark:text-amber-400'
                  }`}
                  aria-label={`Mark step ${instruction.step} as ${isCompleted ? 'incomplete' : 'complete'}`}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : instruction.step}
                </button>
                
                <div className="flex-1">
                  <p className={`text-gray-800 dark:text-white leading-relaxed transition-all duration-200 ${
                    isCompleted ? 'line-through opacity-60' : ''
                  }`}>
                    {instruction.instruction}
                  </p>
                  
                  {instruction.tips && (
                    <div className="mt-3 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-400">
                      <div className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-amber-600" />
                        <span className="text-sm font-medium text-amber-800 dark:text-amber-200">
                          Pro Tip:
                        </span>
                      </div>
                      <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                        {instruction.tips}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}