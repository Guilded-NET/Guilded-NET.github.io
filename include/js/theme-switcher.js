// Get switch button and all themes
const docTheme = document.getElementById('doc-theme'),
      switchBtn = document.getElementById('theme-switch')

const themes = [
    {
        name: 'darker',
        icon: 'fas fa-cloud-moon',
    },
    {
        name: 'guilded',
        icon: 'fas fa-moon'
    }
]

// Current index of the theme
let i = 0
// Watch whenever switch gets clicked
switchBtn.addEventListener('click', e => {
    // Reset cycling if it's above the last index
    if(++i == themes.length)
        i = 0
    // Current theme
    const theme = themes[i]
    // Set the theme
    docTheme.href = `/include/css/theme-${theme.name}.css`
    // Change the icon of the switch button
    switchBtn.firstChild.classList = theme.icon
})