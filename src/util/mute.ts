import { Channel, Guild, GuildChannel, GuildMember, TextChannel } from 'discord.js';
import { removeAllPermissions } from './lib';

export async function muteRole(guild: Guild) {
  let role = guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
  if (!role) {
    role = await guild.roles.create({
      data: {
        name: 'Muted'
      }
    })
  }
  return role
}

export async function addMuteRole(member: GuildMember) {
  member.roles.add(await muteRole(member.guild))
}
export async function removeMuteRole(member: GuildMember) {
  member.roles.remove(await muteRole(member.guild))
}

export async function updateMuteRolePerms(guild: Guild) {
  removeAllPermissions(guild, await muteRole(guild))
}
