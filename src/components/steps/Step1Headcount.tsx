'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useRecruitmentPlanStore } from '@/store/recruitmentPlanStore'
import type { RoleItem } from '@/types/recruitment'

function generateId() {
  return Math.random().toString(36).slice(2, 9)
}

export default function Step1Headcount() {
  const router = useRouter()
  const { formData, updateFormData } = useRecruitmentPlanStore()

  const [roles, setRoles] = useState<RoleItem[]>(
    formData.roles?.length ? formData.roles : [{ id: generateId(), title: '', count: 1 }],
  )

  const totalHeadcount = roles.reduce((sum, r) => sum + (r.count || 0), 0)

  const addRole = () => {
    setRoles([...roles, { id: generateId(), title: '', count: 1 }])
  }

  const removeRole = (id: string) => {
    if (roles.length === 1) return
    setRoles(roles.filter((r) => r.id !== id))
  }

  const updateRole = (id: string, field: 'title' | 'count', value: string | number) => {
    setRoles(roles.map((r) => (r.id === id ? { ...r, [field]: value } : r)))
  }

  const handleNext = () => {
    const valid = roles.every((r) => r.title.trim() && r.count > 0)
    if (!valid || totalHeadcount === 0) {
      alert('모든 직군명과 인원 수를 입력해주세요.')
      return
    }
    updateFormData({ headcount: totalHeadcount, roles })
    router.push('/recruitment-plan/step-2')
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">채용 인원을 알려주세요</h2>
        <p className="mt-2 text-gray-500">어떤 직군을 몇 명 채용하실 예정인가요?</p>
      </div>

      <div className="space-y-3">
        {roles.map((role) => (
          <div key={role.id} className="flex gap-3 items-center">
            <input
              type="text"
              placeholder="예: 백엔드 개발자"
              value={role.title}
              onChange={(e) => updateRole(role.id, 'title', e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => updateRole(role.id, 'count', Math.max(1, role.count - 1))}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
              >
                −
              </button>
              <span className="w-8 text-center font-medium text-gray-900">{role.count}</span>
              <button
                onClick={() => updateRole(role.id, 'count', role.count + 1)}
                className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
              >
                +
              </button>
              <span className="text-gray-500 text-sm">명</span>
            </div>
            <button
              onClick={() => removeRole(role.id)}
              disabled={roles.length === 1}
              className="text-gray-300 hover:text-red-400 disabled:opacity-30 disabled:cursor-not-allowed text-lg w-6"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={addRole}
        className="mt-4 flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700"
      >
        <span className="text-lg">+</span> 직군 추가
      </button>

      {totalHeadcount > 0 && (
        <div className="mt-6 px-4 py-3 bg-blue-50 rounded-lg text-sm text-blue-700">
          총 <strong>{totalHeadcount}명</strong>을 채용할 예정이군요!
        </div>
      )}

      <div className="mt-8 flex justify-end">
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
