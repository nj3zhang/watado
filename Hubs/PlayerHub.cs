using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using watado.Models;
using watado.Hubs.Clients;

namespace watado.Hubs
{
    public class PlayerHub : Hub<IPlayerClient>
    {
        public async Task SendPlayerData(PlayerData data)
        {
            await Clients.All.ReceivePlayerData(data);
        }
    }
}