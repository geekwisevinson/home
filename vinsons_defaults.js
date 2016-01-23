home_folder = "http://geekwisevinson.github.io/home/";
auto_run=[
    "alert('hi')",
    "alert('thanks')"
];


function click_handler(e) {
    e.preventDefault();
    e = e || window.event;
    var left= 0,
        right=0;

    if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        right= e.which == 3;
    else if ("button" in e)  // IE, Opera
        right = e.button == 2;


    if ("which" in e)  // Gecko (Firefox), WebKit (Safari/Chrome) & Opera
        left= e.which == 2;
    else if ("button" in e)  // IE, Opera
        left = e.button == 1;

    if (right == 1){
        alert('right');
    }
    if (left == 1){
        alert('left');
    }
    console.log(right);
    console.log(left);

}

