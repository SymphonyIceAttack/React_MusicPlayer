export default <T> (length: number, obj: T): T[] => {

    return Array.from({ length }, () => (obj))
}