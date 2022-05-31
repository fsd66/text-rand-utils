module.exports.callbackJoin = (array, separatorCallback) => {
    let result = "";

    if ((array?.length || 0) === 0) {
        return result;
    }

    if (array.length === 1) {
        return `${array[0]}`;
    }

    let finalSeparator = "";

    array.forEach(v => {
        const separator = `${separatorCallback?.()}`;
        finalSeparator = separator;
        result += `${v}${separator}`;
    });

    return result.slice(0, result.length - finalSeparator.length);
}
