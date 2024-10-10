$(document).ready(function () {
  // Function to add a new item
  function newItem() {
    let itemText = $('#input').val(); // Get the input value
    if (itemText) {
      let li = $('<li></li>').text(itemText); // Create a new list item
      let deleteButton = $('<button class="crossOutButton">X</button>'); // Create delete button
      li.append(deleteButton); // Append the delete button to the list item
      $('#list').append(li); // Append the new list item to the list
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
  // Make the list sortable (drag-and-drop)
  $('#list').sortable(); // Use jQuery UI to make the list sortable
});
