/**
 * 달력 관련 소스코드
 *
 */
const dayTranslate = day => day === 0 ? 6 : day - 1;

const getCustomDate = (year, month) =>{
    const firstDay = dayTranslate(new Date(year, month-1).getDay());
    const firstDate = new Date(year, month-1, 1).getDate();
    const lastDate = new Date(year, month, 0).getDate();
    const lastDay = dayTranslate(new Date(year, month, 0).getDay());
    const lastMonthDate = new Date(year, month-1, 0).getDate();
    return {firstDate, firstDay, lastDate, lastDay, lastMonthDate};
};

const convertDateToString = (year, month, date) =>{
    const newYear = ''+year;
    const newMonth = month < 10 ? '0'+month : ''+month;
    const newDate = date < 10 ? '0'+date : ''+date;
    return newYear+'-'+newMonth+'-'+newDate
}

const currentCategory = '1';

// 클로저
const calendar = (() =>{
  const $calendar = document.querySelector('.calendar');
  const $calendarGrid = document.querySelector('.calendar-dates');
  const $calendarYear = document.querySelector('.nav-year');
  const $calendarMonth = document.querySelector('.nav-month');

  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth()+1;
  const date = dateObj.getDate();
  let currentMonth = month; 
  let currentYear = year;
  let firstYear = currentYear; // 렌더링 된 가장 마지막 년
  let lastYear = currentYear; 
  let firstMonth = currentMonth; // 렌더링 된 가장 첫번째 년
  let lastMonth = currentMonth; 

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
            <div class="calendar-date ${ i % 7 === 0 ? 'standard' : ''} unactive" data-date=${convertDateToString(currentYear, currentMonth-1, i)}>
            <span class="calendar-date-txt">${lastMonthDate-i}</span>
            <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth} 월 ${lastMonthDate-i}일 아이템 추가"><span class="icon icon-add"></span></button>
            <ul class="items">
            ${data
              .filter(item => item.category === currentCategory)
              // eslint-disable-next-line no-loop-func
              .filter(
                item =>
                  item.date ===
                  convertDateToString(currentYear, currentMonth, i)
              )
              // eslint-disable-next-line no-loop-func
              .reduce((acc, item) => {
                acc +=
                  item.type === '1'
                    ? `
                        <li class="item item-todo" data-id=${item.id}>
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(
                                  currentYear,
                                  currentMonth,
                                  i
                                )}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label for="item-${convertDateToString(
                              currentYear,
                              currentMonth,
                              i
                            )}-${item.id}" class="item-todo-txt" >
                                ${item.content}
                            </label>
                            ${itemControllerInHTML()}
                        </li>`
                    : `
                    <li class="item item-todo data-id=${item.id}">
                        <p class="item-post-txt" id="item-${convertDateToString(
                          currentYear,
                          currentMonth,
                          i
                        )}-${item.id}">
                            ${item.content}
                        </p>
                      ${itemControllerInHTML()}

                    </li>
                  `;
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
        <div class="calendar-date ${year === currentYear && month === currentMonth && date===i? 'today' : ''} ${ i % 7 === 0 ? 'standard' : ''}"  data-date=${convertDateToString(currentYear, currentMonth, i)}>
        <span class="calendar-date-txt">${i === 1 ? currentMonth + '. ' + i : i} ${i % 7 === 0 ? `<span class="--hide">${currentYear}</span><span class="--hide">${currentMonth}</span>`:''}</span>
        <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth} 월 ${i}일 아이템 추가"><span class="icon icon-add"></span></button>
        <ul class="items">
            ${data
              .filter(item => item.category === currentCategory)
              // eslint-disable-next-line no-loop-func
              .filter(
                item =>
                  item.date ===
                  convertDateToString(currentYear, currentMonth, i)
              )
              // eslint-disable-next-line no-loop-func
              .reduce((acc, item) => {
                acc +=
                  item.type === '1'
                    ? `
                        <li class="item item-todo" data-id=${item.id}>
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(
                                  currentYear,
                                  currentMonth,
                                  i
                                )}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label for="item-${convertDateToString(
                              currentYear,
                              currentMonth,
                              i
                            )}-${item.id}" class="item-todo-txt" >
                                ${item.content}
                            </label>
                          ${itemControllerInHTML()}
                        </li>`
                    : `
                    <li class="item item-todo" data-id=${item.id}>
                        <p class="item-post-txt" id="item-${convertDateToString(
                          currentYear,
                          currentMonth,
                          i
                        )}-${item.id}">
                            ${item.content}
                        </p>
                        ${itemControllerInHTML()}
                    </li>
                  `;
                return acc;
              }, [])}
        </ul>
        </div>`;
    }
    // next month
    for(let i = 1; i <= 6-lastDay; i += 1){ 
        temp += 
        `
        <div class="calendar-date ${ i % 7 === 0 ? 'standard' : ''} unactive" data-date=${convertDateToString(currentYear, currentMonth+1, i)}>
        <span class="calendar-date-txt">${i === 1 ? currentMonth + 1 + '. ' + i : i} ${i % 7 === 0 ? `<span class="--hide">${currentMonth+1 > 12 ? currentYear + 1 : currentYear}</span><span class="--hide">${currentMonth+1 > 12 ? 1 : currentMonth + 1}</span>`:''}</span></span>
        <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth+1} 월 ${i}일 아이템 추가"><span class="icon icon-add"></span></button>
        <ul class="items">
            ${data
              .filter(item => item.category === currentCategory)
              // eslint-disable-next-line no-loop-func
              .filter(
                item =>
                  item.date ===
                  convertDateToString(currentYear, currentMonth, i)
              )
              // eslint-disable-next-line no-loop-func
              .reduce((acc, item) => {
                acc +=
                  item.type === '1'
                    ? `
                        <li class="item item-todo" data-id=${item.id}>
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(
                                  currentYear,
                                  currentMonth,
                                  i
                                )}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label for="item-${convertDateToString(
                              currentYear,
                              currentMonth,
                              i
                            )}-${item.id} class="item-todo-txt" ">
                                ${item.content}
                            </label>
                            ${itemControllerInHTML()}
                        </li>`
                    : `
                    <li class="item item-todo" data-id=${item.id}>
                        <p class="item-post-txt" id="item-${convertDateToString(
                          currentYear,
                          currentMonth,
                          i
                        )}-${item.id}">
                            ${item.content}
                        </p>
                        ${itemControllerInHTML()}
                    </li>
                  `;
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
          <div class="calendar-date ${ i % 7 === 0 ? 'standard' : ''} unactive" data-date=${convertDateToString(lastYear, lastMonth, i)}>
          <span class="calendar-date-txt"> ${i === 1 ? lastMonth + '. ' + i : i} ${i % 7 === 0 ? `<span class="--hide">${lastYear}</span><span class="--hide">${lastMonth}</span>`:''}</span>
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
          <div class="calendar-date ${ i % 7 === 0 ? 'standard' : ''} unactive" data-date=${convertDateToString(lastYear, lastMonth+1, i)}>
          <span class="calendar-date-txt"> ${i === 1 ? (lastMonth >= 12 ? 0 : lastMonth) + 1 + '. ' + i : i} ${i % 7 === 0 ? `<span class="--hide">${lastMonth+1 > 12 ? lastYear + 1 : lastYear}</span><span class="--hide">${lastMonth+1 > 12 ? 1 : lastMonth + 1}</span>`:''}</span>
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
          <div class="calendar-date ${ i % 7 === 0 ? 'standard' : ''} unactive" data-date=${convertDateToString(firstYear, firstMonth-1, lastMonthDate - i)}>
          <span class="calendar-date-txt"> ${lastMonthDate-i === 1 ? firstMonth + '.'+ lastMonthDate - i : lastMonthDate - i} ${ lastMonthDate-i % 7 === 0 ? `<span class="--hide">${firstYear}</span><span class="--hide">${firstMonth}</span>`:''}
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
      for(let i = 1; i <= lastDate - (lastDay === 6 ? -1 : lastDay)-1; i += 1){
          temp += `
          <div class="calendar-date ${ i % 7 === 0 ? 'standard' : ''} unactive" data-date=${convertDateToString(firstYear, firstMonth, i)}>
          <span class="calendar-date-txt">  ${i === 1 ? firstMonth +'.' + i : i}
          ${ i % 7 === 0 ? `<span class="--hide">${firstYear}</span><span class="--hide">${firstMonth}</span>`:''}</span>
          </span>
          <button class="item-add-btn" aria-label="${firstYear}년 ${firstMonth} 월 ${i === 1 ? firstMonth +'.' + i : i}일 아이템 추가"><span class="icon icon-add"></span></button>
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
    observe: io =>{
        throttling.throttle(() =>{
            const $standards = document.querySelectorAll('.standard');
            [...$standards].forEach($standard => {
                io.observe($standard);
            });
        });
    },
    returnInitIO : new IntersectionObserver(entries =>{
        entries.forEach(entry => {
            // 기준 점의 날짜를 가져와서 lastDate - 기준 날짜 
            // firstDate + 기준 날짜
                if(entry.isIntersecting){
                    const allUnActiveElements = document.querySelectorAll('.calendar-date');
                    allUnActiveElements.forEach(item => item.classList.add('unactive'));        
                    [$calendarYear.textContent, $calendarMonth.textContent, ] = entry.target.dataset.date.split('-');
                    const { firstDate, lastDate } = getCustomDate(+$calendarYear.textContent, +$calendarMonth.textContent);
                    const [,,standardDate] = entry.target.dataset.date.split('-'); 
                    let node = entry.target;
                    for(let date = 1; date < firstDate + (+standardDate); date += 1){
                        node.classList.remove('unactive');
                        const nextNode = node;
                        node = nextNode.previousElementSibling;
                    }
                    node = entry.target;

                    for(let date = 0; date < lastDate - (+standardDate)+1; date += 1){
                        node.classList.remove('unactive');
                        const nextNode = node;
                        node = nextNode.nextElementSibling;
                    }
                }

            } );
          }, {
              root:$calendar,
              rootMargin: '-49% 0px -49% 0px'
          }),
    getCalendarElement: () => $calendar,
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
    scroll: io =>{
      throttling.throttle(()=>{
        if($calendar.scrollTop < 1){
            changePrevMonth();
            $calendar.scrollTop = 640;
            const $standards = document.querySelectorAll('.standard');
            [...$standards].forEach($standard => {
                io.observe($standard);
            })
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
}
})();
// 코드 실행 부분
calendar.renderCalendar();
const io = calendar.returnInitIO;
calendar.observe(io);

const $calendar = calendar.getCalendarElement();
const $todayBtn = document.querySelector('.move-today-btn');
const todayPosition = document.querySelector('.today').getBoundingClientRect();

calendar.changeToToday(todayPosition);
$calendar.addEventListener('scroll', () => calendar.scroll(io));
$todayBtn.addEventListener('click', () => calendar.changeToToday(todayPosition));

/**
 * 모달 창 관련 소스 코드
 *
 */

const addDataArray = ({ date, category, type, content }) => {
  data = [
    ...data,
    {
      id: nextDataId,
      type,
      category,
      date,
      content,
      order: data.filter(item => item.date === date).length + 1
    }
  ];
};

const addDataDomTree = ({ date, type, content }) => {
  const dates = [...document.querySelector('.calendar-dates').children];
  const $date = dates.find(item => item.dataset.date === date);

  const innerDate =
    type === '1'
      ? `<li class="item item-todo" data-id=${nextDataId}>
            <input
                class="item-todo-chkbox"
                type="checkbox"
                id="item-${date}-${nextDataId}"
            />
            <span class="item-todo-chkicon"></span>
            <label for="item-${date}-${nextDataId}" class="item-todo-txt" >
                ${content}
            </label>
            ${calendar.getItemControllerInHTML()}
        </li>`
      : `
        <li class="item item-todo" data-id=${nextDataId}>
            <p class="item-post-txt" id="item-${date}-${nextDataId}">
                ${content}
            </p>
            ${calendar.getItemControllerInHTML()}
        </li>`;

  $date.lastElementChild.insertAdjacentHTML('beforeend', innerDate);
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

const modifyDataArray = ({ id, content }) => {
  const modifiedData = data.filter(item => item.id === id);
  modifiedData.content = content;
};

const modifyDataDOM = ({ id, date, type, content }) => {
  const $modifyItem = document.getElementById(`item-${date}-${id}`);

  if (type === '1') {
    $modifyItem.nextElementSibling.nextElementSibling.textContent = content;
  } else {
    $modifyItem.textContent = content;
  }
};
