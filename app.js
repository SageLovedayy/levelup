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

//expand option
document.addEventListener("DOMContentLoaded", function () {
    var allActives = document.querySelectorAll(".active");
    allActives.forEach(function (active) {
        active.style.display = "none";
    });

    var opts = document.querySelectorAll(".opt");

    opts.forEach(function (opt) {
        var container = opt.parentElement;
        var active = container.querySelector(".active");

        opt.addEventListener("click", function () {
            // Hide all active divs
            allActives.forEach(function (active) {
                active.style.display = "none";
            });

            // Show the active div of the clicked container
		active.style.display = "flex";
		active.focus();

            // Show the clicked opt div and hide all other opt divs
            opts.forEach(function (otherOpt) {
                otherOpt.style.display = (otherOpt === opt) ? "none" : "flex";
            });
        });

        // Handle Enter key press
        opt.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                // Hide all active divs
                allActives.forEach(function (active) {
                    active.style.display = "none";
                });

                // Show the active div of the clicked container
		    active.style.display = "flex";
		    active.focus();

                // Show the clicked opt div and hide all other opt divs
                opts.forEach(function (otherOpt) {
                    otherOpt.style.display = (otherOpt === opt) ? "none" : "flex";
                });
            }
        });
    });
});

//navigate options

document.addEventListener("DOMContentLoaded", function () {
    // Get all option elements
    var opts = document.querySelectorAll('.active');

    // Add a focus event listener to each option
    opts.forEach(function (opt, index) {
        opt.addEventListener('focus', function () {
            // Add a class to visually highlight the focused option
            opt.classList.add('focused');
        });

        opt.addEventListener('blur', function () {
            // Remove the class when the option loses focus
            opt.classList.remove('focused');
        });

        // Add a keydown event listener to handle arrow keys
        opt.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowDown') {
                // Check if it's the last element
                if (index === opts.length - 1) {
                    opts[0].focus(); // Focus on the first element
                } else {
                    opts[index + 1].focus();
                }
            } else if (event.key === 'ArrowUp' && index > 0) {
                opts[index - 1].focus();
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Get all option elements
    var opts = document.querySelectorAll('.opt');

    // Add a focus event listener to each option
    opts.forEach(function (opt, index) {
        opt.addEventListener('focus', function () {
            // Add a class to visually highlight the focused option
            opt.classList.add('focused');
        });

        opt.addEventListener('blur', function () {
            // Remove the class when the option loses focus
            opt.classList.remove('focused');
        });

        // Add a keydown event listener to handle arrow keys
        opt.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowDown') {
                // Check if it's the last element
                if (index === opts.length - 1) {
                    opts[0].focus(); // Focus on the first element
                } else {
                    opts[index + 1].focus();
                }
            } else if (event.key === 'ArrowUp' && index > 0) {
                opts[index - 1].focus();
            }
        });
    });
});

//==handle other nav
document.addEventListener("DOMContentLoaded", function () {
    // Get all option elements
    var opts = document.querySelectorAll('.keyNav');

    // Add a focus event listener to each option
    opts.forEach(function (opt, index) {
        opt.addEventListener('focus', function () {
            // Add a class to visually highlight the focused option
            opt.classList.add('focused');
        });

        opt.addEventListener('blur', function () {
            // Remove the class when the option loses focus
            opt.classList.remove('focused');
        });

        // Add a keydown event listener to handle arrow keys
        opt.addEventListener('keydown', function (event) {
            if (event.key === 'ArrowDown') {
                // Check if it's the last element
                if (index === opts.length - 1) {
                    opts[0].focus(); // Focus on the first element
                } else {
                    opts[index + 1].focus();
                }
            } else if (event.key === 'ArrowUp' && index > 0) {
		    opts[index - 1].focus();
		    event.preventDefault();
            }
        });
    });
});


//handle popups=============
document.addEventListener("DOMContentLoaded", function () {
    // Function to close a specific popup
    function closePopup(popup, event) {
        // Check if the clicked element is not inside the popup
        if (!popup.contains(event.target) && event.target !== showPopupButton) {
            // Hide the popup
            popup.classList.add("hidden");

            // Remove the click event listener from the document
            document.removeEventListener("click", closePopupOutside);
            // Remove the keydown event listener from the document
            document.removeEventListener("keydown", closePopupOnEscape);
        }
    }

    // Function to handle "Escape" key press
    function closePopupOnEscape(popup, event) {
        // Check if the pressed key is the "Escape" key (key code 27)
        if (event.key === "Escape") {
            // Hide the popup
            popup.classList.add("hidden");

            // Remove the click event listener from the document
            document.removeEventListener("click", closePopupOutside);
            // Remove the keydown event listener from the document
            document.removeEventListener("keydown", closePopupOnEscape);
        }
    }

    // Show and handle events for the first popup
    const showPopupButton = document.getElementById("showPopup");
    const popup = document.getElementById("popup");

    showPopupButton.addEventListener("click", function (event) {
        // Show the popup
        popup.classList.remove("hidden");

        event.stopPropagation();

        // Add a click event listener to the document to close the popup when clicking outside of it
        document.addEventListener("click", (event) => closePopup(popup, event));
        // Add a keydown event listener to the document to close the popup on the "Escape" key
        document.addEventListener("keydown", (event) => closePopupOnEscape(popup, event));
    });

    // Show and handle events for the second popup
    const showPopupBtn = document.getElementById("showPopup2");
    const popup2 = document.getElementById("popup2");

    showPopupBtn.addEventListener("click", function (event) {
        // Show the popup
        popup2.classList.remove("hidden");

        event.stopPropagation();

        // Add a click event listener to the document to close the popup when clicking outside of it
        document.addEventListener("click", (event) => closePopup(popup2, event));
        // Add a keydown event listener to the document to close the popup on the "Escape" key
        document.addEventListener("keydown", (event) => closePopupOnEscape(popup2, event));
    });
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
	const ariaChecked = element.getAttribute('aria-checked') === 'true' ? 'false' : 'true';
        element.setAttribute('aria-checked', ariaChecked);
	// Toggle the check-mark class for the corresponding element in the other container
	otherDottedCircle.classList.toggle('checked');


	updateProgressBar();
}

function handleKeyPress(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            // Prevent default behavior (e.g., scrolling the page)
            event.preventDefault();

            // Toggle the check when Enter or Space is pressed
            toggleCheck(event.target);
        }
    }

function updateProgressBar() {
	const checkedCircles = document.querySelectorAll('.dotted-circle.checked');
	const progressBar = document.querySelector('progress');
	const checkNo = document.getElementById('checks');

	progressBar.value = checkedCircles.length/2;
	checkNo.innerText = progressBar.value.toString();
}
