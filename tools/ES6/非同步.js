Promise 物件

sync VS async
synchrnous: one at a time 一個執行「完」才會執行下一個
asynchrnous: more one at a time 一執行馬上換下一個指令

JavaScript 大部分的語法是 synchrnous
但是有些語法是 asynchrnous，例如 setTimeout()、fetch()、XMLHttpRequest()、addEventListener()、Promise 物件

callback function: function 裡面的 function

Promise
    ES6
    return resolve 和 reject
    執行 Promise 會確保 Promise 物件會回傳 resolve(已完成) 或 reject(未完成)

    語法:
    const promise = new Promise((resolve, reject) => {
        resolve(res)
        reject(why)
    })

    語法:
    promise.then(res => {}, why => {})
--------------------------------------------------------
以下到 console 去執行

1
function myName(name){
    setTimeout(function(){
        console.log(name);
    }, parseInt(Math.random() * 1000) + 1)
}

function allName(){
    myName('Andy');
    myName('Brian');
    myName('Carl');
    myName('Dale');
    myName('Eric');
}

allName()  // 每次執行結果都不一樣
--------------------------------------------------------
2 使用 callback function

function myName(name, callMe){
    setTimeout(function(){
        console.log(name)
        callMe()
    }, parseInt(Math.random() * 1000) + 1)
}

function allName(){
    // myName('Andy');
    // myName('Brian');
    // myName('Carl');
    // myName('Dale');
    // myName('Eric');
    myName('Andy',function(){
        myName('Brian', function(){
            myName('Carl', function(){
                myName('Dale', function(){
                    myName('Eric', function(){
                    })
                })
            })
        })
    })
}

allName()  // 不容易維護 (callback hell)
--------------------------------------------------------
3 使用 Promise 物件

function myName(name){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(name)
            resolve()  // 將 callMe 改成 resolve
        }, parseInt(Math.random() * 1000) + 1)
    })
}

function allName(){
    myName('Andy').then(function(){
        return myName('Brian')
    }).then(function(){
        return myName('Carl')
    }).then(function(){
        return myName('Dale')
    }).then(function(){
        return myName('Eric')
    })
}

allName()
--------------------------------------------------------
4 改成箭頭函式

function myName(name){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(name)
            resolve()  // 將 callMe 改成 resolve
        }, parseInt(Math.random() * 1000) + 1)
    })
}

function allName(){
    myName('Andy').then(() => myName('Brian'))
                  .then(() => myName('Carl'))
                  .then(() => myName('Dale'))
                  .then(() => myName('Eric'))
}

allName()
--------------------------------------------------------
5 改成 async/await (取代 then)

語法:
async function(){
    await
}

function myName(name){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(name)
            resolve() 
        }, parseInt(Math.random() * 1000) + 1)
    })
}

async function allName(){
    await myName('Andy')
    await myName('Brian')
    await myName('Carl')
    await myName('Dale')
    await myName('Eric')
}

allName()