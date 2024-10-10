$(document).ready(function () {
  // Add a new item when the Add button is clicked
  $('#button').click(function () {
    let inputValue = $('#input').val(); // Get input value

    if (inputValue === '') {
      alert('You must write something!'); // Alert if input is empty
    } else {
      let li = $('<li></li>').text(inputValue); // Create a new list item
      $('#list').append(li); // Add the new list item to the list

      // Clear the input field after adding the item
      $('#input').val('');

      // Double click to mark the item as complete
      li.on('dblclick', function () {
        li.toggleClass('strike'); // Toggle the strike-through class
      });

      // Add a delete button
      let deleteButton = $('<crossOutButton></crossOutButton>').text('X');
      li.append(deleteButton);

      // Delete the list item when clicking the delete button
      deleteButton.click(function () {
        li.remove();
      });

      // Make the list sortable
      $('#list').sortable();
    }
  });
});
