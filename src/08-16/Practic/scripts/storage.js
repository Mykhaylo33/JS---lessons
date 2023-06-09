// Зберігає за ключем знаяення 
export const save = (key, value) =>{
try {
    const data = JSON.stringify(value)
    localStorage.setItem(key, data)
} catch (err) {
    console.error("Stringifly error", err.message);
}
}

export const load = (key) =>{
    try {
        const data = localStorage.getItem(key)
        return data === null ? undefined : JSON.parse(data)
    } catch (err) {
        console.error("Parse error", err.message);
    }
    
}

