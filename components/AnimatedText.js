import React, { Component, useState, useRef, useEffect } from "react";

const useFrameCounter = () => {
    const [frame, setFrame] = useState(0);

    // Start animation on mount
    useEffect(() => {
        let drawing = true;

        const step = () => {
            if (!drawing) return;

            setFrame(prevFrame => prevFrame + 1);
            window.requestAnimationFrame(step);
        };

        step();

        return () => {
            drawing = false;
        };
    }, []);

    return frame;
};

const useTextAnimation = (text, params) => {
    const frame = useFrameCounter();
    const [animFrame, setAnimFrame] = useState(0);
    const [currentText, setCurrentText] = useState(text);

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

            setCurrentText(chars.join(""));
        },
        [frame]
    );

    return currentText;
};

const AnimatedText = ({ props, children }) => {
    const text = children;
    const animatedText = useTextAnimation(text, {
        type: 1,
        speed: 10,
        charset: "°=+/*-O8?",
        count: 1
    });

    return <div>{animatedText}</div>;
};

export default AnimatedText;
