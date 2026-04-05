function updateBin() {
    let level = Math.floor(Math.random() * 101);

    document.getElementById("level").innerText = "Fill Level: " + level + "%";
    document.getElementById("fill").style.width = level + "%";

    let alertMsg = document.getElementById("alert");

    if (level > 80) {
        alertMsg.innerText = "⚠️ Bin Full! Please collect waste.";
        alertMsg.style.color = "red";
    } else if (level > 50) {
        alertMsg.innerText = "Bin half full.";
        alertMsg.style.color = "orange";
    } else {
        alertMsg.innerText = "Bin is empty.";
        alertMsg.style.color = "green";
    }
}
