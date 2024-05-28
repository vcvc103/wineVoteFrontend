export function
loadThings ()
{
    const endpoint = 'http://localhost:8080/things'
    const requestOptions : any  = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(thing => {
            this.itemsWine.push(thing)
        }))
        .catch(error => console.log('error', error))
}

export const itemsWine: Wine [] = [];
export interface Wine{name: string, price: string, age:string}