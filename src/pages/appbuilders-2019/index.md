---
title: 'My take from App Builders 2019'
date: '2019-05-05'
brief: Some notes and mostly my murmur during the conference
---

Last week the majority of the iOS team in PVH flew to a beautiful city in Switzerland Lugano to attend the [App Builders](https://appbuilders.ch/). It was a great adventure and a learning experience for all of us.

The conference was very inpiring, fun and full of great people who had a lot to share. As a team, we also shared a lot of laughter, thoughts, and enthusiasm. We came back to Amsterdam with fresh motivation to do our job better.

I believe it is vital to get advice and community-driven initiatives from other developers who are not in our immediate reach. It helps us become better app builders.

In the spirit of sharing, I have picked up three touching talks and written down some thoughts before they faded away from my head.

*([All the talks are available online](https://www.youtube.com/channel/UC9hu86f3N9wJgLk7l8kxFeA), and I'd encourage you to watch them.)*

---
### GitHub to Chatterbug: Lessons Learned by an Accidental Entrepreneur
##### Scott Chacon, co-founder of Github. 

This is a very inspiring talk not only for iOS developers but pretty much everyone in tech. Scott shares his most valuable learning of scaling up a company from 4 to 400 contributors. It also outlines the general disciplines of building a great product.

> This is not what you should do.

First, he mentioned that we all have different journeys, which can go in different ways. Taking that into account, he emphasized that in this talk he wants to focus on things that he would always do in any company.

#### Use your product (a.k.a. eat your dogfood)

Don't build something you won't use. Using your product helps you understand all aspects of it and "feel the friction" in the problem set which you're trying to solve. Develop empathy by building the product you truly care about.

This reminds me of the chapter, *Scratch Your Own Itch* in [REWORK](https://basecamp.com/books/rework). The author, [DHH]((https://twitter.com/dhh)), also says that you need to be the user of your product so that you can improve it thanks to the prompt feedback which can be obtained without asking your customers.

*(🔗[Airbnb Founder Eats His Own Dogfood, Goes 'Homeless' For Months - TechCrunch](https://techcrunch.com/2010/06/21/airbnb-brian-chesky/))*

#### Listen to your customers

To understand your product you need constructive feedback. This is why it is extremely important to make it easy for the user to provide feedback. Think about the number of steps it takes to accomplish this simple task in your product.

I am sure that it happened very often that you, as a user, got annoyed with a product which did not get the job done. On top of this, you were not even able to file feedback. How frustrated were you? In this situation, a normal user would most likely just quit your product and find an alternative. A loyal user might curse you on Reddit. This is definitely a lose-lose situation.

> Your customer's frustrations are your best defense against disruption.

> If you don't know the frustrations of your customers. The people who are competing against you will know the frustrations of your customers and beat you in your game.

It is also essential to understand why they are frustrated rather than what they want. We have to continuously strive to find the source of the users' frustration, which eventually will help us solve the core problem.

> If I had asked people what they wanted, they would have said faster horses. - Henry Ford

#### Augment over replace

In the consumer-facing market, replacing human beings by technology is not what users want. Users want your product to get the job done efficiently in terms of saving money and time, but also receive emotional, human feedback. 
Human communication is the best way to understand the user's frustrations and technology can be used to augment their ability to do their jobs better.

Moreover, we should make a clear distinction between what computers and humans are good at and divide the tasks that need to be done between them accordingly.

> Name a profession, and I'll tell you how computers could make humans better at.

[👉Watch the video](https://www.youtube.com/watch?v=eS2vd8ygJTg)

---
### From Problem to Solution
##### Soroush Khanlou 

We all know that every piece of code starts from something tiny and testable, but at times it becomes a giant monster because of new requirements. In this talk, we learn how to abstract the reusable codes by applying the Single Responsibility Principle.

So the first tip is to **reduce the Cyclomatic Complexity**. 

*( Cyclomatic complexity is a software metric used to indicate the complexity of a program. It is a quantitative measure of the number of linearly independent paths through a program's source code. It was developed by Thomas J. McCabe, Sr. - Wikipedia )*

A study shows [a human can only chunk into the brain with seven parts](https://en.wikipedia.org/wiki/Information_processing_theory). Therefore to decrease the number of end results will lower the effort in our brain to understand how this chunk of code works.

The second tip is to **identify the code smell at the right spectrum** when the codes become painfully to read and test. The speaker provides a useful chart to choose a strategy for dealing with the code correspondingly.

The author of [**Swift In Depth**](https://www.manning.com/books/swift-in-depth), Tjeerd, recently wrote an article about [premature abstractions](https://swiftindepth.com/2019-03-24/a-case-of-premature-abstractions). In the article, he described that the abstracted code comes with a price. As a programmer, we have to be aware that the generalized code should be carefully taken into consideration. I firmly recommend you to read the article, and you will find his book very inspired and thoughtful as well.

> Duplication is far cheaper than the wrong abstraction. - Sandi Metz

Those opinions are acting in concert with each other, and I think premature abstraction is the most common mistake that every developer has made a couple of times in coding. The tricky part is that there is no right answer because someone can always argue that this could be useful in the future. However, please do remember you are employed as a programmer instead of a prophet. My advice to prevent falling into this trap is to dig as much information as you can regarding the user test, revenue stream, roadmap, and the vision of the project before writing the first line of code.

[👉Watch the video](https://www.youtube.com/watch?v=N90_q8Uzc4A)

---
### Scaling Architecture at Lyft
##### Denis Nekliudov, Google expert

> Every architecture decision will require a lot of time to refactor.

Denis gave us quite some takeaways for building a scalable architecture from various aspects. A scalable architecture doesn't mean that you can add whatever features you want tomorrow seamlessly. If you can, in most of the cases you're either accumulating the technical debt or building something insignificant. In my opinion, a scalable architecture means that developers will spend less effort in making the things right so that he/she can provide a stable output in the long-run.

> S.O.L.I.D and clean code should be favored by devs.

A scalable architecture starts from a solid base. It needs to separate the responsibility and balance the importance between each component according to the business priority. It can leverage the CI/CD tool to maintain the integrity of the product.

Let us get back to the topic of Android development. I do not know much about it, so if I am going to build an Android app tomorrow, I will follow these practices from the talk.
* Choose Single Activity with Views.
* Start with Model-View-Intent(-Presenter)
* Implement FeatureToggles
* Be platform framework-agnostic
* Simplify the lifecycle
* Do as many checks for every Pull-request as possible
* Write the code easy for testing
* Standardize UI for every feature on every platform
* Do not over-engineer

Did you notice these are not Android specific except the UI? They are just general best practice regardless of the platform, so it's also helpful for any developer to follow.

> Share your solution and approaches with the world.

Finally, be open to sharing your work and taking critics, because it is the most valuable source for your personal growth.

[👉Watch the video](https://www.youtube.com/watch?v=lCK5_svgxMQ)



