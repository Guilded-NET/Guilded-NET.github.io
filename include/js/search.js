// Store search bar and searchable types
const search = document.getElementById("entry-list-search");
const items = document.querySelectorAll(".entryList--items .entryList--item");
const categories = document.querySelectorAll(".entryList--items .entryList--category");
const displayNone = "display: none;";

// Prepare lowercase version of the items instead of doing it over and over again
// Doesn't influence performance much, but eh
items.forEach(item => (item.lower = item.innerHTML.toLowerCase()));
// Listen for any keys added
search.addEventListener("keydown", e => {
    // Wait for the value to update; setImmediate
    setTimeout(() => {
        // The value of the searchbar
        const value = e.target.value.toLowerCase();
        // Filter out all items
        for (const item of items) {
            // Whether to show it based on it containing the search text
            const style = item.lower.includes(value) ? "" : displayNone;

            item.style = style;
        }
        for (const category of categories) {
            const categoryItems = [...category.querySelectorAll(".entryList--item")];

            // Whether to display it or not
            if (categoryItems.every(x => x.style.display === "none")) category.style = displayNone;
            else category.style = "";
        }
    }, 1);
});
