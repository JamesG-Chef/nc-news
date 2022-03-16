# Checklist for Northcoders News Front End

This is looking good overall. Just need to get it hosted, notes here: https://notes.northcoders.com/courses/js-front-end/hosting and it's looking good to go. There's always more you could add to it but what you have is a nice demonstration of your React skills and shows off everything youve learnt. Good job

## README - write your own and make sure that it:

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

- [x] Basic styling added
- [x] Responsive design
- [x] On larger screen sizes a nice pattern often used is to centralised the content and have a significant amount of whitespace on either side. You can change the margins to be `%`'s instead of `px` values and they'll keep everything nicely in the middle.
- [x] Items aligned
- [x] Content legible (not too wide, obstructed, etc)
- [x] Refreshing doesn’t cause an issue on sub-pages
- [x] No errors in the console - got some warnings about `className` instead of `class` on the homepage.
- [x] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading
- [x] Your loading spinner has a different background colour to the rest of the app. I'd keep it the same so it's a smoother transition.
- [ ] Looks like you're planning on adding functionality to the comments votes buttons. If so then great, if not I'd style them differently to the rest of the buttons that are clickable.
- [x] Your app has a background color which lets you use white as a highlight colour for things like your add comment form. Up to you though, just a common technique.
- [ ] If you want to display the dates in a nice format take a look at a library like `moment.js` https://momentjs.com/docs/#/displaying/fromnow/

## Functionality

### Login

- [x] Some indication of who is logged in (this can be hardcoded)

### Articles

- [x] Serves all articles / top articles
- [x] Can vote on articles
- [ ] Can vote a maximum of once in either direction per page load
- [x] Votes are persistent when page is refreshed
- [x] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [ ] Can sort articles by date created / comment_count / votes - Just whatever's going on with comment_count

### Individual Article / Comments

- [x] Individual articles are served with comments
- [ ] Can vote on comments
- [ ] Can vote a maximum of once in either direction per page load
- [ ] Votes are persistent when page is refreshed
- [x] Can post new comments, which are persistent - Lovely form for adding new comments.

### Additional functionality:

- [x] Can only delete comments of logged in user
- [x] Deleted comments don’t re-appear on re-render/refresh
- [ ] sort comments by date created / votes
- [ ] navigate over pages of articles (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display articles by specific user
- [ ] post new article
- [ ] delete logged in user's articles

## Error Handling

Add some catch blocks to your api calls and take a look at https://notes.northcoders.com/courses/js-front-end/error-handling for some notes on error handling

- [ ] Bad url
- [ ] Bad topic slug in url
- [ ] Bad article id in url
- [ ] Post comment: (No text in comment body / Can you post without logging in?)

## Code

- [ ] Well named components - `ArticleCard` is the component that renders the whole article as well as comments. In UI's cards usually represent something that is rendered as part of a list and get their name because they look like playing cards that could be stacked up, like the list items in `Articles`. I'd rename `ArticleCard` to something like `SingleArticle` that you started to make but don't use.
- [x] Components reused where possible (`Articles` / `Voter`...)
- [ ] You have the `AddComment` component on the path of `/articles/:article_id/comments` but never actually link to this. You can take this route out.
- [x] Minimal state - don't hold derivable data in state
- [ ] Set state correctly, using previous state where possible - in `ArticleCard` you have a state called `article` which is and array with a single object in it. Why have the array if there's only ever going to be one?
- [x] Handle asynchronicity clearly (i.e. isLoading pattern)
- [ ] Functions are DRY (`handleChange` for controlled components / api calls)
- [x] Use object destructuring where possible
- [x] Tidy? If not: ESLint / Prettier
- [x] `node_modules` git ignored
- [ ] No `console.log`s / comments - Just give it a once over before sending to employers.
- [ ] Whilst you're at it make sure you remove any unused variables.
- [x] remove unnecessary files (e.g. App.test.js)
- [ ] You don't really need the `div` around the `ArticleVotes` button.
- [ ] You have some state for `showVoteButton` but I can't see where you change this? Could take it out if you don't.

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the articles a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent articles e.g. last 10 minutes
