// MEGA W.I.P.
const hideChildrenClass = `entryList--hide-sub-list`;

for (let list of document.querySelectorAll(".entryList--items-collapse li ul")) {
    const { parentElement } = list;

    // Adds |>
    const arrow = Object.assign(document.createElement("i"), {
        classList: `entryList--collapse-arrow fas fa-caret-right`,
        onclick: () => {
            const containsHide = parentElement.classList.contains(hideChildrenClass);
            const action = containsHide ? "remove" : "add";
            parentElement.classList[action](hideChildrenClass);
        }
    });

    parentElement.classList.add(hideChildrenClass);

    // Just so it gets added above the list
    parentElement.prepend(new Text(" "));
    parentElement.prepend(arrow);
}
