document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("celebration").classList.remove("hidden");
    document.getElementById("sadMessage").classList.add("hidden");
});

document.getElementById("no").addEventListener("click", function() {
    document.getElementById("sadMessage").classList.remove("hidden");
    document.getElementById("celebration").classList.add("hidden");
});