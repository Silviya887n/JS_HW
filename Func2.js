function isPositive(x){
    let fl;
if(x>0){
    fl=true;
}
else{
    fl=false;
}
return fl;

}
function customFilter (arr1, isPositive){
    let newarr=[];
    for (let i = 0; i < arr1.length; i++) {
      
        if(isPositive(arr1[i])){
            newarr.push(arr1[i]);
        }
    }

    return newarr;

}

 // TEST
     const nums = [-1, 1, -2, 3, 4];
     const positiveNumbers = customFilter(nums, isPositive);
     console.log(positiveNumbers); // Expected output: [1, 3, 4]
