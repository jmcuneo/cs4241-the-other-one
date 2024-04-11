const audioContext = new AudioContext();
let oscillator;
let osc_type = 'sine';

export function startOsc(frequency, volume) {
    oscillator = audioContext.createOscillator()
    oscillator.type = osc_type;
    oscillator.frequency.value = frequency;
    oscillator.start(0);
    let gain = audioContext.createGain()
    gain.gain.value = volume;
    oscillator.connect(gain);
    gain.connect(audioContext.destination)
}

export function stopOsc() {
    oscillator.stop(0);
    oscillator.disconnect();
    oscillator = undefined;
}

export function changeType(new_type) {
    osc_type = new_type
    if (oscillator) {
        oscillator.type = new_type;
    }
} 