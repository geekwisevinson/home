home_folder = "http://geekwisevinson.github.io/home/";
auto_run=[
    "alert('hi')",
    "alert('thanks')"
];


function click_handler(e) {
    e = e || window.event;
    if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        chr_moz_right= e.which == 3;
    else if ("button" in e)  // IE, Opera
        ie_right = e.button == 2;

    if (chr_moz_right==true | ie_right==true){
        alert("right")
    }

    if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        chr_moz_left= e.which == 2;
    else if ("button" in e)  // IE, Opera
        ie_left = e.button == 1;

    if (chr_moz_right==true | ie_right==true){
        alert("right")
    }

}

