let revealBtn = document.querySelectorAll(".reveal-btn");

revealBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn)
        if(btn.id == "one-btn") {
            document.getElementById("one-details").classList.toggle("hidden");
        } else if (btn.id == "fifteenA-btn") {
            document.getElementById("fifteenA-details").classList.toggle("hidden");
        }
    })
});