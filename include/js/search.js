// Store search bar and searchable types
const search = document.getElementById('list-search')
const items = document.querySelectorAll('.body-list-items .list-namespace .list-item')
// Prepare lowercase version of the items instead of doing it over and over again
// Doesn't influence performance much, but eh
items.forEach(item =>
    item.lower = item.innerHTML.toLowerCase()
)
// Listen for any keys added
search.addEventListener('keydown', e => {
    // Wait for the value to update; setImmediate
    setTimeout(() => {
        // The value of the searchbar
        const value = e.target.value.toLowerCase()
        // Filter out all items
        items.forEach(item => {
            // If the item contains search value, display it
            if(item.lower.includes(value)) item.style = ""
            // Otherwise, don't show it
            else item.style = "display: none;"
        })
    }, 0)
})