---
slug: choose-programming-frameworks-based-on-needs
title: Choose programming frameworks based on needs
authors: ["hari"]
tags: [web-dev, html, css, js, ts, react, laravel, next-js, strapi, php, ruby]
draft: false
# draft will hide this from list of blog
---

There are hundreds of programming frameworks, but we need to select the one for our needs. Here I explain why I choose certain frameworks for certain needs based on my needs and philosophy.

<!--truncate-->

On my previous blog posts I have mentioned that I have ADHD and neck pain, these conditions makes me a lot different from the my peers. My main problems with this condition are:

- Cannot sit and work for more than 30 minutes at a single shot. I need to take breaks for avoiding neck pain.
- Lack of motivation on doing a long term task like a large project.
- Needs clear vision before starting anything long term.
- Cannot remember lot of things at once due to a short memory capacity (low RAM but hard disk is good 😁).
- Lack of focus and making the mistakes that no others obviously do in their work.

For all these, I need to get a different approach in my work whether it from choosing the right framework to the time I wake in the morning.

For anyone having ADHD or similar condition I think this blog will give some insights.

## Who I am ?

- Freelancer making websites from landing pages, e-commerce websites, small softwares for clients and myself.
- Graphic designer doing social media ads to ui-ux design.

## What am I looking in a programming framework ?

- **Batteries must be included**: I am not that good in finding 3rd party packages for each projects I do.
- **Easy to write and deploy**: I cannot stand in front of languages like Java or C# or C++. I believe, I am not an intelligent person to write such great code and also I need to do program quickly so that I can spend time in designing or spend time with my family and friends.
- **Convention over configuration**: It should be easy to configure and follow the conventions.
- **Very less complexity**: My ADHD brain always likes simple things which are understandable to a 10 year old.

## What programming framework I use currently ?

I prefer Javascript based frameworks now. Since it is the only programming language we can use to build browser applications, instead of learning multiple languages to build web based things I prefer Javascript. Javascript was the first programming language I used for work and I believe it was the sole reason I became resistant to learn any other language and I know it is bad. But I learned some other languages and tried some frameworks as well.

### Any problem with Javascript ?

Yes, since js is dynamically typed I make a lot of mistakes and it gives critical bugs in live web application/sites. Thus personally I do everything in Typescript. It helps me to do programming relatively safer.

### Any problem with Typescript ?

Yes definitely, since you need to mention all parameter types, it frustrates me a lot. Instead of writing logic for my application I end up doing this finding and writing types for different params for any 3rd party library I use. One thing I learned later is giving type `any` is of no problem in case I am in a hurry to deliver my work.

### Adonis JS

- [Adonis js](https://adonisjs.com/) is the only battery included fullstack framework in the typescript ecosystem. It is reliable. It has lot of get go features. It helps me avoid finding the next best 3rd party library for lots of use cases.
- It has a very good documentation.
- I prefer to use it whenever a product idea comes to me via client or myself.
- Frankly you don't need adonis for a simple landing or e-commerce website.

### CMS

For some simple content management system I prefer to use Strapi CMS or Directus. If you are a fullstack developer who is working alone, it will be handy to develop websites ultra fast for your clients. I prefer Directus over Strapi due to the their philosophy. Strapi have a buggy documentation. Both Directus and Strapi are headless CMS.

If I use a headless CMS, I use Next.js for building frontend for better SEO and to use client side interactive react js packages for visually appealing UIs.

## Did I tried any other frameworks ?

Yes. I tried:

1. Laravel (PHP)
2. Ruby on rails
3. Django with Python

These three are very good frameworks but for me there were issues in using it. It is only my problems. Thousands of developer use this frameworks daily to ship great projects.

### My problems with :

1. **Laravel**: Syntax of PHP was little difficult for me and suggestions in vscode was not that great. As a typescript developer I missed it.
2. **Ruby on rails**: I am a fan of DHH (founder of Ruby). His numerous philosophies influence me.

- - Rails is a beautiful languages but it lacks IDE support (no code suggestion, intellisense), I tried setting up it but failed.
- - Ruby also got very less vacancies in tech and hence very less people learning it. If I needed some additional help from a freelancer, it is extremely difficult to find such a person.
- - I started making lot of silly mistakes on writing ruby due to my condition and lack of strict types.

3. **Django with Python**
   It was a good experience learning python and django. Problems I faced were:

- - I make silly mistakes due to lack of strictness.
- - I was not able to find a good CMS with it. Lot of my freelance work requires a CMS.

## Conclusion

After all these research I find out:

- No framework is perfect and lot of great developers love their stack for different reasons.
- We should make something useful for our clients and ourselves rather than finding the best thing.
- Javascript ecosystem is messed up by the VC funded startups and everyday they launch new tools with no proper vision or philosophy. They change the way we use programs now and then for making us use their infrastructure.They just needed to make great money by making ourselves use their proprietary cloud system. I don't want to bite it. Vercel with Next.js is an example for this. I loved Next.js initially but their approach with app router got me thinking why these people keep changing standards.
- My conditions are different than most others, so I am the person who need to setup a simple and maintainable stack for my use cases.
- I am a [DHH](https://x.com/dhh) fan now but I use my sense before agreeing to his ideas. I gone through his talks and articles during learning **Ruby on Rails**. He taught me _simplicity is derived by hard work and passion_. Most of the things we see as **simple** where built above some serious thinking.
