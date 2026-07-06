function searchProduct() {

    let search = document.getElementById("searchInput").value.trim().toLowerCase();

    if (search === "") {
        alert("Введіть назву товару.");
        return;
    }

    window.location.href = "catalog.html?search=" + encodeURIComponent(search);
}
window.onload = function () {

    const params = new URLSearchParams(window.location.search);

    const search = params.get("search");

    if (!search) return;

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const name = card.dataset.name;

        if (!name) return;

        if (!name.includes(search.toLowerCase())) {

            card.style.display = "none";

        }

    });

};
