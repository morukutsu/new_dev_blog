import React, { Component, useState, useRef, useEffect } from "react";

const useFrameCounter = drawing => {
    const [frame, setFrame] = useState(0);

    // Start animation on mount
    useEffect(
        () => {
            const step = () => {
                if (!drawing) return;

                setFrame(prevFrame => prevFrame + 1);
                window.requestAnimationFrame(step);
            };

            step();

            return () => {
                drawing = false;
            };
        },
        [drawing]
    );

    return frame;
};

const useTextAnimation = (text, params) => {
    const [animFrame, setAnimFrame] = useState(0);
    const [currentText, setCurrentText] = useState(text);
    const [step, setStep] = useState(0);
    const frame = useFrameCounter(step <= params.steps);

    useEffect(
        () => {
            const chars = text.split("");

            if (frame % params.speed == 0) setAnimFrame(prev => prev + 1);
            else return;

            if (params.type == 0) {
                chars[animFrame % text.length] = "O";
            } else if (params.type == 1) {
                for (let i = 0; i < params.count; i++) {
                    const index = Math.floor(Math.random() * text.length);
                    const charsetIndex = Math.floor(
                        Math.random() * params.charset.length
                    );
                    const char = params.charset.charAt(charsetIndex);

                    chars[index] = chars[index] != " " ? char : " ";
                }
            }

            if (step < params.steps) {
                setCurrentText(chars.join(""));
            } else {
                setCurrentText(text);
            }

            setStep(prev => prev + 1);
        },
        [frame]
    );

    return currentText;
};

const AnimatedText = props => {
    const text = props.children;
    const animatedText = useTextAnimation(text, props.parameters);
    return <div>{animatedText}</div>;
};

export default AnimatedText;
