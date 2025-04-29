const stripe_sky = 'pk_test_51Nk8Y4F0B89ncn3xWB6ZN3GsbVIVL7Jqfa3jxtIOpPkKHcleHZw4EMPJKd4cRwm34ZARBeYmAWwu3VxyYL1gb6OT00UKNSvfvb'


// Comment out production settings for now
// const production = 'production'
// const dev = 'development'

// const mode = production

// Set mode to 'development' directly
const mode = 'development'



let app_url, api_url

if (mode === "production") {
    // app_url = "https://shopmy-cyan.vercel.app"
    // api_url = "https://api-ecommerce-fos4.onrender.com"
} else {
    app_url = 'http://localhost:3000'  // Frontend URL
    api_url = 'http://localhost:5000'  // Backend URL
}

export {
    app_url,
    api_url,
    stripe_sky
}