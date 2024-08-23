PlayerEvents.loggedIn(e=>{
    if (!e.player.stages.has('starting_items')) {
        e.player.stages.add('starting_items')
        e.server.scheduleInTicks(50, callback => {
            e.player.give(Item.of('akashictome:tome', '{"akashictome:data":{alexscaves:{Count:1b,id:"alexscaves:cave_book"},alexsmobs:{Count:1b,id:"alexsmobs:animal_dictionary"},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},bloodmagic:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"bloodmagic:guide"}},botania:{Count:1b,id:"botania:lexicon"},embers:{Count:1b,id:"embers:ancient_codex"},goety:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"goety:black_book"}},goety_0:{Count:1b,id:"patchouli:guide_book",tag:{"akashictome:definedMod":"goety_0","patchouli:book":"goety:witches_brew"}},hexcasting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"hexcasting:thehexbook"}},irons_spellbooks:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}},mahoutsukai:{Count:1b,id:"mahoutsukai:guidebook"},naturesaura:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}},occultism:{Count:1b,id:"occultism:dictionary_of_spirits",tag:{"modonomicon:book_id":"occultism:dictionary_of_spirits"}},totemic:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"totemic:totempedia"}},vampirism:{Count:1b,id:"guideapi_vp:vampirism-guidebook"},wizards_reborn:{Count:1b,id:"wizards_reborn:arcanemicon"}}}'))
        });
    }
})

