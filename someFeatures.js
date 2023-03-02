
//ShowMoreTools
const showMoreToolsDisplay = () => {
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


    displayAiHub(sortData)
}