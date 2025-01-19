let revealBtn = document.querySelectorAll(".reveal-btn");

revealBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(btn)
        if(btn.id == "one-btn") {
            document.getElementById("one-brief").classList.toggle("reveal");
            document.getElementById("one-details").classList.toggle("reveal");
        } else if (btn.id == "fifteenA-btn") {
            document.getElementById("fifteenA-brief").classList.toggle("reveal");
            document.getElementById("fifteenA-details").classList.toggle("reveal");
        }
    })
});