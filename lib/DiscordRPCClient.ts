import * as Oni from 'oni-api';
const { Client } = require('discord-rpc');
import DiscordActivity from './DiscordActivity'

export default class DiscordRPCClient {
    private rpcClient: any;
    private discordActivity: DiscordActivity = new DiscordActivity();
    
    public constructor(){}
    
    public async start(oni: Oni.Plugin.Api){
        this.rpcClient = new Client({ transport: 'ipc' });
        this.rpcClient.once('ready', () => {
            setInterval(() => {
                oni.log.info("status update")
                this.discordActivity.updateState(oni)
                this.rpcClient.setActivity(this.discordActivity.generateActivity());
            }, 1000);
        });

        await this.rpcClient.login({ clientId: "797232690847809566" })
    }

}
