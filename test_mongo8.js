try {
    const db = require('./index');
    console.log('Module loaded successfully.');
    
    // We expect a connection error eventually if no DB is present, but we want to ensure
    // no immediate synchronous errors from Mongoose configuration.
    setTimeout(() => {
        console.log('Test passed: No immediate configuration errors.');
        process.exit(0);
    }, 2000);

} catch (err) {
    console.error('Test Failed:', err);
    process.exit(1);
}
