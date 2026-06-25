// all buttons
const buttons = document.querySelectorAll(".tab-btn");

// all content sections
const contents = document.querySelectorAll(".tab-content");


// loop through each button
buttons.forEach(button => {

    // add click event listener to each button
    button.addEventListener("click", () => {

        // hide all buttons (remove active class)
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        // hide all content sections (remove active class)
        contents.forEach(content => {
            content.classList.remove("active");
        });

        // activate the clicked button
        button.classList.add("active");

        // read the data-tab attribute of the clicked button
        const selectedTab = button.dataset.tab;

        // find the content section that matches the selected tab
        const currentContent =
            document.getElementById(selectedTab);

        // show the content section (add active class)
        currentContent.classList.add("active");
    });
});