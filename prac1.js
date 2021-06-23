
const $calendar = document.querySelector('.calendar');
const $calendarGrid = document.querySelector('.calendar-dates');

const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth()+1;
const date = dateObj.getDate();
let firstYear = -1;
let lastYear = -1;   
let firstMonth = -1;
let lastMonth = -1;
const dayTranslate = day => day === 0 ? 6 : day - 1;

const getCustomDate = (year, month) =>{
    const firstDay = dayTranslate(new Date(year, month-1).getDay());
    const lastDate = new Date(year, month, 0).getDate();
    const lastDay = dayTranslate(new Date(year, month, 0).getDay());
    const lastMonthDate = new Date(year, month-1, 0).getDate();
    return {firstDay, lastDate, lastDay, lastMonthDate};
};

const convertDateToString = (year, month, date) =>{
    year = ''+year;
    month = month < 10 ? '0'+month : ''+month;
    date = date < 10 ? '0'+date : ''+date;
    return year+'-'+month+'-'+date
}
const data = [
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



const currentCategory = '네카';
let currentMonth = month;
let currentYear = year;
firstYear = currentYear;
lastYear = currentYear;
firstMonth = currentMonth;
lastMonth = currentMonth;


const initCalendar = () =>{
    const {firstDay, lastDate, lastDay, lastMonthDate} = getCustomDate(currentYear, currentMonth);
    let temp = '';
    for(let i = firstDay-1; i >= 0; i -= 1)
    {
        temp +=  `
            <div class="calendar-date unactive" data-date=${convertDateToString(currentYear, currentMonth, i)}>
            <span class="calendar-date-txt">${lastMonthDate-i}</span>
            <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth} 월 ${lastMonthDate-i}일 아이템 추가"><span class="icon icon-add"></span></button>
            <ul class="items">
            ${data
                .filter(item => item.category === currentCategory)
                .filter(item => item.date === convertDateToString(currentYear, currentMonth, i))
                .reduce((acc, item) => {
                    acc += item.type === 'todo' ? 
                        `
                        <li class="item item-todo">
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label class="item-todo-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                                ${item.content}
                            </label>
                        </li>`
                    :
                    `
                    <li class="item item-todo">
                        <p class="item-post-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                            ${item.content}
                        </p>
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
        <div class="calendar-date ${year === currentYear && month === currentMonth && date===i? 'today' : ''} ${i === 1 ? 'standard' : ''}"  data-date=${convertDateToString(currentYear, currentMonth, i)}>
        <span class="calendar-date-txt">${i === 1 ? currentMonth + '. ' + i : i} ${i === 1 ? `<span class="--hide">${currentYear}</span><span class="--hide">${currentMonth}</span>`:''}</span>
        <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth} 월 ${i}일 아이템 추가"><span class="icon icon-add"></span></button>
        <ul class="items">
            ${data
                .filter(item => item.category === currentCategory)
                .filter(item => item.date === convertDateToString(currentYear, currentMonth, i))
                .reduce((acc, item) => {
                    acc += item.type === 'todo' ? 
                        `
                        <li class="item item-todo">
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label class="item-todo-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                                ${item.content}
                            </label>
                        </li>`
                    :
                    `
                    <li class="item item-todo">
                        <p class="item-post-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                            ${item.content}
                        </p>
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
        <div class="calendar-date unactive ${i === 1 ? 'standard' : ''}" data-date=${convertDateToString(currentYear, currentMonth, i)}>
        <span class="calendar-date-txt">${i === 1 ? currentMonth + 1 + '. ' + i : i} ${i === 1 ? `<span class="--hide">${currentMonth+1 > 12 ? currentYear + 1 : currentYear}</span><span class="--hide">${currentMonth+1 > 12 ? 1 : currentMonth + 1}</span>`:''}</span></span>
        <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth+1} 월 ${i}일 아이템 추가"><span class="icon icon-add"></span></button>
        <ul class="items">
            ${data
                .filter(item => item.category === currentCategory)
                .filter(item => item.date === convertDateToString(currentYear, currentMonth, i))
                .reduce((acc, item) => {
                    acc += item.type === 'todo' ? 
                        `
                        <li class="item item-todo">
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label class="item-todo-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                                ${item.content}
                            </label>
                        </li>`
                    :
                    `
                    <li class="item item-todo">
                        <p class="item-post-txt" for="item-${convertDateToString(currentYear, currentMonth, i)}-${item.id}">
                            ${item.content}
                        </p>
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
        <div class="calendar-date ${i === 1 ? 'standard' : ''} unactive" data-date=${convertDateToString(lastYear, lastMonth, i)}>
        <span class="calendar-date-txt"> ${i === 1 ? lastMonth + '. ' + i : i} ${i === 1 ? `<span class="--hide">${lastYear}</span><span class="--hide">${lastMonth}</span>`:''}</span>
        <button class="item-add-btn" aria-label="${lastYear}년 ${lastMonth} 월 ${i === 1 ? lastMonth + ',' + i : i}일 아이템 추가"><span class="icon icon-add"></span></button>
        <ul class="items">
            ${data
                .filter(item => item.category === currentCategory)
                .filter(item => item.date === convertDateToString(lastYear, lastMonth, i))
                .reduce((acc, item) => {
                    acc += item.type === 'todo' ? 
                        `
                        <li class="item item-todo">
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label class="item-todo-txt" for="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}">
                                ${item.content}
                            </label>
                        </li>`
                    :
                    `
                    <li class="item item-todo">
                        <p class="item-post-txt" for="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}">
                            ${item.content}
                        </p>
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
        <div class="calendar-date ${i === 1 ? 'standard' : ''} unactive" data-date=${convertDateToString(lastYear, lastMonth, i)}>
        <span class="calendar-date-txt"> ${i === 1 ? (lastMonth >= 12 ? 0 : lastMonth) + 1 + '. ' + i : i} ${i === 1 ? `<span class="--hide">${lastYear+1 > 12 ? lastYear + 1 : currentYear}</span><span class="--hide">${lastMonth+1 > 12 ? 1 : lastMonth + 1}</span>`:''}</span>
        </span>
        <button class="item-add-btn" aria-label="${lastYear}년 ${lastMonth+1} 월 ${i === 1 ? (lastMonth >= 12 ? 0 : lastMonth) + 1 + '. ' + i : i}일 아이템 추가"><span class="icon icon-add"></span></button>
        <ul class="items">
            ${data
                .filter(item => item.category === currentCategory)
                .filter(item => item.date === convertDateToString(lastYear, lastMonth, i))
                .reduce((acc, item) => {
                    acc += item.type === 'todo' ? 
                        `
                        <li class="item item-todo">
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label class="item-todo-txt" for="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}">
                                ${item.content}
                            </label>
                        </li>`
                    :
                    `
                    <li class="item item-todo">
                        <p class="item-post-txt" for="item-${convertDateToString(lastYear, lastMonth, i)}-${item.id}">
                            ${item.content}
                        </p>
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
        <div class="calendar-date unactive" data-date=${convertDateToString(firstYear, firstMonth, i)}>
        <span class="calendar-date-txt"> ${lastMonthDate-i === 1 ? firstMonth + '.'+ lastMonthDate - i : lastMonthDate - i}
        </span>
        <button class="item-add-btn" aria-label="${firstYear}년 ${firstMonth} 월 ${lastMonthDate-i === 1 ? firstMonth + '.'+ lastMonthDate - i : lastMonthDate - i}일 아이템 추가"><span class="icon icon-add"></span></button>
        <ul class="items">
            ${data
                .filter(item => item.category === currentCategory)
                .filter(item => item.date === convertDateToString(firstMonth, firstMonth, i))
                .reduce((acc, item) => {
                    acc += item.type === 'todo' ? 
                        `
                        <li class="item item-todo">
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(firstMonth, firstMonth, i)}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label class="item-todo-txt" for="item-${convertDateToString(firstMonth, firstMonth, i)}-${item.id}">
                                ${item.content}
                            </label>
                        </li>`
                    :
                    `
                    <li class="item item-todo">
                        <p class="item-post-txt" for="item-${convertDateToString(firstMonth, firstMonth, i)}-${item.id}">
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
        <div class="calendar-date ${i === 1 ? 'standard' : ''} unactive" data-date=${convertDateToString(firstYear, firstMonth, i)}>
        <span class="calendar-date-txt">  ${i === 1 ? firstMonth +'.' + i : i}
        ${i === 1 ? `<span class="hidden">${firstYear}</span><span class="hidden">${firstMonth}</span>`:''}</span>
        </span>
        <button class="item-add-btn" aria-label="${firstYear}년 ${firstMonth} 월 $${i === 1 ? firstMonth +'.' + i : i}일 아이템 추가"><span class="icon icon-add"></span></button>
        <ul class="items">
            ${data
                .filter(item => item.category === currentCategory)
                .filter(item => item.date === convertDateToString(firstMonth, firstMonth, i))
                .reduce((acc, item) => {
                    acc += item.type === 'todo' ? 
                        `
                        <li class="item item-todo">
                            <input
                                class="item-todo-chkbox"
                                type="checkbox"
                                id="item-${convertDateToString(firstMonth, firstMonth, i)}-${item.id}"
                            />
                            <span class="item-todo-chkicon"></span>
                            <label class="item-todo-txt" for="item-${convertDateToString(firstMonth, firstMonth, i)}-${item.id}">
                                ${item.content}
                            </label>
                        </li>`
                    :
                    `
                    <li class="item item-todo">
                        <p class="item-post-txt" for="item-${convertDateToString(firstMonth, firstMonth, i)}-${item.id}">
                            ${item.content}
                        </p>
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

initCalendar();
changeNextMonth();
changePrevMonth();
const $calendarYear = document.querySelector('.nav-year');
const $calendarMonth = document.querySelector('.nav-month');

const io = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            $calendarYear.textContent = entry.target.children[0].children[0].textContent + ".";
            $calendarMonth.textContent = entry.target.children[0].children[1].textContent + ".";
            const {lastDate} = getCustomDate(+entry.target.children[0].children[0].textContent, +entry.target.children[0].children[1].textContent);
            // let node = entry.target;
            // for(let date = 0; date < lastDate; date += 1){
            //     node.classList.remove('unactive');
            //     const nextNode = node;
            //     node = nextNode.nextElementSibling;
            // }
        }
        else{
            const {lastDate} = getCustomDate(+entry.target.children[0].children[0].textContent, +entry.target.children[0].children[1].textContent);
            // let node = entry.target;
            // for(let date = 0; date < lastDate; date += 1){
            //     node.classList.add('unactive');
            //     const nextNode = node;
            //     node = nextNode.nextElementSibling;
            // }
        }
    } );
}, {
    root:$calendar,
    rootMargin: '0px 0px -50% 0px'
});
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
const target = document.querySelector('.today').getBoundingClientRect(); 
const $standards = document.querySelectorAll('.standard');
[...$standards].forEach($standard => {
    io.observe($standard);
})
$calendar.scrollTo(0, target.top - ($calendar.clientHeight / 2));
$calendar.onscroll = () =>{
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
};
$calendarYear.textContent = year+".";
$calendarMonth.textContent = month+".";

const changeToToday = () =>{
    currentYear = year;
    currentMonth = month;
    firstYear = year;
    lastYear = year;
    firstMonth = currentMonth;
    lastMonth = currentMonth;
    initCalendar();
    changeNextMonth();
    changePrevMonth();
    $calendar.scrollTo(0, target.top - ($calendar.clientHeight / 2));
    $calendarYear.textContent = year+'.';
    $calendarMonth.textContent = month+'.';
}

const changeToCustomDate = (year, month) =>{
    currentYear = year;
    currentMonth = month;
    firstYear = currentYear;
    lastYear = currentYear;
    firstMonth = currentMonth;
    lastMonth = currentMonth;
    initCalendar();
    changeNextMonth();
    changePrevMonth();
    $calendar.scrollTo(0, 500);
    $calendarYear.textContent = currentYear+'.';
    $calendarMonth.textContent =currentMonth+'.';
}

const $todayBtn = document.querySelector('.move-today-btn');
$todayBtn.onclick = changeToToday;

const $customDateBtn = document.querySelector('.move-today-btn');
const $inputCustomYear = document.querySelector('.custom-year');
const $inputCustomMonth = document.querySelector('.custom-month');

// $customDateBtn.onclick = () => changeToCustomDate(+$inputCustomYear.value, +$inputCustomMonth.value );

