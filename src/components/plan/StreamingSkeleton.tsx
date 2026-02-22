export default function StreamingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <span className="text-3xl animate-pulse">✨</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">채용 계획서를 작성하고 있습니다</h2>
        <p className="mt-2 text-gray-500">AI가 맞춤형 전략을 분석 중입니다. 잠시만 기다려주세요.</p>
        <div className="flex items-center justify-center gap-1 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {[
          '채용 채널 전략 분석 중...',
          '소싱 & 타겟팅 전략 수립 중...',
          '예산 시뮬레이션 계산 중...',
        ].map((label, i) => (
          <div key={label} className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gray-100 rounded-full animate-pulse" />
              <div className="h-5 bg-gray-100 rounded w-48 animate-pulse" />
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-100 rounded animate-pulse" style={{ width: '90%', animationDelay: `${i * 0.1}s` }} />
              <div className="h-3 bg-gray-100 rounded animate-pulse" style={{ width: '75%', animationDelay: `${i * 0.1 + 0.05}s` }} />
              <div className="h-3 bg-gray-100 rounded animate-pulse" style={{ width: '85%', animationDelay: `${i * 0.1 + 0.1}s` }} />
            </div>
            <p className="mt-4 text-xs text-gray-400">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
