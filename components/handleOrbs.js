AFRAME.registerComponent("handle-orbs", {
    init: function () {
        this.main()
    },

    main:function(){
        var hit = 0
        var xvalue = Math.floor(Math.random() * 7)
        var yvalue = Math.floor(Math.random() * 3)

        var box2 = document.createElement("a-sphere")
        box2.setAttribute("position", { x: xvalue - 3, y: yvalue + 1, z: -5.6 })
        box2.setAttribute("geometry", { radius: 0.3 })
        box2.setAttribute("id", "box")
        box2.setAttribute("color", "black")
        box2.setAttribute("class", "other")
        box2.setAttribute("dynamic-body", {mass:0})

        var sceneEl = document.querySelector("#scene")
        sceneEl.appendChild(box2)

        box2.addEventListener("collide", (e)=>{
            hit = 1
        })

        while(true){
        if(hit === 1){
            var hit = 0
            var xvalue = Math.floor(Math.random() * 7)
            var yvalue = Math.floor(Math.random() * 3)
    
            var box2 = document.createElement("a-sphere")
            box2.setAttribute("position", { x: xvalue - 3, y: yvalue + 1, z: -5.6 })
            box2.setAttribute("geometry", { radius: 0.3 })
            box2.setAttribute("id", "box")
            box2.setAttribute("color", "black")
            box2.setAttribute("class", "other")
            box2.setAttribute("dynamic-body", {mass:0})
    
            var sceneEl = document.querySelector("#scene")
            sceneEl.appendChild(box2)
    
            box2.addEventListener("collide", (e)=>{
                hit = 1
            })
        }
    }
    }
})