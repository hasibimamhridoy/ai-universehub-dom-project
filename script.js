

let mainData = [];
const fetchUniverHub = (isShowMore) => {

    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayAiHub(data.data.tools, isShowMore))
}

const displayAiHub = (datas, isShowMore) => {
    const mainContainer = document.getElementById('mainContainer')
    mainContainer.innerHTML = ''
    mainData = datas


    const showMoreBtn = document.getElementById('showMoreBtn')
    if (datas.length > 6 && isShowMore) {

        datas = datas.slice(0, 6)


        showMoreBtn.classList.remove("hidden")
    }

    else {
        showMoreBtn.classList.add("hidden")
    }

    datas.forEach(data => {
        // console.log(data);

        const { image, features, name, published_in, id } = data

        mainContainer.innerHTML += `
        <div
        class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="rounded-2xl"">
            <img class="rounded-t-lg" src="${image}" alt="product image" />
        </div>
        <div class="px-5 pb-5">


            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Features</h2>
            
            <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
            ${generateFeatures(features)}
            </ol>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

            <div class="flex items-center justify-between">
                
                <div>
                    <p class="text-xl font-bold text-gray-900 dark:text-white">${name}</p>
                    <div class="space-x-2">
                        <i class="fa-solid fa-calendar-days"></i><span class="text-sm font-bold text-gray-600 dark:text-white">${published_in}</span>
                    </div>
                </div>
                
                <button data-te-toggle="modal" data-te-target="#exampleModalXl" data-te-ripple-init data-te-ripple-color="light" onclick = "fetchSingleAi('${id}')" type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Icon description</span>
                  </button>

                 
            </div>
        </div>
    </div>
        `

        const spinner = document.getElementById('spinner')
        spinner.classList.add("hidden")
    });


}

const fetchSingleAi = id => {
    // console.log(id);

    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data => showSingleDetailsInAi(data.data))
}



const showSingleDetailsInAi=(data)=>{


    

    const {description,tool_name,features,image_link,pricing,input_output_examples,accuracy,integrations} = data

 
    //features arrayFilterCreated
    let featuresArrayFilter = []
    for (const singleFeatures in features) {
        featuresArrayFilter.push(features[singleFeatures].feature_name)
        }

    const modalContainer = document.getElementById('modal-container')
    modalContainer.innerHTML=''


    modalContainer.innerHTML += `
    
    <div id="modalConNoIncludes" class="cards gap-5 my-3 lg:my-10 flex-col lg:flex lg:flex-row mx-5 space-y-5 lg:space-y-0 lg:mx-0 justify-center items-center">


    <div
        class="max-w-sm p-6 bg-red-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[37rem]">

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ${description}</h5>

        <div class="mt-5 small-card-money justify-center flex gap-5">
            <div class="bg-white text-sm rounded-md p-3 font-semibold text-green-600 text-center">
            <h1>${pricing ? pricing[0].plan : "No pricing Found"}</h1>
            <p>${pricing ? pricing[0].price : ""}</p>
            </div>
            <div class="bg-white text-sm rounded-md p-3 font-semibold text-orange-400 text-center">
            <h1>${pricing ? pricing[1].plan : "No pricing Found"}</h1>
            <p>${pricing ? pricing[1].price : ""}</p>
            </div>
            <div class="bg-white text-sm rounded-md p-3 font-semibold text-red-600 text-center">
            <h1>${pricing ? pricing[2].plan : "No pricing Found"}</h1>
            <p>${pricing ? pricing[2].price : ""}</p>
            </div>
        </div>

        <div class="mt-5 small-card-features justify-between flex gap-5">
            <div>
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Features</h2>
                <ul class="max-w-md space-y-1 text-gray-900 list-decimal list-inside dark:text-gray-400">
                ${generateFeatures(featuresArrayFilter)}
                </ul>
            </div>
            <div ">
                <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Integrations</h2>
                <ul class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
                ${integrations ? generateFeatures(integrations) :"No Data Found" }
                </ul>
            </div>
            
        </div>

    </div>


    <div
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[37rem]">
        
            <div class="accuracy-img-con relative flex justify-end">
                <div id="noAccuracy"  class="bg-red-400 px-5 py-2 absolute mr-5  top-3 rounded-lg text-center flex justify-center items-center"><span  class="text-center text-white font-bold text-md">${accuracy.score ? accuracy.score : "No" } % accuracy </span></div>
                <img class="rounded-t-lg w-full" src="${image_link[0]}" alt="" />
               
            </div>
       
        <div class="p-5">

            <p class="mb-3 text-2xl font-semibold text-center text-black dark:text-gray-400">
                ${input_output_examples ? input_output_examples[0].input : "No Input Provided" }
            </p>
            <p class="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">
            ${input_output_examples ? input_output_examples[0].output.slice(0,120) : "No Output Provided" }
            </p>

        </div>
    </div>

</div>
    
    `
    //Null Accuracy handle and hidden the container
    const modalContainerIncludes = document.getElementById("modalConNoIncludes")
    const accuracyContainer = document.getElementById("noAccuracy")
    if(modalContainerIncludes.innerText.includes('No % accuracy')){
        accuracyContainer.classList.add("hidden")
    }

    
}







fetchUniverHub(6)