#!/bin/bash

# GitHub 업로드 스크립트
# 이 스크립트는 GitHub Personal Access Token을 사용하여 코드를 push합니다

echo "=== FiveTwoGo GitHub Upload Script ==="
echo ""
echo "현재 디렉토리: $(pwd)"
echo ""

# Git 상태 확인
echo "1. Git 상태 확인..."
git status --short
echo ""

# 커밋된 파일 확인
echo "2. 커밋된 파일 확인..."
git log --oneline -3
echo ""

# 푸시 시도
echo "3. GitHub에 푸시 시도..."
echo ""
echo "⚠️  GitHub 인증이 필요합니다."
echo ""
echo "방법 1: Personal Access Token 사용"
echo "----------------------------------------"
echo "1) https://github.com/settings/tokens/new 로 이동"
echo "2) 'Generate new token (classic)' 클릭"
echo "3) 'repo' 체크박스 선택"
echo "4) 'Generate token' 클릭"
echo "5) 생성된 토큰 복사"
echo ""
echo "6) 아래 명령어 실행:"
echo "   git remote set-url origin https://[토큰]@github.com/TeddyWChoi/fivetwogo.git"
echo "   git push origin main"
echo ""
echo "방법 2: GitHub 웹에서 직접 업로드"
echo "----------------------------------------"
echo "1) https://github.com/TeddyWChoi/fivetwogo 로 이동"
echo "2) 'Uploading an existing file' 클릭"
echo "3) 파일을 드래그 앤 드롭"
echo ""
echo "현재 로컬 서버: http://localhost:3001"
echo ""

