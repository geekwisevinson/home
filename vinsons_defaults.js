home_folder = "http://geekwisevinson.github.io/home/";
auto_run=[
    "alert('hi')",
    "alert('thanks')"
];

function bgpic(){
    rn= Math.floor(Math.random()*52);
    document.body.style.backgroundImage="url(/home/img/pic0"+rn+".jpg)";
    document.body.style.backgroundSize= 'cover';
}
