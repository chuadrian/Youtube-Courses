const conversionFactors = {
    length: {
        m: 1,
        km: 0.001,
        cm: 100,
        mm: 1000,
        in: 39.3701,
        ft: 3.28084,
        yd: 1.09361,
        mi: 0.000621371
    },
    weight: {
        kg: 1,
        g: 1000,
        mg: 1000000,
        lb: 2.20462,
        oz: 35.274
    },
    volume: {
        l: 1,
        ml: 1000,
        m3: 0.001,
        gal: 0.264172,
        qt: 1.05669,
        pt: 2.11338,
        cup: 4.22675,
        fl_oz: 33.814
    },
    area: {
        m2: 1,
        km2: 0.000001,
        cm2: 10000,
        mm2: 1000000,
        ha: 0.0001,
        ac: 0.000247105,
        ft2: 10.7639,
        in2: 1550,
        yd2: 1.19599
    },
    time: {
        s: 1,
        min: 1/60,
        h: 1/3600,
        d: 1/86400,
        wk: 1/604800,
        mo: 1/2592000,
        yr: 1/31536000
    }
};

function convert(type) {
    const input = document.getElementById(`${type}Input`).value;
    const from = document.getElementById(`${type}From`).value;
    const to = document.getElementById(`${type}To`).value;
    let result;

    if (type === 'temp') {
        result = convertTemperature(parseFloat(input), from, to);
    } else {
        const baseValue = input * conversionFactors[type][from];
        result = baseValue / conversionFactors[type][to];
    }

    document.getElementById(`${type}Result`).textContent = `Result: ${result.toFixed(4)} ${to}`;
}

function convertTemperature(value, from, to) {
    if (from === to) return value;
    if (from === 'c') {
        if (to === 'f') return (value * 9/5) + 32;
        if (to === 'k') return value + 273.15;
    }
    if (from === 'f') {
        if (to === 'c') return (value - 32) * 5/9;
        if (to === 'k') return (value - 32) * 5/9 + 273.15;
    }
    if (from === 'k') {
        if (to === 'c') return value - 273.15;
        if (to === 'f') return (value - 273.15) * 9/5 + 32;
    }
}
