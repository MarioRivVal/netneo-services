import { useEffect, useRef } from "react";

type Options = {
  holdMs?: number;
  fps?: number;
  loop?: boolean;
};

export default function useScramble(
  targetRef: React.RefObject<HTMLHeadingElement | null>,
  words: string[],
  { holdMs = 1200, fps = 30, loop = true }: Options = {}
) {
  const timersRef = useRef<{
    intervalId: number | null;
    timeoutId: number | null;
  }>({
    intervalId: null,
    timeoutId: null,
  });
  const wordIndexRef = useRef(0);

  useEffect(() => {
    const el = targetRef.current;
    if (!el || words.length === 0) return;

    const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&?";
    const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)];

    const clearAll = () => {
      if (timersRef.current.intervalId !== null) {
        clearInterval(timersRef.current.intervalId);
        timersRef.current.intervalId = null;
      }
      if (timersRef.current.timeoutId !== null) {
        clearTimeout(timersRef.current.timeoutId);
        timersRef.current.timeoutId = null;
      }
    };

    const showNext = () => {
      const word = words[wordIndexRef.current];
      wordIndexRef.current = (wordIndexRef.current + 1) % words.length;

      let locked = -1;
      let tick = 0;
      const len = word.length;

      clearAll();
      timersRef.current.intervalId = window.setInterval(() => {
        if (tick % 6 === 0) locked++;

        if (locked >= len) {
          el.textContent = word;
          if (timersRef.current.intervalId !== null) {
            clearInterval(timersRef.current.intervalId);
            timersRef.current.intervalId = null;
          }
          if (!loop && wordIndexRef.current === 0) return;
          timersRef.current.timeoutId = window.setTimeout(showNext, holdMs);
          return;
        }

        let out = "";
        for (let i = 0; i < len; i++) {
          out += i <= locked ? word[i] : randomChar();
        }
        el.textContent = out;
        tick++;
      }, 1000 / fps);
    };

    showNext();
    return clearAll;
  }, [targetRef, words, holdMs, fps, loop]);
}
