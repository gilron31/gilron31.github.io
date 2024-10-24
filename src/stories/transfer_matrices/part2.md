---
title: Transfer Matrices 2
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

At the next moment, a person (or two persons if we are lucky) goes to order in the stand(s). That will lead to a new pair of people at the front of the line, again, there are only four options for those pair. The question asked is given the initial state, what is the probability of getting each of the other states in the next cycle.

| \    | $BB$          | $BH$          | $HB$          | $HH$          |
| ---- | ------------- | ------------- | ------------- | ------------- |
| $BB$ | $\frac{1}{2}$ | $\frac{1}{4}$ | $\frac{1}{4}$ | $0$           |
| $BH$ | $0$           | $\frac{1}{4}$ | $\frac{1}{4}$ | $\frac{1}{2}$ |
| $HB$ | $\frac{1}{2}$ | $\frac{1}{4}$ | $\frac{1}{4}$ | $0$           |
| $HH$ | $0$           | $\frac{1}{4}$ | $\frac{1}{4}$ | $\frac{1}{2}$ |

From reasons that will become clear soon, we reformulate the states as:

- $S$ same state, either $BB$ or $HH$
- $M$ mixed state, either $BH$ or $HB$
  
| \   | $S$           | $M$           |
| --- | ------------- | ------------- |
| $S$ | $\frac{1}{2}$ | $\frac{1}{2}$ |
| $M$ | $\frac{1}{2}$ | $\frac{1}{2}$ |

Now the question at hand is the following:

### How much time do we spend on each state?

Well, we start at some state, it can be either $S$ or $M$. The table above shows that we have a probability of $\frac{1}{2}$ to stay in the same state and a probability of $\frac{1}{2}$ to transition to the other state. Now it's time for an important definition: **The state vector**.

$$\vec{s}=\begin{bmatrix} P(S) \cr P(M) \end{bmatrix}$$

The state vector's entries denote the probability that the system is at a given state. $P(S)$ is the probability that the first two people have the same food preferences, $P(M)$ is the probability that they have different preferences (note that they always sum to $1$). For example, if initially the two first people standing in line are both hotdog lovers, the initial state vector is:

$$\vec{s_{init}}=\begin{bmatrix} 1 \cr 0 \end{bmatrix}$$

After the first one went to get his hot dog, there is a 50% probability that the first two people at the head of the line are both hotdog lovers, and a 50% chance that the second is a hamburger lover. Therefore the state vector after the first turn is:

$$\vec{s_{1}}=\begin{bmatrix} \frac{1}{2} \cr \frac{1}{2} \end{bmatrix}$$

How about the next iterations? TODO(explain better), is pretty easy to see that forever after the state will remain:

$$\vec{s_{n}}=\begin{bmatrix} \frac{1}{2} \cr \frac{1}{2} \end{bmatrix}$$

Suppose now that you have two cousins, a smart one and a less brighter one (don't worry he has a great personality and he is very good at football). They give you two interpretations:

- "Half of the people people await for their food while the other stand is empty."
- "Half of the time both stands are working, while in the other half only one of them is working.

Which of the statements was given by our football loving cousin? well, it is the first one that is wrong, since whenever both stands are operating, they involve two people waiting simulateously. The $M$ states make the line go twice as faster as the $S$ states.

Now, since half of the turns (the $S$ states) go at a rate of 1 person per minute, and the other half, the $M$ states go at a rate of two persons per minute, the combined rate is:

$$ R = \frac{1}{2} + 1 = \frac{3}{2} $$

persons per minute. So that is our final answer.

# Generalizing

Now let's say that $x$ percent of the people in line like hotdogs, while the other $1-x$ percent like hamburgers (in the previous example $x=\frac{1}{2}$). Let's rewrite the transition probabilities.

| \    | $BB$  | $BH$      | $HB$      | $HH$  |
| ---- | ----- | --------- | --------- | ----- |
| $BB$ | $1-x$ | $(1-x)^2$ | $(1-x)^2$ | $0$   |
| $BH$ | $0$   | $x(1-x)$  | $x(1-x)$  | $1-x$ |
| $HB$ | $x$   | $x(1-x)$  | $x(1-x)$  | $0$   |
| $HH$ | $0$   | $x^2$     | $x^2$     | $x$   |

Now we denote:

- $H$ Hotdog state, either $HH$.
- $B$ Hotdog state, either $BB$.
- $M$ mixed state, either $BH$ or $HB$.

| \   | $B$   | $M$       | $H$   |
| --- | ----- | --------- | ----- |
| $B$ | $1-x$ | $(1-x)^2$ | $0$   |
| $M$ | $x$   | $2x(1-x)$ | $1-x$ |
| $H$ | $0$   | $x^2$     | $x$   |

The steady state vector corresponding to this transition matrix is:

$$ \vec{v}=\begin{bmatrix} \frac{(1-x)^3}{1-2x+2x^2} \cr \frac{x(1-x)}{1-2x+2x^2} \cr \frac{x^3}{1-2x+2x^2} \end{bmatrix}$$

and indeed for $x=\frac{1}{2}$ we recover $\vec{v}=(\frac{1}{4}, \frac{1}{2}, \frac{1}{4})$

- The hotdog stand is idle $\frac{(1-x)^3}{1-2x+2x^2}$ of the time.
- The hamburger stand is idle $\frac{x^3}{1-2x+2x^2}$ of the time.
- The combined rate is :

$$ R = people/time = \frac{n_B \cdot 1+ n_H \cdot 1 + n_M \cdot 2}{n_B + n_H + n_M}$$

$$ = P(B) + P(H) + 2P(M) $$

$$ = \frac{(1-x)^3}{1-2x+2x^2} + \frac{x^3}{1-2x+2x^2} + \frac{2x(1-x)}{1-2x+2x^2}$$

$$ = \frac{(1-x)^3+x^3+2x(1-x)}{1-2x+2x^2} = \frac{1-x+x^2}{1-2x+2x^2} $$

$$ = \frac{(x-\frac{1}{2})^2 + \frac{3}{4}}{2(x-\frac{1}{2})^2 + \frac{1}{2}} $$
