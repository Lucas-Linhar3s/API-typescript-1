

export function soma(n1: number,n2: number): boolean {
        const n3 = n1 + n2
        if (n3 > 1) {
                return true
        } else {
                return false
        }
}

export function subtrair(n1: number,n2: number): string {
        const n3 = n1 + n2;
        const values = `"seu numero é ${n3}"`
        return values
}