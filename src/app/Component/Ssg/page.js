export default async function user(){
    let data = fetch('https://jsonplaceholder.typicode.com/users')
    data = await (await data).json()
    return data
}