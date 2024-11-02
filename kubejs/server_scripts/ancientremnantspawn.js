BlockEvents.placed("minecraft:gold_block", b => {
    const {x, y, z} = b.block;

    if((b.level.getBlock([x+1, y, z])=='minecraft:sandstone') &&(b.level.getBlock([x+1, y, z+1])=='minecraft:bone_block') &&(b.level.getBlock([x+1, y, z-1])=='minecraft:bone_block') &&(b.level.getBlock([x-1, y, z])=='minecraft:sandstone') &&(b.level.getBlock([x-1, y, z+1])=='minecraft:bone_block') &&(b.level.getBlock([x-1, y, z-1])=='minecraft:bone_block') &&(b.level.getBlock([x, y, z+1])=='minecraft:sandstone') &&(b.level.getBlock([x, y, z-1])=='minecraft:sandstone') &&(b.level.getBlock([x-2, y, z-2])=='minecraft:bone_block') &&(b.level.getBlock([x-2, y, z-1])=='minecraft:sandstone') &&(b.level.getBlock([x-2, y, z])=='minecraft:bone_block') &&(b.level.getBlock([x-2, y, z+1])=='minecraft:sandstone') &&(b.level.getBlock([x-2, y, z+2])=='minecraft:bone_block')&&(b.level.getBlock([x+2, y, z-2])=='minecraft:bone_block') &&(b.level.getBlock([x+2, y, z-1])=='minecraft:sandstone') &&(b.level.getBlock([x+2, y, z])=='minecraft:bone_block') &&(b.level.getBlock([x+2, y, z+1])=='minecraft:sandstone') &&(b.level.getBlock([x+2, y, z+2])=='minecraft:bone_block')&&(b.level.getBlock([x+1, y, z-2])=='minecraft:sandstone') &&(b.level.getBlock([x+1, y, z+2])=='minecraft:sandstone')&&(b.level.getBlock([x, y, z-2])=='minecraft:bone_block') &&(b.level.getBlock([x, y, z+2])=='minecraft:bone_block')&&(b.level.getBlock([x-1, y, z-2])=='minecraft:sandstone') &&(b.level.getBlock([x-1, y, z+2])=='minecraft:sandstone')){
    b.level.getBlock([x, y, z]).set('air');
    b.level.getBlock([x+1, y, z]).set('air');
    b.level.getBlock([x+2, y, z]).set('air');
    b.level.getBlock([x-1, y, z]).set('air');
    b.level.getBlock([x-2, y, z]).set('air');
    b.level.getBlock([x, y, z+1]).set('air');
    b.level.getBlock([x+1, y, z+1]).set('air');
    b.level.getBlock([x+2, y, z+1]).set('air');
    b.level.getBlock([x-1, y, z+1]).set('air');
    b.level.getBlock([x-2, y, z+1]).set('air');
    b.level.getBlock([x, y, z+2]).set('air');
    b.level.getBlock([x+1, y, z+2]).set('air');
    b.level.getBlock([x+2, y, z+2]).set('air');
    b.level.getBlock([x-1, y, z+2]).set('air');
    b.level.getBlock([x-2, y, z+2]).set('air');
    b.level.getBlock([x, y, z-1]).set('air');
    b.level.getBlock([x+1, y, z-1]).set('air');
    b.level.getBlock([x+2, y, z-1]).set('air');
    b.level.getBlock([x-1, y, z-1]).set('air');
    b.level.getBlock([x-2, y, z-1]).set('air');
    b.level.getBlock([x, y, z-2]).set('air');
    b.level.getBlock([x+1, y, z-2]).set('air');
    b.level.getBlock([x+2, y, z-2]).set('air');
    b.level.getBlock([x-1, y, z-2]).set('air');
    b.level.getBlock([x-2, y, z-2]).set('air');
    b.server.runCommandSilent(`summon cataclysm:ancient_remnant ${x} ${y} ${z}`);
}
})