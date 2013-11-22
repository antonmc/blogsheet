/*global google Tabletop Showdown*/
/*jslint browser:true*/

function plot( data ){		
	var converter = new Showdown.converter();	
	var content = converter.makeHtml( data.content );	
	var post = document.createElement( 'div' );
	post.className = 'post';
	
	var d = new Date(data.date);
    var dateString = moment(d).format('MMMM Do YYYY');

	var postContent = '<span><!-- span class="entry">' + data.id + '</span --><h3 class="title">' + data.title + '</h3></span>' +
						'<p class="metadata">Entry ' + data.id + ' - Posted by ' + data.author + ' on ' + dateString + '</p>' +
						' <div class="post-content">' + content + '</div>' +
						'<p class="stats">Hours worked: ' + data.hoursworked + '</p>';
		
	post.innerHTML = postContent;
	var posts = document.getElementById( 'posts' );
	posts.appendChild( post );
}

function showInfo(data) {
	var reversed = data.SBNotes.elements.reverse();
    reversed.forEach( plot );
}

window.onload = function() {
    var spreadsheet = 'https://docs.google.com/spreadsheet/pub?key=0AhLgoEUzhCg_dGlDTGlIakplSE5UQ1hTamNiaEI1blE&output=html';
    Tabletop.init({ key: spreadsheet, callback: showInfo });
};