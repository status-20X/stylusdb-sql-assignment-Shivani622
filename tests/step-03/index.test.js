// tests/step-03/index.test.js

const parseQuery = require('../../src/queryParser'); // Adjust the relative path

test('Parse SQL Query', () => {
    const query = 'SELECT id, name FROM sample';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'sample'
    });
});
