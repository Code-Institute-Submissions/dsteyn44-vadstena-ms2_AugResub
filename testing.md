#  Testing Ground

## Overview  
This was tested extentively on friends and even patrons of the restaurant who found themap portion very helpful. There are still features that can be improved for future use.  
#
## Validators used: 
- Jigsaw - I used this for CSS verification. [Jigsaw validator](https://jigsaw.w3.org/).
- Nu W3 validator - I used this for HTML verification. [W3 validator](https://validator.w3.org/).
#
## Proof of final validation:

### HTML
#### index.html 
![HTML Validator Index](readme-files/HTML.png)


### CSS:
#### style.css
![CSS Validator Jigsaw](readme-files/CSS.png)

#### Email.js:
![Email.js](readme-files/emial.js.png)



#
## Responsiveness

For the responsiveness I used Chrome Developer Tools to check how the website would behave. However saying this I must add that it did not always give a correct or real account on the device. Of course it is only a tool and not but I found one instance where it did not give me the correct response. This was an instance it was for mobile phone (iPhone X). Unfortunately I had some issues with the response for the time and weather icons

I also used [Responsive Design Checker](www.responsivedesignchecker.com) and this was fairly accurate. The difference (niether good nor bad) this site has over Chrome Devoloper is that it has some sizes that Chrome does not such as the IMac Desktop 24". I us the 27" so when I opened my browser to Chrome it overstretched my image. Below is a responsiveness chart that shows the how each device responded. I added the surface duo because it has a perculiar screen so i can see how my site reacts. 

### Chrome
- This is the best as it was tested on devtools as well as used as the browser of choice for gitpod and github.

### Mozilla Firefox
- It appears a bit crisper in color, however the "Vadstena" map-marker did not appear, however the other map markers worked very well. 

### IOS Mac
- Works well on Safari. Did not notice any major challenges. 

# Bugs:
 - dots.svg, when opened in github would error
Action: I had to remove some of the code in the "svg" to make allow it to be accepted.The dots.svg would not change color when I added it to HTML as an image so I copied the sag code and added it directly into the "span" that I used to hold the hamburger toggle icon. Here I was able to manipulate the "svg" to the ivory I wanted to use. 
- Images in the history section was showing an error in the console. Action: after working with student support and checking the HTML it was determined an issue with the URL link to the right directory. A "/" was added which should not have been there.
- No validation to the contact form. This was added with some Javascript using code from W3 webschools. An alert was added to the sendemails.js file to inform the user that the email had either been sent or not. 

### Known Bugs
- error still showing in console for Devtools.DevTools failed to load source map: Could not load content for chrome-extension://fheoggkfdfchfphceeifdbepaooicaho/sourceMap/chrome/iframe_handler.map: HTTP error: status code 404, net::ERR_UNKNOWN_URL_SCHEME.
- Tutor support was contacted andit was determined that the computer I was using was not incognito. In addition this was found in google The ERR_UNKNOWN_URL_SCHEME error is commonly because of your browser issue . There's no application on your device which can handle that particular action. It is a Chromium bug . In Chrome version 40 and up, this bug has resurfaced, but only if you are manually entering the URL of the redirect page in the address bar.
