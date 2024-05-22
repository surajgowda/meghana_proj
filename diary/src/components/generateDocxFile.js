// GenerateDocxFile.js

import React from 'react';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell } from 'docx';

async function generateDocxFile(formData){
  // Create a new Document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun(`Semester: ${formData.semester}`),
              new TextRun({ text: '\t' }), // Add tabs or other formatting as needed
              new TextRun(`Subject: ${formData.subject}`),
              // Add more TextRun elements for other fields
            ],
          }),
          // Add more paragraphs or elements as needed
        ],
      },
    ],
  });

  console.log("here")

// Generate a Blob with the final DOCX content
Packer.toBuffer(doc).then((buffer) => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  
    // Save or download the generated DOCX file
    saveAs(blob, 'generatedDocument.docx');
  });

  console.log("here1")

  
};

export default generateDocxFile;
