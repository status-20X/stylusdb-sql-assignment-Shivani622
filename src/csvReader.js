// src/csvReader.js

const fs = require('fs');
const csv = require('csv-parser');

function readCSV(filePath) {
    const results = [];

    return new Promise((resolve, reject) => {
        const stream = fs.createReadStream(filePath);

        stream.on('error', (error) => {
            reject(error);
        });

        stream.pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

module.exports = { readCSV };
