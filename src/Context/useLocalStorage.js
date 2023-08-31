function initializeLocalStorage(initialAccount, initialSignOut) {
    const accountInLocalStorage = localStorage.getItem('account')
    const singOutInLocalStorage = localStorage.getItem('sign-out')
    let parsedAccount
    let parseSignOut

    if (!accountInLocalStorage) {
        localStorage.setItem('account', JSON.stringify(initialAccount))
        parsedAccount = {}
    } else {
        parsedAccount = JSON.parse(accountInLocalStorage)
    }

    if (!singOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(initialSignOut))
        parseSignOut = false
    } else {
        parseSignOut = JSON.parse(singOutInLocalStorage)
    }

    return {parsedAccount, parseSignOut}

}

export {initializeLocalStorage}