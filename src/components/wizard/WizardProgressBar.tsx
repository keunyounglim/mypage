'use client'

const STEPS = [
  '채용 인원',
  '기업 인지도',
  '원하는 인재',
  '업종/직무',
  '채용 일정',
  '예산',
]

interface WizardProgressBarProps {
  currentStep: number
}

export default function WizardProgressBar({ currentStep }: WizardProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        {STEPS.map((step, index) => {
          const stepNum = index + 1
          const isCompleted = stepNum < currentStep
          const isCurrent = stepNum === currentStep
          return (
            <div key={step} className="flex flex-col items-center flex-1">
              <div className="flex items-center w-full">
                {index > 0 && (
                  <div
                    className={`h-0.5 flex-1 ${isCompleted ? 'bg-blue-600' : 'bg-gray-200'}`}
                  />
                )}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                    isCompleted
                      ? 'bg-blue-600 text-white'
                      : isCurrent
                        ? 'bg-blue-600 text-white ring-4 ring-blue-100'
                        : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {isCompleted ? '✓' : stepNum}
                </div>
                {index < STEPS.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 ${isCompleted ? 'bg-blue-600' : 'bg-gray-200'}`}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex justify-between mt-1">
        {STEPS.map((step, index) => {
          const stepNum = index + 1
          const isCurrent = stepNum === currentStep
          return (
            <div key={step} className="flex-1 text-center">
              <span
                className={`text-xs ${isCurrent ? 'text-blue-600 font-semibold' : 'text-gray-400'}`}
              >
                {step}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
