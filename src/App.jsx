import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [licenseData, setLicenseData] = useState(null);

  useEffect(() => {
    // Fetch license information from the API
    fetch('http://localhost:8080/api/v1/license')
      .then((response) => response.json())
      .then((data) => setLicenseData(data))
      .catch((error) => console.error('Error fetching license:', error));
  }, []);

  return (
    <div>
      <h2>License Information</h2>
      {licenseData ? (
        <pre>{JSON.stringify(licenseData, null, 2)}</pre>
      ) : (
        <p>Loading license information...</p>
      )}
    </div>
  );
}

export default App
