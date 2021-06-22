
// const monthToString = {
//     1: 'January', 
//     2: 'February', 
//     3: 'March', 
//     4: 'April', 
//     5: 'May', 
//     6: 'June', 
//     7: 'July', 
//     8: 'August', 
//     9: 'September', 
//     10: 'October', 
//     11: 'November', 
//     12: 'December', 
// };
const $calendarGrid = document.querySelector('.calendar-grid');


const dateObj = new Date();
const year = dateObj.getFullYear();
const month = dateObj.getMonth()+1;
const date = dateObj.getDate();
let firstYear = -1;
let lastYear = -1;   
let firstMonth = -1;
let lastMonth = -1;

const getCustomDate = (year, month) =>{
    const firstDay = new Date(year, month-1).getDay();
    const lastDate = new Date(year, month, 0).getDate();
    const lastDay = new Date(year, month, 0).getDay();
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
    let sunday = 0;
    for(let i = firstDay-1; i >= 0; i -= 1)
    {
        temp += `<span class="cell ${sunday % 7 === 0 ? 'sunday' : ''} ">${lastMonthDate-i}</span>`;
        sunday += 1;

    }
    // current month
    for(let i = 1; i <= lastDate; i += 1){
        temp += `<span class="cell ${sunday % 7 === 0 ? 'sunday' : ''} 
        ${year === currentYear && month === currentMonth && date===i? 'today' : ''} 
        ${!shownStandard ? 'standard' : ''}">
        ${i === 1 ? currentMonth + '.' + i : i}  
        ${!shownStandard ? `<span class="hidden">${currentYear}</span><span class="hidden">${currentMonth}</span>`:''}
        </span>`;
        sunday += 1;
        shownStandard = true;

    }   
    // next month
    for(let i = 1; i <= 6-lastDay; i += 1){ 
        temp += `<span class="cell ${sunday % 7 === 0 ? 'sunday' : ''}">${i === 1 ? currentMonth + 1 + '. ' + i : i}</span>`;
        
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
    let sunday = 0;
    let shownStandard = false;

    for(let i = 8-firstDay === 8 ? 1 : 8-firstDay; i <= lastDate; i += 1){
        temp += `<span class="cell ${sunday % 7 === 0 ? 'sunday' : ''} ${!shownStandard ? 'standard' : ''}">
        ${i === 1 ? lastMonth + ',' + i : i}        
        ${!shownStandard ? `<span class="hidden">${lastYear}</span><span class="hidden">${lastMonth}</span>`:''}</span>`;
        sunday += 1;
        shownStandard = true;

    }
    // next month
    for(let i = 1; i <= 6-lastDay; i += 1){
        temp += `<span class="cell">${i === 1 ? (lastMonth >= 12 ? 0 : lastMonth) + 1 + '. ' + i : i}  </span>`;
        sunday += 1;

    }
    $calendarGrid.insertAdjacentHTML('beforeend', temp);
}
const changePrevMonth = () =>{
    firstMonth -= 1
    firstYear = firstMonth < 1 ? firstYear - 1 : firstYear;
    firstMonth = firstMonth < 1 ? 12 : firstMonth;
    const {firstDay, lastDate, lastDay, lastMonthDate} = getCustomDate(firstYear, firstMonth);
    console.log(firstYear + ' ', firstMonth+ "프리브");

    let temp = '';
    let sunday = 0;
    let shownStandard = false;

    for(let i = firstDay-1; i >= 0; i -= 1)
    {
        temp += `<span class="cell ${sunday % 7 === 0 ? 'sunday' : ''}">
        ${lastMonthDate-i === 1 ? firstMonth + '.'+ lastMonthDate - i : lastMonthDate - i}</span>`;
        sunday += 1;

    }
    for(let i = 1; i <= lastDate - (lastDay === 6 ? 0 : lastDay) -1; i += 1){
        temp += `<span class="cell ${sunday % 7 === 0 ? 'sunday' : ''} ${!shownStandard ? 'standard' : ''}">
        ${i === 1 ? firstMonth +'.' + i : i}        
        ${!shownStandard ? `<span class="hidden">${firstYear}</span><span class="hidden">${firstMonth}</span>`:''}</span>`;
        sunday += 1;
        shownStandard = true;
    }
    $calendarGrid.insertAdjacentHTML('afterbegin', temp);
}

initCalendar();
changeNextMonth();
changePrevMonth();
const $calendarYear = document.querySelector('.calendar-year');
const $calendarMonth = document.querySelector('.calendar-month');
const io = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            $calendarYear.textContent = entry.target.children[0].textContent;
            $calendarMonth.textContent = entry.target.children[1].textContent;
        }
    } );
}, {
    root:$calendarGrid,
    rootMargin: '0px 0px -50% 0px'
});
$calendarGrid.scrollTo(0, 500);
$calendarGrid.onscroll = () =>{
    if($calendarGrid.scrollTop < 1){
        changePrevMonth();
        $calendarGrid.scrollTop = 1;
        const $standards = document.querySelectorAll('.standard');
        [...$standards].forEach($standard => {
            io.observe($standard);
        })
    }
    if ($calendarGrid.scrollHeight - Math.ceil($calendarGrid.scrollTop) === $calendarGrid.clientHeight) {
        changeNextMonth();
        const $standards = document.querySelectorAll('.standard');
        [...$standards].forEach($standard => {
            io.observe($standard);
        })
    }
}

$calendarYear.textContent = year;
$calendarMonth.textContent = month;


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
    $calendarGrid.scrollTo(0, 500);
    $calendarYear.textContent = year;
    $calendarMonth.textContent = month;
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
    $calendarGrid.scrollTo(0, 500);
    $calendarYear.textContent = currentYear;
    $calendarMonth.textContent =currentMonth;
}

const $todayBtn = document.querySelector('.today-btn');
$todayBtn.onclick = changeToToday;

const $customDateBtn = document.querySelector('.custom-date-btn');
const $inputCustomYear = document.querySelector('.custom-year');
const $inputCustomMonth = document.querySelector('.custom-month');

$customDateBtn.onclick = () => changeToCustomDate(+$inputCustomYear.value, +$inputCustomMonth.value );
