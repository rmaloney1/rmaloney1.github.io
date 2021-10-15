npm run build
if ($?) {
    rm -r docs
    cp -r out docs
    echo $null >> docs/.nojekyll
    git add docs
    git commit -m "deployment"
    git push
}