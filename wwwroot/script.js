async function fetchMCServerDetails() 
{
    const response = await fetch('https://api.mcsrvstat.us/3/mc.dindungus.club', 
    {
        method: 'GET',
        headers: 
        {
            'Accept': 'application/json',
        },
    });
    const json = await response.json(); 
    return json;
}

function checkServerStatus(server_obj)
{
    if (server_obj.online)
    {
        return 'Online'
    }
    return 'Offline'
}

function getPlayersOnline(server_obj)
{
    if (server_obj.online)
    {
        return `${server_obj.players.online}/${server_obj.players.max}`
    }
    return 'Unavailable'
}

async function updateServerStatus() 
{
    try 
    {
        const mc_server_obj = await fetchMCServerDetails();
        document.getElementById('server_check').innerHTML = `<p>Server is currently ${checkServerStatus(mc_server_obj)}</p><p>Players online: ${getPlayersOnline(mc_server_obj)}</p>`;
    } 
    catch (error) 
    {
        console.error('Error fetching mc server details:', error);
    }
}

updateServerStatus();
