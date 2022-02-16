function drawHashMap(hashes) {
  return `<div style="border:1px solid black;width:max-content;display:grid;grid-template-columns: 1fr 1fr;">${Object.keys(
    hashes
  )
    .map((hash) => {
      return `<div>${hash}</div><div>${hashes[hash]}</div>`;
    })
    .join("")}</div>`;
}

function oldDoubleHashing(elements, len) {
  let n = len ? len : elements.length;

  let hashes = {};

  let result = elements.map((element) => {
    let res =
      '<div style="display: grid; grid-template-columns: min-content max-content; grid-column-gap: 1rem">';

    let i = 0;

    let hash = (element + i * (1 + (element % (n - 1)))) % 7;
    res += `<div>H(${element})</div><div> = [${element} + ${i} * (1 + ${element} % ${
      n - 1
    })] % ${n} = ${hash}</div>`;

    while (hash in hashes && i < 4) {
      i++;
      hash = (element + i * (1 + (element % (n - 1)))) % 7;
      res += `<div></div><div> = [${element} + ${i} * (1 + ${element} % ${
        n - 1
      })] % ${n} = ${hash}</div>`;
    }

    hashes[hash] = element;
    return `${res}</div><div>${drawHashMap(hashes)}</div>`;
  });

  document.getElementById("result").innerHTML = `
    <div style="display: grid; grid-template-columns: max-content max-content; gap: 1rem">
        ${result.map((e) => `${e}`).join("")}
    </div>`;
}
function doubleHashing(elements, len) {
  let n = len ? len : elements.length;

  let hashes = {};

  let result = elements.map((element) => {
    let res =
      '<div style="display: grid; grid-template-columns: min-content max-content; grid-column-gap: 1rem">';

    let i = 0;

    let hash = (element + i * (1 + (element % (n - 1)))) % 7;
    res += `<div>H(${element})</div><div> = [${element} + ${i} * (1 + ${element} % ${
      n - 1
    })] % ${n} = ${hash}</div>`;

    while (hash in hashes && i < 4) {
      i++;
      hash = (element + i * (1 + (element % (n - 1)))) % 7;
      res += `<div></div><div> = [${element} + ${i} * (1 + ${element} % ${
        n - 1
      })] % ${n} = ${hash}</div>`;
    }

    hashes[hash] = element;
    return `${res}</div><div>${drawHashMap(hashes)}</div>`;
  });

  document.getElementById("result").innerHTML = `
    <div style="display: grid; grid-template-columns: max-content max-content; gap: 1rem">
        ${result.map((e) => `${e}`).join("")}
    </div>`;
}
