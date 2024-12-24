class Ajax {
    async post(url, callback) {
        try {
            const response = await fetch(url, {
                method: 'POST',
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
