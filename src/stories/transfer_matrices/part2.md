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

- $S_1: BB$ 
- $S_2: BH$ 
- $S_3: HB$
- $S_4: HH$

 
At the next moment, a person (or two persons if we are lucky) goes to order in the stand(s). That will lead to a new pair of people at the front of the line, again, there are only four options for those pair. The question asked is given the initial state, what is the probability of getting each of the other states in the next cycle. 

|  \  |   $S_1$     |   $S_2$     |   $S_3$     |   $S_4$      |   
|-----|-------------|-------------|-------------|--------------|   
|$S_1$|$\frac{1}{2}$|$\frac{1}{4}$|$\frac{1}{4}$|   $0        $|   
|$S_2$|   $0       $|$\frac{1}{4}$|$\frac{1}{4}$|$\frac{1}{2} $|   
|$S_3$|$\frac{1}{2}$|$\frac{1}{4}$|$\frac{1}{4}$|   $0        $|   
|$S_4$|   $0       $|$\frac{1}{4}$|$\frac{1}{4}$|$\frac{1}{2} $|   

From reasons that will become clear soon, we reformulate the states as:
- $S$ same state, either $S_1$ or $S_4$ 
- $M$ mixed state, either $S_2$ or $S_3$ 
  
| \  |   $S$       |   $M$       |   
|-   |    -        |    -        |   
|$S$ |$\frac{1}{2}$|$\frac{1}{2}$|   
|$M$ |$\frac{1}{2}$|$\frac{1}{2}$|   

Now the question at hand is the following: 

### How much time do we spend on each state?
Well, we start at some state, it can be either $S$ or $M$. The table above shows that we have a probability of $\frac{1}{2}$ to stay in the same state and a probability of $\frac{1}{2}$ to transition to the other state. 

### How much of the time is one stand idle?
Let's make a few observations:
1. When the state is an $S$ state, one stand will be idle for one minute. 
2. When the state is an $M$ state, both stands will work for the next minute.







