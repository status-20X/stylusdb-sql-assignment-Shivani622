// src/csvReader.js

const fs = require('fs').promises;

async function readCSV(filename) {
    try {
        const data = await fs.readFile(filename, 'utf-8');
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        const rows = lines.slice(1).map(line => line.split(','));
        const parsedData = rows.map(row => {
            const obj = {};
            headers.forEach((header, index) => {
                obj[header.trim()] = row[index].trim();
            });
            return obj;
        });
        return parsedData;
    } catch (error) {
        console.error('Error reading CSV file:', error);
        return [];
    }
}

module.exports = readCSV;