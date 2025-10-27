# GitHub에 수동으로 업로드하는 방법

현재 로컬에 모든 코드가 준비되어 있지만, GitHub 인증 문제로 자동 푸시가 불가능합니다.

## 가장 빠른 방법: GitHub 웹에서 파일 직접 업로드

1. https://github.com/TeddyWChoi/fivetwogo 로 이동
2. "Add file" → "Upload files" 클릭
3. 다음 파일들을 드래그 앤 드롭:
    - 모든 소스 코드 (src/ 폴더 전체)
    - package.json
    - package-lock.json (있을 경우)
    - vite.config.ts
    - tsconfig.json
    - index.html
    - README.md
    - .gitignore
4. "Commit changes" 클릭

## 또는 Personal Access Token 사용

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" 클릭
3. Scope에서 "repo" 체크
4. 토큰 생성 후 복사

터미널에서:

```bash
git push https://[TOKEN]@github.com/TeddyWChoi/fivetwogo.git main
```

## 현재 상태

-   ✅ 로컬 코드: 모든 파일 준비 완료
-   ✅ 빌드 완료: build/ 디렉토리에 산출물 생성
-   ✅ 로컬 서버 실행 중: http://localhost:3001
-   ❌ GitHub 푸시: 인증 필요

## 로컬 코드 위치

/Users/vertigo_teddy/Documents/FiveTwoGo/
