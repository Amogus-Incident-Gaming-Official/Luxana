BlockEvents.placed("minecraft:netherite_block", e => {
    const {x, y, z} = e.block;

    if((e.level.getBlock([x+1, y, z])=='minecraft:redstone_block') &&(e.level.getBlock([x+1, y, z+1])=='minecraft:redstone_block') &&(e.level.getBlock([x+1, y, z-1])=='minecraft:redstone_block') &&(e.level.getBlock([x-1, y, z])=='minecraft:redstone_block') &&(e.level.getBlock([x-1, y, z+1])=='minecraft:redstone_block') &&(e.level.getBlock([x-1, y, z-1])=='minecraft:redstone_block') &&(e.level.getBlock([x, y, z+1])=='minecraft:redstone_block') &&(e.level.getBlock([x, y, z-1])=='minecraft:redstone_block') &&(e.level.getBlock([x-2, y, z-2])=='minecraft:netherite_block') &&(e.level.getBlock([x-2, y, z-1])=='minecraft:basalt') &&(e.level.getBlock([x-2, y, z])=='minecraft:basalt') &&(e.level.getBlock([x-2, y, z+1])=='minecraft:basalt') &&(e.level.getBlock([x-2, y, z+2])=='minecraft:netherite_block')&&(e.level.getBlock([x+2, y, z-2])=='minecraft:netherite_block') &&(e.level.getBlock([x+2, y, z-1])=='minecraft:basalt') &&(e.level.getBlock([x+2, y, z])=='minecraft:basalt') &&(e.level.getBlock([x+2, y, z+1])=='minecraft:basalt') &&(e.level.getBlock([x+2, y, z+2])=='minecraft:netherite_block')&&(e.level.getBlock([x+1, y, z-2])=='minecraft:basalt') &&(e.level.getBlock([x+1, y, z+2])=='minecraft:basalt')&&(e.level.getBlock([x, y, z-2])=='minecraft:basalt') &&(e.level.getBlock([x, y, z+2])=='minecraft:basalt')&&(e.level.getBlock([x-1, y, z-2])=='minecraft:basalt') &&(e.level.getBlock([x-1, y, z+2])=='minecraft:basalt')){
    e.level.getBlock([x, y, z]).set('air');
    e.level.getBlock([x+1, y, z]).set('air');
    e.level.getBlock([x+2, y, z]).set('air');
    e.level.getBlock([x-1, y, z]).set('air');
    e.level.getBlock([x-2, y, z]).set('air');
    e.level.getBlock([x, y, z+1]).set('air');
    e.level.getBlock([x+1, y, z+1]).set('air');
    e.level.getBlock([x+2, y, z+1]).set('air');
    e.level.getBlock([x-1, y, z+1]).set('air');
    e.level.getBlock([x-2, y, z+1]).set('air');
    e.level.getBlock([x, y, z+2]).set('air');
    e.level.getBlock([x+1, y, z+2]).set('air');
    e.level.getBlock([x+2, y, z+2]).set('air');
    e.level.getBlock([x-1, y, z+2]).set('air');
    e.level.getBlock([x-2, y, z+2]).set('air');
    e.level.getBlock([x, y, z-1]).set('air');
    e.level.getBlock([x+1, y, z-1]).set('air');
    e.level.getBlock([x+2, y, z-1]).set('air');
    e.level.getBlock([x-1, y, z-1]).set('air');
    e.level.getBlock([x-2, y, z-1]).set('air');
    e.level.getBlock([x, y, z-2]).set('air');
    e.level.getBlock([x+1, y, z-2]).set('air');
    e.level.getBlock([x+2, y, z-2]).set('air');
    e.level.getBlock([x-1, y, z-2]).set('air');
    e.level.getBlock([x-2, y, z-2]).set('air');
    e.server.runCommandSilent(`summon cataclysm:netherite_monstrosity ${x} ${y} ${z}`);
}
})