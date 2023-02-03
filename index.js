var channels = [
  "1-1 Azteca Uno	Spanish",
  "1-2 adn 40	Spanish",
  "3-1 Imagen	Spanish",
  "3-4 Excélsior Spanish",
  "6-1 Canal 5	Spanish",
  "9-1 Estrella TV	Spanish",
  "10-1 ABC	English",
  "10-2 Me-TV	English",
  "10-3 Laff	English",
  "10-4 Escape	English",
  "11-1 Once TV	Spanish",
  "11-2 Once Niños Spanish",
  "12-1 Televisa 12	Spanish",
  "15-1 PBS	English",
  "15-2 KPBS2	English",
  "15-3 Create	English",
  "15-4 PBS Kids English",
  "19-1 De las Estrellas	Spanish",
  "19-2 Foro TV	Spanish",
  "21-1 El Siete	Spanish",
  "21-2 A+ TV	Spanish",
  "33-1 Azteca America Spanish",
  "33-2 LATV English",
  "36-1 UniMás Spanish",
  "36-17 Univision Spanish",
  "39-1 NBC English",
  "39-2 COZI-TV English",
  "45-1 Gala TV Spanish",
  "48-1 Telemundo Spanish",
  "48-2 TeleXitos Spanish",
  "49-1 Milenio TV Spanish",
  "50-1 NuestraVisión Spanish",
  "50-2 Bounce TV English",
  "50-3 Religious Spanish",
  "50-4 Sintesis TV Spanish",
  "51-1 KUSI English",
  "69-1 Fox 5 English",
  "69-2 Antenna TV English",
  "69-3 Court TV English",
  "69-4 ION English"
];

var channelSection = document.querySelector("section");
var mxFlag = document.querySelector("#mxFlag");
var usFlag = document.querySelector("#usFlag");

for (var i = 0; i < channels.length; i++) {
  var channel = document.createElement("div");
  channel.setAttribute("class", "channel");
  var firstSpace = channels[i].indexOf(" ");
  var channelNumber = channels[i].substring(0, firstSpace);
  var channelName = channels[i].replace(channelNumber, "");
  var isSpanish = channels[i].indexOf("Spanish") != -1;
  if (isSpanish) {
    channelName = channelName.replace("Spanish", "");
    var flagClone = mxFlag.cloneNode(true);
  } else {
    channelName = channelName.replace("English", "");
    var flagClone = usFlag.cloneNode(true);
  }
  flagClone.setAttribute("class", "topRight");
  var elem1 = document.createElement("button");
  elem1.innerText = channelNumber;
  var elem2 = document.createElement("span");
  elem2.innerText = channelName;
  channel.append(elem1, elem2, flagClone);
  channelSection.appendChild(channel);
}

mxFlag.setAttribute("style", "display:none");
usFlag.setAttribute("style", "display:none");
