const audioContext = new AudioContext();
let oscillator;
let type;
// const gainNode = audioContext.createGain();

export function startOsc(frequency, volume, waveType) {
    oscillator = audioContext.createOscillator()
    oscillator.type = "sine";
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
}

export function playSound(frequency) {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    console.log("started");
    // oscillator.stop(audioContext.currentTime + 1);

    return () => {
        oscillator.stop();
        oscillator.disconnect();
    };
}

export function changeType(type) {
    if ()
} v