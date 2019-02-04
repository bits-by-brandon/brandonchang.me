import {delay} from "../utility/utils";

export const queueLines = (lines, queue, lineCallback, time = 300) => {
    // Create a Promise for each line
    const lineActions = lines.map(line => async () => {
        await delay(time);
        // queueLine(line, queue, lineCallback, options.letterDelay);
        lineCallback(line);
    });

    // Add all actions to queueLines
    queue.addAll(lineActions);
};

export const queueLine = (line, queue, callback, time = 30) => {
    // Split the line into letters
    const letters = line.split('');

    // Create a Promise for each letter
    const letterActions = letters.map(letter => async () => {
        await delay(time);
        callback(letter);
    });

    // Add all actions to queueLines
    queue.addAll(letterActions);
};