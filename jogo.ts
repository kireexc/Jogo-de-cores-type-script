const arrayCores = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque",
    "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue",
    "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan",
    "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
    "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
    "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia",
    "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow",
    "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender",
    "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow",
    "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue",
    "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen",
    "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen",
    "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream",
    "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab",
    "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed",
    "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple",
    "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
    "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray",
    "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle",
    "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen",
];

function getRandomArbitraryColorNumber(max) {
    return Math.floor(Math.random() * max);
}

const arrayColorShuffled = new Array(10);

for(var i=0; i<arrayColorShuffled.length; i++){
    do{
        var randomNumber = getRandomArbitraryColorNumber(arrayCores.length);
    }while(arrayColorShuffled.includes(randomNumber));
    arrayColorShuffled[i] = arrayCores[randomNumber];
    console.log(randomNumber+1, arrayCores[randomNumber]);
}
arrayColorShuffled.sort();

var corEscolhida =  arrayColorShuffled[getRandomArbitraryColorNumber(arrayColorShuffled.length)];
var gameIsNotOver = true;
var valorDigitado = "";

while(gameIsNotOver){

    valorDigitado = window.prompt(
        "Bem vindo ao jogo das cores, escolha uma das cores abaixo!\n"+
        "Estou pensando em "+ corEscolhida +" alguma dessas cores:\n" +
        arrayColorShuffled.join(' || ') + "\n" +
        "Qual é a cor?");

    if(valorDigitado.toUpperCase() == corEscolhida.toUpperCase()){
            gameIsNotOver = false;
                alert("Você acertou !");
                document.body.style.backgroundColor = valorDigitado;
            }else if(valorDigitado == ""){
                alert("Digite algo!");
            }
            else {
                alert(
                    "Esta não é a cor correta!\n\nDica: A sua cor está alfabeticamente"
                    + (valorDigitado.toLowerCase() > corEscolhida.toLowerCase() ? " DEPOIS " : " ANTES ")
                    + "da que foi escolhida. \nTente novamente!");
            }
}