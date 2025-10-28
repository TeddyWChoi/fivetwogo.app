# GitHub 인증 문제 해결 가이드

## 문제 원인

### HTTP 400 오류가 발생하는 이유

1. **2021년 8월부터 GitHub가 패스워드 기반 HTTPS 인증을 차단**
    - 보안상의 이유로 더 이상 비밀번호로 push 불가
2. **Personal Access Token (PAT) 필수**

    - 이제는 개인 액세스 토큰을 사용해야 함
    - 토큰 없이는 HTTPS로 push 불가능

3. **SSH 키 미설정**
    - SSH를 사용하려면 SSH 키가 설정되어야 함
    - 현재 시스템에 SSH 키가 설정되어 있지 않음

## 해결 방법

### 방법 1: Personal Access Token 사용 (추천)

1. **GitHub에서 토큰 생성**

    - https://github.com/settings/tokens 로 이동
    - "Generate new token" → "Generate new token (classic)" 클릭
    - Token name: `fivetwogo-local` (원하는 이름)
    - Expiration: 90 days (또는 원하는 기간)
    - Select scopes: **repo** 체크박스 선택
    - "Generate token" 클릭
    - ⚠️ **토큰을 복사해두세요!** (나중에 볼 수 없음)

2. **토큰으로 push**

    ```bash
    git remote set-url origin https://[YOUR_TOKEN]@github.com/TeddyWChoi/fivetwogo.git
    git push origin main
    ```

    또는 토큰을 환경변수로:

    ```bash
    export GITHUB_TOKEN=your_token_here
    git push https://$GITHUB_TOKEN@github.com/TeddyWChoi/fivetwogo.git main
    ```

### 방법 2: SSH 키 설정

1. **SSH 키 생성**

    ```bash
    ssh-keygen -t ed25519 -C "your_email@example.com"
    ```

2. **SSH 키를 GitHub에 추가**

    - 생성된 키를 복사: `cat ~/.ssh/id_ed25519.pub`
    - https://github.com/settings/keys 로 이동
    - "New SSH key" 클릭 후 키 붙여넣기

3. **원격 저장소 URL 변경 및 push**
    ```bash
    git remote set-url origin git@github.com:TeddyWChoi/fivetwogo.git
    git push origin main
    ```

### 방법 3: GitHub CLI 사용

1. **GitHub CLI 설치**

    ```bash
    brew install gh
    ```

2. **로그인**

    ```bash
    gh auth login
    ```

3. **Push**
    ```bash
    git push origin main
    ```

### 방법 4: GitHub 웹에서 직접 업로드

1. https://github.com/TeddyWChoi/fivetwogo 로 이동
2. "Uploading an existing file" 클릭
3. 파일 드래그 앤 드롭
4. "Commit changes" 클릭

## 현재 상태

-   ✅ 로컬 코드: 준비 완료
-   ✅ Git 커밋: 완료
-   ✅ 빌드: 완료
-   ❌ GitHub 푸시: 인증 문제로 대기 중
-   ✅ 로컬 서버: http://localhost:3001 에서 실행 중

## 권장사항

**Personal Access Token 방법을 추천합니다** (가장 빠르고 간단)

1. Token 생성: https://github.com/settings/tokens/new
2. 생성된 토큰 복사
3. 아래 명령어 실행:
    ```bash
    git remote set-url origin https://[PASTE_YOUR_TOKEN_HERE]@github.com/TeddyWChoi/fivetwogo.git
    git push origin main
    ```

## 자주 묻는 질문

**Q: 토큰이 유출되면?**  
A: 즉시 토큰을 삭제하고 새로 생성하세요. (Settings → Developer settings → Personal access tokens)

**Q: 매번 토큰을 입력해야 하나요?**  
A: osxkeychain에 저장되면 한 번만 입력하면 됩니다.

**Q: SSH vs HTTPS, 어느 것이 더 나은가요?**  
A: SSH가 더 편리하지만 초기 설정이 필요합니다. HTTPS + Token이 더 간단합니다.
