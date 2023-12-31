
//ShowMoreTools
const showMoreToolsDisplay = () => {
    const showMoreSpinner = document.getElementById('showMoreSpinner')
    showMoreSpinner.classList.remove("hidden")
    fetchUniverHub()
    
}

//Dynamic Features created
const generateFeatures = features => {
    let featuresHTML = '';

    for (let i = 0; i < features.length; i++) {
        featuresHTML += `<li>
      <span class="font-semibold text-gray-600 dark:text-white">${features[i]}</span>
      </li>`;
    }

    return featuresHTML
}

//Fetch short using async
const fetchSortData = async ()=>{
    
    //spinner
    const spinner = document.getElementById('spinner')
    console.log(spinner);
        spinner.classList.remove("hidden")
        spinner.classList.add("block")

    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const datas = await res.json()
    shortDataDiplay(datas.data.tools);
    
}

const shortDataDiplay = (datas) => {
    

    // sort by the date
    const sortData = datas.sort((x, y) => {
        x = new Date(x.published_in),
            y = new Date(y.published_in);
        return x - y;
    });


    
    const main = document.getElementById('showMoreBtn')
    const sortMoreBtn = document.getElementById('sortMoreBtn')
    console.log(main);

    if(main.innerText.includes('Show More Tools')){
        console.log('working');
        displayAiHub(sortData.slice(0,6))
    const sortMoreBtn = document.getElementById('sortMoreBtn')
    sortMoreBtn.classList.remove("hidden")
       
    }

    else if(sortMoreBtn.innerText.includes('Show More')){
        console.log('working');
        displayAiHub(sortData.slice(0,6))

    const sortMoreBtn = document.getElementById('sortMoreBtn')
    sortMoreBtn.classList.remove("hidden")
       
    }

    else{
       
        displayAiHub(sortData)
    }
    
}


// Fetch short more data using async
const fetchSortDataShowFull = async ()=>{
    const showMoreSpinner = document.getElementById('showMoreSpinner')
    showMoreSpinner.classList.remove("hidden")

    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const datas = await res.json()
    showMoreSortBtnClick(datas.data.tools);
    
}

const showMoreSortBtnClick =(datas)=>{
    const sortData = datas.sort((x, y) => {
        x = new Date(x.published_in),
            y = new Date(y.published_in);
        return x - y;
    });
    
    displayAiHub(sortData)
    const sortMoreBtn = document.getElementById('sortMoreBtn')
    console.log(sortMoreBtn);
    sortMoreBtn.classList.add("hidden")
}
