//testing form values
function report(){
    var choice1, choice2, choice3; 
    /*check each radio button option, if checked, store value of
    checked option in the connected variable*/
    var loc = document.getElementsByName('location');
    for(let i=0;i<loc.length;i++){
        if(loc[i].checked){
            choice1= loc[i].value;
        }
    }

    var age = document.getElementsByName('age');
    for(let i=0;i<age.length;i++){
        if(age[i].checked){
            choice2= age[i].value;
        }
    }

    var eat = document.getElementsByName('eating');
    for(let i=0;i<eat.length;i++){
        if(eat[i].checked){
            choice3= eat[i].value;
        }
    }
    //check if values went through with alert screen
    alert(choice1+"//"+choice2+"//"+choice3);
}
//end testing form values