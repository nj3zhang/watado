using System.Threading.Tasks;
using watado.Models;

namespace watado.Hubs.Clients
{
    public interface IPlayerClient
    {
        Task ReceivePlayerData(PlayerData message);
    }
}