color_schemes={
    "beautiful_girl":[[12,15,23],[12,20,33],[336,75,30],[335,60,46],[29,49,83],[27,26,93]]
};
packs=[[0,3],[1,4],[2,5],[3,0],[4,1],[5,2]];

function custums(custom,ai,o,ai2,o2,fs){
    //customs= the className, ai = array index, o= opacity, ai2=color of tex, o2=text opacity; fs=fontSize;
    customs= document.getElementsByClassName(custom);
    for (var i=0;i<customs.length;i++){
        customs[i].style.backgroundColor = hsla(ai,o);
        customs[i].style.color = hsla(ai2,o2);
        customs[i].style.fontSize=fs;
    }
}
function hsla(ai,o){
    // ai= array index // o = opacity;
    return 'hsla('+colors[ai][0]+","+colors[ai][1]+"%,"+colors[ai][2]+"%,"+o+")";
}

function pack_scheme (custom,pack_index){
    customs= document.getElementsByClassName(custom);
    ai=colors[pack_index[0]];
    ai2=colors[pack_index[1]];
    for (var i=0;i<customs.length;i++){
        customs[i].style.backgroundColor = hsla(ai,1);
        customs[i].style.color = hsla(ai2,1);
    }
}

function custom_set(){
    pack_scheme ("custom1",packs[0]);
    pack_scheme ("custom2",packs[1]);
    pack_scheme ("custom3",packs[2]);
    pack_scheme ("custom4",packs[3]);
    pack_scheme ("custom5",packs[4]);
    pack_scheme ("custom6",packs[5]);
}
