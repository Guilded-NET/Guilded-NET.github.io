// Highlight types (line created, line deleted, line highlighted)
const highlightTypeToAttribute = {
    highlighted: "data-highlight",
    inserted: "data-insert",
    deleted: "data-delete"
};
const highlightTypes = Object.keys(highlightTypeToAttribute);

// Add custom lines, not the weird ones at the end of the code
Prism.hooks.add("linenums", e => {
    const elem = e.element;
    // Make sure it has no lines already and is not inline
    if (
        (elem.firstElementChild != void 0 && elem.firstElementChild.tagName === "CODELINE") ||
        elem.parentElement.tagName !== "PRE"
    )
        return;

    const inner = e.highlightedCode;
    // To not add repetition
    elem.innerHTML = "";

    const lines = inner.split("\n");

    const highlightedLineTable = getHighlightLines();

    for (let lineNum in lines) {
        const line = lines[lineNum];

        // Line element
        const lineElem = document.createElement("codeline");
        lineElem.innerHTML = line;

        // Add highlighting if needed
        for (let highlightTable of highlightedLineTable)
            if (highlightTable.linesHighlighted.includes(lineNum)) lineElem.classList.add(highlightTable.type);

        elem.appendChild(lineElem);
    }
});
// For each highlight type, get their highlighted lines
function getHighlightLines(element) {
    return highlightTypes.map(type => ({
        type,
        linesHighlighted: getArrayAttribute(element, highlightTypeToAttribute[type])
    }));
}

Prism.hooks.add("after-highlight", e => Prism.hooks.run("linenums", e));
