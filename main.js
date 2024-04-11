import * as Tone from 'https://cdn.skypack.dev/tone';
import * as Nexus from 'https://cdn.jsdelivr.net/npm/nexusui@latest/dist/NexusUI.js';

//const synth = new Tone.Synth().toDestination();


var piano = new Nexus.Piano('#piano', {
    'size': [1000, 250],
    'mode': 'button', // 'button', 'toggle', or 'impulse'
    'lowNote': 24,
    'highNote': 60
});
synth.triggerAttackRelease("C4", "8n");
piano.on('change', function(v) {
    synth.play(v)
})

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('button').addEventListener('click', async() => {
        // await Tone.start()
        console.log('audio is ready')

    })
})