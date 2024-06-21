function generateNewSerial() {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let serial = "";

    for (let i = 0 ; i < 20 ; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        serial += charset[randomIndex];
    }

    return serial;
}

// First Refresh
console.log(generateNewSerial()); // 9cBcrg3kcWF4GZSlWXAM

// Second Refresh
console.log(generateNewSerial()); // vPeu6HXBgiXXj6jpch4P

// Third Refresh
console.log(generateNewSerial()); // RQuHFBjCdnp0Ghhp0544