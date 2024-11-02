BlockEvents.placed("minecraft:wither_skeleton_skull", w => {
    const {x, y, z} = w.block;
    if(((w.level.getBlock([x, y-1, z])=='minecraft:beacon') && (w.level.getBlock([x, y-2, z]) == 'minecraft:redstone_block'))&&((w.level.getBlock([x-1, y-1, z])=='minecraft:iron_block') && (w.level.getBlock([x+1, y, z]) == 'minecraft:iron_block')||(w.level.getBlock([x, y-1, z-1])=='minecraft:iron_block') && (w.level.getBlock([x, y-1, z+1]) == 'minecraft:iron_block'))){
    w.level.getBlock([x, y-1, z]).set('air');
    w.level.getBlock([x, y-2, z]).set('air');
    w.level.getBlock([x+1, y-1, z]).set('air');
    w.level.getBlock([x-1, y-1, z]).set('air');
    w.level.getBlock([x, y-1, z-1]).set('air');
    w.level.getBlock([x, y-1, z+1]).set('air');
    w.server.runCommandSilent(`summon cataclysm:the_harbinger ${x} ${y-2} ${z}`);
}
})