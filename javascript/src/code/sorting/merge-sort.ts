

export class MergeSort {

    //Sorting array (recirsive to split array to single item)
    //https://brilliant.org/wiki/merge/ 
    sort(array: number[]) {

        // if item is less than 1
        if (array && array.length > 1) {

            // console.log('array');console.log(array);

            let middle =  array.length / 2;
            
            let firstHalf = array.slice(0, middle);
            let secondHalf = array.slice(middle);

            // console.log('firstHalf'); console.log(firstHalf);
            // console.log('secondHalf');console.log(secondHalf);

            firstHalf = this.sort(firstHalf);
            secondHalf = this.sort(secondHalf);

            return this.merge(firstHalf, secondHalf);

        }
        else {
            return array;
        }

    }

    //Merge 2 array into one
    merge(left: number[], right: number[]) {

        let result = [];

        let left_index = 0;
        let right_index = 0;

        while (left_index < left.length && right_index < right.length) {

            if (left[left_index] <= right[right_index]) {
                result.push(left[left_index])
                left_index++;
            } else {
                result.push(right[right_index])
                right_index++;
            }

        }

        /* Copy the remaining elements of left  are any */
        while (left_index < left.length) {
            result.push(left[left_index])
            left_index++;
        }

        /* Copy the remaining elements of left  are any */
        while (right_index < right.length) {
            result.push(right[right_index])
            right_index++;
        }

        return result;
    }

}

// let dupInput = [1, 8, 3, 6, 5, 4];
// var mergeSort = new MergeSort();
// console.log(mergeSort.sort(dupInput)); 