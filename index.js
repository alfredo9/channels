const channels = [
  '1-1 Azteca Uno	Spanish',
  '1-2 adn 40	Spanish',
  '3-1 Imagen	Spanish',
  '3-4 Excélsior Spanish',
  '6-1 Canal 5	Spanish',
  '8-1 CBS 8',
  '8-2 The CW',
  '8-3 Laff',
  '8-4 Crime',
  '8-5 Quest',
  '8-6 Twist',
  '9-1 Estrella TV	Spanish',
  '10-1 ABC',
  '10-2 Me-TV',
  '10-3 Grit',
  '10-4 Ion Mystery',
  '10-5 Bounce',
  '10-6 Scripps',
  '11-1 Once TV	Spanish',
  '11-2 Once Niños Spanish',
  '12-1 Televisa 12	Spanish',
  '15-1 PBS',
  '15-2 KPBS2',
  '15-3 Create',
  '15-4 PBS Kids',
  '16-1 Gala TV Nu9ve  Spanish',
  '19-1 De las Estrellas	Spanish',
  '19-2 Foro TV	Spanish',
  '21-1 El Siete	Spanish',
  '21-2 A+ TV	Spanish',
  '33-1 Azteca America Spanish',
  '33-2 LATV',
  '36-1 UniMás Spanish',
  '36-17 Univision Spanish',
  '39-1 NBC',
  '39-2 COZI-TV',
  '39-3 NBC Lx News',
  '39-4 Oxigen',
  '48-1 Telemundo Spanish',
  '48-2 TeleXitos Spanish',
  '49-1 Milenio TV Spanish',
  '50-1 NuestraVisión Spanish',
  '50-2 Defy',
  '50-3 True Real',
  '50-4 Canal Fe Spanish',
  '50-5 The Grio',
  '50-6 Sintesis TV Spanish',
  '50-7 KSDY LD',
  '51-1 KUSI',
  '69-1 Fox 5',
  '69-2 Antenna TV',
  '69-3 Court TV',
  '69-4 ION',
  '69-5 Rewind',
];

const channelSection = document.querySelector('section');
const mxFlag = document.querySelector('#mxFlag');
const usFlag = document.querySelector('#usFlag');

for (let i = 0; i < channels.length; i++) {
  const channel = document.createElement('div');
  channel.setAttribute('class', 'channel');
  const firstSpace = channels[i].indexOf(' ');
  const channelNumber = channels[i].substring(0, firstSpace);
  const channelName = channels[i].substring(firstSpace).replace('Spanish', '');
  const spanish = channels[i].indexOf('Spanish') != -1;
  const flagClone = spanish ? mxFlag.cloneNode(true) : usFlag.cloneNode(true);
  flagClone.setAttribute('class', 'topRight');
  const elem1 = document.createElement('button');
  elem1.innerText = channelNumber;
  const elem2 = document.createElement('span');
  elem2.innerText = channelName;
  channel.append(elem1, elem2, flagClone);
  channelSection.appendChild(channel);
}

mxFlag.setAttribute('style', 'display:none');
usFlag.setAttribute('style', 'display:none');
