// MEGA W.I.P.
const hideChildrenClass = `hide-children`;

for (let list of document.querySelectorAll(".body-list-items.collapsed-items li ul")) {
    const { parentElement } = list;

    // Adds |>
    const arrow = Object.assign(document.createElement("i"), {
        classList: `collapse-arrow fas fa-carret-right`,
        onclick: () => {
            const containsHide = parentElement.classList.contains(hideChildrenClass);
            const action = containsHide ? "remove" : "add";
            parentElement.classList[action](hideChildrenClass);
        }
    });

    // Just so it gets added above the list
    parentElement.insertBefore(" ", list);
    parentElement.insertBefore(arrow, list);
}
