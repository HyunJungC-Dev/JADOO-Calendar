// -------------------Drag and Drop Function-----------------------
$calendarDates.addEventListener('mousedown', mousedownEvent => {
  const initialMousePos = {
    x: mousedownEvent.clientX,
    y: mousedownEvent.clientY
  };

  if (mousedownEvent.target.classList.contains('icon-move')) {
    mousedownEvent.target.style['pointer-events'] = 'none';
    mousedownEvent.target.parentNode.style['pointer-events'] = 'none';
    mousedownEvent.target.parentNode.parentNode.style['pointer-events'] =
      'none';
    mousedownEvent.target.parentNode.parentNode.parentNode.classList.add(
      'dragging'
    );
    [...document.querySelectorAll('.item-control-btn')].forEach(
      $itemControlBtn => {
        $itemControlBtn.classList.toggle('--invisible');
      }
    );

    $calendarDates.onmousemove = e => {
      const draggable = document.querySelector('.dragging');
      draggable.style.transform = `translate3d(${
        e.clientX - initialMousePos.x
      }px, ${e.clientY - initialMousePos.y}px, 0)`;
    };

    let afterElement = null;
    let draggable = null;
    let $container = null;
    let prevAfterElemnt = null;
    let prev$container = null;

    $calendarDates.onmouseover = e => {
      if (prevAfterElemnt) prevAfterElemnt.style.border = 'none';
      if (prev$container) prev$container.style.border = 'none';

      $container = e.target.closest('.items');
      if (!$container) return;
      afterElement = e.target.closest('li');
      draggable = document.querySelector('.dragging');
      if (afterElement === draggable) {
        return;
      }

      if (afterElement == null) {
        if (!$container.lastElementChild) {
          $container.style['border-top'] = 'solid 5px gray';
          prev$container = $container;
        } else if (
          $container.lastElementChild === draggable &&
          draggable.previousElementSibling
        ) {
          draggable.previousElementSibling.style['border-bottom'] =
            'solid 5px gray';
          prev$container = draggable.previousElementSibling;
        } else if ($container.lastElementChild !== draggable) {
          $container.lastElementChild.style['border-bottom'] = 'solid 5px gray';
          prev$container = $container.lastElementChild;
        } else {
          $container.style['border-top'] = 'solid 5px gray';
          prev$container = $container;
        }
      } else {
        afterElement.style['border-top'] = 'solid 5px gray';
        prevAfterElemnt = afterElement;
      }
    };

    const removeDraggingClass = () => {
      $calendarDates.onmousemove = null;
      draggable.style.transform = 'none';
      if (prevAfterElemnt) prevAfterElemnt.style.border = 'none';
      if (prev$container) prev$container.style.border = 'none';
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
      [...document.querySelectorAll('.item-control-btn')].forEach(
        $itemControlBtn => {
          $itemControlBtn.classList.toggle('--invisible');
        }
      );

      if (!$container) return;
      if (afterElement == null) {
        $container.appendChild(draggable);
      } else {
        $container.insertBefore(draggable, afterElement);
      }
    };

    document.addEventListener('mouseup', removeDraggingClass);
  }
});
// ----------------------------------------------------------------
