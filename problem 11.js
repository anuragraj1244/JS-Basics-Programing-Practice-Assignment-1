function countOccurrences(arr,n,x)
{
    let res = 0;
    for (let i=0; i<n; i++)
    {
        if (x == arr[i])
            res++;
    }
    return res;
}
 
arr=[3,3,4,4,7,8]
let  n = arr.length;
let x = 2;
document.write(countOccurrences(arr, n, x));