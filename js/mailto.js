document.getElementById('submit').onclick = function() {
    var radios = document.getElementsByName('radio  ');
    for (var radio of radios)
    {
        if (radio.checked) {
            alert(radio.value);
        }
    }
}