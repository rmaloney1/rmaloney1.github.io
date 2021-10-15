npm run build && 
rm -r docs && 
cp -r out docs && 
touch docs/.nojekyll && 
git add docs && 
git commit -m "deployment" && 
git push
