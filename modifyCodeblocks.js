import prism from "prismjs";
import loadLanguages from "prismjs/components/index.js";
import { langNames } from "./lang-names.js";

const csharp = ["csharp", "t4-cs", "cshtml"];
const fsharp = ["fsharp"];
const vbnet = ["vbnet", "vb", "t4-vb"];
const dotnet = ["qsharp", "xml-doc"];
const shell = ["powershell", "bash", "batch", "shell", "shell-session"];
const config = ["yaml", "toml", "json", "json5", "docker"];
const misc = [
  "regex",
  "t4-templating",
  "sql",
  "mongodb",
  "log",
  "latex",
  "md",
  "markdown",
  "http",
  "git",
  "diff",
];

/** @type {import("unified").Plugin} */
const modifyCodeblocks = () => {
  loadLanguages([
    ...csharp,
    ...fsharp,
    ...vbnet,
    ...dotnet,
    ...shell,
    ...config,
    ...misc,
  ]);

  return async (root) => {
    return { ...root, children: root.children.map(modifyCodeNode) };
  };
};

// Changes code to HTML
function modifyCodeNode(node) {
  // Ignore non-code
  if (node.type !== "code") return node;

  const { position } = node;

  return { type: "html", value: generateCodeBlock(node), position };
}

// Wrap it in HTML
const generateCodeBlock = (node) => {
  const meta = JSON.parse(node.meta);

  return wrapCodeBlock(
    wrapCode(lineifyCode(highlightNode(node), meta), node.lang),
    node.lang,
    meta
  );
};

const wrapCodeBlock = (codeblockHtml, lang, meta) =>
  `<div class="code-block container">${createCodeBlockHeader(
    lang,
    meta
  )}${codeblockHtml}</div>`;

const createCodeBlockHeader = (lang, meta) =>
  `<header class="code-block header"><div class="code-block lang">${
    langNames[lang]
  }</div>${meta ? createCodeBlockMeta(meta) : ""}</header>`;

const createCodeBlockMeta = (meta) =>
  `<section class="code-block meta">${
    meta?.file ? createCodeBlockMetaProp("File", meta.file) : ""
  }</section>`;

const createCodeBlockMetaProp = (name, value) =>
  `<div class="code-block-meta-prop container"><span class="code-block-meta-prop key">${name}: </span><span class="code-block-meta-prop value">${value}</span></div>`;

const wrapCode = (code, lang) =>
  `<pre class="code-block code-wrapper language-${lang} ${lang}"><code class="code-block code-container language-${lang} ${lang}">${code}</code></pre>`;

const lineifyCode = (code, meta) =>
  code
    .split("\n")
    .map(
      (line, i) =>
        `<codeline class="code-block line${
          meta?.insert && meta.insert.includes(i) ? " inserted" : ""
        }${meta?.delete && meta.delete.includes(i) ? " deleted" : ""}${
          meta?.highlight && meta.highlight.includes(i) ? " highlighted" : ""
        }">${line}</codeline>`
    )
    .join("");

// Highlights raw code with colour
const highlightNode = ({ lang, value }) =>
  prism.highlight(value, prism.languages[lang], lang).replace(/[{]/g, "&#123;");

export default modifyCodeblocks;
