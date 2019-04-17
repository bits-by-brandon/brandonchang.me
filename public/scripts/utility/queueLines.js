"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utility/utils");
exports.queueLines = (lines, queue, lineCallback, time = 300) => {
    // Create a Promise for each line
    const lineActions = lines.map(line => () => __awaiter(this, void 0, void 0, function* () {
        yield utils_1.delay(time);
        // queueLine(line, queue, lineCallback, options.letterDelay);
        lineCallback(line);
    }));
    // Add all actions to queueLines
    queue.addAll(lineActions);
};
exports.queueLine = (line, queue, callback, time = 30) => {
    // Split the line into letters
    const letters = line.split('');
    // Create a Promise for each letter
    const letterActions = letters.map(letter => () => __awaiter(this, void 0, void 0, function* () {
        yield utils_1.delay(time);
        callback(letter);
    }));
    // Add all actions to queueLines
    queue.addAll(letterActions);
};
//# sourceMappingURL=queueLines.js.map