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
            xhr_response=xhr_response.split(' ');
            for (var i=0;i<xhr_response.length;i++){

                xhr_response[i]=xhr_response[i].substring(0,7);
                if (xhr_response[i][0]!='#'){
                    xhr_response.splice(i,1);
                    i--
                }
            }
            cs = xhr_response;
            customs();
        }
    };
    xhttp.open("GET",loc, true);
    xhttp.send();
}


function load_contents(loc) {
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
            content_dis.innerHTML=xhr_response;
            customs();
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