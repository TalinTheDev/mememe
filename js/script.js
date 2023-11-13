var i = 0;
var txt = 'Talin Sharma';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("logoName").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById("logoName").innerHTML += "&thinsp;<span id='logoCursor'>&nbsp;</span>";
        document.getElementById("logoCursor").classList.add("on");

        setInterval(() => {
            let cursor = document.getElementById("logoCursor");
            cursor.classList.contains("on") ? cursor.classList.remove("on") : cursor.classList.add("on");
        }, 750)
    }
}

typeWriter();