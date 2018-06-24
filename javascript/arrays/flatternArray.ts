
//Flattern the given multi dimentional array to single array 
let input: any = [1, 1, [3, [4, 5], 6], 7, [8]];
console.log('input:');
console.log(input);

class FlatternArray {
    
    public flattern(array: any): any {
        
        let result: any = [];

        for(var i = 0; i < array.length; i++) {
            var arrVal = array[i];
            if(Array.isArray(arrVal)) {
              console.log(result);
              result = result.concat(this.flattern(arrVal));
            } else {
              result.push(arrVal);
            }
        }
    return result;
    }


}

var flatternArray = new FlatternArray();
console.log('output:');
console.log (flatternArray.flattern(input))