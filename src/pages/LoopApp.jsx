import { useState } from "react";
import {
  playSound,
  pouseSound,
  playAllSounds,
  playInLoop,
} from "../services/loopService.js";
const sounds = [
  "funk",
  "breakbeats",
  "bass",
  "electric",
  "fud",
  "groov",
  "politics",
  "groov2",
  "silent",
];
export const LoopApp = () => {
  const [soundStatus, setSoundStatus] = useState({
    name: "",
    condition: false,
  });
  const [counter, setCounter] = useState(0);
  const tuggleSound = (sound, action) => {
    if (action === "play") {
      setSoundStatus({ name: sound, condition: true });
      playSound(sound);
      var interval = setInterval(() => {
        setCounter((counter) => (counter += 1));
      }, 1000);
      setTimeout(() => clearInterval(interval), 8000);
    } else {
      clearInterval(interval);
      setCounter(0);
      pouseSound("sound");
      setSoundStatus({ name: "", condition: false });
    }
  };
  return (
    <section className="loop-app">
      {sounds.map((sound) => (
        <div key={sound} className={sound}>
          {soundStatus.name !== sound && (
            <button onClick={() => tuggleSound(sound, "play")}>▶</button>
          )}
          {soundStatus.name === sound && soundStatus.condition && (
            <button onClick={() => tuggleSound(sound, "pouse")}>| |</button>
          )}
          <div
            className="cursor"
            style={
              soundStatus.name === sound
                ? { marginLeft: counter + "0%" }
                : { marginLeft: "0%" }
            }
          ></div>
        </div>
      ))}
      <div className="page-bottom">
        <button onClick={() => playAllSounds()}>▶</button>
        <button onClick={() => pouseSound("sounds")}>| |</button>
        <button onClick={() => playInLoop()}>🗘</button>
      </div>
    </section>
  );
};
