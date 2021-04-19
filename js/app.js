function sunsetHills(){
    let inputs = []
    for (let i = 1; i < 6; i++) {
        let height = getHeight(i)
        if(isNaN(height)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `Height ${i} is not a number!`
            })
            return
        }
        if (height<=0) {
            Swal.fire({
                icon: 'error',
                title: 'Building code violation',
                text: `Height ${i} must be more than 0!`
            })
            return
        }
        inputs.push(getHeight(i));
        
    }
    let sunset = checkSunset(inputs);
    displaySunset(sunset)
}
function getHeight(num){
    let id = "height" + num
    return parseInt(document.getElementById(id).value);
    
}
function checkSunset(list){
    let result = []
    let curMax = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i]>curMax){
            curMax = list[i]
            result.push([true, list[i]])
        }else{
            result.push([false, list[i]])
        }
        
    }
    return result
}
function displaySunset(list){
    let total = 0;
    for (let i = 1; i < 6; i++) {
        let res = ""
        if (list[i-1][0]==true) {
            res = `Building ${i} (${list[i-1][1]}ft) CAN see the sunset✔️`
            total++
        } else {
            res = `Building ${i} (${list[i-1][1]}ft) CAN\'T see the sunset ❌`
        }
        document.getElementById(`r${i}`).innerText =res
    }
    confetti.start(1000)
    document.getElementById("sunsetResult").innerText = `${total} Buildings can see the sunset`
}