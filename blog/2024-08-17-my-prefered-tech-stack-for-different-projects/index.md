---
slug: my-preferred-tech-stacks-for-different-projects
title: My preferred tech stack for different projects.
authors: ["hari"]
tags: [web-dev, html, css, js, react, laravel, next-js, strapi, php]
# draft: true
# draft will hide this from list of blog
---

During my career I always had to choose the tech stack for my projects both in my job as well for my freelance projects. The answers is not that simple and in the post I am trying to make it as simple as I can.

<!--truncate-->

> **I write all my blogs for myself, because I forget most of the realizations I learned in the past. So this like my diary.**

I want to explain my preferred stacks for

1. Small scale projects
2. Medium scale projects
3. Large scale project

## Short answer

If you don't want to read this long article here is my choices:

### Must needed for any project

- Figma for UI design and Photoshop for posters and visual elements.
- Chat GPT for dummy content.

### For small websites

#### For quick delivery and great aesthetics

- [Framer](https://framer.com)

#### Combo for cost efficiency and potential project growth on later.

- HTML, CSS - consider this above JS.
- Any simple JS framework. Astro or Next js with static build. (This is only needed if you need to use some npm package which you know makes you work easy). Use tailwind and CSS grid.

**HOSTING**: This can be hosted on any small server on linode or digitalocean with nginx (shared hosting for multiple sites reduces the cost by a large margin, a $5 machine will be enough). You can also use cloudflare pages for this purpose.

### Small to medium complexity

:::info
For websites which client need to add content (Small to medium complexity)
:::

#### Wordpress

You know it, I know it. I am not going to explain.

#### Framer

It is a no code website builder which I love to work.

#### If you need some thing greatly customizable

##### Javascript stack:

- **Backend**: Strapi CMS, it provide an advanced admin panel.
- **Frontend**: Next js. Use tailwind and CSS grid.

##### Laravel stack

- Laravel MVC with tailwind is all you need.
- Filament, if you need to quickly build an admin panel with laravel. Read [here](https://filamentphp.com/)

**HOSTING**: For such an application I use linode or digital ocean with fixed subscription cost. I don't want to take any expensive risk for any DDOS attack.

### Large scale projects

- **Frontend**: Next js for SEO friendly application needs but React js if SEO is not a concern. I recommend React only if you have to build a web application over a website.
- **Backend**: Node js or Go-lang. For high scalability use AWS Lambda functions. AWS S3 for photos, videos, files (object storage).
- **Hosting Services**: AWS - Amplify (frontend hosting), Rest API Gateway.
  :::danger
  Always set billing warning in AWS otherwise you may need to sell your house to pay the bill if some attacker wants to do some fun or your app got viral at a moment.
  :::

Thats it, you don't want to read my boring monologue. You can resume watching your cat videos now.

<p style={{fontSize: "2rem", marginTop: "2rem"}}>TL;DR</p>

## Initial career

During the initial phase of my career I was totally into corporate jobs and I learned React JS for landing a job. I got a job in a good company which had about 50-100 employees. I was interested in learning React and JavaScript. I was working in a project which automated testing process in the telecom. My job was to create functional and aesthetic user interfaces for showing the results of the test, preparing test setup and configuration and also a great dashboard. My team was working with meteor js which is a realtime web framework along with React for creating web app.

The stack used:

- Meteor js
- React js with vanilla CSS + Material UI
- Mongo DB

There were hurdles in the way and we later realized meteor.js has some issue which prevented us to make the web app dynamic with our use case and also the backend architecture also needed an improvement.
So our lead has proposed a plan to shift the pure React js and the backend needed to create Rest APIs for each and every data points and actions.

React js is one the greatest library I have learned which really solved almost all the problems we came across. There were lot of npm packages which helped us to deliver complex use cases easily and quickly.

There my role was to ensure the frontend of the web application meet the expectation of my team.

I thought this is it for frontend.

Gradually I moved up my position and learned more about backend. I also got improved in my people management and communication skill.

## My entrepreneurship

From my childhood I had a dream of working independently and starting a business. Me and my friends started a small company without much investments after resigning my full time job.

Our company basically took service based projects were clients provided us money and target to create web applications. From a job to business I learned it is lot different to get projects and complete the project on time. We should clever enough to negotiate with client and employees. We will always have time and budget constrains.

Initial projects were frontend work only, since we had experience in that stack it was easy to convince the client. Some other team will do the backend and we do the frontend.

Client was always complaining about our development speed. May be a reason was strict rules we set in programming which we inherited from our job. Later on we loosened it someway.

Stack used:

- Frontend: React js
- Hosting: Linode or AWS.
- Backend: Java Spring Boot (Another team)

Couple of projects we have done was MVPs and didn't took of from that phase.

During 2023, we were getting less to no new projects, may be the market was down due to different economic situations. The projects we got also had very small budgets but there were significant features to do.

We brainstormed how we can achieve such a project. The solution was choose right frameworks for those projects.

### Javascript eco-system

It is a mess, fragmented and mostly unopinionated. I think JS eco-system is relatively new compared to PHP, Ruby or Java, especially node js.

I give full support for choosing js based frameworks or libraries for startups which have enough funds to invent their wheel and move forward.

But our case was different. We always had to fight with the competition for money and timeline to get projects.

We learned next js, tried it for couple of projects which required SEO and features like payment and data processing.

We leaned Nest js (Backend framework based on Node js and express). WHich was somewhat opinionated.

We used AWS amplify, cognito, API gateway etc. But nothing has improved our speed in development.

Then in one e-commerce project we tried Strapi. Awesome, it was great for the speed. We learned everything about strapi and wondered how their team developed such a great system. It was opinionated and thus we didn't wanted to think extensively or to always reinvent the wheel. It was an eye opening experience for me.

I am now exploring about other languages and frameworks that we could use achieve our projects easily and faster.

### Other frameworks in my radar

#### Laravel

I know PHP is not as good as javascript, but PHP within Laravel was good. Now, I am learning Laravel. Laravel has the batteries to complete a project, I don't want to spend hours finding an npm package for authentication, encryption, ORM etc. I can start a Laravel project and start writing projects.

Frankly, I think I am not the brightest minds you find in the programming world. I am a person with an average IQ, with ADHD and a severe neck pain. But I have to do my job, make my client happy and make a living out of my work.

#### Ruby on Rails

I never learned Ruby but there are strong fans for Ruby on Rails. I know DHH, and I agree with most of his choices in the business and programming. I have read an great reddit post on a senior engineer supporting Ruby over Rails, link is [here](https://www.reddit.com/r/rails/comments/1dkcegr/im_switching_from_laravel_to_rails/).

#### Adonis JS

If you like to see something like laravel for Javascript you should check Adonis JS. If you want to do project faster but not to learn a new language as a javascript developer, choose Adonis. Check their website [here](https://docs.adonisjs.com/guides/preface/introduction).

I think Adonis is the unsung hero in the Javascript Eco-system.

## Tools I really value now

- **Figma** - Yes, you need to know it as a freelancer or independent web service provider. If you can't do it, outsource it to a good UI/UX designer. Clients value good designs.
- **Photoshop** - Optional. If you need to create great looking posters, assets etc. You need it. If you can't afford it check [Affinity Photo](https://affinity.serif.com/en-gb/photo/).
- **CSS** - It is hard to tell that I still struggle with css after 5 years of my programming. I am learning CSS over anything.
- **HTML** - Do you know HTML well, good HTML knowledge is needed for creating better SEO optimized sites.
- **Next js** - Use Next js for any kind of website work. It is so flexible but there is a learning curve.
- **Strapi CMS** - I cannot express more about my love towards Strapi to build CMS faster. Till I complete my Laravel learning, Strapi is my go to for my project.
- **Laravel** - I like it since it is opinionated. I am learning it since I want to deliver projects faster and cost effectively.
- **Framer** - If your client want a website immediately or unsure about want exactly she needs to put there after couple of months. Don't go coding, go for [framer](https://framer.com/).

## What really matters ?

This is the only question I ask when communicating with my client and team.
Choose the framework for the needs, don't be a fan of a language or framework. Its all about making the client and their customers happy.
