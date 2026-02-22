import { create } from 'zustand'
import type { RecruitmentPlanInput, RecruitmentPlanOutput } from '@/types/recruitment'

interface RecruitmentPlanState {
  formData: Partial<RecruitmentPlanInput>
  planStatus: 'idle' | 'generating' | 'complete' | 'error'
  planData: RecruitmentPlanOutput | null
  errorMessage: string | null

  updateFormData: (data: Partial<RecruitmentPlanInput>) => void
  setPlanStatus: (status: 'idle' | 'generating' | 'complete' | 'error') => void
  setPlanData: (data: RecruitmentPlanOutput) => void
  setError: (message: string) => void
  reset: () => void
}

export const useRecruitmentPlanStore = create<RecruitmentPlanState>()((set) => ({
  formData: {},
  planStatus: 'idle',
  planData: null,
  errorMessage: null,

  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),

  setPlanStatus: (status) => set({ planStatus: status }),

  setPlanData: (data) => set({ planData: data, planStatus: 'complete' }),

  setError: (message) => set({ errorMessage: message, planStatus: 'error' }),

  reset: () =>
    set({ formData: {}, planStatus: 'idle', planData: null, errorMessage: null }),
}))
