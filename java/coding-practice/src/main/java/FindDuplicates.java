import java.util.ArrayList;
import java.util.List;

/**
 * Created by ssu on 6/25/2018.
 */
public class FindDuplicates {

    //Question
    //Find duplicates in O(n) time and O(1) extra space | Set 1
    //Given an array of n elements which contains elements from 0 to n-1,
    //with any of these numbers appearing any number of times.
    //Find these repeating numbers in O(n) and using only constant memory space.
    //More Info
    // if there are 7 elements in the array
    // array values cannot be more that array index (values cannot be greater than n)
    // elements cannot be negative
    public Integer[] findDuplicateWithRange(Integer[] array) {

        List<Integer> results = new ArrayList<Integer>();

        if(array != null && array.length > 0) {
            for (int i = 0; i < array.length; i++) {
                //for non negative value, make it as negative
                if(array[Math.abs(array[i])] >= 0) {
                    array[Math.abs(array[i])] = -array[Math.abs(array[i])];
                }
                else {
                    results.add(Math.abs(array[i]));
                }
            }
        }

        return results.toArray(new Integer[results.size()]);

    }

}
