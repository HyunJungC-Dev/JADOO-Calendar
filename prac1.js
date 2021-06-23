/**
 * 달력 관련 소스코드
 * 
 */
const dayTranslate = day => day === 0 ? 6 : day - 1;

const getCustomDate = (year, month) =>{
    const firstDay = dayTranslate(new Date(year, month-1).getDay());
    const lastDate = new Date(year, month, 0).getDate();
    const lastDay = dayTranslate(new Date(year, month, 0).getDay());
    const lastMonthDate = new Date(year, month-1, 0).getDate();
    return {firstDay, lastDate, lastDay, lastMonthDate};
};

const convertDateToString = (year, month, date) =>{
    const newYear = ''+year;
    const newMonth = month < 10 ? '0'+month : ''+month;
    const newDate = date < 10 ? '0'+date : ''+date;
    return newYear+'-'+newMonth+'-'+newDate
}

const currentCategory = '네카';

// 클로저
const calendar = (() =>{
  const $calendar = document.querySelector('.calendar');
  const $calendarGrid = document.querySelector('.calendar-dates');
  const $calendarYear = document.querySelector('.nav-year');
  const $calendarMonth = document.querySelector('.nav-month');
  const $standards = document.querySelectorAll('.standard');

  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth()+1;
  const date = dateObj.getDate();
  let currentMonth = month; 
  let currentYear = year;
  let firstYear = currentYear; // 렌더링 된 가장 마지막 년
  let lastYear = currentYear; // " 월
  let firstMonth = currentMonth; // 렌더링 된 가장 첫번째 년
  let lastMonth = currentMonth; 

  const io = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            $calendarYear.textContent = entry.target.children[0].children[0].textContent+"";
            $calendarMonth.textContent = entry.target.children[0].children[1].textContent+"";
            const {lastDate} = getCustomDate(+entry.target.children[0].children[0].textContent, + entry.target.children[0].children[1].textContent);
            let node = entry.target.children[0];
            for(let date = 0; date < lastDate; date += 1){
                node.classList.remove('unactive');
                const nextNode = node;
                node = nextNode.parentElement.nextElementSibling.children[0];
            }
        }else{
            const {lastDate} = getCustomDate(+entry.target.children[0].children[0].textContent, +entry.target.children[0].children[1].textContent);
            let node = entry.target.children[0];
            for(let date = 0; date < lastDate; date += 1){
                node.classList.add('unactive');
                const nextNode = node;
                node = nextNode.parentElement.nextElementSibling.children[0];
            }
          }
    } );
  }, {
      root:$calendar,
      rootMargin: '0% 0px -50% 0px'
  });
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
  </div>`
    ;

  const initCalendar = () =>{
    const {firstDay, lastDate, lastDay, lastMonthDate} = getCustomDate(currentYear, currentMonth);
    let temp = '';
    for(let i = firstDay-1; i >= 0; i -= 1)
    {
        temp +=  `
            <div class="calendar-date" data-date=${convertDateToString(currentYear, currentMonth-1, i)}>
            <span class="calendar-date-txt unactive">${lastMonthDate-i}</span>
            <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth} 월 ${lastMonthDate-i}일 아이템 추가"><span class="icon icon-add"></span></button>
            <ul class="items">
            ${data
                .filter(item => item.category === currentCategory)
                // eslint-disable-next-line no-loop-func
                .filter(item => item.date === convertDateToString(currentYear, currentMonth, i))
                // eslint-disable-next-line no-loop-func
                .reduce((acc, item) => {
                    acc += item.type === 'todo' ? 
                        `
                        <li class="item item-todo" data-id=${item.id}>
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label class="item-todo-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                                ${item.content}
                            </label>
                            ${itemControllerInHTML()}
                        </li>`
                    :
                    `
                    <li class="item item-todo data-id=${item.id}">
                        <p class="item-post-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                            ${item.content}
                        </p>
                      ${itemControllerInHTML()}
                    </li>
                  `
                  return acc;
                }, [])}
        </ul>
            </div>
        `;

    }
    // current month
    
    for(let i = 1; i <= lastDate; i += 1){
        temp += 
        `
        <div class="calendar-date ${year === currentYear && month === currentMonth && date===i? 'today' : ''} ${i % 7 === 1 ? 'standard' : ''}"  data-date=${convertDateToString(currentYear, currentMonth, i)}>
        <span class="calendar-date-txt">${i === 1 ? currentMonth + '. ' + i : i} ${i === 1 ? `<span class="--hide">${currentYear}</span><span class="--hide">${currentMonth}</span>`:''}</span>
        <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth} 월 ${i}일 아이템 추가"><span class="icon icon-add"></span></button>
        <ul class="items">
            ${data
                .filter(item => item.category === currentCategory)
                // eslint-disable-next-line no-loop-func
                .filter(item => item.date === convertDateToString(currentYear, currentMonth, i))
                // eslint-disable-next-line no-loop-func
                .reduce((acc, item) => {
                    acc += item.type === 'todo' ? 
                        `
                        <li class="item item-todo" data-id=${item.id}>
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label class="item-todo-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                                ${item.content}
                            </label>
                          ${itemControllerInHTML()}
                        </li>`
                    :
                    `
                    <li class="item item-todo" data-id=${item.id}>
                        <p class="item-post-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                            ${item.content}
                        </p>
                        ${itemControllerInHTML()}
                    </li>
                  `
                  return acc;
                }, [])}
        </ul>
        </div>`
    }   
    // next month
    for(let i = 1; i <= 6-lastDay; i += 1){ 
        temp += 
        `
        <div class="calendar-date ${i === 1 ? 'standard' : ''}" data-date=${convertDateToString(currentYear, currentMonth+1, i)}>
        <span class="calendar-date-txt unactive">${i === 1 ? currentMonth + 1 + '. ' + i : i} ${i === 1 ? `<span class="--hide">${currentMonth+1 > 12 ? currentYear + 1 : currentYear}</span><span class="--hide">${currentMonth+1 > 12 ? 1 : currentMonth + 1}</span>`:''}</span></span>
        <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth+1} 월 ${i}일 아이템 추가"><span class="icon icon-add"></span></button>
        <ul class="items">
            ${data
                .filter(item => item.category === currentCategory)
                // eslint-disable-next-line no-loop-func
                .filter(item => item.date === convertDateToString(currentYear, currentMonth, i))
                // eslint-disable-next-line no-loop-func
                .reduce((acc, item) => {
                    acc += item.type === 'todo' ? 
                        `
                        <li class="item item-todo" data-id=${item.id}>
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label class="item-todo-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                                ${item.content}
                            </label>
                            ${itemControllerInHTML()}
                        </li>`
                    :
                    `
                    <li class="item item-todo" data-id=${item.id}>
                        <p class="item-post-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                            ${item.content}
                        </p>
                        ${itemControllerInHTML()}
                    </li>
                  `
                  return acc;
                }, [])}
        </ul>
        </div>
        `;
        
    }
    $calendarGrid.innerHTML = temp;
  }
  const changeNextMonth = () =>{
      lastMonth += 1
      lastYear = lastMonth > 12 ? lastYear + 1 : lastYear;
      lastMonth = lastMonth > 12 ? 1 : lastMonth;
      const {firstDay, lastDate, lastDay} = getCustomDate(lastYear, lastMonth);
      let temp = '';

      for(let i = 8-firstDay === 8 ? 1 : 8-firstDay; i <= lastDate; i += 1){
          temp += `
          <div class="calendar-date ${i === 1 ? 'standard' : ''} " data-date=${convertDateToString(lastYear, lastMonth, i)}>
          <span class="calendar-date-txt unactive"> ${i === 1 ? lastMonth + '. ' + i : i} ${i === 1 ? `<span class="--hide">${lastYear}</span><span class="--hide">${lastMonth}</span>`:''}</span>
          <button class="item-add-btn" aria-label="${lastYear}년 ${lastMonth} 월 ${i === 1 ? lastMonth + ',' + i : i}일 아이템 추가"><span class="icon icon-add"></span></button>
          <ul class="items">
              ${data
                  .filter(item => item.category === currentCategory)
                  // eslint-disable-next-line no-loop-func
                  .filter(item => item.date === convertDateToString(lastYear, lastMonth, i))
                  // eslint-disable-next-line no-loop-func
                  .reduce((acc, item) => {
                      acc += item.type === 'todo' ? 
                          `
                          <li class="item item-todo" data-id=${item.id}>
                              <input
                                  class="item-todo-chkbox"
                                  type="checkbox"
                                  id="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}"
                              />
                              <span class="item-todo-chkicon"></span>
                              <label class="item-todo-txt" for="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}">
                                  ${item.content}
                              </label>
                              ${itemControllerInHTML()}
                          </li>`
                      :
                      `
                      <li class="item item-todo" data-id=${item.id}>
                          <p class="item-post-txt" for="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}">
                              ${item.content}
                          </p>
                          ${itemControllerInHTML()}
                      </li>
                    `
                    return acc;
                  }, [])}
          </ul>
          </div>
          `;
      }
      // next month
      for(let i = 1; i <= 6-lastDay; i += 1){
          temp += `
          <div class="calendar-date ${i === 1 ? 'standard' : ''} " data-date=${convertDateToString(lastYear, lastMonth+1, i)}>
          <span class="calendar-date-txt unactive"> ${i === 1 ? (lastMonth >= 12 ? 0 : lastMonth) + 1 + '. ' + i : i} ${i === 1 ? `<span class="--hide">${lastMonth+1 > 12 ? lastYear + 1 : lastYear}</span><span class="--hide">${lastMonth+1 > 12 ? 1 : lastMonth + 1}</span>`:''}</span>
          </span>
          <button class="item-add-btn" aria-label="${lastYear}년 ${lastMonth+1} 월 ${i === 1 ? (lastMonth >= 12 ? 0 : lastMonth) + 1 + '. ' + i : i}일 아이템 추가"><span class="icon icon-add"></span></button>
          <ul class="items">
              ${data
                  .filter(item => item.category === currentCategory)
                  // eslint-disable-next-line no-loop-func
                  .filter(item => item.date === convertDateToString(lastYear, lastMonth, i))
                  // eslint-disable-next-line no-loop-func
                  .reduce((acc, item) => {
                      acc += item.type === 'todo' ? 
                          `
                          <li class="item item-todo" data-id=${item.id}>
                              <input
                                  class="item-todo-chkbox"
                                  type="checkbox"
                                  id="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}"
                              />
                              <span class="item-todo-chkicon"></span>
                              <label class="item-todo-txt" for="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}">
                                  ${item.content}
                              </label>
                              ${itemControllerInHTML()}
                          </li>`
                      :
                      `
                      <li class="item item-todo" data-id=${item.id}>
                          <p class="item-post-txt" for="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}">
                              ${item.content}
                          </p>
                          ${itemControllerInHTML()}
                      </li>
                    `
                    return acc;
                  }, [])}
          </ul>
          </div>
          `;

      }
      $calendarGrid.insertAdjacentHTML('beforeend', temp);
  }
  const changePrevMonth = () =>{
      firstMonth -= 1
      firstYear = firstMonth < 1 ? firstYear - 1 : firstYear;
      firstMonth = firstMonth < 1 ? 12 : firstMonth;
      const {firstDay, lastDate, lastDay, lastMonthDate} = getCustomDate(firstYear, firstMonth);

      let temp = '';
      for(let i = firstDay-1; i >= 0; i -= 1)
      {
          temp += 
          `
          <div class="calendar-date " data-date=${convertDateToString(firstYear, firstMonth-1, lastMonthDate - i)}>
          <span class="calendar-date-txt unactive"> ${lastMonthDate-i === 1 ? firstMonth + '.'+ lastMonthDate - i : lastMonthDate - i}
          </span>
          <button class="item-add-btn" aria-label="${firstYear}년 ${firstMonth} 월 ${lastMonthDate-i === 1 ? firstMonth + '.'+ lastMonthDate - i : lastMonthDate - i}일 아이템 추가"><span class="icon icon-add"></span></button>
          <ul class="items">
              ${data
                  .filter(item => item.category === currentCategory)
                  // eslint-disable-next-line no-loop-func
                  .filter(item => item.date === convertDateToString(firstYear, firstMonth, i))
                  // eslint-disable-next-line no-loop-func
                  .reduce((acc, item) => {
                      acc += item.type === 'todo' ? 
                          `
                          <li class="item item-todo">
                              <input
                                  class="item-todo-chkbox"
                                  type="checkbox"
                                  id="item-${convertDateToString(firstYear, firstMonth, i)}-${item.id}"
                              />
                              <span class="item-todo-chkicon"></span>
                              <label class="item-todo-txt" for="item-${convertDateToString(firstYear, firstMonth, i)}-${item.id}">
                                  ${item.content}
                              </label>
                              ${itemControllerInHTML()}
                          </li>`
                      :
                      `
                      <li class="item item-todo">
                          <p class="item-post-txt" for="item-${convertDateToString(firstYear, firstMonth, i)}-${item.id}">
                              ${item.content}
                          </p>
                      </li>
                    `
                    return acc;
                  }, [])}
          </ul>
          </div>`;
      
      }
      for(let i = 1; i <= lastDate - (lastDay === 6 ? 0 : lastDay) -1; i += 1){
          temp += `
          <div class="calendar-date ${i === 1 ? 'standard' : ''} " data-date=${convertDateToString(firstYear, firstMonth, i)}>
          <span class="calendar-date-txt unactive">  ${i === 1 ? firstMonth +'.' + i : i}
          ${i === 1 ? `<span class="hidden">${firstYear}</span><span class="hidden">${firstMonth}</span>`:''}</span>
          </span>
          <button class="item-add-btn" aria-label="${firstYear}년 ${firstMonth} 월 $${i === 1 ? firstMonth +'.' + i : i}일 아이템 추가"><span class="icon icon-add"></span></button>
          <ul class="items">
              ${data
                  .filter(item => item.category === currentCategory)
                  // eslint-disable-next-line no-loop-func
                  .filter(item => item.date === convertDateToString(firstYear, firstMonth, i))
                  // eslint-disable-next-line no-loop-func
                  .reduce((acc, item) => {
                      acc += item.type === 'todo' ? 
                          `
                          <li class="item item-todo">
                              <input
                                  class="item-todo-chkbox"
                                  type="checkbox"
                                  id="item-${convertDateToString(firstYear, firstMonth, i)}-${item.id}"
                              />
                              <span class="item-todo-chkicon"></span>
                              <label class="item-todo-txt" for="item-${convertDateToString(firstYear, firstMonth, i)}-${item.id}">
                                  ${item.content}
                              </label>
                          </li>`
                      :
                      `
                      <li class="item item-todo">
                          <p class="item-post-txt" for="item-${convertDateToString(firstYear, firstMonth, i)}-${item.id}">
                              ${item.content}
                          </p>
                          ${itemControllerInHTML()}
                      </li>
                    `
                    return acc;
                  }, [])}
          </ul>
          </div>
          `
      }
      $calendarGrid.insertAdjacentHTML('afterbegin', temp);
  }
  const throttling = (() => {
    let throttleCheck;
    return {
        throttle(callback, milliseconds){
            if(!throttleCheck){
                throttleCheck = setTimeout(() => {
                    callback();
                    throttleCheck = false;
                }, milliseconds);
            }
        }
    };
})();
  return {
    renderCalendar: () => { // 전체 렌더
      initCalendar();
      changeNextMonth();
      changePrevMonth();
      $calendarYear.textContent = year+"";
      $calendarMonth.textContent = month+"";

    },
    observe: () =>{
      [...$standards].forEach($standard => {
          io.observe($standard);
      })
    },
    getCalendarElement: () => $calendar,
    getIntersectionObserver: () => io,
    getInitCalendar : initCalendar,
    getChangeNextMonth : changeNextMonth,
    getItemControllerInHTML : itemControllerInHTML,
    getChangePrevMonth : changePrevMonth,
    changeToToday : todayPosition => {
      currentYear = year;
      currentMonth = month;
      firstYear = year;
      lastYear = year;
      firstMonth = currentMonth;
      lastMonth = currentMonth;
      initCalendar();
      changeNextMonth();
      changePrevMonth();
      $calendar.scrollTo(0, todayPosition.top - ($calendar.clientHeight / 2));
      $calendarYear.textContent = year+"";
      $calendarMonth.textContent = month+"";
    },
    scroll: () =>{
      throttling.throttle(()=>{
        if($calendar.scrollTop < 1){
            changePrevMonth();
            $calendar.scrollTop = 640;
            const $standards = document.querySelectorAll('.standard');
            [...$standards].forEach($standard => {
                io.observe($standard);
            })
        }
        if ($calendar.scrollHeight - Math.ceil($calendar.scrollTop) <= $calendar.clientHeight) {
          changeNextMonth();
            const $standards = document.querySelectorAll('.standard');
            [...$standards].forEach($standard => {
                io.observe($standard);
            })
        }
    }, 500);
    },
  }
})();
// 코드 실행 부분
calendar.renderCalendar();

const $calendar = calendar.getCalendarElement();
const $todayBtn = document.querySelector('.move-today-btn');
const todayPosition = document.querySelector('.today').getBoundingClientRect();

calendar.changeToToday(todayPosition);
$calendar.addEventListener('scroll', () => calendar.scroll());
$todayBtn.addEventListener('click', () => calendar.changeToToday(todayPosition));

/**
 * 모달 창 관련 소스 코드
 * 
 */
const addDataArray = (itemDate, itemCategory, itemType, itemContent) =>{
    data = [...data, 
        {
            id: data[data.length - 1].id + 1, 
            type: itemType,
            category: itemCategory,
            date : itemDate,
            content: itemContent,
            order: data.filter(item => item.date === itemDate).length+1
        }
    ]
}

const addDataDomTree = (itemDate, itemCategory, itemType, itemContent) =>{
    const dates = [...document.querySelector('.calendar-dates').children];
    const $date = dates.find(item => item.dataset.date === itemDate);
    const innerDate = itemType === 'todo' ? 
                `<li class="item item-todo">
                    <input
                        class="item-todo-chkbox"
                        type="checkbox"
                        id="item-${itemDate}-${data.length}"
                    />
                    <span class="item-todo-chkicon"></span>
                    <label class="item-todo-txt" for="item-${itemDate}-${data.length}">
                        ${itemContent}
                    </label>
                    ${calendar.getItemControllerInHTML()}
                </li>`
            :
            `
            <li class="item item-todo">
                <p class="item-post-txt" for="item-${itemDate}-${data.length}">
                    ${itemContent}
                </p>
                ${calendar.getItemControllerInHTML()}
            </li>`
        $date.lastElementChild.insertAdjacentHTML('beforeend', innerDate);
    }
const deleteDataArray = itemId =>{
  data = data.filter(item => item.id !== itemId);
}
const deleteDataDOM = (itemId, $parentNode) =>{
  const $nodeWillDeleted = [...$parentNode.children].find(item => item.dataset.id === itemId);
  $parentNode.removeChild($nodeWillDeleted);
}
const modifyDataArray = (itemId, itemDate, itemCategory, itemType, itemContent) =>{
  const modifiedData = data.filter(item => item.id === itemId);
  modifiedData.date = itemDate;
  modifiedData.category = itemCategory;
  modifiedData.type = itemType;
  modifiedData.content = itemContent;
  data = {modifiedData, ...data};

} 
const modifyDataDOM = (itemId, itemDate, itemCategory, itemType, itemContent) =>{
  const nodeWillModifieds = document.querySelectorAll('.item');
  const nodeWillModified = [...nodeWillModifieds].find(item => item.dataset.id === itemId);
  nodeWillModified.querySelector('label').textContent = itemContent;
}