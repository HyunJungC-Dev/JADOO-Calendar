console.log('test');

const $calendarDates = document.querySelector('.calendar');

document.documentElement.style.setProperty(
  '--scroll-width',
  $calendarDates.offsetWidth - $calendarDates.clientWidth + 'px'
);

document.querySelector('#dropdownCategoryBtn').addEventListener('click', e => {
  document
    .querySelector('.dropdown-category .dropdown-menu')
    .classList.add('--show');
});

document.querySelector('.dropdown-calendar').addEventListener('click', e => {
  console.log('click');
  document.querySelector('.dropdown-menu').classList.add('--show');
});

document.querySelector('#dropdownCategoryBtn').addEventListener('blur', e => {
  document
    .querySelector('.dropdown-category .dropdown-menu')
    .classList.remove('--show');
});
document.querySelector('#dropdownCalendarBtn').addEventListener('blur', e => {
  document.querySelector('.dropdown-menu').classList.remove('--show');
});

const modalAdd = (() => {
  let isActive = false;

  const $modal = document.querySelector('.modal-add');
  const $modalDim = document.querySelector('.modal-dim');
  const $titleYear = document.querySelector('.modal-add .month');
  const $titleMonth = document.querySelector('.modal-add .date');
  const $itemDate = document.querySelector('.modal-add .modal-input-date');

  return {
    toggle(itemDate) {
      isActive = !isActive;
      $modal.classList.toggle('--show', isActive);
      $modalDim.classList.toggle('--show', isActive);
      document.body.classList.toggle('modal-open', isActive);

      if (!isActive) return;
      $titleYear.textContent = itemDate.slice(4, 6);
      $titleMonth.textContent = itemDate.slice(6, 8);
      $itemDate.value = itemDate;
    },
    close() {
      isActive = false;
      $modal.classList.remove('--show');
      $modalDim.classList.remove('--show');
      document.body.classList.remove('modal-open');
    }
  };
})();

const closest = ($startElem, targetClass, endClass) => {
  let elem = $startElem;
  while (!elem.classList.contains(targetClass)) {
    if (elem.classList.contains(endClass)) {
      return null;
    }
    elem = elem.parentNode;
  }
  return elem;
};

document.querySelector('.calendar-dates').addEventListener('click', e => {
  // -------------------Hover Function-----------------------
  const $selectedControlBtn = closest(
    e.target,
    'item-control-btn',
    'calendar-dates'
  );
  if ($selectedControlBtn) {
    $selectedControlBtn.nextElementSibling.classList.toggle('--show');
    return;
  }
  // --------------------------------------------------------
  const $selectedAddBtn = closest(e.target, 'item-add-btn', 'calendar-dates');
  if ($selectedAddBtn) {
    const itemDate = $selectedAddBtn.dataset.date;
    modalAdd.toggle(itemDate);
  }

  // [...document.querySelectorAll('.--show')].forEach($showedUtil => {
  //   $showedUtil.classList.remove('--show');
  // });
});

document.querySelector('.modal-dim').addEventListener('click', () => {
  modalAdd.close();
});

// 아이템 추가
document.querySelector('.modal-add').addEventListener('submit', e => {
  e.preventDefault();

  const itemDate = e.currentTarget.itemDate.value;
  const itemCategory = e.currentTarget.itemCategory.value;
  const itemType = e.currentTarget.itemType.value;
  const itemContent = e.currentTarget.itemContent.value;

  console.log(itemDate, itemCategory, itemType, itemContent);
});
