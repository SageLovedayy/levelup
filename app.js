window.onload = function() {
	toggleDropdown();
	expandFirstOpt();
};

//window.addEventListener {
//	'beforeunload',
//	event => {
//		event.preventDefault();
//		event.returnValue = '';
//	}
//};
function handleClickOrEnter(event) {
        // Check if the event is a click or keyboard enter
        if (event.type === 'click' || (event.type === 'keydown' && event.key === 'Enter')) {
            // Find the closest .option element
            const optionElement = event.target.closest('.option');

            // If found, call toggleCheck with the .dotted-circle element as an argument
            if (optionElement) {
                const dottedCircleElement = optionElement.querySelector('.dotted-circle');
                toggleCheck(dottedCircleElement);
            }
        }
    }

    // Get all elements with class btn--custom
    const btnCustomElements = document.querySelectorAll('.btn--custom');

    // Attach event listener to each btn--custom element
    btnCustomElements.forEach(function (element) {
        element.addEventListener('click', handleClickOrEnter);
        element.addEventListener('keydown', handleClickOrEnter);
        // Ensure the element is focusable
        element.setAttribute('tabindex', '0');
    });


//=====page load dropdown===/
function toggleDropdown() {
    const button = document.querySelector('.collapsible-trigger');
    const content = document.querySelector('.collapsible-content');
    const arrowDown = document.querySelector('.arrow-down');
    const arrowUp = document.querySelector('.arrow-up');

    const isCollapsed = content.style.display === 'none' || content.style.display === '';

    content.style.display = isCollapsed ? 'block' : 'none';
    arrowDown.style.display = isCollapsed ? 'block' : 'none';
    arrowUp.style.display = isCollapsed ? 'none' : 'block';

    // Toggle aria-expanded attribute
    button.setAttribute('aria-expanded', String(isCollapsed));


}

//======expand first option in setup options on page load==/
function expandFirstOpt() {
	var opts = document.querySelectorAll(".opt");
	var allActives = document.querySelectorAll(".active");

	allActives[0].style.display = "flex";
	opts[0].style.display = "none";


}


//===========handle setup options drop down=================
function toggleCollapsible() {
    const button = document.querySelector('.collapsible-trigger');
    const content = document.querySelector('.collapsible-content');
    const arrowDown = document.querySelector('.arrow-down');
    const arrowUp = document.querySelector('.arrow-up');

    const isCollapsed = content.style.display === 'none' || content.style.display === '';

    content.style.display = isCollapsed ? 'block' : 'none';
    arrowDown.style.display = isCollapsed ? 'block' : 'none';
    arrowUp.style.display = isCollapsed ? 'none' : 'block';

    // Toggle aria-expanded attribute
    button.setAttribute('aria-expanded', String(isCollapsed));

    // Shift focus to the button to ensure screen reader announces the change
    button.focus();
}


//expand option

//-------------------------------------------------------------


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




//==handle setup options navigation==========================================
document.addEventListener("DOMContentLoaded", function () {
	// Get all option elements
	const collapsedContent = document.getElementById('collapsed-content');
	const menuTrigger = document.getElementById('menu-trigger');
	const opts = collapsedContent.querySelectorAll('[role="menuitem"]');



	// Add a focus event listener to each option

	menuTrigger.addEventListener("click", function (event) {
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
				console.log(event.key);
				if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
					// Check if it's the last element
					if (index === opts.length - 1) {
						opts[0].focus(); // Focus on the first element
					} else {
						opts[index + 1].focus();
					}
				} else if ((event.key === 'ArrowUp' || event.key === 'ArrowLeft') && index > 0) {
					opts[index - 1].focus();
					event.preventDefault();
				} else if (event.key === 'Enter') {
					simulateTabPress();
				}
			});

			function simulateTabPress() {
				console.log("Simulating Tab press.");
				var nextElement = opt.firstElementChild;

				if (nextElement) {
					nextElement.focus();

					// Simulate pressing "Enter" on the focused element
					var enterKeyEvent = new KeyboardEvent('keydown', {
						key: 'Enter',
						keyCode: 13,
						which: 13,
					});

					nextElement.dispatchEvent(enterKeyEvent);
				}
			};


		});
	});


});


//handle navbar popups====================================================================

document.addEventListener("DOMContentLoaded", function () {
	function togglePopup(popup, triggerButton) {
		popup.classList.toggle("hidden");
		const isClosed = popup.classList.contains("hidden");
		triggerButton.setAttribute('aria-expanded', String(!isClosed));
		return isClosed;
	}

	function focusOnElement(element) {
		if (element) {
			element.focus();
		}
	}

	function closePopup(popup, triggerButton, event) {
		if (!popup.contains(event.target) && event.target !== triggerButton) {
			popup.classList.add("hidden");
		document.removeEventListener("keydown", closePopupOnEscape);
		triggerButton.setAttribute('aria-expanded', "false");
			//focusOnElement(triggerButton);
		}
	}

	function closePopupOnEscape(popup, triggerButton, event) {
		if (event.key === "Escape") {
			popup.classList.add("hidden");
		document.removeEventListener("keydown", closePopupOnEscape);
		triggerButton.setAttribute('aria-expanded', "false");
			focusOnElement(triggerButton);
		}
	}

	const showPopupButton = document.getElementById("showPopup");
	const popup = document.getElementById("popup");

	showPopupButton.addEventListener("click", function (event) {
		const isClosed = togglePopup(popup, showPopupButton);
		const allMenuItems = popup.querySelectorAll('[role="menuitem"]');


		focusOnElement(isClosed ? showPopupButton : allMenuItems.item(0));
		event.stopPropagation();
		//add keyboard arrow navigation functionality
		allMenuItems.forEach(function (menuitem, index) {
			menuitem.addEventListener('keydown', function (event) {
				if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
					if (index === allMenuItems.length - 1) {
						focusOnElement(allMenuItems[0]);
					} else {
						focusOnElement(allMenuItems[index + 1]);
					}
				}
				else if ((event.key === 'ArrowUp' || event.key == 'ArrowLeft') && index > 0) {
					focusOnElement(allMenuItems[index - 1]);
					event.preventDefault();
				}
			});
		});



		document.addEventListener("click", (event) => closePopup(popup, showPopupButton, event));
		document.addEventListener("keydown", (event) => closePopupOnEscape(popup, showPopupButton, event));
	});


	const showPopupBtn = document.getElementById("showPopup2");
	const popup2 = document.getElementById("popup2");

	showPopupBtn.addEventListener("click", function (event) {
		const isClosed = togglePopup(popup2, showPopupBtn);
		const allMenuItems = popup2.querySelectorAll('[role="menuitem"]');
		focusOnElement(isClosed ? showPopupBtn : allMenuItems.item(0));
		event.stopPropagation();

		//add keyboard arrow navigation functionality
		allMenuItems.forEach(function (menuitem, index) {
			menuitem.addEventListener('keydown', function (event) {
				if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
					if (index === allMenuItems.length - 1) {
						focusOnElement(allMenuItems[0]);
					} else {
						focusOnElement(allMenuItems[index + 1]);
					}
				}
				else if ((event.key === 'ArrowUp' || event.key == 'ArrowLeft') && index > 0) {
					focusOnElement(allMenuItems[index - 1]);
					event.preventDefault();
				}
			});
		});

		document.addEventListener("click", (event) => closePopup(popup2, showPopupBtn, event));
		document.addEventListener("keydown", (event) => closePopupOnEscape(popup2, showPopupBtn, event));
	});
});


//close content pop====================================================================================

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

//== toggle check and handle progress bar =============================================================
function toggleCheck(element) {
    // Check if the "checked" class is present at the beginning
    const isCheckedInitially = element.classList.contains('checked');

    // Check if the parent container is "opt" or "active"
    const parentContainer = element.closest('.option');
    const isOpt = parentContainer.classList.contains('opt');

    // Find the corresponding element in the other container
    const otherContainer = isOpt ? parentContainer.nextElementSibling : parentContainer.previousElementSibling;
	const otherDottedCircle = otherContainer.querySelector('.dotted-circle');
	const checkStatus = parentContainer.querySelector('.check-status')


    // Conditionally remove the "checked" class if present initially
    if (isCheckedInitially) {
        element.classList.remove('checked');
        otherDottedCircle.classList.remove('checked');
    }

    // Add the "spinning" class to the clicked element
    element.classList.add('spinning');

    // Add the "spinning" class to the otherDottedCircle
    otherDottedCircle.classList.add('spinning');

	checkStatus.setAttribute('aria-label', 'Loading...please wait');
	console.log(checkStatus.getAttribute('aria-label'));

    // Simulate a 3-second delay
    setTimeout(function () {
        // Remove the "spinning" class after 3 seconds for the clicked element
        element.classList.remove('spinning');
        // Remove the "spinning" class after 3 seconds for the otherDottedCircle
        otherDottedCircle.classList.remove('spinning');

        // Toggle the "checked" class for the clicked element
        if (!isCheckedInitially) {
            element.classList.toggle('checked');

            // Toggle the "checked" class for the otherDottedCircle
            otherDottedCircle.classList.toggle('checked');
        }

        // Update the "aria-checked" attribute for the clicked element
        const ariaChecked = element.getAttribute('aria-checked') === 'true' ? 'false' : 'true';
        element.setAttribute('aria-checked', ariaChecked);

        // Update the "aria-checked" attribute for the otherDottedCircle
        const otherAriaChecked = otherDottedCircle.getAttribute('aria-checked') === 'true' ? 'false' : 'true';
        otherDottedCircle.setAttribute('aria-checked', otherAriaChecked);

        // Update the "aria-label" attribute for the clicked element
	const currentAriaLabel = element.getAttribute('aria-label');
	const newAriaLabel = currentAriaLabel.includes('as done')
    		? currentAriaLabel.replace('as done', 'as not done')
		: currentAriaLabel.replace('as not done', 'as done');
	console.log(newAriaLabel);
	element.setAttribute('aria-label', newAriaLabel);

// Update the "aria-label" attribute for the otherDottedCircle
const otherCurrentAriaLabel = otherDottedCircle.getAttribute('aria-label');
const otherNewAriaLabel = otherCurrentAriaLabel.includes('as done')
    ? otherCurrentAriaLabel.replace('as done', 'as not done')
    : otherCurrentAriaLabel.replace('as not done', 'as done');
otherDottedCircle.setAttribute('aria-label', otherNewAriaLabel);

	    //check status

	const newCheckLabel = ariaChecked === 'true' ? 'Successfully marked as done' : 'Successfully marked as not done';
	checkStatus.setAttribute('aria-label', newCheckLabel);


	console.log(checkStatus.getAttribute('aria-label'));


        // Update the progress bar
        updateProgressBar();
    }, 3000); // Adjust the timing here if needed
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
//------------------------------------------------------------------------------------------------------------