AFRAME.registerComponent("jump",{
    init:function(){
        this.jump()
    },
    jump:function(){
        character = document.querySelector("#camera")
        isJumping = false
        charPos = character.getAttribute("position")
        //0 1.6 0
        jumpSound = document.querySelector("#sound7")
        landSound = document.querySelector("#sound8")
        window.addEventListener("keydown", (e)=>{
            if (e.key == " " ||e.code == "Space"){
                if (isJumping === false && charPos.y===1.6){
                    charPos = character.getAttribute("position")
                    jumpSound.components.sound.playSound()
                    character.setAttribute("animation", { property: "position", dur: 200, easing: "easeInOutQuad", from: charPos, to: `${charPos.x} 3 ${charPos.z}` })
                    charPos = character.getAttribute("position")
                    setTimeout(()=>{
                        landSound.components.sound.playSound()
                        character.setAttribute("animation", { property: "position", dur: 200, easing: "easeInOutQuad", from:`${charPos.x} 3 ${charPos.z}`, to: `${charPos.x} 1.6 ${charPos.z}` })
                    },200)
                }
            }
        })
    }
})