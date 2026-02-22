export type BrandRecognition = '스타트업' | '중소기업' | '중견기업' | '대기업'
export type ExperienceLevel = '신입' | '1-3년' | '3-5년' | '5-10년' | '10년 이상'
export type UrgencyLevel = 1 | 2 | 3 | 4 | 5

export interface RoleItem {
  id: string
  title: string
  count: number
}

export interface RecruitmentPlanInput {
  // Step 1
  headcount: number
  roles: RoleItem[]
  // Step 2
  brandRecognition: BrandRecognition
  // Step 3
  experienceLevel: ExperienceLevel
  requiredSkills: string[]
  // Step 4
  industry: string
  jobTitle: string
  // Step 5
  targetDate: string
  urgencyLevel: UrgencyLevel
  // Step 6
  budgetMin: number
  budgetMax: number
}

export interface ChannelItem {
  name: string
  fit: number
  estimatedApplicants: string
  monthlyCost: string
  reason: string
}

export interface CostItem {
  category: string
  item: string
  estimatedCost: string
  notes: string
}

export interface RecruitmentPlanOutput {
  executiveSummary: string
  channels: {
    title: string
    primaryChannels: ChannelItem[]
    strategyNote: string
  }
  sourcing: {
    title: string
    marketInsight: string
    attractionPoints: string[]
    brandingCompensation: string
    passiveCandidateApproach: string
  }
  budget: {
    title: string
    items: CostItem[]
    totalEstimated: string
    costPerHire: string
    priorityIfBudgetLow: string
    disclaimer: string
  }
}
