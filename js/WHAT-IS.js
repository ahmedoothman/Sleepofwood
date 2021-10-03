var x=1 ;
var y=1;
var z=1;
var o=1;
var n=1;
var q=1;
function hide() {
    if (x==1) {
        document.getElementById("conter").style.display = "none";
        x=x+1;
    } else if(x==2){
        document.getElementById("conter").style.display = "block";
        x=x-1;
    }   
};


function show() {
    if (y==1) {
        document.getElementById("conter1").style.display = "block";
        y=y+1;
    } else if (y==2){
        document.getElementById("conter1").style.display = "none";
        y=y-1;
        
    }
    
    
};

function show2() {
    if (z==1) {
        document.getElementById("conter111").style.display = "block";
        z=z+1
    } else if(z==2){
        document.getElementById("conter111").style.display = "none"; 
        z=z-1;
        
    }
};

function show3() {
    
    if (o==1) {
        document.getElementById("conter11").style.display = "block";
        o=o+1;
    } else if(o==2){
        document.getElementById("conter11").style.display = "none"; 
        o=o-1;
        
    }
};
function show4() {
    
    if (n==1) {
        document.getElementById("conter110").style.display = "block";
        n=n+1;
    } else if(n==2){
        document.getElementById("conter110").style.display = "none"; 
        n=n-1;
        
    }
};
function show5() {
    
    if (q==1) {
        document.getElementById("conter120").style.display = "block";
        q=q+1;
    } else if(q==2){
        document.getElementById("conter120").style.display = "none"; 
        q=q-1;
        
    }
};