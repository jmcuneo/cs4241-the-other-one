//todo
// sipmle oscillator when div/button is clicked, playing note
// radio button that chooses the sound to play
// slider to change volume

import { startOsc, stopOsc } from "./piano.js";

let volumeModifier;

window.onload = () => {
    volumeModifier = document.getElementById("volume-slider").value * 0.01;
    soundTypeButtons();
    Array.from(document.getElementsByClassName("piano-key")).forEach(
        (element) => {
            //assign audio
            let frequency = parseFloat(element.getAttribute("data-freq"));
            if (isNaN(frequency)) {
                frequency = 3000;
            }

            let stopSound;

            element.addEventListener("mousedown", () => {
                startOsc(frequency, volumeModifier, 0)
                // stopSound = playSound(frequency);
                // console.log(volumeModifier);
                // gainNode.gain.setValueAtTime(volumeModifier, audioContext.currentTime);
            });

            element.addEventListener("mouseup", () => {
                stopOsc()
                // gainNode.gain.setValueAtTime(0, audioContext.currentTime);
                // if (stopSound) {
                //     stopSound(  );
                // }
            });

            // element.addEventListener("mouseleave", () => {
            //     gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            //     if (stopSound) {
            //         stopSound();
            //     }
            // });
        }
    );
};

export function setVolumeModifier(value) {
    volumeModifier = value * 0.01;
}

const WAVE_TYPES = ["wave", "tri", "square"];
function soundTypeButtons() {
    let wave_type = 0;
    let buttons = document.querySelector(".wave-type-grid").children;
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].onclick = () => {
            for (let i = 0; i < buttons.length; i++) {
                if (j == i) buttons[i].classList.add("checked");
                else buttons[i].classList.remove("checked");

                //TODO: set wave type with wave_type
            }
        };
    }
}
