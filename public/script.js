const hamburgerMenu = document.querySelector('.hamburgerMenu');
const ulMenu = document.querySelector('.ulMenu');
const liLink = document.querySelectorAll('.liLink');

function mobileMenu() {
  hamburgerMenu.classList.toggle('active');
  ulMenu.classList.toggle('active');
}
hamburgerMenu.addEventListener('click', mobileMenu);

function closeMenu() {
  hamburgerMenu.classList.remove('active');
  ulMenu.classList.remove('active');
}

liLink.forEach((n) => n.addEventListener('click', closeMenu));

const guests = {
  guest1: {
    id: 1,
    name: 'Fawaz Milton',
    title: 'CEO and Director of Girl Child Education Organization',
    about: 'Fawaz discovered The Girl pinin 4 beteh organization in 2015. He studied Applied Accounting in the Institute of Public Administration and Management(IPAM) University.',
    checkersImage: '../images/checkerBackground.png',
    guestdImage: '../images/fawaz.jpg',
  },
  guest4: {
    id: 4,
    name: 'Sunkray Sunkarie',
    title: 'Founder and the CEO of the Sunkarie Foundation',
    about: 'She is a student of Frobay College (FBC)',
    checkersImage: '../images/checkerBackground.png',
    guestdImage: '../images/sunkari-foundation_n.jpg',
  },
  guest3: {
    id: 3,
    name: 'Santos Kamara',
    title: 'Founder and CEO of My Mother Choice Foundation',
    about: 'Student at Institute of Public Administration and Management(IPAM) University studying Applied Accounting ',
    checkersImage: '../images/checkerBackground.png',
    guestdImage: '../images/santos.jpg',
  },
  guest2: {
    id: 2,
    name: 'Fatima Bio',
    title: 'Founder of the women free education',
    about: 'She has a Bachelor of Arts degree in journalism at the University of the Arts, London College of Communication,',
    checkersImage: '../images/checkerBackground.png',
    guestdImage: '../images/fatima.jpg',
  },
  guest5: {
    id: 5,
    name: 'Idrissa Bangura ',
    title: 'Co-founder. of the Kids happiness foundation',
    about: 'Studied social works in University of Milton margai. Currently the CEO of kids happiness foundation in Sierra Leone .',
    checkersImage: '../images/checkerBackground.png',
    guestdImage: '../images/alabama.jpg',
  },
  speaker6: {
    id: 6,
    name: 'Saibatu Mansaray',
    title: 'Founder and CEO. The Saibatu Mansaray Journey',
    about: 'A retired milliatery woman in the united state of america (USA).',
    checkersImage: '../images/checkerBackground.png',
    guestdImage: '../images/saibatu-foundation.jpg',
  },

};

const guestsection = document.querySelector('.guestSpeakers');

Object.keys(guests).forEach((guest) => {
  if (Object.hasOwnProperty.call(guests, guest)) {
    const speaker = guests[guest];
    guestsection.innerHTML += `
        <li class="w-full flex md:space-x-5 justify-around mobile-speakers">
        <div class="speakerImg w-44 h-40 relative">
          <img class="checkers" src='${speaker.checkersImage}' alt=${speaker.about}/>
          <img class="speakers" src='${speaker.guestdImage}' alt=${speaker.about}/>
      </div>
        <div class="speakerAbt flex flex-col  w-2/3">
          <p class="text-gray-700 md:text-base py-1">${speaker.name}</p>
      <p class="text-red-700 md:text-base italic py-1 ">${speaker.title}</p>
          <p class="bg-gray-700 w-12 h-0.5 mb-1"></p>
          <p class="text-gray-700 md:text-sm">${speaker.about}</p>
        </div>
      </li>
        `;
  }
});