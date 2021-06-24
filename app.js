const ITEM_TYPE = [
  { id: 1, name: '✅ 투두리스트' },
  { id: 2, name: '📃 글' }
];

let currentCategory = '0';
currentCategory = '1';

let data = [];
data = [
  {
    id: 1,
    type: '2',
    category: '2',
    date: '2021-06-20',
    content:
      '지훈님께서 아침에 트라이(Trie) 가사 검색 문제에 대한 힌트를 잘 알려주셔서 문제를 이해하고, 푸는데 정말 큰 도움이 되었다.',
    order: 1
  },
  {
    id: 2,
    type: '2',
    category: '2',
    date: '2021-06-21',
    content:
      '오늘 힘을 내서 열심히 공부할 수 있도록 도와주신 모든 동료들에게 감사하다.',
    order: 1
  },
  {
    id: 3,
    type: '2',
    category: '2',
    date: '2021-06-22',
    content:
      '이전까지 이해를 제대로 하지 못했던 다익스트라 알고리즘을 완벽하게 설명해주신 강사님께 정말 감사했다.',
    order: 1
  },
  {
    id: 4,
    type: '2',
    category: '2',
    date: '2021-06-23',
    content: '맛있는 햄버거 집에 데려다준 상원님에게 감사',
    order: 1
  },
  {
    id: 5,
    type: '2',
    category: '2',
    date: '2021-06-24',
    content:
      '서로 짖궂게 굴어도 나를 챙겨주는 걸 느낄 수 있게끔 해주는 재혁님께 감사',
    order: 1
  },
  {
    id: 6,
    type: '2',
    category: '2',
    date: '2021-06-15',
    content:
      '늘 우리들이 수업을 잘 들을 수 있게 신경쓰시고 안보이는 곳에서 누구보다 바쁘실 클래스 매니저님께 감사',
    order: 1
  },
  {
    id: 7,
    type: '2',
    category: '2',
    date: '2021-06-16',
    content: '끝나고 맥주 한 잔 마실 수 있는 3000원이 있는 것에 감사',
    order: 1
  },
  {
    id: 8,
    type: '2',
    category: '2',
    date: '2021-06-17',
    content: '동료들이 잘해서 배울게 많은것에 감사',
    order: 1
  },
  {
    id: 9,
    type: '2',
    category: '2',
    date: '2021-06-18',
    content:
      '알고리즘에 대해 잘 모르는 저에게 따스한 위로의 말을 보내준 다은님께 감사',
    order: 1
  },
  {
    id: 10,
    type: '2',
    category: '2',
    date: '2021-06-19',
    content:
      '오늘 알고리즘 스터디를 통해 배운 점이 많았다. 내가 푼 풀이보다 훨씬 좋은 풀이를 조원들에게 배울 수 있었다.',
    order: 1
  },
  {
    id: 11,
    type: '2',
    category: '3',
    date: '2021-06-24',
    content: '바람떡',
    order: 1
  },
  {
    id: 12,
    type: '2',
    category: '3',
    date: '2021-06-24',
    content: '갈비찜',
    order: 2
  },
  {
    id: 13,
    type: '2',
    category: '3',
    date: '2021-06-23',
    content: '비빔면 & 크로플',
    order: 3
  },
  {
    id: 14,
    type: '2',
    category: '3',
    date: '2021-06-23',
    content: '퐁라떼',
    order: 2
  },
  {
    id: 15,
    type: '2',
    category: '3',
    date: '2021-06-23',
    content: '성수감자탕',
    order: 1
  },
  {
    id: 16,
    type: '2',
    category: '3',
    date: '2021-06-22',
    content: '칙피스',
    order: 2
  },
  {
    id: 17,
    type: '2',
    category: '3',
    date: '2021-06-22',
    content: '육쌈냉면 비냉',
    order: 1
  },
  {
    id: 25,
    type: '1',
    category: '1',
    date: '2021-06-21',
    content: '자두 캘린더 기획발표',
    order: 1
  },
  {
    id: 18,
    type: '1',
    category: '1',
    date: '2021-06-21',
    content: '자두 캘린더 마크업 & CSS',
    order: 2
  },
  {
    id: 19,
    type: '1',
    category: '1',
    date: '2021-06-22',
    content: '자두 캘린더 마크업 & CSS',
    order: 1
  },
  {
    id: 22,
    type: '1',
    category: '1',
    date: '2021-06-22',
    content: '자두 캘린더 무한스크롤',
    order: 2
  },
  {
    id: 20,
    type: '1',
    category: '1',
    date: '2021-06-23',
    content: '자두 캘린더 셀렉트박스',
    order: 1
  },
  {
    id: 21,
    type: '1',
    category: '1',
    date: '2021-06-24',
    content: '자두 캘린더 모달창',
    order: 1
  },
  {
    id: 28,
    type: '1',
    category: '1',
    date: '2021-06-24',
    content: '자두 캘린더 ppt',
    order: 1
  },
  {
    id: 23,
    type: '1',
    category: '1',
    date: '2021-06-23',
    content: '자두 캘린더 마우스이벤트',
    order: 2
  },
  {
    id: 24,
    type: '1',
    category: '1',
    date: '2021-06-19',
    content: '자두 캘린더 프로토타입 만들기',
    order: 1
  },
  {
    id: 26,
    type: '1',
    category: '1',
    date: '2021-06-18',
    content: 'JS UI 짝코딩 발표',
    order: 1
  },
  {
    id: 27,
    type: '1',
    category: '1',
    date: '2021-06-17',
    content: 'JS UI 짝코딩',
    order: 1
  }
];

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
    // 메인화면의 카테고리 변경
    $categoryMain.innerHTML =
      categories
        .map(
          category =>
            `
              <li
                id="cateMain${category.id}"
                class="dropdown-item dropdown-option-icon ${
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

    // 아이템추가창 카테고리 변경
    document.querySelector('.modal-add .dropdown-category').innerHTML =
      `
      <span id="modalAddCategoryLabel" class="modal-input-label">카테고리 <span class="a11y-hidden">선택</span></span>
      <button
        type="button"
        id="modalAddCategoryBtn"
        class="dropdown-toggle"
        name="itemCategory"
        value="${categories[0].id}"
        aria-labelledby="modalAddCategoryLabel modalAddCategoryBtn"
        aria-haspopup="listbox"
      >
        ${categories[0].name}
      </button>
      <ul
        class="dropdown-menu"
        tabindex="-1"
        role="listbox"
        aria-labelledby="modalAddCategoryLabel"
    >` +
      categories
        .map(
          category =>
            `
              <li class="dropdown-item" role="option">
                <button type="button" value="${category.id}" class="dropdown-option">
                  ${category.name}
                </button>
              </li>
            `
        )
        .join('') +
      '</ul>';

    // 아이템편집창 카테고리 변경
    document.querySelector('.modal-edit .dropdown-category').innerHTML =
      `
      <span id="modalEditCategoryLabel" class="modal-input-label">카테고리 <span class="a11y-hidden">선택</span></span>
      <button
        type="button"
        id="modalEditCategoryBtn"
        class="dropdown-toggle --disabled"
        name="itemCategory"
        value="${categories[0].id}"
        aria-labelledby="modalEditCategoryLabel modalEditCategoryBtn"
        aria-haspopup="listbox"
      >
        ${categories[0].name}
      </button>
      <ul
        class="dropdown-menu"
        tabindex="-1"
        role="listbox"
        aria-labelledby="modalEditCategoryLabel"
    >` +
      categories
        .map(
          category =>
            `
              <li class="dropdown-item" role="option">
                <button type="button" value="${category.id}" class="dropdown-option">
                  ${category.name}
                </button>
              </li>
            `
        )
        .join('') +
      '</ul>';

    const dropdownCategoryModalAdd = (() => {
      const $dropdown = document.querySelector(
        '#modalAddCategoryBtn + .dropdown-menu'
      );
      return {
        toggle() {
          $dropdown.classList.toggle('--show');
        },
        close() {
          $dropdown.classList.remove('--show');
        }
      };
    })();

    const $modalAddCategoryBtn = document.getElementById('modalAddCategoryBtn');

    document
      .querySelector('.modal-add .dropdown-category')
      .addEventListener('click', e => {
        e.stopPropagation();

        const $targetCategoryBtn = closest(
          e.target,
          'dropdown-toggle',
          'dropdown-category'
        );
        const $modalAddCategoryOption = closest(
          e.target,
          'dropdown-option',
          'dropdown-category'
        );

        if ($targetCategoryBtn) {
          dropdownCategoryModalAdd.toggle();
          return;
        }

        if ($modalAddCategoryOption) {
          $modalAddCategoryBtn.textContent =
            $modalAddCategoryOption.textContent.trim();
          $modalAddCategoryBtn.value = $modalAddCategoryOption.value;
          dropdownCategoryModalAdd.close();
        }
      });

    document
      .querySelector('.modal-edit .dropdown-category')
      .addEventListener('click', e => {
        e.stopPropagation();

        const $targetCategoryBtn = closest(
          e.target,
          'dropdown-toggle',
          'dropdown-category'
        );
        const $modalEditCategoryOption = closest(
          e.target,
          'dropdown-option',
          'dropdown-category'
        );

        if ($targetCategoryBtn) {
          dropdownCategoryModalEdit.toggle();
          return;
        }

        if ($modalEditCategoryOption) {
          $modalEditCategoryBtn.textContent =
            $modalEditCategoryOption.textContent.trim();
          $modalEditCategoryBtn.value = $modalEditCategoryOption.value;
          dropdownCategoryModalEdit.close();
        }
      });
  };

  return {
    chkLength() {
      return categories.length;
    },
    getSelectedName() {
      return categories.filter(category => category.selected)[0].name;
    },
    getFirstCategory() {
      return categories[0];
    },
    getCategoryById(id) {
      return categories.filter(category => category.id === +id)[0];
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
  document.documentElement.style.setProperty(
    '--scroll-width',
    $calendarDates.offsetWidth - $calendarDates.clientWidth + 'px'
  );

  categoryUtil.fetch([
    { id: 1, name: '✍ 네카라쿠배', selected: true },
    { id: 2, name: '🙏 감사일기', selected: false },
    { id: 3, name: '🐷 꿀꿀 🐷', selected: false }
  ]);

  // 아이템 추가/편집창 타입 드롭다운 렌더링
  document.querySelector('.modal-add .dropdown-type').innerHTML =
    `
      <span id="modalAddTypeLabel" class="modal-input-label">타입 <span class="a11y-hidden">선택</span></span>
      <button
        type="button"
        id="modalAddTypeBtn"
        class="dropdown-toggle"
        name="itemType"
        value="${ITEM_TYPE[0].id}"
        aria-labelledby="modalAddTypeLabel modalAddTypeBtn"
        aria-haspopup="listbox"
      >
        ${ITEM_TYPE[0].name}
      </button>
      <ul
        class="dropdown-menu"
        tabindex="-1"
        role="listbox"
        aria-labelledby="modalAddTypeLabel"
    >` +
    ITEM_TYPE.map(
      type =>
        `
        <li class="dropdown-item" role="option">
          <button type="button" value="${type.id}" class="dropdown-option">
            ${type.name}
          </button>
        </li>
      `
    ).join('') +
    '</ul>';

  document.querySelector('.modal-edit .dropdown-type').innerHTML =
    `
      <span id="modalEditTypeLabel" class="modal-input-label">타입 <span class="a11y-hidden">선택</span></span>
      <button
        type="button"
        id="modalEditTypeBtn"
        class="dropdown-toggle --disabled"
        name="itemType"
        value="${ITEM_TYPE[0].id}"
        aria-labelledby="modalEditTypeLabel modalEditTypeBtn"
        aria-haspopup="listbox"
      >
        ${ITEM_TYPE[0].name}
      </button>
      <ul
        class="dropdown-menu"
        tabindex="-1"
        role="listbox"
        aria-labelledby="modalEditTypeLabel"
    >` +
    ITEM_TYPE.map(
      type =>
        `
        <li class="dropdown-item" role="option">
          <button type="button" value="${type.id}" class="dropdown-option">
            ${type.name}
          </button>
        </li>
      `
    ).join('') +
    '</ul>';

  const dropdownTypeModalAdd = (() => {
    const $dropdown = document.querySelector(
      '#modalAddTypeBtn + .dropdown-menu'
    );

    return {
      toggle() {
        $dropdown.classList.toggle('--show');
      },
      close() {
        $dropdown.classList.remove('--show');
      }
    };
  })();

  const dropdownTypeModalEdit = (() => {
    const $dropdown = document.querySelector(
      '#modalEditTypeBtn + .dropdown-menu'
    );

    return {
      toggle() {
        $dropdown.classList.toggle('--show');
      },
      close() {
        $dropdown.classList.remove('--show');
      }
    };
  })();

  const $modalAddTypeBtn = document.getElementById('modalAddTypeBtn');
  const $modalEditTypeBtn = document.getElementById('modalEditTypeBtn');

  $modalAddTypeBtn.addEventListener('click', e => {
    e.stopPropagation();
    dropdownTypeModalAdd.toggle();
  });

  $modalEditTypeBtn.addEventListener('click', e => {
    e.stopPropagation();
    dropdownTypeModalEdit.toggle();
  });

  document
    .querySelector('#modalAddTypeBtn + .dropdown-menu')
    .addEventListener('click', e => {
      e.stopPropagation();

      const $dropdownOption = e.target;
      if (!$dropdownOption.classList.contains('dropdown-option')) return;

      $modalAddTypeBtn.textContent = $dropdownOption.textContent.trim();
      $modalAddTypeBtn.value = $dropdownOption.value;
      dropdownTypeModalAdd.close();
    });

  document
    .querySelector('#modalEditTypeBtn + .dropdown-menu')
    .addEventListener('click', e => {
      e.stopPropagation();

      const $dropdownOption = e.target;
      if (!$dropdownOption.classList.contains('dropdown-option')) return;

      $modalEditTypeBtn.textContent = $dropdownOption.textContent.trim();
      $modalEditTypeBtn.value = $dropdownOption.value;
      dropdownTypeModalEdit.close();
    });

  document.querySelector('.modal-add').addEventListener('click', () => {
    [...document.querySelectorAll('.modal-add .dropdown-menu')].forEach(
      $dropdown => {
        $dropdown.classList.remove('--show');
      }
    );
  });

  document.querySelector('.modal-edit').addEventListener('click', () => {
    [...document.querySelectorAll('.modal-edit .dropdown-menu')].forEach(
      $dropdown => {
        $dropdown.classList.remove('--show');
      }
    );
  });

  document.querySelector('.modal-dim').addEventListener('click', () => {
    modalAdd.close();
    modalAdd.reset();
    modalEdit.close();
    [...document.querySelectorAll('.modal-add .dropdown-menu')].forEach(
      $dropdown => {
        $dropdown.classList.remove('--show');
      }
    );

    [...document.querySelectorAll('.modal-edit .dropdown-menu')].forEach(
      $dropdown => {
        $dropdown.classList.remove('--show');
      }
    );
  });
});

const dropdownCategoryMain = (() => {
  const $dropdown = document.querySelector('#categoryMain .dropdown-menu');
  return {
    toggle() {
      $dropdown.classList.toggle('--show');
    },
    close() {
      $dropdown.classList.remove('--show');
    }
  };
})();

document.getElementById('mainCategoryBtn').addEventListener('click', () => {
  dropdownCategoryMain.toggle();
});

// 모달
const modalAdd = (() => {
  let isActive = false;

  const $modal = document.querySelector('.modal-add');
  const $modalDim = document.querySelector('.modal-dim');
  const $titleYear = $modal.querySelector('.month');
  const $titleMonth = $modal.querySelector('.date');
  const $itemDate = $modal.querySelector('.modal-input-date');
  const $itemContent = $modal.querySelector('.modal-input-txt');
  
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
    },
    reset() {
      const $itemCategoryBtn = $modal.querySelector('#modalAddCategoryBtn');
      const $itemTypeBtn = $modal.querySelector('#modalAddTypeBtn');
      $itemCategoryBtn.value = categoryUtil.getFirstCategory().id;
      $itemCategoryBtn.textContent = categoryUtil.getFirstCategory().name;
      $itemTypeBtn.value = ITEM_TYPE[0].id;
      $itemTypeBtn.textContent = ITEM_TYPE[0].name;
      $itemContent.value = '';
    }
  };
})();

const modalEdit = (() => {
  let isActive = false;
  const $modal = document.querySelector('.modal-edit');
  const $modalDim = document.querySelector('.modal-dim');
  const $titleYear = $modal.querySelector('.month');
  const $titleMonth = $modal.querySelector('.date');
  const $itemDate = $modal.querySelector('.modal-input-date');
  const $itemTextArea = $modal.querySelector('.modal-input-txt');
  const $itemId = $modal.querySelector('.modal-input-id');

  return {
    toggle({ id, date, category: categoryId, type: typeId, content }) {
      isActive = !isActive;
      $modal.classList.toggle('--show', isActive);
      $modalDim.classList.toggle('--show', isActive);
      document.body.classList.toggle('modal-open', isActive);

      if (!isActive) return;
      $itemId.value = id;
      $titleYear.textContent = date.slice(5, 7);
      $titleMonth.textContent = date.slice(8, 10);
      $itemDate.value = date;
      $itemTextArea.value = content;

      const $categoryBtn = document.getElementById('modalEditCategoryBtn');
      const $typeBtn = document.getElementById('modalEditTypeBtn');

      $categoryBtn.value = categoryId;
      $categoryBtn.textContent = categoryUtil.getCategoryById(categoryId).name;
      $typeBtn.value = typeId;
      $typeBtn.textContent = ITEM_TYPE.filter(
        type => type.id === +typeId
      )[0].name;
    },
    close() {
      isActive = false;
      $modal.classList.remove('--show');
      $modalDim.classList.remove('--show');
      document.body.classList.remove('modal-open');
    }
  };
})();

document
  .querySelector('.modal-add .modal-close-btn')
  .addEventListener('click', () => {
    modalAdd.close();
    modalAdd.reset();
  });

document
  .querySelector('.modal-edit .modal-close-btn')
  .addEventListener('click', () => {
    modalEdit.close();
  });

let nextDataId = 31;

// 아이템 추가
document.querySelector('.modal-add').addEventListener('submit', e => {
  e.preventDefault();

  const newItem = {
    date: e.currentTarget.itemDate.value,
    category: e.currentTarget.itemCategory.value,
    type: e.currentTarget.itemType.value,
    content: e.currentTarget.itemContent.value
  };

  addDataArray(newItem);
  addDataDomTree(newItem);
  nextDataId += 1;

  modalAdd.close();
  modalAdd.reset();
});

// 아이템 수정
document.querySelector('.modal-edit').addEventListener('submit', e => {
  e.preventDefault();

  const editItem = {
    id: e.currentTarget.itemId.value,
    date: e.currentTarget.itemDate.value,
    // category: e.currentTarget.itemCategory.value,
    type: e.currentTarget.itemType.value,
    content: e.currentTarget.itemContent.value
  };

  modifyDataArray(editItem);
  modifyDataDOM(editItem);
  modalEdit.close();
});

document.querySelector('.calendar-dates').addEventListener('click', e => {
  const $selectedControlBtn = closest(
    e.target,
    'item-control-btn',
    'calendar-dates'
  );
  const $selectedAddBtn = closest(e.target, 'item-add-btn', 'calendar-dates');
  const $selectedModifyBtn = closest(
    e.target,
    'item-edit-btn',
    'calendar-dates'
  );
  const $selectedDeleteBtn = closest(
    e.target,
    'item-delete-btn',
    'calendar-dates'
  );

  if ($selectedControlBtn) {
    $selectedControlBtn.nextElementSibling.classList.toggle('--show');
    return;
  }

  if ($selectedAddBtn) {
    const itemDate = $selectedAddBtn.parentElement.dataset.date;
    modalAdd.toggle(itemDate);
    return;
  }

  if ($selectedModifyBtn) {
    const selectedId =
      $selectedModifyBtn.parentElement.parentElement.dataset.id;
    const modifyItem = data.filter(item => item.id === +selectedId)[0];
    modalEdit.toggle(modifyItem);
    return;
  }

  if ($selectedDeleteBtn) {
    const itemId = $selectedDeleteBtn.parentElement.parentElement.dataset.id;
    const $parentNode =
      $selectedDeleteBtn.parentElement.parentElement.parentElement;
    deleteDataArray(itemId);
    deleteDataDOM(itemId, $parentNode);
  }
});