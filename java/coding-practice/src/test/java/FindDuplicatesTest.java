import java.util.Arrays;

import static org.testng.Assert.*;

/**
 * Created by ssu on 6/25/2018.
 */
public class FindDuplicatesTest {

    @org.testng.annotations.BeforeMethod
    public void setUp() throws Exception {

    }

    @org.testng.annotations.AfterMethod
    public void tearDown() throws Exception {

    }

    @org.testng.annotations.Test
    public void testFindDuplicateWithRange() throws Exception {

        Integer[] input = new Integer[] {1, 2, 3, 1, 3, 6, 6};
        FindDuplicates findDuplicates = new FindDuplicates();
        System.out.println(Arrays.toString(findDuplicates.findDuplicateWithRange(input)));
    }
}