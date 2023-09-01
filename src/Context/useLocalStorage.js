function initializeLocalStorage() {
    const accountInLocalStorage = localStorage.getItem('account')
    const singOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parseSignOut

    if (!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if (!singOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false))
        parseSignOut = false
    } else {
        parseSignOut = JSON.parse(singOutInLocalStorage)
    }

    const setParsedAccount = (newItem) => {
        localStorage.setItem('account', JSON.stringify(newItem))
        parsedAccount = newItem
    };

    const setParseSignOut = (newItem) => {
        localStorage.setItem('sign-out', JSON.stringify(newItem))
        parseSignOut = newItem
    };

    return {parsedAccount, parseSignOut, setParsedAccount, setParseSignOut}

}

export {initializeLocalStorage}