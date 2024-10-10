$(document).ready(function () {
  // Function to add a new item
  $('#button').on('click', function () {
    let newItem = $('#input').val();
    if (newItem !== '') {
      // Append new item with delete button
      $('#list').append(
        '<li>' + newItem + ' <button class="delete">X</button></li>'
      );
      $('#input').val(''); // Clear the input field
    }
  });

  // Mark an item as completed by double-clicking it
  $('#list').on('dblclick', 'li', function () {
    $(this).toggleClass('strike');
  });

  // Delete an item by clicking on the delete button
  $('#list').on('click', '.delete', function () {
    $(this).parent().remove(); // Remove the parent <li> element
  });

  // Show delete button on hover
  $('#list').on('mouseenter', 'li', function () {
    $(this).find('.delete').show();
  });

  $('#list').on('mouseleave', 'li', function () {
    $(this).find('.delete').hide();
  });

  // Make the list sortable (reorderable)
  $('#list').sortable();
});
