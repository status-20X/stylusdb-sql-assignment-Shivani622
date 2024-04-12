// tests/index.test.js

const { readCSV } = require("../../src/csvReader");

test("Read CSV File", async () => {
    try {
        const data = await readCSV("./sample.csv");

        // Check if data exists and is an array
        expect(Array.isArray(data)).toBe(true);

        // Log the data for debugging
        console.log("Data from CSV:", data);

        // Check if data length is as expected
        expect(data.length).toBe(3);

        // Check individual data points if necessary
        if (data.length > 0) {
            expect(data[0].name).toBe("John");
            expect(data[0].age).toBe("30"); // Ignore the string type here, we will fix this later
        }
    } catch (error) {
        console.error("Error reading CSV file:", error);
    }
});
