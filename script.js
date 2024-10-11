$(document).ready(function () {
  // Function to add a new item to the list
  function newItem() {
    const inputValue = $('#input').val(); // Get the value from the input field
    if (inputValue === '') {
      alert('You must write something!'); // Alert if input is empty
    } else {
      // Create a new list item with a delete button
      const listItem = $('<li></li>')
        .text(inputValue)
        .append('<button class="crossOutButton">X</button>');
      $('#list').append(listItem); // Add the new item to the list
      $('#input').val(''); // Clear the input field
    }
  }

  // Add new item on button click
  $('#button').on('click', function () {
    newItem();
  });

  // Cross out item on double-click
  $('#list').on('dblclick', 'li', function () {
    $(this).toggleClass('strike'); // Toggle the strike class
  });

  // Delete item on button click
  $('#list').on('click', '.crossOutButton', function () {
    $(this).parent().remove(); // Remove the parent list item
  });

  $(document).ready(function() {
    // Make the list sortable (drag-and-drop)
    $('#list').sortable(); // Use jQuery UI to make the list sortable
  });

