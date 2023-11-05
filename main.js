 canvas=document.getElementById("myCanvas");
 ctx=canvas.getContext("2d");
 color="aqua";
 mouseevent="";
 last_x_position="";
 last_y_position="";
 
 window.addEventListener("mousedown",my_mousedown);
 function my_mousedown(e){
    mouseevent="mousedown";
 }

 window.addEventListener("mouseup",my_mouseup);
 function my_mouseup(e){
    mouseevent="mouseup";
 }
 
 window.addEventListener("mouseleave",my_mouseleave);
 function my_mouseleave(e){
    mouseevent="mouseleave";
 }

 window.addEventListener("mousemove",my_mousemove);
 function my_mousemove(e){
    current_x_position=e.clientX - canvas.offsetLeft;
    current_y_position=e.clientY - canvas.offsetTop;
    if(mouseevent =="mousedown"){
         ctx.beginPath();
         ctx.strokeStyle=color;
         ctx.lineWidth=2;
        ctx.arc(current_x_position,current_y_position,40,0,2*Math.PI)
         ctx.stroke();
    }
    last_x_position=current_x_position;
    last_y_position=current_y_position;
 }