import type { RecruitmentPlanOutput } from '@/types/recruitment'

interface Props {
  data: RecruitmentPlanOutput['sourcing']
}

export default function SourcingStrategy({ data }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">
          🎯
        </div>
        <h3 className="text-lg font-bold text-gray-900">{data.title}</h3>
      </div>

      <div className="mb-5 p-4 bg-gray-50 rounded-xl">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">시장 현황</p>
        <p className="text-sm text-gray-700">{data.marketInsight}</p>
      </div>

      <div className="mb-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">인재 유인 포인트</p>
        <ul className="space-y-2">
          {data.attractionPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-5 p-4 border border-dashed border-gray-200 rounded-xl">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">브랜드 인지도 전략</p>
        <p className="text-sm text-gray-700">{data.brandingCompensation}</p>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">패시브 캔디데이트 접근</p>
        <p className="text-sm text-gray-700">{data.passiveCandidateApproach}</p>
      </div>
    </div>
  )
}
