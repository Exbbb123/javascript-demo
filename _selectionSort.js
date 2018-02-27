
function swap(arr,a,b){
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp ;
};

function selectionSort(arr){
    var len = arr.length ;
    var max ;
    for (var i = 0 ;i < len ; i++){
        minIndex = i ;
        for (var j = i+1 ;j < len ; j++){
            if (arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        swap(arr,minIndex,i);
    }
    return arr ;
};

var arr = [5,4,2,1,1,4,5,6] ;
var arrSorted = selectionSort(arr) ;
console.log(arrSorted);