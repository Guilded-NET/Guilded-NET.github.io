const blockQuoteIcons = {
    NOTE: "fa-solid fa-circle-plus",
    CAUTION: "fa-solid fa-circle-exclamation",
    WARNING: "fa-solid fa-circle-exclamation",
    IMPORTANT: "fa-solid fa-circle-info",
};

const blockQuotePrefixes = Object.keys(blockQuoteIcons);

/** @type {import("unified").Plugin} */
const modifyQuoteblocks = () => {
    return async (root) => {
        return { ...root, children: [...modifyQuoteNodes(root.children)] };
    };
};

// Changes code to HTML
function* modifyQuoteNodes(nodes) {
    for (const node of nodes) {
        let quoteType;

        // Ignore it
        if (node.type !== "blockquote" || !(quoteType = hasPrefix(node))) {
            yield node;
            continue;
        }

        const { position } = node;

        const quoteTypeName = quoteType.toLowerCase();

        yield {
            type: "html",
            value: `<div class="quote-block type-${quoteTypeName} container"><header class="quote-block header"><i class="quote-block header-icon ${blockQuoteIcons[quoteType]}"></i><span class="quote-block header-text">${quoteTypeName}</span></header><article class="quote-block text">`,
            position,
        };

        // Remove the prefix (`NOTE: ...` to `...`)
        // Really hacky and bad way of doing it, but can't be bothered to add additional stuff to for loop
        node.children[0].children[0].value =
            node.children[0].children[0].value.substring(quoteType.length + 2);

        for (const subnode of node.children) yield subnode;

        yield { type: "html", value: `</article></div>`, position };
    }
}

function hasPrefix(node) {
    return (
        node.children[0]?.type === "paragraph" &&
        node.children[0].children[0]?.type === "text" &&
        blockQuotePrefixes.find((prefix) =>
            node.children[0].children[0].value.startsWith(`${prefix}: `)
        )
    );
}

export default modifyQuoteblocks;
