# 부록 B: 단축키 & 커맨드

Claude Code를 더 빠르게 사용하기 위한 명령어 모음입니다.

---

## 설치 & 시작

```bash
# 설치
npm install -g @anthropic-ai/claude-code

# 버전 확인
claude --version

# 현재 폴더에서 시작
claude

# 특정 명령을 바로 실행
claude "파일 목록 보여줘"

# 도움말
claude --help
```

## 대화 중 단축키

| 단축키 | 동작 |
|--------|------|
| `Ctrl + C` | 현재 작업 중단 / 나가기 |
| `Ctrl + L` | 화면 지우기 |
| `↑` / `↓` | 이전/다음 명령어 불러오기 |

## 자주 쓰는 명령어 패턴

```bash
# 파일 작업
claude "README.md 파일을 만들어줘"
claude "src 폴더의 모든 파일 목록을 보여줘"
claude "package.json의 내용을 요약해줘"

# 코드 작업
claude "이 파일의 버그를 찾아줘"
claude "함수에 한국어 주석을 추가해줘"

# 프로젝트 이해
claude "이 프로젝트가 무엇을 하는 프로젝트인지 설명해줘"
claude "CLAUDE.md를 읽고 현재 작업 상태를 알려줘"
```

## 플래그 (고급)

```bash
# 모델 지정
claude --model claude-opus-4-5 "질문"

# 파일 포함하여 질문
claude --file report.md "이 파일 요약해줘"
```

---

*하루 한입 클로드 — 부록 B*
