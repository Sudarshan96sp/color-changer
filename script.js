document.addEventListener('DOMContentLoaded',function(){

    const redButton = document.querySelector(".red")
    const greenButton = document.querySelector(".green")
    const blueButton = document.querySelector(".blue")
    const yellowButton = document.querySelector(".yellow")
    const cyanButton = document.querySelector(".cyan")
    const magnetaButton = document.querySelector(".magneta")
    const blackButton = document.querySelector(".black")
    const whiteButton = document.querySelector(".white")
    const grayButton = document.querySelector(".gray")
    const orangeButton = document.querySelector(".orange")
    const purpleButton = document.querySelector(".purple")
    const pinkButton = document.querySelector(".pink")

    function colorChange(tag,color){
        tag.addEventListener("click",function(){
            document.body.style.backgroundColor = color
        })
    }
    
    colorChange(redButton,"red")
    colorChange(greenButton,"green")
    colorChange(blueButton,"blue")
    colorChange(yellowButton,"yellow")
    colorChange(cyanButton,"cyan")
    colorChange(magnetaButton,"#FF00FF")
    colorChange(blackButton,"black")
    colorChange(whiteButton,"white")
    colorChange(grayButton,"gray")
    colorChange(orangeButton,"orange")
    colorChange(purpleButton,"purple")
    colorChange(pinkButton,"pink")

})

