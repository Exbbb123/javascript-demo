
function quickSort(arr){
    if(arr.length<=1) return arr ;
    var midIndex = Math.floor(arr.length/2);
    var pivot = arr.splice(midIndex,1)[0];
    var left = [];
    var right = [];
    for (var i = 0 ; i < arr.length ; i++) {
        if (arr[i]<pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot,quickSort(right));
}

var arr = [5,4,2,1,1,4,5,6] ;
var arrSorted = quickSort(arr) ;
console.log(arrSorted);