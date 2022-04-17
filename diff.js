const Koa = require("koa");
const Diff2html = require("diff2html");
const fs = require("fs");
const path = require("path");

const regex = /((-|\+)( +)?\/?\*\*?)|((-|\+)( +)?\/\/)|(\+( +)?import)/;

function generateDiffStr(path) {
    const diffStr = fs.readFileSync(path).toString();
    return diffStr
        .split("\n")
        .filter(line => !line.match(regex))
        .join("\n");
}

const diffPath = path.resolve(__dirname, "diffs");
const diffFiles = fs.readdirSync(diffPath);

let diff;

for (const fileName of diffFiles) {
    if (fileName.endsWith(".diff")) {
        const str = generateDiffStr(path.resolve(diffPath, fileName));
        diff = [diff, str].join("\n");
    }
}
const diffJson = Diff2html.parse(diff);

const diffHtml = Diff2html.html(diffJson, {
    drawFileList: true,
});

const app = new Koa();

app.use(ctx => {
    ctx.body = [
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css" />',
        '<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css" />',
        '<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/diff2html/bundles/js/diff2html.min.js"></script>',
        diffHtml,
    ].join("");
});

app.listen(3000, () => {
    console.log("[*] html diff running on http://localhost:3000");
});
