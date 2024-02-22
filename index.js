function convertToJS() {
    var htmlInput = document.getElementById('htmlInput').value;
    var escapedHTML = escapeHTML(htmlInput);
    var jsOutput = 'document.body.innerHTML = \'' + escapedHTML + '\';';
    document.getElementById('jsOutput').textContent = jsOutput;
}

function escapeHTML(html) {
    return html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '\\\'').replace(/"/g, '&quot;');
}