export class Fibonacci {

    fibonacci(a: number):number {
        if (a <= 0) {
            return 0;
        }
        if (a === 1) {
            return 1;
        }
        return this.fibonacci(a-1) + this.fibonacci(a-2);
    }
}
