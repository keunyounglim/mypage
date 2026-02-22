'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useRecruitmentPlanStore } from '@/store/recruitmentPlanStore'
import type { BrandRecognition } from '@/types/recruitment'

const BRAND_OPTIONS: {
  value: BrandRecognition
  label: string
  desc: string
  icon: string
}[] = [
  {
    value: '스타트업',
    label: '스타트업',
    desc: '창업 5년 이내, 인지도 구축 중',
    icon: '🚀',
  },
  {
    value: '중소기업',
    label: '중소기업',
    desc: '임직원 300명 이하, 안정적 운영',
    icon: '🏢',
  },
  {
    value: '중견기업',
    label: '중견기업',
    desc: '임직원 300~1,000명, 성장 단계',
    icon: '🏬',
  },
  {
    value: '대기업',
    label: '대기업',
    desc: '임직원 1,000명 이상, 높은 인지도',
    icon: '🏙️',
  },
]

export default function Step2BrandRecognition() {
  const router = useRouter()
  const { formData, updateFormData } = useRecruitmentPlanStore()
  const [selected, setSelected] = useState<BrandRecognition | null>(
    formData.brandRecognition ?? null,
  )

  const handleNext = () => {
    if (!selected) {
      alert('기업 유형을 선택해주세요.')
      return
    }
    updateFormData({ brandRecognition: selected })
    router.push('/recruitment-plan/step-3')
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">기업 규모/인지도를 선택해주세요</h2>
        <p className="mt-2 text-gray-500">AI가 기업 상황에 맞는 채용 전략을 제안합니다.</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {BRAND_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelected(option.value)}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              selected === option.value
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-100 bg-gray-50 hover:border-gray-200'
            }`}
          >
            <div className="text-2xl mb-2">{option.icon}</div>
            <div className="font-semibold text-gray-900">{option.label}</div>
            <div className="text-xs text-gray-500 mt-1">{option.desc}</div>
          </button>
        ))}
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={() => router.back()}
          className="px-6 py-2.5 border border-gray-200 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
        >
          ← 이전
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          다음 →
        </button>
      </div>
    </div>
  )
}
