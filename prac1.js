
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

let currentMonth = month;
let currentYear = year;
firstYear = currentYear;
lastYear = currentYear;
firstMonth = currentMonth;
lastMonth = currentMonth;

const initCalendar = () =>{
    const {firstDay, lastDate, lastDay, lastMonthDate} = getCustomDate(currentYear, currentMonth);
    let shownStandard = false;
    let temp = '';
    for(let i = firstDay-1; i >= 0; i -= 1)
    {
        temp +=  `
            <div class="calendar-date">
            <span class="calendar-date-txt">${lastMonthDate-i}</span>
            <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth} 월 ${lastMonthDate-i}일 아이템 추가"><span class="icon icon-add"></span></button>
            </div>
        `;

    }
    // current month
    for(let i = 1; i <= lastDate; i += 1){
        temp += 
        `
        <div class="calendar-date ${year === currentYear && month === currentMonth && date===i? 'today' : ''} ${!shownStandard ? 'standard' : ''}">
        <span class="calendar-date-txt">${i === 1 ? currentMonth + '. ' + i : i} ${!shownStandard ? `<span class="--hide">${currentYear}</span><span class="--hide">${currentMonth}</span>`:''}</span>
        <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth} 월 ${i}일 아이템 추가"><span class="icon icon-add"></span></button>
        </div>
        `;
        shownStandard = true;

    }   
    // next month
    for(let i = 1; i <= 6-lastDay; i += 1){ 
        temp += 
        `
        <div class="calendar-date">
        <span class="calendar-date-txt">${i === 1 ? currentMonth + 1 + '. ' + i : i} </span>
        <button class="item-add-btn" aria-label="${currentYear}년 ${currentMonth} 월 ${i}일 아이템 추가"><span class="icon icon-add"></span></button>
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
    console.log(lastYear + ' ', lastMonth+ "넥스트");

    let temp = '';
    let shownStandard = false;

    for(let i = 8-firstDay === 8 ? 1 : 8-firstDay; i <= lastDate; i += 1){
        temp +=         `
        <div class="calendar-date ${!shownStandard ? 'standard' : ''}">
        <span class="calendar-date-txt"> ${i === 1 ? lastMonth + '. ' + i : i} ${!shownStandard ? `<span class="--hide">${lastYear}</span><span class="--hide">${lastMonth}</span>`:''}</span>
        <button class="item-add-btn" aria-label="${lastYear}년 ${lastMonth} 월 ${i === 1 ? lastMonth + ',' + i : i}일 아이템 추가"><span class="icon icon-add"></span></button>
        </div>
        `;
        shownStandard = true;


    }
    // next month
    for(let i = 1; i <= 6-lastDay; i += 1){
        temp += `
        <div class="calendar-date">
        <span class="calendar-date-txt"> ${i === 1 ? (lastMonth >= 12 ? 0 : lastMonth) + 1 + '. ' + i : i} 
        </span>
        <button class="item-add-btn" aria-label="${lastYear}년 ${lastMonth} 월 ${i === 1 ? (lastMonth >= 12 ? 0 : lastMonth) + 1 + '. ' + i : i}일 아이템 추가"><span class="icon icon-add"></span></button>
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
    let shownStandard = false;

    for(let i = firstDay-1; i >= 0; i -= 1)
    {
        temp += 
        `
        <div class="calendar-date">
        <span class="calendar-date-txt"> ${lastMonthDate-i === 1 ? firstMonth + '.'+ lastMonthDate - i : lastMonthDate - i}
        </span>
        <button class="item-add-btn" aria-label="${firstYear}년 ${firstMonth} 월 ${lastMonthDate-i === 1 ? firstMonth + '.'+ lastMonthDate - i : lastMonthDate - i}일 아이템 추가"><span class="icon icon-add"></span></button>
        </div>
        `

    }
    for(let i = 1; i <= lastDate - (lastDay === 6 ? 0 : lastDay) -1; i += 1){
        temp += `
        <div class="calendar-date ${!shownStandard ? 'standard' : ''}">
        <span class="calendar-date-txt">  ${i === 1 ? firstMonth +'.' + i : i}
        ${!shownStandard ? `<span class="hidden">${firstYear}</span><span class="hidden">${firstMonth}</span>`:''}</span>
        </span>
        <button class="item-add-btn" aria-label="${firstYear}년 ${firstMonth} 월 $${i === 1 ? firstMonth +'.' + i : i}일 아이템 추가"><span class="icon icon-add"></span></button>
        </div>
        `
        shownStandard = true;
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

