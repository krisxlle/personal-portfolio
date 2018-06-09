$(document).ready(function(){

var container=document.getElementByID("card-container");
    var newGrid=document.createElement("div");
        newGrid.classname = "row card-group justify-content-md-center";
        newGrid.style = "height: 75%";
    for (i=0; i<projects.length, i++){
        var newColumn=document.createElement("div");
            newColumn.className = "col-lg-3 col-md-6 card-deck";
            var newCard=document.createElement("div");
                 newCard.className = "card";
                 var newImage=document.createElement("img");
                    newImage.className = "card-img";
                    newImage.src = projects[i].iconsrc;
                 newCard.appendChild(newImage);
            newColumn.appendChild(newCard);
        newGrid.appendChild(newColumn);
    };
    container.appendChild(newGrid);

$("#card-container").click(function(){
//add popup that shows other information
});

});