// Esperamos a que la librería cargue
tsParticles.load("ps4-background", {
    fpsLimit: 60,
    particles: {
        // --- 1. CONFIGURACIÓN DE LOS ICONOS ---
        number: {
            value: 15, // Cantidad de símbolos (no pongas demasiados para mantenerlo elegante)
            density: {
                enable: true,
                area: 800
            }
        },
        shape: {
            type: "image",
            options: {
                image: [
                    // Rutas relativas a donde esté el HTML
                    { src: "assets/PS_icons/PS_X_50x50.png", width: 50, height: 50 },
                    { src: "assets/PS_icons/PS_O_50x50.png", width: 50, height: 50 },
                    { src: "assets/PS_icons/PS_T_50x50.png", width: 50, height: 50 },
                    { src: "assets/PS_icons/PS_Q_50x50.png", width: 50, height: 50 }
                ]
            }
        },
        
        // --- 2. TAMAÑO ---
        size: {
            value: { min: 10, max: 30 }, // Tamaño variable
            animation: {
                enable: false
            }
        },

        // --- 3. OPACIDAD (EFECTO FADING) ---
        opacity: {
            value: { min: 0.1, max: 0.3 }, // Nunca totalmente opaco, siempre sutil
            animation: {
                enable: true,
                speed: 0.5, // Velocidad de parpadeo
                sync: false, // Cada uno a su ritmo
                mode: "auto"
            }
        },

        // --- 4. MOVIMIENTO ---
        move: {
            enable: true,
            speed: 1.5, // Velocidad de flotación
            direction: "none", // Dirección aleatoria
            random: false,
            straight: false,
            outModes: {
                default: "out" // Cuando salen, reaparecen por el otro lado
            },
            attract: {
                enable: false
            }
        },

        // --- 5. ROTACIÓN (OPCIONAL) ---
        rotate: {
            value: { min: 0, max: 360 },
            animation: {
                enable: true,
                speed: 3, // Giran despacito
                sync: false
            },
            direction: "random"
        }
    },
    detectRetina: true
});