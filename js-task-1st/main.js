window.onload = function formBlock() {
    let form = document.getElementById("formForCheck");

    form.addEventListener("change", event => {
        outer: for (let input of document.querySelectorAll(
                'form input:not([type = "submit"])'
            )) {
            if (!input.checkValidity()) {
                document
                    .getElementById("submitBtn")
                    .setAttribute("disabled", "disabled");
                break outer;
            }

            document.getElementById("submitBtn").removeAttribute("disabled");
        }
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        document
            .querySelectorAll("form input")
            .forEach(element => element.setAttribute("hidden", "hidden"));

        document.getElementById("formForCheck").innerHTML =
            "<div class='sign-in-form-title'><img src='logo.png' class='img-logo'/></div>" +
            "<h2> Welcome dear " +
            document.getElementById("username").value +
            "</h2>";
    });
};