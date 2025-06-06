// your code goes here
function reverseString(text)
{
   return text.split("").reverse().join("")
}


console.log(reverseString("dipanshu"))


function reverseWithLoop(text)
{
    const textArray = text.split("")
    
    const reverse = []
    
    for(let i = textArray.length-1 ; i>=0 ; i--)
    {
        reverse.push(textArray[i])
    }
        
    return reverse.join("")
}

console.log(reverseWithLoop("dipanshu"))


function duplicate(arr)
{
    let seen = {};
    
    let nonDuplicate = []
    
    
    for(let item of arr)
    {
        if(!seen[item])
        {
            nonDuplicate.push(item);
            
            seen[item] = true;
        }
    
    }
    
    return nonDuplicate;
}


console.log(duplicate([1, 2, 2, 3, 4, 4]));



function frequencyOfArray(arr)
{
    let frequency = {}

    for(let item of arr)
    {
        frequency[item] = (frequency[item] || 0) +1
    }

    return frequency
}

console.log(frequencyOfArray(["apple","banana","grapes","apple","grapes"]))


function deeplyNestedArray(arr)
{
    const result = []

    for(let item of arr)
    {
        if(Array.isArray(item))
        {
            result.push(...deeplyNestedArray(item))
        }
        else{
            result.push(item)
        }
    }

    return result;
}

console.log(deeplyNestedArray([1, [2, [3, [4]]]]))


function nonRepeatingChar(text)
{
    let charock = {}

    for(let char of text)
    {
        charock[char] = (charock[char] || 0)  + 1  
    }

    for(let char of text)
    {
        if(charock[char] === 1 )
            return char
    }

    return null
}

console.log(nonRepeatingChar("aabbcdde"))


function chat(text)
{
    console.log(text)
}

function debounce(fn,delay)
{
    let timerID ;

    return(...args)=>{
        clearTimeout(timerID);

        timerID = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}

const deboucedChat = debounce(chat,1000)

deboucedChat("hello")
deboucedChat("hello t")
deboucedChat("hello th")
deboucedChat("hello the")
deboucedChat("hello there")