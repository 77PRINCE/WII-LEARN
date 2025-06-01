// app.js
document.getElementById('payment-form').addEventListener('submit', async function (e) {
    e.preventDefault();  // Prevent default form submission

    const amount = document.getElementById('amount').value;  // Get the amount from the form
    const phoneNumber = document.getElementById('phone').value;  // Get the phone number from the form (add a phone input field if needed)

    try {
        // Options for the API request
        const options = {
            method: 'POST',
            headers: {
                'X-API-Key': 'your-api-key-here', // Replace with your actual API key
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                amount: amount,        // The amount to be paid (in CFA)
                phoneNumber: phoneNumber // The phone number (e.g., "237650000000")
            })
        };

        // Make the fetch request to Nkwa Pay API
        const response = await fetch('https://api.pay.staging.mynkwa.com/collect', options);

        if (!response.ok) {
            throw new Error('Payment request failed');
        }

        // Parse the response JSON
        const data = await response.json();

        // You can handle the response data as needed
        console.log('Payment Response:', data);

        // For example, check the status and show a success message
        if (data.status === 'pending') {
            alert('Payment is pending, please check your phone for confirmation.');
        } else {
            alert('Something went wrong, please try again later.');
        }
        
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred, please try again.');
    }
});
