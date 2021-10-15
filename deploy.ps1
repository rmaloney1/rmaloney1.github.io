npm run build
if ($?) {
    rm -r docs
    cp -r out docs
    echo $null >> docs/.jekyll
    git add docs
    git commit -m "deployment"
    git push
}