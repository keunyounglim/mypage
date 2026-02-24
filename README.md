# 하루 한입 클로드

비개발자가 Claude Code를 7일 만에 익히는 실습형 온보딩 가이드.

> 이 가이드 자체를 Claude Code CLI로 제작했습니다.

---

## 커리큘럼

| | 주제 | 핵심 개념 |
|---|---|---|
| **Day 1** | [Claude Code란 무엇인가](docs/day1/README.md) | 에이전트 vs 채팅, 컨텍스트 윈도우 |
| **Day 2** | [파일 시스템과 Working Directory](docs/day2/README.md) | 경로, 작업 디렉토리 |
| **Day 3** | [CLAUDE.md 작성법](docs/day3/README.md) | 컨텍스트 보존, 프로젝트 메모리 |
| **Day 4** | [첫 카드뉴스 생성](docs/day4/README.md) | 프롬프트 구조, HTML 생성 |
| **Day 5** | [반복과 수정](docs/day5/README.md) | Iterative Refinement |
| **Day 6** | [배치 작업 + 자동화](docs/day6/README.md) | 파이프라인, 자동화 |
| **Day 7** | [마무리 + 다음 단계](docs/day7/README.md) | 배포, 커뮤니티 |

### 부록

- [부록 A — 핵심 용어 사전](docs/appendix-a/README.md)
- [부록 B — 단축키 & 커맨드](docs/appendix-b/README.md)
- [부록 C — 추천 리소스](docs/appendix-c/README.md)

---

## 카드뉴스

각 Day마다 SNS용 카드뉴스(9장, 1080×1080px) HTML 파일이 함께 제공됩니다.

- [Day 1 카드뉴스](docs/day1/card-news.html)

---

## 설계 원칙

1. **체험 → 설명** 순서: 개념 먼저 X, 실행 먼저 Y
2. **챕터마다 복붙 하나**: 첫 번째 행동은 항상 명령어 복사 붙여넣기
3. **챕터마다 결과물**: 실습 후 반드시 눈에 보이는 결과물 존재
4. **순서**: Why → What → How

## 디자인 시스템

Anthropic 공식 브랜드 색상 기반.

| 토큰 | 값 | 용도 |
|------|-----|------|
| Dark | `#141413` | 텍스트, 다크 배경 |
| Light | `#faf9f5` | 카드 배경 |
| Sand | `#e8e6dc` | 보조 배경 |
| Orange | `#d97757` | 포인트, 상단 라인 |
| Blue | `#6a9bcc` | 링크, 코드 |
| Green | `#788c5d` | 성공, 체크 |

---

## 로컬 실행

```bash
# 의존성 없음 — HTML 파일을 브라우저에서 바로 열면 됩니다
open docs/day1/card-news.html
```

---

*하루 한입 클로드 — Anthropic 공식 브랜드 가이드라인 준수*
