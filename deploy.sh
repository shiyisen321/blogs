
set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:shiyisen321/shiyisen321.github.io.git master

cd -

rm -rf .vuepress/dist