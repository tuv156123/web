function doFirst(){
    // 今天是 2023/6/1
    let YYYY = new Date().getFullYear()  // 2023
    let MM = new Date().getMonth() + 1   // 6
    let DD = new Date().getDate()        // 1

    // 年的 drop-down menu
    let year = document.getElementById('year')

    for(let i = YYYY - 20; i < YYYY + 20; i++){
        // 1 先建標籤
        let option = document.createElement('option') 
        
        // 2 將該標籤的屬性方法先寫好
        if(i == YYYY){
            option.selected = true   // option.setAttribute('selected', true)
        }
        option.value = i
        option.innerText = i

        // 3 找到 parent node，加進去
        year.appendChild(option)
    }

    // 月的 drop-down menu
    let month = document.getElementById('month')

    for(let i = 1; i <= 12; i++){
        let option = document.createElement('option')

        if(i == MM){
            option.selected = true  
        }
        option.value = i
        option.innerText = i

        month.appendChild(option)
    }

    // 日的 drop-down menu
    let date = document.getElementById('date')

    let february = (YYYY % 4 != 0) ? 28 : 29

    switch(MM){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31
            break
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30
        default:
            days = february
    }
        
    for(let i = 1; i <= days; i++){

        let option = document.createElement('option')
    
        if(i == DD){
            option.selected = true  
        }
        option.value = i
        option.innerText = i

        date.appendChild(option)
    }
    

    // 當月的第一天是星期幾
    let firstDay = new Date(YYYY, MM - 1).getDay()
    
    // 當月一共有幾天
    let monthDate = new Date(YYYY, MM, 0).getDate()
    
    showCalendar(firstDay,monthDate)

    year.addEventListener('change',changeCalendar)
    month.addEventListener('change',changeCalendar)
}
function showCalendar(firstDay,monthDate){
    let amount = firstDay + monthDate
    let calendar = document.getElementById('calendar')

    // 按照天數
    for(let i = 0; i < amount; i++){
        if(i % 7 == 0){
            // trWeek = document.createElement('tr')
            // calendar.appendChild(trWeek)
            tr = calendar.appendChild(document.createElement('tr'))
        }

        if(i < firstDay){
            td = tr.appendChild(document.createElement('td'))
            td.innerText = ''
        }else{
            td = tr.appendChild(document.createElement('td'))
            td.innerText = i - firstDay + 1
        }

        // 補滿最後一列的 td
    }
}
function changeCalendar(){
    // 清除原來的月曆
    let calendar = document.getElementById('calendar')
    let trLength = calendar.childNodes.length - 1
    // alert(trLength)
    for(let i = 2; i <= trLength; i++){
        calendar.childNodes[i].innerHTML = ''
    }

    // 產生新的月曆
    let chooseYear = document.getElementById('year').value
    let chooseMonth = document.getElementById('month').value

    // 重新選完之後還是要判斷「當月的第一天是星期幾」
    let firstDay = new Date(chooseYear, chooseMonth - 1).getDay()

    // 重新選完之後還是要判斷「當月一共有幾天」
    let monthDate = new Date(chooseYear, chooseMonth, 0).getDate()

    showCalendar(firstDay,monthDate)  // 再呼叫函數呈現新的月曆
}
window.addEventListener('load',doFirst)