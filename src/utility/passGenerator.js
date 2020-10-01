const passGenerator = () => {
    const symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let pass = '';

    for (let i = 0; i < 8; i++) {
        pass += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

    return pass;
}

export default passGenerator;