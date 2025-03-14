async function clearInputField(inputElement) {
    await inputElement.click();
    const value = await inputElement.getValue();
    for (let i = 0; i < value.length; i++) {
        await browser.keys('Backspace');
    }
}

module.exports = { clearInputField };