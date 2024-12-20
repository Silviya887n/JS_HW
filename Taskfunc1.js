function  square (x){
   let res=x**2;
    return res;
}

//const numbers = [1, 2, 3, 4, 5]; 
//const doubledNumbers = nums.g(function(x) { return x **2; });

function  customMap(arr1,square)
{
    let arr2=[];
   for (let i = 0; i < arr1.length; i++) {
        arr1[i]= square(arr1[i]);
        arr2.push( arr1[i]);
    }


return  arr2;

}

    const nums = [1, 2, 3, 4];
    const squared = customMap(nums, square);
    console.log(squared); 

//console.log(customMap(nums,square));