import Anthropic from '@anthropic-ai/sdk'
import { buildSystemPrompt, buildUserPrompt } from '@/lib/prompts'
import type { RecruitmentPlanInput } from '@/types/recruitment'

export const runtime = 'edge'

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    return new Response('ANTHROPIC_API_KEY가 설정되지 않았습니다.', { status: 500 })
  }

  let body: RecruitmentPlanInput
  try {
    body = await req.json()
  } catch {
    return new Response('잘못된 요청 형식입니다.', { status: 400 })
  }

  const anthropic = new Anthropic({ apiKey })
  const encoder = new TextEncoder()

  const readable = new ReadableStream({
    async start(controller) {
      try {
        const stream = anthropic.messages.stream({
          model: 'claude-sonnet-4-6',
          max_tokens: 4096,
          system: buildSystemPrompt(),
          messages: [{ role: 'user', content: buildUserPrompt(body) }],
        })

        for await (const event of stream) {
          if (
            event.type === 'content_block_delta' &&
            event.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(event.delta.text))
          }
        }

        controller.close()
      } catch (err) {
        controller.error(err)
      }
    },
  })

  return new Response(readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
