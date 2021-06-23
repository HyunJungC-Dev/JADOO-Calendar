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
  {
    id : 8,
    type:'text',
    category: '네카',
    date: '2021-06-27',
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
  const isAdd = true;
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

const modalEdit = (() => {
  let isActive = false;
  const $modal = document.querySelector('.modal-edit');
  const $modalDim = document.querySelector('.modal-dim');
  const $titleYear = document.querySelector('.modal-edit .month');
  const $titleMonth = document.querySelector('.modal-edit .date');
  const $itemDate = document.querySelector('.modal-edit .modal-input-date');
  const $itemTextArea = document.querySelector('.modal-edit .modal-input-txt');
  const $itemId = document.querySelector('.modal-edit .id');
  
  return {
    toggle(itemDate, content, itemId) {
      isActive = !isActive;
      $modal.classList.toggle('--show', isActive);
      $modalDim.classList.toggle('--show', isActive);
      document.body.classList.toggle('modal-open', isActive);

      if (!isActive) return;
      $itemId.value = itemId;
      $titleYear.textContent = itemDate.slice(5, 7);
      $titleMonth.textContent = itemDate.slice(8, 10);
      $itemDate.value = itemDate;
      $itemTextArea.value = content;
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
    const itemDate = $selectedAddBtn.parentElement.dataset.date;
    modalAdd.toggle(itemDate);
  }

  const $selectedModifyBtn = closest(e.target, 'item-edit-btn', 'calendar-dates');
  if($selectedModifyBtn){
    const itemDate = $selectedModifyBtn.parentElement.parentElement.parentElement.parentElement.dataset.date;
    const content = $selectedModifyBtn.parentElement.parentElement.querySelector('label')?.textContent.trim() ?? 
    $selectedModifyBtn.parentElement.parentElement.querySelector('p')?.textContent.trim();
    const itemId = $selectedModifyBtn.parentElement.parentElement.dataset.id;

    modalEdit.toggle(itemDate, content, itemId);
    
  }
  const $selectedDeleteBtn = closest(e.target, 'item-delete-btn', 'calendar-dates');
  if($selectedDeleteBtn){
    const itemId = $selectedDeleteBtn.parentElement.parentElement.dataset.id;
    const $parentNode = $selectedDeleteBtn.parentElement.parentElement.parentElement;
    deleteDataArray(itemId);
    deleteDataDOM(itemId, $parentNode);
  }

  // [...document.querySelectorAll('.--show')].forEach($showedUtil => {
  //   $showedUtil.classList.remove('--show');
  // });
});

document.querySelector('.modal-dim').addEventListener('click', () => {
  modalAdd.close();
  modalEdit.close();
});

// 아이템 추가
document.querySelector('.modal-add').addEventListener('submit', e => {
  e.preventDefault();
  const itemDate = e.currentTarget.itemDate.value;
  const itemCategory = e.currentTarget.itemCategory.value;
  const itemType = e.currentTarget.itemType.value;
  const itemContent = e.currentTarget.itemContent.value;

  addDataArray(itemDate, itemCategory, itemType, itemContent);
  addDataDomTree(itemDate, itemCategory, itemType, itemContent);
});

document.querySelector('.modal-edit').addEventListener('submit', e => {
  e.preventDefault();
  console.log(e.currentTarget.itemId.value)
  const itemId = e.currentTarget.itemId.value;
  const itemDate = e.currentTarget.itemDate.value;
  const itemCategory = e.currentTarget.itemCategory.value;
  const itemType = e.currentTarget.itemType.value;
  const itemContent = e.currentTarget.itemContent.value;

  modifyDataArray(itemId, itemDate, itemCategory, itemType, itemContent);
  modifyDataDOM(itemId, itemDate, itemCategory, itemType, itemContent);
});