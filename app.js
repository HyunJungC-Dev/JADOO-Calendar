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

// closest 커스텀 함수
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

// 카테고리
const categoryUtil = (() => {
  let nextId = 1;
  let categories = [];

  const $categoryMain = document.querySelector('#categoryMain .dropdown-menu');
  const render = () => {
    $categoryMain.innerHTML =
      categories
        .map(
          category =>
            `
              <li
                id="cateMain${category.id}"
                class="dropdown-item dropdown-option ${
                  category.selected ? '--selected' : ''
                }"
                role="option"
                data-cate-name="${category.name}"
                data-cate-id=${category.id}
              >
                <input
                  type="text"
                  value="${category.name}"
                  disabled
                  class="dropdown-item-input"
                />
                <button class="category-delete-btn" aria-label="삭제">
                  <span class="icon icon-delete-gray"></span>
                </button>
              </li>
            `
        )
        .join('') +
      `
        <li class="dropdown-item dropdown-add">
          <label for="newCategoryMain" class="a11y-hidden">새로운 카테고리명</label>
          <input
            type="text"
            id="newCategoryMain"
            class="category-add-input"
            placeholder="카테고리명 입력"
          />
          <button class="category-add-btn" aria-label="추가">
            <span class="icon icon-add-gray"></span>
          </button>
        </li>
      `;

    document.getElementById('newCategoryMain').addEventListener('keyup', e => {
      if (e.key !== 'Enter') return;

      const cateName = e.target.value.trim();
      if (!cateName) return;
      categoryUtil.add(cateName);
      cateName.value = '';
      document.getElementById('newCategoryMain').focus();
    });
  };

  return {
    chkLength() {
      return categories.length;
    },
    getSelectedName() {
      return categories.filter(category => category.selected)[0].name;
    },
    fetch(data) {
      categories = data;
      nextId = data.length + 1;
      render();
    },
    add(cateName) {
      categories = [
        ...categories,
        {
          id: nextId,
          name: cateName,
          selected: false
        }
      ];
      nextId += 1;
      render();
    },
    remove(cateId) {
      let chgSelectedIdx = 0;
      let removeSelected = false;

      categories.forEach((category, idx, { length }) => {
        if (category.id === cateId) {
          if (category.selected) removeSelected = true;
          chgSelectedIdx = idx === length - 1 ? idx - 1 : idx + 1;
        }
      });

      categories = removeSelected
        ? categories
            .map((category, idx) => {
              if (idx === chgSelectedIdx) {
                return { ...category, selected: true };
              }
              return category;
            })
            .filter(category => category.id !== cateId)
        : categories.filter(category => category.id !== cateId);
      render();
    },
    select(cateId) {
      categories = categories.map(category => {
        if (category.id === cateId) {
          return { ...category, selected: true };
        }
        if (category.selected) {
          return { ...category, selected: false };
        }
        return category;
      });
      render();
    }
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  categoryUtil.fetch([
    { id: 1, name: '✔ TODO', selected: true },
    { id: 2, name: '✍ 네카라쿠배', selected: false },
    { id: 3, name: '🙏 감사일기', selected: false }
  ]);
});

const dropdownCategoryMain = (() => {
  let isActive = false;

  const $dropdown = document.querySelector('#categoryMain .dropdown-menu');

  return {
    toggle() {
      isActive = !isActive;
      $dropdown.classList.toggle('--show');
    },
    close() {
      isActive = false;
      $dropdown.classList.remove('--show');
    }
  };
})();

document.getElementById('mainCategoryBtn').addEventListener('click', () => {
  dropdownCategoryMain.toggle();
});

document
  .querySelector('#categoryMain .dropdown-menu')
  .addEventListener('click', e => {
    const $dropdownOption = closest(
      e.target,
      'dropdown-option',
      'dropdown-menu'
    );
    const $cateAddBtn = closest(e.target, 'category-add-btn', 'dropdown-menu');
    const $cateDeleteBtn = closest(
      e.target,
      'category-delete-btn',
      'dropdown-menu'
    );

    if ($cateDeleteBtn) {
      if (categoryUtil.chkLength() < 2) {
        // eslint-disable-next-line no-alert
        alert('카테고리는 1개 이상 존재해야 합니다.');
        return;
      }
      categoryUtil.remove(+$dropdownOption.dataset.cateId);
      document.getElementById('mainCategoryBtn').textContent =
        categoryUtil.getSelectedName();
      return;
    }

    if ($cateAddBtn) {
      const cateName = $cateAddBtn.previousElementSibling.value.trim();
      if (!cateName) return;
      categoryUtil.add(cateName);
      $cateAddBtn.previousElementSibling.value = '';
      document.getElementById('newCategoryMain').focus();
      return;
    }

    if ($dropdownOption) {
      document.getElementById('mainCategoryBtn').textContent =
        $dropdownOption.dataset.cateName;
      categoryUtil.select(+$dropdownOption.dataset.cateId);
      dropdownCategoryMain.close();
    }
  });

// 모달
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