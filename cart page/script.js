var selectedBox = null;

function toggleOptions(boxId) {
    var box = document.getElementById(boxId);
    var radioInput = box.querySelector('input[type="radio"]');

    // If the clicked box is already active, hide its content and deactivate it
    if (box.classList.contains('active')) {
        hideBoxContent(box);
        selectedBox = null;
    } else {
        // If another box is active, hide its content and deactivate it
        if (selectedBox && selectedBox !== box) {
            hideBoxContent(selectedBox);
        }

        // Toggle the 'active' class on the clicked box
        box.classList.toggle('active');

        // Toggle the options for the clicked radio button
        var options = box.querySelector('.options');
        options.style.display = options.style.display === 'none' ? 'grid' : 'none';

        // Make the radio button active
        radioInput.checked = !radioInput.checked;

        selectedBox = box;
    }
}

function hideBoxContent(box) {
    box.querySelector('.options').style.display = 'none';
    box.classList.remove('active');
}
