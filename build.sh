#!/bin/sh

# 스크립트 실행 중 오류 발생 시 즉시 중단
set -e

# 이전 output 디렉토리가 있다면 삭제하고 새로 생성
rm -rf output
mkdir output

git archive HEAD | tar -x -C output