'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useRecruitmentPlanStore } from '@/store/recruitmentPlanStore'
import type { UrgencyLevel } from '@/types/recruitment'

const URGENCY_LABELS: Record<UrgencyLevel, string> = {
  1: '매우 여유 (6개월+)',
  2: '여유 (3-6개월)',
  3: '보통 (1-3개월)',
  4: '다소 긴급 (1개월)',
  5: '매우 긴급 (2주)',
}

export default function Step5Timeline() {
  const router = useRouter()
  const { formData, updateFormData } = useRecruitmentPlanStore()

  const [targetDate, setTargetDate] = useState(formData.targetDate ?? '')
  const [urgencyLevel, setUrgencyLevel] = useState<UrgencyLevel>(
    formData.urgencyLevel ?? 3,
  )

  const handleNext = () => {
    if (!targetDate) {
      alert('목표 채용 완료일을 입력해주세요.')
      return
    }
    updateFormData({ targetDate, urgencyLevel })
    router.push('/recruitment-plan/step-6')
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">채용 일정을 알려주세요</h2>
        <p className="mt-2 text-gray-500">목표 채용 완료일과 긴급도를 선택해주세요.</p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          목표 채용 완료일
        </label>
        <input
          type="date"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          채용 긴급도
        </label>
        <div className="space-y-2">
          {([1, 2, 3, 4, 5] as UrgencyLevel[]).map((level) => (
            <button
              key={level}
              onClick={() => setUrgencyLevel(level)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg border-2 text-left transition-all ${
                urgencyLevel === level
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <div
                    key={dot}
                    className={`w-2 h-2 rounded-full ${
                      dot <= level ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">
                {URGENCY_LABELS[level]}
              </span>
            </button>
          ))}
        </div>
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
