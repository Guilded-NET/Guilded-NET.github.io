// The list was taken from Prism.js language highlight/toolbar plugin
const langNames = { none: "Plain text", plain: "Plain text", plaintext: "Plain text", text: "Plain text", txt: "Plain text", html: "HTML", xml: "XML", svg: "SVG", mathml: "MathML", css: "CSS", clike: "C-like", js: "JavaScript", asciidoc: "AsciiDoc", adoc: "AsciiDoc", aspnet: "ASP.NET (C#)", csharp: "C#", cs: "C#", dotnet: "C#", cpp: "C++", cil: "CIL", "css-extras": "CSS Extras", dockerfile: "Docker", editorconfig: "EditorConfig", fsharp: "F#", http: "HTTP", ignore: ".ignore", gitignore: ".gitignore", hgignore: ".hgignore", javadoclike: "JavaDoc-like", javastacktrace: "Java stack trace", jsdoc: "JSDoc", "js-extras": "JS Extras", json: "JSON", json5: "JSON5", jsonp: "JSONP", jsstacktrace: "JS stack trace", "js-templates": "JS Templates", latex: "LaTeX", tex: "TeX", context: "ConTeXt", log: "Log file", md: "Markdown", "markup-templating": "Markup templating", mongodb: "MongoDB", plsql: "PL/SQL", powerquery: "PowerQuery", pq: "PowerQuery", mscript: "PowerQuery", powershell: "PowerShell", properties: ".properties", qsharp: "Q#", qs: "Q#", q: "Q (kdb+ database)", qml: "QML", jsx: "React JSX", tsx: "React TSX", "shell-session": "Shell session", "sh-session": "Shell session", shellsession: "Shell session", "solution-file": "Solution file", sln: "Solution file", sql: "SQL", iecst: "Structured Text (IEC 61131-3)", "t4-templating": "T4 templating", "t4-cs": "T4 Text Templates (C#)", t4: "T4 Text Templates (C#)", "t4-vb": "T4 Text Templates (VB)", tt2: "Template Toolkit 2", ts: "TypeScript", tsconfig: "TSConfig", vbnet: "VB.Net", "visual-basic": "Visual Basic", vba: "VBA", vb: "Visual Basic", "xml-doc": "XML doc (.net)" }

// Gets attribute value as array
function getArrayAttribute(elem, attr) {
    // Get either the value of the element or its parent
    const attrValue = elem.attributes[attr] || elem.parentElement.attributes[attr] || { value: "" }
    // Split the value by `,`
    return attrValue.value.split(',')
}

// Add custom lines, not the weird ones at the end of the code
Prism.hooks.add('linenums', e => {
    const elem = e.element
    // Make sure it has no lines already
    if (
        (elem.firstElementChild != void 0 && elem.firstElementChild.tagName === 'CODELINE') ||
        elem.parentElement.tagName !== 'PRE'
    ) return

    const inner = e.highlightedCode
    // Leave it empty to not add repetition
    elem.innerHTML = ''
    // Split the contents by newlines
    const lines = inner.split('\n')
    // Get highlighted line
    const highlighted = getArrayAttribute(elem, 'data-highlight'),
        inserted = getArrayAttribute(elem, 'data-insert'),
        deleted = getArrayAttribute(elem, 'data-delete')
    // Get each line in the contents
    for (let i in lines) {
        const line = lines[i]
        // Create element based on the line
        const lineElem = document.createElement('codeline')
        lineElem.innerHTML = line
        // Check if it's highlighted
        // Ol' and boring code
        if (highlighted.includes(i))
            lineElem.classList.add('highlighted')
        else if (inserted.includes(i))
            lineElem.classList.add('inserted')
        else if (deleted.includes(i))
            lineElem.classList.add('deleted')
        // Append it to the code block
        elem.appendChild(lineElem)
    }
})
// Add language and filename support instead of default one
Prism.hooks.add('codewrapper', e => {
    const elem = e.element
    // Make sure it's the code block that's being wrapped around, not Prism.js inline code
    if (elem.parentElement.tagName !== 'PRE') return
    // Determine what to wrap around
    const base = elem.parentElement
    // Create wrapper for it
    const wrapper = document.createElement('codeblock')
    // Language label shown above the 
    const lang = document.createElement('span')
    lang.classList.add('code-lang')
    lang.innerHTML = langNames[e.language]
    // Add everything to the wrapper
    wrapper.prepend(lang)
    // Wrap around contents
    const content = document.createElement('div')
    content.classList.add('code-content')
    // Header above the code block
    const header = document.createElement('div')
    header.classList.add('code-header')
    // If filename has been given, append it to the header
    if (elem.attributes['data-filename']) {
        const filename = elem.attributes['data-filename'].value
        // Create element for it
        const file = document.createElement('div')
        file.classList.add('code-filename')
        file.innerHTML = `<span class="code-data-label">File:</span> <span class="code-data-value">${filename}</span>`
        // And append it
        header.appendChild(file)
        // Only add a header if filename is specified
        content.appendChild(header)
    }
    wrapper.appendChild(content)
    // Wrap around the code
    base.parentElement.insertBefore(wrapper, base)
    content.appendChild(base)
})
// Run all of those plugins
Prism.hooks.add('before-highlight', e => Prism.hooks.run('codewrapper', e))
Prism.hooks.add('after-highlight', e => Prism.hooks.run('linenums', e))