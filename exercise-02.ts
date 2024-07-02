const isPrime = (n: number): Promise<{ prime: boolean }> => {
    return new Promise((resolve, reject) => {
        if (n <= 1) {
            reject({ prime: false });
            return;
        }
        for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if (n % i === 0) {
                reject({ prime: false });
                return;
            }
        }
        resolve({ prime: true });
    });
};
const testIsPrime = async (n: number) => {
    try {
        const result = await isPrime(n);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};
console.log('start');
isPrime(7)
    .then(console.log)
    .catch(console.error);
console.log('end');