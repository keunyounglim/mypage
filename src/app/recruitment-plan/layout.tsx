'use client'

import { usePathname } from 'next/navigation'
import WizardShell from '@/components/wizard/WizardShell'

export default function RecruitmentPlanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isResult = pathname === '/recruitment-plan/result'

  if (isResult) {
    return <div className="min-h-screen bg-gray-50">{children}</div>
  }

  return <WizardShell>{children}</WizardShell>
}
