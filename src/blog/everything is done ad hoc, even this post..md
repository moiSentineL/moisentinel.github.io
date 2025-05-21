---
aliases: 
tags:
  - post
  - philosophy
  - math
  - technical
added: May 16, 2025
link: https://nibirsan.org/blog/p/everything-is-ad-hoc
excerpt: Proving, or maybe not, that every activity is done ad hoc.
date: 2025-05-21T14:15:19+05:30
status: done
content-type: blog
---
Recently, I got myself an used [ThinkPad T14 Gen2a](https://nibirsan.org/tech/). And I've been fiddling with it ever since. I had to revamp my whole workflow / workspace around it, which was obviously expected, but poor old me fell into [Planning Fallacy](https://en.wikipedia.org/wiki/Planning_fallacy) and did not apprehend it. So, I ended up with a unproductive week (in the sense of "work").

I had to do a lot of *ad hoc* scripting, *ad hoc* cable management and make an *ad hoc* laptop docking station made of cardboard boxes. Everything was spontaneous, nothing was planned. But everything resulted in a complacent Nibir and a doable workflow.

**This made me think: every activity that a human can do, is done *ad hoc*.**

To verify this conjecture, we have to dive deeper into the semantics of the phrase "*ad hoc*" and also see if some real life scenarios imply such a thing.

---
## Semantics
The phrase *ad hoc* shows two meanings; 

1. adverb:
	- when necessary or needed.
2. adjective:
	- created or done for a particular purpose as necessary.

Which suggest that doing something "*ad hoc*" is to fulfill a particular necessity, as required.

Here are some examples of such instances:
- I bought the ThinkPad *ad hoc* to give Mom her laptop back.
- I brought my water bottle *ad hoc* to quench my thirst.
- I turned on the lights *ad hoc* so that I can see other things in the dark room.

But giving certain examples doesn't prove that *everything* is done *ad hoc*. I want to prove this more formally, reducing ambiguity as much as possible.
## Formal Proof
I am claiming that everything (i.e., every activity that can be done by a human being) is done *ad hoc*.

So, let $x$ denote any activity. And let $A(x)$ be the property of "being done *ad hoc*".

The claim, expressed in logical notation, is:

$$
\begin{lgathered}
\forall x[A(x)]
\end{lgathered}
$$

(for all $x$, $A(x)$ holds true).

To prove this, we must show that its **negation is false**.

Therefore...

$$
\begin{lgathered}
\exists x [\neg A(x)]
\end{lgathered}
$$

(there exists an activity $x$ such that $A(x)$ doesn't hold true).

...should be shown false.

But we are left with a problem. We need to show that such an activity **does not exist**, which means analysing *every* activity for the property. The path to the solution becomes circular.

Even with our vast reservoir of experience or knowledge, we cannot, pragmatically, do that.

But instead, we *can* prove that our initial assumption ($\forall x[A(x)]$) is false by finding a counter-example. Which will prove that **not everything is done *ad hoc***. And that counterexample is .....

I cannot find any. Maybe because I am biased. Maybe the premises of the proof are shaky and cannot be built upon. Maybe I failed as a mathematician and as a philosopher.
## Noticing fallacy
I notice something shady in the [Semantics](#Semantics) part. Maybe this *necessity* I speak off should be universal, not personal. And that I am turning some *personal* data to prove something *universal*. This suggests that I am a buffoon and need to fix this mess.

Very soon. Let me know if you prove this before I do.