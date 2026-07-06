function searchProduct() {

    let search = document.getElementById("searchInput").value.trim().toLowerCase();

    if (search === "") {
        alert("Введіть назву товару.");
        return;
    }

    window.location.href = "catalog.html?search=" + encodeURIComponent(search);
}
