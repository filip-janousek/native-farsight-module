declare module "@floh22/farsight" {

  export interface GameObject {
    name: string;
    displayName: string;
    networkId: number;
    objectIndex: number;
    position: [number, number, number];
    team: number;
    isAlive: boolean;
    health: number;
    maxHealth: number;
    mana: number;
    maxMana: number;
  }

  export interface Snapshot {
    gameTime: number;
    nextDragonType: string;
    champions: GameObject[];
    jungle: GameObject[];
    turrets: GameObject[];
    inhibitors: GameObject[];
    other: GameObject[];
    grubsTime: number;
    heraldTime: number;
    baronTime: number; 
    drakeTime: number;

    blueDrakes: number;
    blueBarons: number;
    blueGrubs: number;
    redDrakes: number;
    redBarons: number;
    redGrubs: number;
  }


  export interface Offsets {
    gameTime: number;
    objectManager: number;
    objectMapCount: number;
    objectMapRoot: number;
    objectMapNodeNetId: number;
    objectMapNodeObject: number;
    heroList: number;
    minionList: number;
    turretList: number;
    inhibitorList: number;
    objIndex: number;
    objTeam: number;
    objNetworkID: number;
    objPosition: number;
    objHealth: number;
    objMaxHealth: number;
    objMana: number;
    objMaxMana: number;
    objName: number;
    objLvl: number;
    objExperience: number;
    objCurrentGold: number;
    objTotalGold: number;
    objDisplayName: number;
    objDisplayNameLength: number;
    timersBase: number;
    hudObj: number;
  }

  export function connectToLeague(): Promise<boolean>
  export function disconnectFromLeague(): boolean
  export function makeSnapshot(): Snapshot
  export function setOffsets(offsets: Offsets): boolean
  export function isReady(): boolean
  export function setChampionNames(champions: string[]): boolean
  export function setVersion(version: string): void
  export let autoImportChampions: boolean
  export let autoImportOffsets: boolean
}
