(function() {
    // --- 1. MINIMAL VECTOR CLASS (To replace Three.js Vector3) ---
    class Vec2 {
        constructor(x, y) { this.x = x || 0; this.y = y || 0; }
        add(v) { this.x += v.x; this.y += v.y; return this; }
        sub(v) { this.x -= v.x; this.y -= v.y; return this; }
        mult(n) { this.x *= n; this.y *= n; return this; }
        div(n) { if(n!==0){this.x /= n; this.y /= n;} return this; }
        mag() { return Math.sqrt(this.x*this.x + this.y*this.y); }
        normalize() { let m = this.mag(); if(m>0) this.div(m); return this; }
        dist(v) { let dx = this.x - v.x; let dy = this.y - v.y; return Math.sqrt(dx*dx + dy*dy); }
        limit(max) { if(this.mag() > max) { this.normalize(); this.mult(max); } return this; }
        clone() { return new Vec2(this.x, this.y); }
    }

    // --- 2. CONFIGURATION ---
    const WIDTH = 60;   // Console columns
    const HEIGHT = 20;  // Console rows
    const COUNT = 30;   // Number of birds
    const SPEED = 0.8;
    const VIEW_RAD = 8; 

    // --- 3. THE BOID LOGIC (Same as 3D version, flattened to 2D) ---
    class Boid {
        constructor() {
            this.pos = new Vec2(Math.random() * WIDTH, Math.random() * HEIGHT);
            this.vel = new Vec2(Math.random() - 0.5, Math.random() - 0.5).normalize().mult(SPEED);
            this.acc = new Vec2(0, 0);
        }

        edges() {
            // Wrap around screen (Pacman style) for console readability
            if (this.pos.x > WIDTH) this.pos.x = 0;
            if (this.pos.x < 0) this.pos.x = WIDTH;
            if (this.pos.y > HEIGHT) this.pos.y = 0;
            if (this.pos.y < 0) this.pos.y = HEIGHT;
        }

        flock(boids) {
            let align = new Vec2(0,0);
            let cohesion = new Vec2(0,0);
            let separation = new Vec2(0,0);
            let total = 0;

            for (let other of boids) {
                if (other === this) continue;
                let d = this.pos.dist(other.pos);
                if (d < VIEW_RAD) {
                    align.add(other.vel);
                    cohesion.add(other.pos);
                    
                    let diff = this.pos.clone().sub(other.pos);
                    diff.div(d * d); // Weight by distance
                    separation.add(diff);
                    total++;
                }
            }

            if (total > 0) {
                align.div(total).normalize().mult(SPEED).sub(this.vel).limit(0.1); // Max force
                cohesion.div(total).sub(this.pos).normalize().mult(SPEED).sub(this.vel).limit(0.1);
                separation.div(total).normalize().mult(SPEED).sub(this.vel).limit(0.2); // Higher weight for separation
            }

            this.acc.add(align);
            this.acc.add(cohesion);
            this.acc.add(separation.mult(1.5));
        }

        update() {
            this.vel.add(this.acc);
            this.vel.limit(SPEED);
            this.pos.add(this.vel);
            this.acc.mult(0); // Reset accel
        }
    }

    // --- 4. RUN SIMULATION ---
    const boids = [];
    for(let i=0; i<COUNT; i++) boids.push(new Boid());

    console.log("%c STARTING CONSOLE FLOCK... ", "background: green; color: white; padding: 2px");
    
    // Animation Loop
    const interval = setInterval(() => {
        // 1. Logic Update
        for(let b of boids) {
            b.edges();
            b.flock(boids);
            b.update();
        }

        // 2. Rendering (Build the grid string)
        let frame = "";
        let grid = Array(HEIGHT).fill().map(() => Array(WIDTH).fill('·')); // '·' is empty sky

        // Place birds
        for(let b of boids) {
            let x = Math.floor(b.pos.x);
            let y = Math.floor(b.pos.y);
            // Safety clamp
            if(x >= 0 && x < WIDTH && y >= 0 && y < HEIGHT) {
                // Determine arrow direction based on velocity
                let char = '*';
                if (Math.abs(b.vel.x) > Math.abs(b.vel.y)) {
                    char = b.vel.x > 0 ? '→' : '←';
                } else {
                    char = b.vel.y > 0 ? '↓' : '↑';
                }
                grid[y][x] = char;
            }
        }

        // 3. Draw to Console
        // We use console.clear() to animate. 
        // Note: Some browser consoles flicker. This works best in Chrome.
        console.clear(); 
        console.log("%c[ ASCII BIRD FLOCK ]", "color: #00ff00; font-weight: bold;");
        console.log(grid.map(row => row.join('')).join('\n'));
        console.log("Run %cclearInterval(" + interval + ")%c to stop.", "background: #ddd; color: black", "color: inherit");

    }, 100); // 10 FPS for console readability

})();