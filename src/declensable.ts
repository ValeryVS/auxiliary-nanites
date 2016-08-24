interface DeclenceInit {
    one: string,
    two: string,
    many: string
}

export class Declensable {
    private words: DeclenceInit;
    private static one: string = 'one';
    private static two: string = 'two';
    private static many: string = 'many';
    private static cases: Array<string> = [
        Declensable.many,
        Declensable.one,
        Declensable.two,
        Declensable.two,
        Declensable.two
    ];

    constructor(words: DeclenceInit) {
        this.words = words;
    }

    declense(count: number) {
        let wordIndex: string;

        const x: number = count % 100;
        if (x > 4 && x < 20) {
            wordIndex = Declensable.many
        } else {
            const y: number = count % 10;
            if (y < 5) {
                wordIndex = Declensable.cases[y];
            } else {
                wordIndex = Declensable.many
            }
        }
        return this.words[wordIndex]
    }
}
