import { signal } from "@preact/signals-react";

const counter = signal(0)

const sum = () => {
    counter.value = counter.value + 1
}

export default counter;
export { sum };

