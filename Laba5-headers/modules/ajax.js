class Ajax {
    async post(url, callback) {
        try {
            const response = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                    'X-Request-Name': 'MyCustomRequestName' 
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            callback(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
}

export const ajax = new Ajax();