function doFirst(){
    document.getElementById('checkButton').onclick = check
}
function check(){
    let myId = document.getElementById('myId').value
    
    let letters = ['A','B','C','D','E','F','G','H','I','J',
                   'K','L','M','N','O','P','Q','R','S','T',
                   'U','V','W','X','Y','Z']
    let areaCodeAll = ['10','11','12','13','14','15','16','17','34','18',
                    '19','20','21','22','35','23','24','25','26','27',
                    '28','29','32','30','31','33']

    // 檢查輸入的長度是否是 10 個
    if(myId.length != 10){
        alert(`輸入的長度要有 10 位`)
    }

    // 檢查第一個字是否是 A ~ Z
    myId = myId.toUpperCase()

    for(let i = 0; i < letters.length; i++){
        if(myId.charAt(0) == letters[i]){
            firstLetter = true
            break
        }else{
            firstLetter = false
            continue
        }
    }

    if(firstLetter == false){
        alert(`第一個字應該是字母 A ~ Z`)
    }

    // 檢查後九個字是否都是數字
    let num9 = myId.substring(1,myId.length)
    num9 = parseInt(num9)
    num9 = num9.toString().length

    if(num9 != 9){
        alert(`後面九個字都要是數字`)
    }

    // 檢查第二個字是否是 1 或 2
    if(myId.charAt(1) != 1 && myId.charAt(1) != 2){
        alert(`第二個字要是 1 或 2`)
    }

    // 檢查碼 A123456789
    // step 1
    let checkCode = 0

    // step 3 印出 letters 對應的 areaCode
    let letter = myId[0]
    let index = letters.indexOf(letter)
    // alert(areaCodeAll[index])

    // step 4 計算第一個英文字母的加權值
    let areaCode = areaCodeAll[index]
    checkCode += areaCode[0] * 1 + areaCode[1] * 9
    
    // step 2
    for(let i = 1; i <= 8; i++){
        checkCode += myId.charAt(i) * (9 - i)
    }
    // alert(checkCode)

    checkCode = checkCode % 10

    if(checkCode == 0){
        checkCode = 0
    }else{
        checkCode = 10 - checkCode
    }

    if(checkCode != myId.charAt(9)){
        alert(`不是合法的身分證字號`)
    }else{
        alert(`是合法的身分證字號`)
    }
}
window.addEventListener('load',doFirst)