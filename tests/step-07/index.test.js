// tests/step-07/index.test.js

const { executeSELECTQuery } = require("../../src/index");

test('Execute SQL Query with Greater Than', async () => {
    const queryWithGT = 'SELECT id FROM sample WHERE age > 22';
    const result = await executeSELECTQuery(queryWithGT);
    expect(result.length).toEqual(2);
    expect(result[0]).toHaveProperty('id');
});

test('Execute SQL Query with Not Equal to', async () => {
    const queryWithNE = 'SELECT name FROM sample WHERE age != 25';
    const result = await executeSELECTQuery(queryWithNE);
    expect(result.length).toEqual(2);
    expect(result[0]).toHaveProperty('name');
});
