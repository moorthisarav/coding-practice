
//Flattern the given multi dimentional array to single array 


class FlatternArray {

    //flatern array using recursion
    flatternRecursion(array: any[]) {

        let result: any = [];

        for (var i = 0; i < array.length; i++) {
            var arrVal = array[i];
            if (Array.isArray(arrVal)) {
                result = result.concat(this.flatternRecursion(arrVal));
            } else {
                result.push(arrVal);
            }
        }
        return result;
    }

    flatternUsingReduce(array: any[]): any {

        let self = this;
        
        return array.reduce(function(a, b) {
            if (Array.isArray(b)) {
                return a.concat(self.flatternUsingReduce(b));
            } else {
               return a.concat(b);
            }
        }, []);
    }

    flatternUsingReduceUsingLamda(array: any[]): any {

        let self = this;        
        return array.reduce((a, b) => a.concat( Array.isArray(b) ? self.flatternUsingReduceUsingLamda(b) : b ), []);
    }

}

var flatternArray = new FlatternArray();

let input = [1, 1, [3, [4, 5], 6], 7, [8]];
console.log('input:');
console.log(input);

//Output
console.log('output recursion:');
console.log(flatternArray.flatternRecursion(input))
console.log('output array reduce:');
console.log(flatternArray.flatternUsingReduce(input))
console.log('output array reduce with lamda:');
console.log(flatternArray.flatternUsingReduceUsingLamda(input))
