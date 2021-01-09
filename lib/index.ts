import * as Oni from 'oni-api';
const { Client } = require('discord-rpc');
import DiscordRPCClient from './DiscordRPCClient';

const discordRPCClient: DiscordRPCClient = new DiscordRPCClient();

export function activate(oni: Oni.Plugin.Api) {
    oni.log.info("ONI DISCORD LOADED");
    discordRPCClient.start(oni);
}
