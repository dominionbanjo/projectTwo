const baseurl ='http://localhost:4040'

export const addItem = async (data) =>{
    const response = await fetch(`${baseurl}/additem`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data)
    })

    const jsonData = await response.json()

    if(!response.ok) alert (jsonData.error)
    return jsonData;

}