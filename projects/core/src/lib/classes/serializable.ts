export class Serializable {
    constructor(data: unknown) {
        Object.assign(this, data);
    }
}
