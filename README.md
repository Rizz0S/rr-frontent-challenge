## TellyStream

### a very stripped down streaming service clone

-How did you decide on the technical and architectural choices used as part of your solution?

I like everything to be very modular and clean, which works well in React apps. I prefer everything to have its own, specific purpose in an organized file system (the same reasoning behind choosing to use CSS Modules). When considering the page's layout and features, I always ask myself what can be a component and, if yes, how that component could be re-used in other places of the application.

Another inspiration for my choices are how easily something can be changed if need be. In regards to writing sustainable code, a mentor of mine gave me the advice to ask myself "if I had to change X about my application, how easy would it be?" This is another benefit of reusable components, among other things like shared constants and consistent structure.

I also built the React app from scratch, as opposed to using a boiler-plate library like `create-react-app`. I've found that it's actually easier to work with when you know the ins and outs of your own config.

-Are there any improvements you could make to your submission?

I think the UX could be a little bit more merry. A lot of what makes a good UI is with nuanced displays in response to interactions - you know, things like paralax scrolling, animations, or reactions to hovering/mouse movement. Although they are nuanced, they do take a lot of time and can be decievingly complex. Given the time consideration, I thought it may be a time rabbit hole that could end up without much to show for it.

Additonally, I could have done more with the social media links - they are only imges that link to their respective home pages. I've never linked to anything that directs to an app store download before and thought it might be more trouble than its worth given that it's a fake application.

-What would you do differently if you were allocated more time?

I would have thought a lot more about the overall structural layout of the application. I definitely default to what I know best in timed situations - lots of flex containers and a straightforward design that I've used before. It works, but sometimes it could be improved with using a different toolset, like CSS Grid (which I am less familar with). 

I think it could definitely use more bug testing on things like mobile and older browsers. It's certainly a can of worms to get into, but it's worth it for everyone to have the same experience on your application.

In a similar vein, more accessibility testing.