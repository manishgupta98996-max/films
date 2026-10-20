import fs from "fs";
import path from "path";

const cleanPlaceholder = (folder) => {
  const dir = path.join(process.cwd(), "out", folder);
  const targetDir = path.join(dir, "_empty_placeholder");
  const targetHtml = path.join(dir, "_empty_placeholder.html");
  const targetTxt = path.join(dir, "_empty_placeholder.txt");

  if (fs.existsSync(targetDir)) fs.rmSync(targetDir, { recursive: true, force: true });
  if (fs.existsSync(targetHtml)) fs.unlinkSync(targetHtml);
  if (fs.existsSync(targetTxt)) fs.unlinkSync(targetTxt);
};

cleanPlaceholder("blog");
cleanPlaceholder("guide");

console.log("Cleaned up temporary export placeholder artifacts from out/blog/ and out/guide/.");
