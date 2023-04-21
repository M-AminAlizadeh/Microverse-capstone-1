const speakers = [
  {
    id: 0,
    imgUrl: '/assets/images/ono-shohei.jpg',
    name: 'Shohei Ono',
    title: '-73 kg champion of the world',
    description:
      "Ono is regarded as one of judo's top fighters, having won three World Championships and two Olympic gold medals",
  },
  {
    id: 1,
    imgUrl: '/assets/images/hifumi-abe.jpg',
    name: 'Hifumi Abe',
    title: '-66 kg champion of the world',
    description:
      'Abe rose to prominence after becoming Youth Olympic champion in 2014. He won the Tokyo Grand Slam later that year, at just 17-years-old, beating then-World Champion Masashi Ebinuma.',
  },
  {
    id: 2,
    imgUrl: '/assets/images/Kōsei-Inoue.jpg',
    name: 'Kōsei Inoue',
    title:
      'a Japanese Judoka. He won the gold medal in the under 100 kg class at the 2000 Summer Olympics',
    description:
      'Kosei Inoue won the gold medal at the 2000 Sydney Olympics in the -100 kg division, most notably doing so by winning every single match by ippon. At the victory ceremony, he carried a photograph of his recently-deceased mother onto the podium.',
  },
  {
    id: 3,
    imgUrl: '/assets/images/teddy-riner.jpg',
    name: 'Teddy Riner',
    title:
      'a French judoka. He has won ten World Championships gold medals, the first and only judoka (male or female) to do so',
    description:
      'Riner was a member of the Levallois Sporting Club in Levallois-Perret, France and is coached by Christian Chaumont and Benoît Campargue.[6] He won the World and European junior titles in 2006.',
  },
  {
    id: 4,
    imgUrl: '/assets/images/Ryoko-Tani.jpg',
    name: 'Ryoko Tani',
    title:
      'she won a record seven world titles and five Olympic medals including two golds at Sydney 2000 and Athens 2004.',
    description:
      "Standing at 1.46 m (4 ft 9 in), Tani fought in the extra-lightweight (48 kg) division her whole career and, unlike many of her opponents, she never had to cut weight before a competition Her first major title was at the 1990 Fukuoka International Women's Judo Championships, a tournament she went on to win 13 years in a row.[4]",
  },
  {
    id: 5,
    imgUrl: '/assets/images/Saeid-Mollaei.jpg',
    name: 'Saeid Mollaei',
    title: '-81 kg champion of the world',
    description:
      'He won bronze medals at the 2015 and 2016 Asian Championships, and a silver medal at the 2017 edition. He was a bronze medalist at the Budapest 2017 World Championships, and a 2018 Baku World Championships gold medalist.',
  },
];

const speakersContainer = document.querySelector('.speakers-container');

speakers.forEach((speaker) => {
  speakersContainer.innerHTML += `
  <!-- Speaker -->
        <li class="speaker-container d-flex gap-5 m-auto mb-5  w-75 h-25">
          <!-- Speaker picture -->
          <div class="speaker-picture-container">
            <img
              src="/assets/images/stock.jpg"
              width="70px"
              alt="background image" />
            <div class="speaker-real-image-container">
              <img
                src=${speaker.imgUrl}
                class="speaker-picture"
                alt=${speaker.name} />
            </div>
          </div>
          <!-- Speaker info -->
          <div class="speaker-info-container">
            <!-- Speaker name -->
            <div class="speaker-name-container">
              <h5 class="fs-3 fw-bold text-capitalize">${speaker.name}</h5>
            </div>
            <!-- Speaker title -->
            <div class="speaker-title-container">
              <p class="fw-bold fst-italic color2">
                ${speaker.title}
              </p>
            </div>
            <!-- Line -->
            <div class="speaker-line-container bg-color3 mb-3">
              <hr />
            </div>
            <!-- Speaker description -->
            <div class="speaker-description-container">
              <p class="">
                ${speaker.description}
              </p>
            </div>
          </div>
        </li>
  `;
});
