

function matchHeightsDelay(){

    setTimeout(matchHeights("Box_Container_ID"), 10);
}
  

function matchHeights(Parent){

    let TallestDivHeight = 0,
        children = Array.prototype.slice.call(document.getElementById(Parent).children);
    
    children.forEach((element) => {
        element.style.height="auto";
    });
    children.forEach((element) => {

        if (element.offsetHeight > TallestDivHeight){
            TallestDivHeight = element.offsetHeight;
        }


    });

    for(let i = 0;i< document.getElementById(Parent).children.length;i++){
      children[i].style.height = TallestDivHeight+"px";
    };

  


}