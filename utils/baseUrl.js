const baseUrl = process.env.NODE_ENV === "production" 
? 'https://riseagain.us/' 
: 'http://localhost:3000';

export default baseUrl;