#!/usr/bin/env sh
# Build the site and publish dist/ to the gh-pages branch (GitHub Pages).
# Usage: npm run deploy
set -e

npm run build

# Serve the app for deep links like /Secure64Project/products/dns-cache
cp dist/index.html dist/404.html
# Tell GitHub Pages not to run Jekyll over the build
touch dist/.nojekyll

remote=$(git config --get remote.origin.url)
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C .. config user.name)" -c user.email="$(git -C .. config user.email)" \
  commit -q -m "Deploy $(git -C .. rev-parse --short HEAD)"
git push -f "$remote" gh-pages
rm -rf .git
