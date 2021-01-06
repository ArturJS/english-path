const path = require('path');
const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const replaceInFile = async ({ filePath, from, to, encoding = 'utf8' }) => {
  const content = await readFile(filePath, encoding);
  const newContent = content.replace(from, to);

  await writeFile(filePath, newContent, encoding);
};

const disableCorsWildcardOrigin = async () => {
  const codeToFix = 'res.setHeader(header.key, header.value);';
  await replaceInFile({
    filePath: path.resolve(__dirname, '../node_modules/cors/lib/index.js'),
    from: codeToFix,
    to: `if (header.value !=='*') { ${codeToFix} }`,
  });
};

const main = async () => {
  await disableCorsWildcardOrigin();
};

main();
