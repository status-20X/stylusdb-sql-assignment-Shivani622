// tests/step-09/index.test.js

const { parseQuery, executeSELECTQuery, readCSV } = require('../../src/index');

test('Read CSV file', async () => {
    const data = await readCSV('student.csv'); // Corrected import statement
    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBeGreaterThan(0);
});
