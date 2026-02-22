'use client'

import { useRouter } from 'next/navigation'
import { useRecruitmentPlanStore } from '@/store/recruitmentPlanStore'
import ChannelStrategy from './ChannelStrategy'
import SourcingStrategy from './SourcingStrategy'
import BudgetSimulation from './BudgetSimulation'

export default function PlanOutput() {
  const router = useRouter()
  const { planData, formData, reset } = useRecruitmentPlanStore()

  if (!planData) return null

  const handleReset = () => {
    reset()
    router.push('/recruitment-plan')
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              BETA
            </span>
            <h1 className="text-2xl font-bold text-gray-900">AI 채용 계획서</h1>
          </div>
          <p className="text-sm text-gray-500">
            {formData.jobTitle} · {formData.brandRecognition} · 총 {formData.headcount}명
          </p>
        </div>
        <div className="flex gap-2 print:hidden">
          <button
            onClick={handlePrint}
            className="px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            🖨️ PDF 저장
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            다시 작성하기
          </button>
        </div>
      </div>

      {planData.executiveSummary && (
        <div className="mb-6 px-6 py-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
          <p className="text-xs font-semibold opacity-70 mb-2">핵심 요약</p>
          <p className="text-sm leading-relaxed">{planData.executiveSummary}</p>
        </div>
      )}

      <div className="space-y-4">
        <ChannelStrategy data={planData.channels} />
        <SourcingStrategy data={planData.sourcing} />
        <BudgetSimulation data={planData.budget} />
      </div>

      <div className="mt-8 text-center print:hidden">
        <button
          onClick={handleReset}
          className="text-sm text-gray-400 hover:text-gray-600 underline"
        >
          처음부터 다시 시작하기
        </button>
      </div>
    </div>
  )
}
