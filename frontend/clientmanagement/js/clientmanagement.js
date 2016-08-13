// CLIENT MANAGMENT SYSTEM
// 1. Display the array below in a list in html with all appropriate information provided (NOTE MUST BE DONE DYNAMICALLY )
// 2. Style the list to have a box around each company with rounded corners
// 3. Style to be responsive to always  haveing a equal amount of companies on each row (EX  1x6  2x3   3x2) you can use bootstrap ( NOTE IMG MUST ALSO BE RESPONSIVE)
// 4. Add a button titled( EMAIL ) to each company
// 5. Every time the email button is clicked i need you to open up the local email cliend with prepopulated information (SUBJECT = Hello **COMPANY NAME **) & (BODY = Hey *** COMAPNY NAME *** , (NEW LINE) We just wanted to chat and say hello  (NEW LINE) Sincerely your vendor )
// 6. Make the 'url' clickable so that it opens in a new page
// 7. Add a button titled ( REMOVE ) to each company
// 8. Write a function that remove the company clicked out of the array and out of the html list (HINT RERENDER THE VIEW)
// 9. Style the Pictures on hover to transition to gray scale / 100% gray
// 10. Sort the list by alphabetical order with out changing the order in the array.
var companies = [{
  'name': 'Dell',
  'picture': 'http://laslatinitas.com/wp-content/uploads/2011/05/dell-logo.png',
  'url': 'http://www.dell.com/en-us/',
  'email': 'help@dell.com'
}, {
  'name': 'Green Pioneer Solutions',
  'picture': 'http://greenpioneersolutions.com/img/icons/apple-icon-180x180.png',
  'url': 'http://greenpioneersolutions.com/',
  'email': 'support@greenpioneersolutions.com'
}, {
  'name': 'Taller Concepts',
  'picture': 'http://tallerconcepts.com/img/logo.png',
  'url': 'http://www.tallerconcepts.com/',
  'email': 'support@tallerconcepts.com'
}, {
  'name': 'GitHub',
  'picture': 'http://pritishc.com/images/social/github.png',
  'url': 'https://github.com/',
  'email': 'help@github.com'
}, {
  'name': 'JSFiddle',
  'picture': 'http://doc.jsfiddle.net/_downloads/jsfiddle-logo.png',
  'url': 'https://jsfiddle.net/',
  'email': 'help@jsfiddle.com'
}, {
  'name': 'Bootstrap',
  'picture': 'http://image.morpht.com/files/post/thumbnail/bootstrap_solid.png',
  'url': 'http://getbootstrap.com/',
  'email': 'help@getbootstrap.com'
}]
console.log(companies)
