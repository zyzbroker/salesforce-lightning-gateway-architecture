# salesforce-lightning-gateway-architecture
we architect the pub/sub so that lightning client components don't deal with remote apex API call directly, abstract the detail out to the client gateway component. we also implement the apex controller gateway, which handle the API call dynamically.
The main purpose is that it frees the frontend developer from worrying about how to wire up the lightning action with callback logic. Instead,in your SPA, multiple components can subscribe the application level event to listen to SUCCSS or FAILURE. 
