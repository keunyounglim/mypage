'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useRecruitmentPlanStore } from '@/store/recruitmentPlanStore'
import StreamingSkeleton from '@/components/plan/StreamingSkeleton'
import PlanOutput from '@/components/plan/PlanOutput'

export default function ResultPage() {
  const router = useRouter()
  const { planStatus, planData, errorMessage } = useRecruitmentPlanStore()

  useEffect(() => {
    if (planStatus === 'idle' && !planData) {
      router.replace('/recruitment-plan')
    }
  }, [planStatus, planData, router])

  if (planStatus === 'error') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="text-5xl mb-4">😔</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">채용 계획서 생성에 실패했습니다</h2>
        <p className="text-gray-500 mb-6 text-sm">{errorMessage}</p>
        <button
          onClick={() => router.push('/recruitment-plan/step-6')}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
        >
          다시 시도하기
        </button>
      </div>
    )
  }

  if (planStatus === 'generating' || (planStatus === 'idle' && !planData)) {
    return <StreamingSkeleton />
  }

  return <PlanOutput />
}
