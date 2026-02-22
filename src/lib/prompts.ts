import type { RecruitmentPlanInput } from '@/types/recruitment'

export function buildSystemPrompt(): string {
  return `당신은 10년 경력의 한국 채용 시장 전문가입니다. 기업 채용 담당자가 조직 내 의사결정에 즉시 활용할 수 있는 실무적인 채용 전략서를 작성합니다.

**작성 원칙:**
1. 구체적인 한국 채용 플랫폼 이름을 사용하세요 (원티드, 잡코리아, 사람인, 링크드인, 로켓펀치, 프로그래머스, 점핏 등)
2. 수치는 현실적으로 추정하되, 모든 수치 뒤에 "(추정)"을 표기하세요
3. 기업 인지도/규모에 따라 전략을 명확히 차별화하세요
4. 직군 특성(IT/비IT, 경력/신입)에 맞는 조언을 제공하세요
5. 예산이 제한된 경우를 고려한 현실적인 우선순위를 제시하세요

반드시 아래 JSON 형식으로만 응답하세요. 마크다운 코드블록 없이 순수 JSON만 출력하세요:`
}

export function buildUserPrompt(input: RecruitmentPlanInput): string {
  const rolesSummary = input.roles
    .map((r) => `${r.title} ${r.count}명`)
    .join(', ')

  return `다음 채용 정보를 바탕으로 채용 전략서를 작성해주세요:

**채용 정보:**
- 채용 인원: 총 ${input.headcount}명 (${rolesSummary})
- 기업 인지도: ${input.brandRecognition}
- 목표 경력 수준: ${input.experienceLevel}
- 필요 스킬: ${input.requiredSkills.join(', ') || '미지정'}
- 업종/직무: ${input.industry} / ${input.jobTitle}
- 채용 목표일: ${input.targetDate}
- 채용 긴급도: ${input.urgencyLevel}/5 (5가 가장 긴급)
- 예산 범위: 월 ${input.budgetMin.toLocaleString()}원 ~ ${input.budgetMax.toLocaleString()}원

아래 JSON 스키마를 정확히 따라 응답하세요:
{
  "executiveSummary": "string (3줄 이내 핵심 요약, 이 채용의 핵심 전략 방향)",
  "channels": {
    "title": "채용 채널 전략",
    "primaryChannels": [
      {
        "name": "채용 플랫폼명",
        "fit": 1~5 사이 정수,
        "estimatedApplicants": "예상 지원자 수 (예: '월 20-30명(추정)')",
        "monthlyCost": "월 비용 (예: '50만원(추정)')",
        "reason": "이 채널을 추천하는 구체적인 이유"
      }
    ],
    "strategyNote": "채널 조합 운영 방식 및 운영 팁"
  },
  "sourcing": {
    "title": "소싱 & 타겟팅 전략",
    "marketInsight": "해당 직군의 현재 한국 채용 시장 인재풀 현황 분석",
    "attractionPoints": ["구직자를 유인할 수 있는 포인트 배열 (3-5개)"],
    "brandingCompensation": "기업 인지도가 낮을 경우 보완 방법 (인지도가 높으면 활용 방법)",
    "passiveCandidateApproach": "현재 이직을 고려 중이지 않은 우수 인재에게 접근하는 방법"
  },
  "budget": {
    "title": "예산 시뮬레이션",
    "items": [
      {
        "category": "비용 카테고리",
        "item": "항목명",
        "estimatedCost": "예상 비용",
        "notes": "비고 또는 절감 방법"
      }
    ],
    "totalEstimated": "총 예상 비용 (추정)",
    "costPerHire": "채용 1인당 예상 비용 (추정)",
    "priorityIfBudgetLow": "예산이 부족할 경우 우선순위 조정 방안",
    "disclaimer": "본 예산은 AI 추정치입니다. 실제 채용 진행 전 각 플랫폼의 공식 견적을 확인하세요."
  }
}`
}
