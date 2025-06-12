process.stdout.write("Welcome to ALX, what is your name?\n");

process.stdin.on('readable', () => {
    const buffer = process.stdin.read();

    if (buffer) {
        process.stdout.write(`Your name is: ${buffer}`);
    } 
});

process.stdin.on('end', () => {
    process.stdout.write("This is important software is now closing\n");
});