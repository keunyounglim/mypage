import type { RecruitmentPlanOutput } from '@/types/recruitment'

interface Props {
  data: RecruitmentPlanOutput['channels']
}

export default function ChannelStrategy({ data }: Props) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">
          📢
        </div>
        <h3 className="text-lg font-bold text-gray-900">{data.title}</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-2 pr-4 text-gray-500 font-medium">채널</th>
              <th className="text-center py-2 px-2 text-gray-500 font-medium">적합도</th>
              <th className="text-right py-2 px-2 text-gray-500 font-medium">예상 지원자</th>
              <th className="text-right py-2 pl-2 text-gray-500 font-medium">월 비용</th>
            </tr>
          </thead>
          <tbody>
            {data.primaryChannels.map((channel, i) => (
              <tr key={i} className="border-b border-gray-50 last:border-0">
                <td className="py-3 pr-4">
                  <div className="font-semibold text-gray-900">{channel.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{channel.reason}</div>
                </td>
                <td className="py-3 px-2 text-center">
                  <div className="flex justify-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`w-1.5 h-1.5 rounded-full ${
                          dot <= channel.fit ? 'bg-blue-500' : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                </td>
                <td className="py-3 px-2 text-right text-gray-700">{channel.estimatedApplicants}</td>
                <td className="py-3 pl-2 text-right text-gray-700">{channel.monthlyCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.strategyNote && (
        <div className="mt-4 px-4 py-3 bg-blue-50 rounded-lg text-sm text-blue-700">
          💡 {data.strategyNote}
        </div>
      )}
    </div>
  )
}
