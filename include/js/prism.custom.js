// Add custom lines, not the weird ones at the end of the code
Prism.hooks.add('linenums', elem => {
    // Make sure it has no lines already
    if(elem.querySelector('codeline')) return

    const inner = elem.innerHTML
    // Leave it empty to not add repetition
    elem.innerHTML = ''
    // Split the contents by newlines
    const lines = inner.split('\n')
    // Get highlighted line
    const highlighted = elem.attributes['data-highlight'] ? elem.attributes['data-highlight'].value.split(',') : []
    // Get each line in the contents
    for(let i in lines) {
        const line = lines[i]
        // Create element based on the line
        const lineElem = document.createElement('codeline')
        lineElem.innerHTML = line
        // Check if it's highlighted
        if(highlighted.includes(i))
            lineElem.classList.add('highlighted')
        // Append it to the code block
        elem.appendChild(lineElem)
    }
})
// Add language and filename support instead of default one