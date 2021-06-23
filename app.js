/**
 * 요소 더미 데이터
 * 
 */
 let data = [
  {
      id : 1,
      type:'todo',
      category: '네카',
      date: '2021-06-23',
      content: '하이',
      order: 1
  },
  {
      id : 2,
      type:'todo',
      category: '네카',
      date: '2021-06-24',
      content: '하이',
      order: 1
  },
  {
      id : 3,
      type:'todo',
      category: '네카',
      date: '2021-06-25',
      content: '하이',
      order: 1
  },
  {
      id : 4,
      type:'text',
      category: '네카',
      date: '2021-06-23',
      content: '하이',
      order: 2
  },
  {
      id : 5,
      type:'todo',
      category: '네카',
      date: '2021-06-23',
      content: '하이',
      order: 1
  },
  {
      id : 6,
      type:'todo',
      category: '네카',
      date: '2021-09-24',
      content: '하이 9월 24일',
      order: 1
  },
  {
      id : 7,
      type:'todo',
      category: '네카',
      date: '2021-07-25',
      content: '하이 7월 25일',
      order: 1
  },
  {
      id : 8,
      type:'text',
      category: '네카',
      date: '2021-08-23',
      content: '하이 8월 23일',
      order: 2
  },
]
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
      $titleYear.textContent = itemDate.slice(5, 7);
      $titleMonth.textContent = itemDate.slice(8, 10);
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
  const $selectedAddBtn = closest(e.target, 'item-add-btn', 'calendar-dates');
  if (!$selectedAddBtn) return;

  const itemDate = $selectedAddBtn.parentElement.dataset.date;
  modalAdd.toggle(itemDate);
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

  addDataArray(itemDate, itemCategory, itemType, itemContent)
  addDataDomTree(itemDate, itemCategory, itemType, itemContent)
  console.log(data);
});
