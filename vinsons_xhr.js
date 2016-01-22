function load_scheme(loc) {
    var xhttp;
    if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            xhr_response = xhttp.responseText;
            console.log(xhr_response);
            xhr_response=xhr_response.split('#');
            console.log(xhr_response);
            for (var i=0;i<xhr_response.length;i++){
                if (xhr_response[i].length!=6){
                    xhr_response[i].splice(i,1);
                    i--;
                }
            }
        }
    };
    xhttp.open("GET",loc, true);
    xhttp.send();
}

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                 allText = rawFile.responseText;
                console.log(allText)
            }
        }
    };
    rawFile.send(null);
}