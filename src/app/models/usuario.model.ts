export class Usuario {

    constructor(
        public id: string,
        public name: string,
        public username: string,
        public email: string,
        public address?: string,
        public phone?: boolean,
        public website?: string,
        public company?: string
    ) { }

}