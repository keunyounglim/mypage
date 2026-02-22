'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useRecruitmentPlanStore } from '@/store/recruitmentPlanStore'

const INDUSTRIES = [
  'IT/소프트웨어',
  '게임',
  '핀테크/금융',
  '이커머스/유통',
  '제조/생산',
  '의료/바이오',
  '교육/에듀테크',
  '미디어/콘텐츠',
  '건설/부동산',
  '컨설팅/서비스',
  '물류/운송',
  '기타',
]

export default function Step4Industry() {
  const router = useRouter()
  const { formData, updateFormData } = useRecruitmentPlanStore()

  const [industry, setIndustry] = useState(formData.industry ?? '')
  const [jobTitle, setJobTitle] = useState(formData.jobTitle ?? '')

  const handleNext = () => {
    if (!industry) {
      alert('업종을 선택해주세요.')
      return
    }
    if (!jobTitle.trim()) {
      alert('직무명을 입력해주세요.')
      return
    }
    updateFormData({ industry, jobTitle: jobTitle.trim() })
    router.push('/recruitment-plan/step-5')
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">업종과 직무를 알려주세요</h2>
        <p className="mt-2 text-gray-500">해당 분야 맞춤 전략을 제안합니다.</p>
      </div>

      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">업종</label>
        <div className="grid grid-cols-3 gap-2">
          {INDUSTRIES.map((ind) => (
            <button
              key={ind}
              onClick={() => setIndustry(ind)}
              className={`px-3 py-2 rounded-lg text-sm font-medium text-center transition-all ${
                industry === ind
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-50 text-gray-600 border border-gray-100 hover:border-gray-300'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          채용 직무명
        </label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="예: 프론트엔드 개발자, 영업 매니저, UX 디자이너"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
        />
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
