const fs = require('fs');
const path = require('path');

// Define the path to the JSON file
const jsonFilePath = path.join(__dirname, 'foundDocuments.json');

// Initialize the documents variable
let documents = [];

// Read the JSON file asynchronously
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    const trimmedData = data.trim();
    documents = JSON.parse(trimmedData);

    if (documents.length > 0) {
      console.log('First document:', documents[0]);
    } else {
      console.log('No documents found.');
    }

    // Example manipulation: Add a new document (optional)
    // documents.push({ name: "New Document", age: 25 });

    // Output the modified JavaScript object (optional)
    // console.log('Modified documents:', documents);
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError.message);
  }
});

// Function to log document keys
function logDocumentKeys(doc) {
  for (let key in doc) {
    console.log(key, doc[key]);
  }
}

// Getter function to retrieve documents
function getDocuments() {
  return documents;
}

// Function to save documents back to the JSON file
function saveDocuments() {
  // fs.writeFile(jsonFilePath, JSON.stringify(documents, null, 2), 'utf8', (err) => {
  //   if (err) {
  //     console.error('Error writing JSON file:', err);
  //   } else {
  //     console.log('Documents successfully saved to JSON file.');
  //   }
  // });
}

// Export the functions
module.exports = { getDocuments, logDocumentKeys, saveDocuments };
