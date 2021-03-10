export interface Help {
  categories: HelpCat[],
  commands: HelpCmds
}

export interface HelpCat {
  name: string
  menu: string
  cmds: string[]
}

export type HelpCmds = Record<string, HelpCommandProps>

export interface HelpCommandProps {
  usage: string
  desc: string
  aliases?: string[]
}
