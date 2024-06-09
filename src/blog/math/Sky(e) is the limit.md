---
aliases:
tags:
  - post
  - math
added: June 8, 2024
link: https://nibirsan.org/blog/math/skye-is-the-limit
excerpt: Using e as an introduction to limits
date: 2024-06-09T21:52:49+05:30
---

Limits are an interesting concept. Being new to this myself, I was trying to visualise this to understand the core concept.

## What are limits?

Suppose, you're a equation of variable $x$. And you're trying to plug in numbers into it. And you find that the larger you plug in, the closer the equation seems to get to a certain number. _That_ number is the limit.

{% porimage "src/blog/attachments/limit visualisation.png", "Limit Visualisation" %}

It's like the more you try to resist your urge to eat an ice-cream, the closer you get to actually eating one. (That's my visualisation.)

## e as a limit

Let's take an expression:

$$
\begin{gathered}
(1+ \frac{1}{n})^{n}
\end{gathered}
$$

This looks awfully similar to the equation of [:Compound Interest](#:xCompoundInterest); because it kinda is.

But what happens if you start chugging in numbers to $n$?

$$
\begin{aligned}
&n = 1, (1+ \frac{1}{n})^{n} = 2 \\
&n = 10, (1+ \frac{1}{n})^{n} = 2.593\dots \\
&n = 100, (1+ \frac{1}{n})^{n} = 2.704\dots \\
&n = 1000, (1+ \frac{1}{n})^{n} = 2.7169\dots \\
&n = 10000, (1+ \frac{1}{n})^{n} = 2.7181\dots \\
\end{aligned}
$$

... we see that it is getting closer and closer to the [:Euler's Constant](#:xEulersConstant)!

Really fascinating! I suppose all the smug businessmen will leave their shops and start doing Calculus after seeing this.

### To actually see it happening

I made a Python script to plug in values of x in increments, and I could really **see** it happening. This helped a lot in _empirically_ understanding the concept.

```python
from sympy import * # This package allows you to do complex mathematical equations

iteration = 0 # where x = iterations

while True:
	iteration += 1000 # increments

	n = symbols("n")
	expression = (1+1/n)**n # (1+1/x)^x

	number = limit(expression, n, iteration)

	print(f"When n = {iteration} -> {float(form)}") # Prints result
```

[Video Result](https://youtu.be/Yh-ASyYuKLw)

---

So yea, there you go. There are fun stuff happening in Maths (and all around the world), and once we get exposed to it, there's no going back.

Happy Practicing!

### :x Euler's Constant

It is a mathematical constant **2.718281828**... named after mathematician Leonhard Euler. Something like the $\pi$

This comes in handy in Logarithm as well.

### :x Compound Interest

$$
\begin{gathered}
A = P(1+ \frac{I}{N})^{NT}
\end{gathered}
$$

Where:

- A is the Compound Amount
- P is the Principal Amount
- I is the Interest Rate
- N is the no. of times interest is compounded _per year_
- T is the no. of years.
