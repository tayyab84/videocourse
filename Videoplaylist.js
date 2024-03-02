const videosList = [
{
	video: 'images/1.mp4',
	title: 'Health and Nutrition'
},
{
	video: 'images/2.mp4',
	title: 'Nutrition and lifestyle'
},
{
	video: 'images/3.mp4',
	title: 'expert on nutrition'
},
{
	video: 'images/4.mp4',
	title: 'nutrition health'
},
{
	video: 'images/5.mp4',
	title: 'children nutrition'
},
{
	video: 'images/6.mp4',
	title: 'personal weight loss plan'
},
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
	var { video, title } = item;
	return (
		`<div class="list active">
		<video src=${video} class="list-video"></video>
		<h3 class="list-title">${title}</h3>
		</div>`
		)
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
});