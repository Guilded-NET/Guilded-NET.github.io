// Check if the plugin exists
if(Prism.plugins.NormalizeWhitespace)
    Prism.plugins.NormalizeWhitespace.setDefaults({
        // Remove whitespace before and after code
        'left-trim': true,
        'right-trim': true,
        // Removes whitespace after the line
        'remove-trailing': true
    })