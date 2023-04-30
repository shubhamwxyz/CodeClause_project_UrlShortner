function shortenUrl() {
    const urlInput = document.getElementById('url-input');
    const shortUrlDisplay = document.getElementById('short-url');
  
    // Bitly API endpoint
    const bitlyEndpoint = 'https://api-ssl.bitly.com/v4/shorten';
  
    // Bitly access token
    const accessToken = 'YOUR_ACCESS_TOKEN';
  
    // Fetch options
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        long_url: urlInput.value
      })
    };
  
    // Make API request to generate short URL
    fetch(bitlyEndpoint, fetchOptions)
      .then(response => response.json())
      .then(data => {
        // Display short URL
        shortUrlDisplay.textContent = data.link;
      })
      .catch(error => {
        console.error(error);
      });
  }
  