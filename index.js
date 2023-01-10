const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

const commands = {
	up: 'up',
	down: 'down',
	left: 'left',
	right: 'right',
}

let x = canvas.width / 2
let y = canvas.height / 2
let lastCommand = commands.up
const shipWidth = 50

document.addEventListener('keydown', event => {
	if (event.key === 'ArrowUp') {
		lastCommand = commands.up
	} else if (event.key === 'ArrowDown') {
		lastCommand = commands.down
	} else if (event.key === 'ArrowLeft') {
		lastCommand = commands.left
	} else if (event.key === 'ArrowRight') {
		lastCommand = commands.right
	}
})

main()

function main () {
	window.requestAnimationFrame(main)
	render()
}

function render () {
	context.clearRect(0, 0, canvas.width, canvas.height)
	context.fillStyle = "Black"
	context.fillRect(0, 0, canvas.width, canvas.height)

	let [newX, newY] = getCoordinates()

	context.fillStyle = "DarkSlateGray"
	// context.fillRect(newX, newY, 20, 20)
	context.beginPath()
	context.moveTo(newX, newY)
	context.lineTo(newX + 25, newY - 25)
	context.lineTo(newX + 50, newY)
	context.fill()

	context.fillStyle = "Azure"
	context.fillRect(newX + 10, newY - 3, 4, 8)
	context.fillRect(newX + 36, newY - 3, 4, 8)
}

// Make this determinsitic based on timestamp returned from requestAnimationFrame
function getCoordinates () {
	if (lastCommand === commands.up) {
		return [x, --y]
	} else if (lastCommand === commands.down) {
		return [x, ++y]
	} else if (lastCommand === commands.left) {
		return [--x, y]
	} else if (lastCommand === commands.right) {
		return [++x, y]
	}
}
