# CLAUDE.md — 하루 한입 클로드 프로젝트

이 파일은 Claude Code가 프로젝트 전체 컨텍스트를 이해하기 위한 마스터 가이드입니다.
Claude Code는 새 세션을 시작할 때마다 이 파일을 먼저 읽습니다.

---

## 프로젝트 개요

**이름**: 하루 한입 클로드 (One Bite of Claude per Day)
**목표**: 비개발자가 Claude Code를 7일 만에 익히는 실습형 온보딩 가이드
**특이사항**: 가이드 자체를 Claude Code CLI로 제작

## 결과물 목록

| 결과물 | 위치 | 상태 |
|--------|------|------|
| GitBook 가이드 (Day 1~7) | `docs/day*/README.md` | 진행중 |
| 카드뉴스 HTML (각 Day) | `docs/day*/card-news.html` | 진행중 |
| 부록 A — 핵심 용어 사전 | `docs/appendix-a/README.md` | 대기 |
| 부록 B — 단축키 & 커맨드 | `docs/appendix-b/README.md` | 대기 |
| 부록 C — 추천 리소스 | `docs/appendix-c/README.md` | 대기 |
| 카드뉴스 템플릿 | `templates/card-news-template.html` | 완료 |

## 커리큘럼 구조

```
Day 1: Claude Code란 무엇인가 (에이전트 vs 채팅, 컨텍스트 윈도우)
Day 2: 파일 시스템과 Working Directory
Day 3: CLAUDE.md 작성법 (가장 중요)
Day 4: 첫 카드뉴스 생성 (프롬프트 구조)
Day 5: 반복과 수정 (Iterative Refinement)
Day 6: 배치 작업 + 자동화 파이프라인
Day 7: 마무리 + 다음 단계
부록 A: 핵심 용어 사전
부록 B: 단축키 & 커맨드
부록 C: 추천 리소스
```

## 각 Day 문서 구조

모든 `docs/day*/README.md` 파일은 다음 순서를 반드시 따릅니다:

1. **오늘의 한 줄 요약** — 핵심 메시지 1문장
2. **복붙 시작** — 즉시 실행 가능한 명령어 블록
3. **결과 확인** — 실행 후 나타나야 할 결과물 스크린샷/예시
4. **Why** — 왜 이것이 중요한가
5. **What** — 무엇인가 (개념 설명)
6. **How** — 어떻게 사용하는가 (단계별)
7. **오늘의 정리** — 핵심 3가지
8. **다음 Day 예고**

## 카드뉴스 9장 고정 구조

```
Card 1: 타이틀 카드 (Day N + 오늘의 주제)
Card 2: 오늘 배울 것 (3가지 포인트)
Card 3: Why — 왜 중요한가
Card 4: What — 핵심 개념 1
Card 5: What — 핵심 개념 2
Card 6: How — 실습 단계 1
Card 7: How — 실습 단계 2
Card 8: 오늘의 정리 (3줄 요약)
Card 9: 다음 Day 예고 + CTA
```

## 디자인 시스템

### 브랜드 색상 (Anthropic 공식)

```css
--color-dark:   #141413;  /* 텍스트, 배경 다크 */
--color-light:  #faf9f5;  /* 배경 라이트 */
--color-sand:   #e8e6dc;  /* 보조 배경, 구분선 */
--color-orange: #d97757;  /* 포인트, 강조, 상단 라인 */
--color-blue:   #6a9bcc;  /* 링크, 코드 */
--color-green:  #788c5d;  /* 성공, 체크 */
```

### 카드뉴스 디자인 규칙

- **상단 오렌지 라인**: 모든 카드 상단에 `4px solid #d97757` 라인 고정
- **배경**: `#faf9f5` (라이트 배경)
- **타이포**: 본문 세리프(Georgia), 코드 모노(JetBrains Mono 또는 monospace)
- **카드 크기**: `1080×1080px` (정사각형, SNS 최적화)
- **패딩**: 카드 내부 `60px`
- **타이틀 폰트**: 32px bold, 색상 `#141413`
- **본문 폰트**: 18px, 행간 1.7, 색상 `#141413`
- **코드 블록**: 배경 `#141413`, 텍스트 `#faf9f5`, 모노 폰트

### 카드뉴스 HTML 생성 규칙

새 카드뉴스를 만들 때는 반드시 `templates/card-news-template.html`을 기반으로 합니다.
`docs/day*/card-news.html`로 저장하며 독립 실행 가능한 단일 HTML 파일로 만듭니다.

## 설계 원칙

1. **체험 → 설명** 순서: 개념 먼저 X, 실행 먼저 Y
2. **챕터마다 복붙 하나**: 첫 번째 행동은 항상 명령어 복사 붙여넣기
3. **챕터마다 결과물**: 실습 후 반드시 눈에 보이는 결과물 존재
4. **톤**: Anthropic 공식 문서 수준, 오피셜하고 전문적
5. **순서**: Why → What → How

## 파일 이름 규칙

```
docs/day1/README.md          # Day 1 가이드 본문
docs/day1/card-news.html     # Day 1 카드뉴스
docs/appendix-a/README.md    # 부록 A
templates/card-news-template.html  # 카드뉴스 기본 템플릿
```

## 자주 쓰는 명령어

```bash
# GitBook 로컬 서버 (미리보기)
gitbook serve

# Vercel 배포
vercel --prod

# 카드뉴스 HTML 확인
open docs/day1/card-news.html
```

## 현재 작업 상태

- [x] 프로젝트 폴더 구조 생성
- [x] CLAUDE.md 마스터 파일 작성
- [ ] Day 1 가이드 작성
- [ ] Day 1 카드뉴스 HTML 생성
- [ ] Day 2~7 가이드 작성
- [ ] 부록 A/B/C 작성
- [ ] Vercel 배포 설정

## 참고 소스

- 공식 문서: https://docs.anthropic.com
- Anthropic 뉴스: https://anthropic.com/news
- Anthropic 엔지니어링: https://anthropic.com/engineering
- X: @AnthropicAI, @bcherny (Claude Code 창시자)
- 커뮤니티: shanraisshan/claude-code-best-practice
