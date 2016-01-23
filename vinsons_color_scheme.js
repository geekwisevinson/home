cs_path=['garden','ariana','jlaw','school','shire'];
function hsl(ai){
    return 'hsl('+cs[ai][0]+","+cs[ai][1]+"%,"+cs[ai][2]+"%)";
}
function customs (){
        custom=document.getElementsByClassName('custom0');
        for (var i=0;i<custom.length;i++){
            custom[i].style.backgroundColor=cs[0];
            custom[i].style.color=cs[3];
        }
        custom=document.getElementsByClassName('custom1');
        for (var i=0;i<custom.length;i++){
            custom[i].style.backgroundColor=cs[1];
            custom[i].style.color=cs[4];
        }
        custom=document.getElementsByClassName('custom2');
        for (var i=0;i<custom.length;i++){
            custom[i].style.backgroundColor=cs[2];
            custom[i].style.color=cs[5];
        }
        custom=document.getElementsByClassName('custom3');
        for (var i=0;i<custom.length;i++){
            custom[i].style.backgroundColor=cs[3];
            custom[i].style.color=cs[0];
        }
        custom=document.getElementsByClassName('custom4');
        for (var i=0;i<custom.length;i++){
            custom[i].style.backgroundColor=cs[4];
            custom[i].style.color=cs[1];
        }
        custom=document.getElementsByClassName('custom5');
        for (var i=0;i<custom.length;i++){
            custom[i].style.color=cs[5];
            custom[i].style.color=cs[2];
        }
}
function populate_schemes(){
    color_schemer = document.getElementById('color_schemer');
    for (var i=0;i<cs_path.length;i++){
        cs_option =document.createElement('option');
        cs_option.value = cs_path[i];
        cs_option.innerHTML=cs_path[i];
        color_schemer.appendChild(cs_option)
    }
    color_schemer.addEventListener('change',function(){
        load_scheme('../../../vinsons_txt_schemes/'+color_schemer.value+'.txt')
    })
}
function color_down(){
    if(color_schemer.length-1==color_schemer.selectedIndex){
        color_schemer.selectedIndex=0;
    }else{
        color_schemer.selectedIndex+=1;
    }
    load_scheme('../../../vinsons_txt_schemes/'+color_schemer.value+'.txt')
}
