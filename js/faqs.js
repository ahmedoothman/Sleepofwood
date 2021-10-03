//COMMON SLEEP-STUDY-SECTIONS //

function hide() {
        document.getElementById("box-2").style.display = "none";
        document.getElementById("box-1").style.display = "block";
        document.getElementById("box-3").style.display = "none";
        document.getElementById("btn-show-first").style.background = "rgb(51, 110, 148)";
        document.getElementById("btn-show-mid").style.background = "#555";
        document.getElementById("btn-show-last").style.background = "#555"; 
};
function show() {
        document.getElementById("box-2").style.display = "block";
        document.getElementById("box-1").style.display = "none";
        document.getElementById("box-3").style.display = "none";
        document.getElementById("btn-show-first").style.background = "#555";
        document.getElementById("btn-show-mid").style.background = "rgb(51, 110, 148)";
        document.getElementById("btn-show-last").style.background = "#555";
    
};
function show1() {
        document.getElementById("box-2").style.display = "none";
        document.getElementById("box-1").style.display = "none";
        document.getElementById("box-3").style.display = "block";
        document.getElementById("btn-show-first").style.background = "#555";
        document.getElementById("btn-show-mid").style.background = "#555";
        document.getElementById("btn-show-last").style.background = "rgb(51, 110, 148)";
};

//QUESTION-SECTION//

function showq1() {
        document.getElementById("q-1").style.display = "block";
        document.getElementById("q-2").style.display = "none";
        document.getElementById("q-3").style.display = "none";
        document.getElementById("q-4").style.display = "none";
};
function showq2() {

        document.getElementById("q-1").style.display = "none";
        document.getElementById("q-2").style.display = "block";
        document.getElementById("q-3").style.display = "none";
        document.getElementById("q-4").style.display = "none";

};
function showq3() {
        document.getElementById("q-1").style.display = "none";
        document.getElementById("q-2").style.display = "none";
        document.getElementById("q-3").style.display = "block";
        document.getElementById("q-4").style.display = "none";

    
};
function showq4() {
        document.getElementById("q-1").style.display = "none";
        document.getElementById("q-2").style.display = "none";
        document.getElementById("q-3").style.display = "none";
        document.getElementById("q-4").style.display = "block";
        
};
