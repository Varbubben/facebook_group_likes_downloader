// This is for setting up the option for downloading the list
(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)


// The names of people liking will be stored here for each time the get_likes() function is calles
let likes = []
// The names of people commenting will be stored here for each time the get_likes() function is calles
let comments = []



function get_likes () {
	
	// Selecting elements containing the names from post likes
	let raw_like = document.getElementsByClassName('_5i_q');

	// Extracting the names from the elements and storing them in the list
	for(var k = 0, length3 = raw_like.length; k < length3; k++){
		likes.push(raw_like[k].innerText)
	};
};

function get_comments () {

	// Selecting elements containing the names from post comments
	// The comments are stored on the site after you view them
	// so no need to run this function for every post
	let raw_comments = document.getElementsByClassName('_6qw4');

	// Extracting the names from the elements and storing them in the list
	for(var k = 0, length3 = raw_comments.length; k < length3; k++){
		comments.push(raw_comments[k].innerText);
	};
	

}

function save() {

	// Creating a new list for storing the data form the others
	let p_total = [];

	// Merging the lists together
	p_total = p_total.concat(comments,likes);


	// Find the pagetitle to for naming the file
	let raw_title = document.getElementById('pageTitle');
	// Naming the file based on the group name
	let filename = raw_title.innerText;

	// Saving the results to a file and downlading it
	console.save(p_total, filename);

};
