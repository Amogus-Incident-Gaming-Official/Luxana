ServerEvents.customCommand('origin', event => {
    event.server.runCommand('origin gui ' + event.player.username)
})
