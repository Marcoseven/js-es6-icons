// Array of objects
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

// forEach loop
icons.forEach((element, index, array) => {
	let icon = `
			<div class="card
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

	let result = document.querySelector(".row");
	result.innerHTML += icon;
});

document.getElementById("level").addEventListener("change", callback);

function callback() {
	console.log("Livello dell'icone è stato cambiato in", this.value);
	document.querySelector(".card").innerHTML = "";

	if (this.value === "all") {
		generateCardIcons(icons);
	}

	const filteredIcons = icons.filter((icon) => icon.type === this.value);
	console.log(filteredIcons);

	generateCardIcons(filteredIcons);
}

/**
 * Extract all icons type from the array
 * @param {array} list an array of objects
 * @returns {array}
 */
function getTypes(list) {
	const types = [];
	list.forEach((icon) => {
		if (!types.includes(icon.type)) {
			types.push(icon.type);
		}
	});
	return types;
}

/**
 * Geneates all cards icons
 * @param {Array} iconsArray Object's array
 */
function generateCardIcons(iconsArray) {
	const domEl = document.querySelector(".card");

	iconsArray.forEach((icon) => {
		const cardElement = generateCardElement(icon);
		domEl.insertAdjacentHTML("beforeend", cardElement);
	});
}

/**
 * Generates the icon's markup
 * @param {object} iconObj an object icon
 * @returns {string}
 */
function generateCardElement(iconObj) {
	return `
    <div class="card ${iconObj.type}">
    <i class="${iconObj.family} ${iconObj.prefix}${iconObj.name}"></i>
    <p>${iconObj.name}</p>
  </div>
  `;
}
