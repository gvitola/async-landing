// import fetch from 'node-fetch';

const url = 'https://youtube-v311.p.rapidapi.com/search?part=snippet&q=avengers&maxResults=25&type=video';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '451e6d6224msh7aa1799fd5fd676p16a082jsnc8c1646ece6e',
		'x-rapidapi-host': 'youtube-v311.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

async function fetchData(url, options) {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
}

(async () => {
    try {
        const videos = await fetchData(url, options);
        // console.log(videos);        
        let view = `
            ${videos.items.map(video => {
                return `
                    <div class="group relative">
                        <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                        </div>
                        <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            ${video.snippet.title}
                        </h3>
                        </div>
                    </div>
                `;
            }).slice(0,4).join('')}
        `;
        content.innerHTML = view; 
    }
    catch (error) {
        console.log(error);
    }   
})();

