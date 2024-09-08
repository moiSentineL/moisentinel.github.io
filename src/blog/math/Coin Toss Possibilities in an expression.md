---
aliases: 
tags:
  - post
  - math
added: September 7, 2024
link: https://nibirsan.org/blog/p/coin-toss-possibilities-in-an-expression
excerpt: binomial theorem comes in handy
date: 2024-09-08T15:09:22+05:30
status: needs work
content-type: blog
---
Okay, you've tossed a fair coin three times. 
How do you usually represent the possibilities that might occur?

$$
\begin{gathered}
\text{HHH, HHT, HTH, HTT, TTT, TTH, THT, THH}
\end{gathered}
$$

Something like this?

Yea that's fine, but, what if you can represent all this with *just an* algebraic expression?

## Finding the expression
Okay, let us allocate some variables.
Let's take $H$ for heads and $T$ for tails. 

Possibilities:
- All Heads: $H^{3}$ 
	- the "cube" is because there are 3 heads $\text{HHH}$
- 2 Heads, 1 Tail: $3 \times H^{2}T$
	- similar notation as the above for the 3 possibilities: $\text{HHT, HTH, THH}$
- 2 Tails, 1 Head: $3 \times T^{2}H$
	- $\text{HTT, TTH, THT}$
- All tails: $T^{3}$
	- $\text{TTT}$

Now, you take all those terms together and you get:

$$
\begin{gathered}
H^{3} + 3 H^{2}T + 3 HT^{2} + T^{3}
\end{gathered}
$$

And if you notice carefully, that is just the expansion for:

$$
\begin{gathered}
(H+T)^{3}
\end{gathered}
$$

Pretty clever, eh?

## Okay, what can you use it for? 

Suppose someone asks you what are the possibilities that you will get at least 2 heads with 3 coin tosses, you can just look into the expression:

$$
\begin{gathered}
\underset{\text{at least 2 heads}}{\underbrace{H^{3} + 3 H^{2}T}}   + 3 HT^{2} + T^{3}
\end{gathered}
$$

And add up the possibilities: 1+3 = 4! Boom!

Yes, this comes especially handy in such easy permutation questions.

## Wait a minute, isn't this the Binomial Expansion? YES IT IS!

In fact, you can find the possibilities of any of such coin tosses using the [:Binomial Theorem](#:xbinomial)!

So, the possibilities of a fair coin tossed 69 times:

$$
\begin{gathered}
(H + T)^{69}
\end{gathered}
$$

This method is used to *represent* the possibilities, not anything else.
So instead of writing all of the possibilities, just write the binomial expansion, man.

Note: this won't work for dices, because they have 6 faces, not a binomial.

### What is new to this?
Well, you just learned that you can find the possibilities of things usingexpressions. 

## Further Reading
- [Binomial Distribution](https://en.wikipedia.org/wiki/Binomial_distribution) (Probability)
- *How To Understand Combinations Using Multiplication*, [BetterExplained](https://betterexplained.com/articles/how-to-understand-combinations-using-multiplication/)
### :x binomial

$$
\begin{gathered}
(x + y)^{n} = \sum^{n}_{k=0} \binom{n}{k} x^{n-k} y^{k}
\end{gathered}
$$