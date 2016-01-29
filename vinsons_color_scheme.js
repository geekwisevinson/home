initial=0;
cs_path=['garden','ariana','jlaw','school','shire'];
function hsl(ai){
    return 'hsl('+cs[ai][0]+","+cs[ai][1]+"%,"+cs[ai][2]+"%)";
}
function customs (){
    if (initial==0){
        initial =1;
    }else{
        cs_name=color_schemer.value;
    }
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
            custom[i].style.backgroundColor=cs[5];
            custom[i].style.color=cs[2];
        }
    cs_convert();
    color_schemer.selectedIndex = cs_path.indexOf(cs_name);
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
        load_scheme('/home/vinsons_txt_schemes/'+color_schemer.value+'.txt')
    })
}
function color_down(){
    if(color_schemer.length-1==color_schemer.selectedIndex){
        color_schemer.selectedIndex=0;
    }else{
        color_schemer.selectedIndex+=1;
    }
    load_scheme('/home/vinsons_txt_schemes/'+color_schemer.value+'.txt')
}

function reverse_scheme(){
    temp_array=[];
    for (var i=cs.length-1;i>-1;i--){
        temp_array.push(cs[i]);
    }
    cs=temp_array;
    customs();
}

function shadeColor2(color, percent) {
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

function blendColors(c0, c1, p) {
    var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
    return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
}

function lightener (index){
        cs[index] = shadeColor2(cs[index],.1);
        customs();
}
function darkener (index){
    cs[index] = shadeColor2(cs[index],-.1);
    customs();
}

function cs_convert(){
    color_text = document.getElementById('color_text');
   // if (color_dis==undefined){return false;}
    for (var i =0;i<cs.length;i++){
        color_dis[i].innerHTML = cs[i];
        color_text.innerHTML += cs[i]+ " "
    }

}

function function_color_display(){
    color_dis=document.getElementsByClassName('color_dis')[0].children;
    for (var i=0;i<color_dis.length;i++){
        color_dis[i].index=i;
        color_dis[i].addEventListener('contextmenu',function(event){
            event.preventDefault();return false;},false);
        color_dis[i].addEventListener('mousedown',function(event){
            event.preventDefault();
            switch (event.which) {
                case 1:
                    console.log('Left Mouse button pressed.');
                    lightener(this.index);
                    break;
                case 2:
                    console.log('Middle Mouse button pressed.');
                    break;
                case 3:
                    console.log('Right Mouse button pressed.');
                    darkener(this.index);
                    break;
                default:
                    console.log('You have a strange Mouse!');
            }
        },false);
    }
}