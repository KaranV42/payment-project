const CustomerDetails = async (customerData) => {
    const url = ""; 

    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Basic " + procss.env.BASE64_API_KEY,
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(customerData)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Customer stored successfully:", data);
        return data; 
    } catch (error) {
        console.error("Failed to store customer details:", error);
        throw error; 
    }
};
