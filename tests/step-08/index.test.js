const { executeSELECTQuery } = require("../../src/index");

test('Execute SQL Query with INNER JOIN', async () => {
    const query = 'SELECT student.name, enrollment.course FROM student INNER JOIN enrollment ON student.id=enrollment.student_id';
    const result = await executeSELECTQuery(query);
    expect(result.length).toEqual
});