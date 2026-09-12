

const prefersReducedMotion =
window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const hasFinePointer =
window.matchMedia("(hover: hover) and (pointer: fine)").matches;


//    HERO 3D SCENE


function initHeroScene(){

    const canvas =
    document.getElementById("hero-canvas");

    if(!canvas || typeof THREE === "undefined"){
        return;
    }

    const section =
    canvas.closest("#home") || canvas.parentElement;

    let width = section.clientWidth;
    let height = section.clientHeight;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        45,
        width / height,
        0.1,
        100
    );
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({
        canvas:canvas,
        alpha:true,
        antialias:true
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    const blueLight = new THREE.PointLight(0x0d6efd, 6, 25);
    blueLight.position.set(-5, 3, 4);
    scene.add(blueLight);

    const violetLight = new THREE.PointLight(0x7c3aed, 6, 25);
    violetLight.position.set(5, -2, 4);
    scene.add(violetLight);

    const cyanLight = new THREE.PointLight(0x22d3ee, 4, 20);
    cyanLight.position.set(0, 4, -3);
    scene.add(cyanLight);

  

    const group = new THREE.Group();
    scene.add(group);

    const isMobile = width < 992;
    group.position.x = isMobile ? 0 : 2.6;

    

    const icoGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
        color:0x0d6efd,
        wireframe:true,
        emissive:0x0d6efd,
        emissiveIntensity:0.4,
        transparent:true,
        opacity:0.55
    });
    const ico = new THREE.Mesh(icoGeometry, icoMaterial);
    group.add(ico);

    

    const knotGeometry = new THREE.TorusKnotGeometry(0.85, 0.26, 140, 20);
    const knotMaterial = new THREE.MeshStandardMaterial({
        color:0x7c3aed,
        metalness:0.55,
        roughness:0.25,
        emissive:0x3b0f8f,
        emissiveIntensity:0.35
    });
    const knot = new THREE.Mesh(knotGeometry, knotMaterial);
    group.add(knot);

   

    const particleCount = isMobile ? 60 : 140;
    const positions = new Float32Array(particleCount * 3);

    for(let i = 0; i < particleCount; i++){
        positions[i * 3] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
        color:0x22d3ee,
        size:0.045,
        transparent:true,
        opacity:0.6
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    //    POINTER PARALLAX

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    if(hasFinePointer){

        section.addEventListener("mousemove", (e) => {

            const rect = section.getBoundingClientRect();

            const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;

            targetRotY = nx * 0.35;
            targetRotX = ny * 0.2;

        });

    }

    //    RESIZE

    window.addEventListener("resize", () => {

        width = section.clientWidth;
        height = section.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);

        group.position.x = width < 992 ? 0 : 2.6;

    });

    //    ANIMATE

    const clock = new THREE.Clock();

    function renderStaticFrame(){
        ico.rotation.set(0.4, 0.6, 0);
        knot.rotation.set(0.3, 0.4, 0);
        renderer.render(scene, camera);
    }

    if(prefersReducedMotion){
        renderStaticFrame();
        return;
    }

    function animate(){

        requestAnimationFrame(animate);

        const t = clock.getElapsedTime();

        ico.rotation.x = t * 0.18;
        ico.rotation.y = t * 0.26;

        knot.rotation.x = t * 0.3;
        knot.rotation.y = t * 0.22;

        particles.rotation.y = t * 0.03;

        currentRotX += (targetRotX - currentRotX) * 0.05;
        currentRotY += (targetRotY - currentRotY) * 0.05;

        group.rotation.x = currentRotX;
        group.rotation.y = currentRotY;

        renderer.render(scene, camera);

    }

    animate();

}


//    3D TILT + GLOW ON EXISTING CARDS


function initCardTilt(){

    if(!hasFinePointer || prefersReducedMotion){
        return;
    }

    const cards = document.querySelectorAll(
        ".skill-card, .project-card"
    );

    cards.forEach((card) => {

        card.classList.add("tilt-ready");

        const maxTilt = card.classList.contains("project-card") ? 8 : 10;

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const px = (e.clientX - rect.left) / rect.width;
            const py = (e.clientY - rect.top) / rect.height;

            const rotY = (px - 0.5) * maxTilt * 2;
            const rotX = (0.5 - py) * maxTilt * 2;

            card.style.transform =
                `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;

            card.style.setProperty("--mx", `${px * 100}%`);
            card.style.setProperty("--my", `${py * 100}%`);

        });

        card.addEventListener("mouseleave", () => {
            card.style.transform =
                "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
        });

    });

}


//    INIT


initHeroScene();
initCardTilt();
