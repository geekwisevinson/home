home_folder = "http://geekwisevinson.github.io/home/";
auto_run=[
    "alert('hi')",
    "alert('thanks')"
];

var left, right;
left = mie ? 1 : 0;
right = 2;

function click_handler(e) {
    var isRightMB;
    e = e || window.event;

    if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        chr_moz_right= e.which == 3;
    else if ("button" in e)  // IE, Opera
        ie_right = e.button == 2;

    if (chr_moz_right==true|| ie_right==true){
        alert("right")
    }

    alert("Right mouse button " + (isRightMB ? "" : " was not") + "clicked!");
};

