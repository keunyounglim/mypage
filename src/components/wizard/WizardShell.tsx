'use client'

import { usePathname } from 'next/navigation'
import WizardProgressBar from './WizardProgressBar'

const STEP_PATHS: Record<string, number> = {
  '/recruitment-plan': 1,
  '/recruitment-plan/step-2': 2,
  '/recruitment-plan/step-3': 3,
  '/recruitment-plan/step-4': 4,
  '/recruitment-plan/step-5': 5,
  '/recruitment-plan/step-6': 6,
}

export default function WizardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const currentStep = STEP_PATHS[pathname] ?? 1

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-10">
        <div className="mb-8">
          <WizardProgressBar currentStep={currentStep} />
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
