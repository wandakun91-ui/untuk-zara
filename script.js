function tampilkanCinta() {
    const pesan = document.getElementById("pesan-cinta");
    const btn = document.getElementById("btn-kejutan");
    const musik = document.getElementById("musik-latar");

    pesan.innerHTML = "Abang sayang Zara selamanya! 💖";
    pesan.classList.remove("hidden");
    btn.style.display = "none";
    musik.play();
}