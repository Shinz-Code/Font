function exclam(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("exclam");

    width.setAttribute("width", 150);

    //Shape line
    const exclamLine = document.getElementById("exclamLine");
    let points = `${75-(t/2)}, ${150-w-5} ${75+(t/2)}, ${150-w-5} ${75+(w/2)}, 0 ${75-(w/2)},0`;
    exclamLine.setAttribute("points", points);
    exclamLine.setAttribute("fill", "black");

    //Shape dot
    const dot = document.getElementById("dot");
    dot.setAttribute("cx", 75);
    dot.setAttribute("cy", 150-w/2);
    dot.setAttribute("r", w/2);
    dot.setAttribute("fill", "black");
}

function doubleQuote(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("doubleQuote");

    width.setAttribute("width", 150);


    //Dot Left
    const dotLeft = document.getElementById("dotLeft");
    dotLeft.setAttribute("cx", 75-w/2-5);
    dotLeft.setAttribute("cy", w/2);
    dotLeft.setAttribute("r", w/2);
    dotLeft.setAttribute("fill", "black");

    //Dot Right
    const dotRight = document.getElementById("dotRight");
    dotRight.setAttribute("cx", 75+w/2+5);
    dotRight.setAttribute("cy", w/2);
    dotRight.setAttribute("r", w/2);
    dotRight.setAttribute("fill", "black");

    const quoteLeft = document.getElementById("quoteLeft");
    let path = `M ${75-5-(t/2)}, ${w/2} C ${75-5-(t/2)}, ${w} ${75-5-(w/2)}, ${w+w/4} ${75-5-w+w/3}, ${w+w/3}`;
    quoteLeft.setAttribute("d", path);
    quoteLeft.setAttribute("stroke-width", t);
    quoteLeft.setAttribute("stroke", "red");

    const quoteRight = document.getElementById("quoteRight");
    let path2 = `M ${75+5+w-(t/2)}, ${w/2} C ${75+5+w-(t/2)}, ${w} ${75+5+w/2}, ${w+w/4} ${75+5+w/3}, ${w+w/3}`;
    quoteRight.setAttribute("d", path2);
    quoteRight.setAttribute("stroke-width", t);
    quoteRight.setAttribute("stroke", "red");
}

function hashtag(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("hashtag");

    width.setAttribute("width", 150);

    let rad = 12 * Math.PI/180;
    let sudut = Math.tan(rad)*150;

    //Vertical Left
    const hashtagLineLeft = document.getElementById("hashtagLineLeft");
    let phl = `${75-w/2-sudut/2},150 ${75+w/2-sudut/2},150 ${75+w/2+sudut/2},0 ${75-w/2+sudut/2},0`;
    hashtagLineLeft.setAttribute("points", phl);
    hashtagLineLeft.setAttribute("fill", "Black");

    //Vertical Right
    const hashtagLineRight = document.getElementById("hashtagLineRight");
    let phr = `${75-w/2-sudut/2},150 ${75+w/2-sudut/2},150 ${75+w/2+sudut/2},0 ${75-w/2+sudut/2},0`;
    hashtagLineRight.setAttribute("points", phr);
    hashtagLineRight.setAttribute("fill", "Black");

    const h = 60;
    let sudutlite = Math.tan(rad)*h;

    //Hashtag Horizontal Top
    const hashtagLineTop = document.getElementById("hashtagLineTop");
    let pht = `${sudut*4.5},${75+t/2} ${150-sudut*4.5},${75+t/2} ${150-sudut*4.5},${75-t/2} ${sudut*4.5},${75-t/2}`;
    hashtagLineTop.setAttribute("points", pht);
    hashtagLineTop.setAttribute("transform", `translate(${0+sudutlite/2}, -30)`);
    hashtagLineTop.setAttribute("fill", "Black");

    //Hashtag Horizontal Bottom
    const hashtagLineBottom = document.getElementById("hashtagLineBottom");
    let phb = `${sudut*4.5},${75+t/2} ${150-sudut*4.5},${75+t/2} ${150-sudut*4.5},${75-t/2} ${sudut*4.5},${75-t/2}`;
    hashtagLineBottom.setAttribute("points", phb);
    hashtagLineBottom.setAttribute("transform", `translate(${-sudutlite/2}, 30)`);
    hashtagLineBottom.setAttribute("fill", "Black");
}

function dollar(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("dollar");

    width.setAttribute("width", 150);

    //Shape line
    const dollarLine = document.getElementById("dollarLine");
    dollarLine.setAttribute("stroke-width", t);
}

function percent(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("percent");

    width.setAttribute("width", 150);

    let rad = 30 * Math.PI/180;
    let sudut = Math.tan(rad)*150;

    //Shape line
    const percentLine = document.getElementById("percentLine");
    let line = `${75-t/2-sudut/2},150 ${75+t/2-sudut/2},150 ${75+t/2+sudut/2},0 ${75-t/2+sudut/2},0`;
    percentLine.setAttribute("points", line);

    //Shape dot Top
    const dotTop = document.getElementById("percentDotRight");
    dotTop.setAttribute("cx", 75);
    dotTop.setAttribute("cy", 75);
    dotTop.setAttribute("r", 75/2);
    dotTop.setAttribute("fill", "black");
    dotTop.setAttribute("transform", `translate(${75/2}, ${75/2})`);

    //Shape dot Top Inner
    const dotTopInner = document.getElementById("percentDotRightInner");
    dotTopInner.setAttribute("cx", 75);
    dotTopInner.setAttribute("cy", 75);
    dotTopInner.setAttribute("rx", 75/2-w);
    dotTopInner.setAttribute("ry", 75/2-t);
    dotTopInner.setAttribute("fill", "white");
    dotTopInner.setAttribute("transform", `translate(${75/2}, ${75/2})`);

    //Shape dot Bottom
    const dotBottom = document.getElementById("percentDotLeft");
    dotBottom.setAttribute("cx", 75);
    dotBottom.setAttribute("cy", 75);
    dotBottom.setAttribute("r", 75/2);
    dotBottom.setAttribute("fill", "black");
    dotBottom.setAttribute("transform", `translate(${-75/2}, ${-75/2})`);
    

    //Shape dot Bottom Inner
    const dotBottomInner = document.getElementById("percentDotLeftInner");
    dotBottomInner.setAttribute("cx", 75);
    dotBottomInner.setAttribute("cy", 75);
    dotBottomInner.setAttribute("rx", 75/2-w);
    dotBottomInner.setAttribute("ry", 75/2-t);
    dotBottomInner.setAttribute("fill", "white");
    dotBottomInner.setAttribute("transform", `translate(${-75/2}, ${-75/2})`);
}

function singleQuote(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("singleQuote");

    width.setAttribute("width", 150);

    //Shape dot

    //Dot Left
    const dot = document.getElementById("singleQuoteDot");
    dot.setAttribute("cx", 75-w/2-5);
    dot.setAttribute("cy", w/2);
    dot.setAttribute("r", w/2);
    dot.setAttribute("fill", "black");
    dot.setAttribute("transform", `translate(${w-5}, 0)`);


    const line = document.getElementById("singleQuoteLine");
    let path = `M ${75-5-(t/2)}, ${w/2} C ${75-5-(t/2)}, ${w} ${75-5-(w/2)}, ${w+w/4} ${75-5-w+w/3}, ${w+w/3}`;
    line.setAttribute("d", path);
    line.setAttribute("stroke-width", t);
    line.setAttribute("stroke", "red");
    line.setAttribute("transform", `translate(${w-5}, 0)`);

}

function parentLeft(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("parentLeft");

    width.setAttribute("width", 150);

    //Shape line
    const parentLeftLine = document.getElementById("parentLeftLine");
    let path = `M 75,150 L75,${150-t} 
    C 55,${150-t} 50, 125 50, 75 
    C 50,25 55,${t} 75,${t} L75,0 
    C ${75-(w/2)},0 ${50-w},0 ${50-w},75 
    C ${50-w},150 ${75-(w/2)},150 75,150`;
    parentLeftLine.setAttribute("d", path);
    parentLeftLine.setAttribute("fill", "black");
    parentLeftLine.setAttribute("transform", `translate(${w/2}, 0)`);
}

function parentRight(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("parentRight");

    width.setAttribute("width", 150);

    //Shape line
    const parentRightLine = document.getElementById("parentRightLine");
    let path = `M 75,150 L75,${150-t} 
    C 55,${150-t} 50, 125 50, 75 
    C 50,25 55,${t} 75,${t} L75,0 
    C ${75-(w/2)},0 ${50-w},0 ${50-w},75 
    C ${50-w},150 ${75-(w/2)},150 75,150`;
    parentRightLine.setAttribute("d", path);
    parentRightLine.setAttribute("fill", "black");
    parentRightLine.setAttribute("transform", `scale(-1,1) translate(${-150 + w/2}, 0)`);
}

function asterisk(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("Asterisk");

    width.setAttribute("width", 150);

    //Shape line
    const asteriskA = document.getElementById("asteriskA");
    asteriskA.setAttribute("stroke-width", t);

    const asteriskB = document.getElementById("asteriskB");
    asteriskB.setAttribute("stroke-width", t);

    const asteriskC = document.getElementById("asteriskC");
    asteriskC.setAttribute("stroke-width", t);
}

function plus(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("plus");

    width.setAttribute("width", 150);

    //Shape line
    const vertical = document.getElementById("vertical");
    vertical.setAttribute("stroke-width", t);

    const horizontal = document.getElementById("horizontal");
    horizontal.setAttribute("stroke-width", t);
}

function comma(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("comma");

    width.setAttribute("width", 150);

    //Dot Left
    const dot = document.getElementById("commaDot");
    dot.setAttribute("cx", 75-w/2-5);
    dot.setAttribute("cy", w/2);
    dot.setAttribute("r", w/2);
    dot.setAttribute("fill", "black");
    dot.setAttribute("transform", `translate(${w-5}, ${150-w})`);


    const line = document.getElementById("commaLine");
    let path = `M ${75-5-(t/2)}, ${w/2} C ${75-5-(t/2)}, ${w} ${75-5-(w/2)}, ${w+w/4} ${75-5-w+w/3}, ${w+w/3}`;
    line.setAttribute("d", path);
    line.setAttribute("stroke-width", t);
    line.setAttribute("stroke", "red");
    line.setAttribute("transform", `translate(${w-5}, ${150-w})`);     
}

function minus(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("minus");

    width.setAttribute("width", 150);

    //Shape line
    const minusLine = document.getElementById("minusLine");
    minusLine.setAttribute("stroke-width", t);
}

function period(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("period");

    width.setAttribute("width", 150);

    //Dot Left
    const dot = document.getElementById("periodDot");
    dot.setAttribute("cx", 75);
    dot.setAttribute("cy", w/2);
    dot.setAttribute("r", w/2);
    dot.setAttribute("fill", "black");
    dot.setAttribute("transform", `translate(${0}, ${150-w})`);
}

function slash(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("slash");

    width.setAttribute("width", 150);

    let rad = 30 * Math.PI/180;
    let sudut = Math.tan(rad)*150;

    //Shape line
    const slashLine = document.getElementById("slashLine");
    let line = `${75-t/2-sudut/2},150 ${75+t/2-sudut/2},150 ${75+t/2+sudut/2},0 ${75-t/2+sudut/2},0`;
    slashLine.setAttribute("points", line);

}

function colon(){
    const w = Number(document.getElementById("tebal").value);

    const colonTop = document.getElementById("colonTop");
    colonTop.setAttribute("cx", 75);
    colonTop.setAttribute("cy", 75);
    colonTop.setAttribute("r", w/2);
    colonTop.setAttribute("fill", "black");

    const colonBottom = document.getElementById("colonBottom");
    colonBottom.setAttribute("cx", 75);
    colonBottom.setAttribute("cy", 150-w/2);
    colonBottom.setAttribute("r", w/2);
    colonBottom.setAttribute("fill", "black");
}

function semicolon(){
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const width = document.getElementById("semicolon");

    width.setAttribute("width", 150);

    const colon = document.getElementById("semicolonDotTop");
    colon.setAttribute("cx", 75-w/2-5);
    colon.setAttribute("cy", 75);
    colon.setAttribute("r", w/2);
    colon.setAttribute("fill", "black");
    colon.setAttribute("transform", `translate(${w-5}, 0)`);

    const dot = document.getElementById("semicolonDotBottom");
    dot.setAttribute("cx", 75-w/2-5);
    dot.setAttribute("cy", w/2);
    dot.setAttribute("r", w/2);
    dot.setAttribute("fill", "black");
    dot.setAttribute("transform", `translate(${w-5}, ${150-w})`);


    const line = document.getElementById("semicolonLine");
    let path = `M ${75-5-(t/2)}, ${w/2} C ${75-5-(t/2)}, ${w} ${75-5-(w/2)}, ${w+w/4} ${75-5-w+w/3}, ${w+w/3}`;
    line.setAttribute("d", path);
    line.setAttribute("stroke-width", t);
    line.setAttribute("stroke", "red");
    line.setAttribute("transform", `translate(${w-5}, ${150-w})`);
}

function lessthan(){
    const t = Number(document.getElementById("tipis").value);

    const lessthan = document.getElementById("lessthanLineA");
    lessthan.setAttribute("stroke-width", t);

    const lessthanB = document.getElementById("lessthanLineB");
    lessthanB.setAttribute("stroke-width", t);
    
}

function equal(){
    const t = Number(document.getElementById("tipis").value);

    equalLineA.setAttribute("stroke-width", t);
    equalLineB.setAttribute("stroke-width", t);
}

function morethan(){
    const t = Number(document.getElementById("tipis").value);

    const morethan = document.getElementById("morethanLineA");
    morethan.setAttribute("stroke-width", t);

    const morethanB = document.getElementById("morethanLineB");
    morethanB.setAttribute("stroke-width", t);
    
}

function braceleft() {
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const braceVertical = document.getElementById("braceVertical");
    braceVertical.setAttribute("width", w);
    braceVertical.setAttribute("height", 150);
    braceVertical.setAttribute("x", 75-w);
    braceVertical.setAttribute("y", 0);

    const braceTop = document.getElementById("braceTop");
    braceTop.setAttribute("width", w*3/2);
    braceTop.setAttribute("height", t);
    braceTop.setAttribute("x", 75-w);
    braceTop.setAttribute("y", 0);

    const braceBottom = document.getElementById("braceBottom");
    braceBottom.setAttribute("width", w*3/2);
    braceBottom.setAttribute("height", t);
    braceBottom.setAttribute("x", 75-w);
    braceBottom.setAttribute("y", 150-t);

}

function backslash() {
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const backslashLine = document.getElementById("backslashLine");
    width.setAttribute("width", 150);

    let rad = 30 * Math.PI/180;
    let sudut = Math.tan(rad)*150;

    //Shape line
    const slashLine = document.getElementById("slashLine");
    let line = `${75-t/2-sudut/2},150 ${75+t/2-sudut/2},150 ${75+t/2+sudut/2},0 ${75-t/2+sudut/2},0`;
    slashLine.setAttribute("points", line);
}

function braceright() {
    const w = Number(document.getElementById("tebal").value);
    const t = Number(document.getElementById("tipis").value);

    const braceVertical = document.getElementById("braceVertical");
    braceVertical.setAttribute("width", w);
    braceVertical.setAttribute("height", 150);
    braceVertical.setAttribute("x", 75-w);
    braceVertical.setAttribute("y", 0);

    const braceTop = document.getElementById("braceTop");
    braceTop.setAttribute("width", w*3/2);
    braceTop.setAttribute("height", t);
    braceTop.setAttribute("x", 75-w);
    braceTop.setAttribute("y", 0);

    const braceBottom = document.getElementById("braceBottom");
    braceBottom.setAttribute("width", w*3/2);
    braceBottom.setAttribute("height", t);
    braceBottom.setAttribute("x", 75-w);
    braceBottom.setAttribute("y", 150-t);

}

// Tombol akan panggil kedua fungsi
function buat(){
    exclam();
    doubleQuote();
    hashtag();
    dollar();
    percent();
    singleQuote();
    parentLeft();
    parentRight();
    asterisk();
    plus();
    comma();
    minus();
    period();
    slash();
    colon();
    semicolon();
    lessthan();
    equal();
    morethan();
    braceleft();
}

document.addEventListener("DOMContentLoaded", buat);

document.addEventListener("input", buat);

function downloadSVG() {
    // Ambil semua elemen <svg>
    const svgs = document.querySelectorAll("svg");

    let combinedContent = "";
    let offsetX = 0; // posisi x awal
    const spacing = 20; // jarak antar glyph

    svgs.forEach(svg => {
        // Ambil isi dalam SVG (tanpa tag <svg>)
        const content = svg.innerHTML;

        // Ambil lebar asli dari atribut <svg>
        const w = parseInt(svg.getAttribute("width")) || 200;
        const h = parseInt(svg.getAttribute("height")) || 150;

        // Bungkus isi svg ke dalam <g> dan geser ke kanan
        combinedContent += `<g transform="translate(${offsetX},0)">${content}</g>`;

        // Tambah offset untuk glyph berikutnya
        offsetX += w + spacing;
    }); 

    // Hitung total lebar
    const totalWidth = offsetX;
    const totalHeight = 200; // tinggi default (bisa disesuaikan)

    // Buat file SVG baru (gabungan semua)
    const finalSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth*10}" height="${totalHeight*10}">
            <g transform="scale(10)">
                ${combinedContent}
            </g>
        </svg>
    `;

    // Buat blob untuk download
    const blob = new Blob([finalSVG], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);

    // Buat link download
    const a = document.createElement("a");
    a.href = url;
    a.download = "glyphs.svg";
    document.body.appendChild(a);
    a.click();

    // Bersihkan
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

