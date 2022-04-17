diff_folder=diffs
if [ ! -d "./$diff_folder" ]
then 
  echo "[*] creating $diff_folder folder";
  mkdir $diff_folder
fi

echo "[*] generating diff for platform (original) -> convex-platform (aura updates)"
git diff --no-index platform/contracts/contracts convex-platform/contracts/contracts > "$diff_folder/convex.diff"

if [ ! -f "fileMap.json" ] 
then 
  echo "[!] fileMap.json not found"
  exit;
fi

file_map=$( cat fileMap.json );

echo "[*] generating diff for $(echo $file_map | ./node_modules/node-jq/bin/jq length) file(s):";

echo "$file_map" | ./node_modules/node-jq/bin/jq -c '.[]' |
while IFS=$"\n" read -r c; do
    convex=$(echo "$c" | ./node_modules/node-jq/bin/jq -r '.convex' | sed 's/\.sol//')
    aura=$(echo "$c" | ./node_modules/node-jq/bin/jq -r '.aura' | sed 's/\.sol//')
    file_name="$( basename $convex):$(basename $aura)"
    echo "    |- generating $file_name";
    git diff --no-index "platform/contracts/contracts/$convex.sol" "contracts/$aura.sol" > "$diff_folder/$file_name.diff"
done

exit 0;
