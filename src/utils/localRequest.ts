export default (url: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url)
        }, 500)
    })
}