---
aliases: 
tags:
  - post
  - math
added: November 1, 2024
link: https://nibirsan.org/blog/p/different-ways-of-finding-the-area-of-a-triangle
excerpt: few formulae
date: 2024-11-01T15:16:04+05:30
status: done
content-type: blog
---
There are multiple ways of finding the area of a triangle, from unconventional to completely straight forward ways. These are a few of them:

## the 1/2 x base x height

$$
\begin{lgathered}
\frac{1}{2} \times base \times height
\end{lgathered}
$$
That's what we all know.
## Heron's Formula

$$
\begin{lgathered}
\sqrt{s(s-a)(s-b)(s-c)}
\end{lgathered}
$$
where $s$ is the semi-perimeter ($\frac{1}{2} \times perimeter$) and $a,b,c$ are the length of the sides.

See Proof (Part [1](https://www.khanacademy.org/math/geometry-home/geometry-volume-surface-area/heron-formula-tutorial/v/part-1-of-proof-of-heron-s-formula), [2](https://www.khanacademy.org/math/geometry-home/geometry-volume-surface-area/heron-formula-tutorial/v/part-2-of-the-proof-of-heron-s-formula))
## Coordinate Formula

$$
\begin{lgathered}
\frac{1}{2} \cdot [x_{1} \cdot (y_{2} - y_{3}) + x_{2} \cdot (y_{3}-y_{1}) + x_{3} (y_{1} - y_{2})] 
\end{lgathered}
$$

where $(x_{i}, y_{i})$ are the coordinates of the three vertices of the triangle in a coordinate plane.

See [Proof](https://www.khanacademy.org/math/in-in-grade-10-ncert/x573d8ce20721c073:coordinate-geometry/x573d8ce20721c073:area-of-a-triangle/v/area-of-triangle-formula-derivation)

## 1/2 x Determinant of a 2x2 matrix

$$
\begin{lgathered}
\frac{1}{2} \times \det \mathbf{A} \\
\frac{1}{2} \times \left|\begin{matrix}
a&b \\ c&d
\end{matrix}\right|
\end{lgathered}
$$

Well, $\det \mathbf{A}$ gives you the area of a parallelogram. Which means, **twice** the area of a triangle.

See [Proof](https://www.khanacademy.org/math/linear-algebra/matrix-transformations/determinant-depth/v/linear-algebra-determinant-and-area-of-a-parallelogram)

## 1/2 x magnitude of vector cross-product

$$
\begin{lgathered}
\frac{1}{2} \times | \vec{a} \times \vec{b} |
\end{lgathered}
$$

Since $| \vec{a} \times \vec{b} |$ is essentially the area of the parallelogram ($\because | \vec{a} \times \vec{b} | = a \times b \times \sin \theta \rightarrow base \times height$), the half of it will equal to the area of the triangle subtended by the vectors.

---

And all you have to do now is to use the right method at the right time, which is the hardest step of it all!

Happy Math!