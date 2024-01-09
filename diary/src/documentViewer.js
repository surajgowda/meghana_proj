import React, { useState, useEffect } from 'react';

const DocumentViewer = () => {
  const [documentPaths, setDocumentPaths] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    
    fetch('http://localhost:3001/get_link_timetable1')
      .then((response) => response.json())
      .then((data) => {
        setDocumentPaths(data);
      })
      .catch((error) => console.error('Error fetching document paths:', error));
  }, []);

  console.log(documentPaths)

  const changeDocument = () => {
    const newIndex = (currentIndex + 1) % documentPaths.length;
    setCurrentIndex(newIndex);

    // Update the document path in the database
    const newPath = documentPaths[newIndex];
    fetch('http://localhost:3001/put_link_timetable1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPath }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log('Document path updated successfully');
        } else {
          console.error('Error updating document path');
        }
      })
      .catch((error) => console.error('Error updating document path:', error));
  };

  const displayDocument = () => {
    const currentDocument = documentPaths[currentIndex];

    // Use appropriate logic to determine document type
    const isPdf = currentDocument.endsWith('.pdf');

    return isPdf ? (
      <embed type="application/pdf" src={currentDocument} width="100%" height="600px" />
    ) : (
      <img src={currentDocument.paths[1]} alt="Document" style={{ maxWidth: '100%', maxHeight: '600px' }} />
    );
  };

  return (
    <div>
      <div>
        <button onClick={changeDocument}>Change</button>
      </div>
      <div>{documentPaths.length > 0 ? displayDocument() : 'Loading...'}</div>
    </div>
  );
};

export default DocumentViewer;
