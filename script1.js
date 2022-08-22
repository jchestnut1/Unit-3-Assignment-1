let userName="jchestnut4";
let password="xxxxxxxxxxxx";

let movieTitle="Uncharted";
let movieGenre="Action, Adventure, Thriller";
let releaseYear="2021";
let movieDescription="Street-smart Nathan Drake is recrutied by seasoned treasure hunter Victor Sully Sullivan to recover a fortune amassed by Ferdinand Magellan and lost 500 years ago by the House of Moncada.";
let mainStars="Tom Holland, Mark Wahlberg";
let movieProducer="Avi Arad, Charles Roven";

let showTitle="Family Guy";
let showGenre="Comedy, Adult Animation";
let showDescription="Politically incorrect the animated series features the adventures of the Griffin family.";
let showNetwork="Fox";
let showCreator="Seth McFarlane";

let paymentMethod="Credit Card";
let subscriptionCost="$12.99";
let subscriptionPlan="Standard No-Ads";
let creditCard="xxxx-xxxx-xxxx-4455";
let billingZipCode="99999";
let billingAddress="123 N 48th Street, Tampa, FL";
let billingDate="8/22/2022";


document.write(`
<p>User: ${userName}</p>
<p>Password: ${password}</p>
<br>
<br>
<p>Title: ${movieTitle}</p>
<p>Genre: ${movieGenre}</p>
<p>Release: ${releaseYear}</p>
<p>About: ${movieDescription}</p>
<p>Main Cast: ${mainStars}</p>
<p>Producers: ${movieProducer}</p>
<br>
<br>
<p>TV Show: ${showTitle}</p>
<p>Genre: ${showGenre}</p>
<p>Show Description: ${showDescription}</p>
<p>Originating Network: ${showNetwork}</p>
<p>Creator: ${showCreator}</p>
<br>
<br>
<p>Payment: ${paymentMethod}</p>
<p>Monthly Cost: ${subscriptionCost}</p>
<p>Plan: ${subscriptionPlan}</p>
<p>Card on File: ${creditCard}</p>
<p>Billing Address: ${billingAddress}</p>
<p>Billing Zipcode: ${billingZipCode}</p>
<p>Upcoming Rebill Date: ${billingDate}</p>
`)