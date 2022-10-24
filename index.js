var continents = document.getElementsByClassName("cont");

var cont_content = "<p id='africa'>Continent of the world website is an informational website that teaches users about all of the 7 continents. Users can explore the 7 continents by looking at each continent separately or viewing all continents.";

var zoo_content = "<p id='zoo'>Green Sturgmar Zoo is an animal oasis that specializes in exotic species. These species come from biomes all over the world and are some of the Earth's rarest. There is something for everyone at Green Sturgmar Zoo.";

var sc_content = "<p id='strength'>Neubauer Strength and Conditioning is crossfit gym specializing in a variety of functional fitness classes. This business offers crossfit classes, olympic lifting classes and regular gymnastics classes to meet their clients many needs.";


for (let i = 0; i < continents.length; i++){
    continents[i].addEventListener("click", function(){
        document.getElementById("strength").innerHTML = sc_content;
        document.getElementById("africa").innerHTML = cont_content;
        document.getElementById("exotic").innerHTML = zoo_content;
        document.getElementById("strength").classList.add('continent-transform');
        document.getElementById("africa").classList.add('continent-transform');
        document.getElementById("exotic").classList.add('continent-transform');
    });
}

document.getElementById("strength-img").addEventListener('mouseover', function() {
    document.getElementById("strength-img").src = "images/neubauer2.png"
});

document.getElementById("strength-img").addEventListener('mouseout', function() {
    document.getElementById("strength-img").src = "images/neubauer.png"
});

document.getElementById("cont-gal").addEventListener('mouseover', function() {
    document.getElementById("cont-gal").src = "images/continents2.png"
});

document.getElementById("cont-gal").addEventListener('mouseout', function() {
    document.getElementById("cont-gal").src = "images/continents.png"
});


document.getElementById("zoo-gal").addEventListener('mouseover', function() {
    document.getElementById("zoo-gal").src = "images/zoo2.png"
});

document.getElementById("zoo-gal").addEventListener('mouseout', function() {
    document.getElementById("zoo-gal").src = "images/sturgmar.png"
});




const newButton = document.createElement("button");
    newButton.setAttribute("type", "button");
    newButton.innerText= "Click me to see a cute baby";
    newButton.classList.add("home-page-button");
    newButton.setAttribute("id", "quinn-button")


document.getElementById("family").addEventListener('mouseover', function(){
    document.getElementById("family").src="images/family.jpg";
    document.getElementById("about-title").appendChild(newButton);
    document.getElementById("quinn-button").addEventListener('click', function(){
        document.getElementById("family").src="images/quinn.jpg";
    })
});



/*document.getElementById("about-title").addEventListener('click', function (e){    
    if (e.target && e.target.nodeName == "BUTTON"){
    document.getElementById("family").src="images/quinn.jpg";
    }
 });*/





