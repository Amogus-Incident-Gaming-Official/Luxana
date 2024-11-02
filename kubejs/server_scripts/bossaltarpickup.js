BlockEvents.placed("minecraft:crying_obsidian", f => {
    const {x, y, z} = f.block;
    if(f.level.getBlock([x, y-1, z]) =='cataclysm:altar_of_abyss'){
    f.level.getBlock([x, y-1, z]).set('air');
    f.level.getBlock([x, y-1, z]).set('air');
    
}
})
BlockEvents.placed("minecraft:crying_obsidian", t => {
    const {x, y, z} = t.block;
    if(t.level.getBlock([x, y-1, z]) =='cataclysm:cursed_tombstone'){
    t.level.getBlock([x, y-1, z]).set('air');
    t.level.getBlock([x, y-1, z]).set('air');
    
}
})
BlockEvents.placed("minecraft:crying_obsidian", n => {
    const {x, y, z} = n.block;
    if(n.level.getBlock([x, y-1, z]) =='cataclysm:altar_of_fire'){
    n.level.getBlock([x, y-1, z]).set('air');
    n.level.getBlock([x, y-1, z]).set('air');
    
}
})