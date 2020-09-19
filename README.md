# Github repositories search

### Tech Stack:
* JavaScript (ES6)
* Vue (JavaScript framework)
* Bulma (CSS framework)
* Sass (CSS preprocessor)
* Axios (HTTP client)
* Vue-cli (Vue tooling, which uses babel, webpack and linter)

These are technologies I use in my current project at work. I chose them, because I am familiar with them and find them easy to use. Another front end framework I worked with is Angular, but it needs a lot of boilerplate and is a bit "heavier". Its advantage is that by default it should be written in Typescript, but Typescript can be also easily used with Vue.

Bulma was my choice as an alternative to popular Bootstrap. I wanted to try something new. It 

Sass has been my default choice for some time, having advantages over pure css in modularizing and writing functions, nesting, defining variables, but with CSS evolving as fast as it has recently (CSS variables, grid, we might not need it anymore soon. For a small project like this one Sass is rather an overkill, but I initially wanted to modify bulma variables, then changed my mind. 

Axios, based on promises, is easy to use and compatible with Vue.

Vue-cli made all bundling and compiling set up for me. I have used webpack before and I am familiar with configuration settings, but having a tool like vue-cli, has simplified setting up the project. Extended documentation allows customize set up according to one's needs.

About accessibility:
* I used labels (if design required hiding them, I would still place them in html code, but hide with adequate css styles, bulma has a class for it called "is-sr-only", to make them available for screen readers)
* I made sure focus state will be consistent for all browsers (as it usually differs) and is prominent enough
* I check keyboard navigation flow and made sure all functions can be accessed not only with clicks, but keydowns too
* if the app was larger, had navigation or header I would probably create "skip to content" button

I recently wrote an article about accessibility, as I wanted to deepen my knowledge about the topic. It's in Polish, but has code snippets and Google translator makes it quite readable in English too. Can be found [here](https://medium.com/@sara_p_sara/nie-wstyd%C5%BA-si%C4%99-by%C4%87-programist%C4%85-html-czyli-rzecz-o-dost%C4%99pno%C5%9Bci-6faab1599578).

View working sample [here](https://p-sara.github.io/github_repos_search_dev/).

Design can be viewed [here](https://github.com/p-sara/github_repos_search_design).

I started with simple sketch, then proceeded to wireframing tool called Figma and created simple prototypes there.

