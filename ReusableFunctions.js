export let oddOrEven = (num) => {
    if(num % 2 === 0){
        return 'even'
    }
    else{
        return 'odd'
    }
}

//
export let primeNumber = (num) => {
    for (let i = 2; i <= num; i++){
        if (num % 2 === 0) {
            return 'false'
        }
        else{
            return 'true'
        }
    }
}