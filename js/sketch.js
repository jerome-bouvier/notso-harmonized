let t = 0
let vitesse = 180
let a = 0
let phase = 0

let w = 3


function setup() {
  createCanvas(900, 900)

}

function draw() {
  t = millis() / 1000.0
  a = vitesse * t

  let h = mouseX / 10
  background(255)
  stroke(0)
  fill(0)
  phase = 0
  for (let y = 50; y < height - 20; y += 40) {
    for (let x = 50; x < width - 50; x += 5) {
      rect(x, y, w, h * sin(radians(a + phase)))
      phase = phase + 2
    }
  }
}

function keyPressed() {

  if (key == "s") {
    save("screenshot.png")
  }
}
