// The list was taken from Prism.js language highlight/toolbar plugin

// Modified: Added bash, shell
// Modified: Removed languages that will be guaranteed to never be used
const langNames = {
    none: "Plain text",
    plain: "Plain text",
    plaintext: "Plain text",
    text: "Plain text",
    txt: "Plain text",
    html: "HTML",
    xml: "XML",
    svg: "SVG",
    mathml: "MathML",
    css: "CSS",
    clike: "C-like",
    js: "JavaScript",
    asciidoc: "AsciiDoc",
    adoc: "AsciiDoc",
    aspnet: "ASP.NET (C#)",
    bash: "bash",
    csharp: "C#",
    cs: "C#",
    dotnet: "C#",
    cpp: "C++",
    cil: "CIL",
    "css-extras": "CSS Extras",
    dockerfile: "Docker",
    editorconfig: "EditorConfig",
    fsharp: "F#",
    http: "HTTP",
    ignore: ".ignore",
    gitignore: ".gitignore",
    hgignore: ".hgignore",
    javadoclike: "JavaDoc-like",
    javastacktrace: "Java stack trace",
    jsdoc: "JSDoc",
    "js-extras": "JS Extras",
    json: "JSON",
    json5: "JSON5",
    jsonp: "JSONP",
    jsstacktrace: "JS stack trace",
    "js-templates": "JS Templates",
    latex: "LaTeX",
    tex: "TeX",
    context: "ConTeXt",
    log: "Log file",
    md: "Markdown",
    "markup-templating": "Markup templating",
    mongodb: "MongoDB",
    plsql: "PL/SQL",
    powerquery: "PowerQuery",
    pq: "PowerQuery",
    mscript: "PowerQuery",
    powershell: "PowerShell",
    properties: ".properties",
    qsharp: "Q#",
    qs: "Q#",
    q: "Q (kdb+ database)",
    qml: "QML",
    jsx: "React JSX",
    tsx: "React TSX",
    sh: "Shell",
    shell: "Shell",
    "shell-session": "Shell session",
    "sh-session": "Shell session",
    shellsession: "Shell session",
    "solution-file": "Solution file",
    sln: "Solution file",
    sql: "SQL",
    iecst: "Structured Text (IEC 61131-3)",
    "t4-templating": "T4 templating",
    "t4-cs": "T4 Text Templates (C#)",
    t4: "T4 Text Templates (C#)",
    "t4-vb": "T4 Text Templates (VB)",
    tt2: "Template Toolkit 2",
    ts: "TypeScript",
    tsconfig: "TSConfig",
    vbnet: "VB.Net",
    "visual-basic": "Visual Basic",
    vba: "VBA",
    vb: "Visual Basic",
    "xml-doc": "XML doc (.net)"
};

// Languages which do not require the label above code block
const namelessLangs = ["none", "plain", "plaintext", "text", "txt", undefined];

// Add language and filename support instead of default one
Prism.hooks.add("codewrapper", e => {
    const elem = e.element;
    // Make sure it's the code block that's being wrapped around, not Prism.js inline code
    if (elem.parentElement.tagName !== "PRE") return;

    const base = elem.parentElement;

    const content = document.createElement("codeblock");

    // Data header
    const header = document.createElement("div");
    header.classList.add("code-header");

    if (!namelessLangs.includes(e.language)) {
        // Lang name display
        const lang = document.createElement("div");
        lang.classList.add("code-lang");
        lang.innerHTML = langNames[e.language];

        header.prepend(lang);
    }

    const filename = getAttribute(elem, "data-filename");
    if (filename) {
        // "File: Filename" element
        const file = document.createElement("div");
        file.classList.add("code-filename");
        file.innerHTML = `<span class="code-data-label">File:</span> <span class="code-data-value">${filename}</span>`;

        header.appendChild(file);
    }
    content.appendChild(header);

    // Wrap around the code
    base.parentElement.insertBefore(content, base);
    content.appendChild(base);
});

Prism.hooks.add("before-highlight", e => Prism.hooks.run("codewrapper", e));
