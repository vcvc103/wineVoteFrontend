export function loadThings ()
{
    let items : any[] = []
    const endpoint = 'http://localhost:8080/wine'
    const requestOptions = {
        method: 'GET',
        redirect: 'follow' as RequestRedirect
    };

    fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then((result:any[]) => {


            result.forEach((item) => {
                items.push(item)
            })
            /*console.log(items)*/
        })
    console.log(items);
    return items;
}





