const fetchAllData = (isShowMore) => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(datas => displayAlldata(datas.data.tools, isShowMore))
}

const displayAlldata = (datas, isShowMore) => {

    // let isButtonClicked = false;
    const sortDateBtn = document.getElementById("sortDateBtn");

    sortDateBtn.addEventListener("click", function () {
        // isButtonClicked = true;
        sortData = datas.sort((x,y)=>{
            x= new Date (x.published_in)
            y= new Date (y.published_in)
            return x-y
        })

    });

    if (isShowMore) {
        datas = datas.slice(0, 6)

    }


    else {

    }


    let mainContainer = document.getElementById('mainContainer')

    datas.forEach(data => {
        console.log(data);

        const { image, features, name, published_in, id } = data
        console.log(features);

        mainContainer.innerHTML += `
        
        <div
        class="w-full max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="rounded-2xl"">
            <img class="rounded-t-lg" src="${image}" alt="product image" />
        </div>
        <div class="px-5 pb-5">


            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Features</h2>
            
            <ol class="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400">
            ${features.map(feature => {
            console.log(feature);
            return `
                
                <li>${feature}</li>

                `
        }).join('')}
            </ol>

            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

            <div class="flex items-center justify-between">
                
                <div>
                    <p class="text-xl font-bold text-gray-900 dark:text-white"></p>
                    <div class="space-x-2">
                        <i class="fa-solid fa-calendar-days"></i><span class="text-sm font-bold text-gray-600 dark:text-white">${published_in}</span>
                    </div>
                </div>
                
                <button data-te-toggle="modal" data-te-target="#exampleModalXl" data-te-ripple-init data-te-ripple-color="light" onclick = "fetchSingleAi()" type="button" class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Icon description</span>
                  </button>

                 
            </div>
        </div>
    </div>
        
        `

        document.getElementById('spinner').classList.add('hidden')
    });

}

fetchAllData()