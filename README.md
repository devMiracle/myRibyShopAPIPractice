# myRibyShopAPIPractice

###Installation

######**using npm**

```
$ npm i digit-time-to-word --save
```
######**In Node Js**
```javascript
//load the digit time to word module
const timeToWord = require('digit-time-to-word');

// You can use console.log(timeToWord) to see all result

// You can use date class to test.
setInterval(()=>{
    let date =  new Date();
    // console.log(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
    if(date.getSeconds() === 59){
        let timeInWord = timeToWord.getTimeInWord(date.getHours(),date.getMinutes());
        if(timeInWord.status){
            console.log(`Hour : ${timeInWord.hour}  Minute : ${timeInWord.minute}  ===>  ${timeInWord.time}`);    
        }else{
            console.log(timeInWord.error);
        }
    }
},1000);

```

#### Happy Coding!!!
#### Cheers
