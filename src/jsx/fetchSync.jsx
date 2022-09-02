async function fetchSync (uri, method, body = null) {
    const response = await fetch(uri, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: body?JSON.stringify(body):null
    });
    const data = await response.json();

    return data;
}

async function fetchActionSync (uri, method, body = null) {
    const response = await fetch(uri, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: body?JSON.stringify(body):null
    });

    return null;
}

export {fetchSync, fetchActionSync};