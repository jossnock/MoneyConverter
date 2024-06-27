function convertAndReplace(id) {
    var money;
    money = parseFloat(document.getElementById(id).value);

    if (id == "GBPs") {
        money *= 1.18;
        document.getElementById("EURs").value = money.toFixed(2);
    }

    else if (id == "EURs") {
        money /= 1.18;
        document.getElementById("GBPs").value = money.toFixed(2);
    }
}
