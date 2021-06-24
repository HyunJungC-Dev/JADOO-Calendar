// -------------------Drag and Drop Function-----------------------
$calendarDates.addEventListener('mousedown', e => {
  const initialMousePos = {
    x: e.clientX,
    y: e.clientY
  };

  const $selectedMoveBtn = closest(e.target, 'item-move-btn', 'calendar-dates');

  if ($selectedMoveBtn) {
    const draggable = closest(e.target, 'item', 'calendar-dates');
    draggable.classList.add('dragging');

    e.target.style['pointer-events'] = 'none';
    e.target.parentNode.style['pointer-events'] = 'none';
    e.target.parentNode.parentNode.style['pointer-events'] = 'none';

    [...document.querySelectorAll('.item-control-btn')].forEach(
      $itemControlBtn => {
        $itemControlBtn.classList.toggle('--invisible');
      }
    );

    const mouseMoveEvent = e => {
      draggable.style.transform = `translate3d(${
        e.clientX - initialMousePos.x
      }px, ${e.clientY - initialMousePos.y}px, 0)`;
    };

    const mouseEventInMouseDownEvent = (() => {
      let $container = null;
      let $prevContainer = null;
      let $nextElement = null;
      let $prevNextElement = null;

      return {
        mouseOverEvent(e) {
          if ($prevNextElement) $prevNextElement.style.border = 'none';
          if ($prevContainer) $prevContainer.style.border = 'none';

          $container = e.target.closest('.items');
          if (!$container) return;

          $nextElement = e.target.closest('li');
          if (draggable === $nextElement) return;
          if ($nextElement) {
            $nextElement.style['border-top'] = 'solid 5px gray';
            $prevNextElement = $nextElement;
            return;
          }

          const $lastElement = $container.lastElementChild;

          // 이동할 위치에 아무 일정도 없는 경우
          if (!$lastElement) {
            $container.style['border-top'] = 'solid 5px gray';
            $prevContainer = $container;
            return;
          }

          // 이동할 위치에 현재 이동중인 자신의 일정이 있는데
          // 그게 이동할 위치의 마지막이고 자신보다 위에 일정이 있는 경우
          const $prevElement = draggable.previousElementSibling;
          if ($lastElement === draggable && $prevElement) {
            $prevElement.style['border-bottom'] = 'solid 5px gray';
            $prevContainer = $prevElement;
            return;
          }

          // 이동할 위치에 현재 이동중인 자신의 일정이 있는데
          // 그게 이동할 위치의 마지막이 아닌 경우
          if ($lastElement !== draggable) {
            $lastElement.style['border-bottom'] = 'solid 5px gray';
            $prevContainer = $lastElement;
            return;
          }

          // 이동할 위치에 현재 이동중인 자신의 일정만 있는 경우
          $container.style['border-top'] = 'solid 5px gray';
          $prevContainer = $container;
        },
        mouseUpEvent() {
          draggable.classList.remove('dragging');
          draggable.style.transform = 'none';

          if ($prevNextElement) $prevNextElement.style.border = 'none';
          if ($prevContainer) $prevContainer.style.border = 'none';

          e.target.style['pointer-events'] = 'auto';
          e.target.parentNode.style['pointer-events'] = 'auto';
          e.target.parentNode.parentNode.style['pointer-events'] = 'auto';

          [...document.querySelectorAll('.item-control-btn')].forEach(
            $itemControlBtn => {
              $itemControlBtn.classList.toggle('--invisible');
            }
          );

          $calendarDates.removeEventListener('mousemove', mouseMoveEvent);
          $calendarDates.removeEventListener(
            'mouseover',
            mouseEventInMouseDownEvent.mouseOverEvent
          );
          document.removeEventListener(
            'mouseup',
            mouseEventInMouseDownEvent.mouseUpEvent
          );

          if (!$container) return;

          if (!$nextElement) {
            $container.appendChild(draggable);
            return;
          }
          $container.insertBefore(draggable, $nextElement);
        }
      };
    })();

    $calendarDates.addEventListener('mousemove', mouseMoveEvent);
    $calendarDates.addEventListener(
      'mouseover',
      mouseEventInMouseDownEvent.mouseOverEvent
    );
    document.addEventListener(
      'mouseup',
      mouseEventInMouseDownEvent.mouseUpEvent
    );
  }
});
// ----------------------------------------------------------------
