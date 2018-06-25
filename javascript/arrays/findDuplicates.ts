class FindDuplicate {

    
    
    //Question
    //Find duplicates in O(n) time and O(1) extra space | Set 1
    //Given an array of n elements which contains elements from 0 to n-1, 
    //with any of these numbers appearing any number of times. 
    //Find these repeating numbers in O(n) and using only constant memory space.
    //More Info
    // if there are 7 elements in the array 
    // array values cannot be more that array index (values cannot be greater than n)    
    // elements cannot be negative
    findDuplicateWithRange(array: number[]) {
        //Solution find based on element sign 

        let results: number[] = [];

        if (array && array.length > 0) {
            for (let i = 0; i < array.length; i++) {
                
                //for non negative value, make it as negative
                if(array[Math.abs(array[i])] >= 0) {
                    array[Math.abs(array[i])] = -array[Math.abs(array[i])];
                }
                else {
                    results.push(Math.abs(array[i]));
                }
            }
        }

        return results;

    }

    //Question
    //Find duplicates with O(n2), there is no time complexity, but space complexity is there
    
    findDuplicateWithSorting(array: number[]) {
        let results: number[] = [];

        if (array && array.length > 0) {
            
            array = array.sort(); //TODO: have to create sorting allgorithm and call
            
            for (let i = 0; i < array.length - 1; i++) {
                
                if(array[i + 1] == array[i]) {
                    results.push(array[i]);
                }
            }
        }

        return results;
    }

    //Find duplicates with O(n)
    findDuplicateWithMap(array: number[]) {
        var lookupArray: any = {};

        let results: number[] = [];

        if (array && array.length > 0) {
            
            for (let i = 0; i < array.length; i++) {
                
                if(!lookupArray[array[i]]) {
                    lookupArray[array[i]] = array[i];
                }
                else {
                    results.push(array[i]);
                }

                
            }
        }

        return results;
    }

}

var findDuplicate = new FindDuplicate();
let dupInput  = [1, 2, 3, 1, 3, 6, 6];
console.log('input:');
console.log(dupInput);
console.log('output findDuplicateWithRange:');
console.log(findDuplicate.findDuplicateWithRange(dupInput.slice()));
console.log('output findDuplicateWithSorting:');
console.log(findDuplicate.findDuplicateWithSorting(dupInput.slice()));
console.log('output findDuplicateWithMap:');
console.log(findDuplicate.findDuplicateWithMap(dupInput.slice()));