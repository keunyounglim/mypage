'use client'

import { useState, KeyboardEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useRecruitmentPlanStore } from '@/store/recruitmentPlanStore'
import type { ExperienceLevel } from '@/types/recruitment'

const EXPERIENCE_LEVELS: ExperienceLevel[] = ['신입', '1-3년', '3-5년', '5-10년', '10년 이상']

export default function Step3TalentProfile() {
  const router = useRouter()
  const { formData, updateFormData } = useRecruitmentPlanStore()

  const [experienceLevel, setExperienceLevel] = useState<ExperienceLevel>(
    formData.experienceLevel ?? '3-5년',
  )
  const [skills, setSkills] = useState<string[]>(formData.requiredSkills ?? [])
  const [skillInput, setSkillInput] = useState('')

  const addSkill = (value: string) => {
    const trimmed = value.trim()
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed])
    }
    setSkillInput('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      addSkill(skillInput)
    }
    if (e.key === 'Backspace' && !skillInput && skills.length > 0) {
      setSkills(skills.slice(0, -1))
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const handleNext = () => {
    updateFormData({ experienceLevel, requiredSkills: skills })
    router.push('/recruitment-plan/step-4')
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">원하는 인재상을 알려주세요</h2>
        <p className="mt-2 text-gray-500">경력 수준과 필요 스킬을 입력해주세요.</p>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">경력 수준</label>
        <div className="flex gap-2 flex-wrap">
          {EXPERIENCE_LEVELS.map((level) => (
            <button
              key={level}
              onClick={() => setExperienceLevel(level)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                experienceLevel === level
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          필요 스킬 <span className="font-normal text-gray-400">(Enter 또는 쉼표로 추가)</span>
        </label>
        <div className="min-h-[80px] px-3 py-2 rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent flex flex-wrap gap-2 items-start">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="text-blue-400 hover:text-blue-600 ml-1"
              >
                ×
              </button>
            </span>
          ))}
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={() => skillInput && addSkill(skillInput)}
            placeholder={skills.length === 0 ? '예: React, Python, 영어 등' : ''}
            className="flex-1 min-w-[120px] outline-none text-sm py-1"
          />
        </div>
        {skills.length === 0 && (
          <p className="mt-2 text-xs text-gray-400">
            스킬을 입력하지 않으면 직무 기반으로 AI가 자동 추천합니다.
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
          onClick={handleNext}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          다음 →
        </button>
      </div>
    </div>
  )
}
