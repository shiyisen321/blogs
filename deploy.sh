#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist && touch README.md && echo -e "博客地址：https://YisenFE.github.io \n # 欢迎大家评论收藏" >> README.md

git init
git add -A
git commit -m 'deploy'

# git push -f git@github.com:shiyisen321/shiyisen321.github.io.git master

# 自动构建
git push -f https://${access_token}@github.com/YisenFE/YisenFE.github.io.git master

cd -

cd docs

rm -rf .vuepress/dist