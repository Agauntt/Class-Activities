var str = "Spaced Words";

function wordFix(e) {
    str = e.trim().toLowerCase();
}

wordFix(str);

console.log(str);