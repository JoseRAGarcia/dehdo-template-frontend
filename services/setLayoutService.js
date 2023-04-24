import Color from 'color'

export default function () {
    const corPrimaria = Color('#B300B3')
    const corPrimariaDarken = corPrimaria.darken(0.2)
    const corPrimariaLighten = corPrimaria.lighten(0.2)


    document.body.style.setProperty(
        "--dd-primary",
        corPrimaria.hex()
    );
    document.body.style.setProperty(
        "--dd-primary-darken",
        corPrimariaDarken
    );
    document.body.style.setProperty(
        "--dd-primary-lighten",
        corPrimariaLighten
    );
    document.body.style.setProperty(
        "--dd-primary-rgb",
        hexToRgb(corPrimaria.hex())
    );

    document.body.style.setProperty(
        "--dd-secondary",
        '#a3888b'
    );
    document.body.style.setProperty(
        "--dd-dark",
        '#313735'
    );
    document.body.style.setProperty(
        "--dd-warning",
        '#f2c037'
    );
    document.body.style.setProperty(
        "--dd-light",
        '#EAEFF1'
    );

}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let rgb = result
        ? {
            r: parseInt(result[1], 16) * 0.8,
            g: parseInt(result[2], 16) * 0.8,
            b: parseInt(result[3], 16) * 0.8,
        }
        : null;
    return (
        rgb.r.toFixed(0) + ", " + rgb.g.toFixed(0) + ", " + rgb.b.toFixed(0)
    );
}