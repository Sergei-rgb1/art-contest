document.getElementById("art-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Получаем данные из формы
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;
    const artwork = document.getElementById("artwork").files[0];

    if (!artwork) {
        alert("Пожалуйста, загрузите файл!");
        return;
    }

    // Псевдо-добавление в галерею (локально)
    const gallery = document.getElementById("gallery-container");
    const img = document.createElement("img");
    img.src = URL.createObjectURL(artwork);
    img.alt = description || "Работа без описания";
    gallery.appendChild(img);

    alert("Спасибо за участие! Работа добавлена в галерею.");
    this.reset();
});
