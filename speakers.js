const speakers = [
    {
        image:'assets/speakers/speaker_01.png',
        name:'Igor Bumekpo',
        title:'Madagastar Esports Arena, West-Hills Mall, Weija-Accra',
        desctiption:'As President of the Ghana Esports Federation, Igor has coordinated many Esports events from the grass-root to the top of the ladder. He is known to have the biggest collection of top players in a single tournament.',
    },
    {
        image:'assets/speakers/speaker_02.png',
        name:'Annabel Ashalley-Anthony',
        title:'Melanin Gamers, UK/Ghana/Global',
        desctiption:'Founder of Melanin Gamers and International Relations for the Esports Federation, Annabel has helped pulled a number of facilities from Esports bodies World Wide with Skill and Charm.',
    },
    {
        image:'assets/speakers/speaker_03.png',
        name:'Oscar Mawuli Nuwati',
        title:'Journalist and Sports Pundit, Max TV, Accra.',
       desctiption:'With years of experirnce in the media and sports industries, Oscar has pushed the Ghanaian Esports space with knowledge gathered from past, present amd even future trends in spaces related to E-sports.',
    },
    {
        image:'assets/speakers/speaker_04.png',
        name:'Yuba Rahamani',
        title:'Giiks Game City',
        desctiption:'E-sports standards are key mantra for GGC. Yuba, with a number of esports events of global standards, has the passion of making ensuring that all operations in the E-sports space match global checks.',
    },
    {
        image:'assets/speakers/speaker_05.png',
        name:'Henry Boye',
        title:'Strategic Partnership Expert, MBA. Business Administration',
        desctiption:'Expert in Business Administration, Master in Business Strategies and Organisational Partnership. Henry has the ability to pull strings and resources from various related and unrelated partnering organisations.',
    },
    {
        image:'assets/speakers/speaker_06.png',
        name:'Solomon Osei',
        title:'Esports Team Coach/Mentor and Players Commissioner',
        desctiption:'Solomon has mentored various top-class players to attain heights unimagined. Teams also love his energy and efforts he presents to the community. Through Solomon many E-Teams were born and bred.  ',
    },
]

const speakerContainer = document.querySelector('.speakers-container');
for(let i=0;i<speakers.length;i+=1){
    console.log(speakers[i])
    speakerContainer.innerHTML += `<div class="speaker-box">
    <img src="${speakers[i].image}" alt="speaker1-img" class="speaker-image">
    <div class="speaker-desc-box">
        <h4 class="speaker-name">${speakers[i].name}</h4>
        <p class="speaker-title">${speakers[i].title}</p>
        <p class="speaker-desc">${speakers[i].desctiption}</p>
    </div>
</div>`

}

