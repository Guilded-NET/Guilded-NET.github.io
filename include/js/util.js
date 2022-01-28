// Either parent's or current child's attribute. Because we might end up working with either <code>'s or <pre>'s attributes in <pre><code>...
function getAttribute(elem, attr) {
    const attrValue = elem.attributes[attr] || elem.parentElement.attributes[attr];

    return attrValue ? attrValue.value : undefined;
}
// TODO: Add 1-3 support; Currently only 1,2,3 are allowed
function getArrayAttribute(elem, attr) {
    return (getAttribute(elem, attr) || "").split(",");
}
