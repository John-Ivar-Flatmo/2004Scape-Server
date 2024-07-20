key=$1
grep --include=\*.{js,ts,ejs} --exclude="seed.ts" -rn './' -e "$key"
echo "results in ../data folder"
cd "../data/"
grep --include=\*.rs2 --exclude="seed.ts" -rn './' -e "$key"