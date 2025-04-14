---
aliases: 
tags:
  - post
  - debugging
  - technical
added: April 14, 2025
link: https://nibirsan.org/blog/p/k-ratings-prioritise-efficiently
excerpt: no BS and super quick
date: 2025-04-14T14:29:57+05:30
status: done
content-type: blog
title: "k-ratings: Prioritise Efficiently"
---
Being a math guy, I love finding mathematical solutions to stuff that don't really need them, or do they? 
## Presenting: k-ratings
k-ratings are my way to identify which tasks are more appropriate to do at the moment **without any bullshit**. It is Eisenhower Matrix on steroids.

$$
\begin{lgathered}
\text{urgency} \times (\text{alignment} +\text{importance}) = k \\
\end{lgathered}
$$

where, 
- urgency: 1 - low, 2 - medium, 3 - high
- alignment: with my current identity and values (1-5)
- importance: "what's the return on investment on this thing, especially for the long term?" (1-5)
## Eh what?
### Rules
1. Make a list
2. Assign values to `Alignment`, `Importance` and `Urgency`.
3. $k$ = (alignment + importance) x urgency.
4. Sort descending.
5. (**!!!**) Remove anything with $k < 10$. Trust me, you don't need them weeds.
6. If anything with equal $k$ value, prefer the one with higher urgency. If equal urgency, prefer the one with higher importance... and so on.

$$
\begin{lgathered}
\text{urgency < importance < alignment}
\end{lgathered}
$$

### Example
{% lanimage "src/blog/attachments/ex-k-r1.png", "example" %}
According to the rules, 
1. `SAT Prep` has the highest $k$ rating, and so it is the priority task.
2. `Music Theory` and `Playing Games` should be cut off from the list.
3. `Math Course` and `Babysitting Thor` have the same $k$ rating, but `Babysitting Thor` has a higher urgency, so it will be preferred.

In the end you have:

{% lanimage "src/blog/attachments/ex-k-r2.png", "example-2" %}
So, babysitting Thor is more appropriate than doing math?

**Limitations?** Could be. The user base is too small (just me) to analyse anything. Systems are like that.
## Further Whatever
- Once you have the tasks prioritised, make a structured plan to work on them and not wander aimlessly.
- [Forecast](https://www.lesswrong.com/w/forecasting-and-prediction) events in your life, and be more calibrated. I use [fatebook.io](https://fatebook.io/), and it is wonderful.
- Ask ChatGPT to come up with something ridiculous and snarky.
- Call out on bullshit and comment on this post.

Happy planning!