AFRAME.registerComponent("weapon-bobbing", {
    init:function(){
        this.gunBob()
    },

    gunBob:function(){
        var gun = document.getElementById("#shooter")
        window.addEventListener("keydown", (e) => {
    
            // Add the condition to play sound
            if (e.key === "w" || e.key === "a" || e.key === "s" || e.key === "d"){
              gun.setAttribute("animation", {property:"position", from: "0.1 -0.1 -0.16", to:"0.1 0 -0.16", dir:"alternate", loop:"true", dur:"400", easing:"linear"})
            }
    
          });
    }
})