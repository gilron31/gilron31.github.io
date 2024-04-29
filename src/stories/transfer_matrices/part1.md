---
title: Transfer Matrices 1
layout: "story_base.njk"
tags: "story0"
---

# Outline and Motivation
The aim of this section is to gain familiarity with the concept of the transfer matrix. It is an extremely powerful concept appearing in various fields of science. We will discuss it's aspects in discrete mathematics, probability, and thermodynamics. 

The problems we will tackle are:
- In how many different ways can one tile an $2 \times n$ rectangular board with $2 \times 1$ tiles?
- In how many different ways can one tile an $m \times n$ rectangular board with $2 \times 1$ tiles?
  - What about a $m \times n$ cylinder? or torus? 
- [How long will one wait in line for a hamburger?](/stories/transfer_matrices/part2/index.html)

# Baby problem - Tiling $ 2 \times n $ Boards
Consider the following problem:
- You are presented with a rectangle whose sides are $ 2 $ and $ n $.
```m
         <---              n             --->
        +---+---+---+---+---+-     --+---+---+
        |   |   |   |   |   |        |   |   |
        +---+---+---+---+---+- ... --+---+---+ 
        |   |   |   |   |   |        |   |   |
        +---+---+---+---+---+-     --+---+---+
```
- You are given $n$ identical tiles, each is  $2 \times 1$. 
```m
                       +---+
                       |   |
                 n  x  +   +
                       |   |
                       +---+
```
### In how many different ways can you tile the rectangle using the tiles (denoted $s_n$)?

for example, $s_3 = 3$:
```m
      1                  2                  3
+---+---+---+      +---+---+---+      +---+---+---+
|       |   |      |   |       |      |   |   |   |
+---+---+   +      +   +---+---+      +   +   +   +
|       |   |      |   |       |      |   |   |   |
+---+---+---+      +---+---+---+      +---+---+---+
```


### DoD
1. [15] Find a closed form expression of $s_n$. Which you can compute in $O(n)$ time.
 
### Hints 
- [5] Calculate $s_n$ for $n=1,2,3,4,5$.
- One of two things will happen:
  - [10] You recognize the sequence right away and "reverse engineer" the reasoning behind it.
  - [15] You work out some recurrance relation.
- [15] You crunch the recurrance relation and use whichever method you see fit to solve it analytically.  

### Solution
TODO(in collapsable section)




