// 遍历 src/scripts 目录下的所有文件，使用 pkg 打包
const fs = require("fs");
const path = require("path");
const pkg = require("pkg");

const srcDir = path.resolve(__dirname, "../src/scripts");
const outputDir = path.resolve(__dirname, "../dist");
const files = fs.readdirSync(srcDir);

files.forEach((file) => {
	const filePath = path.resolve(srcDir, file);
	const extname = path.extname(filePath);

	if (extname === ".js") {
		pkg.exec(["--out-dir", outputDir, "--target", "host", filePath]);
	}
});
