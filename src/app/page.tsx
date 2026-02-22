import Link from 'next/link'

const FEATURES = [
  {
    icon: '📢',
    title: '채용 채널 전략',
    desc: '원티드, 잡코리아 등 최적 채널 조합과 예상 지원자 수를 제안합니다.',
  },
  {
    icon: '🎯',
    title: '소싱 & 타겟팅',
    desc: '인재풀 현황 분석과 패시브 캔디데이트 접근 방법을 알려드립니다.',
  },
  {
    icon: '💰',
    title: '예산 시뮬레이션',
    desc: '채용 1인당 비용(CPH)과 채널별 예상 비용을 시뮬레이션합니다.',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">채용 계획 AI</span>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
              BETA
            </span>
          </div>
          <Link
            href="/recruitment-plan"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            시작하기
          </Link>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold mb-6">
          ✨ AI 기반 채용 전략 자동 생성
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          맞춤형 채용 계획서,<br />30초 만에
        </h1>
        <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
          채용 인원, 기업 인지도, 예산만 입력하면 AI가 최적의 채용 채널, 소싱 전략, 예산 시뮬레이션을 제안합니다.
        </p>
        <Link
          href="/recruitment-plan"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
        >
          채용 계획 시작하기 →
        </Link>
        <p className="mt-4 text-sm text-gray-400">무료 · 회원가입 불필요 · 약 30초 소요</p>
      </section>

      <section className="max-w-5xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        <p>AI 생성 결과는 참고용이며, 실제 채용 결과를 보장하지 않습니다.</p>
      </footer>
    </div>
  )
}
