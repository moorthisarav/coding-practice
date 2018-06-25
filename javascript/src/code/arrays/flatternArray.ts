
//Flattern the given multi dimentional array to single array 


export class FlatternArray {

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

