---
title: Transfer Matrices 2
layout: "base.njk"
tags: "story1"
---

# Hot dogs and Hamburgers

You are at a carnival, it is 40C degrees outside and your are hungry. There are only two good food stands in the carnival, hot-dogs and hamburgers. The two stands are right next to each other, so essentially they share a single line people. 
- Each person in the carnival wants either a hot-dog, or a hamburger. 
- When a person reaches the front of the line, he goes for the stand he wanted, orders, and waits until his meal is ready. 
- While that person waits, the entire line stands still and waits for him to get his food (very annoying, I know). That is unless the person right behind him wants the other stand, and then they both wait together.
- The cooking time for a hot dog or a hamburger is identical, and it is exactly one minute. 
- exactly half of the people in the line want hot-dogs, and the other half want humburgers. 
- You are the 1000th person in line, how long are you expected to wait? 

# Solution  
Let's say that at some given moment, a person just got his food at one (or two persons got their food from both) of the stands. At that precious moment the front of the line has one of the four states:

- $S1: BB$ 
- $S2: BH$ 
- $S3: HB$
- $S4: HH$

 
At the next moment, a person (or two persons if we are lucky) goes to order in the stand(s). That will lead to a new pair of people at the front of the line, again, there are only four options for those pair. The question asked is given the initial state, what is the probability of getting each of the other states in the next cycle. 

|    |   $S1$      |   $S2$      |   $S3$      |   $S4$       |   
|-   |    -        |    -        |    -        |    -         |   
|$S1$|$\frac{1}{2}$|$\frac{1}{4}$|$\frac{1}{4}$|   $0        $|   
|$S2$|   $0       $|$\frac{1}{4}$|$\frac{1}{4}$|$\frac{1}{2} $|   
|$S3$|$\frac{1}{2}$|$\frac{1}{4}$|$\frac{1}{4}$|   $0        $|   
|$S4$|   $0       $|$\frac{1}{4}$|$\frac{1}{4}$|$\frac{1}{2} $|   

From reasons that will become clear soon, we reformulate the states as:
- $S$ same state, either $S1$ or $S4$ 
- $M$ mixed state, either $S2$ or $S3$ 
  
|    |   $S$       |   $M$       |   
|-   |    -        |    -        |   
|$S$ |$\frac{1}{2}$|$\frac{1}{2}$|   
|$M$ |$\frac{1}{2}$|$\frac{1}{2}$|   

Now the question at hand is the following: 

### How much of the time is one stand idle?
Let's make a few observations:
1. When the state is an $S$ state, a stand will be idle for one minute. 
2. When the state is an $M$ state, both stands will work for the next minute.






