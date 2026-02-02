

document.getElementById("addBtn").addEventListener("click", () => {
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);

    document.getElementById("result").textContent = a + b;
});
