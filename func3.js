function double (x){
    return x*2;
}

function increment(y){

    y +=1;
    return y;
}

function compose(double,increment){

    return function(x){
        let res=double(x);
        let res2= increment(res);

        return res2;
    }
   
  
}

  const doubleThenIncrement = compose(double, increment);
  console.log(doubleThenIncrement(3)); // Expected output: 7

