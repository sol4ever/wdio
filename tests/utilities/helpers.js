export const getItemSize = (itemPath) => {
    itemPath.getSize();
}

export const setInputValue = async (input, value) => {
    await input.setValue(value);
}