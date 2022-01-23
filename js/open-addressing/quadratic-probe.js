function drawHashMap(hashes) {
    return `<div style="border:1px solid black;width:max-content;display:grid;grid-template-columns: 1fr 1fr;">${Object.keys(hashes).map(hash => {
        return `<div>${hash}</div><div>${hashes[hash]}</div>`
    }).join("")}</div>`
}

function oldQuadraticProbe(elements) {
    let n = elements.length

    let hashes = {};

    let result = elements.map(element => {
        let res = '<div style="display: grid; grid-template-columns: max-content max-content; grid-column-gap: 1rem">';
        let i = 0, c1 = 1, c2 = 3;
        let hash = (element + c1 * i + c2 * (i ** 2)) % n;
        res += `<div>H(${element})</div><div> = {${element} + (${c1} * ${i}) + [${c2} * (${i} ^ 2)]} % ${n} = ${hash}</div>`;

        while (hash in hashes && i < 4) {
            i++;
            hash = (element + c1 * i + c2 * (i**2)) % n;
            res += `<div></div><div> = {${element} + (${c1} * ${i}) + [${c2} * (${i} ^ 2)]} % ${n} = ${hash}</div>`
        }
        hashes[hash] = element;
        return `${res}</div><div>${drawHashMap(hashes)}</div>`;
    })

    document.getElementById("result").innerHTML = `
    <div style="display: grid; grid-template-columns: max-content max-content; gap: 1rem">
        ${result.map(e => `${e}`).join("")}
    </div>`
}

function quadraticProbe(elements) {
    let n = elements.length

    let hashes = {};

    let result = elements.map(element => {
        let res = '<div style="display: grid; grid-template-columns: max-content max-content; grid-column-gap: 1rem">';
        let i = 0, c1 = 1, c2 = 3;
        let hash = (element + i * i) % n;
        res += `<div>H(${element})</div><div> = {${element} + (${i} * ${i}) % ${n} = ${hash}</div>`;

        while (hash in hashes) {
            i++;
            hash = (element + i * i) % n;
            res += `<div>H(${element})</div><div> = {${element} + (${i} * ${i}) % ${n} = ${hash}</div>`;
        }
        hashes[hash] = element;
        return `${res}</div><div>${drawHashMap(hashes)}</div>`;
    })

    document.getElementById("result").innerHTML = `
    <div style="display: grid; grid-template-columns: max-content max-content; gap: 1rem">
        ${result.map(e => `${e}`).join("")}
    </div>`
}