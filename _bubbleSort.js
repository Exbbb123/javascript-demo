
function swap(arr,a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp ;
};

function bubbleSort(arr){
    var len = arr.length ;
    for (var i = len-1 ;i > 0 ; i--) {
        for (var j = 0 ;j < i ; j++) {
            if (arr[j]>arr[j+1]){
                swap(arr,j,j+1);
            }
        }
    }
    return arr ;
};

var arr = [5,4,2,1,1,4,5,6] ;
var arrSorted = bubbleSort(arr) ;
console.log(arrSorted);