// Array di oggetti
const icons = [
	{
		name: "cat",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "crow",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "dog",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "dove",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "dragon",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "horse",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "hippo",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "fish",
		prefix: "fa-",
		type: "animal",
		family: "fas",
	},
	{
		name: "carrot",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
	},
	{
		name: "apple-alt",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
	},
	{
		name: "lemon",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
	},
	{
		name: "pepper-hot",
		prefix: "fa-",
		type: "vegetable",
		family: "fas",
	},
	{
		name: "user-astronaut",
		prefix: "fa-",
		type: "user",
		family: "fas",
	},
	{
		name: "user-graduate",
		prefix: "fa-",
		type: "user",
		family: "fas",
	},
	{
		name: "user-ninja",
		prefix: "fa-",
		type: "user",
		family: "fas",
	},
	{
		name: "user-secret",
		prefix: "fa-",
		type: "user",
		family: "fas",
	},
];

// ciclo forEach
icons.forEach((element, index, array) => {
	let icon = `
			<div class="col
					d-flex
					flex-column
					justify-content-center
					align-items-center
					bg-light
					rounded-3
					text-center
					shadow
					small">
				<i class="${element.family} ${element.prefix}${element.name}"></i>
				<h6 class="text-uppercase fs-6 mt-1">${element.name}</h6>
			</div> 
	`;
});

console.log(icon);
let result = document.querySelector(".row");
result.innerHTML += icon;

/* MILESTONE 2 */
generateCardIcons(icons);
const types = getTypes(icons);
console.log(types);

generateSelectOptionElements(types);
/* MILESTONE 2 */

/* MILESTONE 3 */
document.getElementById("level").addEventListener("change", change_label);
generateIcons(icons);
function change_label() {
	document.querySelector(".col").innerHTML = "";
	if (this.value === "all") {
		generateIcons(icons);
	}
	filterIcons = icons.filter((icon) => icon.type === this.value);
	generateIcons(filterIcons);
}
generateColElement(icon)
function generateColElement(iconArray){

}
/* MILESTONE 3 */

// colori
/* let colorIcons = "";
	let animalColor = `${icons.type.animalColor}`;
	let vegetableColor = `${icons.type.vegetableColor}`;
	let userColor = `${icons.type.userColor}`;

	if (icons.type == "animal") {
		colorIcons == animalColor;
	} else if (icons.type == "vegetable") {
		colorIcons == vegetableColor;
	} else if (icons.type == "user") {
		colorIcons == userColor;
	} */
