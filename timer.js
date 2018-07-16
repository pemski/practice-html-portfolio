function odliczanie()
{
    var dzisiaj = new Date();
    var godzina = String("0" + dzisiaj.getHours()).slice(-2);
    var minuta = String("0" + dzisiaj.getMinutes()).slice(-2);
    var sekunda = String("0" + dzisiaj.getSeconds()).slice(-2);

    document.getElementById("zegar").innerHTML = godzina + ":" + minuta + ":" + sekunda;

    setTimeout("odliczanie()", 1000);
}

