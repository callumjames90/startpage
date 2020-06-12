function updateClock() {

    var now = new Date();

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    var t = document.getElementById('clock-time');
    t.innerHTML = now.toLocaleTimeString();

    var d = document.getElementById('clock-date');
    d.innerHTML = now.toLocaleDateString("en-US", options);
}
