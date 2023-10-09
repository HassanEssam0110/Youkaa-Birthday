const btnFlip = document.getElementById('btnFlip');
const btnParty = document.getElementById('btnParty');
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const Switch = document.getElementById('switch');
const toggler = document.getElementById('toggler');
const container = document.getElementById('container');
const sound = document.getElementById('sound')
// const video = document.getElementById('video')
const videoMemoryText = document.querySelector('.video-memory-text')
const videoMemory = document.getElementById('videoMamory')
let videoShow = document.querySelector('.main-video');

let isFrontShowing = false;
let dark_mode = false;

const listVideos = [
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/50ttf6SfkTE?autoplay=1',
        title: "Cairokee - Hatlena Bel Ba'y  Leban كايروكي - هاتلنا بالباقي لبان",
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/qyKf8OUCMmA?autoplay=1',
        title: "Ibrahim Maalouf - Red & Black Light ",
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/mJrWxOW0aCg?autoplay=1',
        title: "They don’t care about us - Cover by Ibrahim Maalouf",
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/uLYgnrj43Ss?autoplay=1',
        title: "Balash El Loun Da Maana - Ahmed Adaweyah",
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/dRh-XXDfe_M?autoplay=1',
        title: 'Mohamed Mounir-Fi 3esh2 El Banat | محمد منير-في عشق البنات'
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/RdvxvQ9h2AA?autoplay=1',
        title: 'Cairokee - Wrong way blues'
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/UrZDrBn9bsQ?autoplay=1',
        title: 'Abd El Basset Hamouda Ya3my w3m Alby'
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/ZAUrCJInpOQ?autoplay=1',
        title: 'Ruby - Yal Romosh [ Official Music Video] | روبي - يالرموش'
    },

    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/cUC6ckwU4Wc?autoplay=1',
        title: 'عبد الباسط حمودة-الجو هادي | Abd El Basset Hamouda-El Gaw Hady'
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/6WEtworZ0so?autoplay=1',
        title: 'Mohamed Mounir-El Nawasy | محمد منير-النواصي'
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/hwVfOcXeCgM?autoplay=1',
        title: 'Hakim Ft. Olga Tañón - Ah Ya Alby'
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/Q47ZumsJleI?autoplay=1',
        title: 'Shando - Abd El Hady '
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/jEbLPiHIjZQ?autoplay=1',
        title: 'Cairokee - Ghammad Einak | كايروكي - غمض عينك'
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/mhs3y8b2IGk?autoplay=1',
        title: 'Donia Samir Ghanem Ft. Abdelbaset '
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/BxM1EfuVIkg?autoplay=1',
        title: 'DJ Totti - Moled El Gezeera '
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/unnrPg5zq_k?autoplay=1',
        title: 'مسار إجباري - صباحك | Massar Egbari - Sabahek'
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/LohEcMnGedo?autoplay=1',
        title: 'Talaat Zain - Teke Ta'
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/bl_VGgtXKEs?autoplay=1',
        title: 'Cairokee-James Dean (Official Music Video) كايروكي-جيمس دين'
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/KVEsRe6lizo?autoplay=1',
        title: 'Mohamed Mounir - Wailli'
    },
    {
        img: 'src/image/1.png',
        video: 'https://www.youtube.com/embed/Ri7VfMlV1Zk?autoplay=1',
        title: 'القلب يا ناس اشتكى'
    },
]


const confetti_start = (target, size, can_rotate) => {
    let confettiSettings = { target: target, size: size, rotate: can_rotate }
    let confetti = new ConfettiGenerator(confettiSettings)
    confetti.render() //will create our confetti
}

confetti_start('my-canvas', 2, false);


btnParty.addEventListener('click', () => {
    stopSound();
    videoMemory.play();
    window.scrollTo({
        top: videoMemory.offsetTop,
        behavior: 'smooth'
    })
})


const stopSound = () => {
    sound.pause();
}


btnFlip.addEventListener('click', () => {
    confetti_start('my-canvas', 5, true);

    sound.voluem = 0.7;
    sound.play();

    if (!isFrontShowing) {
        card1.classList.remove('inactive');
        card1.classList.add('active');
        card2.classList.add('active');

        isFrontShowing = true;
    } else if (isFrontShowing) {
        card1.classList.remove('active');
        card1.classList.add('inactive');
        card2.classList.remove('active');
        card2.classList.add('inactive');

        isFrontShowing = false;
    }
})



Switch.addEventListener('click', () => {
    if (!dark_mode) {
        Switch.classList.remove('inactive');
        Switch.classList.add('active');

        toggler.classList.remove('inactive');
        toggler.classList.add('active');

        container.classList.remove('inactive');
        container.classList.add('active');

        videoMemoryText.classList.remove('inactive');
        videoMemoryText.classList.add('active');
        videoMemory.classList.remove('inactive');
        videoMemory.classList.add('active');

        document.body.classList.remove('inactive');
        document.body.classList.add('active');

        dark_mode = true;

    } else {
        Switch.classList.remove('active');
        Switch.classList.add('inactive');

        toggler.classList.remove('active');
        toggler.classList.add('inactive');

        container.classList.remove('active');
        container.classList.add('inactive');

        videoMemoryText.classList.remove('active');
        videoMemoryText.classList.add('inactive');
        videoMemory.classList.remove('active');
        videoMemory.classList.add('inactive');

        document.body.classList.remove('active');
        document.body.classList.add('inactive');

        dark_mode = false;
    }
})



const categories = [... new Set(listVideos.map(item => { return item }))]


document.getElementById('videoList').innerHTML = categories.map(item => {
    let { img, video, title } = item;
    return (
        `<div class="list active">
        <img src=${img} class="list-img">
        <h3 class="list-title" data-video=${video}>${title}</h3>
        </div>`
    )
}).join('');


const videoList = document.querySelectorAll('.video-list-container .list');

videoList.forEach(remove => { remove.classList.remove('active') });

videoList.forEach(vid => {
    vid.addEventListener('click', () => {

        videoList.forEach(remove => { remove.classList.remove('active') })
        vid.classList.add('active');

        let title = vid.querySelector('.list-title').innerHTML;
        let src = vid.querySelector('.list-title').getAttribute('data-video');


        videoShow.src = src;
        document.querySelector('.main-video-container .main-video-title').innerHTML = title;
    })
});
