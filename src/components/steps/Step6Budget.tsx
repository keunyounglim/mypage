'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useRecruitmentPlanStore } from '@/store/recruitmentPlanStore'
import { useStreamingPlan } from '@/hooks/useStreamingPlan'

const BUDGET_PRESETS = [
  { label: '~100만원', min: 0, max: 1000000 },
  { label: '100~300만원', min: 1000000, max: 3000000 },
  { label: '300~500만원', min: 3000000, max: 5000000 },
  { label: '500만원~', min: 5000000, max: 10000000 },
]

export default function Step6Budget() {
  const router = useRouter()
  const { formData, updateFormData } = useRecruitmentPlanStore()
  const { generatePlan } = useStreamingPlan()

  const [budgetMin, setBudgetMin] = useState(formData.budgetMin ?? 0)
  const [budgetMax, setBudgetMax] = useState(formData.budgetMax ?? 3000000)
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const selectPreset = (index: number) => {
    const preset = BUDGET_PRESETS[index]
    setSelectedPreset(index)
    setBudgetMin(preset.min)
    setBudgetMax(preset.max)
  }

  const formatKRW = (amount: number) => {
    if (amount >= 10000000) return `${(amount / 10000000).toFixed(0)}천만원`
    if (amount >= 10000) return `${(amount / 10000).toFixed(0)}만원`
    return `${amount.toLocaleString()}원`
  }

  const handleGenerate = async () => {
    updateFormData({ budgetMin, budgetMax })
    setIsLoading(true)
    router.push('/recruitment-plan/result')
    await generatePlan()
    setIsLoading(false)
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">월 채용 예산을 알려주세요</h2>
        <p className="mt-2 text-gray-500">예산에 맞는 채용 채널과 전략을 추천해드립니다.</p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">예산 범위 선택</label>
        <div className="grid grid-cols-2 gap-2">
          {BUDGET_PRESETS.map((preset, index) => (
            <button
              key={preset.label}
              onClick={() => selectPreset(index)}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                selectedPreset === index
                  ? 'border-blue-600 bg-blue-50 text-blue-700'
                  : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-gray-300'
              }`}
            >
              월 {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          직접 입력 (선택사항)
        </label>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <label className="text-xs text-gray-400 mb-1 block">최소</label>
            <input
              type="number"
              value={budgetMin}
              onChange={(e) => {
                setSelectedPreset(null)
                setBudgetMin(Number(e.target.value))
              }}
              step={100000}
              min={0}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
          <span className="text-gray-400 mt-4">~</span>
          <div className="flex-1">
            <label className="text-xs text-gray-400 mb-1 block">최대</label>
            <input
              type="number"
              value={budgetMax}
              onChange={(e) => {
                setSelectedPreset(null)
                setBudgetMax(Number(e.target.value))
              }}
              step={100000}
              min={0}
              className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        </div>
        {(budgetMin > 0 || budgetMax > 0) && (
          <p className="mt-2 text-xs text-blue-600">
            월 {formatKRW(budgetMin)} ~ {formatKRW(budgetMax)}
          </p>
        )}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={() => router.back()}
          className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          ← 이전
        </button>
        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="px-8 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <span className="animate-spin">⟳</span> 생성 중...
            </>
          ) : (
            '✨ 채용 계획 생성하기'
          )}
        </button>
      </div>
    </div>
  )
}
