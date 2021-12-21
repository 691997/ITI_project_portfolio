
$("#so").html( `
                <div>
                <video autoplay loop muted class="home" >
                    <source src="images/video_1.mp4" type="video/mp4" id="bg_video" width="100%" height="100%">
                </video>
                <span class="effect" ></span>
                </div>

                <navbar class="main_icon" >
                
                <i class="fas fa-bars" id="mopil_icon"></i>
                <ul class='pc_style'>
                    <li class="click"><a href="project_2.html"><i class="fal fa-home"></i> Home</a></li>      
                    <li><a href="about.html"><i class="far fa-address-card"></i> About</a></li>     
                    <li><a href="servicess.html"><i class="fas fa-user-tie"></i> Services</a></li>   
                    <li><a href="resume.html"><i class="fas fa-file-invoice"></i> Resume</a></li>      
                    <li><a href="contact.html"><i class="far fa-handshake-alt"></i> Contact</a></li> 
                </ul>

                <div class="color">
                    <input type="color" id="color">
                    <span>welcome in my portfolio .. you can choose background-color in section of Service and About.</span>
                </div>
                
                <div class="nav_back" ></div>

                    <ul id="mopil_style">
                        <li><a href="project_2.html"> Home </a></li>      
                        <li><a href="about.html"> About </a></li>     
                        <li><a href="servicess.html"> Services </a></li>   
                        <li><a href="resume.html"> Resume </a></li>      
                        <li><a href="contact.html"> Contact </a></li> 
                    </ul>
                </navbar> `) 

$("#mopil_icon").click(function (){
    $("#mopil_style").toggle()
})

let color = document.getElementById("color") ;

color.oninput = (()=> {
    localStorage.setItem ("color" , `linear-gradient(to top, ${color.value}, #ffffff , transparent`)
    $(".card_2").css("background-image" , localStorage.getItem("color"))
})

window.onload = ( ()=> {
    $(".card_2").css("background-image" , localStorage.getItem("color"))

    if (document.title === "Ahmed Magdy") {
        setTimeout( function() {
        $(".color span").css('opacity' , '1')},3000);

        setTimeout( function() {
        $(".color span").css('opacity' , '0')},12000);
}})


