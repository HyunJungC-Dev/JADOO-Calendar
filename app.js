const ITEM_TYPE = [
  { id: 1, name: '✅ 투두리스트' },
  { id: 2, name: '📃 글' }
];

// state
let currentCategory = '1';
let nextDataId = 31;

let data = [
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
  },
  {
    id: 29,
    type: '1',
    category: '1',
    date: '2021-06-25',
    content: '자두 발표!! 😎😎😎',
    order: 1
  }
];

const $calendarDates = document.querySelector('.calendar');
const $modalAdd = document.querySelector('.modal-add');
const $modalEdit = document.querySelector('.modal-edit');

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
                  tabindex="-1"
                  readonly
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
          document
            .querySelector('#modalAddTypeBtn + .dropdown-menu')
            .classList.remove('--show');
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
            .map((category, idx) =>
              idx === chgSelectedIdx
                ? { ...category, selected: true }
                : category
            )
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

// 모달
const modalAdd = (() => {
  let isActive = false;
  let selectedDate;

  const $modal = document.querySelector('.modal-add');
  const $modalDim = document.querySelector('.modal-dim');
  const $titleYear = $modal.querySelector('.month');
  const $titleMonth = $modal.querySelector('.date');
  const $itemDate = $modal.querySelector('.modal-input-date');
  const $itemContent = $modal.querySelector('.modal-input-txt');

  return {
    isActive() {
      return isActive;
    },
    toggle(itemDate) {
      isActive = !isActive;
      $modal.classList.toggle('--show', isActive);
      $modalDim.classList.toggle('--show', isActive);
      document.body.classList.toggle('modal-open', isActive);

      if (!isActive) return;
      selectedDate = itemDate;
      const $categoryBtn = document.getElementById('modalAddCategoryBtn');
      $categoryBtn.value = currentCategory;
      $categoryBtn.textContent =
        categoryUtil.getCategoryById(currentCategory).name;

      $titleYear.textContent = itemDate.slice(5, 7);
      $titleMonth.textContent = itemDate.slice(8, 10);
      $itemDate.value = itemDate;
      $itemContent.focus();
    },
    close() {
      isActive = false;
      $modal.classList.remove('--show');
      $modalDim.classList.remove('--show');
      document.body.classList.remove('modal-open');
      document.getElementById(selectedDate.replaceAll('-', '')).focus();
    },
    reset() {
      const $itemTypeBtn = $modal.querySelector('#modalAddTypeBtn');
      $itemTypeBtn.value = ITEM_TYPE[0].id;
      $itemTypeBtn.textContent = ITEM_TYPE[0].name;
      $itemContent.value = '';
    }
  };
})();

const modalEdit = (() => {
  let isActive = false;
  let selectedDate;

  const $modal = document.querySelector('.modal-edit');
  const $modalDim = document.querySelector('.modal-dim');
  const $titleYear = $modal.querySelector('.month');
  const $titleMonth = $modal.querySelector('.date');
  const $itemDate = $modal.querySelector('.modal-input-date');
  const $itemContent = $modal.querySelector('.modal-input-txt');
  const $itemId = $modal.querySelector('.modal-input-id');

  return {
    isActive() {
      return isActive;
    },
    toggle({ id, date, category: categoryId, type: typeId, content }) {
      isActive = !isActive;
      $modal.classList.toggle('--show', isActive);
      $modalDim.classList.toggle('--show', isActive);
      document.body.classList.toggle('modal-open', isActive);

      if (!isActive) return;
      selectedDate = date;

      $itemId.value = id;
      $titleYear.textContent = date.slice(5, 7);
      $titleMonth.textContent = date.slice(8, 10);
      $itemDate.value = date;
      $itemContent.value = content;

      const $categoryBtn = document.getElementById('modalEditCategoryBtn');
      const $typeBtn = document.getElementById('modalEditTypeBtn');

      $categoryBtn.value = categoryId;
      $categoryBtn.textContent = categoryUtil.getCategoryById(categoryId).name;
      $typeBtn.value = typeId;
      $typeBtn.textContent = ITEM_TYPE.filter(
        type => type.id === +typeId
      )[0].name;

      $itemContent.focus();
    },
    close() {
      isActive = false;
      $modal.classList.remove('--show');
      $modalDim.classList.remove('--show');
      document.body.classList.remove('modal-open');
      document.getElementById(selectedDate.replaceAll('-', '')).focus();
    }
  };
})();

const trapModalFocus = (e, $firstFocusElem, $lastFocusElem) => {
  if (e.key !== 'Tab') return;

  // shift + tab
  if (e.shiftKey && document.activeElement === $firstFocusElem) {
    $lastFocusElem.focus();
    e.preventDefault();
    return;
  }

  if (document.activeElement === $lastFocusElem) {
    $firstFocusElem.focus();
    e.preventDefault();
  }
};

// 달력

const calendar = (() => {
  const $calendar = document.querySelector('.calendar');
  const $calendarGrid = document.querySelector('.calendar-dates');
  const $calendarYear = document.querySelector('.nav-year');
  const $calendarMonth = document.querySelector('.nav-month');

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date().getDate();
  const dateObj = {
    todayYear: year,
    todayMonth: month,
    firstYear: year, // 렌더링 된 가장 마지막 년
    lastYear: year,
    firstMonth: month, // 렌더링 된 가장 첫번째 년
    lastMonth: month,
    newCurMonth: month,
    newCurYear: year
  };
  //
  const dayTranslate = day => (day === 0 ? 6 : day - 1);
  const addMonth = (year, month) => [
    month + 1 > 12 ? year + 1 : year,
    month + 1 > 12 ? 1 : month + 1
  ];

  const subtractMonth = (year, month) => [
    month - 1 < 1 ? year - 1 : year,
    month - 1 < 1 ? 12 : month - 1
  ];

  const getCustomDate = (year, month) => {
    const firstDay = dayTranslate(new Date(year, month - 1).getDay());
    const firstDate = new Date(year, month - 1, 1).getDate();
    const lastDate = new Date(year, month, 0).getDate();
    const lastDay = dayTranslate(new Date(year, month, 0).getDay());
    const lastMonthDate = new Date(year, month - 1, 0).getDate();
    return { firstDate, firstDay, lastDate, lastDay, lastMonthDate };
  };

  const convertDateToString = (year, month, date, hasDash = true) => {
    const newYear = '' + year;
    const newMonth = month < 10 ? '0' + month : '' + month;
    const newDate = date < 10 ? '0' + date : '' + date;

    if (hasDash) return newYear + '-' + newMonth + '-' + newDate;
    return newYear + newMonth + newDate;
  };

  let $lastStandard = '';

  const setYearMonth = (year, month) => {
    dateObj.firstYear = +year; // 렌더링 된 가장 마지막 년
    dateObj.lastYear = +year;
    dateObj.firstMonth = +month; // 렌더링 된 가장 첫번째 년
    dateObj.lastMonth = +month;
  };

  const itemControllerInHTML = () => `
     <button class="item-control-btn" aria-label="아이템컨트롤러">
       <span class="icon icon-control"></span>
     </button>
     <div class="item-util">
       <button class="item-move-btn" aria-label="아이템이동">
         <span class="icon icon-move"></span>
       </button>
       <button class="item-edit-btn" aria-label="아이템수정">
         <span class="icon icon-edit"></span>
       </button>
       <button class="item-delete-btn" aria-label="아이템삭제">
         <span class="icon icon-delete"></span>
       </button>
     </div>`;

  const dateContentInHTML = (year, month, date, isToday = false) =>
    `
  <div class="calendar-date ${date % 7 === 0 ? 'standard' : ''} unactive ${
      isToday ? 'today' : ''
    }" data-date=${convertDateToString(year, month, date)}>
  <span class="calendar-date-txt">${date === 1 ? month + '. ' + date : date}
  ${
    date % 7 === 0
      ? `<span class="--hide">${year}</span><span class="--hide">${month}</span>`
      : ''
  }
  </span>
  <button class="item-add-btn" id="${convertDateToString(
    year,
    month,
    date,
    false
  )}" aria-label="${year}년 ${month}월 ${date}일 아이템 추가"><span class="icon icon-add"></span></button>
  <ul class="items">
  ${data
    // eslint-disable-next-line no-loop-func
    .filter(item => item.category === currentCategory)
    .filter(
      // eslint-disable-next-line no-loop-func
      item => item.date === convertDateToString(year, month, date)
    )
    .reduce(
      // eslint-disable-next-line no-loop-func
      (acc, item) =>
        acc +
        (item.type === '1'
          ? `<li class="item item-todo" data-id=${item.id}>
                  <input
                      class="item-todo-chkbox"
                      type="checkbox"
                      id="item${item.id}"
                  />
                  <span class="item-todo-chkicon"></span>
                  <label for="item${item.id}" class="item-todo-txt" >
                      ${item.content}
                  </label>
                  ${itemControllerInHTML()}
              </li>`
          : `
          <li class="item item-todo data-id=${item.id}">
              <p class="item-post-txt" id="item${item.id}">
                  ${item.content}
              </p>
            ${itemControllerInHTML()}

          </li>
        `),
      ''
    )}
</ul>
  </div>
`;

  // 오늘을 기준 달 렌더링
  const initCalendar = () => {
    const { firstDay, lastDate, lastDay, lastMonthDate } = getCustomDate(
      dateObj.todayYear,
      dateObj.todayMonth
    );
    let newDateInHTML = '';
    // 전달 날짜와 현재달 날짜가 같은 주에 있는 부분 렌더링
    for (let i = firstDay - 1; i >= 0; i -= 1) {
      newDateInHTML += dateContentInHTML(
        dateObj.todayYear,
        dateObj.todayMonth - 1,
        lastMonthDate - i,
        false
      );
    }
    // 현재 달 날짜 렌더링
    for (let i = 1; i <= lastDate; i += 1) {
      newDateInHTML += dateContentInHTML(
        dateObj.todayYear,
        dateObj.todayMonth,
        i,
        year === dateObj.todayYear && month === dateObj.todayMonth && date === i
      );
    }
    // 다음달 날짜와 현재달 날짜가 같은 주에 있는 부분 렌더링
    for (let i = 1; i <= 6 - lastDay; i += 1) {
      newDateInHTML += dateContentInHTML(
        dateObj.todayMonth + 1 > 12 ? dateObj.todayYear + 1 : dateObj.todayYear,
        dateObj.todayMonth + 1 > 12 ? 1 : dateObj.todayMonth + 1,
        i,
        false
      );
    }
    $calendarGrid.innerHTML = newDateInHTML;
  };

  const changeNextMonth = () => {
    [dateObj.lastYear, dateObj.lastMonth] = addMonth(
      dateObj.lastYear,
      dateObj.lastMonth
    );
    const { firstDay, lastDate, lastDay } = getCustomDate(
      dateObj.lastYear,
      dateObj.lastMonth
    );
    let newDateInHTML = '';

    // 다음 달 날짜 렌더링
    for (let i = 8 - firstDay === 8 ? 1 : 8 - firstDay; i <= lastDate; i += 1) {
      newDateInHTML += dateContentInHTML(
        dateObj.lastYear,
        dateObj.lastMonth,
        i
      );
    }

    // 다음달 날짜와 다다음달 날짜가 같은 주에 있는 부분 렌더링
    for (let i = 1; i <= 6 - lastDay; i += 1) {
      newDateInHTML += dateContentInHTML(
        dateObj.lastMonth + 1 > 12 ? dateObj.lastYear + 1 : dateObj.lastYear,
        dateObj.lastMonth + 1 > 12 ? 1 : dateObj.lastMonth + 1,
        i
      );
    }
    $calendarGrid.insertAdjacentHTML('beforeend', newDateInHTML);
  };

  const changePrevMonth = () => {
    [dateObj.firstYear, dateObj.firstMonth] = subtractMonth(
      dateObj.firstYear,
      dateObj.firstMonth
    );
    const { firstDay, lastDate, lastDay, lastMonthDate } = getCustomDate(
      dateObj.firstYear,
      dateObj.firstMonth
    );
    let newDateInHTML = '';
    // 전달 날짜와 전전달 날짜가 같은 주에 있는 부분 렌더링
    for (let i = firstDay - 1; i >= 0; i -= 1) {
      newDateInHTML += dateContentInHTML(
        dateObj.firstMonth - 1 < 1 ? dateObj.firstYear - 1 : dateObj.firstYear,
        dateObj.firstMonth - 1 < 1 ? 12 : dateObj.firstMonth - 1,
        lastMonthDate - i
      );
    }
    // 전달 렌더링
    for (
      let i = 1;
      i <= lastDate - (lastDay === 6 ? -1 : lastDay) - 1;
      i += 1
    ) {
      newDateInHTML += dateContentInHTML(
        dateObj.firstYear,
        dateObj.firstMonth,
        i
      );
    }
    $calendarGrid.insertAdjacentHTML('afterbegin', newDateInHTML);
  };

  const throttling = (() => {
    let throttleCheck;
    return {
      throttle(callback, milliseconds) {
        if (!throttleCheck) {
          throttleCheck = setTimeout(() => {
            callback();
            throttleCheck = false;
          }, milliseconds);
        }
      }
    };
  })();

  return {
    convertDateToString,
    renderCalendar: () => {
      initCalendar();
      changeNextMonth();
      changePrevMonth();
      $calendarYear.textContent = year + '';
      $calendarMonth.textContent = month < 10 ? '0' + month : '' + month;
    },
    observe: io => {
      throttling.throttle(() => {
        const $standards = document.querySelectorAll('.standard');
        [...$standards].forEach($standard => {
          io.observe($standard);
        });
      });
    },
    returnInitIO: new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const allUnActiveElements =
              document.querySelectorAll('.calendar-date');
            allUnActiveElements.forEach(item => item.classList.add('unactive'));
            [$calendarYear.textContent, $calendarMonth.textContent] =
              entry.target.dataset.date.split('-');
            const { firstDate, lastDate } = getCustomDate(
              +$calendarYear.textContent,
              +$calendarMonth.textContent
            );
            $lastStandard = entry.target;
            setYearMonth($calendarYear.textContent, $calendarMonth.textContent);
            const [, , standardDate] = entry.target.dataset.date.split('-');
            let node = entry.target;
            for (let date = 1; date < firstDate + +standardDate; date += 1) {
              node.classList.remove('unactive');
              const nextNode = node;
              node = nextNode.previousElementSibling;
            }
            node = entry.target;

            for (let date = 0; date < lastDate - +standardDate + 1; date += 1) {
              node.classList.remove('unactive');
              const nextNode = node;
              node = nextNode.nextElementSibling;
            }
          }
        });
      },
      {
        root: $calendar,
        rootMargin: '-49% 0px -49% 0px'
      }
    ),
    getCalendarElement: () => $calendar,
    getInitCalendar: initCalendar,
    getChangeNextMonth: changeNextMonth,
    getItemControllerInHTML: itemControllerInHTML,
    getChangePrevMonth: changePrevMonth,
    setDateReset: () => {
      dateObj.todayMonth = month;
      dateObj.todayYear = year;
      dateObj.firstYear = dateObj.todayYear; // 렌더링 된 가장 마지막 년
      dateObj.lastYear = dateObj.todayYear;
      dateObj.firstMonth = dateObj.todayMonth; // 렌더링 된 가장 첫번째 년
      dateObj.lastMonth = dateObj.todayMonth;
    },
    renderCalendarDateWithSavedDate: () => {
      dateObj.todayYear = +dateObj.newCurYear;
      dateObj.todayMonth = +dateObj.newCurMonth;
      dateObj.firstYear = dateObj.todayYear; // 렌더링 된 가장 마지막 년
      dateObj.lastYear = dateObj.todayYear;
      dateObj.firstMonth = dateObj.todayMonth; // 렌더링 된 가장 첫번째 년
      dateObj.lastMonth = dateObj.todayMonth;
      initCalendar();
      changeNextMonth();
      changePrevMonth();
      $calendar.scrollTo(
        0,
        $lastStandard.getBoundingClientRect().top + $calendar.clientHeight * 1.4
      );
      $calendarYear.textContent = dateObj.todayYear + '';
      $calendarMonth.textContent =
        dateObj.todayMonth < 10
          ? '0' + dateObj.todayMonth
          : '' + dateObj.todayMonth;
      document.getElementById('mainCategoryBtn').textContent =
        categoryUtil.getCategoryById(currentCategory).name;
    },
    changeToToday: todayPosition => {
      dateObj.todayYear = year;
      dateObj.todayMonth = month;
      dateObj.firstYear = year;
      dateObj.lastYear = year;
      dateObj.firstMonth = dateObj.todayMonth;
      dateObj.lastMonth = dateObj.todayMonth;
      setYearMonth(year, month);
      initCalendar();
      changeNextMonth();
      changePrevMonth();
      $lastStandard = document.querySelector('.today');
      $calendar.scrollTo(0, todayPosition.top - $calendar.clientHeight / 2);
      $calendarYear.textContent = year + '';
      $calendarMonth.textContent = month < 10 ? '0' + month : '' + month;
    },
    scroll: io => {
      throttling.throttle(() => {
        if ($calendar.scrollTop < 1) {
          changePrevMonth();
          $calendar.scrollTop = 640;
          const $standards = document.querySelectorAll('.standard');
          [...$standards].forEach($standard => {
            io.observe($standard);
          });
        }
        if (
          $calendar.scrollHeight - Math.ceil($calendar.scrollTop) <=
          $calendar.clientHeight
        ) {
          changeNextMonth();
          const $standards = document.querySelectorAll('.standard');
          [...$standards].forEach($standard => {
            io.observe($standard);
          });
        }
      }, 500);
    }
  };
})();

const addDataArray = ({ date, category, type, content }) => {
  data = [
    ...data,
    {
      id: nextDataId,
      type,
      category,
      date,
      content,
      order:
        data.filter(item => item.date === date && item.category === category)
          .length + 1
    }
  ];
};

const addDataDomTree = ({ date, type, content, category }) => {
  const dates = [...document.querySelector('.calendar-dates').children];
  const $date = dates.find(item => item.dataset.date === date);
  const innerDate =
    type === '1'
      ? `<li class="item item-todo" data-id=${nextDataId}>
             <input
                 class="item-todo-chkbox"
                 type="checkbox"
                 id="item${nextDataId}"
             />
             <span class="item-todo-chkicon"></span>
             <label for="item${nextDataId}" class="item-todo-txt" >
                 ${content}
             </label>
             ${calendar.getItemControllerInHTML()}
         </li>`
      : `
         <li class="item item-todo" data-id=${nextDataId}>
             <p class="item-post-txt" id="item${nextDataId}">
                 ${content}
             </p>
             ${calendar.getItemControllerInHTML()}
         </li>`;

  if (category === currentCategory) {
    $date.lastElementChild.insertAdjacentHTML('beforeend', innerDate);
    return;
  }

  currentCategory = category;
  categoryUtil.select(+currentCategory);
  calendar.renderCalendarDateWithSavedDate();
};

const deleteDataArray = itemId => {
  data = data.filter(item => item.id !== itemId);
};

const deleteDataDOM = (itemId, $parentNode) => {
  const $nodeWillDeleted = [...$parentNode.children].find(
    item => item.dataset.id === itemId
  );
  $parentNode.removeChild($nodeWillDeleted);
};

const modifyDataArray = ({ id, date, content, order }) => {
  const modifiedData = data.filter(item => item.id === +id)[0];
  if (date) modifiedData.date = date;
  if (content) modifiedData.content = content;
  if (order) modifiedData.order = order;
};

const modifyDataDOM = ({ id, type, content }) => {
  const $modifyItem = document.getElementById(`item${id}`);

  if (type === '1') {
    $modifyItem.nextElementSibling.nextElementSibling.textContent = content;
  } else {
    $modifyItem.textContent = content;
  }
};

// 이벤트 리스너
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

  const $modalAddTypeBtn = document.getElementById('modalAddTypeBtn');

  $modalAddTypeBtn.addEventListener('click', e => {
    e.stopPropagation();
    document
      .querySelector('#modalAddCategoryBtn + .dropdown-menu')
      .classList.remove('--show');
    dropdownTypeModalAdd.toggle();
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

  $modalAdd.addEventListener('click', () => {
    [...document.querySelectorAll('.modal-add .dropdown-menu')].forEach(
      $dropdown => {
        $dropdown.classList.remove('--show');
      }
    );
  });

  document.querySelector('.modal-dim').addEventListener('click', () => {
    if (modalAdd.isActive()) {
      [...document.querySelectorAll('.modal-add .dropdown-menu')].forEach(
        $dropdown => {
          $dropdown.classList.remove('--show');
        }
      );
      modalAdd.reset();
      modalAdd.close();
    }
    if (modalEdit.isActive()) modalEdit.close();
  });
});

document.getElementById('mainCategoryBtn').addEventListener('click', () => {
  dropdownCategoryMain.toggle();
});

document
  .querySelector('#categoryMain .dropdown-menu')
  .addEventListener('click', e => {
    const $dropdownOption = closest(
      e.target,
      'dropdown-option-icon',
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

      currentCategory = $dropdownOption.dataset.cateId;
      calendar.renderCalendarDateWithSavedDate();
    }
  });

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

$modalAdd.addEventListener('submit', e => {
  e.preventDefault();

  const newItem = {
    date: $modalAdd.itemDate.value,
    category: $modalAdd.itemCategory.value,
    type: $modalAdd.itemType.value,
    content: $modalAdd.itemContent.value
  };

  addDataArray(newItem);
  addDataDomTree(newItem);
  nextDataId += 1;

  modalAdd.close();
  modalAdd.reset();
});

$modalEdit.addEventListener('submit', e => {
  e.preventDefault();

  const editItem = {
    id: e.currentTarget.itemId.value,
    date: e.currentTarget.itemDate.value,
    type: e.currentTarget.itemType.value,
    content: e.currentTarget.itemContent.value
  };

  modifyDataArray(editItem);
  modifyDataDOM(editItem);
  modalEdit.close();
});

$modalAdd.addEventListener('keydown', e => {
  trapModalFocus(
    e,
    document.querySelector('.modal-add #modalAddCategoryBtn'),
    document.querySelector('.modal-add .modal-close-btn')
  );
});

$modalEdit.addEventListener('keydown', e => {
  trapModalFocus(
    e,
    document.querySelector('.modal-edit #modalEditContent'),
    document.querySelector('.modal-edit .modal-close-btn')
  );
});

document.body.addEventListener('keyup', e => {
  if (e.key !== 'Escape') return;
  if (modalAdd.isActive()) modalAdd.close();
  if (modalEdit.isActive()) modalEdit.close();
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

// 드래그 앤 드롭
$calendarDates.addEventListener('mousedown', e => {
  const initialMousePos = {
    x: e.clientX,
    y: e.clientY
  };

  const $selectedMoveBtn = closest(e.target, 'item-move-btn', 'calendar-dates');

  if (!$selectedMoveBtn) return;

  const draggable = closest(e.target, 'item', 'calendar-dates');
  draggable.classList.add('dragging');

  e.target.style['pointer-events'] = 'none';
  e.target.parentElement.style['pointer-events'] = 'none';
  e.target.parentElement.parentElement.style['pointer-events'] = 'none';

  [...document.querySelectorAll('.item-control-btn')].forEach(
    $itemControlBtn => {
      $itemControlBtn.classList.toggle('--invisible');
    }
  );

  const eventFunctions = (() => {
    let $container = null;
    let $prevContainer = null;
    let $nextElement = null;
    let $prevNextElement = null;

    return {
      mouseMoveEvent(e) {
        draggable.style.transform = `translate3d(${
          e.clientX - initialMousePos.x
        }px, ${e.clientY - initialMousePos.y}px, 0)`;
      },
      mouseOverEvent(e) {
        if ($prevNextElement) $prevNextElement.style.border = 'none';
        if ($prevContainer) $prevContainer.style.border = 'none';

        $container = e.target.closest('.items');
        if (!$container) return;

        $nextElement = e.target.closest('li');

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
          $prevNextElement = $prevElement;
          return;
        }

        // 이동할 위치에 현재 이동중인 자신의 일정만 있는 경우
        if ($lastElement === draggable) {
          $container.style['border-top'] = 'solid 5px gray';
          $prevContainer = $container;
        }

        // 이동할 위치에 현재 이동중인 자신의 일정이 있는데
        // 그게 이동할 위치의 마지막이 아니고 들어가려고 하는 위치는 마지막인 경우
        if ($lastElement !== draggable) {
          $lastElement.style['border-bottom'] = 'solid 5px gray';
          $prevNextElement = $lastElement;
        }
      },
      mouseUpEvent() {
        draggable.classList.remove('dragging');
        draggable.style.transform = 'none';

        if ($prevNextElement) $prevNextElement.style.border = 'none';
        if ($prevContainer) $prevContainer.style.border = 'none';

        e.target.style['pointer-events'] = 'auto';
        e.target.parentElement.style['pointer-events'] = 'auto';
        e.target.parentElement.parentElement.style['pointer-events'] = 'auto';

        [...document.querySelectorAll('.item-control-btn')].forEach(
          $itemControlBtn => {
            $itemControlBtn.classList.toggle('--invisible');
          }
        );

        $calendarDates.removeEventListener(
          'mousemove',
          eventFunctions.mouseMoveEvent
        );
        $calendarDates.removeEventListener(
          'mouseover',
          eventFunctions.mouseOverEvent
        );
        document.removeEventListener('mouseup', eventFunctions.mouseUpEvent);

        if (!$container) return;

        if (!$nextElement) {
          $container.appendChild(draggable);
          const editItem = {
            id: draggable.dataset.id,
            date: $container.parentElement.dataset.date,
            order:
              $container.lastElementChild === draggable
                ? null
                : data.filter(
                    item =>
                      item.category === currentCategory &&
                      item.date === $container.parentElement.dataset.date
                  ).length + 1
          };
          modifyDataArray(editItem);

          return;
        }

        $container.insertBefore(draggable, $nextElement);
        [...$container.children].forEach(($li, idx) => {
          data.find(item => item.id === +$li.dataset.id).order = idx + 1;
        });
        data.find(item => item.id === +draggable.dataset.id).date =
          $container.parentElement.dataset.date;
      }
    };
  })();

  $calendarDates.addEventListener('mousemove', eventFunctions.mouseMoveEvent);
  $calendarDates.addEventListener('mouseover', eventFunctions.mouseOverEvent);
  document.addEventListener('mouseup', eventFunctions.mouseUpEvent);
});

$calendarDates.addEventListener('keyup', e => {
  const key = e.key.replace('Arrow', '');
  const { target } = e;
  let nextDate;

  if (
    target.classList.contains('item-add-btn') &&
    key.match(/Up|Down|Left|Right/)
  ) {
    const currYear = +target.id.slice(0, 4);
    const currMonth = +target.id.slice(4, 6) - 1;
    const currDate = +target.id.slice(6, 8);

    switch (key) {
      case 'Right':
        nextDate = new Date(currYear, currMonth, currDate + 1);
        break;
      case 'Left':
        nextDate = new Date(currYear, currMonth, currDate - 1);
        break;
      case 'Up':
        nextDate = new Date(currYear, currMonth, currDate - 7);
        break;
      case 'Down':
        nextDate = new Date(currYear, currMonth, currDate + 7);
        break;
      default:
    }

    nextDate = calendar.convertDateToString(
      nextDate.getFullYear(),
      nextDate.getMonth() + 1,
      nextDate.getDate(),
      false
    );
    e.preventDefault();
    document.getElementById(nextDate).focus();
  }
});

// 달력 코드
calendar.renderCalendar();

const todayPosition = document.querySelector('.today').getBoundingClientRect();

calendar.observe(calendar.returnInitIO);
calendar.changeToToday(todayPosition);

document
  .querySelector('.calendar')
  .addEventListener('scroll', () => calendar.scroll(calendar.returnInitIO));

document
  .querySelector('.move-today-btn')
  .addEventListener('click', () => calendar.changeToToday(todayPosition));
