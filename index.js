const options = {
    type: 'extended-map'
};
module.exports = {
    options: options
};

if (options.type === 'extended-map') {
    module.exports = require('./src/Map');
}
else if (options.type === 'map') {
    Map.prototype._valArray = [];

    /**
     * Returns the first value of the map (https://github.com/Linker-123/extended-map#first)
     */
    Map.prototype.first = function () {
        for (const x of this.values()) return x;
    }

    /**
    * Returns the last value of the map (https://github.com/Linker-123/extended-map#last)
    */
    Map.prototype.last = function () {
        const array = this.toArray();
        return array[array.length - 1];
    }

    /**
     * Returns the map values into an array (https://github.com/Linker-123/extended-map#toarray)
     */
    Map.prototype.toArray = function () {
        if (this._valArray.length !== this.size) this._valArray = [...this.values()];
        return this._valArray;
    }

    /**
    * Returns the map in an object (https://github.com/Linker-123/extended-map#toobject)
    */
    Map.prototype.toObject = function () {
        const object = {};
        for (const [key, value] of this) {
            if (object[key]) continue;
            object[key] = value;
        }
        return object;
    }

    /**
     * Returns a random value of the map (https://github.com/Linker-123/extended-map#random)
     */
    Map.prototype.random = function () {
        const array = this.toArray();
        if (limit) {
            if (limit > array.length) throw new Error("Please provide a limit lower than the amount of elements you have in the array")
            return array[Math.floor(Math.random() * limit)];
        }
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Compares the keys of both maps and returns a boolean (https://github.com/Linker-123/extended-map#equalsmap2)
     */
    Map.prototype.equals = function (secondMap) {
        for (const [key, value] of this) {
            if (!secondMap.has(key)) return false;
            if (secondMap.get(key) !== value) return false;
        }
        return true;
    }

    /**
     * Returns keys and values that exist in the map and don't exist in the second map (https://github.com/Linker-123/extended-map#differencemap2)
     */
    Map.prototype.difference = function (secondMap) {
        const map = new ExtendedMap();
        for (const [key, value] of this) {
            if (!secondMap.has(key) || secondMap.get(key) !== value)
                map.set(key, value);
        }
        return map;
    }

    /**
     * Compares keys and values of both maps, and returns a map of the duplicated keys and values (https://github.com/Linker-123/extended-map#duplicatesmap2)
     */
    Map.prototype.duplicates = function (secondMap) {
        const map = new ExtendedMap();
        for (const [key, value] of this) {
            if (secondMap.has(key) && secondMap.get(key) === value)
                map.set(key, value);
        }
        return map;
    }

    /** 
    * Get a specified amount of values from a map (https://github.com/Linker-123/extended-map#getsome)
    */
    Map.prototype.getSome = function (limit) {
        const array = [];
        for (let i = 0; i < limit; i++) {
            array.push(this.toArray()[i]);
        }
        return array;
    }

    /**
     * Filters out map values with a function (https://github.com/Linker-123/extended-map#filter)
     */
    Map.prototype.filter = function (func) {
        const array = [];
        for (const item of this.values()) {
            if (func(item)) {
                array.push(item);
            }
        }
        return array;
    }

    /**
     * Finds a specified value with a function (https://github.com/Linker-123/extended-map#find)
     */
    Map.prototype.find = function (func) {
        for (const item of this.values()) {
            if (func(item)) {
                return item;
            }
        }
    }

    /**
     * Maps the extended-map (https://github.com/Linker-123/extended-map#map)
     */
    Map.prototype.map = function (func) {
        const array = [];
        for (const item of this.values()) {
            array.push(func(item));
        }
        return array;
    }
}