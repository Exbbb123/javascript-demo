
function insertionSort(arr){
    var len = arr.length ;
    for (var i = 1;i < len; i++){
        var key = arr[i];
        var j = i-1 ;
        while(arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key ;
    }
    return arr ;
}

var arr = [5,4,2,1,1,4,5,6] ;
var arrSorted = insertionSort(arr) ;
console.log(arrSorted);