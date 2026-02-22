'use client'

import { useCallback } from 'react'
import { useRecruitmentPlanStore } from '@/store/recruitmentPlanStore'
import type { RecruitmentPlanOutput } from '@/types/recruitment'

export function useStreamingPlan() {
  const { formData, setPlanStatus, setPlanData, setError } =
    useRecruitmentPlanStore()

  const generatePlan = useCallback(async () => {
    setPlanStatus('generating')

    try {
      const response = await fetch('/api/generate-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errText = await response.text()
        throw new Error(errText || '채용 계획 생성에 실패했습니다.')
      }

      if (!response.body) {
        throw new Error('응답 스트림을 받을 수 없습니다.')
      }

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let fullText = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        fullText += decoder.decode(value, { stream: true })
      }

      const planData: RecruitmentPlanOutput = JSON.parse(fullText)
      setPlanData(planData)
    } catch (error) {
      setError(
        error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.',
      )
    }
  }, [formData, setPlanStatus, setPlanData, setError])

  return { generatePlan }
}
