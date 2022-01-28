// Check if the plugin even exists, because we might delete it accidentally
if (Prism.plugins.NormalizeWhitespace)
    Prism.plugins.NormalizeWhitespace.setDefaults({
        // Remove whitespace before and after code; this may be produced by /references pages
        "left-trim": true,
        "right-trim": true,
        // Space after the line
        "remove-trailing": true
    });
