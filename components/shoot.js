AFRAME.registerComponent("shootflick",{
    init:function(){
        this.shoot()
    },
    shoot:function(){
        window.addEventListener("click",()=>{
            var bullet = document.createElement("a-entity");
            bullet.setAttribute("id", "bullet")

            bullet.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.1,
            });

            bullet.setAttribute("material", "color", "black");

            var cam = document.querySelector("#camera");

            pos = cam.getAttribute("position");

            bullet.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z-0.08,
            });

            var camera = document.querySelector("#camera").object3D;

            //get the camera direction as Three.js Vector
            var direction = new THREE.Vector3();
            camera.getWorldDirection(direction);

            //set the velocity and it's direction
            bullet.setAttribute("velocity", direction.multiplyScalar(-20));

            var scene = document.querySelector("#scene");

            //set the bullet as the dynamic entity
            bullet.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "0",
            });

            //add the collide event listener to the bullet
            bullet.addEventListener("collide", this.removeBullet);

            scene.appendChild(bullet);

            /*bullet.addEventListener("collide",(e)=>{
                console.log(e.detail.body.id)
            })*/
        })  

    }
})