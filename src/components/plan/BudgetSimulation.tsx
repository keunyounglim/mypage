import type { RecruitmentPlanOutput } from '@/types/recruitment'

interface Props {
  data: RecruitmentPlanOutput['budget']
}

export default function BudgetSimulation({ data }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center text-xl">
          💰
        </div>
        <h3 className="text-lg font-bold text-gray-900">{data.title}</h3>
      </div>

      <div className="overflow-x-auto mb-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-2 pr-4 text-gray-500 font-medium">항목</th>
              <th className="text-right py-2 px-2 text-gray-500 font-medium">예상 비용</th>
              <th className="text-left py-2 pl-2 text-gray-500 font-medium">비고</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map((item, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0">
                <td className="py-3 pr-4">
                  <div className="font-medium text-gray-900">{item.item}</div>
                  <div className="text-xs text-gray-400">{item.category}</div>
                </td>
                <td className="py-3 px-2 text-right font-semibold text-gray-900">
                  {item.estimatedCost}
                </td>
                <td className="py-3 pl-2 text-xs text-gray-500">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between py-3 px-4 bg-gray-900 text-white rounded-xl mb-4">
        <div>
          <div className="text-xs text-gray-400">총 예상 비용</div>
          <div className="font-bold">{data.totalEstimated}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400">채용 1인당 비용(CPH)</div>
          <div className="font-bold">{data.costPerHire}</div>
        </div>
      </div>

      {data.priorityIfBudgetLow && (
        <div className="mb-4 px-4 py-3 bg-amber-50 rounded-lg">
          <p className="text-xs font-semibold text-amber-700 mb-1">예산 부족 시 우선순위</p>
          <p className="text-sm text-amber-700">{data.priorityIfBudgetLow}</p>
        </div>
      )}

      <div className="px-4 py-3 bg-gray-50 rounded-lg text-xs text-gray-400 border border-gray-100">
        ⚠️ {data.disclaimer}
      </div>
    </div>
  )
}
