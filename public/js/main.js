import { startOsc, stopOsc, changeType } from "./piano.js";

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

            element.addEventListener("mousedown", () => {
                startOsc(frequency, volumeModifier);
            });

            element.addEventListener("mouseup", () => {
                stopOsc();
            });
        }
    );
};

export function setVolumeModifier(value) {
    volumeModifier = value * 0.01;
}

const WAVE_TYPES = ["sine", "triangle", "square"];
function soundTypeButtons() {
    let wave_type = 0;
    let buttons = document.querySelector(".wave-type-grid").children;
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].onclick = () => {
            wave_type = j;
            changeType(WAVE_TYPES[j]);
            for (let i = 0; i < buttons.length; i++) {
                if (j == i) buttons[i].classList.add("checked");
                else buttons[i].classList.remove("checked");
            }
        };
    }
}
