 function toggleCollapsible() {
				const content = document.querySelector('.collapsible-content');
		const arrowDown = document.querySelector('.arrow-down');
		const arrowUp = document.querySelector('.arrow-up');

		content.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
		arrowDown.style.display = (content.style.display === 'none' || content.style.display === '') ? 'block' : 'none';
		arrowUp.style.display = (content.style.display === 'none' || content.style.display === '') ? 'none' : 'block';
}

//function toggleOption() {
//	const opt = document.querySelector('.opt');
//	const active = document.querySelector('.active');

//	// Toggle the display property of 'opt' and 'active'
//	opt.style.display = (opt.style.display === 'none' || opt.style.display === '') ? 'none' : '';
//	active.style.display = (active.style.display === 'none' || active.style.display === '') ? 'flex' : 'none';
//}


document.addEventListener("DOMContentLoaded", function() {
  var allActives = document.querySelectorAll(".active");
  allActives.forEach(function(active) {
	active.style.display = "none";
  });

  var opts = document.querySelectorAll(".opt");

  opts.forEach(function(opt) {
	var container = opt.parentElement;
	var active = container.querySelector(".active");

	opt.addEventListener("click", function() {
	  // Hide all active divs
	  allActives.forEach(function(active) {
		active.style.display = "none";
	  });

	  // Show the active div of the clicked container
	  active.style.display = "flex";

	  // Show the clicked opt div and hide all other opt divs
	  opts.forEach(function(otherOpt) {
	    otherOpt.style.display = (otherOpt === opt) ? "none" : "flex";
      });
    });
  });
});


//==handle popup
document.addEventListener("DOMContentLoaded", function () {
	const showPopupButton = document.getElementById("showPopup");
	const popup = document.getElementById("popup");

	showPopupButton.addEventListener("click", function (event) {
		// Show the popup
		popup.classList.remove("hidden");

		event.stopPropagation();

		// Add a click event listener to the document to close the popup when clicking outside of it
		document.addEventListener("click", closePopupOutside);
	});

	function closePopupOutside(event) {
		// Check if the clicked element is not inside the popup
		if (!popup.contains(event.target) && event.target !== showPopupButton) {
			// Hide the popup
			popup.classList.add("hidden");

			// Remove the click event listener from the document
			document.removeEventListener("click", closePopupOutside);
		}
	}
});


//==handle popup2
document.addEventListener("DOMContentLoaded", function () {
	const showPopup2Button = document.getElementById("showPopup2");
	const popup2 = document.getElementById("popup2");

	showPopup2Button.addEventListener("click", function (event) {
		// Show the popup
		popup2.classList.remove("hidden");

		event.stopPropagation();

		// Add a click event listener to the document to close the popup when clicking outside of it
		document.addEventListener("click", closePopupOutside);
	});

	function closePopupOutside(event) {
		// Check if the clicked element is not inside the popup
		if (!popup2.contains(event.target) && event.target !== showPopup2Button) {
			// Hide the popup
			popup2.classList.add("hidden");

			// Remove the click event listener from the document
			document.removeEventListener("click", closePopupOutside);
		}
	}
});


//close content pop
document.addEventListener("DOMContentLoaded", function () {
	const closePopButton = document.getElementById("closePop");
	const pop = document.getElementById("Pop");

	closePopButton.addEventListener("click", function (event) {
		// Prevent the default behavior of the link
		event.preventDefault();

		// Hide the pop element
		pop.classList.add("hidden");
	});
});

//==progress bar
function toggleCheck(element) {
    element.classList.toggle('checked');

    // Check if the parent container is "opt" or "active"
    const parentContainer = element.closest('.option');
    const isOpt = parentContainer.classList.contains('opt');

    // Find the corresponding element in the other container
    const otherContainer = isOpt ? parentContainer.nextElementSibling : parentContainer.previousElementSibling;
    const otherDottedCircle = otherContainer.querySelector('.dotted-circle');

    // Toggle the check-mark class for the corresponding element in the other container
    otherDottedCircle.classList.toggle('checked');

    updateProgressBar();
}

function updateProgressBar() {
    const checkedCircles = document.querySelectorAll('.dotted-circle.checked');
    const progressBar = document.querySelector('progress');
    const checkNo = document.getElementById('checks');

    progressBar.value = checkedCircles.length/2;
    checkNo.innerText = progressBar.value.toString();
}
