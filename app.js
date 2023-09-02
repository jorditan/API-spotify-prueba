const clientId = 'e520101532d54f51abdc269a76e0971d';
const clientSecret = '341f5fa712564f43afd48617adfd6de2';

const token = ''
const obtenerToken = async() => {
    
    try {
        const respuesta = await fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'

        });

        const data = await respuesta.json();
        console.log(data);
        const token = data.access_token;
        return token;
    }
    
    catch(error) {
        console.log(error)
    }
}

const obtenerArtista = async () => {

    if (!token) {
        await obtenerToken();
    }
    try {
        const resultado = await fetch('https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2/top-tracks?country=US', {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });

        const data = await resultado.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

obtenerArtista();


