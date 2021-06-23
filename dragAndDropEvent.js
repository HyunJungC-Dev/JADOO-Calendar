// -------------------Drag and Drop Function-----------------------
$calendarDates.addEventListener('mousedown', mousedownEvent => {
  if (mousedownEvent.target.classList.contains('icon-move')) {
    mousedownEvent.target.style['pointer-events'] = 'none';
    mousedownEvent.target.parentNode.style['pointer-events'] = 'none';
    mousedownEvent.target.parentNode.parentNode.style['pointer-events'] =
      'none';
    mousedownEvent.target.parentNode.parentNode.parentNode.classList.add(
      'dragging'
    );
    $calendarDates.onmouseover = e => {
      const $container = e.target.closest('.items');
      if (!$container) return;
      const afterElement = e.target.closest('li');
      const draggable = document.querySelector('.dragging');
      if (afterElement === draggable) {
        return;
      }
      if (afterElement == null) {
        $container.appendChild(draggable);
        draggable.style['border-bottom'] = 'none';
        draggable.style['border-top'] = 'solid 5px gray';
      } else {
        $container.insertBefore(draggable, afterElement);
        draggable.style['border-top'] = 'none';
        draggable.style['border-bottom'] = 'solid 5px gray';
      }
    };

    const removeDraggingClass = () => {
      mousedownEvent.target.parentNode.parentNode.parentNode.style.border =
        'none';
      mousedownEvent.target.parentNode.parentNode.parentNode.classList.remove(
        'dragging'
      );
      document.removeEventListener('mouseup', removeDraggingClass);
      $calendarDates.onmouseover = null;
      mousedownEvent.target.style['pointer-events'] = 'auto';
      mousedownEvent.target.parentNode.style['pointer-events'] = 'auto';
      mousedownEvent.target.parentNode.parentNode.style['pointer-events'] =
        'auto';
    };

    document.addEventListener('mouseup', removeDraggingClass);
  }
});
// -----------------------------------------------
