ServerEvents.recipes(desertmedal => {
  desertmedal.shaped(
  Item.of('cataclysm:necklace_of_the_desert', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:gold_block',
    B: 'cataclysm:koboleton_bone',  //arg 3: the mapping object
    C: 'goety:animation_core'
  }
)
})
ServerEvents.recipes(altarfire => {
  altarfire.shaped(
  Item.of('cataclysm:altar_of_fire', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:iron_block',
    B: 'cataclysm:burning_ashes',  //arg 3: the mapping object
    C: 'goety:animation_core'
  }
)
})
ServerEvents.recipes(altarfish => {
  altarfish.shaped(
  Item.of('cataclysm:altar_of_abyss', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'minecraft:amethyst_block',
    B: 'minecraft:ender_pearl',  //arg 3: the mapping object
    C: 'goety:animation_core'
  }
)
})
ServerEvents.recipes(grave => {
  grave.shaped(
  Item.of('cataclysm:cursed_tombstone', 1), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'cataclysm:black_steel_block',
    B: 'goety:animation_core'  //arg 3: the mapping object
  }
)
})
ServerEvents.recipes(bsb => {
  bsb.shaped(
  Item.of('cataclysm:black_steel_block', 1), // arg 1: output
  [
    'AAA',
    'AAA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'cataclysm:black_steel_ingot'
      }
)
})