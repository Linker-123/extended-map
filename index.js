class ExtendedMap extends Map {
    constructor() {
        super();
        this._valArray = [];

    }

    first() {
        for (const x of this.values()) return x;
    }

    last() {
        const array = this.toArray();
        return array[array.length - 1];
    }

    toArray() {
        if (this._valArray.length !== this.size) this._valArray = [...this.values()];
        return this._valArray;
    }

    toObject() {
        const object = {};
        for (const [key, value] of this) {
            if (object[key]) continue;
            object[key] = value;
        }
        return object;
    }

    random() {
        const array = this.toArray();
        return array[Math.floor(Math.random() * array.length)];
    }

    equals(secondMap) {
        for (const [key, value] of this) {
            if (!secondMap.has(key)) return false;
            if (secondMap.get(key) !== value) return false;
        }
        return true;
    }

    difference(secondMap) {
        const map = new ExtendedMap();
        for (const [key, value] of this) {
            if (!secondMap.has(key) || secondMap.get(key) !== value)
                map.set(key, value);
        }
        return map;
    }

    duplicates(secondMap) {
        const map = new ExtendedMap();
        for (const [key, value] of this) {
            if (secondMap.has(key) && secondMap.get(key) === value)
                map.set(key, value);
        }
        return map;
    }

    getSome(limit) {
        const array = [];
        for (let i = 0; i < limit; i++) {
            array.push(this.toArray()[i]);
        }
        return array;
    }

    filter(func) {
        const array = [];
        for (const item of this.values()) {
            if (func(item)) {
                array.push(item);
            }
        }
        return array;
    }

    find(func) {
        for (const item of this.values()) {
            if (func(item)) {
                return item;
            }
        }
    }

    map(func) {
        const array = [];
        for (const item of this.values()) {
            array.push(func(item));
        }
        return array;
    }
};
module.exports = ExtendedMap;