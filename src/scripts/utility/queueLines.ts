import {delay} from "./utils";
import PQueue from "p-queue";

export const queueLines = (lines: string[], queue: PQueue, lineCallback: (l: string) => void, time = 300) => {
    // Create a Promise for each line
    const lineActions = lines.map(line => async () => {
        await delay(time);
        lineCallback(line);
    });

    // Add all actions to queueLines
    queue.addAll(lineActions);
};

