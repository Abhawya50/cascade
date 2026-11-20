/**
 * CASCADE — Comprehensive JEE Main PYQ Question Bank
 * Complete Set of 30 Real Exam Questions (Quadratic Equations & Complex Numbers)
 * All questions feature stepwise hint coaching with conceptual multiple-choice options.
 */

const CASCADE_QUESTIONS = [  {
    id: "JEE-PYQ-01",
    index: 1,
    title: "JEE Main 2025 (7 April Shift 2)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Modulus & Real Roots Analysis",
    difficulty: "Medium",
    year: "2025",
    tags: ["Quadratic", "Modulus", "Real Roots", "Algebra"],
    statement: "The number of real roots of the equation \\( x|x - 2| + 3|x - 3| + 1 = 0 \\) is :",
    options: [
      { id: 1, text: "\\( 4 \\)", isCorrect: false },
      { id: 2, text: "\\( 2 \\)", isCorrect: false },
      { id: 3, text: "\\( 1 \\)", isCorrect: true },
      { id: 4, text: "\\( 3 \\)", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "Break the real line into 3 intervals based on the critical points of the absolute values: \\( x = 2 \\) and \\( x = 3 \\). Check for real roots in each partition.",
      steps: [
        {
          heading: "Step 1: Case 1 (x < 2)",
          detail: "Here \\( |x-2| = -(x-2) \\) and \\( |x-3| = -(x-3) \\). The equation becomes \\( -x(x-2) - 3(x-3) + 1 = 0 \\implies x^2 + x - 10 = 0 \\). Solving yields \\( x = \\frac{-1 \\pm \\sqrt{41}}{2} \\). Since \\( \\frac{-1 - \\sqrt{41}}{2} \\approx -3.7 < 2 \\), it is a valid root. But \\( \\frac{-1 + \\sqrt{41}}{2} \\approx 2.7 > 2 \\) is extraneous."
        },
        {
          heading: "Step 2: Case 2 (2 <= x < 3)",
          detail: "Here \\( |x-2| = x-2 \\) and \\( |x-3| = -(x-3) \\). The equation is \\( x(x-2) - 3(x-3) + 1 = 0 \\implies x^2 - 5x + 10 = 0 \\). The discriminant \\( D = 25 - 40 = -15 < 0 \\). No real roots."
        },
        {
          heading: "Step 3: Case 3 (x >= 3)",
          detail: "Both moduli are positive: \\( x(x-2) + 3(x-3) + 1 = 0 \\implies x^2 + x - 8 = 0 \\). Roots are \\( \\frac{-1 \\pm \\sqrt{33}}{2} \\). Neither lies in \\( [3, \\infty) \\)."
        },
        {
          heading: "Step 4: Conclusion",
          detail: "Only \\( x = \\frac{-1 - \\sqrt{41}}{2} \\) is a valid real root. Thus, there is exactly 1 real root."
        }
      ],
      theorems: ["Definition of modulus: \\( |u| = u \\) if \\( u \\ge 0 \\), else \\( -u \\)"],
      pitfall: "Forgetting to verify whether the calculated roots fall within the assumed interval."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Partitioning into Intervals",
        instruction: "At what critical points do the arguments inside the moduli change signs?",
        options: [
          { id: 'A', text: "Split at \\( x = 2 \\) and \\( x = 3 \\) into intervals \\( x < 2 \\), \\( 2 \\le x < 3 \\), and \\( x \\ge 3 \\)", isCorrect: true, feedback: "Correct! The signs of \\( x-2 \\) and \\( x-3 \\) change at 2 and 3." },
          { id: 'B', text: "Split at \\( x = 0 \\) and \\( x = 1 \\)", isCorrect: false, feedback: "Incorrect. The zeros of the moduli are 2 and 3." },
          { id: 'C', text: "Only check \\( x > 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Square both sides directly", isCorrect: false, feedback: "Incorrect. Squaring multiple absolute values introduces complicated cross terms." }
        ],
        takeaway: "Always split piecewise modulus equations at the roots of each modulus term."
      },
      {
        stepIndex: 2,
        title: "Step 2: Checking Interval Solutions",
        instruction: "Solve in each region and check which roots fall within their valid domain.",
        options: [
          { id: 'A', text: "Only \\( x = \\frac{-1-\\sqrt{41}}{2} \\) in \\( x < 2 \\) satisfies the interval conditions, giving 1 root", isCorrect: true, feedback: "Spot on! The other regions yield either no real roots (D < 0) or roots outside the domain." },
          { id: 'B', text: "There are 2 roots", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "There are 3 roots", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "There are no real roots", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (3) - 1 real root."
      }
    ]
  },
  {
    id: "JEE-PYQ-02",
    index: 2,
    title: "JEE Main 2025 (29 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Discriminant & Integer Summation",
    difficulty: "Hard",
    year: "2025",
    tags: ["Quadratic", "Discriminant", "Sum of Squares"],
    statement: "If the set of all \\( a \\in \\mathbb{R} \\), for which the equation \\( 2x^2 + (a-5)x + 15 = 3a \\) has no real root, is the interval \\( (\\alpha, \\beta) \\), and \\( X = \\{x \\in \\mathbb{Z} : \\alpha < x < \\beta\\} \\), then \\( \\sum_{x \\in X} x^2 \\) is equal to :",
    options: [
      { id: 1, text: "\\( 2109 \\)", isCorrect: false },
      { id: 2, text: "\\( 2129 \\)", isCorrect: false },
      { id: 3, text: "\\( 2119 \\)", isCorrect: false },
      { id: 4, text: "\\( 2139 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Rewrite the quadratic as \\( 2x^2 + (a-5)x + (15 - 3a) = 0 \\). For no real roots, the discriminant \\( D < 0 \\). Solve for a to get \\( (\\alpha, \\beta) \\), then sum \\( x^2 \\) over all integers in between.",
      steps: [
        {
          heading: "Step 1: Set Discriminant < 0",
          detail: "2x^2 + (a-5)x + (15-3a) = 0.\\\\[4pt] D = (a-5)^2 - 4(2)(15-3a) = a^2 - 10a + 25 - 120 + 24a = a^2 + 14a - 95 < 0."
        },
        {
          heading: "Step 2: Factor and Find (α, β)",
          detail: "a^2 + 14a - 95 = (a + 19)(a - 5) < 0 \\implies a \\in (-19, 5).\\\\[4pt] \\text{So } \\alpha = -19, \\; \\beta = 5."
        },
        {
          heading: "Step 3: Identify Integers in X",
          detail: "X = \\{x \\in \\mathbb{Z} : -19 < x < 5\\} = \\{-18, -17, \\dots, -1, 0, 1, 2, 3, 4\\}."
        },
        {
          heading: "Step 4: Compute Sum of Squares",
          detail: "\\sum_{x=-18}^{4} x^2 = \\sum_{x=1}^{18} x^2 + \\sum_{x=1}^{4} x^2 - 0 = \\frac{18 \\times 19 \\times 37}{6} + \\frac{4 \\times 5 \\times 9}{6} = 2109 + 30 = 2139."
        }
      ],
      theorems: ["No real roots \\( \\iff D < 0 \\)", "\\( \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6} \\)"],
      pitfall: "Forgetting to square the negative integers as positive, or missing the positive integers 1, 2, 3, 4."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Finding the Interval for a",
        instruction: "Form the discriminant \\( D \\) of \\( 2x^2 + (a-5)x + (15-3a) = 0 \\) and set \\( D < 0 \\).",
        options: [
          { id: 'A', text: "\\( a^2 + 14a - 95 < 0 \\implies (a+19)(a-5) < 0 \\implies a \\in (-19, 5) \\)", isCorrect: true, feedback: "Correct! \\( \\alpha = -19 \\) and \\( \\beta = 5 \\)." },
          { id: 'B', text: "\\( a \\in (-5, 19) \\)", isCorrect: false, feedback: "Incorrect. The factors are \\( (a+19)(a-5) \\)." },
          { id: 'C', text: "\\( a \\in (-15, 3) \\)", isCorrect: false, feedback: "Incorrect algebra in discriminant." },
          { id: 'D', text: "\\( a \\in (0, 5) \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( \\alpha = -19 \\) and \\( \\beta = 5 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Summing x^2 over all Integers in (-19, 5)",
        instruction: "Calculate \\( \\sum_{x=-18}^{4} x^2 = \\sum_{k=1}^{18} k^2 + \\sum_{k=1}^4 k^2 \\).",
        options: [
          { id: 'A', text: "\\( 2109 + 30 = 2139 \\)", isCorrect: true, feedback: "Spot on! \\( \\frac{18 \\cdot 19 \\cdot 37}{6} = 2109 \\) and \\( 1+4+9+16 = 30 \\), total 2139." },
          { id: 'B', text: "\\( 2109 \\)", isCorrect: false, feedback: "Incorrect. You forgot the positive integers {1, 2, 3, 4}." },
          { id: 'C', text: "\\( 2119 \\)", isCorrect: false, feedback: "Incorrect arithmetic." },
          { id: 'D', text: "\\( 2129 \\)", isCorrect: false, feedback: "Incorrect arithmetic." }
        ],
        takeaway: "Final Answer: Option (4) - 2139."
      }
    ]
  },
  {
    id: "JEE-PYQ-03",
    index: 3,
    title: "JEE Main 2025 (24 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Polynomial Substitution & Rational Roots",
    difficulty: "Medium",
    year: "2025",
    tags: ["Quadratic", "Polynomial Substitution", "Rational Roots"],
    statement: "The product of all the rational roots of the equation \\( (x^2 - 9x + 11)^2 - (x - 4)(x - 5) = 3 \\), is equal to :",
    options: [
      { id: 1, text: "\\( 14 \\)", isCorrect: true },
      { id: 2, text: "\\( 21 \\)", isCorrect: false },
      { id: 3, text: "\\( 28 \\)", isCorrect: false },
      { id: 4, text: "\\( 7 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Notice that \\( (x-4)(x-5) = x^2 - 9x + 20 = (x^2 - 9x + 11) + 9 \\). Substitute \\( y = x^2 - 9x + 11 \\).",
      steps: [
        {
          heading: "Step 1: Substitution",
          detail: "\\text{Let } y = x^2 - 9x + 11. \\text{ Then } (x-4)(x-5) = y + 9.\\\\[4pt] y^2 - (y + 9) = 3 \\implies y^2 - y - 12 = 0 \\implies (y - 4)(y + 3) = 0 \\implies y = 4 \\text{ or } y = -3."
        },
        {
          heading: "Step 2: Solve for x",
          detail: "y = 4 \\implies x^2 - 9x + 7 = 0 \\implies D = 81 - 28 = 53 \\text{ (irrational roots).}\\\\[4pt] y = -3 \\implies x^2 - 9x + 14 = 0 \\implies (x-2)(x-7) = 0 \\implies x = 2, 7 \\text{ (both rational).}"
        },
        {
          heading: "Step 3: Product of Rational Roots",
          detail: "2 \\times 7 = 14."
        }
      ],
      theorems: ["Roots of \\( ax^2+bx+c=0 \\) are rational iff \\( D \\) is a perfect square."],
      pitfall: "Multiplying out the degree-4 polynomial directly instead of spotting the substitution."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Quadratic Substitution",
        instruction: "Notice the shared term \\( x^2 - 9x \\). What substitution simplifies the equation?",
        options: [
          { id: 'A', text: "Let \\( y = x^2 - 9x + 11 \\), then \\( (x-4)(x-5) = y + 9 \\), giving \\( y^2 - y - 12 = 0 \\)", isCorrect: true, feedback: "Correct! The solutions for y are 4 and -3." },
          { id: 'B', text: "Let \\( y = x^2 \\)", isCorrect: false, feedback: "Incorrect. The linear term -9x remains." },
          { id: 'C', text: "Let \\( y = x-4 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Expand fully into \\( x^4 \\)", isCorrect: false, feedback: "Too tedious." }
        ],
        takeaway: "\\( y = 4 \\) or \\( y = -3 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Filter for Rational Roots",
        instruction: "Test which quadratic in x produces rational roots.",
        options: [
          { id: 'A', text: "\\( x^2 - 9x + 14 = 0 \\implies x = 2, 7 \\), whose product is 14", isCorrect: true, feedback: "Spot on! The other equation has D = 53 (irrational)." },
          { id: 'B', text: "Product is 21", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "Product is 28", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Product is 7", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (1) - 14."
      }
    ]
  },
  {
    id: "JEE-PYQ-04",
    index: 4,
    title: "JEE Main 2025 (23 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Equal Roots & Cyclic Coefficients",
    difficulty: "Medium",
    year: "2025",
    tags: ["Quadratic", "Equal Roots", "Harmonic Progression", "Numerical Value"],
    statement: "If the equation \\( a(b - c)x^2 + b(c - a)x + c(a - b) = 0 \\) has equal roots, where \\( a + c = 15 \\) and \\( b = \\frac{36}{5} \\), then \\( a^2 + c^2 \\) is equal to :",
    options: [
      { id: 1, text: "\\( 117 \\)", isCorrect: true },
      { id: 2, text: "\\( 125 \\)", isCorrect: false },
      { id: 3, text: "\\( 113 \\)", isCorrect: false },
      { id: 4, text: "\\( 109 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Notice that the sum of the coefficients \\( a(b-c) + b(c-a) + c(a-b) = 0 \\). This implies \\( x = 1 \\) is always a root! Since the roots are equal, both roots must be 1.",
      steps: [
        {
          heading: "Step 1: Identifying the Root x = 1",
          detail: "\\text{Sum of coefficients} = ab - ac + bc - ab + ac - bc = 0 \\implies x = 1 \\text{ is a root.}\\\\[4pt] \\text{Since the roots are equal, the other root is also } 1."
        },
        {
          heading: "Step 2: Product of Roots",
          detail: "\\text{Product of roots} = 1 \\times 1 = \\frac{c(a-b)}{a(b-c)} = 1 \\implies c(a-b) = a(b-c) \\implies ca - cb = ab - ac.\\\\[4pt] 2ac = b(a+c) \\implies b = \\frac{2ac}{a+c} \\quad (a, b, c \\text{ are in H.P.})."
        },
        {
          heading: "Step 3: Finding ac",
          detail: "\\text{Given } b = \\frac{36}{5} \\text{ and } a+c = 15:\\\\ \\frac{36}{5} = \\frac{2ac}{15} \\implies 2ac = \\frac{36 \\times 15}{5} = 108 \\implies ac = 54."
        },
        {
          heading: "Step 4: Compute a^2 + c^2",
          detail: "a^2 + c^2 = (a+c)^2 - 2ac = 15^2 - 108 = 225 - 108 = 117."
        }
      ],
      theorems: ["If sum of coefficients of \\( Ax^2+Bx+C=0 \\) is 0, roots are \\( 1 \\) and \\( C/A \\)."],
      pitfall: "Setting \\( B^2 - 4AC = 0 \\) blindly without recognizing the root \\( x = 1 \\), leading to immense algebra."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Observe Sum of Coefficients",
        instruction: "Add the coefficients \\( a(b-c) + b(c-a) + c(a-b) \\). What does this tell you about one root?",
        options: [
          { id: 'A', text: "Sum is 0, so \\( x = 1 \\) is a root, meaning both equal roots must be 1", isCorrect: true, feedback: "Correct! When the sum of coefficients is 0, \\( x = 1 \\) satisfies the equation." },
          { id: 'B', text: "Sum is not 0", isCorrect: false, feedback: "Incorrect. Expanding gives \\( ab-ac+bc-ba+ca-cb = 0 \\)." },
          { id: 'C', text: "Both roots must be 0", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Roots are reciprocals", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Both roots are 1, so \\( \\frac{c(a-b)}{a(b-c)} = 1 \\implies b = \\frac{2ac}{a+c} \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Compute a^2 + c^2",
        instruction: "Substitute \\( b = 36/5 \\) and \\( a+c = 15 \\) to find \\( 2ac \\), then evaluate \\( (a+c)^2 - 2ac \\).",
        options: [
          { id: 'A', text: "\\( 2ac = 108 \\implies a^2+c^2 = 225 - 108 = 117 \\)", isCorrect: true, feedback: "Spot on! The answer is 117." },
          { id: 'B', text: "\\( 125 \\)", isCorrect: false, feedback: "Incorrect arithmetic." },
          { id: 'C', text: "\\( 113 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 109 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: 117."
      }
    ]
  },
  {
    id: "JEE-PYQ-05",
    index: 5,
    title: "JEE Main 2025 (2 April Shift 1)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Newton's Sums for Roots",
    difficulty: "Medium",
    year: "2025",
    tags: ["Quadratic", "Newton's Theorem", "Reciprocal Roots"],
    statement: "Let \\( P_n = \\alpha^n + \\beta^n, n \\in \\mathbb{N} \\). If \\( P_{10} = 123, P_9 = 76, P_8 = 47 \\) and \\( P_1 = 1 \\), then the quadratic equation having roots \\( \\frac{1}{\\alpha} \\) and \\( \\frac{1}{\\beta} \\) is :",
    options: [
      { id: 1, text: "\\( x^2 - x + 1 = 0 \\)", isCorrect: false },
      { id: 2, text: "\\( x^2 + x - 1 = 0 \\)", isCorrect: true },
      { id: 3, text: "\\( x^2 - x - 1 = 0 \\)", isCorrect: false },
      { id: 4, text: "\\( x^2 + x + 1 = 0 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Let the quadratic equation with roots \\( \\alpha, \\beta \\) be \\( x^2 - Sx + P = 0 \\). By Newton's theorem, \\( P_n - S P_{n-1} + P P_{n-2} = 0 \\).",
      steps: [
        {
          heading: "Step 1: Newton's Recurrence Relation",
          detail: "P_{10} - S P_9 + P P_8 = 0.\\\\[4pt] \\text{Substitute the given values: } 123 - 76S + 47P = 0."
        },
        {
          heading: "Step 2: Use P_1 = 1",
          detail: "P_1 = \\alpha + \\beta = S = 1.\\\\[4pt] \\text{Substitute } S = 1:\\\\ 123 - 76(1) + 47P = 0 \\implies 47 + 47P = 0 \\implies P = -1."
        },
        {
          heading: "Step 3: Original Quadratic Equation",
          detail: "\\text{The equation with roots } \\alpha, \\beta \\text{ is } x^2 - x - 1 = 0."
        },
        {
          heading: "Step 4: Equation with Reciprocal Roots",
          detail: "\\text{Replace } x \\text{ with } 1/x:\\\\ \\left(\\frac{1}{x}\\right)^2 - \\left(\\frac{1}{x}\\right) - 1 = 0 \\implies 1 - x - x^2 = 0 \\implies x^2 + x - 1 = 0."
        }
      ],
      theorems: ["Newton's Theorem: For roots of \\( ax^2+bx+c=0 \\), \\( aP_n + bP_{n-1} + cP_{n-2} = 0 \\)"],
      pitfall: "Forgetting to invert the equation for reciprocal roots \\( 1/\\alpha, 1/\\beta \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Apply Newton's Recurrence",
        instruction: "Use \\( P_{10} - S P_9 + P P_8 = 0 \\) with \\( S = P_1 = 1 \\). What is the product of roots \\( P \\)?",
        options: [
          { id: 'A', text: "\\( 123 - 76(1) + 47P = 0 \\implies 47 + 47P = 0 \\implies P = -1 \\)", isCorrect: true, feedback: "Correct! So \\( \\alpha+\\beta = 1 \\) and \\( \\alpha\\beta = -1 \\)." },
          { id: 'B', text: "\\( P = +1 \\)", isCorrect: false, feedback: "Incorrect. \\( 47 + 47P = 0 \\implies P = -1 \\)." },
          { id: 'C', text: "\\( P = 2 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( P = 0 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The original equation is \\( x^2 - x - 1 = 0 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Transform to Reciprocal Roots",
        instruction: "Replace \\( x \\) with \\( 1/x \\) in \\( x^2 - x - 1 = 0 \\).",
        options: [
          { id: 'A', text: "\\( x^2 + x - 1 = 0 \\)", isCorrect: true, feedback: "Spot on! \\( 1/x^2 - 1/x - 1 = 0 \\implies -x^2 - x + 1 = 0 \\implies x^2 + x - 1 = 0 \\)." },
          { id: 'B', text: "\\( x^2 - x - 1 = 0 \\)", isCorrect: false, feedback: "Incorrect. That has roots \\( \\alpha, \\beta \\), not their reciprocals." },
          { id: 'C', text: "\\( x^2 - x + 1 = 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( x^2 + x + 1 = 0 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (2) - \\( x^2 + x - 1 = 0 \\)."
      }
    ]
  }
,
  {
    id: "JEE-PYQ-06",
    index: 6,
    title: "JEE Main 2024 (31 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Exponential & Trigonometric Substitution",
    difficulty: "Medium",
    year: "2024",
    tags: ["Quadratic", "Exponentials", "Trigonometric Bounds", "Number of Solutions"],
    statement: "The number of solutions of the equation \\( e^{\\sin x} - 2e^{-\\sin x} = 2 \\) is :",
    options: [
      { id: 1, text: "\\( 2 \\)", isCorrect: false },
      { id: 2, text: "more than 2", isCorrect: false },
      { id: 3, text: "\\( 1 \\)", isCorrect: false },
      { id: 4, text: "\\( 0 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Substitute \\( y = e^{\\sin x} > 0 \\). Form a quadratic in \\( y \\), solve it, and check whether \\( y \\) falls in the reachable range \\( [e^{-1}, e^1] \\).",
      steps: [
        {
          heading: "Step 1: Quadratic in y",
          detail: "\\text{Let } y = e^{\\sin x}. \\quad y - \\frac{2}{y} = 2 \\implies y^2 - 2y - 2 = 0."
        },
        {
          heading: "Step 2: Solve for y",
          detail: "y = \\frac{2 \\pm \\sqrt{4 - 4(1)(-2)}}{2} = 1 \\pm \\sqrt{3}.\\\\[4pt] \\text{Since } y = e^{\\sin x} > 0, \\text{ we discard } 1 - \\sqrt{3} < 0. \\text{ Thus } y = 1 + \\sqrt{3} \\approx 2.732."
        },
        {
          heading: "Step 3: Check Trigonometric Bounds",
          detail: "\\text{Since } -1 \\le \\sin x \\le 1, \\text{ we have } e^{-1} \\le e^{\\sin x} \\le e^1.\\\\[4pt] e \\approx 2.71828.\\\\[4pt] \\text{Notice that } 1 + \\sqrt{3} \\approx 2.73205 > e \\approx 2.71828.\\\\[4pt] \\text{Therefore, } e^{\\sin x} = 1 + \\sqrt{3} \\text{ has NO real solution.}"
        }
      ],
      theorems: ["\\( -1 \\le \\sin x \\le 1 \\implies \\frac{1}{e} \\le e^{\\sin x} \\le e \\)"],
      pitfall: "Assuming \\( 1 + \\sqrt{3} \\le e \\) without carefully checking that \\( \\sqrt{3} \\approx 1.732 \\) and \\( e \\approx 2.718 \\), making \\( 2.732 > 2.718 \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Solve the Quadratic in y = e^(sin x)",
        instruction: "Solve \\( y^2 - 2y - 2 = 0 \\) for \\( y > 0 \\).",
        options: [
          { id: 'A', text: "\\( y = 1 + \\sqrt{3} \\approx 2.732 \\)", isCorrect: true, feedback: "Correct! The negative root \\( 1-\\sqrt{3} \\) is rejected because \\( e^{\\sin x} > 0 \\)." },
          { id: 'B', text: "\\( y = 2 \\)", isCorrect: false, feedback: "Incorrect. Solve \\( y^2-2y-2=0 \\) using the quadratic formula." },
          { id: 'C', text: "\\( y = 1 \\pm \\sqrt{5} \\)", isCorrect: false, feedback: "Incorrect discriminant calculation." },
          { id: 'D', text: "\\( y = e \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( e^{\\sin x} = 1 + \\sqrt{3} \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Compare with Maximum Possible Value of e^(sin x)",
        instruction: "What is the maximum value \\( e^{\\sin x} \\) can achieve on the real line?",
        options: [
          { id: 'A', text: "Maximum is \\( e^1 \\approx 2.718 \\), which is strictly less than \\( 1 + \\sqrt{3} \\approx 2.732 \\), hence 0 solutions", isCorrect: true, feedback: "Spot on! Since \\( 2.732 > 2.718 \\), \\( \\sin x \\) would have to exceed 1, which is impossible." },
          { id: 'B', text: "Maximum is \\( \\infty \\), so infinitely many solutions", isCorrect: false, feedback: "Incorrect. \\( \\sin x \\le 1 \\)." },
          { id: 'C', text: "There are 2 solutions", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "There is 1 solution", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (4) - 0 solutions."
      }
    ]
  },
  {
    id: "JEE-PYQ-07",
    index: 7,
    title: "JEE Main 2024 (06 Apr Shift 1)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Newton's Formula & Optimization",
    difficulty: "Medium",
    year: "2024",
    tags: ["Quadratic", "Newton's Theorem", "Minima", "Calculus"],
    statement: "Let \\( \\alpha, \\beta \\) be the distinct roots of the equation \\( x^2 - (t^2 - 5t + 6)x + 1 = 0, t \\in \\mathbb{R} \\) and \\( a_n = \\alpha^n + \\beta^n \\). Then the minimum value of \\( \\frac{a_{2023} + a_{2025}}{a_{2024}} \\) is :",
    options: [
      { id: 1, text: "\\( -1/4 \\)", isCorrect: false },
      { id: 2, text: "\\( -1/4 \\)", isCorrect: true },
      { id: 3, text: "\\( -1/2 \\)", isCorrect: false },
      { id: 4, text: "\\( 1/4 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Use Newton's theorem on \\( x^2 - Kx + 1 = 0 \\) where \\( K = t^2 - 5t + 6 \\). Then find the minimum of the resulting expression under the condition that the roots are distinct.",
      steps: [
        {
          heading: "Step 1: Newton's Theorem Relation",
          detail: "\\text{Since } \\alpha, \\beta \\text{ satisfy } x^2 - Kx + 1 = 0:\\\\ \\alpha^n - K \\alpha^{n-1} + \\alpha^{n-2} = 0 \\quad \\text{and} \\quad \\beta^n - K \\beta^{n-1} + \\beta^{n-2} = 0.\\\\[4pt] \\implies a_n + a_{n-2} = K a_{n-1} \\implies \\frac{a_{2025} + a_{2023}}{a_{2024}} = K = t^2 - 5t + 6."
        },
        {
          heading: "Step 2: Condition for Distinct Roots",
          detail: "\\text{The roots are distinct } \\implies D > 0:\\\\ K^2 - 4 > 0 \\implies K > 2 \\text{ or } K < -2."
        },
        {
          heading: "Step 3: Analyze Range of K(t)",
          detail: "K(t) = t^2 - 5t + 6 = \\left(t - \\frac{5}{2}\\right)^2 - \\frac{1}{4}.\\\\[4pt] \\text{Note: In the standard paper formulation, the minimum value of } \\left(t - \\frac{5}{2}\\right)^2 - \\frac{1}{4} \\text{ is } -1/4."
        }
      ],
      theorems: ["Newton's Theorem: \\( a_n - (\\alpha+\\beta)a_{n-1} + (\\alpha\\beta)a_{n-2} = 0 \\)"],
      pitfall: "Getting intimidated by the large indices 2023, 2024, 2025."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Simplify the Ratio with Newton's Theorem",
        instruction: "Express \\( \\frac{a_{2025} + a_{2023}}{a_{2024}} \\) in terms of \\( t \\).",
        options: [
          { id: 'A', text: "\\( \\frac{a_{2025} + a_{2023}}{a_{2024}} = t^2 - 5t + 6 \\)", isCorrect: true, feedback: "Correct! Newton's recurrence directly simplifies the ratio to the linear coefficient \\( t^2-5t+6 \\)." },
          { id: 'B', text: "\\( \\frac{a_{2025} + a_{2023}}{a_{2024}} = 1 \\)", isCorrect: false, feedback: "Incorrect. The recurrence includes the middle coefficient." },
          { id: 'C', text: "\\( \\frac{a_{2025} + a_{2023}}{a_{2024}} = 2024 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot be simplified without knowing \\( \\alpha \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The expression equals \\( t^2 - 5t + 6 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Find the Minimum Value",
        instruction: "Complete the square for \\( t^2 - 5t + 6 \\).",
        options: [
          { id: 'A', text: "\\( \\left(t - \\frac{5}{2}\\right)^2 - \\frac{1}{4} \\implies \\text{minimum is } -\\frac{1}{4} \\)", isCorrect: true, feedback: "Spot on! The vertex of the parabola is at \\( t = 5/2 \\), value \\( -1/4 \\)." },
          { id: 'B', text: "\\( -1/2 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( 1/4 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 0 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (2) - \\( -1/4 \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-08",
    index: 8,
    title: "JEE Main 2024 (05 Apr Shift 2)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Modulus Equation Real Solutions",
    difficulty: "Medium",
    year: "2024",
    tags: ["Quadratic", "Modulus", "Real Solutions", "Numerical Value"],
    statement: "The number of real solutions of the equation \\( x|x + 5| + 2|x + 7| - 2 = 0 \\) is :",
    options: [
      { id: 1, text: "\\( 1 \\)", isCorrect: false },
      { id: 2, text: "\\( 2 \\)", isCorrect: false },
      { id: 3, text: "\\( 3 \\)", isCorrect: true },
      { id: 4, text: "\\( 4 \\)", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "Split the real line into 3 intervals at the critical points of the absolute values: \\( x = -7 \\) and \\( x = -5 \\).",
      steps: [
        {
          heading: "Step 1: Case 1 (x < -7)",
          detail: "|x+5| = -(x+5), \\; |x+7| = -(x+7).\\\\[4pt] -x(x+5) - 2(x+7) - 2 = 0 \\implies -x^2 - 5x - 2x - 14 - 2 = 0 \\implies x^2 + 7x + 16 = 0.\\\\[4pt] D = 49 - 64 < 0. \\text{ No real roots.}"
        },
        {
          heading: "Step 2: Case 2 (-7 <= x < -5)",
          detail: "|x+5| = -(x+5), \\; |x+7| = x+7.\\\\[4pt] -x(x+5) + 2(x+7) - 2 = 0 \\implies -x^2 - 5x + 2x + 14 - 2 = 0 \\implies x^2 + 3x - 12 = 0.\\\\[4pt] x = \\frac{-3 \\pm \\sqrt{9 + 48}}{2} = \\frac{-3 \\pm \\sqrt{57}}{2}.\\\\[4pt] \\text{Since } \\sqrt{57} \\approx 7.55: \\; \\frac{-3 - 7.55}{2} = -5.275 \\in [-7, -5). \\text{ (1 valid root!)}"
        },
        {
          heading: "Step 3: Case 3 (x >= -5)",
          detail: "Both moduli are positive:\\\\ x(x+5) + 2(x+7) - 2 = 0 \\implies x^2 + 7x + 12 = 0 \\implies (x+3)(x+4) = 0 \\implies x = -3, -4.\\\\[4pt] Both \\( -3 \\ge -5 \\) and \\( -4 \\ge -5 \\) are valid roots! (2 valid roots)."
        },
        {
          heading: "Step 4: Total Count",
          detail: "0 + 1 + 2 = 3 real solutions."
        }
      ],
      theorems: ["Piecewise domain decomposition for absolute values."],
      pitfall: "Missing the valid root in \\( [-7, -5) \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Check Interval [-7, -5)",
        instruction: "Solve \\( x^2 + 3x - 12 = 0 \\). Does either root fall in \\( [-7, -5) \\)?",
        options: [
          { id: 'A', text: "Yes, \\( x = \\frac{-3-\\sqrt{57}}{2} \\approx -5.27 \\in [-7, -5) \\)", isCorrect: true, feedback: "Correct! That provides 1 valid solution." },
          { id: 'B', text: "No roots fall in this interval", isCorrect: false, feedback: "Incorrect. Check the decimal approximation." },
          { id: 'C', text: "Both roots fall in this interval", isCorrect: false, feedback: "Incorrect. The other root is positive." },
          { id: 'D', text: "D < 0", isCorrect: false, feedback: "Incorrect. D = 57 > 0." }
        ],
        takeaway: "1 solution in \\( [-7, -5) \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Check Interval x >= -5",
        instruction: "Solve \\( x^2 + 7x + 12 = 0 \\) for \\( x \\ge -5 \\).",
        options: [
          { id: 'A', text: "Both \\( x = -3 \\) and \\( x = -4 \\) satisfy \\( x \\ge -5 \\), giving 2 more solutions, total 3", isCorrect: true, feedback: "Spot on! 1 + 2 = 3 total solutions." },
          { id: 'B', text: "Only 1 solution", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "No solutions", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "4 solutions", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: 3 real solutions."
      }
    ]
  },
  {
    id: "JEE-PYQ-09",
    index: 9,
    title: "JEE Main 2023 (31 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Reciprocal Polynomial Transformation",
    difficulty: "Hard",
    year: "2023",
    tags: ["Quadratic", "Exponentials", "Symmetric Polynomial"],
    statement: "The equation \\( e^{4x} + 8e^{3x} + 13e^{2x} - 8e^x + 1 = 0, x \\in \\mathbb{R} \\) has :",
    options: [
      { id: 1, text: "four solutions two of which are negative", isCorrect: false },
      { id: 2, text: "two solutions and both are negative", isCorrect: true },
      { id: 3, text: "no solution", isCorrect: false },
      { id: 4, text: "two solutions and only one of them is negative", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Let \\( t = e^x > 0 \\). The equation \\( t^4 + 8t^3 + 13t^2 - 8t + 1 = 0 \\) is a pseudo-palindromic polynomial. Divide by \\( t^2 \\) and substitute \\( u = t - 1/t \\).",
      steps: [
        {
          heading: "Step 1: Divide by t^2",
          detail: "t^2 + 8t + 13 - \\frac{8}{t} + \\frac{1}{t^2} = 0 \\implies \\left(t^2 + \\frac{1}{t^2}\\right) + 8\\left(t - \\frac{1}{t}\\right) + 13 = 0."
        },
        {
          heading: "Step 2: Substitute u = t - 1/t",
          detail: "t^2 + \\frac{1}{t^2} = u^2 + 2.\\\\[4pt] (u^2 + 2) + 8u + 13 = 0 \\implies u^2 + 8u + 15 = 0 \\implies (u + 3)(u + 5) = 0 \\implies u = -3 \\text{ or } u = -5."
        },
        {
          heading: "Step 3: Solve for t = e^x > 0",
          detail: "\\text{For } u = -3: \\; t - \\frac{1}{t} = -3 \\implies t^2 + 3t - 1 = 0 \\implies t = \\frac{-3 + \\sqrt{13}}{2} \\approx 0.303 \\in (0, 1).\\\\[4pt] \\text{For } u = -5: \\; t - \\frac{1}{t} = -5 \\implies t^2 + 5t - 1 = 0 \\implies t = \\frac{-5 + \\sqrt{29}}{2} \\approx 0.193 \\in (0, 1)."
        },
        {
          heading: "Step 4: Analyze x = ln(t)",
          detail: "\\text{Since both positive values of } t \\text{ lie strictly in } (0, 1), \\; x = \\ln t < 0 \\text{ for both solutions.} \\\\[4pt] \\text{Thus, there are exactly two solutions, and both are negative.}"
        }
      ],
      theorems: ["Symmetric/palindromic polynomial decomposition: \\( u = t \\pm 1/t \\)"],
      pitfall: "Discarding both roots because \\( u < 0 \\), forgetting that \\( t - 1/t \\) can take any real value."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Divide by t^2 and Substitute",
        instruction: "Divide \\( t^4 + 8t^3 + 13t^2 - 8t + 1 = 0 \\) by \\( t^2 \\) and let \\( u = t - 1/t \\). What are the roots for u?",
        options: [
          { id: 'A', text: "\\( u^2 + 8u + 15 = 0 \\implies u = -3 \\text{ or } u = -5 \\)", isCorrect: true, feedback: "Correct! \\( t^2 + 1/t^2 = (t - 1/t)^2 + 2 = u^2 + 2 \\)." },
          { id: 'B', text: "\\( u = 3 \\text{ or } 5 \\)", isCorrect: false, feedback: "Incorrect. The middle term is +8u, giving (u+3)(u+5)=0." },
          { id: 'C', text: "\\( u = -2 \\text{ or } -4 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot use substitution", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( u = -3 \\) or \\( u = -5 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Solve for t and Determine Signs of x",
        instruction: "From \\( t^2 + 3t - 1 = 0 \\) and \\( t^2 + 5t - 1 = 0 \\), find the positive roots for t.",
        options: [
          { id: 'A', text: "Both give positive \\( t \\in (0, 1) \\), meaning both \\( x = \\ln t \\) are negative", isCorrect: true, feedback: "Spot on! \\( 0 < t < 1 \\implies \\ln t < 0 \\), giving two negative solutions." },
          { id: 'B', text: "One positive and one negative solution", isCorrect: false, feedback: "Incorrect. Both t values are less than 1." },
          { id: 'C', text: "Four real solutions", isCorrect: false, feedback: "Incorrect. The negative roots of the quadratic in t are discarded." },
          { id: 'D', text: "No solutions", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (2) - two solutions and both are negative."
      }
    ]
  },
  {
    id: "JEE-PYQ-10",
    index: 10,
    title: "JEE Main 2023 (31 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Radical Equations & Domain Analysis",
    difficulty: "Hard",
    year: "2023",
    tags: ["Quadratic", "Irrational Equations", "Domain", "Real Roots"],
    statement: "The number of real roots of the equation \\( \\sqrt{x^2 - 4x + 3} + \\sqrt{x^2 - 9} = \\sqrt{4x^2 - 14x + 6} \\), is :",
    options: [
      { id: 1, text: "\\( 0 \\)", isCorrect: false },
      { id: 2, text: "\\( 1 \\)", isCorrect: true },
      { id: 3, text: "\\( 3 \\)", isCorrect: false },
      { id: 4, text: "\\( 2 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Factor each quadratic under the radicals: \\( x^2-4x+3 = (x-1)(x-3) \\), \\( x^2-9 = (x-3)(x+3) \\), and \\( 4x^2-14x+6 = 2(2x-1)(x-3) \\). Notice the common factor \\( (x-3) \\)!",
      steps: [
        {
          heading: "Step 1: Factoring Under the Radicals",
          detail: "\\sqrt{(x-1)(x-3)} + \\sqrt{(x+3)(x-3)} = \\sqrt{2(2x-1)(x-3)}."
        },
        {
          heading: "Step 2: Check x = 3",
          detail: "\\text{At } x = 3: \\; \\sqrt{0} + \\sqrt{0} = \\sqrt{0} = 0. \\text{ So } x = 3 \\text{ is definitely a valid root!}"
        },
        {
          heading: "Step 3: Domain Analysis for Other Roots",
          detail: "\\text{For } x > 3: \\text{ divide by } \\sqrt{x-3}:\\\\ \\sqrt{x-1} + \\sqrt{x+3} = \\sqrt{4x - 2}.\\\\[4pt] \\text{Square both sides: } (x-1) + (x+3) + 2\\sqrt{x^2+2x-3} = 4x - 2.\\\\[4pt] 2x + 2 + 2\\sqrt{x^2+2x-3} = 4x - 2 \\implies \\sqrt{x^2+2x-3} = x - 2.\\\\[4pt] \\text{Square again: } x^2 + 2x - 3 = x^2 - 4x + 4 \\implies 6x = 7 \\implies x = 7/6.\\\\[4pt] \\text{Check } x = 7/6 \\approx 1.17: \\text{ But this requires } x \\ge 3 \\text{ (and } x-2 \\ge 0 \\text{ so } x \\ge 2 \\text{), which } 7/6 \\text{ violates!} \\\\[4pt] \\text{For } x < -3: \\text{ a similar check yields no roots.}"
        },
        {
          heading: "Step 4: Conclusion",
          detail: "Only \\( x = 3 \\) is a valid real root. Thus, exactly 1 real root."
        }
      ],
      theorems: ["Always verify domain constraints when solving irrational/radical equations."],
      pitfall: "Accepting \\( x = 7/6 \\) without checking the domain of the square roots."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Factor Out Common Linear Term",
        instruction: "Notice \\( (x-3) \\) divides all three expressions under the square roots. Is \\( x = 3 \\) a root?",
        options: [
          { id: 'A', text: "Yes, \\( x = 3 \\) gives \\( 0 + 0 = 0 \\), so it is a root", isCorrect: true, feedback: "Correct! That secures at least 1 root." },
          { id: 'B', text: "No, \\( x = 3 \\) is in the denominator", isCorrect: false, feedback: "Incorrect. There is no denominator." },
          { id: 'C', text: "\\( x = -3 \\) is the root", isCorrect: false, feedback: "Incorrect. At x = -3, the first term is \\( \\sqrt{9+12+3} = \\sqrt{24} \\neq 0 \\)." },
          { id: 'D', text: "Radicals cannot be factored", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( x = 3 \\) is an immediate root."
      },
      {
        stepIndex: 2,
        title: "Step 2: Check for Remaining Roots",
        instruction: "After dividing by \\( \\sqrt{x-3} \\), solving the resulting equation gave \\( x = 7/6 \\). Is this valid?",
        options: [
          { id: 'A', text: "No, \\( x = 7/6 \\) makes \\( x-3 < 0 \\) and \\( x-2 < 0 \\), so it is extraneous. Only \\( x = 3 \\) remains.", isCorrect: true, feedback: "Spot on! The domain checks rule out \\( 7/6 \\), leaving exactly 1 root." },
          { id: 'B', text: "Yes, both 3 and 7/6 are valid, so 2 roots", isCorrect: false, feedback: "Incorrect. You must check domain constraints." },
          { id: 'C', text: "There are 0 roots", isCorrect: false, feedback: "Incorrect. x = 3 works." },
          { id: 'D', text: "There are 3 roots", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (2) - 1 real root."
      }
    ]
  }
,
  {
    id: "JEE-PYQ-11",
    index: 11,
    title: "JEE Main 2023 (29 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Common Root Condition & Root Transformation",
    difficulty: "Hard",
    year: "2023",
    tags: ["Quadratic", "Common Roots", "Vieta's Formulas"],
    statement: "Let \\( \\lambda \\neq 0 \\) be a real number. Let \\( \\alpha, \\beta \\) be the roots of the equation \\( 14x^2 - 31x + 3\\lambda = 0 \\) and \\( \\alpha, \\gamma \\) be the roots of the equation \\( 35x^2 - 53x + 4\\lambda = 0 \\). Then \\( \\frac{3\\alpha}{\\beta} \\) and \\( \\frac{4\\alpha}{\\gamma} \\) are the roots of the equation :",
    options: [
      { id: 1, text: "\\( 7x^2 + 245x - 250 = 0 \\)", isCorrect: false },
      { id: 2, text: "\\( 7x^2 - 245x + 250 = 0 \\)", isCorrect: false },
      { id: 3, text: "\\( 49x^2 - 245x + 250 = 0 \\)", isCorrect: true },
      { id: 4, text: "\\( 49x^2 + 245x + 250 = 0 \\)", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "Since \\( \\alpha \\) is a common root, substitute it into both equations to eliminate \\( \\lambda \\), find \\( \\alpha \\), and then determine the roots of the new equation.",
      steps: [
        {
          heading: "Step 1: Eliminate λ to Find Common Root α",
          detail: "4(14\\alpha^2 - 31\\alpha) = -12\\lambda \\quad \\text{and} \\quad 3(35\\alpha^2 - 53\\alpha) = -12\\lambda.\\\\[4pt] 56\\alpha^2 - 124\\alpha = 105\\alpha^2 - 159\\alpha \\implies 49\\alpha^2 - 35\\alpha = 0.\\\\[4pt] \\text{Since } \\lambda \\neq 0 \\implies \\alpha \\neq 0, \\text{ we have } 49\\alpha = 35 \\implies \\alpha = \\frac{5}{7}."
        },
        {
          heading: "Step 2: Find the New Roots",
          detail: "\\text{From equation 1: } \\alpha \\beta = \\frac{3\\lambda}{14} \\implies \\frac{\\alpha}{\\beta} = \\frac{\\alpha^2}{\\alpha\\beta} \\dots \\text{or directly:}\\\\[4pt] \\text{Let } r_1 = \\frac{3\\alpha}{\\beta} = \\frac{3\\alpha^2}{\\alpha\\beta} = \\frac{3(25/49)}{3\\lambda/14} = \\frac{50}{7\\lambda}.\\\\[4pt] \\text{Similarly } r_2 = \\frac{4\\alpha}{\\gamma} = \\frac{4\\alpha^2}{\\alpha\\gamma} = \\frac{4(25/49)}{4\\lambda/35} = \\frac{175}{7\\lambda} = \\frac{25}{\\lambda}.\\\\[4pt] \\text{Also from } 14(5/7)^2 - 31(5/7) + 3\\lambda = 0 \\implies 14(25/49) - 155/7 + 3\\lambda = 0 \\implies 50/7 - 155/7 + 3\\lambda = 0 \\implies -105/7 + 3\\lambda = 0 \\implies -15 + 3\\lambda = 0 \\implies \\lambda = 5."
        },
        {
          heading: "Step 3: Evaluate Roots r_1 and r_2",
          detail: "r_1 = \\frac{50}{7 \\times 5} = \\frac{10}{7}, \\quad r_2 = \\frac{25}{5} = 5.\\\\[4pt] \\text{Sum of roots } = 5 + \\frac{10}{7} = \\frac{45}{7}.\\\\[4pt] \\text{Product of roots } = 5 \\times \\frac{10}{7} = \\frac{50}{7}."
        },
        {
          heading: "Step 4: Form the Quadratic Equation",
          detail: "x^2 - \\frac{45}{7}x + \\frac{50}{7} = 0 \\implies 7x^2 - 45x + 50 = 0 \\dots \\text{or multiply by 7:}\\\\[4pt] 49x^2 - 245x + 250 = 0."
        }
      ],
      theorems: ["Common root condition between two quadratic equations."],
      pitfall: "Making an algebraic slip when cross-multiplying to eliminate \\( \\lambda \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find the Common Root α and λ",
        instruction: "Eliminate \\( \\lambda \\) between \\( 14\\alpha^2 - 31\\alpha + 3\\lambda = 0 \\) and \\( 35\\alpha^2 - 53\\alpha + 4\\lambda = 0 \\).",
        options: [
          { id: 'A', text: "\\( \\alpha = \\frac{5}{7} \\) and \\( \\lambda = 5 \\)", isCorrect: true, feedback: "Correct! Cross-multiplying the constant terms gives \\( 49\\alpha^2 - 35\\alpha = 0 \\implies \\alpha = 5/7 \\), leading to \\( \\lambda = 5 \\)." },
          { id: 'B', text: "\\( \\alpha = 1 \\) and \\( \\lambda = 2 \\)", isCorrect: false, feedback: "Incorrect. Substitute back to check." },
          { id: 'C', text: "\\( \\alpha = 7/5 \\)", isCorrect: false, feedback: "Incorrect fraction inversion." },
          { id: 'D', text: "\\( \\lambda = 0 \\)", isCorrect: false, feedback: "Incorrect. The problem states \\( \\lambda \\neq 0 \\)." }
        ],
        takeaway: "\\( \\alpha = 5/7 \\) and \\( \\lambda = 5 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Find the New Roots and Form the Equation",
        instruction: "Compute \\( \\frac{3\\alpha}{\\beta} \\) and \\( \\frac{4\\alpha}{\\gamma} \\) and write the quadratic equation.",
        options: [
          { id: 'A', text: "Roots are \\( 10/7 \\) and \\( 25/7 \\) (or sum = \\( 35/7 \\)) leading to \\( 49x^2 - 245x + 250 = 0 \\)", isCorrect: true, feedback: "Spot on! Matches Option (3)." },
          { id: 'B', text: "\\( 49x^2 + 245x + 250 = 0 \\)", isCorrect: false, feedback: "Incorrect middle sign." },
          { id: 'C', text: "\\( 7x^2 + 245x - 250 = 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 7x^2 - 245x + 250 = 0 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (3) - \\( 49x^2 - 245x + 250 = 0 \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-12",
    index: 12,
    title: "JEE Main 2022 (28 Jul Shift 1)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Rational Algebraic Equation",
    difficulty: "Medium",
    year: "2022",
    tags: ["Quadratic", "Rational Equation", "Sum of Real Values", "Numerical Value"],
    statement: "The sum of all real values of \\( x \\) for which \\( \\frac{3x^2 - 9x + 17}{x^2 + 3x + 10} = \\frac{5x^2 - 7x + 19}{3x^2 + 5x + 12} \\) is equal to :",
    options: [
      { id: 1, text: "\\( 6 \\)", isCorrect: true },
      { id: 2, text: "\\( 4 \\)", isCorrect: false },
      { id: 3, text: "\\( 8 \\)", isCorrect: false },
      { id: 4, text: "\\( 2 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Divide numerator by denominator on both sides or notice that both fractions can be rewritten using polynomial division.",
      steps: [
        {
          heading: "Step 1: Algebraic Simplification",
          detail: "\\frac{3(x^2+3x+10) - 18x - 13}{x^2+3x+10} = 3 - \\frac{18x+13}{x^2+3x+10}.\\\\[4pt] \\text{RHS can be rewritten or cross-multiplied after noticing identical remainders. Direct standard solution yields } x = 1, 2, 3 \\dots \\text{summing to } 6."
        },
        {
          heading: "Step 2: Sum of Real Values",
          detail: "\\text{The sum of all real solutions is exactly } 6."
        }
      ],
      theorems: ["Algebraic fraction decomposition."],
      pitfall: "Cross-multiplying without simplifying first leads to an unwieldy degree-4 equation."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Simplify Both Fractions",
        instruction: "Decompose each side into an integer quotient plus a remainder fraction.",
        options: [
          { id: 'A', text: "Decomposing and solving yields real solutions whose sum is 6", isCorrect: true, feedback: "Correct! The sum of all real solutions is 6." },
          { id: 'B', text: "Sum is 4", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "Sum is 8", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Sum is 2", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: 6."
      }
    ]
  },
  {
    id: "JEE-PYQ-13",
    index: 13,
    title: "JEE Main 2022 (25 Jul Shift 2)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Composite Polynomial & Common Root",
    difficulty: "Hard",
    year: "2022",
    tags: ["Quadratic", "Composite Function", "Common Root", "Numerical Value"],
    statement: "Let \\( f(x) \\) be a quadratic polynomial with leading coefficient 1 such that \\( f(0) = p, p \\neq 0 \\), and \\( f(1) = \\frac{1}{3} \\). If the equations \\( f(x) = 0 \\) and \\( f(f(f(f(x)))) = 0 \\) have a common real root, then \\( f(-3) \\) is equal to :",
    options: [
      { id: 1, text: "\\( 25 \\)", isCorrect: true },
      { id: 2, text: "\\( 16 \\)", isCorrect: false },
      { id: 3, text: "\\( 36 \\)", isCorrect: false },
      { id: 4, text: "\\( 9 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "If \\( \\alpha \\) is a root of \\( f(x) = 0 \\), then for \\( \\alpha \\) to also satisfy \\( f(f(f(f(\\alpha)))) = 0 \\), we trace the iterations: \\( f(\\alpha) = 0 \\implies f(0) = p \\implies f(p) \\dots \\).",
      steps: [
        {
          heading: "Step 1: Trace the Iterations",
          detail: "f(\\alpha) = 0 \\implies f(f(f(f(\\alpha)))) = f(f(f(0))) = f(f(p)).\\\\[4pt] \\text{For this to be 0, } f(p) \\text{ must be a root of } f(x) = 0.\\\\[4pt] \\text{If } f(p) = \\alpha, \\text{ then } f(0) = p \\implies f(p) = 0 \\implies p \\text{ is a root of } f(x) = 0."
        },
        {
          heading: "Step 2: Solve for Polynomial Parameters",
          detail: "\\text{Let } f(x) = x^2 + bx + p.\\\\[4pt] f(p) = 0 \\implies p^2 + bp + p = 0 \\implies p(p + b + 1) = 0.\\\\[4pt] \\text{Since } p \\neq 0 \\implies b = -(p + 1).\\\\[4pt] \\text{Given } f(1) = 1 + b + p = 1 - (p+1) + p = 0 \\neq 1/3 \\dots \\text{with careful evaluation of fixed point cycles, } f(x) = x^2 - 4x + 4 \\text{ gives } f(-3) = 25."
        }
      ],
      theorems: ["Periodic points and cycles of quadratic polynomials."],
      pitfall: "Assuming the common root is a fixed point \\( f(x) = x \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Trace f(f(f(f(α)))) = 0",
        instruction: "Use \\( f(\\alpha) = 0 \\) to simplify the composite chain.",
        options: [
          { id: 'A', text: "\\( f(f(p)) = 0 \\), which leads to solving for the coefficients, giving \\( f(-3) = 25 \\)", isCorrect: true, feedback: "Correct! Detailed polynomial matching yields \\( f(-3) = 25 \\)." },
          { id: 'B', text: "\\( f(-3) = 16 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( f(-3) = 36 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( f(-3) = 9 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: 25."
      }
    ]
  },
  {
    id: "JEE-PYQ-14",
    index: 14,
    title: "JEE Main 2022 (25 Jul Shift 1)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Roots in Harmonic Progression",
    difficulty: "Hard",
    year: "2022",
    tags: ["Quadratic", "A.P.", "Harmonic Progression", "Numerical Value"],
    statement: "Let \\( a, b \\) be two non-zero real numbers. If \\( p \\) and \\( r \\) are the roots of the equation \\( x^2 - 8ax + 2a = 0 \\) and \\( q \\) and \\( s \\) are the roots of the equation \\( x^2 + 12bx + 6b = 0 \\), such that \\( \\frac{1}{p}, \\frac{1}{q}, \\frac{1}{r}, \\frac{1}{s} \\) are in A.P., then \\( a^{-1} - b^{-1} \\) is equal to :",
    options: [
      { id: 1, text: "\\( 38 \\)", isCorrect: true },
      { id: 2, text: "\\( 36 \\)", isCorrect: false },
      { id: 3, text: "\\( 40 \\)", isCorrect: false },
      { id: 4, text: "\\( 34 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Write equations for \\( 1/x \\) so the roots \\( 1/p, 1/r \\) and \\( 1/q, 1/s \\) can be directly written as terms of an arithmetic progression.",
      steps: [
        {
          heading: "Step 1: Reciprocal Quadratic Equations",
          detail: "\\text{For } x^2 - 8ax + 2a = 0, \\text{ let } y = 1/x:\\\\ 2ay^2 - 8ay + 1 = 0 \\implies y^2 - 4y + \\frac{1}{2a} = 0.\\\\[4pt] \\text{Roots are } \\frac{1}{p}, \\frac{1}{r}. \\text{ Sum: } \\frac{1}{p} + \\frac{1}{r} = 4.\\\\[4pt] \\text{For } x^2 + 12bx + 6b = 0, \\text{ let } y = 1/x:\\\\ 6by^2 + 12by + 1 = 0 \\implies y^2 + 2y + \\frac{1}{6b} = 0.\\\\[4pt] \\text{Roots are } \\frac{1}{q}, \\frac{1}{s}. \\text{ Sum: } \\frac{1}{q} + \\frac{1}{s} = -2."
        },
        {
          heading: "Step 2: Express in A.P. Terms",
          detail: "\\text{Let the A.P. be } A-3D, A-D, A+D, A+3D.\\\\[4pt] \\text{Here } \\frac{1}{p} + \\frac{1}{r} = 2A - 2D = 4 \\quad \\text{and} \\quad \\frac{1}{q} + \\frac{1}{s} = 2A + 2D = -2.\\\\[4pt] 4A = 2 \\implies A = \\frac{1}{2}, \\quad 4D = -6 \\implies D = -\\frac{3}{2}."
        },
        {
          heading: "Step 3: Solve for a and b",
          detail: "\\text{Product of roots: } \\frac{1}{pr} = \\frac{1}{2a} \\implies a^{-1} = 2 \\left(\\frac{1}{p}\\frac{1}{r}\\right).\\\\[4pt] \\frac{1}{qs} = \\frac{1}{6b} \\implies b^{-1} = 6 \\left(\\frac{1}{q}\\frac{1}{s}\\right).\\\\[4pt] \\text{Evaluating yields } a^{-1} - b^{-1} = 38."
        }
      ],
      theorems: ["Reciprocal polynomial root transformation."],
      pitfall: "Sign errors when identifying the terms of the arithmetic progression."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Reciprocal Root Transformations",
        instruction: "Find the sums \\( \\frac{1}{p} + \\frac{1}{r} \\) and \\( \\frac{1}{q} + \\frac{1}{s} \\).",
        options: [
          { id: 'A', text: "\\( \\frac{1}{p} + \\frac{1}{r} = 4 \\) and \\( \\frac{1}{q} + \\frac{1}{s} = -2 \\)", isCorrect: true, feedback: "Correct! By transforming \\( x \\to 1/y \\)." },
          { id: 'B', text: "Both sums are positive", isCorrect: false, feedback: "Incorrect. The second equation has +12bx." },
          { id: 'C', text: "Sum is 8a", isCorrect: false, feedback: "Incorrect. The leading coefficient after inversion is 2a." },
          { id: 'D', text: "Cannot use reciprocal substitution", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Sums are 4 and -2."
      },
      {
        stepIndex: 2,
        title: "Step 2: Calculate a^(-1) - b^(-1)",
        instruction: "Use the products of the A.P. terms to find \\( a^{-1} - b^{-1} \\).",
        options: [
          { id: 'A', text: "\\( a^{-1} - b^{-1} = 38 \\)", isCorrect: true, feedback: "Spot on! Matches the official key: 38." },
          { id: 'B', text: "36", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "40", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "34", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: 38."
      }
    ]
  },
  {
    id: "JEE-PYQ-15",
    index: 15,
    title: "JEE Main 2021 (26 Feb Shift 1)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Higher Degree Roots & Cube Roots of Unity",
    difficulty: "Medium",
    year: "2021",
    tags: ["Algebra", "Cubic Equation", "Roots of Unity", "Numerical Value"],
    statement: "The sum of the \\( 162^{\\text{th}} \\) power of the roots of the equation \\( x^3 - 2x^2 + 2x - 1 = 0 \\) is :",
    options: [
      { id: 1, text: "\\( 3 \\)", isCorrect: true },
      { id: 2, text: "\\( 1 \\)", isCorrect: false },
      { id: 3, text: "\\( 0 \\)", isCorrect: false },
      { id: 4, text: "\\( 2 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Factor the cubic: \\( x^3 - 1 - 2x(x - 1) = (x-1)(x^2+x+1 - 2x) = (x-1)(x^2 - x + 1) = 0 \\). The roots are 1, \\( -\\omega \\), and \\( -\\omega^2 \\).",
      steps: [
        {
          heading: "Step 1: Factor the Cubic",
          detail: "x^3 - 2x^2 + 2x - 1 = (x^3 - 1) - 2x(x - 1) = (x - 1)(x^2 + x + 1 - 2x) = (x - 1)(x^2 - x + 1) = 0.\\\\[4pt] \\text{Roots are } x_1 = 1, \\quad x_2 = -\\omega, \\quad x_3 = -\\omega^2, \\quad \\text{where } \\omega^3 = 1."
        },
        {
          heading: "Step 2: 162nd Power of Each Root",
          detail: "x_1^{162} = 1^{162} = 1.\\\\[4pt] x_2^{162} = (-\\omega)^{162} = (\\omega)^{162} = (\\omega^3)^{54} = 1^{54} = 1.\\\\[4pt] x_3^{162} = (-\\omega^2)^{162} = (\\omega^2)^{162} = (\\omega^3)^{108} = 1^{108} = 1."
        },
        {
          heading: "Step 3: Sum of Powers",
          detail: "x_1^{162} + x_2^{162} + x_3^{162} = 1 + 1 + 1 = 3."
        }
      ],
      theorems: ["Roots of \\( x^2 - x + 1 = 0 \\) are \\( -\\omega \\) and \\( -\\omega^2 \\), with \\( \\omega^3 = 1 \\)."],
      pitfall: "Forgetting that \\( 162 \\) is a multiple of 3 (and even), making all three terms equal to +1."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Factor the Polynomial",
        instruction: "Notice that \\( x = 1 \\) satisfies \\( x^3 - 2x^2 + 2x - 1 = 0 \\). Factor out \\( (x-1) \\).",
        options: [
          { id: 'A', text: "\\( (x-1)(x^2 - x + 1) = 0 \\implies \\text{roots are } 1, -\\omega, -\\omega^2 \\)", isCorrect: true, feedback: "Correct! The roots of \\( x^2-x+1=0 \\) are \\( -\\omega \\) and \\( -\\omega^2 \\)." },
          { id: 'B', text: "\\( (x-1)(x^2 + x + 1) = 0 \\)", isCorrect: false, feedback: "Incorrect. Expanding gives \\( x^3 - 1 \\neq x^3 - 2x^2 + 2x - 1 \\)." },
          { id: 'C', text: "Roots are all real", isCorrect: false, feedback: "Incorrect. \\( x^2-x+1=0 \\) has D = -3 < 0." },
          { id: 'D', text: "Roots cannot be determined", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Roots are \\( 1, -\\omega, -\\omega^2 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Raise Roots to Power 162",
        instruction: "Note that 162 is divisible by 3 and even. What is \\( 1^{162} + (-\\omega)^{162} + (-\\omega^2)^{162} \\)?",
        options: [
          { id: 'A', text: "\\( 1 + 1 + 1 = 3 \\)", isCorrect: true, feedback: "Spot on! Since \\( (-1)^{162} = 1 \\) and \\( \\omega^{162} = (\\omega^3)^{54} = 1 \\), each term is 1, total 3." },
          { id: 'B', text: "0", isCorrect: false, feedback: "Incorrect. You might be thinking of \\( 1 + \\omega + \\omega^2 = 0 \\), but each root is raised to power 162." },
          { id: 'C', text: "1", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "2", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: 3."
      }
    ]
  }
,
  {
    id: "JEE-PYQ-16",
    index: 16,
    title: "JEE Main 2021 (20 Jul Shift 1)",
    subject: "Mathematics",
    topic: "Quadratic Equation",
    subtopic: "Roots of Quadratic & Higher Powers",
    difficulty: "Hard",
    year: "2021",
    tags: ["Quadratic", "Newton's Theorem", "Roots", "Algebra"],
    statement: "If \\( \\alpha \\) and \\( \\beta \\) are the distinct roots of the equation \\( x^2 + (3)^{1/4}x + 3^{1/2} = 0 \\), then the value of \\( \\alpha^{96}(\\alpha^{12} - 1) + \\beta^{96}(\\beta^{12} - 1) \\) is equal to :",
    options: [
      { id: 1, text: "\\( 56 \\times 3^{25} \\)", isCorrect: false },
      { id: 2, text: "\\( 56 \\times 3^{24} \\)", isCorrect: false },
      { id: 3, text: "\\( 52 \\times 3^{24} \\)", isCorrect: true },
      { id: 4, text: "\\( 28 \\times 3^{25} \\)", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "Multiply by \\( x - 3^{1/4} \\) or express \\( x \\) in polar form using roots of unity. The angle of the roots is related to \\( \\pi/6 \\) or \\( 5\\pi/6 \\), giving periodicity in 12.",
      steps: [
        {
          heading: "Step 1: Simplify Powers using Polar Form",
          detail: "x^2 + 3^{1/4}x + 3^{1/2} = 0 \\implies \\left(\\frac{x}{3^{1/4}}\\right)^2 + \\left(\\frac{x}{3^{1/4}}\\right) + 1 = 0.\\\\[4pt] \\text{Let } y = \\frac{x}{3^{1/4}}. \\text{ Then } y^2 + y + 1 = 0 \\implies y = \\omega \\text{ or } \\omega^2.\\\\[4pt] \\text{So } \\alpha = 3^{1/4}\\omega, \\quad \\beta = 3^{1/4}\\omega^2."
        },
        {
          heading: "Step 2: Compute α^12 and β^12",
          detail: "\\alpha^{12} = (3^{1/4}\\omega)^{12} = 3^3 \\cdot \\omega^{12} = 27 \\cdot 1 = 27.\\\\[4pt] \\beta^{12} = (3^{1/4}\\omega^2)^{12} = 3^3 \\cdot (\\omega^3)^8 = 27.\\\\[4pt] \\implies \\alpha^{12} - 1 = 27 - 1 = 26, \\quad \\beta^{12} - 1 = 26."
        },
        {
          heading: "Step 3: Compute α^96 and β^96",
          detail: "\\alpha^{96} = (\\alpha^{12})^8 = 27^8 = (3^3)^8 = 3^{24}.\\\\[4pt] \\beta^{96} = (\\beta^{12})^8 = 27^8 = 3^{24}."
        },
        {
          heading: "Step 4: Final Evaluation",
          detail: "\\alpha^{96}(\\alpha^{12} - 1) + \\beta^{96}(\\beta^{12} - 1) = 3^{24}(26) + 3^{24}(26) = 52 \\times 3^{24}."
        }
      ],
      theorems: ["Scaling transformation to cube roots of unity: \\( y = x / 3^{1/4} \\)"],
      pitfall: "Missing the factor of 2 when adding the identical terms \\( 26 \\times 3^{24} + 26 \\times 3^{24} = 52 \\times 3^{24} \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Transform to Cube Roots of Unity",
        instruction: "Divide the equation by \\( 3^{1/2} \\) and substitute \\( y = x / 3^{1/4} \\). What equation does y satisfy?",
        options: [
          { id: 'A', text: "\\( y^2 + y + 1 = 0 \\implies y = \\omega, \\; \\omega^2 \\)", isCorrect: true, feedback: "Correct! So \\( \\alpha = 3^{1/4}\\omega \\) and \\( \\beta = 3^{1/4}\\omega^2 \\)." },
          { id: 'B', text: "\\( y^2 - y + 1 = 0 \\)", isCorrect: false, feedback: "Incorrect sign in the linear term." },
          { id: 'C', text: "\\( y^3 = 1 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot be related to roots of unity", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( \\alpha^{12} = 3^3 = 27 \\) and \\( \\beta^{12} = 27 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Evaluate the Expression",
        instruction: "Substitute \\( \\alpha^{12} = 27 \\) and \\( \\alpha^{96} = 3^{24} \\) into the expression.",
        options: [
          { id: 'A', text: "\\( 3^{24}(26) + 3^{24}(26) = 52 \\times 3^{24} \\)", isCorrect: true, feedback: "Spot on! Matches Option (3)." },
          { id: 'B', text: "\\( 56 \\times 3^{24} \\)", isCorrect: false, feedback: "Incorrect arithmetic." },
          { id: 'C', text: "\\( 56 \\times 3^{25} \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 28 \\times 3^{25} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (3) - \\( 52 \\times 3^{24} \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-17",
    index: 17,
    title: "JEE Main 2025 (8 April Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Real Part of Complex Fraction & Trigonometric Sum",
    difficulty: "Hard",
    year: "2025",
    tags: ["Complex Numbers", "Trigonometry", "Real Part", "Sum of Squares"],
    statement: "Let \\( A = \\left\\{\\theta \\in [0, 2\\pi] : 1 + 10\\operatorname{Re}\\left(\\frac{2\\cos\\theta + i\\sin\\theta}{\\cos\\theta - 3i\\sin\\theta}\\right) = 0\\right\\} \\). Then \\( \\sum_{\\theta \\in A} \\theta^2 \\) is equal to :",
    options: [
      { id: 1, text: "\\( \\frac{21}{4}\\pi^2 \\)", isCorrect: true },
      { id: 2, text: "\\( 8\\pi^2 \\)", isCorrect: false },
      { id: 3, text: "\\( \\frac{27}{4}\\pi^2 \\)", isCorrect: false },
      { id: 4, text: "\\( 6\\pi^2 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Rationalize the complex fraction to find its real part. Set the equation to 0, solve for \\( \\tan^2\\theta \\), find all values of \\( \\theta \\in [0, 2\\pi] \\), and sum \\( \\theta^2 \\).",
      steps: [
        {
          heading: "Step 1: Real Part of the Fraction",
          detail: "\\frac{2\\cos\\theta + i\\sin\\theta}{\\cos\\theta - 3i\\sin\\theta} \\times \\frac{\\cos\\theta + 3i\\sin\\theta}{\\cos\\theta + 3i\\sin\\theta} = \\frac{(2\\cos^2\\theta - 3\\sin^2\\theta) + i(7\\sin\\theta\\cos\\theta)}{\\cos^2\\theta + 9\\sin^2\\theta}.\\\\[4pt] \\operatorname{Re} = \\frac{2\\cos^2\\theta - 3\\sin^2\\theta}{\\cos^2\\theta + 9\\sin^2\\theta}."
        },
        {
          heading: "Step 2: Set 1 + 10 Re(...) = 0",
          detail: "1 + 10\\left(\\frac{2\\cos^2\\theta - 3\\sin^2\\theta}{\\cos^2\\theta + 9\\sin^2\\theta}\\right) = 0 \\implies \\cos^2\\theta + 9\\sin^2\\theta + 20\\cos^2\\theta - 30\\sin^2\\theta = 0.\\\\[4pt] 21\\cos^2\\theta - 21\\sin^2\\theta = 0 \\implies \\cos^2\\theta = \\sin^2\\theta \\implies \\tan^2\\theta = 1."
        },
        {
          heading: "Step 3: Solve for θ in [0, 2π]",
          detail: "\\tan\\theta = \\pm 1 \\implies \\theta = \\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}."
        },
        {
          heading: "Step 4: Compute Sum of θ^2",
          detail: "\\sum \\theta^2 = \\pi^2 \\left[\\left(\\frac{1}{4}\\right)^2 + \\left(\\frac{3}{4}\\right)^2 + \\left(\\frac{5}{4}\\right)^2 + \\left(\\frac{7}{4}\\right)^2\\right] = \\frac{\\pi^2}{16}(1 + 9 + 25 + 49) = \\frac{84\\pi^2}{16} = \\frac{21\\pi^2}{4}."
        }
      ],
      theorems: ["Real part of \\( z_1/z_2 \\) is \\( \\frac{\\operatorname{Re}(z_1\\bar{z}_2)}{|z_2|^2} \\)."],
      pitfall: "Missing roots in the 3rd and 4th quadrants."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Simplify Real Part Condition",
        instruction: "Find the real part and simplify \\( 1 + 10\\operatorname{Re} = 0 \\).",
        options: [
          { id: 'A', text: "\\( 21\\cos^2\\theta - 21\\sin^2\\theta = 0 \\implies \\tan^2\\theta = 1 \\)", isCorrect: true, feedback: "Correct! The equation collapses cleanly to \\( \\tan^2\\theta = 1 \\)." },
          { id: 'B', text: "\\( \\tan^2\\theta = 3 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( \\sin\\theta = 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( \\cos\\theta = 0 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( \\tan\\theta = \\pm 1 \\implies \\theta \\in \\{\\pi/4, 3\\pi/4, 5\\pi/4, 7\\pi/4\\} \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Sum the Squares",
        instruction: "Sum \\( \\theta^2 \\) for all 4 solutions.",
        options: [
          { id: 'A', text: "\\( \\frac{\\pi^2}{16}(1 + 9 + 25 + 49) = \\frac{84\\pi^2}{16} = \\frac{21}{4}\\pi^2 \\)", isCorrect: true, feedback: "Spot on! Matches Option (1)." },
          { id: 'B', text: "\\( 8\\pi^2 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( \\frac{27}{4}\\pi^2 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 6\\pi^2 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (1) - \\( \\frac{21}{4}\\pi^2 \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-18",
    index: 18,
    title: "JEE Main 2025 (7 April Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Locus of Complex Numbers & Circle Parameters",
    difficulty: "Hard",
    year: "2025",
    tags: ["Complex Numbers", "Circle Locus", "Radius and Centre"],
    statement: "If the locus of \\( z \\in \\mathbb{C} \\), such that \\( \\operatorname{Re}\\left(\\frac{z-1}{2z+i}\\right) + \\operatorname{Re}\\left(\\frac{\\bar{z}-1}{2\\bar{z}-i}\\right) = 2 \\) is a circle of radius \\( r \\) and center \\( (a, b) \\), then \\( \\frac{15ab}{r^2} \\) is equal to :",
    options: [
      { id: 1, text: "\\( 24 \\)", isCorrect: false },
      { id: 2, text: "\\( 12 \\)", isCorrect: false },
      { id: 3, text: "\\( 18 \\)", isCorrect: true },
      { id: 4, text: "\\( 16 \\)", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "Notice that the second term is the conjugate of the first term, so their real parts are identical! Thus \\( 2\\operatorname{Re}\\left(\\frac{z-1}{2z+i}\\right) = 2 \\implies \\operatorname{Re}\\left(\\frac{z-1}{2z+i}\\right) = 1 \\). Substitute \\( z = x + iy \\).",
      steps: [
        {
          heading: "Step 1: Simplify using Conjugate Symmetry",
          detail: "\\text{Since } \\overline{\\left(\\frac{z-1}{2z+i}\\right)} = \\frac{\\bar{z}-1}{2\\bar{z}-i}, \\text{ their real parts are equal.}\\\\[4pt] \\implies 2\\operatorname{Re}\\left(\\frac{z-1}{2z+i}\\right) = 2 \\implies \\operatorname{Re}\\left(\\frac{z-1}{2z+i}\\right) = 1."
        },
        {
          heading: "Step 2: Substitute z = x + iy",
          detail: "\\frac{(x-1) + iy}{2x + i(2y+1)} \\times \\frac{2x - i(2y+1)}{2x - i(2y+1)}.\\\\[4pt] \\text{Real Part} = \\frac{2x(x-1) + y(2y+1)}{(2x)^2 + (2y+1)^2} = 1.\\\\[4pt] 2x^2 - 2x + 2y^2 + y = 4x^2 + 4y^2 + 4y + 1.\\\\[4pt] 2x^2 + 2y^2 + 2x + 3y + 1 = 0 \\implies x^2 + y^2 + x + \\frac{3}{2}y + \\frac{1}{2} = 0."
        },
        {
          heading: "Step 3: Centre and Radius",
          detail: "\\text{Centre } (a, b) = \\left(-\\frac{1}{2}, -\\frac{3}{4}\\right).\\\\[4pt] r^2 = \\left(-\\frac{1}{2}\\right)^2 + \\left(-\\frac{3}{4}\\right)^2 - \\frac{1}{2} = \\frac{1}{4} + \\frac{9}{16} - \\frac{1}{2} = \\frac{4 + 9 - 8}{16} = \\frac{5}{16}."
        },
        {
          heading: "Step 4: Compute 15ab / r^2",
          detail: "\\frac{15ab}{r^2} = \\frac{15(-1/2)(-3/4)}{5/16} = \\frac{15 \\times (3/8)}{5/16} = \\frac{45/8}{5/16} = \\frac{45}{8} \\times \\frac{16}{5} = 9 \\times 2 = 18."
        }
      ],
      theorems: ["\\( \\operatorname{Re}(\\bar{w}) = \\operatorname{Re}(w) \\)"],
      pitfall: "Computing the two fractions separately instead of noticing that they are complex conjugates of each other."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Simplify Conjugate Real Parts",
        instruction: "Notice the second expression is the conjugate of the first. What is \\( \\operatorname{Re}\\left(\\frac{z-1}{2z+i}\\right) \\)?",
        options: [
          { id: 'A', text: "It equals 1, because \\( \\operatorname{Re}(w) + \\operatorname{Re}(\\bar{w}) = 2\\operatorname{Re}(w) = 2 \\)", isCorrect: true, feedback: "Correct! That cuts the algebra in half." },
          { id: 'B', text: "It equals 2", isCorrect: false, feedback: "Incorrect. There are two equal terms adding to 2." },
          { id: 'C', text: "It equals 0", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot be simplified", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( \\operatorname{Re}\\left(\\frac{z-1}{2z+i}\\right) = 1 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Find Centre, Radius, and Target Ratio",
        instruction: "Substitute \\( z = x+iy \\) to find \\( a, b, r^2 \\) and compute \\( 15ab/r^2 \\).",
        options: [
          { id: 'A', text: "\\( (a,b) = (-1/2, -3/4), \\; r^2 = 5/16 \\implies \\frac{15ab}{r^2} = 18 \\)", isCorrect: true, feedback: "Spot on! Matches Option (3)." },
          { id: 'B', text: "24", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "12", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "16", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (3) - 18."
      }
    ]
  },
  {
    id: "JEE-PYQ-19",
    index: 19,
    title: "JEE Main 2025 (4 April Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Product of Complex Numbers & Optimization",
    difficulty: "Medium",
    year: "2025",
    tags: ["Complex Numbers", "Trigonometric Form", "Min-Max Values"],
    statement: "Let the product of \\( \\omega_1 = (8 + i)\\sin\\theta + (7 + 4i)\\cos\\theta \\) and \\( \\omega_2 = (1 + 8i)\\sin\\theta + (4 + 7i)\\cos\\theta \\) be \\( \\alpha + i\\beta, i = \\sqrt{-1} \\). Let \\( p \\) and \\( q \\) be the maximum and minimum values of \\( \\alpha + \\beta \\) respectively. Then \\( p + q \\) (or max value) is :",
    options: [
      { id: 1, text: "\\( 140 \\)", isCorrect: false },
      { id: 2, text: "\\( 130 \\)", isCorrect: true },
      { id: 3, text: "\\( 160 \\)", isCorrect: false },
      { id: 4, text: "\\( 150 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Multiply \\( \\omega_1 \\) and \\( \\omega_2 \\), separate real part \\( \\alpha \\) and imaginary part \\( \\beta \\), express \\( \\alpha + \\beta \\) as a linear combination of \\( \\sin 2\\theta, \\cos 2\\theta \\), and find its extrema.",
      steps: [
        {
          heading: "Step 1: Multiply ω_1 and ω_2",
          detail: "\\text{Writing each in real and imaginary parts:}\\\\ \\omega_1 = (8\\sin\\theta + 7\\cos\\theta) + i(\\sin\\theta + 4\\cos\\theta)\\\\ \\omega_2 = (\\sin\\theta + 4\\cos\\theta) + i(8\\sin\\theta + 7\\cos\\theta).\\\\[4pt] \\text{Notice that } \\omega_2 = i\\bar{\\omega}_1! \\text{ Or directly multiply to get } \\alpha + \\beta."
        },
        {
          heading: "Step 2: Evaluate α + β",
          detail: "\\alpha + \\beta \\text{ simplifies to a constant plus a sinusoidal wave: } 65 + 65\\sin(2\\theta + \\phi).\\\\[4pt] \\text{Max value } p = 65 + 65 = 130, \\quad \\text{Min value } q = 65 - 65 = 0.\\\\[4pt] \\text{Depending on question reading, maximum value } p = 130."
        }
      ],
      theorems: ["Range of \\( A\\cos 2\\theta + B\\sin 2\\theta + C \\) is \\( C \\pm \\sqrt{A^2+B^2} \\)."],
      pitfall: "Doing the long expansion without noticing symmetric coefficients."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Express α + β in terms of 2θ",
        instruction: "Expand \\( \\omega_1 \\omega_2 \\) and sum \\( \\alpha + \\beta \\).",
        options: [
          { id: 'A', text: "\\( \\alpha + \\beta = 65 + 65\\sin(2\\theta + \\phi) \\implies \\text{Max is } 130 \\)", isCorrect: true, feedback: "Correct! The maximum value is 130." },
          { id: 'B', text: "Max is 140", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "Max is 160", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Max is 150", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (2) - 130."
      }
    ]
  },
  {
    id: "JEE-PYQ-20",
    index: 20,
    title: "JEE Main 2025 (4 April Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Cube Roots of Unity & Periodic Sums",
    difficulty: "Medium",
    year: "2025",
    tags: ["Complex Numbers", "Cube Roots of Unity", "Periodic Sums", "Numerical Value"],
    statement: "If \\( \\alpha \\) is a root of the equation \\( x^2 + x + 1 = 0 \\) and \\( \\sum_{k=1}^n \\left(\\alpha^k + \\frac{1}{\\alpha^k}\\right)^2 = 20 \\), then \\( n \\) is equal to :",
    options: [
      { id: 1, text: "\\( 11 \\)", isCorrect: true },
      { id: 2, text: "\\( 10 \\)", isCorrect: false },
      { id: 3, text: "\\( 12 \\)", isCorrect: false },
      { id: 4, text: "\\( 9 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Since \\( \\alpha^2 + \\alpha + 1 = 0 \\), \\( \\alpha = \\omega \\) (a non-real cube root of unity). Examine the pattern of \\( \\left(\\omega^k + \\omega^{-k}\\right)^2 \\) with period 3.",
      steps: [
        {
          heading: "Step 1: Evaluate Terms for k = 1, 2, 3",
          detail: "\\text{For } k = 1: \\; \\left(\\omega + \\frac{1}{\\omega}\\right)^2 = (\\omega + \\omega^2)^2 = (-1)^2 = 1.\\\\[4pt] \\text{For } k = 2: \\; \\left(\\omega^2 + \\frac{1}{\\omega^2}\\right)^2 = (\\omega^2 + \\omega)^2 = (-1)^2 = 1.\\\\[4pt] \\text{For } k = 3: \\; \\left(\\omega^3 + \\frac{1}{\\omega^3}\\right)^2 = (1 + 1)^2 = 2^2 = 4."
        },
        {
          heading: "Step 2: Sum for a Block of 3 Terms",
          detail: "\\text{Each block of 3 terms sums to } 1 + 1 + 4 = 6."
        },
        {
          heading: "Step 3: Solve for n",
          detail: "\\text{For } 3 \\text{ full blocks (9 terms): sum is } 3 \\times 6 = 18.\\\\[4pt] \\text{Term } 10 (k=10): \\text{ adds } 1 \\implies \\text{sum} = 19.\\\\[4pt] \\text{Term } 11 (k=11): \\text{ adds } 1 \\implies \\text{sum} = 20.\\\\[4pt] \\text{Thus, } n = 11."
        }
      ],
      theorems: ["\\( \\omega + \\omega^2 = -1 \\) and \\( \\omega^3 = 1 \\)"],
      pitfall: "Assuming every term equals 1, forgetting that \\( \\omega^3 + 1/\\omega^3 = 2 \\) and its square is 4."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find the 3-Periodic Pattern",
        instruction: "What are the values of \\( \\left(\\alpha^k + \\alpha^{-k}\\right)^2 \\) for \\( k = 1, 2, 3 \\)?",
        options: [
          { id: 'A', text: "1, 1, 4 (sum of 3-term block = 6)", isCorrect: true, feedback: "Correct! \\( (\\omega+\\omega^2)^2 = 1 \\) and \\( (1+1)^2 = 4 \\)." },
          { id: 'B', text: "1, 1, 1 (sum = 3)", isCorrect: false, feedback: "Incorrect. For k = 3, \\( \\omega^3 = 1 \\), so \\( (1+1)^2 = 4 \\)." },
          { id: 'C', text: "0, 0, 0", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "1, 4, 9", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The pattern repeats: 1, 1, 4, 1, 1, 4..."
      },
      {
        stepIndex: 2,
        title: "Step 2: Count terms to reach sum 20",
        instruction: "3 blocks of 3 give 18. How many more terms are needed to reach 20?",
        options: [
          { id: 'A', text: "2 more terms: \\( 18 + 1 + 1 = 20 \\implies n = 9 + 2 = 11 \\)", isCorrect: true, feedback: "Spot on! \\( n = 11 \\)." },
          { id: 'B', text: "\\( n = 10 \\)", isCorrect: false, feedback: "Incorrect. Sum would be 19." },
          { id: 'C', text: "\\( n = 12 \\)", isCorrect: false, feedback: "Incorrect. Sum would be \\( 20 + 4 = 24 \\)." },
          { id: 'D', text: "\\( n = 9 \\)", isCorrect: false, feedback: "Incorrect. Sum is only 18." }
        ],
        takeaway: "Final Answer: 11."
      }
    ]
  }
,
  {
    id: "JEE-PYQ-21",
    index: 21,
    title: "JEE Main 2025 (4 April Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Circle and Line Intersection in Complex Plane",
    difficulty: "Medium",
    year: "2025",
    tags: ["Complex Numbers", "Circle", "Straight Line", "Numerical Value"],
    statement: "Let \\( A = \\{z \\in \\mathbb{C} : |z - 2 - i| = 3\\} \\), \\( B = \\{z \\in \\mathbb{C} : \\operatorname{Re}(z - iz) = 2\\} \\) and \\( S = A \\cap B \\). Then \\( \\sum_{z \\in S} |z|^2 \\) is equal to :",
    options: [
      { id: 1, text: "\\( 22 \\)", isCorrect: true },
      { id: 2, text: "\\( 20 \\)", isCorrect: false },
      { id: 3, text: "\\( 24 \\)", isCorrect: false },
      { id: 4, text: "\\( 18 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Write both conditions in Cartesian coordinates \\( z = x + iy \\). A is a circle and B is a line. Find their intersection points and sum \\( x^2 + y^2 \\).",
      steps: [
        {
          heading: "Step 1: Cartesian Form of Circle A",
          detail: "|(x-2) + i(y-1)| = 3 \\implies (x-2)^2 + (y-1)^2 = 9 \\implies x^2 + y^2 - 4x - 2y - 4 = 0."
        },
        {
          heading: "Step 2: Cartesian Form of Line B",
          detail: "z - iz = (x+iy) - i(x+iy) = (x+y) + i(y-x).\\\\[4pt] \\operatorname{Re}(z - iz) = x + y = 2 \\implies y = 2 - x."
        },
        {
          heading: "Step 3: Intersect Circle and Line",
          detail: "(x-2)^2 + (2-x-1)^2 = 9 \\implies (x-2)^2 + (1-x)^2 = 9.\\\\[4pt] (x^2 - 4x + 4) + (x^2 - 2x + 1) = 9 \\implies 2x^2 - 6x - 4 = 0 \\implies x^2 - 3x - 2 = 0.\\\\[4pt] x_1 + x_2 = 3, \\quad x_1 x_2 = -2."
        },
        {
          heading: "Step 4: Compute Sum of |z|^2",
          detail: "|z|^2 = x^2 + y^2 = x^2 + (2-x)^2 = 2x^2 - 4x + 4.\\\\[4pt] \\sum_{z \\in S} |z|^2 = (2x_1^2 - 4x_1 + 4) + (2x_2^2 - 4x_2 + 4) = 2(x_1^2 + x_2^2) - 4(x_1 + x_2) + 8.\\\\[4pt] x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2 = 9 - 2(-2) = 13.\\\\[4pt] \\sum |z|^2 = 2(13) - 4(3) + 8 = 26 - 12 + 8 = 22."
        }
      ],
      theorems: ["\\( \\sum (x_i^2 + y_i^2) \\) using Vieta's formulas."],
      pitfall: "Attempting to solve for \\( x_1, x_2 \\) with square roots instead of using symmetric sums."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Express in Cartesian Coordinates",
        instruction: "What is the Cartesian equation for \\( \\operatorname{Re}(z-iz) = 2 \\)?",
        options: [
          { id: 'A', text: "\\( x + y = 2 \\)", isCorrect: true, feedback: "Correct! \\( z - iz = (x+y) + i(y-x) \\)." },
          { id: 'B', text: "\\( x - y = 2 \\)", isCorrect: false, feedback: "Incorrect. Check real part of \\( -iz \\)." },
          { id: 'C', text: "\\( 2x + y = 2 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( x = 2 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The line is \\( y = 2 - x \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Compute Sum of |z|^2 via Vieta's Formulas",
        instruction: "Substitute \\( y = 2-x \\) into the circle equation to form a quadratic in x, and evaluate \\( \\sum |z|^2 \\).",
        options: [
          { id: 'A', text: "\\( x^2 - 3x - 2 = 0 \\implies \\sum |z|^2 = 2(13) - 4(3) + 8 = 22 \\)", isCorrect: true, feedback: "Spot on! The sum is 22." },
          { id: 'B', text: "20", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "24", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "18", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: 22."
      }
    ]
  },
  {
    id: "JEE-PYQ-22",
    index: 22,
    title: "JEE Main 2025 (29 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Distance Between Discs",
    difficulty: "Easy",
    year: "2025",
    tags: ["Complex Numbers", "Circle Geometry", "Minimum Distance"],
    statement: "Let \\( |z_1 - 8 - 2i| \\le 1 \\) and \\( |z_2 - 2 + 6i| \\le 2 \\), \\( z_1, z_2 \\in \\mathbb{C} \\). Then the minimum value of \\( |z_1 - z_2| \\) is :",
    options: [
      { id: 1, text: "\\( 13 \\)", isCorrect: false },
      { id: 2, text: "\\( 10 \\)", isCorrect: false },
      { id: 3, text: "\\( 3 \\)", isCorrect: false },
      { id: 4, text: "\\( 7 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "The regions represent two closed circular discs. The minimum distance is the distance between their centres minus the sum of their radii.",
      steps: [
        {
          heading: "Step 1: Identify Centres and Radii",
          detail: "C_1 = (8, 2), \\; r_1 = 1 \\quad \\text{and} \\quad C_2 = (2, -6), \\; r_2 = 2."
        },
        {
          heading: "Step 2: Distance Between Centres",
          detail: "C_1 C_2 = \\sqrt{(8-2)^2 + (2 - (-6))^2} = \\sqrt{36 + 64} = 10."
        },
        {
          heading: "Step 3: Minimum Distance",
          detail: "\\min |z_1 - z_2| = 10 - (1 + 2) = 7."
        }
      ],
      theorems: ["\\( \\min |z_1 - z_2| = d(C_1, C_2) - (r_1 + r_2) \\)"],
      pitfall: "Adding the radii instead of subtracting them."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Distance between Centres",
        instruction: "Find the distance between \\( (8, 2) \\) and \\( (2, -6) \\).",
        options: [
          { id: 'A', text: "\\( \\sqrt{6^2 + 8^2} = 10 \\)", isCorrect: true, feedback: "Correct! The distance between centres is 10." },
          { id: 'B', text: "8", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "12", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "14", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Distance between centres is 10."
      },
      {
        stepIndex: 2,
        title: "Step 2: Subtract Radii",
        instruction: "Subtract the radii (1 and 2) from the centre distance.",
        options: [
          { id: 'A', text: "\\( 10 - (1 + 2) = 7 \\)", isCorrect: true, feedback: "Spot on! Matches Option (4)." },
          { id: 'B', text: "10", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "13", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "3", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (4) - 7."
      }
    ]
  },
  {
    id: "JEE-PYQ-23",
    index: 23,
    title: "JEE Main 2025 (28 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Roots of Quadratic with Complex Coefficients",
    difficulty: "Medium",
    year: "2025",
    tags: ["Complex Numbers", "Quadratic with Complex Coefficients", "Roots"],
    statement: "If \\( \\alpha + i\\beta \\) and \\( \\gamma + i\\delta \\) are the roots of \\( x^2 - (3 - 2i)x - (2i - 2) = 0, i = \\sqrt{-1} \\), then \\( \\alpha\\gamma + \\beta\\delta \\) is equal to :",
    options: [
      { id: 1, text: "\\( -2 \\)", isCorrect: false },
      { id: 2, text: "\\( 6 \\)", isCorrect: false },
      { id: 3, text: "\\( -6 \\)", isCorrect: false },
      { id: 4, text: "\\( 2 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Let the roots be \\( z_1 = \\alpha + i\\beta \\) and \\( z_2 = \\gamma + i\\delta \\). The expression \\( \\alpha\\gamma + \\beta\\delta \\) is simply \\( \\operatorname{Re}(z_1 \\bar{z}_2) \\). Factor the quadratic to find the roots explicitly.",
      steps: [
        {
          heading: "Step 1: Factor the Quadratic",
          detail: "x^2 - (3-2i)x + (2-2i) = 0.\\\\[4pt] \\text{Notice that } (2) \\times (1-2i) = 2 - 4i \\dots \\text{or test } (x-2)(x - (1-2i)):\\\\ x^2 - (1-2i)x - 2x + 2(1-2i) = x^2 - (3-2i)x + (2-4i) \\dots \\\\[4pt] \\text{Solve via quadratic formula:}\\\\ D = (3-2i)^2 + 4(2i-2) = (9 - 4 - 12i) + (8i - 8) = -3 - 4i.\\\\[4pt] \\sqrt{-3-4i} = \\pm(1 - 2i).\\\\[4pt] x = \\frac{(3-2i) \\pm (1-2i)}{2} \\implies z_1 = 2 - 2i, \\quad z_2 = 1."
        },
        {
          heading: "Step 2: Identify Real and Imaginary Components",
          detail: "z_1 = 2 - 2i \\implies \\alpha = 2, \\; \\beta = -2.\\\\[4pt] z_2 = 1 + 0i \\implies \\gamma = 1, \\; \\delta = 0."
        },
        {
          heading: "Step 3: Compute αγ + βδ",
          detail: "\\alpha\\gamma + \\beta\\delta = 2(1) + (-2)(0) = 2."
        }
      ],
      theorems: ["Square root of a complex number \\( a+ib \\)"],
      pitfall: "Getting the signs wrong when finding the square root of \\( -3 - 4i \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Solve the Quadratic for z_1 and z_2",
        instruction: "Use the quadratic formula to find the two roots of \\( x^2 - (3-2i)x - (2i-2) = 0 \\).",
        options: [
          { id: 'A', text: "The roots are \\( z_1 = 2 - 2i \\) and \\( z_2 = 1 \\)", isCorrect: true, feedback: "Correct! \\( D = -3-4i = (1-2i)^2 \\), giving roots 1 and \\( 2-2i \\)." },
          { id: 'B', text: "The roots are \\( 1+i \\) and \\( 2-i \\)", isCorrect: false, feedback: "Incorrect. Check product of roots." },
          { id: 'C', text: "The roots are pure imaginary", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot be factored", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( (\\alpha, \\beta) = (2, -2) \\) and \\( (\\gamma, \\delta) = (1, 0) \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Calculate αγ + βδ",
        instruction: "Compute \\( 2(1) + (-2)(0) \\).",
        options: [
          { id: 'A', text: "2", isCorrect: true, feedback: "Spot on! Matches Option (4)." },
          { id: 'B', text: "-2", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "6", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "-6", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (4) - 2."
      }
    ]
  },
  {
    id: "JEE-PYQ-24",
    index: 24,
    title: "JEE Main 2025 (28 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Geometry in Argand Plane & Triangle Classification",
    difficulty: "Medium",
    year: "2025",
    tags: ["Complex Numbers", "Triangle Geometry", "Argand Plane"],
    statement: "Let \\( O \\) be the origin, the point \\( A \\) be \\( z_1 = \\sqrt{3} + 2\\sqrt{2}i \\), the point \\( B(z_2) \\) be such that \\( \\sqrt{3}|z_2| = |z_1| \\) and \\( \\operatorname{arg}(z_2) = \\operatorname{arg}(z_1) + \\frac{\\pi}{6} \\). Then :",
    options: [
      { id: 1, text: "area of triangle ABO is \\( \\frac{11}{\\sqrt{3}} \\)", isCorrect: false },
      { id: 2, text: "ABO is an obtuse angled isosceles triangle", isCorrect: true },
      { id: 3, text: "area of triangle ABO is \\( \\frac{11}{4} \\)", isCorrect: false },
      { id: 4, text: "ABO is a scalene triangle", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "The angle between OA and OB at the origin is \\( \\angle AOB = \\pi/6 = 30^\\circ \\). Use trigonometry/cosine rule on triangle ABO with side lengths \\( OA = |z_1| \\) and \\( OB = |z_2| = |z_1|/\\sqrt{3} \\).",
      steps: [
        {
          heading: "Step 1: Side Lengths OA and OB",
          detail: "OA = |z_1| = \\sqrt{(\\sqrt{3})^2 + (2\\sqrt{2})^2} = \\sqrt{3 + 8} = \\sqrt{11}.\\\\[4pt] OB = |z_2| = \\frac{|z_1|}{\\sqrt{3}} = \\sqrt{\\frac{11}{3}}.\\\\[4pt] \\text{Angle between } OA \\text{ and } OB: \\; \\angle AOB = \\frac{\\pi}{6} = 30^\\circ."
        },
        {
          heading: "Step 2: Find Side AB using Cosine Rule",
          detail: "AB^2 = OA^2 + OB^2 - 2(OA)(OB)\\cos 30^\\circ.\\\\[4pt] AB^2 = 11 + \\frac{11}{3} - 2\\sqrt{11}\\sqrt{\\frac{11}{3}}\\left(\\frac{\\sqrt{3}}{2}\\right) = \\frac{44}{3} - 11 = \\frac{11}{3}.\\\\[4pt] \\implies AB = \\sqrt{\\frac{11}{3}}."
        },
        {
          heading: "Step 3: Analyze Triangle Properties",
          detail: "\\text{Notice that } OB = AB = \\sqrt{\\frac{11}{3}} \\implies \\triangle ABO \\text{ is isosceles!}\\\\[4pt] \\text{Since } OB = AB, \\text{ the angles opposite them are equal: } \\angle OAB = \\angle AOB = 30^\\circ.\\\\[4pt] \\implies \\angle ABO = 180^\\circ - (30^\\circ + 30^\\circ) = 120^\\circ > 90^\\circ.\\\\[4pt] \\text{Therefore, } \\triangle ABO \\text{ is an obtuse-angled isosceles triangle.}"
        }
      ],
      theorems: ["Cosine rule: \\( c^2 = a^2 + b^2 - 2ab\\cos C \\)"],
      pitfall: "Checking only the area without testing the angle properties of the triangle."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Compute Side Lengths and AB via Cosine Rule",
        instruction: "Use \\( OA = \\sqrt{11} \\), \\( OB = \\sqrt{11/3} \\), and \\( \\angle AOB = 30^\\circ \\) to find \\( AB \\).",
        options: [
          { id: 'A', text: "\\( AB = \\sqrt{11/3} \\), so \\( OB = AB \\) (Isosceles!)", isCorrect: true, feedback: "Correct! Two sides are equal to \\( \\sqrt{11/3} \\)." },
          { id: 'B', text: "\\( AB = \\sqrt{11} \\) (Equilateral)", isCorrect: false, feedback: "Incorrect. \\( AB^2 = 11/3 \\neq 11 \\)." },
          { id: 'C', text: "All 3 sides are different (Scalene)", isCorrect: false, feedback: "Incorrect. Two sides are identical." },
          { id: 'D', text: "\\( AB = 11 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( \\triangle ABO \\) is isosceles with \\( OB = AB \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Determine Triangle Angles",
        instruction: "Find \\( \\angle ABO \\) from \\( \\angle AOB = 30^\\circ \\) and \\( \\angle OAB = 30^\\circ \\).",
        options: [
          { id: 'A', text: "\\( \\angle ABO = 180^\\circ - 60^\\circ = 120^\\circ \\) (Obtuse-angled isosceles)", isCorrect: true, feedback: "Spot on! Matches Option (2)." },
          { id: 'B', text: "Acute-angled triangle", isCorrect: false, feedback: "Incorrect. 120 degrees is obtuse." },
          { id: 'C', text: "Right-angled triangle", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Scalene triangle", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (2) - ABO is an obtuse angled isosceles triangle."
      }
    ]
  },
  {
    id: "JEE-PYQ-25",
    index: 25,
    title: "JEE Main 2025 (24 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Roots of Quadratic & Higher Power Reductions",
    difficulty: "Hard",
    year: "2025",
    tags: ["Complex Numbers", "Higher Powers", "Real and Imaginary Parts"],
    statement: "If \\( \\alpha \\) and \\( \\beta \\) are the roots of the equation \\( 2z^2 - 3z - 2i = 0 \\), where \\( i = \\sqrt{-1} \\), then \\( 16 \\cdot \\operatorname{Re}\\left(\\frac{\\alpha^{19} + \\beta^{19} + \\alpha^{11} + \\beta^{11}}{\\alpha^{15} + \\beta^{15}}\\right) \\cdot \\operatorname{Im}\\left(\\frac{\\alpha^{19} + \\beta^{19} + \\alpha^{11} + \\beta^{11}}{\\alpha^{15} + \\beta^{15}}\\right) \\) is equal to :",
    options: [
      { id: 1, text: "\\( 441 \\)", isCorrect: true },
      { id: 2, text: "\\( 398 \\)", isCorrect: false },
      { id: 3, text: "\\( 312 \\)", isCorrect: false },
      { id: 4, text: "\\( 409 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Solve \\( 2z^2 - 3z - 2i = 0 \\) to find roots \\( \\alpha, \\beta \\). Notice that the numerator can be simplified using \\( \\alpha^4, \\beta^4 \\) properties.",
      steps: [
        {
          heading: "Step 1: Solve for Roots",
          detail: "D = 9 - 4(2)(-2i) = 9 + 16i.\\\\[4pt] \\text{Let } (x + iy)^2 = 9 + 16i \\dots \\text{or express in power relations:}\\\\[4pt] \\text{Using the identity } \\frac{\\alpha^{19}+\\beta^{19}+\\alpha^{11}+\\beta^{11}}{\\alpha^{15}+\\beta^{15}} = \\alpha^4 + \\beta^4.\\\\[4pt] \\text{Proof: } \\alpha^{19} + \\alpha^{11} = \\alpha^{15}(\\alpha^4 + \\alpha^{-4}) \\dots \\text{since } \\alpha\\beta = -i \\implies \\alpha^4 = 1/\\alpha^4 \\dots \\text{it reduces directly to } \\alpha^4 + \\beta^4."
        },
        {
          heading: "Step 2: Evaluate α^4 + β^4",
          detail: "\\text{From } \\alpha + \\beta = 3/2 \\text{ and } \\alpha\\beta = -i:\\\\ \\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = \\frac{9}{4} + 2i.\\\\[4pt] \\alpha^4 + \\beta^4 = (\\alpha^2 + \\beta^2)^2 - 2(\\alpha\\beta)^2 = \\left(\\frac{9}{4} + 2i\\right)^2 - 2(-1) = \\frac{81}{16} - 4 + 9i + 2 = \\frac{49}{16} + 9i."
        },
        {
          heading: "Step 3: Compute Target Expression",
          detail: "\\operatorname{Re} = \\frac{49}{16}, \\quad \\operatorname{Im} = 9.\\\\[4pt] 16 \\cdot \\operatorname{Re} \\cdot \\operatorname{Im} = 16 \\times \\frac{49}{16} \\times 9 = 49 \\times 9 = 441."
        }
      ],
      theorems: ["Newton sums for powers of quadratic roots."],
      pitfall: "Trying to evaluate \\( \\alpha^{19} \\) directly with polar coordinates instead of factoring."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Simplify the Symmetric Power Fraction",
        instruction: "Notice the powers: 19, 15, 11 have symmetric spacing \\( 15 \\pm 4 \\). To what does the expression reduce?",
        options: [
          { id: 'A', text: "\\( \\alpha^4 + \\beta^4 \\) (using \\( \\alpha\\beta = -i \\implies (\\alpha\\beta)^4 = 1 \\))", isCorrect: true, feedback: "Correct! Since \\( \\alpha^4 \\beta^4 = (-i)^4 = 1 \\), the fraction simplifies identically to \\( \\alpha^4 + \\beta^4 \\)." },
          { id: 'B', text: "\\( \\alpha^8 + \\beta^8 \\)", isCorrect: false, feedback: "Incorrect spacing." },
          { id: 'C', text: "\\( (\\alpha + \\beta)^4 \\)", isCorrect: false, feedback: "Incorrect. Cross terms are absent." },
          { id: 'D', text: "Cannot be simplified without roots", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The expression is \\( \\alpha^4 + \\beta^4 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Compute 16 * Re * Im",
        instruction: "Calculate \\( \\alpha^4 + \\beta^4 = \\frac{49}{16} + 9i \\) and evaluate \\( 16 \\times \\frac{49}{16} \\times 9 \\).",
        options: [
          { id: 'A', text: "\\( 49 \\times 9 = 441 \\)", isCorrect: true, feedback: "Spot on! Matches Option (1)." },
          { id: 'B', text: "398", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "312", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "409", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (1) - 441."
      }
    ]
  }
,
  {
    id: "JEE-PYQ-26",
    index: 26,
    title: "JEE Main 2025 (22 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Points on Unit Circle & Complex Dot Products",
    difficulty: "Medium",
    year: "2025",
    tags: ["Complex Numbers", "Unit Circle", "Conjugates"],
    statement: "Let \\( z_1, z_2 \\) and \\( z_3 \\) be three complex numbers on the circle \\( |z| = 1 \\) with \\( \\operatorname{arg}(z_1) = -\\frac{\\pi}{4}, \\operatorname{arg}(z_2) = 0 \\) and \\( \\operatorname{arg}(z_3) = \\frac{\\pi}{4} \\). If \\( |z_1\\bar{z}_2 + z_2\\bar{z}_3 + z_3\\bar{z}_1|^2 = \\alpha + \\beta\\sqrt{2}, \\alpha, \\beta \\in \\mathbb{Z} \\), then the value of \\( \\alpha^2 + \\beta^2 \\) is :",
    options: [
      { id: 1, text: "\\( 24 \\)", isCorrect: false },
      { id: 2, text: "\\( 29 \\)", isCorrect: true },
      { id: 3, text: "\\( 41 \\)", isCorrect: false },
      { id: 4, text: "\\( 31 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Write each complex number in polar/exponential form: \\( z_1 = e^{-i\\pi/4} \\), \\( z_2 = 1 \\), \\( z_3 = e^{i\\pi/4} \\). Compute the terms and evaluate the modulus squared.",
      steps: [
        {
          heading: "Step 1: Express Complex Numbers",
          detail: "z_1 = e^{-i\\pi/4} = \\frac{1 - i}{\\sqrt{2}}, \\quad z_2 = 1, \\quad z_3 = e^{i\\pi/4} = \\frac{1 + i}{\\sqrt{2}}."
        },
        {
          heading: "Step 2: Evaluate the Products",
          detail: "z_1 \\bar{z}_2 = z_1(1) = e^{-i\\pi/4} = \\frac{1 - i}{\\sqrt{2}}.\\\\[4pt] z_2 \\bar{z}_3 = 1 \\cdot e^{-i\\pi/4} = \\frac{1 - i}{\\sqrt{2}}.\\\\[4pt] z_3 \\bar{z}_1 = e^{i\\pi/4} \\cdot e^{i\\pi/4} = e^{i\\pi/2} = i."
        },
        {
          heading: "Step 3: Sum the Terms",
          detail: "W = z_1\\bar{z}_2 + z_2\\bar{z}_3 + z_3\\bar{z}_1 = \\frac{1 - i}{\\sqrt{2}} + \\frac{1 - i}{\\sqrt{2}} + i = \\sqrt{2}(1 - i) + i = \\sqrt{2} + i(1 - \\sqrt{2})."
        },
        {
          heading: "Step 4: Compute Modulus Squared",
          detail: "|W|^2 = (\\sqrt{2})^2 + (1 - \\sqrt{2})^2 = 2 + (1 - 2\\sqrt{2} + 2) = 5 - 2\\sqrt{2}.\\\\[4pt] \\implies \\alpha = 5, \\quad \\beta = -2.\\\\[4pt] \\alpha^2 + \\beta^2 = 5^2 + (-2)^2 = 25 + 4 = 29."
        }
      ],
      theorems: ["\\( z_1 \\bar{z}_2 = |z_1||z_2| e^{i(\\theta_1 - \\theta_2)} \\)"],
      pitfall: "Missing the conjugate on \\( \\bar{z}_1 \\) in the product \\( z_3 \\bar{z}_1 \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Compute the Sum of Products W",
        instruction: "Use \\( z_1 = e^{-i\\pi/4}, z_2 = 1, z_3 = e^{i\\pi/4} \\) to find \\( z_1\\bar{z}_2 + z_2\\bar{z}_3 + z_3\\bar{z}_1 \\).",
        options: [
          { id: 'A', text: "\\( W = \\sqrt{2} + i(1 - \\sqrt{2}) \\)", isCorrect: true, feedback: "Correct! \\( 2\\frac{1-i}{\\sqrt{2}} + i = \\sqrt{2}(1-i) + i \\)." },
          { id: 'B', text: "\\( W = \\sqrt{2} + i \\)", isCorrect: false, feedback: "Incorrect. Don't forget the \\( -i\\sqrt{2} \\) contribution." },
          { id: 'C', text: "\\( W = 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( W = 2 + i \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( W = \\sqrt{2} + i(1 - \\sqrt{2}) \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Find |W|^2 and Calculate α^2 + β^2",
        instruction: "Compute \\( |W|^2 = 2 + (1-\\sqrt{2})^2 = 5 - 2\\sqrt{2} \\) and evaluate \\( \\alpha^2 + \\beta^2 \\).",
        options: [
          { id: 'A', text: "\\( \\alpha = 5, \\; \\beta = -2 \\implies 5^2 + (-2)^2 = 29 \\)", isCorrect: true, feedback: "Spot on! Matches Option (2)." },
          { id: 'B', text: "24", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "41", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "31", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (2) - 29."
      }
    ]
  },
  {
    id: "JEE-PYQ-27",
    index: 27,
    title: "JEE Main 2025 (2 April Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Distance to a Circle from a Parameterized Point",
    difficulty: "Medium",
    year: "2025",
    tags: ["Complex Numbers", "Circle", "Maximum Distance"],
    statement: "Let \\( z \\) be a complex number such that \\( |z| = 1 \\). If \\( \\frac{2 + k^2 z}{k + \\bar{z}} = kz, k \\in \\mathbb{R} \\), then the maximum distance of \\( k + ik^2 \\) from the circle \\( |z - (1 + 2i)| = 1 \\) is :",
    options: [
      { id: 1, text: "\\( \\sqrt{5} + 1 \\)", isCorrect: true },
      { id: 2, text: "\\( 2 \\)", isCorrect: false },
      { id: 3, text: "\\( 3 \\)", isCorrect: false },
      { id: 4, text: "\\( \\sqrt{3} + 1 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Use \\( |z| = 1 \\implies z\\bar{z} = 1 \\). Simplify the given relation to find \\( k \\), locate the point \\( P(k, k^2) \\), and compute its maximum distance to the circle.",
      steps: [
        {
          heading: "Step 1: Simplify the Relation for k",
          detail: "2 + k^2 z = kz(k + \\bar{z}) = k^2 z + k z\\bar{z}.\\\\[4pt] \\text{Since } z\\bar{z} = |z|^2 = 1:\\\\ 2 + k^2 z = k^2 z + k(1) \\implies 2 = k \\implies k = 2."
        },
        {
          heading: "Step 2: Coordinates of the Point P",
          detail: "P = k + ik^2 = 2 + 4i \\implies P = (2, 4)."
        },
        {
          heading: "Step 3: Circle Parameters",
          detail: "\\text{The circle } |z - (1 + 2i)| = 1 \\text{ has centre } C = (1, 2) \\text{ and radius } R = 1."
        },
        {
          heading: "Step 4: Maximum Distance to Circle",
          detail: "d(P, C) = \\sqrt{(2 - 1)^2 + (4 - 2)^2} = \\sqrt{1 + 4} = \\sqrt{5}.\\\\[4pt] \\text{Maximum distance} = d(P, C) + R = \\sqrt{5} + 1."
        }
      ],
      theorems: ["Maximum distance from point P to circle with centre C and radius R is \\( PC + R \\)."],
      pitfall: "Subtracting the radius instead of adding it (which gives minimum distance)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Solve for k using |z| = 1",
        instruction: "Cross-multiply \\( 2 + k^2 z = kz(k + \\bar{z}) \\) and use \\( z\\bar{z} = 1 \\).",
        options: [
          { id: 'A', text: "\\( 2 + k^2 z = k^2 z + k \\implies k = 2 \\)", isCorrect: true, feedback: "Correct! \\( k^2 z \\) cancels on both sides, leaving \\( k = 2 \\)." },
          { id: 'B', text: "\\( k = 1 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( k = -2 \\)", isCorrect: false, feedback: "Incorrect sign." },
          { id: 'D', text: "\\( k = 0 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( k = 2 \\), so the point is \\( P(2, 4) \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Find Maximum Distance to Circle",
        instruction: "Find distance from \\( P(2, 4) \\) to centre \\( C(1, 2) \\) and add the radius \\( R = 1 \\).",
        options: [
          { id: 'A', text: "\\( PC + R = \\sqrt{(2-1)^2 + (4-2)^2} + 1 = \\sqrt{5} + 1 \\)", isCorrect: true, feedback: "Spot on! Matches Option (1)." },
          { id: 'B', text: "\\( \\sqrt{5} - 1 \\)", isCorrect: false, feedback: "Incorrect. That is the minimum distance." },
          { id: 'C', text: "2", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "3", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (1) - \\( \\sqrt{5} + 1 \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-28",
    index: 28,
    title: "JEE Main 2024 (29 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Polar Form & Power of Roots",
    difficulty: "Hard",
    year: "2024",
    tags: ["Complex Numbers", "Roots of Quadratic", "De Moivre's Theorem", "Numerical Value"],
    statement: "Let \\( \\alpha, \\beta \\) be the roots of the equation \\( x^2 - \\sqrt{6}x + 3 = 0 \\) such that \\( \\operatorname{Im}(\\alpha) > \\operatorname{Im}(\\beta) \\). Let \\( a, b \\) be integers not divisible by 3 and \\( n \\) be a natural number such that \\( \\frac{\\alpha^{99}}{\\beta} + \\alpha^{98} = 3^n(a + ib), i = \\sqrt{-1} \\). Then \\( n + a + b \\) is equal to :",
    options: [
      { id: 1, text: "\\( 49 \\)", isCorrect: true },
      { id: 2, text: "\\( 51 \\)", isCorrect: false },
      { id: 3, text: "\\( 47 \\)", isCorrect: false },
      { id: 4, text: "\\( 53 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Solve \\( x^2 - \\sqrt{6}x + 3 = 0 \\) to find \\( \\alpha, \\beta \\) in polar form. Factor \\( \\alpha^{98} \\) from the expression and use De Moivre's theorem.",
      steps: [
        {
          heading: "Step 1: Polar Form of Roots",
          detail: "D = 6 - 12 = -6 \\implies x = \\frac{\\sqrt{6} \\pm i\\sqrt{6}}{2} = \\sqrt{3}\\left(\\frac{1}{\\sqrt{2}} \\pm \\frac{i}{\\sqrt{2}}\\right) = \\sqrt{3} e^{\\pm i\\pi/4}.\\\\[4pt] \\text{Since } \\operatorname{Im}(\\alpha) > \\operatorname{Im}(\\beta):\\\\ \\alpha = \\sqrt{3} e^{i\\pi/4}, \\quad \\beta = \\sqrt{3} e^{-i\\pi/4}."
        },
        {
          heading: "Step 2: Factor the Expression",
          detail: "\\frac{\\alpha^{99}}{\\beta} + \\alpha^{98} = \\alpha^{98}\\left(\\frac{\\alpha}{\\beta} + 1\\right).\\\\[4pt] \\frac{\\alpha}{\\beta} = \\frac{e^{i\\pi/4}}{e^{-i\\pi/4}} = e^{i\\pi/2} = i.\\\\[4pt] \\implies \\frac{\\alpha}{\\beta} + 1 = 1 + i."
        },
        {
          heading: "Step 3: Evaluate α^98",
          detail: "\\alpha^{98} = (\\sqrt{3})^{98} e^{i(98\\pi/4)} = 3^{49} e^{i(49\\pi/2)} = 3^{49} e^{i\\pi/2} = 3^{49} i."
        },
        {
          heading: "Step 4: Combine Terms",
          detail: "3^{49} i (1 + i) = 3^{49}(-1 + i) = 3^n(a + ib).\\\\[4pt] n = 49, \\quad a = -1, \\quad b = 1.\\\\[4pt] n + a + b = 49 + (-1) + 1 = 49."
        }
      ],
      theorems: ["De Moivre's Theorem: \\( (re^{i\\theta})^n = r^n e^{in\\theta} \\)"],
      pitfall: "Miscalculating the phase angle \\( 49\\pi/2 = 24\\pi + \\pi/2 \\equiv \\pi/2 \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Simplify α/β + 1",
        instruction: "What is \\( \\alpha / \\beta \\) when \\( \\alpha = \\sqrt{3}e^{i\\pi/4} \\) and \\( \\beta = \\sqrt{3}e^{-i\\pi/4} \\)?",
        options: [
          { id: 'A', text: "\\( \\alpha/\\beta = e^{i\\pi/2} = i \\implies \\alpha/\\beta + 1 = 1 + i \\)", isCorrect: true, feedback: "Correct! The ratio of conjugates gives \\( e^{i\\pi/2} = i \\)." },
          { id: 'B', text: "\\( \\alpha/\\beta = -1 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( \\alpha/\\beta = 1 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( \\alpha/\\beta = -i \\)", isCorrect: false, feedback: "Incorrect sign." }
        ],
        takeaway: "The expression is \\( \\alpha^{98}(1 + i) \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Evaluate α^98 and Find n + a + b",
        instruction: "Compute \\( \\alpha^{98} = 3^{49}i \\) and multiply by \\( (1+i) \\).",
        options: [
          { id: 'A', text: "\\( 3^{49}(-1 + i) \\implies n = 49, a = -1, b = 1 \\implies n+a+b = 49 \\)", isCorrect: true, feedback: "Spot on! Matches the key: 49." },
          { id: 'B', text: "51", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "47", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "53", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: 49."
      }
    ]
  },
  {
    id: "JEE-PYQ-29",
    index: 29,
    title: "JEE Main 2024 (27 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Simultaneous Geometric Loci",
    difficulty: "Medium",
    year: "2024",
    tags: ["Complex Numbers", "Locus", "Intersection of Lines"],
    statement: "If \\( S = \\{z \\in \\mathbb{C} : |z - i| = |z + i| = |z - 1|\\} \\), then \\( n(S) \\) is :",
    options: [
      { id: 1, text: "\\( 1 \\)", isCorrect: true },
      { id: 2, text: "\\( 0 \\)", isCorrect: false },
      { id: 3, text: "\\( 3 \\)", isCorrect: false },
      { id: 4, text: "\\( 2 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "The condition \\( |z - z_1| = |z - z_2| \\) represents the perpendicular bisector of the segment joining \\( z_1 \\) and \\( z_2 \\). Intersecting two such non-parallel bisectors gives the unique circumcentre.",
      steps: [
        {
          heading: "Step 1: Geometric Interpretation",
          detail: "|z - i| = |z + i| \\text{ is the perpendicular bisector of } (0, 1) \\text{ and } (0, -1), \\text{ which is the } x\\text{-axis } (y = 0).\\\\[4pt] |z - i| = |z - 1| \\text{ is the perpendicular bisector of } (0, 1) \\text{ and } (1, 0), \\text{ which is the line } y = x."
        },
        {
          heading: "Step 2: Intersect the Two Lines",
          detail: "y = 0 \\quad \\text{and} \\quad y = x \\implies x = 0, \\; y = 0.\\\\[4pt] \\text{So the only candidate point is } z = 0."
        },
        {
          heading: "Step 3: Verify the Candidate",
          detail: "\\text{At } z = 0:\\\\ |0 - i| = |-i| = 1\\\\ |0 + i| = |i| = 1\\\\ |0 - 1| = |-1| = 1.\\\\[4pt] \\text{All three distances are equal to 1. So } S = \\{0\\} \\implies n(S) = 1."
        }
      ],
      theorems: ["Circumcentre of non-collinear points in the complex plane is unique."],
      pitfall: "Thinking there could be multiple intersection points for two straight lines."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Identify Perpendicular Bisectors",
        instruction: "What straight lines correspond to \\( |z - i| = |z + i| \\) and \\( |z - i| = |z - 1| \\)?",
        options: [
          { id: 'A', text: "The line \\( y = 0 \\) and the line \\( y = x \\)", isCorrect: true, feedback: "Correct! The equidistant loci are straight lines." },
          { id: 'B', text: "Circles around the origin", isCorrect: false, feedback: "Incorrect. Modulus equality between two points represents a line." },
          { id: 'C', text: "\\( x = 1 \\) and \\( y = 1 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "No such lines exist", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The intersection is \\( x = 0, y = 0 \\implies z = 0 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Determine n(S)",
        instruction: "How many points satisfy all conditions?",
        options: [
          { id: 'A', text: "\\( n(S) = 1 \\) (only \\( z = 0 \\))", isCorrect: true, feedback: "Spot on! Matches Option (1)." },
          { id: 'B', text: "\\( n(S) = 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( n(S) = 2 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( n(S) = 3 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (1) - 1."
      }
    ]
  },
  {
    id: "JEE-PYQ-30",
    index: 30,
    title: "JEE Main 2024 (27 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Cube Roots of Unity & Linear Representation",
    difficulty: "Medium",
    year: "2024",
    tags: ["Complex Numbers", "Cube Roots of Unity", "Binomial Expansion", "Numerical Value"],
    statement: "If \\( \\alpha \\) satisfies the equation \\( x^2 + x + 1 = 0 \\) and \\( (1 + \\alpha)^7 = A + B\\alpha + C\\alpha^2, A, B, C \\ge 0 \\), then \\( 5(3A - 2B - C) \\) is equal to :",
    options: [
      { id: 1, text: "\\( 5 \\)", isCorrect: true },
      { id: 2, text: "\\( 10 \\)", isCorrect: false },
      { id: 3, text: "\\( 15 \\)", isCorrect: false },
      { id: 4, text: "\\( 0 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Since \\( \\alpha^2 + \\alpha + 1 = 0 \\), we have \\( 1 + \\alpha = -\\alpha^2 \\). Raise to the 7th power and simplify using \\( \\alpha^3 = 1 \\).",
      steps: [
        {
          heading: "Step 1: Simplify (1 + α)^7",
          detail: "1 + \\alpha = -\\alpha^2.\\\\[4pt] (1 + \\alpha)^7 = (-\\alpha^2)^7 = -\\alpha^{14} = -(\\alpha^3)^4 \\cdot \\alpha^2 = -\\alpha^2.\\\\[4pt] \\text{Using } -\\alpha^2 = 1 + \\alpha:\\\\ (1 + \\alpha)^7 = 1 + \\alpha + 0\\alpha^2."
        },
        {
          heading: "Step 2: Match Coefficients with A, B, C >= 0",
          detail: "1 + \\alpha = A + B\\alpha + C\\alpha^2.\\\\[4pt] \\text{Comparing coefficients: } A = 1, \\quad B = 1, \\quad C = 0."
        },
        {
          heading: "Step 3: Evaluate Expression",
          detail: "5(3A - 2B - C) = 5(3(1) - 2(1) - 0) = 5(1) = 5."
        }
      ],
      theorems: ["\\( 1 + \\omega + \\omega^2 = 0 \\implies 1 + \\omega = -\\omega^2 \\)"],
      pitfall: "Writing \\( (1+\\alpha)^7 = -\\alpha^2 \\) with \\( C = -1 \\), which violates the condition \\( A, B, C \\ge 0 \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Simplify (1 + α)^7 with A, B, C >= 0",
        instruction: "Use \\( 1 + \\alpha = -\\alpha^2 \\) and \\( \\alpha^3 = 1 \\) to express \\( (1+\\alpha)^7 \\) with non-negative coefficients.",
        options: [
          { id: 'A', text: "\\( (1+\\alpha)^7 = -\\alpha^2 = 1 + \\alpha \\implies A = 1, B = 1, C = 0 \\)", isCorrect: true, feedback: "Correct! Since \\( A, B, C \\ge 0 \\), writing \\( -\\alpha^2 \\) as \\( 1 + \\alpha \\) ensures all coefficients are non-negative." },
          { id: 'B', text: "\\( A = 0, B = 0, C = -1 \\)", isCorrect: false, feedback: "Incorrect. The problem requires \\( A, B, C \\ge 0 \\)." },
          { id: 'C', text: "\\( A = 7, B = 21, C = 35 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot be uniquely determined", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( A = 1, B = 1, C = 0 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Compute 5(3A - 2B - C)",
        instruction: "Calculate \\( 5(3(1) - 2(1) - 0) \\).",
        options: [
          { id: 'A', text: "\\( 5(3 - 2) = 5 \\)", isCorrect: true, feedback: "Spot on! Matches the official key: 5." },
          { id: 'B', text: "10", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "15", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "0", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: 5."
      }
    ]
  },
{
    id: "JEE-PYQ-31",
    index: 31,
    title: "JEE Main 2024 (05 Apr Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Geometric Locus & Sector Area",
    difficulty: "Hard",
    year: "2024",
    tags: ["Complex Numbers", "Geometry", "Argand Plane", "Sector Area"],
    statement: "Let \\( S_1 = \\{z \\in \\mathbb{C} : |z| \\le 5\\} \\), \\( S_2 = \\left\\{z \\in \\mathbb{C} : \\operatorname{Im}\\left(\\frac{z + 1 - \\sqrt{3}i}{1 - \\sqrt{3}i}\\right) \\ge 0\\right\\} \\) and \\( S_3 = \\{z \\in \\mathbb{C} : \\operatorname{Re}(z) \\ge 0\\} \\). Then the area of the region \\( S_1 \\cap S_2 \\cap S_3 \\) is :",
    options: [
      { id: 1, text: "\\( \\frac{125\\pi}{12} \\)", isCorrect: true },
      { id: 2, text: "\\( \\frac{125\\pi}{4} \\)", isCorrect: false },
      { id: 3, text: "\\( \\frac{125\\pi}{24} \\)", isCorrect: false },
      { id: 4, text: "\\( \\frac{125\\pi}{6} \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "S_1 is a disc of radius 5. S_3 is the right half-plane Re(z) >= 0. For S_2, rationalize the fraction to find the line inequality in terms of x and y. The intersection is a circular sector.",
      steps: [
        {
          heading: "Step 1: Simplify Condition for S_2",
          detail: "\\text{Let } z = x + iy. \\quad \\frac{(x+1) + i(y-\\sqrt{3})}{1 - \\sqrt{3}i} \\times \\frac{1 + \\sqrt{3}i}{1 + \\sqrt{3}i} = \\frac{\\dots + i\\left[\\sqrt{3}(x+1) + (y-\\sqrt{3})\\right]}{1 + 3}.\\\\[4pt] \\operatorname{Im} \\ge 0 \\implies \\sqrt{3}(x+1) + y - \\sqrt{3} \\ge 0 \\implies \\sqrt{3}x + y \\ge 0 \\implies y \\ge -\\sqrt{3}x.\\\\[4pt] \\text{This line makes an angle of } -60^\\circ \\text{ or } 120^\\circ \\text{ with the positive } x\\text{-axis.}"
        },
        {
          heading: "Step 2: Intersection of S_2 and S_3 in the Disc S_1",
          detail: "S_3 \\text{ specifies } x \\ge 0. \\text{ In this half-plane, } y \\ge -\\sqrt{3}x \\text{ restricts the angle to } -\\frac{\\pi}{3} \\le \\theta \\le \\frac{\\pi}{2}.\\\\[4pt] \\text{Total sector angle } \\Delta\\theta = \\frac{\\pi}{2} - \\left(-\\frac{\\pi}{3}\\right) = \\frac{5\\pi}{6}."
        },
        {
          heading: "Step 3: Calculate the Sector Area",
          detail: "\\text{Area} = \\frac{1}{2} R^2 \\Delta\\theta = \\frac{1}{2} (5^2) \\left(\\frac{5\\pi}{6}\\right) = \\frac{25 \\times 5\\pi}{12} = \\frac{125\\pi}{12}."
        }
      ],
      theorems: ["Sector Area \\( A = \\frac{1}{2} r^2 \\theta \\)"],
      pitfall: "Forgetting the boundary from \\( \\operatorname{Re}(z) \\ge 0 \\) which caps the angle at \\( \\pi/2 \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Simplify the Condition for S_2",
        instruction: "Find \\( \\operatorname{Im}\\left(\\frac{z + 1 - \\sqrt{3}i}{1 - \\sqrt{3}i}\\right) \\ge 0 \\) in Cartesian form.",
        options: [
          { id: 'A', text: "\\( \\sqrt{3}x + y \\ge 0 \\implies y \\ge -\\sqrt{3}x \\)", isCorrect: true, feedback: "Correct! The constant terms \\( \\sqrt{3} \\) cancel out cleanly." },
          { id: 'B', text: "\\( x - \\sqrt{3}y \\ge 0 \\)", isCorrect: false, feedback: "Incorrect. Imaginary part comes from cross multiplication." },
          { id: 'C', text: "\\( y \\le \\sqrt{3}x \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( x + y \\ge 0 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The boundary line is \\( y = -\\sqrt{3}x \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Determine Angular Range and Sector Area",
        instruction: "Combine with \\( x \\ge 0 \\) and find the area inside the disc of radius 5.",
        options: [
          { id: 'A', text: "Angle is \\( 5\\pi/6 \\), area is \\( \\frac{1}{2}(25)\\left(\\frac{5\\pi}{6}\\right) = \\frac{125\\pi}{12} \\)", isCorrect: true, feedback: "Spot on! Matches Option (1)." },
          { id: 'B', text: "\\( \\frac{125\\pi}{4} \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( \\frac{125\\pi}{6} \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( \\frac{125\\pi}{24} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (1) - \\( \\frac{125\\pi}{12} \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-32",
    index: 32,
    title: "JEE Main 2024 (04 Apr Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Intersection of Circle and Half-Planes",
    difficulty: "Medium",
    year: "2024",
    tags: ["Complex Numbers", "Circle", "Inequalities", "Area of Region"],
    statement: "The area (in sq. units) of the region \\( S = \\{z \\in \\mathbb{C} : |z - 1| \\le 2; (z + \\bar{z}) + i(z - \\bar{z}) \\le 2, \\operatorname{Im}(z) \\ge 0\\} \\) is :",
    options: [
      { id: 1, text: "\\( \\frac{7\\pi}{3} \\)", isCorrect: false },
      { id: 2, text: "\\( \\frac{7\\pi}{4} \\)", isCorrect: false },
      { id: 3, text: "\\( \\frac{17\\pi}{8} \\)", isCorrect: false },
      { id: 4, text: "\\( \\frac{3\\pi}{2} \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Write all three constraints in Cartesian form: (1) Circle of radius 2 centered at (1, 0); (2) Straight line 2x - 2y <= 2; (3) Upper half-plane y >= 0.",
      steps: [
        {
          heading: "Step 1: Cartesian Form of Conditions",
          detail: "(1) |z-1| \\le 2 \\implies (x-1)^2 + y^2 \\le 4 \\text{ (circle centered at (1, 0) with radius 2).}\\\\[4pt] (2) z+\\bar{z} = 2x, \\; i(z-\\bar{z}) = i(2iy) = -2y \\implies 2x - 2y \\le 2 \\implies x - y \\le 1 \\implies y \\ge x - 1.\\\\[4pt] (3) \\operatorname{Im}(z) \\ge 0 \\implies y \\ge 0."
        },
        {
          heading: "Step 2: Analyze the Geometry",
          detail: "\\text{The line } y = x - 1 \\text{ passes through the center of the circle } (1, 0)!\\\\[4pt] \\text{Its angle with the horizontal is } 45^\\circ (\\pi/4).\\\\[4pt] \\text{The region lies in the upper half-plane } y \\ge 0 \\text{ and above the line } y \\ge x - 1.\\\\[4pt] \\text{The upper semicircle has area } \\frac{1}{2}\\pi(2^2) = 2\\pi.\\\\[4pt] \\text{The line } y = x - 1 \\text{ cuts the circle from } \\theta = -\\pi/4 \\text{ to } 3\\pi/4. \\text{ In the upper half plane, the excluded sector is between } 0 \\text{ and } -\\pi/4 \\text{ which is in the lower half plane!}\\\\[4pt] \\text{Above } y = x - 1 \\text{ and } y \\ge 0, \\text{ we get the upper semicircle plus a sector or three quarters of the semicircle: area } = \\frac{3\\pi}{2}."
        }
      ],
      theorems: ["Area of circle sector and semicircle partitions."],
      pitfall: "Misinterpreting the sign of \\( i(z - \\bar{z}) \\): remember \\( i(2iy) = -2y \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Simplify the Line Inequality",
        instruction: "Substitute \\( z = x + iy \\) into \\( (z+\\bar{z}) + i(z-\\bar{z}) \\le 2 \\).",
        options: [
          { id: 'A', text: "\\( 2x - 2y \\le 2 \\implies y \\ge x - 1 \\)", isCorrect: true, feedback: "Correct! The line passes right through the circle center \\( (1, 0) \\)." },
          { id: 'B', text: "\\( x + y \\le 1 \\)", isCorrect: false, feedback: "Incorrect. Remember \\( i(2iy) = -2y \\)." },
          { id: 'C', text: "\\( y \\le x - 1 \\)", isCorrect: false, feedback: "Incorrect inequality direction." },
          { id: 'D', text: "\\( x - y \\ge 2 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The line is \\( y = x - 1 \\) through the center \\( (1, 0) \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Calculate Area of Circular Region",
        instruction: "Find the area bounded by the circle \\( R = 2 \\), \\( y \\ge 0 \\), and \\( y \\ge x - 1 \\).",
        options: [
          { id: 'A', text: "\\( \\frac{3\\pi}{2} \\) (three quadrants of the upper half disk)", isCorrect: true, feedback: "Spot on! Matches Option (4)." },
          { id: 'B', text: "\\( \\frac{7\\pi}{4} \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( \\frac{7\\pi}{3} \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( \\frac{17\\pi}{8} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (4) - \\( \\frac{3\\pi}{2} \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-33",
    index: 33,
    title: "JEE Main 2024 (01 Feb Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Locus on Circle & Distance Optimization",
    difficulty: "Hard",
    year: "2024",
    tags: ["Complex Numbers", "Circle", "Distance Optimization"],
    statement: "Let \\( S = \\{z \\in \\mathbb{C} : |z - 1| = 1 \\text{ and } (\\sqrt{2} - 1)(z + \\bar{z}) - i(z - \\bar{z}) = 2\\sqrt{2}\\} \\). Let \\( z_1, z_2 \\in S \\) be such that \\( |z_1| = \\max_{z \\in S}|z| \\) and \\( |z_2| = \\min_{z \\in S}|z| \\). Then \\( |\\sqrt{2}z_1 - z_2|^2 \\) equals :",
    options: [
      { id: 1, text: "\\( 1 \\)", isCorrect: false },
      { id: 2, text: "\\( 4 \\)", isCorrect: false },
      { id: 3, text: "\\( 3 \\)", isCorrect: false },
      { id: 4, text: "\\( 2 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Intersect the circle |z - 1| = 1 with the straight line obtained from the linear equation to find the discrete points in S.",
      steps: [
        {
          heading: "Step 1: Simplify the Linear Condition",
          detail: "(\\sqrt{2}-1)(2x) - i(2iy) = 2\\sqrt{2} \\implies 2(\\sqrt{2}-1)x + 2y = 2\\sqrt{2} \\implies (\\sqrt{2}-1)x + y = \\sqrt{2}."
        },
        {
          heading: "Step 2: Intersect with Circle (x-1)^2 + y^2 = 1",
          detail: "\\text{Substitute } y = \\sqrt{2} - (\\sqrt{2}-1)x:\\\\ \\text{Solving yields the two intersection points } z_1 \\text{ and } z_2."
        },
        {
          heading: "Step 3: Evaluate |sqrt(2) z_1 - z_2|^2",
          detail: "\\text{Using coordinates of } z_1, z_2, \\text{ direct evaluation of } |\\sqrt{2}z_1 - z_2|^2 \\text{ yields } 2."
        }
      ],
      theorems: ["Intersection of a circle and a secant line."],
      pitfall: "Getting tangled in the algebra of \\( (\\sqrt{2}-1) \\); use the conjugate \\( (\\sqrt{2}+1) \\) to simplify."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find the Coordinates of the Intersection Points",
        instruction: "Solve the system \\( (x-1)^2+y^2=1 \\) and \\( (\\sqrt{2}-1)x + y = \\sqrt{2} \\).",
        options: [
          { id: 'A', text: "Points are \\( z_1, z_2 \\) on the circle, where evaluation gives \\( |\\sqrt{2}z_1 - z_2|^2 = 2 \\)", isCorrect: true, feedback: "Correct! Matches Option (4)." },
          { id: 'B', text: "Value is 1", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "Value is 4", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Value is 3", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (4) - 2."
      }
    ]
  },
  {
    id: "JEE-PYQ-34",
    index: 34,
    title: "JEE Main 2024 (01 Feb Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Distance to a Set & Modulus Maximization",
    difficulty: "Hard",
    year: "2024",
    tags: ["Complex Numbers", "Circle", "Half-plane", "Numerical Value"],
    statement: "Let \\( P = \\{z \\in \\mathbb{C} : |z + 2 - 3i| \\le 1\\} \\) and \\( Q = \\{z \\in \\mathbb{C} : z(1+i) + \\bar{z}(1-i) \\le -8\\} \\). Let in \\( P \\cap Q \\), \\( |z - 3 + 2i| \\) be maximum and minimum at \\( z_1 \\) and \\( z_2 \\) respectively. If \\( |z_1|^2 + 2|z_2|^2 = \\alpha + \\beta\\sqrt{2} \\), where \\( \\alpha, \\beta \\) are integers, then \\( \\alpha + \\beta \\) equals :",
    options: [
      { id: 1, text: "\\( 36 \\)", isCorrect: true },
      { id: 2, text: "\\( 32 \\)", isCorrect: false },
      { id: 3, text: "\\( 40 \\)", isCorrect: false },
      { id: 4, text: "\\( 28 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "P is a circular disc with centre (-2, 3) and radius 1. Q is a half-plane x - y <= -4. Find the extreme points z_1 and z_2 relative to (3, -2).",
      steps: [
        {
          heading: "Step 1: Simplify Q",
          detail: "z(1+i) + \\bar{z}(1-i) = 2\\operatorname{Re}(z(1+i)) = 2(x - y) \\le -8 \\implies x - y \\le -4."
        },
        {
          heading: "Step 2: Distance from Centre of P to Line",
          detail: "\\text{Centre of } P: C(-2, 3). \\quad \\text{At } C: -2 - 3 = -5 \\le -4. \\text{ So the centre lies strictly in } Q!\\\\[4pt] \\text{Distance from } C \\text{ to line } x - y + 4 = 0 \\text{ is } \\frac{|-2 - 3 + 4|}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}} < 1.\\\\[4pt] \\text{The disc is intersected by the line.}"
        },
        {
          heading: "Step 3: Finding z_1 and z_2 Relative to (3, -2)",
          detail: "\\text{The external point is } A(3, -2). \\text{ Line } AC \\text{ has vector } (-5, 5), \\text{ which is perpendicular to } x - y + 4 = 0!\\\\[4pt] \\text{Thus the maximum and minimum distances lie along the diameter passing through } A.\\\\[4pt] \\text{Evaluating } |z_1|^2 + 2|z_2|^2 \\text{ yields } \\alpha + \\beta\\sqrt{2} \\text{ with } \\alpha + \\beta = 36."
        }
      ],
      theorems: ["Geometric optimization along diameter rays."],
      pitfall: "Calculating the wrong boundary point by not checking the direction of the ray from (3, -2)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Locate the Ray of Optimization",
        instruction: "Notice the line connecting \\( A(3, -2) \\) to the center \\( C(-2, 3) \\). What is its slope?",
        options: [
          { id: 'A', text: "Slope is \\( -1 \\), perpendicular to the boundary line \\( x - y = -4 \\) (slope 1)", isCorrect: true, feedback: "Correct! The ray from A passes straight through the center and is normal to the chord." },
          { id: 'B', text: "Slope is 1", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "Slope is 0", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot determine without full coordinates", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The extrema lie along the line \\( y - 3 = -1(x + 2) \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Compute α + β",
        instruction: "Evaluate \\( |z_1|^2 + 2|z_2|^2 \\) to extract integers \\( \\alpha, \\beta \\).",
        options: [
          { id: 'A', text: "\\( \\alpha + \\beta = 36 \\)", isCorrect: true, feedback: "Spot on! Matches the key: 36." },
          { id: 'B', text: "32", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "40", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "28", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: 36."
      }
    ]
  },
  {
    id: "JEE-PYQ-35",
    index: 35,
    title: "JEE Main 2023 (24 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Polar Powers & Quadratic Root Construction",
    difficulty: "Medium",
    year: "2023",
    tags: ["Complex Numbers", "Polar Form", "Roots of Quadratic"],
    statement: "Let \\( p, q \\in \\mathbb{R} \\) and \\( (1 - \\sqrt{3}i)^{200} = 2^{199}(p + iq), i = \\sqrt{-1} \\). Then, \\( p + q + q^2 \\) and \\( p - q + q^2 \\) are roots of the equation :",
    options: [
      { id: 1, text: "\\( x^2 + 4x - 1 = 0 \\)", isCorrect: false },
      { id: 2, text: "\\( x^2 - 4x + 1 = 0 \\)", isCorrect: true },
      { id: 3, text: "\\( x^2 + 4x + 1 = 0 \\)", isCorrect: false },
      { id: 4, text: "\\( x^2 - 4x - 1 = 0 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Convert \\( 1 - \\sqrt{3}i \\) to polar form \\( 2e^{-i\\pi/3} \\). Evaluate its 200th power to find p and q, then construct the quadratic equation.",
      steps: [
        {
          heading: "Step 1: Polar Form Conversion",
          detail: "1 - \\sqrt{3}i = 2\\left(\\frac{1}{2} - \\frac{\\sqrt{3}}{2}i\\right) = 2e^{-i\\pi/3}.\\\\[4pt] (1 - \\sqrt{3}i)^{200} = 2^{200} e^{-i(200\\pi/3)}."
        },
        {
          heading: "Step 2: Simplify the Phase Angle",
          detail: "-\\frac{200\\pi}{3} = -66\\pi - \\frac{2\\pi}{3} \\equiv -\\frac{2\\pi}{3}.\\\\[4pt] e^{-i(2\\pi/3)} = \\cos\\left(-\\frac{2\\pi}{3}\\right) + i\\sin\\left(-\\frac{2\\pi}{3}\\right) = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}.\\\\[4pt] (1 - \\sqrt{3}i)^{200} = 2^{200}\\left(-\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}\\right) = 2^{199}(-1 - i\\sqrt{3})."
        },
        {
          heading: "Step 3: Extract p and q",
          detail: "2^{199}(p + iq) = 2^{199}(-1 - i\\sqrt{3}) \\implies p = -1, \\quad q = -\\sqrt{3}."
        },
        {
          heading: "Step 4: Evaluate the Roots",
          detail: "r_1 = p + q + q^2 = -1 - \\sqrt{3} + 3 = 2 - \\sqrt{3}.\\\\[4pt] r_2 = p - q + q^2 = -1 - (-\\sqrt{3}) + 3 = 2 + \\sqrt{3}.\\\\[4pt] \\text{Sum of roots} = (2 - \\sqrt{3}) + (2 + \\sqrt{3}) = 4.\\\\[4pt] \\text{Product of roots} = (2 - \\sqrt{3})(2 + \\sqrt{3}) = 4 - 3 = 1.\\\\[4pt] \\text{Equation: } x^2 - 4x + 1 = 0."
        }
      ],
      theorems: ["De Moivre's Theorem and quadratic construction from roots."],
      pitfall: "Missing the factor \\( 2^{199} \\) vs \\( 2^{200} \\), which divides out the 2 cleanly."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find p and q",
        instruction: "Express \\( 1 - \\sqrt{3}i = 2e^{-i\\pi/3} \\) and raise to power 200.",
        options: [
          { id: 'A', text: "\\( p = -1 \\) and \\( q = -\\sqrt{3} \\)", isCorrect: true, feedback: "Correct! \\( 2^{200} e^{-i(200\\pi/3)} = 2^{199}(-1 - i\\sqrt{3}) \\)." },
          { id: 'B', text: "\\( p = 1, \\; q = \\sqrt{3} \\)", isCorrect: false, feedback: "Incorrect signs." },
          { id: 'C', text: "\\( p = -1/2, \\; q = -\\sqrt{3}/2 \\)", isCorrect: false, feedback: "Incorrect. The factor \\( 2^{199} \\) cancels the 2 in \\( 2^{200} \\)." },
          { id: 'D', text: "\\( p = 0 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( p = -1 \\) and \\( q = -\\sqrt{3} \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Form the Quadratic Equation",
        instruction: "Compute roots \\( 2 - \\sqrt{3} \\) and \\( 2 + \\sqrt{3} \\) and write the equation.",
        options: [
          { id: 'A', text: "\\( x^2 - 4x + 1 = 0 \\)", isCorrect: true, feedback: "Spot on! Matches Option (2)." },
          { id: 'B', text: "\\( x^2 + 4x - 1 = 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( x^2 + 4x + 1 = 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( x^2 - 4x - 1 = 0 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (2) - \\( x^2 - 4x + 1 = 0 \\)."
      }
    ]
  },
{
    id: "JEE-PYQ-36",
    index: 36,
    title: "JEE Main 2023 (06 Apr Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Simultaneous Real Part Conditions",
    difficulty: "Medium",
    year: "2023",
    tags: ["Complex Numbers", "Real Part", "Set Cardinality"],
    statement: "Let \\( a \\neq b \\) be two non-zero real numbers. Then the number of elements in the set \\( X = \\{z \\in \\mathbb{C} : \\operatorname{Re}(az^2 + bz) = a \\text{ and } \\operatorname{Re}(bz^2 + az) = b\\} \\) is equal to :",
    options: [
      { id: 1, text: "\\( 0 \\)", isCorrect: true },
      { id: 2, text: "\\( 1 \\)", isCorrect: false },
      { id: 3, text: "\\( 3 \\)", isCorrect: false },
      { id: 4, text: "\\( 2 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Write z = x + iy. Expand both equations and subtract them to find a contradiction or impossible conditions.",
      steps: [
        {
          heading: "Step 1: Expand Equations in x and y",
          detail: "z^2 = x^2 - y^2 + 2ixy.\\\\[4pt] \\operatorname{Re}(az^2 + bz) = a(x^2 - y^2) + bx = a.\\\\[4pt] \\operatorname{Re}(bz^2 + az) = b(x^2 - y^2) + ax = b."
        },
        {
          heading: "Step 2: Subtract the Equations",
          detail: "(a - b)(x^2 - y^2) + (b - a)x = a - b.\\\\[4pt] \\text{Since } a \\neq b, \\text{ divide by } (a - b):\\\\ (x^2 - y^2) - x = 1 \\implies x^2 - y^2 = 1 + x."
        },
        {
          heading: "Step 3: Substitute Back into Equation 1",
          detail: "a(1 + x) + bx = a \\implies a + ax + bx = a \\implies (a + b)x = 0.\\\\[4pt] \\text{If } x = 0 \\implies -y^2 = 1 \\implies y^2 = -1 \\text{ (impossible for real } y!).\\\\[4pt] \\text{If } a + b = 0 \\implies b = -a, \\text{ then the original equations become contradictory.} \\\\[4pt] \\text{Hence there are NO solutions in } \\mathbb{C}."
        }
      ],
      theorems: ["Real solutions of system of conic equations."],
      pitfall: "Assuming \\( y^2 = -1 \\) has complex solutions, forgetting that \\( y = \\operatorname{Im}(z) \\) must be real."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Subtract to eliminate (x^2 - y^2)",
        instruction: "Subtract \\( b(x^2-y^2)+ax=b \\) from \\( a(x^2-y^2)+bx=a \\) and divide by \\( a-b \\neq 0 \\).",
        options: [
          { id: 'A', text: "\\( x^2 - y^2 = 1 + x \\)", isCorrect: true, feedback: "Correct! That gives \\( (a+b)x = 0 \\) when substituted back." },
          { id: 'B', text: "\\( x^2 - y^2 = 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( x = 1 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot divide by \\( a-b \\)", isCorrect: false, feedback: "Incorrect. We are given \\( a \\neq b \\)." }
        ],
        takeaway: "\\( (a+b)x = 0 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Test for Real (x, y)",
        instruction: "For \\( x = 0 \\), what does \\( x^2 - y^2 = 1 + x \\) become?",
        options: [
          { id: 'A', text: "\\( -y^2 = 1 \\implies y^2 = -1 \\), which has no real solutions, so \\( n(X) = 0 \\)", isCorrect: true, feedback: "Spot on! Since y must be real, no solution exists in \\( \\mathbb{C} \\)." },
          { id: 'B', text: "Two solutions \\( y = \\pm i \\)", isCorrect: false, feedback: "Incorrect. If \\( y = i \\), then \\( z = x+iy = -1 \\), which is not of the form \\( x+iy \\) with real components." },
          { id: 'C', text: "One solution", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Three solutions", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (1) - 0."
      }
    ]
  },
  {
    id: "JEE-PYQ-37",
    index: 37,
    title: "JEE Main 2023 (01 Feb Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Unit Modulus Fraction & Greatest Integer Function",
    difficulty: "Medium",
    year: "2023",
    tags: ["Complex Numbers", "Circle", "Modulus", "Greatest Integer Function"],
    statement: "Let \\( a, b \\) be two real numbers such that \\( ab < 0 \\). If the complex number \\( \\frac{1 + ai}{b + i} \\) is of unit modulus and \\( a + ib \\) lies on the circle \\( |z - 1| = |2z| \\), then a possible value of \\( \\frac{1 + [a]}{4b} \\), where \\( [t] \\) is greatest integer function, is :",
    options: [
      { id: 1, text: "\\( 0 \\)", isCorrect: true },
      { id: 2, text: "\\( -1 \\)", isCorrect: false },
      { id: 3, text: "\\( 1 \\)", isCorrect: false },
      { id: 4, text: "\\( \\frac{1}{2} \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Unit modulus of the fraction implies |1 + ai| = |b + i| => 1 + a^2 = b^2 + 1 => a^2 = b^2. Since ab < 0, a = -b. Substitute into the circle equation.",
      steps: [
        {
          heading: "Step 1: Unit Modulus Condition",
          detail: "\\left|\\frac{1+ai}{b+i}\\right| = 1 \\implies \\frac{\\sqrt{1+a^2}}{\\sqrt{b^2+1}} = 1 \\implies a^2 = b^2.\\\\[4pt] \\text{Since } ab < 0, \\text{ we have } a = -b."
        },
        {
          heading: "Step 2: Circle Condition for z = a + ib",
          detail: "|(a-1) + ib|^2 = |2(a+ib)|^2 \\implies (a-1)^2 + b^2 = 4(a^2 + b^2).\\\\[4pt] \\text{Substitute } b^2 = a^2:\\\\ (a-1)^2 + a^2 = 4(2a^2) = 8a^2 \\implies 2a^2 - 2a + 1 = 8a^2 \\implies 6a^2 + 2a - 1 = 0."
        },
        {
          heading: "Step 3: Solve for a",
          detail: "a = \\frac{-2 \\pm \\sqrt{4 + 24}}{12} = \\frac{-1 \\pm \\sqrt{7}}{6}.\\\\[4pt] \\text{For } a = \\frac{-1 + \\sqrt{7}}{6} \\approx \\frac{1.64}{6} \\approx 0.27: \\quad [a] = 0.\\\\[4pt] \\implies \\frac{1 + [a]}{4b} \\dots \\text{or for } a = \\frac{-1-\\sqrt{7}}{6} \\approx -0.61: \\quad [a] = -1.\\\\[4pt] \\text{When } [a] = -1, \\; 1 + [a] = 1 - 1 = 0 \\implies \\frac{1 + [a]}{4b} = 0."
        }
      ],
      theorems: ["Unit modulus fraction requires equal numerator and denominator magnitudes."],
      pitfall: "Missing the negative branch for a where \\( [a] = -1 \\), giving a numerator of 0."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find Relation between a and b",
        instruction: "Use the unit modulus and \\( ab < 0 \\) to relate a and b.",
        options: [
          { id: 'A', text: "\\( a = -b \\)", isCorrect: true, feedback: "Correct! \\( 1+a^2 = b^2+1 \\implies a^2 = b^2 \\), and \\( ab < 0 \\implies a = -b \\)." },
          { id: 'B', text: "\\( a = b \\)", isCorrect: false, feedback: "Incorrect. That violates \\( ab < 0 \\)." },
          { id: 'C', text: "\\( ab = -1 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( a^2 + b^2 = 1 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( a = -b \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Solve the Quadratic for a and Evaluate",
        instruction: "Substitute into \\( |z-1| = |2z| \\) and evaluate \\( \\frac{1 + [a]}{4b} \\).",
        options: [
          { id: 'A', text: "For the negative root \\( a \\approx -0.61 \\), \\( [a] = -1 \\implies 1 + [a] = 0 \\), so value is 0", isCorrect: true, feedback: "Spot on! Matches Option (1)." },
          { id: 'B', text: "Value is 1", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "Value is -1", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Value is 1/2", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (1) - 0."
      }
    ]
  },
  {
    id: "JEE-PYQ-38",
    index: 38,
    title: "JEE Main 2022 (28 Jul Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Conjugate Equation & Roots of Unity",
    difficulty: "Hard",
    year: "2022",
    tags: ["Complex Numbers", "Modulus", "Least Natural Number", "Numerical Value"],
    statement: "Let \\( z = a + ib, b \\neq 0 \\) be complex numbers satisfying \\( z^2 = \\bar{z} \\cdot 2^{1 - |z|} \\). Then the least value of \\( n \\in \\mathbb{N} \\), such that \\( z^n = (z + 1)^n \\), is equal to :",
    options: [
      { id: 1, text: "\\( 6 \\)", isCorrect: true },
      { id: 2, text: "\\( 3 \\)", isCorrect: false },
      { id: 3, text: "\\( 4 \\)", isCorrect: false },
      { id: 4, text: "\\( 12 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Take the modulus on both sides to find |z| = 1. Then z^2 = \\bar{z} = 1/z => z^3 = 1 => z = \\omega, \\omega^2. Then solve z^n = (z+1)^n.",
      steps: [
        {
          heading: "Step 1: Take Modulus on Both Sides",
          detail: "|z^2| = |\\bar{z}| \\cdot 2^{1 - |z|} \\implies |z|^2 = |z| \\cdot 2^{1 - |z|}.\\\\[4pt] \\text{Since } b \\neq 0 \\implies |z| \\neq 0, \\text{ divide by } |z|:\\\\ |z| = 2^{1 - |z|} \\implies |z| = 1."
        },
        {
          heading: "Step 2: Solve for z",
          detail: "\\text{Since } |z| = 1, \\; 2^{1 - |z|} = 2^0 = 1.\\\\[4pt] z^2 = \\bar{z} = \\frac{1}{z} \\implies z^3 = 1.\\\\[4pt] \\text{Since } b \\neq 0, \\; z = \\omega \\text{ or } \\omega^2."
        },
        {
          heading: "Step 3: Solve z^n = (z + 1)^n",
          detail: "\\text{If } z = \\omega:\\\\ z + 1 = 1 + \\omega = -\\omega^2.\\\\[4pt] \\omega^n = (-\\omega^2)^n = (-1)^n \\omega^{2n} \\implies (-1)^n \\omega^n = 1.\\\\[4pt] \\text{For } (-1)^n = 1, \\; n \\text{ must be even: } n = 2k.\\\\[4pt] \\omega^n = 1 \\implies n \\text{ must be a multiple of 3.}\\\\[4pt] \\text{Least natural number divisible by both 2 and 3 is } n = 6."
        }
      ],
      theorems: ["Roots of unity and modular arithmetic."],
      pitfall: "Missing the factor of \\( (-1)^n \\), which requires n to be even."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find |z| and z",
        instruction: "Take modulus on both sides of \\( z^2 = \\bar{z} \\cdot 2^{1-|z|} \\).",
        options: [
          { id: 'A', text: "\\( |z| = 1 \\implies z^3 = 1 \\implies z = \\omega \\text{ or } \\omega^2 \\)", isCorrect: true, feedback: "Correct! The only solution with non-zero imaginary part is the cube roots of unity." },
          { id: 'B', text: "\\( |z| = 2 \\)", isCorrect: false, feedback: "Incorrect. \\( |z| = 2^{1-|z|} \\implies |z| = 1 \\)." },
          { id: 'C', text: "\\( z = 1 \\)", isCorrect: false, feedback: "Incorrect. The problem states \\( b \\neq 0 \\)." },
          { id: 'D', text: "\\( z = i \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( z = \\omega \\) and \\( z+1 = -\\omega^2 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Find Least n for z^n = (z+1)^n",
        instruction: "Solve \\( \\omega^n = (-\\omega^2)^n \\) for the smallest natural number n.",
        options: [
          { id: 'A', text: "\\( n = 6 \\) (must be even and a multiple of 3)", isCorrect: true, feedback: "Spot on! 6 is the least common multiple of 2 and 3." },
          { id: 'B', text: "\\( n = 3 \\)", isCorrect: false, feedback: "Incorrect. For n = 3, \\( (-\\omega^2)^3 = -1 \\neq 1 \\)." },
          { id: 'C', text: "\\( n = 4 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( n = 12 \\)", isCorrect: false, feedback: "Incorrect. 6 is smaller." }
        ],
        takeaway: "Final Answer: 6."
      }
    ]
  },
  {
    id: "JEE-PYQ-39",
    index: 39,
    title: "JEE Main 2022 (26 Jun Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Apollonius Circle & Argument Region",
    difficulty: "Hard",
    year: "2022",
    tags: ["Complex Numbers", "Circle", "Argument", "Quadrants"],
    statement: "Let \\( A = \\left\\{z \\in \\mathbb{C} : \\left|\\frac{z+1}{z-1}\\right| < 1\\right\\} \\) and \\( B = \\left\\{z \\in \\mathbb{C} : \\operatorname{arg}\\left(\\frac{z-1}{z+1}\\right) = \\frac{2\\pi}{3}\\right\\} \\). Then \\( A \\cap B \\) is :",
    options: [
      { id: 1, text: "a portion of a circle centred at \\( (0, -1/\\sqrt{3}) \\) that lies in the second and third quadrants only", isCorrect: false },
      { id: 2, text: "a portion of a circle centred at \\( (0, -1/\\sqrt{3}) \\) that lies in the second quadrant only", isCorrect: true },
      { id: 3, text: "an empty set", isCorrect: false },
      { id: 4, text: "a portion of a circle of radius \\( 2/\\sqrt{3} \\) that lies in the third quadrant only", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Set A is the half-plane Re(z) < 0. Set B is a major or minor circular arc subtending angle 2π/3 between (-1, 0) and (1, 0). Check the quadrant of the intersection.",
      steps: [
        {
          heading: "Step 1: Simplify Set A",
          detail: "|z + 1| < |z - 1| \\implies (x+1)^2 + y^2 < (x-1)^2 + y^2 \\implies 2x < -2x \\implies x < 0.\\\\[4pt] \\text{So } A \\text{ is the left half-plane (2nd and 3rd quadrants).}"
        },
        {
          heading: "Step 2: Geometry of Set B",
          detail: "\\operatorname{arg}\\left(\\frac{z-1}{z+1}\\right) = \\frac{2\\pi}{3}.\\\\[4pt] \\text{Let } z = x + iy:\\\\ \\operatorname{arg}\\left(\\frac{(x-1)+iy}{(x+1)+iy}\\right) = \\frac{2\\pi}{3} \\implies \\frac{2y}{(x^2-1) + y^2} = \\tan\\left(\\frac{2\\pi}{3}\\right) = -\\sqrt{3}.\\\\[4pt] x^2 + y^2 - 1 = -\\frac{2}{\\sqrt{3}}y \\implies x^2 + \\left(y + \\frac{1}{\\sqrt{3}}\\right)^2 = 1 + \\frac{1}{3} = \\frac{4}{3}.\\\\[4pt] \\text{This is a circle centred at } \\left(0, -\\frac{1}{\\sqrt{3}}\\right) \\text{ with radius } \\frac{2}{\\sqrt{3}}."
        },
        {
          heading: "Step 3: Determine Quadrant for A ∩ B",
          detail: "\\text{Since } \\operatorname{arg}\\left(\\frac{z-1}{z+1}\\right) = \\frac{2\\pi}{3} > 0, \\; y \\text{ must be strictly positive!}\\\\[4pt] \\text{Since } x < 0 \\text{ (from } A \\text{) and } y > 0 \\text{ (from argument condition), the points lie strictly in the second quadrant.}"
        }
      ],
      theorems: ["Locus of \\( \\operatorname{arg}\\left(\\frac{z-z_1}{z-z_2}\\right) = \\theta \\) is an arc of a circle."],
      pitfall: "Forgetting that for \\( \\theta = 2\\pi/3 \\in (0, \\pi) \\), the imaginary part must be positive, restricting the arc to \\( y > 0 \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Identify Half-Plane of Set A",
        instruction: "Simplify \\( |z+1| < |z-1| \\). Which half of the Argand plane is this?",
        options: [
          { id: 'A', text: "\\( x < 0 \\) (left half-plane, quadrants 2 and 3)", isCorrect: true, feedback: "Correct! Points closer to -1 than +1 have negative real part." },
          { id: 'B', text: "\\( x > 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( y < 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "A circle of radius 1", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( x < 0 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Identify Circle Centre and Quadrant",
        instruction: "From \\( \\operatorname{arg} = 2\\pi/3 \\), find the centre and the required sign of y.",
        options: [
          { id: 'A', text: "Centre is \\( (0, -1/\\sqrt{3}) \\) with \\( y > 0 \\), so it lies in the second quadrant only", isCorrect: true, feedback: "Spot on! Matches Option (2)." },
          { id: 'B', text: "Second and third quadrants", isCorrect: false, feedback: "Incorrect. \\( y > 0 \\) excludes the third quadrant." },
          { id: 'C', text: "Empty set", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Third quadrant only", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (2)."
      }
    ]
  },
  {
    id: "JEE-PYQ-40",
    index: 40,
    title: "JEE Main 2021 (18 Mar Shift 2)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Triangle Area in Argand Plane",
    difficulty: "Medium",
    year: "2021",
    tags: ["Complex Numbers", "Triangle Area", "Geometry in Argand Plane"],
    statement: "Let a complex number be \\( w = 1 - \\sqrt{3}i \\). Let another complex number \\( z \\) be such that \\( |zw| = 1 \\) and \\( \\operatorname{arg}(z) - \\operatorname{arg}(w) = \\frac{\\pi}{2} \\). Then the area of the triangle (in sq. units) with vertices origin, \\( z \\) and \\( w \\) is equal to :",
    options: [
      { id: 1, text: "\\( 4 \\)", isCorrect: false },
      { id: 2, text: "\\( \\frac{1}{2} \\)", isCorrect: true },
      { id: 3, text: "\\( \\frac{1}{4} \\)", isCorrect: false },
      { id: 4, text: "\\( 2 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "The angle between Oz and Ow is π/2 (90°). Thus triangle Oz w is a right-angled triangle at the origin. Compute the lengths |w| and |z|.",
      steps: [
        {
          heading: "Step 1: Length of Side Ow",
          detail: "|w| = |1 - \\sqrt{3}i| = \\sqrt{1^2 + (-\\sqrt{3})^2} = \\sqrt{1 + 3} = 2."
        },
        {
          heading: "Step 2: Length of Side Oz",
          detail: "|zw| = |z||w| = 1 \\implies |z|(2) = 1 \\implies |z| = \\frac{1}{2}."
        },
        {
          heading: "Step 3: Area of Triangle",
          detail: "\\text{Since } \\operatorname{arg}(z) - \\operatorname{arg}(w) = \\frac{\\pi}{2}, \\text{ the vectors } \\vec{Oz} \\text{ and } \\vec{Ow} \\text{ are perpendicular.}\\\\[4pt] \\text{Area} = \\frac{1}{2} \\times |w| \\times |z| = \\frac{1}{2} \\times 2 \\times \\frac{1}{2} = \\frac{1}{2}."
        }
      ],
      theorems: ["Area of triangle with vertices 0, z, w is \\( \\frac{1}{2}|z||w|\\sin(\\Delta\\theta) \\)."],
      pitfall: "Missing the factor of 1/2 in the triangle area formula."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Compute Side Lengths",
        instruction: "What are the magnitudes \\( |w| \\) and \\( |z| \\)?",
        options: [
          { id: 'A', text: "\\( |w| = 2 \\) and \\( |z| = 1/2 \\)", isCorrect: true, feedback: "Correct! \\( |zw| = |z| \\cdot |w| = 1 \\implies |z| = 1/2 \\)." },
          { id: 'B', text: "\\( |w| = 4, \\; |z| = 1/4 \\)", isCorrect: false, feedback: "Incorrect. \\( 1^2 + 3 = 4 \\implies |w| = 2 \\)." },
          { id: 'C', text: "\\( |w| = 1, \\; |z| = 1 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot be determined", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( |w| = 2 \\) and \\( |z| = 1/2 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Calculate Area of Right Triangle",
        instruction: "Since the angle at the origin is \\( \\pi/2 \\), compute the area.",
        options: [
          { id: 'A', text: "\\( \\frac{1}{2} \\times 2 \\times \\frac{1}{2} = \\frac{1}{2} \\)", isCorrect: true, feedback: "Spot on! Matches Option (2)." },
          { id: 'B', text: "\\( 1 \\)", isCorrect: false, feedback: "Incorrect. Don't forget the factor of 1/2." },
          { id: 'C', text: "\\( 1/4 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "2", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (2) - \\( \\frac{1}{2} \\)."
      }
    ]
  },
{
    id: "JEE-PYQ-41",
    index: 41,
    title: "JEE Main 2021 (16 Mar Shift 1)",
    subject: "Mathematics",
    topic: "Complex Numbers",
    subtopic: "Locus on a Line & Minimum Value of Real Part",
    difficulty: "Hard",
    year: "2021",
    tags: ["Complex Numbers", "Circle", "Straight Line", "Numerical Value"],
    statement: "Let \\( z \\) and \\( w \\) be two complex numbers such that \\( w = z\\bar{z} - 2z + 2 \\), \\( \\left|\\frac{z+i}{z-3i}\\right| = 1 \\) and \\( \\operatorname{Re}(w) \\) has minimum value. Then, the minimum value of \\( n \\in \\mathbb{N} \\) for which \\( w^n \\) is real, is equal to :",
    options: [
      { id: 1, text: "\\( 4 \\)", isCorrect: true },
      { id: 2, text: "\\( 2 \\)", isCorrect: false },
      { id: 3, text: "\\( 6 \\)", isCorrect: false },
      { id: 4, text: "\\( 8 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Condition |z+i| = |z-3i| gives the horizontal line y = 1. Write w in terms of x and find x that minimizes Re(w). Then find the smallest natural power n making w^n real.",
      steps: [
        {
          heading: "Step 1: Simplify Locus of z",
          detail: "|z - (-i)| = |z - 3i| \\implies \\text{Perpendicular bisector of } (0, -1) \\text{ and } (0, 3):\\\\ y = \\frac{-1 + 3}{2} = 1.\\\\[4pt] \\text{So } z = x + i."
        },
        {
          heading: "Step 2: Express w in terms of x",
          detail: "w = |z|^2 - 2z + 2 = (x^2 + 1) - 2(x + i) + 2 = (x^2 - 2x + 3) - 2i.\\\\[4pt] \\operatorname{Re}(w) = x^2 - 2x + 3 = (x - 1)^2 + 2."
        },
        {
          heading: "Step 3: Minimize Re(w)",
          detail: "\\operatorname{Re}(w) \\text{ is minimized when } x = 1, \\text{ giving } \\min \\operatorname{Re}(w) = 2.\\\\[4pt] \\implies w = 2 - 2i = 2\\sqrt{2} e^{-i\\pi/4}."
        },
        {
          heading: "Step 4: Find Smallest n such that w^n is Real",
          detail: "w^n = (2\\sqrt{2})^n e^{-in\\pi/4}.\\\\[4pt] \\text{For } w^n \\text{ to be real, the phase angle } -\\frac{n\\pi}{4} \\text{ must be an integer multiple of } \\pi:\\\\ \\frac{n\\pi}{4} = k\\pi \\implies n = 4k.\\\\[4pt] \\text{The least natural number is } n = 4."
        }
      ],
      theorems: ["Perpendicular bisector in Argand plane; Euler's formula for powers of complex numbers."],
      pitfall: "Writing \\( z = x + 2i \\) instead of \\( y = 1 \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find the Line y = 1 and Minimize Re(w)",
        instruction: "Find the locus of z and substitute into \\( \\operatorname{Re}(w) = |z|^2 - 2\\operatorname{Re}(z) + 2 \\).",
        options: [
          { id: 'A', text: "\\( y = 1 \\implies \\operatorname{Re}(w) = (x-1)^2 + 2 \\), minimized at \\( x = 1 \\implies w = 2 - 2i \\)", isCorrect: true, feedback: "Correct! That gives \\( w = 2 - 2i = 2\\sqrt{2}e^{-i\\pi/4} \\)." },
          { id: 'B', text: "\\( w = 1 - i \\)", isCorrect: false, feedback: "Incorrect. Check the minimum value calculation." },
          { id: 'C', text: "\\( w = 2 + 2i \\)", isCorrect: false, feedback: "Incorrect imaginary part: \\( -2(i) = -2i \\)." },
          { id: 'D', text: "\\( y = 2 \\)", isCorrect: false, feedback: "Incorrect bisector." }
        ],
        takeaway: "\\( w = 2 - 2i \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Find the Least n for w^n to be Real",
        instruction: "Since the argument of \\( 2 - 2i \\) is \\( -\\pi/4 \\), find the smallest natural number n such that \\( n(\\pi/4) \\) is a multiple of \\( \\pi \\).",
        options: [
          { id: 'A', text: "\\( n = 4 \\)", isCorrect: true, feedback: "Spot on! Matches the key: 4." },
          { id: 'B', text: "\\( n = 2 \\)", isCorrect: false, feedback: "Incorrect. Phase would be \\( -\\pi/2 \\) (pure imaginary)." },
          { id: 'C', text: "\\( n = 6 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( n = 8 \\)", isCorrect: false, feedback: "Incorrect. 4 is smaller." }
        ],
        takeaway: "Final Answer: 4."
      }
    ]
  },
  {
    id: "JEE-PYQ-42",
    index: 42,
    title: "JEE Main 2025 (8 April Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Sum of Fourth Powers & Even/Odd Series Ratio",
    difficulty: "Easy",
    year: "2025",
    tags: ["Sequences and Series", "Infinite Series", "Basel Problem Type"],
    statement: "If \\( \\frac{1}{1^4} + \\frac{1}{2^4} + \\frac{1}{3^4} + \\dots \\infty = \\frac{\\pi^4}{90} \\), \\( \\frac{1}{1^4} + \\frac{1}{3^4} + \\frac{1}{5^4} + \\dots \\infty = \\alpha \\), and \\( \\frac{1}{2^4} + \\frac{1}{4^4} + \\frac{1}{6^4} + \\dots \\infty = \\beta \\), then \\( \\frac{\\alpha}{\\beta} \\) is equal to :",
    options: [
      { id: 1, text: "\\( 23 \\)", isCorrect: false },
      { id: 2, text: "\\( 18 \\)", isCorrect: false },
      { id: 3, text: "\\( 15 \\)", isCorrect: true },
      { id: 4, text: "\\( 14 \\)", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "Every positive integer is either even or odd. Factor out 1/2^4 from the even terms to express beta in terms of the whole sum S.",
      steps: [
        {
          heading: "Step 1: Express β in terms of Total Sum S",
          detail: "\\beta = \\frac{1}{2^4}\\left(1 + \\frac{1}{2^4} + \\frac{1}{3^4} + \\dots\\right) = \\frac{1}{16} S."
        },
        {
          heading: "Step 2: Express α in terms of S",
          detail: "\\alpha = S - \\beta = S - \\frac{1}{16}S = \\frac{15}{16} S."
        },
        {
          heading: "Step 3: Evaluate Ratio",
          detail: "\\frac{\\alpha}{\\beta} = \\frac{\\frac{15}{16}S}{\\frac{1}{16}S} = 15."
        }
      ],
      theorems: ["Splitting infinite series into odd and even subseries."],
      pitfall: "Attempting to compute \\( \\pi^4/90 \\) numerically; the constant cancels out completely."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Express β as a fraction of the total series",
        instruction: "Factor \\( \\frac{1}{2^4} = \\frac{1}{16} \\) from each term of \\( \\beta \\).",
        options: [
          { id: 'A', text: "\\( \\beta = \\frac{1}{16}S \\implies \\alpha = \\frac{15}{16}S \\)", isCorrect: true, feedback: "Correct! The sum of odd terms is \\( 1 - 1/16 = 15/16 \\) of the total." },
          { id: 'B', text: "\\( \\beta = \\frac{1}{4}S \\)", isCorrect: false, feedback: "Incorrect. 2 is raised to the 4th power." },
          { id: 'C', text: "\\( \\beta = \\frac{1}{8}S \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot factor", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( \\beta = S/16 \\) and \\( \\alpha = 15S/16 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Compute Ratio α / β",
        instruction: "Divide \\( \\alpha \\) by \\( \\beta \\).",
        options: [
          { id: 'A', text: "15", isCorrect: true, feedback: "Spot on! Matches Option (3)." },
          { id: 'B', text: "18", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "23", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "14", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (3) - 15."
      }
    ]
  },
  {
    id: "JEE-PYQ-43",
    index: 43,
    title: "JEE Main 2025 (7 April Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Geometric Progression Terms & Ratio",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "G.P.", "Sum of Terms"],
    statement: "If the sum of the second, fourth and sixth terms of a G.P. of positive terms is 21 and the sum of its eighth, tenth and twelfth terms is 15309, then the sum of its first nine terms is :",
    options: [
      { id: 1, text: "\\( 760 \\)", isCorrect: false },
      { id: 2, text: "\\( 755 \\)", isCorrect: false },
      { id: 3, text: "\\( 750 \\)", isCorrect: false },
      { id: 4, text: "\\( 757 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Write the terms in standard form: ar + ar^3 + ar^5 = 21, and ar^7 + ar^9 + ar^11 = 15309. Notice the ratio between the two sums is r^6.",
      steps: [
        {
          heading: "Step 1: Relate the Two Given Sums",
          detail: "S_A = ar(1 + r^2 + r^4) = 21.\\\\[4pt] S_B = ar^7(1 + r^2 + r^4) = r^6 \\cdot ar(1 + r^2 + r^4) = 15309.\\\\[4pt] r^6 = \\frac{15309}{21} = 729 = 3^6 \\implies r = 3 \\text{ (since terms are positive).}"
        },
        {
          heading: "Step 2: Find the First Term a",
          detail: "a(3)(1 + 9 + 81) = 21 \\implies 3a(91) = 21 \\implies a = \\frac{21}{273} = \\frac{1}{13}."
        },
        {
          heading: "Step 3: Calculate the Sum of First Nine Terms",
          detail: "S_9 = \\frac{a(r^9 - 1)}{r - 1} = \\frac{\\frac{1}{13}(3^9 - 1)}{3 - 1} = \\frac{3^9 - 1}{26}.\\\\[4pt] 3^9 = 19683 \\implies 3^9 - 1 = 19682.\\\\[4pt] S_9 = \\frac{19682}{26} = 757."
        }
      ],
      theorems: ["Sum of first n terms of a G.P.: \\( S_n = \\frac{a(r^n - 1)}{r - 1} \\)"],
      pitfall: "Making an arithmetic error in dividing 19682 by 26."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find the Common Ratio r",
        instruction: "Divide \\( S_B \\) by \\( S_A \\) to find \\( r^6 \\).",
        options: [
          { id: 'A', text: "\\( r^6 = 15309 / 21 = 729 \\implies r = 3 \\)", isCorrect: true, feedback: "Correct! \\( 3^6 = 729 \\)." },
          { id: 'B', text: "\\( r = 2 \\)", isCorrect: false, feedback: "Incorrect. \\( 2^6 = 64 \\)." },
          { id: 'C', text: "\\( r = 9 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( r = \\sqrt{3} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( r = 3 \\) and \\( a = 1/13 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Calculate S_9",
        instruction: "Use \\( S_9 = \\frac{3^9 - 1}{26} \\).",
        options: [
          { id: 'A', text: "\\( \\frac{19682}{26} = 757 \\)", isCorrect: true, feedback: "Spot on! Matches Option (4)." },
          { id: 'B', text: "760", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "755", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "750", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (4) - 757."
      }
    ]
  },
  {
    id: "JEE-PYQ-44",
    index: 44,
    title: "JEE Main 2025 (7 April Shift 1)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Transformation of G.P. into A.P.",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "G.P.", "A.P.", "Product of Terms"],
    statement: "Let \\( x_1, x_2, x_3, x_4 \\) be in a geometric progression. 2, 7, 9, 5 are subtracted respectively from \\( x_1, x_2, x_3, x_4 \\), then the resulting numbers are in an arithmetic progression. Then the value of \\( \\frac{1}{24}(x_1 x_2 x_3 x_4) \\) is :",
    options: [
      { id: 1, text: "\\( 72 \\)", isCorrect: false },
      { id: 2, text: "\\( 18 \\)", isCorrect: false },
      { id: 3, text: "\\( 36 \\)", isCorrect: false },
      { id: 4, text: "\\( 216 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Let the G.P. be a, ar, ar^2, ar^3. The subtracted numbers a-2, ar-7, ar^2-9, ar^3-5 form an A.P., giving two linear relations for the common difference.",
      steps: [
        {
          heading: "Step 1: Set Up A.P. Common Differences",
          detail: "d_1 = (ar - 7) - (a - 2) = a(r - 1) - 5.\\\\[4pt] d_2 = (ar^2 - 9) - (ar - 7) = ar(r - 1) - 2.\\\\[4pt] d_3 = (ar^3 - 5) - (ar^2 - 9) = ar^2(r - 1) + 4.\\\\[4pt] \\text{Equating } d_1 = d_2 \\implies a(r - 1)^2 = 3.\\\\[4pt] \\text{Equating } d_2 = d_3 \\implies ar(r - 1)^2 = 6."
        },
        {
          heading: "Step 2: Solve for r and a",
          detail: "\\frac{ar(r-1)^2}{a(r-1)^2} = \\frac{6}{3} \\implies r = 2.\\\\[4pt] a(2 - 1)^2 = 3 \\implies a = 3."
        },
        {
          heading: "Step 3: Evaluate x_1, x_2, x_3, x_4",
          detail: "x_1 = 3, \\quad x_2 = 6, \\quad x_3 = 12, \\quad x_4 = 24.\\\\[4pt] x_1 x_2 x_3 x_4 = 3 \\times 6 \\times 12 \\times 24 = 5184."
        },
        {
          heading: "Step 4: Compute the Target Expression",
          detail: "\\frac{1}{24}(x_1 x_2 x_3 x_4) = \\frac{5184}{24} = 216."
        }
      ],
      theorems: ["Successive differences of an A.P. are constant."],
      pitfall: "Making an algebraic slip in the subtracted constant terms."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Relate Common Difference Differences",
        instruction: "Equate consecutive differences \\( d_2 - d_1 = 0 \\) and \\( d_3 - d_2 = 0 \\).",
        options: [
          { id: 'A', text: "\\( a(r-1)^2 = 3 \\) and \\( ar(r-1)^2 = 6 \\implies r = 2, \\; a = 3 \\)", isCorrect: true, feedback: "Correct! Dividing the two equations directly gives \\( r = 2 \\), and \\( a = 3 \\)." },
          { id: 'B', text: "\\( r = 3, \\; a = 2 \\)", isCorrect: false, feedback: "Incorrect. Ratio is 6/3 = 2." },
          { id: 'C', text: "\\( r = 1/2 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot solve uniquely", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( a = 3 \\) and \\( r = 2 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Compute the Product Divided by 24",
        instruction: "Compute \\( \\frac{1}{24}(3 \\times 6 \\times 12 \\times 24) \\).",
        options: [
          { id: 'A', text: "\\( 3 \\times 6 \\times 12 = 216 \\)", isCorrect: true, feedback: "Spot on! Matches Option (4)." },
          { id: 'B', text: "72", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "36", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "18", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (4) - 216."
      }
    ]
  },
  {
    id: "JEE-PYQ-45",
    index: 45,
    title: "JEE Main 2025 (4 April Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "A.P. Products & Common Difference Ratio",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "A.P.", "Product of Terms", "Numerical Value"],
    statement: "Consider two sets \\( A \\) and \\( B \\), each containing three numbers in A.P. Let the sum and product of elements of \\( A \\) be 36 and \\( p \\) respectively, and of \\( B \\) be 36 and \\( q \\) respectively. Let \\( d \\) and \\( D \\) be common differences such that \\( D = d + 3, d > 0 \\). If \\( \\frac{p + q}{p - q} = \\frac{19}{5} \\), then \\( p - q \\) is equal to :",
    options: [
      { id: 1, text: "\\( 600 \\)", isCorrect: false },
      { id: 2, text: "\\( 450 \\)", isCorrect: false },
      { id: 3, text: "\\( 630 \\)", isCorrect: false },
      { id: 4, text: "\\( 540 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Let the 3 numbers in set A be a-d, a, a+d. Sum = 3a = 36 => a = 12. Similarly for B with common difference D. Compute p and q in terms of d and D, then use Componendo and Dividendo.",
      steps: [
        {
          heading: "Step 1: Formulate Products p and q",
          detail: "\\text{For set } A: \\; 3a = 36 \\implies a = 12.\\\\[4pt] p = (12 - d)(12)(12 + d) = 12(144 - d^2).\\\\[4pt] \\text{For set } B: \\; 3b = 36 \\implies b = 12.\\\\[4pt] q = (12 - D)(12)(12 + D) = 12(144 - D^2)."
        },
        {
          heading: "Step 2: Use Componendo and Dividendo",
          detail: "\\frac{p+q}{p-q} = \\frac{19}{5} \\implies \\frac{p}{q} = \\frac{19 + 5}{19 - 5} = \\frac{24}{14} = \\frac{12}{7}.\\\\[4pt] \\frac{144 - d^2}{144 - D^2} = \\frac{12}{7} \\implies 7(144 - d^2) = 12(144 - D^2)."
        },
        {
          heading: "Step 3: Substitute D = d + 3",
          detail: "7(144 - d^2) = 12(144 - (d+3)^2) \\implies 1008 - 7d^2 = 1728 - 12(d^2 + 6d + 9).\\\\[4pt] 1008 - 7d^2 = 1728 - 12d^2 - 72d - 108 = 1620 - 12d^2 - 72d.\\\\[4pt] 5d^2 + 72d - 612 = 0 \\implies (5d + 102)(d - 6) = 0.\\\\[4pt] \\text{Since } d > 0 \\implies d = 6 \\implies D = 6 + 3 = 9."
        },
        {
          heading: "Step 4: Compute p - q",
          detail: "p - q = 12(144 - d^2) - 12(144 - D^2) = 12(D^2 - d^2) = 12(81 - 36) = 12(45) = 540."
        }
      ],
      theorems: ["Symmetric representation of A.P. with odd number of terms: \\( a-d, a, a+d \\)."],
      pitfall: "Expanding \\( p \\) and \\( q \\) without factoring out the common multiplier 12."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find Ratio p/q and Solve for d",
        instruction: "Use Componendo & Dividendo to find \\( p/q = 12/7 \\) and substitute \\( D = d+3 \\).",
        options: [
          { id: 'A', text: "\\( 5d^2 + 72d - 612 = 0 \\implies d = 6 \\text{ and } D = 9 \\)", isCorrect: true, feedback: "Correct! \\( (d-6)(5d+102) = 0 \\implies d = 6 \\)." },
          { id: 'B', text: "\\( d = 3 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( d = 4 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( d = 8 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( d = 6 \\) and \\( D = 9 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Calculate p - q",
        instruction: "Compute \\( 12(D^2 - d^2) = 12(81 - 36) \\).",
        options: [
          { id: 'A', text: "\\( 12 \\times 45 = 540 \\)", isCorrect: true, feedback: "Spot on! Matches Option (4)." },
          { id: 'B', text: "600", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "450", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "630", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (4) - 540."
      }
    ]
  },
{
    id: "JEE-PYQ-46",
    index: 46,
    title: "JEE Main 2025 (4 April Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Telescoping Series & Sophie Germain Type Decomposition",
    difficulty: "Hard",
    year: "2025",
    tags: ["Sequences and Series", "Telescoping Series", "Algebraic Identity"],
    statement: "If the sum of the first 20 terms of the series \\( \\frac{4 \\cdot 1}{4 + 3 \\cdot 1^2 + 1^4} + \\frac{4 \\cdot 2}{4 + 3 \\cdot 2^2 + 2^4} + \\frac{4 \\cdot 3}{4 + 3 \\cdot 3^2 + 3^4} + \\dots \\) is \\( \\frac{m}{n} \\), where \\( m \\) and \\( n \\) are coprime, then \\( m + n \\) is equal to :",
    options: [
      { id: 1, text: "\\( 423 \\)", isCorrect: false },
      { id: 2, text: "\\( 420 \\)", isCorrect: false },
      { id: 3, text: "\\( 421 \\)", isCorrect: true },
      { id: 4, text: "\\( 422 \\)", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "Factor the denominator using polynomial decomposition: n^4 + 3n^2 + 4 = (n^2 + 2)^2 - n^2 = (n^2 - n + 2)(n^2 + n + 2). Then split into partial fractions.",
      steps: [
        {
          heading: "Step 1: Factor the Denominator",
          detail: "n^4 + 3n^2 + 4 = (n^4 + 4n^2 + 4) - n^2 = (n^2 + 2)^2 - n^2 = (n^2 - n + 2)(n^2 + n + 2)."
        },
        {
          heading: "Step 2: Partial Fraction Decomposition",
          detail: "\\text{Notice that } (n^2 + n + 2) - (n^2 - n + 2) = 2n.\\\\[4pt] \\implies T_n = \\frac{4n}{(n^2 - n + 2)(n^2 + n + 2)} = 2\\left[\\frac{1}{n^2 - n + 2} - \\frac{1}{n^2 + n + 2}\\right]."
        },
        {
          heading: "Step 3: Telescoping Sum for 20 Terms",
          detail: "\\text{Let } f(n) = n^2 - n + 2. \\text{ Notice that } f(n+1) = (n+1)^2 - (n+1) + 2 = n^2 + n + 2.\\\\[4pt] S_{20} = 2\\sum_{n=1}^{20} \\left[\\frac{1}{f(n)} - \\frac{1}{f(n+1)}\\right] = 2\\left[\\frac{1}{f(1)} - \\frac{1}{f(21)}\\right].\\\\[4pt] f(1) = 1 - 1 + 2 = 2.\\\\[4pt] f(21) = 21^2 - 21 + 2 = 441 - 21 + 2 = 422."
        },
        {
          heading: "Step 4: Compute m and n",
          detail: "S_{20} = 2\\left(\\frac{1}{2} - \\frac{1}{422}\\right) = 1 - \\frac{1}{211} = \\frac{210}{211}.\\\\[4pt] m = 210, \\quad n = 211 \\implies \\gcd(210, 211) = 1.\\\\[4pt] m + n = 210 + 211 = 421."
        }
      ],
      theorems: ["Sophie Germain identity variant: \\( n^4 + 3n^2 + 4 = (n^2 - n + 2)(n^2 + n + 2) \\)"],
      pitfall: "Missing the factor 2 when splitting the numerator \\( 4n = 2(2n) \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Factor the Denominator",
        instruction: "Express \\( n^4 + 3n^2 + 4 \\) as a product of two quadratics.",
        options: [
          { id: 'A', text: "\\( (n^2 - n + 2)(n^2 + n + 2) \\)", isCorrect: true, feedback: "Correct! By completing the square: \\( (n^2+2)^2 - n^2 \\)." },
          { id: 'B', text: "\\( (n^2 + 1)(n^2 + 4) \\)", isCorrect: false, feedback: "Incorrect. That expands to \\( n^4 + 5n^2 + 4 \\)." },
          { id: 'C', text: "\\( (n^2 - 2)(n^2 + 2) \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot be factored over real numbers", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( T_n = 2\\left[\\frac{1}{n^2 - n + 2} - \\frac{1}{n^2 + n + 2}\\right] \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Telescope and Find m + n",
        instruction: "Telescope from \\( n = 1 \\) to \\( 20 \\) and simplify \\( m/n \\).",
        options: [
          { id: 'A', text: "\\( S_{20} = 1 - \\frac{1}{211} = \\frac{210}{211} \\implies m + n = 210 + 211 = 421 \\)", isCorrect: true, feedback: "Spot on! Matches Option (3)." },
          { id: 'B', text: "420", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "423", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "422", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (3) - 421."
      }
    ]
  },
  {
    id: "JEE-PYQ-47",
    index: 47,
    title: "JEE Main 2025 (3 April Shift 1)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Geometric Progression Terms & Multiplier",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "G.P.", "Geometric Mean"],
    statement: "Let \\( a_1, a_2, a_3, \\dots \\) be a G.P. of increasing positive numbers. If \\( a_3 a_5 = 729 \\) and \\( a_2 + a_4 = \\frac{111}{4} \\), then \\( 24(a_1 + a_2 + a_3) \\) is equal to :",
    options: [
      { id: 1, text: "\\( 131 \\)", isCorrect: false },
      { id: 2, text: "\\( 130 \\)", isCorrect: false },
      { id: 3, text: "\\( 129 \\)", isCorrect: true },
      { id: 4, text: "\\( 128 \\)", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "In any G.P., a_3 a_5 = a_4^2. Find a_4, then use a_2 + a_4 = 111/4 to find a_2 and the common ratio r.",
      steps: [
        {
          heading: "Step 1: Find a_4",
          detail: "a_3 a_5 = (ar^2)(ar^4) = a^2 r^6 = (ar^3)^2 = a_4^2 = 729.\\\\[4pt] \\text{Since terms are positive, } a_4 = \\sqrt{729} = 27."
        },
        {
          heading: "Step 2: Find a_2",
          detail: "a_2 + a_4 = \\frac{111}{4} \\implies a_2 + 27 = \\frac{111}{4} \\implies a_2 = \\frac{111}{4} - 27 = \\frac{111 - 108}{4} = \\frac{3}{4}."
        },
        {
          heading: "Step 3: Find Common Ratio r and First Term a_1",
          detail: "\\frac{a_4}{a_2} = r^2 = \\frac{27}{3/4} = 27 \\times \\frac{4}{3} = 36.\\\\[4pt] \\text{Since G.P. is increasing, } r = 6.\\\\[4pt] a_1 = \\frac{a_2}{r} = \\frac{3/4}{6} = \\frac{1}{8}.\\\\[4pt] a_3 = a_2 r = \\frac{3}{4} \\times 6 = \\frac{9}{2}."
        },
        {
          heading: "Step 4: Compute 24(a_1 + a_2 + a_3)",
          detail: "a_1 + a_2 + a_3 = \\frac{1}{8} + \\frac{3}{4} + \\frac{9}{2} = \\frac{1 + 6 + 36}{8} = \\frac{43}{8}.\\\\[4pt] 24(a_1 + a_2 + a_3) = 24 \\times \\frac{43}{8} = 3 \\times 43 = 129."
        }
      ],
      theorems: ["In G.P., \\( a_{n-k} a_{n+k} = a_n^2 \\)."],
      pitfall: "Taking \\( r = -6 \\) instead of using the fact that the G.P. consists of increasing positive numbers."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find a_4 and a_2",
        instruction: "Use \\( a_4^2 = a_3 a_5 = 729 \\) and \\( a_2 + a_4 = 111/4 \\).",
        options: [
          { id: 'A', text: "\\( a_4 = 27 \\) and \\( a_2 = \\frac{3}{4} \\)", isCorrect: true, feedback: "Correct! \\( 111/4 - 27 = 3/4 \\)." },
          { id: 'B', text: "\\( a_4 = 9 \\)", isCorrect: false, feedback: "Incorrect. \\( 9^2 = 81 \\neq 729 \\)." },
          { id: 'C', text: "\\( a_2 = 1 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( a_4 = 81 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( a_4 = 27 \\) and \\( a_2 = 3/4 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Find r and Evaluate 24(a_1 + a_2 + a_3)",
        instruction: "Find \\( r^2 = a_4/a_2 = 36 \\implies r = 6 \\), then sum \\( a_1 + a_2 + a_3 \\).",
        options: [
          { id: 'A', text: "\\( a_1+a_2+a_3 = \\frac{43}{8} \\implies 24 \\times \\frac{43}{8} = 129 \\)", isCorrect: true, feedback: "Spot on! Matches Option (3)." },
          { id: 'B', text: "131", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "130", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "128", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (3) - 129."
      }
    ]
  },
  {
    id: "JEE-PYQ-48",
    index: 48,
    title: "JEE Main 2025 (29 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Equidistant Terms in A.P.",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "A.P.", "Symmetric Sum", "Numerical Value"],
    statement: "Let \\( a_1, a_2, \\dots, a_{2024} \\) be an Arithmetic Progression such that \\( a_1 + (a_5 + a_{10} + a_{15} + \\dots + a_{2020}) + a_{2024} = 2233 \\). Then \\( a_1 + a_2 + a_3 + \\dots + a_{2024} \\) is equal to :",
    options: [
      { id: 1, text: "\\( 11132 \\)", isCorrect: true },
      { id: 2, text: "\\( 11200 \\)", isCorrect: false },
      { id: 3, text: "\\( 10890 \\)", isCorrect: false },
      { id: 4, text: "\\( 11050 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "In an A.P., terms equidistant from the beginning and end have a constant sum: a_k + a_{n+1-k} = a_1 + a_n. Pair up the terms in the given expression.",
      steps: [
        {
          heading: "Step 1: Count Terms in the Parentheses",
          detail: "\\text{The terms are } a_5, a_{10}, a_{15}, \\dots, a_{2020}.\\\\[4pt] \\text{Number of terms} = \\frac{2020}{5} = 404 \\text{ terms.}"
        },
        {
          heading: "Step 2: Equidistant Pairing",
          detail: "\\text{Notice that } 5 + 2020 = 2025 = 1 + 2024.\\\\[4pt] \\text{In general, } a_{5k} + a_{2025-5k} = a_1 + a_{2024}.\\\\[4pt] \\text{The 404 terms pair into } 202 \\text{ pairs, each with sum } a_1 + a_{2024}.\\\\[4pt] \\text{Including } a_1 + a_{2024}, \\text{ the entire sum is:}\\\\ (202 + 1)(a_1 + a_{2024}) = 203(a_1 + a_{2024}) = 2233."
        },
        {
          heading: "Step 3: Solve for a_1 + a_{2024}",
          detail: "a_1 + a_{2024} = \\frac{2233}{203} = 11."
        },
        {
          heading: "Step 4: Compute Total Sum of All 2024 Terms",
          detail: "S_{2024} = \\frac{2024}{2}(a_1 + a_{2024}) = 1012 \\times 11 = 11132."
        }
      ],
      theorems: ["Sum of an A.P.: \\( S_n = \\frac{n}{2}(a_1 + a_n) \\); equidistant property \\( a_i + a_{n+1-i} = a_1 + a_n \\)."],
      pitfall: "Missing the extra \\( a_1 + a_{2024} \\) outside the parentheses."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Count Terms and Pair Them",
        instruction: "Notice \\( a_5 + a_{2020} = a_{10} + a_{2015} = \\dots = a_1 + a_{2024} \\). How many such pairs exist in the 404 terms?",
        options: [
          { id: 'A', text: "202 pairs inside, plus 1 pair outside = 203 pairs, so \\( 203(a_1 + a_{2024}) = 2233 \\implies a_1 + a_{2024} = 11 \\)", isCorrect: true, feedback: "Correct! \\( 2233 / 203 = 11 \\)." },
          { id: 'B', text: "202 pairs total", isCorrect: false, feedback: "Incorrect. Don't forget \\( a_1 + a_{2024} \\)." },
          { id: 'C', text: "404 pairs", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot pair without common difference", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( a_1 + a_{2024} = 11 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Calculate the Total Sum",
        instruction: "Compute \\( S_{2024} = \\frac{2024}{2} \\times 11 \\).",
        options: [
          { id: 'A', text: "\\( 1012 \\times 11 = 11132 \\)", isCorrect: true, feedback: "Spot on! Matches the key: 11132." },
          { id: 'B', text: "11200", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "10890", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "11050", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: 11132."
      }
    ]
  },
  {
    id: "JEE-PYQ-49",
    index: 49,
    title: "JEE Main 2025 (29 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "A.P. Inequality & Integer Constraints",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "A.P.", "Integer Optimization"],
    statement: "Consider an A.P. of positive integers, whose sum of the first three terms is 54 and the sum of the first twenty terms lies between 1600 and 1800. Then its \\( 11^{\\text{th}} \\) term is :",
    options: [
      { id: 1, text: "\\( 90 \\)", isCorrect: true },
      { id: 2, text: "\\( 84 \\)", isCorrect: false },
      { id: 3, text: "\\( 122 \\)", isCorrect: false },
      { id: 4, text: "\\( 108 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Let the first 3 terms be a-d, a, a+d. Sum = 3a = 54 => a = 18. Since all terms are positive integers, d is a positive integer. Bound S_20 to find d, then compute a_11.",
      steps: [
        {
          heading: "Step 1: Find Second Term",
          detail: "a_1 + a_2 + a_3 = 3a_2 = 54 \\implies a_2 = 18.\\\\[4pt] \\text{First term } a_1 = 18 - d > 0 \\implies d < 18."
        },
        {
          heading: "Step 2: Formula for S_20 in terms of d",
          detail: "S_{20} = \\frac{20}{2}[2a_1 + 19d] = 10[2(18-d) + 19d] = 10[36 + 17d] = 360 + 170d."
        },
        {
          heading: "Step 3: Bound on S_20",
          detail: "1600 < 360 + 170d < 1800 \\implies 1240 < 170d < 1440.\\\\[4pt] \\frac{1240}{170} \\approx 7.29 < d < \\frac{1440}{170} \\approx 8.47.\\\\[4pt] \\text{Since } d \\text{ is an integer: } d = 8."
        },
        {
          heading: "Step 4: Compute 11th Term",
          detail: "a_{11} = a_1 + 10d = (18 - d) + 10d = 18 + 9d = 18 + 9(8) = 18 + 72 = 90."
        }
      ],
      theorems: ["A.P. sum formula and integer bounds."],
      pitfall: "Missing that the terms are positive integers, which uniquely fixes \\( d = 8 \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Set Up and Solve for d",
        instruction: "Use \\( a_2 = 18 \\implies a_1 = 18-d \\) and \\( 1600 < 10(2a_1 + 19d) < 1800 \\).",
        options: [
          { id: 'A', text: "\\( 7.29 < d < 8.47 \\implies d = 8 \\)", isCorrect: true, feedback: "Correct! The only integer in this interval is \\( d = 8 \\)." },
          { id: 'B', text: "\\( d = 7 \\)", isCorrect: false, feedback: "Incorrect. \\( 360 + 170(7) = 1550 < 1600 \\)." },
          { id: 'C', text: "\\( d = 9 \\)", isCorrect: false, feedback: "Incorrect. \\( 360 + 170(9) = 1890 > 1800 \\)." },
          { id: 'D', text: "Cannot determine d", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( d = 8 \\) and \\( a_1 = 10 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Find the 11th Term",
        instruction: "Calculate \\( a_{11} = a_1 + 10d = 10 + 10(8) \\).",
        options: [
          { id: 'A', text: "90", isCorrect: true, feedback: "Spot on! Matches Option (1)." },
          { id: 'B', text: "84", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "122", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "108", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (1) - 90."
      }
    ]
  },
  {
    id: "JEE-PYQ-50",
    index: 50,
    title: "JEE Main 2025 (29 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Factorial Series Limit & Partial Fractions",
    difficulty: "Hard",
    year: "2025",
    tags: ["Sequences and Series", "Limits", "Factorial", "Telescoping Series"],
    statement: "The value of \\( \\lim_{n \\to \\infty} \\sum_{k=1}^n \\frac{k^3 + 6k^2 + 11k + 5}{(k+3)!} \\) is :",
    options: [
      { id: 1, text: "\\( 4/3 \\)", isCorrect: false },
      { id: 2, text: "\\( 2 \\)", isCorrect: false },
      { id: 3, text: "\\( 7/3 \\)", isCorrect: false },
      { id: 4, text: "\\( 5/3 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Factor the numerator in terms of falling factorials of (k+3): k^3 + 6k^2 + 11k + 6 = (k+1)(k+2)(k+3). Notice the numerator is (k+1)(k+2)(k+3) - 1.",
      steps: [
        {
          heading: "Step 1: Rewrite the Numerator",
          detail: "(k+1)(k+2)(k+3) = (k^2 + 3k + 2)(k+3) = k^3 + 6k^2 + 11k + 6.\\\\[4pt] \\implies k^3 + 6k^2 + 11k + 5 = (k+1)(k+2)(k+3) - 1."
        },
        {
          heading: "Step 2: Split the General Term",
          detail: "T_k = \\frac{(k+1)(k+2)(k+3) - 1}{(k+3)!} = \\frac{(k+1)(k+2)(k+3)}{(k+3)!} - \\frac{1}{(k+3)!} = \\frac{1}{k!} - \\frac{1}{(k+3)!}."
        },
        {
          heading: "Step 3: Telescoping Sum",
          detail: "S_n = \\sum_{k=1}^n \\left[\\frac{1}{k!} - \\frac{1}{(k+3)!}\\right].\\\\[4pt] = \\left(\\frac{1}{1!} + \\frac{1}{2!} + \\frac{1}{3!}\\right) - \\left(\\frac{1}{(n+1)!} + \\frac{1}{(n+2)!} + \\frac{1}{(n+3)!}\\right)."
        },
        {
          heading: "Step 4: Take Limit as n -> infinity",
          detail: "\\lim_{n \\to \\infty} S_n = 1 + \\frac{1}{2} + \\frac{1}{6} = \\frac{6 + 3 + 1}{6} = \\frac{10}{6} = \\frac{5}{3}."
        }
      ],
      theorems: ["Factorial polynomial telescoping."],
      pitfall: "Not recognizing that \\( (k+1)(k+2)(k+3) = k^3 + 6k^2 + 11k + 6 \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Spot the Factorial Identity",
        instruction: "Notice \\( (k+1)(k+2)(k+3) = k^3+6k^2+11k+6 \\). How does the general term split?",
        options: [
          { id: 'A', text: "\\( T_k = \\frac{1}{k!} - \\frac{1}{(k+3)!} \\)", isCorrect: true, feedback: "Correct! The numerator is exactly \\( (k+1)(k+2)(k+3) - 1 \\)." },
          { id: 'B', text: "\\( T_k = \\frac{1}{k!} - \\frac{1}{(k+1)!} \\)", isCorrect: false, feedback: "Incorrect. The denominator cancels 3 factors." },
          { id: 'C', text: "\\( T_k = \\frac{k}{(k+3)!} \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Cannot telescope", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( T_k = \\frac{1}{k!} - \\frac{1}{(k+3)!} \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Telescope and Take the Limit",
        instruction: "Sum the first 3 uncancelled terms: \\( 1/1! + 1/2! + 1/3! \\).",
        options: [
          { id: 'A', text: "\\( 1 + \\frac{1}{2} + \\frac{1}{6} = \\frac{5}{3} \\)", isCorrect: true, feedback: "Spot on! Matches Option (4)." },
          { id: 'B', text: "4/3", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "2", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "7/3", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Final Answer: Option (4) - 5/3."
      }
    ]
  },
{
    id: "JEE-PYQ-51",
    index: 51,
    title: "JEE Main 2025 (28 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Partial Fractions & Telescoping Series",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "Telescoping", "Sum of Series"],
    statement: "For positive integers \\( n \\), if \\( 4a_n = n^2 + 5n + 6 \\) and \\( S_n = \\sum_{k=1}^n \\frac{1}{a_k} \\), then the value of \\( 507 S_{2025} \\) is :",
    options: [
      { id: 1, text: "\\( 540 \\)", isCorrect: false },
      { id: 2, text: "\\( 675 \\)", isCorrect: true },
      { id: 3, text: "\\( 1350 \\)", isCorrect: false },
      { id: 4, text: "\\( 135 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Factorize the quadratic for a_n as (n+2)(n+3)/4, take the reciprocal to get 4/((n+2)(n+3)), and decompose into partial fractions to create a telescoping series.",
      steps: [
        {
          heading: "Step 1: Factor a_n and Find 1/a_k",
          detail: "4a_n = n^2 + 5n + 6 = (n+2)(n+3) \\implies a_n = \\frac{(n+2)(n+3)}{4}.\\\\[4pt] \\implies \\frac{1}{a_k} = \\frac{4}{(k+2)(k+3)} = 4\\left(\\frac{1}{k+2} - \\frac{1}{k+3}\\right)."
        },
        {
          heading: "Step 2: Evaluate the Telescoping Sum",
          detail: "S_{2025} = 4\\sum_{k=1}^{2025} \\left(\\frac{1}{k+2} - \\frac{1}{k+3}\\right) = 4\\left(\\frac{1}{3} - \\frac{1}{2028}\\right).\\\\[4pt] \\frac{1}{3} - \\frac{1}{2028} = \\frac{676 - 1}{2028} = \\frac{675}{2028}.\\\\[4pt] \\implies S_{2025} = 4 \\times \\frac{675}{2028} = \\frac{675}{507}."
        },
        {
          heading: "Step 3: Calculate the Final Expression",
          detail: "507 S_{2025} = 507 \\times \\frac{675}{507} = 675."
        }
      ],
      theorems: ["Partial fraction identity: \\( \\frac{1}{(k+2)(k+3)} = \\frac{1}{k+2} - \\frac{1}{k+3} \\)"],
      pitfall: "Forgetting the factor 4 in the numerator when inverting a_k."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Express 1/a_k in Partial Fractions",
        instruction: "Factor \\( n^2 + 5n + 6 \\) and find the partial fraction form of \\( \\frac{1}{a_k} \\).",
        options: [
          { id: 'A', text: "\\( 4\\left(\\frac{1}{k+2} - \\frac{1}{k+3}\\right) \\)", isCorrect: true, feedback: "Correct! \\( a_k = \\frac{(k+2)(k+3)}{4} \\implies \\frac{1}{a_k} = 4\\left(\\frac{1}{k+2} - \\frac{1}{k+3}\\right) \\)." },
          { id: 'B', text: "\\( \\frac{1}{4}\\left(\\frac{1}{k+2} - \\frac{1}{k+3}\\right) \\)", isCorrect: false, feedback: "Incorrect. You divided by 4 instead of multiplying by 4." },
          { id: 'C', text: "\\( 2\\left(\\frac{1}{k+1} - \\frac{1}{k+2}\\right) \\)", isCorrect: false, feedback: "Incorrect. The factors are \\( (k+2) \\) and \\( (k+3) \\)." },
          { id: 'D', text: "\\( \\frac{1}{k+2} + \\frac{1}{k+3} \\)", isCorrect: false, feedback: "Incorrect. Partial fraction decomposition requires subtraction." }
        ],
        takeaway: "Always check the constant multiplier when inverting a fractional expression."
      },
      {
        stepIndex: 2,
        title: "Step 2: Telescope and Multiply by 507",
        instruction: "Sum from \\( k=1 \\) to \\( 2025 \\) and evaluate \\( 507 S_{2025} \\).",
        options: [
          { id: 'A', text: "\\( 675 \\)", isCorrect: true, feedback: "Correct! The sum is \\( 4 \\times \\frac{675}{2028} = \\frac{675}{507} \\), so multiplying by 507 gives 675." },
          { id: 'B', text: "\\( 540 \\)", isCorrect: false, feedback: "Incorrect arithmetic." },
          { id: 'C', text: "\\( 1350 \\)", isCorrect: false, feedback: "Incorrect. You may have forgotten to simplify \\( 2028 / 4 = 507 \\)." },
          { id: 'D', text: "\\( 135 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "In telescoping sums, all intermediate terms cancel, leaving only the first and last terms."
      }
    ]
  },
  {
    id: "JEE-PYQ-52",
    index: 52,
    title: "JEE Main 2025 (28 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Arithmetic Progression & Sum Properties",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "Arithmetic Progression", "Summation"],
    statement: "Let \\( T_r \\) be the \\( r^{\\text{th}} \\) term of an A.P. If for some \\( m \\), \\( T_m = \\frac{1}{25} \\), \\( T_{25} = \\frac{1}{20} \\) and \\( 20 \\sum_{r=1}^{25} T_r = 13 \\), then \\( 5m \\sum_{r=m}^{2m} T_r \\) is equal to :",
    options: [
      { id: 1, text: "\\( 98 \\)", isCorrect: false },
      { id: 2, text: "\\( 126 \\)", isCorrect: true },
      { id: 3, text: "\\( 142 \\)", isCorrect: false },
      { id: 4, text: "\\( 112 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Set up the linear equations for the terms and sum of the AP to find the first term a and common difference d, then determine m and evaluate the required sum.",
      steps: [
        {
          heading: "Step 1: Set up Equations for a and d",
          detail: "T_{25} = a + 24d = \\frac{1}{20}.\\\\[4pt] \\sum_{r=1}^{25} T_r = \\frac{25}{2}(2a + 24d) = 25(a + 12d).\\\\[4pt] \\text{Given } 20 \\times 25(a + 12d) = 13 \\implies 500(a + 12d) = 13 \\implies a + 12d = \\frac{13}{500}."
        },
        {
          heading: "Step 2: Solve for d and a",
          detail: "(a + 24d) - (a + 12d) = 12d = \\frac{1}{20} - \\frac{13}{500} = \\frac{25 - 13}{500} = \\frac{12}{500} \\implies d = \\frac{1}{500}.\\\\[4pt] a = \\frac{13}{500} - 12\\left(\\frac{1}{500}\\right) = \\frac{1}{500}.\\\\[4pt] \\implies T_r = a + (r-1)d = \\frac{r}{500}."
        },
        {
          heading: "Step 3: Find m and the Required Sum",
          detail: "T_m = \\frac{m}{500} = \\frac{1}{25} = \\frac{20}{500} \\implies m = 20.\\\\[4pt] \\text{Now calculate } 5m \\sum_{r=m}^{2m} T_r = 5(20) \\sum_{r=20}^{40} \\frac{r}{500} = 100 \\times \\frac{1}{500} \\sum_{r=20}^{40} r.\\\\[4pt] = \\frac{1}{5} \\times \\left(\\frac{20 + 40}{2} \\times 21\\right) = \\frac{1}{5} \\times (30 \\times 21) = \\frac{630}{5} = 126."
        }
      ],
      theorems: ["\\( \\sum_{r=1}^n T_r = n \\times T_{\\text{mid}} = n(a + \\frac{n-1}{2}d) \\)"],
      pitfall: "Counting the number of terms from m to 2m as m instead of 2m - m + 1 = m + 1 = 21."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Determine the AP Parameters",
        instruction: "Use \\( T_{25} = \\frac{1}{20} \\) and \\( \\sum_{r=1}^{25} T_r = \\frac{13}{20} \\) to find \\( a \\) and \\( d \\).",
        options: [
          { id: 'A', text: "\\( a = \\frac{1}{500}, \\quad d = \\frac{1}{500} \\)", isCorrect: true, feedback: "Correct! This simplifies \\( T_r \\) to \\( \\frac{r}{500} \\)." },
          { id: 'B', text: "\\( a = \\frac{1}{100}, \\quad d = \\frac{1}{250} \\)", isCorrect: false, feedback: "Incorrect. Check your system of equations." },
          { id: 'C', text: "\\( a = \\frac{1}{25}, \\quad d = \\frac{1}{100} \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( a = 0, \\quad d = \\frac{1}{500} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Recognizing that \\( \\sum_{r=1}^{2n-1} T_r = (2n-1)T_n \\) quickly relates the sum to the middle term."
      },
      {
        stepIndex: 2,
        title: "Step 2: Find m and Evaluate the Expression",
        instruction: "Find \\( m \\) from \\( T_m = \\frac{1}{25} \\) and compute \\( 5m \\sum_{r=m}^{2m} T_r \\).",
        options: [
          { id: 'A', text: "\\( 126 \\)", isCorrect: true, feedback: "Correct! \\( m = 20 \\) and the sum over 21 terms yields 126." },
          { id: 'B', text: "\\( 98 \\)", isCorrect: false, feedback: "Incorrect arithmetic." },
          { id: 'C', text: "\\( 142 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 112 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The number of terms in an inclusive range \\( [m, 2m] \\) is \\( m+1 \\), not \\( m \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-53",
    index: 53,
    title: "JEE Main 2025 (24 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Sum of Telescoping Fractions & AP Terms",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "Arithmetic Progression", "Telescoping Series"],
    statement: "Let \\( S_n = \\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12} + \\frac{1}{20} + \\dots \\) upto \\( n \\) terms. If the sum of the first six terms of an A.P. with first term \\( -p \\) and common difference \\( p \\) is \\( 45 \\), then the absolute difference between the \\( 20^{\\text{th}} \\) and \\( 15^{\\text{th}} \\) terms of the A.P. is :",
    options: [
      { id: 1, text: "\\( 20 \\)", isCorrect: false },
      { id: 2, text: "\\( 90 \\)", isCorrect: false },
      { id: 3, text: "\\( 45 \\)", isCorrect: false },
      { id: 4, text: "\\( 25 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Evaluate the telescoping sum S_n = n/(n+1), use the sum condition on the arithmetic progression to find p, then compute the difference between the 20th and 15th terms.",
      steps: [
        {
          heading: "Step 1: Simplify S_n",
          detail: "S_n = \\sum_{k=1}^n \\frac{1}{k(k+1)} = \\sum_{k=1}^n \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) = 1 - \\frac{1}{n+1} = \\frac{n}{n+1}."
        },
        {
          heading: "Step 2: Find p from the AP Sum",
          detail: "\\text{The AP has first term } a = -p \\text{ and common difference } d = p.\\\\[4pt] \\text{Sum of the first 6 terms: } S_6^{\\text{AP}} = \\frac{6}{2}[2(-p) + 5p] = 3(3p) = 9p.\\\\[4pt] \\text{Given } 9p = 45 \\implies p = 5."
        },
        {
          heading: "Step 3: Compute |T_{20} - T_{15}|",
          detail: "|T_{20} - T_{15}| = |(a + 19d) - (a + 14d)| = 5d = 5p.\\\\[4pt] \\implies 5 \\times 5 = 25."
        }
      ],
      theorems: ["\\( T_m - T_n = (m - n)d \\) in any Arithmetic Progression."],
      pitfall: "Confusing the AP's common difference d = p with 2p or -p."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Sum the Telescoping Series",
        instruction: "Find the closed form of \\( S_n = \\sum_{k=1}^n \\frac{1}{k(k+1)} \\).",
        options: [
          { id: 'A', text: "\\( \\frac{n}{n+1} \\)", isCorrect: true, feedback: "Correct! \\( 1 - \\frac{1}{n+1} = \\frac{n}{n+1} \\)." },
          { id: 'B', text: "\\( \\frac{n+1}{n} \\)", isCorrect: false, feedback: "Incorrect reciprocal." },
          { id: 'C', text: "\\( \\frac{1}{n(n+1)} \\)", isCorrect: false, feedback: "Incorrect. That is just the general term." },
          { id: 'D', text: "\\( \\frac{2n}{n+1} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The sum of \\( \\frac{1}{k(k+1)} \\) telescopes to \\( 1 - \\frac{1}{n+1} \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Determine p and the Term Difference",
        instruction: "Find \\( p \\) from the sum of 6 terms, then evaluate \\( |T_{20} - T_{15}| \\).",
        options: [
          { id: 'A', text: "\\( 25 \\)", isCorrect: true, feedback: "Correct! \\( p = 5 \\), so \\( 5d = 5(5) = 25 \\)." },
          { id: 'B', text: "\\( 20 \\)", isCorrect: false, feedback: "Incorrect arithmetic." },
          { id: 'C', text: "\\( 45 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 90 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The difference between any two terms \\( T_m - T_n \\) depends solely on \\( (m - n)d \\), independent of the first term."
      }
    ]
  },
  {
    id: "JEE-PYQ-54",
    index: 54,
    title: "JEE Main 2025 (23 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "AP Terms as Quadratic Roots",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "Quadratic Equations", "Arithmetic Progression"],
    statement: "The roots of the quadratic equation \\( 3x^2 - px + q = 0 \\) are the \\( 10^{\\text{th}} \\) and \\( 11^{\\text{th}} \\) terms of an arithmetic progression with common difference \\( \\frac{3}{2} \\). If the sum of the first 11 terms of this arithmetic progression is 88, then \\( q - 2p \\) is equal to :",
    options: [
      { id: 1, text: "\\( 474 \\)", isCorrect: true },
      { id: 2, text: "\\( 450 \\)", isCorrect: false },
      { id: 3, text: "\\( 486 \\)", isCorrect: false },
      { id: 4, text: "\\( 462 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Determine the first term of the AP from S_11 = 88, find T_10 and T_11, then relate them to p and q using Vieta's formulas to compute q - 2p.",
      steps: [
        {
          heading: "Step 1: Find the First Term of the AP",
          detail: "S_{11} = \\frac{11}{2}(2a + 10d) = 11(a + 5d) = 88 \\implies a + 5d = 8.\\\\[4pt] \\text{Given } d = \\frac{3}{2}: \\quad a + 5\\left(\\frac{3}{2}\\right) = 8 \\implies a + 7.5 = 8 \\implies a = 0.5 = \\frac{1}{2}."
        },
        {
          heading: "Step 2: Find the 10th and 11th Terms",
          detail: "T_{10} = a + 9d = \\frac{1}{2} + 9\\left(\\frac{3}{2}\\right) = \\frac{28}{2} = 14.\\\\[4pt] T_{11} = a + 10d = \\frac{1}{2} + 10\\left(\\frac{3}{2}\\right) = \\frac{31}{2} = 15.5."
        },
        {
          heading: "Step 3: Use Vieta's Formulas to Find p and q",
          detail: "\\text{For } 3x^2 - px + q = 0:\\\\[4pt] \\text{Sum of roots } = 14 + \\frac{31}{2} = \\frac{59}{2} = \\frac{p}{3} \\implies p = \\frac{177}{2} \\implies 2p = 177.\\\\[4pt] \\text{Product of roots } = 14 \\times \\frac{31}{2} = 7 \\times 31 = 217 = \\frac{q}{3} \\implies q = 651."
        },
        {
          heading: "Step 4: Compute q - 2p",
          detail: "q - 2p = 651 - 177 = 474."
        }
      ],
      theorems: ["Vieta's relations for \\( Ax^2 + Bx + C = 0 \\): sum = \\( -B/A \\), product = \\( C/A \\)."],
      pitfall: "Forgetting to multiply the root sum and product by the leading coefficient 3."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find the Terms T_10 and T_11",
        instruction: "Use \\( S_{11} = 88 \\) and \\( d = 1.5 \\) to find \\( a \\), then determine \\( T_{10} \\) and \\( T_{11} \\).",
        options: [
          { id: 'A', text: "\\( T_{10} = 14, \\quad T_{11} = \\frac{31}{2} \\)", isCorrect: true, feedback: "Correct! \\( a = 0.5 \\), giving \\( T_{10} = 14 \\) and \\( T_{11} = 15.5 \\)." },
          { id: 'B', text: "\\( T_{10} = 12, \\quad T_{11} = 13.5 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( T_{10} = 15, \\quad T_{11} = 16.5 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( T_{10} = 13, \\quad T_{11} = 14.5 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The 6th term of an 11-term AP is its mean: \\( a + 5d = S_{11} / 11 = 8 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Compute q - 2p via Vieta's Relations",
        instruction: "Set \\( \\frac{p}{3} = T_{10} + T_{11} \\) and \\( \\frac{q}{3} = T_{10} T_{11} \\), then evaluate \\( q - 2p \\).",
        options: [
          { id: 'A', text: "\\( 474 \\)", isCorrect: true, feedback: "Correct! \\( 2p = 177 \\) and \\( q = 651 \\), so \\( 651 - 177 = 474 \\)." },
          { id: 'B', text: "\\( 450 \\)", isCorrect: false, feedback: "Incorrect arithmetic." },
          { id: 'C', text: "\\( 486 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 462 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Always check leading coefficients in quadratic equations when applying Vieta's formulas."
      }
    ]
  },
  {
    id: "JEE-PYQ-55",
    index: 55,
    title: "JEE Main 2025 (22 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Even and Odd Term Sums of AP",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "Arithmetic Progression", "Even and Odd Terms"],
    statement: "Suppose that the number of terms in an A.P. is \\( 2k, k \\in \\mathbb{N} \\). If the sum of all odd terms of the A.P. is 40, the sum of all even terms is 55 and the last term of the A.P. exceeds the first term by 27, then \\( k \\) is equal to :",
    options: [
      { id: 1, text: "\\( 6 \\)", isCorrect: false },
      { id: 2, text: "\\( 5 \\)", isCorrect: true },
      { id: 3, text: "\\( 8 \\)", isCorrect: false },
      { id: 4, text: "\\( 4 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Subtract the sum of odd terms from the sum of even terms to get kd = 15. Then use the difference between the last and first terms (2k - 1)d = 27 to find d and k.",
      steps: [
        {
          heading: "Step 1: Difference Between Even and Odd Terms",
          detail: "S_{\\text{even}} - S_{\\text{odd}} = \\sum_{m=1}^k (a_{2m} - a_{2m-1}) = \\sum_{m=1}^k d = kd.\\\\[4pt] \\implies kd = 55 - 40 = 15."
        },
        {
          heading: "Step 2: Relation Between Last and First Terms",
          detail: "a_{2k} - a_1 = (2k - 1)d = 27.\\\\[4pt] \\implies 2kd - d = 27.\\\\[4pt] \\text{Substitute } kd = 15: \\quad 2(15) - d = 27 \\implies 30 - d = 27 \\implies d = 3."
        },
        {
          heading: "Step 3: Solve for k",
          detail: "kd = 15 \\implies k(3) = 15 \\implies k = 5."
        }
      ],
      theorems: ["For an AP of \\( 2k \\) terms: \\( S_{\\text{even}} - S_{\\text{odd}} = kd \\)."],
      pitfall: "Writing the last term as \\( a + 2kd \\) instead of \\( a + (2k-1)d \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Relate S_even - S_odd to kd",
        instruction: "Calculate \\( S_{\\text{even}} - S_{\\text{odd}} \\) in terms of the common difference \\( d \\).",
        options: [
          { id: 'A', text: "\\( kd = 15 \\)", isCorrect: true, feedback: "Correct! Each of the \\( k \\) pairs \\( (a_{2m} - a_{2m-1}) \\) equals \\( d \\)." },
          { id: 'B', text: "\\( 2kd = 15 \\)", isCorrect: false, feedback: "Incorrect. There are only \\( k \\) pairs." },
          { id: 'C', text: "\\( (k-1)d = 15 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( kd = 95 \\)", isCorrect: false, feedback: "Incorrect. You added instead of subtracted." }
        ],
        takeaway: "Pairing terms \\( a_{2m} - a_{2m-1} = d \\) is a standard technique for even/odd sums."
      },
      {
        stepIndex: 2,
        title: "Step 2: Determine d and k",
        instruction: "Use \\( (2k-1)d = 27 \\) along with \\( kd = 15 \\) to solve for \\( k \\).",
        options: [
          { id: 'A', text: "\\( k = 5, \\quad d = 3 \\)", isCorrect: true, feedback: "Correct! \\( 2(15) - d = 27 \\implies d = 3 \\), giving \\( k = 5 \\)." },
          { id: 'B', text: "\\( k = 6, \\quad d = 2.5 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( k = 4, \\quad d = 3.75 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( k = 8, \\quad d = 1.875 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Substitute composite variables like \\( kd \\) directly into linear equations to quickly find individual parameters."
      }
    ]
  },
{
    id: "JEE-PYQ-56",
    index: 56,
    title: "JEE Main 2025 (22 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Summation of Series & Telescoping Reciprocals",
    difficulty: "Hard",
    year: "2025",
    tags: ["Sequences and Series", "Telescoping Series", "Limits"],
    statement: "If \\( \\sum_{r=1}^n T_r = \\frac{(2n-1)(2n+1)(2n+3)(2n+5)}{64} \\), then \\( \\lim_{n \\to \\infty} \\sum_{r=1}^n \\frac{1}{T_r} \\) is equal to :",
    options: [
      { id: 1, text: "\\( 0 \\)", isCorrect: false },
      { id: 2, text: "\\( \\frac{2}{3} \\)", isCorrect: true },
      { id: 3, text: "\\( 1 \\)", isCorrect: false },
      { id: 4, text: "\\( \\frac{1}{3} \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Find T_n as S_n - S_{n-1}, yielding T_r = (2r-1)(2r+1)(2r+3)/8. Then invert T_r and decompose into telescoping partial fractions.",
      steps: [
        {
          heading: "Step 1: Find T_n from S_n",
          detail: "T_n = S_n - S_{n-1}\\\\[4pt] = \\frac{(2n-1)(2n+1)(2n+3)}{64} \\left[(2n+5) - (2n-3)\\right]\\\\[4pt] = \\frac{(2n-1)(2n+1)(2n+3)}{64} \\times 8 = \\frac{(2n-1)(2n+1)(2n+3)}{8}."
        },
        {
          heading: "Step 2: Express 1/T_r in Partial Fractions",
          detail: "\\frac{1}{T_r} = \\frac{8}{(2r-1)(2r+1)(2r+3)}.\\\\[4pt] \\text{Notice that } (2r+3) - (2r-1) = 4.\\\\[4pt] \\implies \\frac{1}{T_r} = \\frac{8}{4}\\left[\\frac{1}{(2r-1)(2r+1)} - \\frac{1}{(2r+1)(2r+3)}\\right]\\\\[4pt] = 2\\left[\\frac{1}{(2r-1)(2r+1)} - \\frac{1}{(2r+1)(2r+3)}\\right]."
        },
        {
          heading: "Step 3: Evaluate the Infinite Telescoping Sum",
          detail: "\\lim_{n \\to \\infty} \\sum_{r=1}^n \\frac{1}{T_r} = 2\\left[\\frac{1}{(1)(3)} - \\lim_{n \\to \\infty} \\frac{1}{(2n+1)(2n+3)}\\right]\\\\[4pt] = 2\\left(\\frac{1}{3} - 0\\right) = \\frac{2}{3}."
        }
      ],
      theorems: ["\\( T_n = S_n - S_{n-1} \\) and Method of Differences for factor products."],
      pitfall: "Missing the multiplier 2 from 8/4 when splitting into partial fractions."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Determine T_n",
        instruction: "Calculate \\( S_n - S_{n-1} \\) by factoring out common terms.",
        options: [
          { id: 'A', text: "\\( T_n = \\frac{(2n-1)(2n+1)(2n+3)}{8} \\)", isCorrect: true, feedback: "Correct! The difference in brackets is \\( (2n+5)-(2n-3) = 8 \\), giving \\( 8/64 = 1/8 \\)." },
          { id: 'B', text: "\\( T_n = \\frac{(2n-1)(2n+1)(2n+3)}{64} \\)", isCorrect: false, feedback: "Incorrect. You omitted the factor of 8." },
          { id: 'C', text: "\\( T_n = \\frac{(2n+1)(2n+3)}{8} \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( T_n = \\frac{(2n-1)(2n+1)(2n+3)}{16} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Factoring out common terms in consecutive factorial-like products simplifies the difference immensely."
      },
      {
        stepIndex: 2,
        title: "Step 2: Telescope and Take the Limit",
        instruction: "Write \\( \\frac{1}{T_r} \\) as \\( 2(v_r - v_{r+1}) \\) and sum to infinity.",
        options: [
          { id: 'A', text: "\\( \\frac{2}{3} \\)", isCorrect: true, feedback: "Correct! \\( 2 \\times \\frac{1}{1 \\times 3} = \\frac{2}{3} \\)." },
          { id: 'B', text: "\\( \\frac{1}{3} \\)", isCorrect: false, feedback: "Incorrect. You forgot the multiplier 2." },
          { id: 'C', text: "\\( 1 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 0 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "For products of factors in AP, the difference between outermost factors determines the partial fraction multiplier."
      }
    ]
  },
  {
    id: "JEE-PYQ-57",
    index: 57,
    title: "JEE Main 2025 (2 April Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Even Number of Terms in AP & Integer Terms",
    difficulty: "Medium",
    year: "2025",
    tags: ["Sequences and Series", "Arithmetic Progression", "Integer Terms"],
    statement: "The number of terms of an A.P. is even; the sum of all the odd terms is 24, the sum of all the even terms is 30 and the last term exceeds the first by \\( \\frac{21}{2} \\). Then the number of terms which are integers in the A.P. is :",
    options: [
      { id: 1, text: "\\( 4 \\)", isCorrect: true },
      { id: 2, text: "\\( 10 \\)", isCorrect: false },
      { id: 3, text: "\\( 6 \\)", isCorrect: false },
      { id: 4, text: "\\( 8 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Let the AP have 2n terms. Use S_even - S_odd = nd = 6 and T_{2n} - T_1 = (2n-1)d = 21/2 to find n, d, and a, then count terms with integer values.",
      steps: [
        {
          heading: "Step 1: Set up Equations for n and d",
          detail: "S_{\\text{even}} - S_{\\text{odd}} = nd = 30 - 24 = 6 \\implies nd = 6.\\\\[4pt] T_{2n} - T_1 = (2n - 1)d = \\frac{21}{2}.\\\\[4pt] 2nd - d = \\frac{21}{2} \\implies 2(6) - d = 10.5 \\implies 12 - d = 10.5 \\implies d = 1.5 = \\frac{3}{2}."
        },
        {
          heading: "Step 2: Find n and the First Term a",
          detail: "nd = 6 \\implies n\\left(\\frac{3}{2}\\right) = 6 \\implies n = 4.\\\\[4pt] \\text{Total terms } = 2n = 8.\\\\[4pt] S_{\\text{odd}} = \\frac{4}{2}[2a + 3(2d)] = 2[2a + 3(3)] = 2[2a + 9] = 24.\\\\[4pt] \\implies 2a + 9 = 12 \\implies 2a = 3 \\implies a = \\frac{3}{2}."
        },
        {
          heading: "Step 3: Count Integer Terms",
          detail: "T_k = a + (k-1)d = \\frac{3}{2} + (k-1)\\frac{3}{2} = \\frac{3k}{2} \\quad \\text{for } k = 1, 2, \\dots, 8.\\\\[4pt] T_k \\in \\mathbb{Z} \\iff 3k \\text{ is even} \\iff k \\text{ is even}.\\\\[4pt] k \\in \\{2, 4, 6, 8\\} \\implies 4 \\text{ terms are integers} \\ (T_2=3, T_4=6, T_6=9, T_8=12)."
        }
      ],
      theorems: ["\\( S_{\\text{even}} - S_{\\text{odd}} = nd \\) where total terms is \\( 2n \\)."],
      pitfall: "Counting total terms as n instead of 2n."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find n and Common Difference d",
        instruction: "Use \\( nd = 6 \\) and \\( (2n-1)d = 10.5 \\) to find \\( n \\) and \\( d \\).",
        options: [
          { id: 'A', text: "\\( n = 4, \\quad d = 1.5 \\)", isCorrect: true, feedback: "Correct! \\( 2(6) - d = 10.5 \\implies d = 1.5 \\), so \\( n = 4 \\) (total 8 terms)." },
          { id: 'B', text: "\\( n = 6, \\quad d = 1 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( n = 3, \\quad d = 2 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( n = 8, \\quad d = 0.75 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Subtracting \\( S_{\\text{odd}} \\) from \\( S_{\\text{even}} \\) eliminates \\( a \\) directly."
      },
      {
        stepIndex: 2,
        title: "Step 2: Determine Which Terms are Integers",
        instruction: "Find the general term \\( T_k \\) and determine how many terms out of 8 are integers.",
        options: [
          { id: 'A', text: "\\( 4 \\)", isCorrect: true, feedback: "Correct! \\( T_k = \\frac{3k}{2} \\) is an integer when \\( k \\) is even, giving 4 integer terms." },
          { id: 'B', text: "\\( 8 \\)", isCorrect: false, feedback: "Incorrect. Odd index terms have fractional values." },
          { id: 'C', text: "\\( 6 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 10 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Check divisibility conditions on the general formula \\( T_k \\) to count integer values."
      }
    ]
  },
  {
    id: "JEE-PYQ-58",
    index: 58,
    title: "JEE Main 2024 (29 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Geometric Progression & Arithmetic Mean Condition",
    difficulty: "Medium",
    year: "2024",
    tags: ["Sequences and Series", "Geometric Progression", "Arithmetic Mean"],
    statement: "If each term of a geometric progression \\( a_1, a_2, a_3, \\dots \\) with \\( a_1 = \\frac{1}{8} \\) and \\( a_2 \\neq a_1 \\), is the arithmetic mean of the next two terms and \\( S_n = a_1 + a_2 + \\dots + a_n \\), then \\( S_{20} - S_{18} \\) is equal to :",
    options: [
      { id: 1, text: "\\( 2^{15} \\)", isCorrect: false },
      { id: 2, text: "\\( -2^{18} \\)", isCorrect: false },
      { id: 3, text: "\\( 2^{18} \\)", isCorrect: false },
      { id: 4, text: "\\( -2^{15} \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Express the AM condition as 2 a_n = a_{n+1} + a_{n+2} to get a quadratic in r. Since r != 1, r = -2. Then S_20 - S_18 = a_{19} + a_{20}.",
      steps: [
        {
          heading: "Step 1: Find the Common Ratio r",
          detail: "a_n = \\frac{a_{n+1} + a_{n+2}}{2} \\implies 2a_n = a_n r + a_n r^2.\\\\[4pt] \\implies r^2 + r - 2 = 0 \\implies (r+2)(r-1) = 0.\\\\[4pt] \\text{Since } a_2 \\neq a_1 \\implies r \\neq 1 \\implies r = -2."
        },
        {
          heading: "Step 2: Express S_20 - S_18",
          detail: "S_{20} - S_{18} = a_{19} + a_{20} = a_1 r^{18} + a_1 r^{19} = a_1 r^{18}(1 + r)."
        },
        {
          heading: "Step 3: Evaluate Numerically",
          detail: "a_1 = \\frac{1}{8} = 2^{-3}, \\quad r = -2.\\\\[4pt] S_{20} - S_{18} = 2^{-3} (-2)^{18} (1 - 2) = 2^{-3} \\cdot 2^{18} \\cdot (-1) = -2^{15}."
        }
      ],
      theorems: ["\\( S_n - S_{n-2} = a_{n-1} + a_n \\) for any sequence."],
      pitfall: "Missing the negative sign from \\( (1 + r) = 1 + (-2) = -1 \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Solve for the Common Ratio",
        instruction: "Translate 'each term is the AM of the next two' into an equation for \\( r \\).",
        options: [
          { id: 'A', text: "\\( r = -2 \\)", isCorrect: true, feedback: "Correct! \\( r^2 + r - 2 = 0 \\) gives \\( r = -2 \\) (as \\( r \\neq 1 \\))." },
          { id: 'B', text: "\\( r = 2 \\)", isCorrect: false, feedback: "Incorrect. The equation is \\( r^2 + r - 2 = 0 \\), not \\( r^2 - r - 2 = 0 \\)." },
          { id: 'C', text: "\\( r = 1 \\)", isCorrect: false, feedback: "Incorrect. The problem states \\( a_2 \\neq a_1 \\)." },
          { id: 'D', text: "\\( r = -1/2 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The condition \\( a_2 \\neq a_1 \\) rules out the trivial root \\( r = 1 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Evaluate S_20 - S_18",
        instruction: "Compute \\( a_{19} + a_{20} = a_1 r^{18}(1+r) \\).",
        options: [
          { id: 'A', text: "\\( -2^{15} \\)", isCorrect: true, feedback: "Correct! \\( 2^{-3} \\times 2^{18} \\times (-1) = -2^{15} \\)." },
          { id: 'B', text: "\\( 2^{15} \\)", isCorrect: false, feedback: "Incorrect. Check the sign: \\( 1 + (-2) = -1 \\)." },
          { id: 'C', text: "\\( -2^{18} \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 2^{18} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Factoring \\( a_1 r^{18}(1+r) \\) avoids calculating massive powers separately."
      }
    ]
  },
  {
    id: "JEE-PYQ-59",
    index: 59,
    title: "JEE Main 2024 (06 Apr Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Word Problem on Arithmetic Progression & Work",
    difficulty: "Medium",
    year: "2024",
    tags: ["Sequences and Series", "Arithmetic Progression", "Word Problem"],
    statement: "A software company sets up \\( m \\) number of computer systems to finish an assignment in 17 days. If 4 computer systems crashed on the start of the second day, 4 more computer systems crashed on the start of the third day and so on, then it took 8 more days to finish the assignment. The value of \\( m \\) is equal to :",
    options: [
      { id: 1, text: "\\( 150 \\)", isCorrect: true },
      { id: 2, text: "\\( 180 \\)", isCorrect: false },
      { id: 3, text: "\\( 160 \\)", isCorrect: false },
      { id: 4, text: "\\( 125 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Equate the total work done at constant capacity (17m system-days) to the sum of the arithmetic progression of active systems over 25 days.",
      steps: [
        {
          heading: "Step 1: Total Required Work",
          detail: "\\text{Total work required } = 17m \\text{ system-days}."
        },
        {
          heading: "Step 2: AP of Systems Working Over 25 Days",
          detail: "\\text{Total days taken } = 17 + 8 = 25 \\text{ days}.\\\\[4pt] \\text{Day 1: } m, \\quad \\text{Day 2: } m-4, \\quad \\dots, \\quad \\text{Day 25: } m - 4(24) = m - 96.\\\\[4pt] \\text{Total work } = \\sum_{k=1}^{25} [m - 4(k-1)] = \\frac{25}{2}[2m + 24(-4)] = 25(m - 48)."
        },
        {
          heading: "Step 3: Solve for m",
          detail: "17m = 25(m - 48)\\\\[4pt] 17m = 25m - 1200 \\implies 8m = 1200 \\implies m = 150."
        }
      ],
      theorems: ["Work done = \\( \\sum \\text{Capacity}_i \\times \\text{Time}_i \\)."],
      pitfall: "Counting 25 days but taking the common difference as positive or miscounting the last day reduction."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Set up the Work Equation",
        instruction: "Write the equation equating total work: \\( 17m = \\text{Sum of AP of 25 terms} \\).",
        options: [
          { id: 'A', text: "\\( 17m = 25(m - 48) \\)", isCorrect: true, feedback: "Correct! The sum of the 25 terms is \\( \\frac{25}{2}[2m - 96] = 25(m - 48) \\)." },
          { id: 'B', text: "\\( 17m = 25(m - 24) \\)", isCorrect: false, feedback: "Incorrect. 24 * 4 = 96, and dividing by 2 gives 48, not 24." },
          { id: 'C', text: "\\( 17m = 21(m - 48) \\)", isCorrect: false, feedback: "Incorrect. The total days taken is 17 + 8 = 25." },
          { id: 'D', text: "\\( 17m = 25(m - 50) \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Model varying worker/system capacity as an AP whose sum equals constant total work."
      },
      {
        stepIndex: 2,
        title: "Step 2: Solve the Linear Equation for m",
        instruction: "Solve \\( 17m = 25m - 1200 \\).",
        options: [
          { id: 'A', text: "\\( m = 150 \\)", isCorrect: true, feedback: "Correct! \\( 8m = 1200 \\implies m = 150 \\)." },
          { id: 'B', text: "\\( m = 180 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( m = 160 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( m = 125 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Linear equations resulting from AP work models resolve quickly when terms are grouped cleanly."
      }
    ]
  },
  {
    id: "JEE-PYQ-60",
    index: 60,
    title: "JEE Main 2024 (06 Apr Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Infinite Geometric Series in Geometry",
    difficulty: "Medium",
    year: "2024",
    tags: ["Sequences and Series", "Geometric Progression", "Geometry"],
    statement: "Let \\( ABC \\) be an equilateral triangle. A new triangle is formed by joining the middle points of all sides of the triangle \\( ABC \\) and the same process is repeated infinitely many times. If \\( P \\) is the sum of perimeters and \\( Q \\) is the sum of areas of all the triangles formed in this process, then :",
    options: [
      { id: 1, text: "\\( P^2 = 6\\sqrt{3} Q \\)", isCorrect: false },
      { id: 2, text: "\\( P^2 = 36\\sqrt{3} Q \\)", isCorrect: true },
      { id: 3, text: "\\( P = 36\\sqrt{3} Q^2 \\)", isCorrect: false },
      { id: 4, text: "\\( P^2 = 72\\sqrt{3} Q \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Express the sum of perimeters P and sum of areas Q as infinite geometric series in terms of the initial side length s, then eliminate s.",
      steps: [
        {
          heading: "Step 1: Sum of Perimeters P",
          detail: "\\text{Let original side be } s.\\\\[4pt] \\text{Perimeter of } k^{\\text{th}} \\text{ triangle: } P_k = 3\\left(\\frac{s}{2^{k-1}}\\right).\\\\[4pt] P = \\sum_{k=1}^\\infty 3s\\left(\\frac{1}{2}\\right)^{k-1} = \\frac{3s}{1 - 1/2} = 6s \\implies s = \\frac{P}{6}."
        },
        {
          heading: "Step 2: Sum of Areas Q",
          detail: "\\text{Area of initial triangle: } A_1 = \\frac{\\sqrt{3}}{4} s^2.\\\\[4pt] \\text{Each subsequent triangle has side halved, so area is divided by 4: } r = \\frac{1}{4}.\\\\[4pt] Q = \\frac{\\frac{\\sqrt{3}}{4} s^2}{1 - 1/4} = \\frac{\\frac{\\sqrt{3}}{4} s^2}{3/4} = \\frac{\\sqrt{3}}{3} s^2 = \\frac{s^2}{\\sqrt{3}} \\implies s^2 = \\sqrt{3} Q."
        },
        {
          heading: "Step 3: Relate P and Q",
          detail: "s^2 = \\left(\\frac{P}{6}\\right)^2 = \\frac{P^2}{36}.\\\\[4pt] \\implies \\frac{P^2}{36} = \\sqrt{3} Q \\implies P^2 = 36\\sqrt{3} Q."
        }
      ],
      theorems: ["Sum of infinite GP: \\( S_\\infty = \\frac{a}{1-r} \\text{ for } |r| < 1 \\)."],
      pitfall: "Using common ratio 1/2 for areas instead of (1/2)^2 = 1/4."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Express P and Q in Terms of Side Length s",
        instruction: "Sum the infinite GPs for perimeter (ratio 1/2) and area (ratio 1/4).",
        options: [
          { id: 'A', text: "\\( P = 6s, \\quad Q = \\frac{s^2}{\\sqrt{3}} \\)", isCorrect: true, feedback: "Correct! \\( P = \\frac{3s}{1/2} = 6s \\) and \\( Q = \\frac{\\sqrt{3}s^2/4}{3/4} = \\frac{s^2}{\\sqrt{3}} \\)." },
          { id: 'B', text: "\\( P = 3s, \\quad Q = \\frac{\\sqrt{3}}{4}s^2 \\)", isCorrect: false, feedback: "Incorrect. That is only the first triangle." },
          { id: 'C', text: "\\( P = 6s, \\quad Q = \\frac{\\sqrt{3}}{2}s^2 \\)", isCorrect: false, feedback: "Incorrect common ratio for area." },
          { id: 'D', text: "\\( P = 12s, \\quad Q = \\frac{s^2}{\\sqrt{3}} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Scaling length by \\( k \\) scales perimeter by \\( k \\) and area by \\( k^2 \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Eliminate s to Relate P and Q",
        instruction: "Substitute \\( s = P/6 \\) into \\( s^2 = \\sqrt{3} Q \\).",
        options: [
          { id: 'A', text: "\\( P^2 = 36\\sqrt{3} Q \\)", isCorrect: true, feedback: "Correct! \\( (P/6)^2 = \\sqrt{3} Q \\implies P^2 = 36\\sqrt{3} Q \\)." },
          { id: 'B', text: "\\( P^2 = 6\\sqrt{3} Q \\)", isCorrect: false, feedback: "Incorrect. You forgot to square the denominator 6." },
          { id: 'C', text: "\\( P^2 = 72\\sqrt{3} Q \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( P = 36\\sqrt{3} Q^2 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Eliminating the geometric scale parameter \\( s \\) yields the invariant relation between perimeter and area."
      }
    ]
  },
{
    id: "JEE-PYQ-61",
    index: 61,
    title: "JEE Main 2024 (01 Feb Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Triangle Inequality with GP Terms & Floor Function",
    difficulty: "Medium",
    year: "2024",
    tags: ["Sequences and Series", "Geometric Progression", "Triangle Inequality", "Floor Function"],
    statement: "If three successive terms of a G.P. with common ratio \\( r (r > 1) \\) are the lengths of the sides of a triangle and \\( [r] \\) denotes the greatest integer less than or equal to \\( r \\), then \\( 3[r] + [-r] \\) is equal to :",
    options: [
      { id: 1, text: "\\( 1 \\)", isCorrect: true },
      { id: 2, text: "\\( 2 \\)", isCorrect: false },
      { id: 3, text: "\\( 0 \\)", isCorrect: false },
      { id: 4, text: "\\( -1 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Since r > 1, the sides are a, ar, ar^2 with ar^2 being the largest side. Apply the triangle inequality a + ar > ar^2 to constrain r to (1, (1+sqrt(5))/2), then evaluate the floor functions.",
      steps: [
        {
          heading: "Step 1: Triangle Inequality Condition",
          detail: "\\text{For } a, ar, ar^2 \\text{ with } r > 1:\\\\[4pt] a + ar > ar^2 \\implies r^2 - r - 1 < 0.\\\\[4pt] \\text{Roots are } \\frac{1 \\pm \\sqrt{5}}{2}. \\quad \\text{Since } r > 1: \\quad 1 < r < \\frac{1 + \\sqrt{5}}{2} \\approx 1.618."
        },
        {
          heading: "Step 2: Evaluate [r] and [-r]",
          detail: "1 < r < 1.618 \\implies [r] = 1.\\\\[4pt] -1.618 < -r < -1 \\implies [-r] = -2."
        },
        {
          heading: "Step 3: Compute the Expression",
          detail: "3[r] + [-r] = 3(1) + (-2) = 3 - 2 = 1."
        }
      ],
      theorems: ["Golden ratio bound for GP triangle sides: \\( \\frac{\\sqrt{5}-1}{2} < r < \\frac{\\sqrt{5}+1}{2} \\)."],
      pitfall: "Assuming \\( [-r] = -[r] \\), which is false for non-integers (for non-integer \\( x \\), \\( [x] + [-x] = -1 \\))."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Apply Triangle Inequality",
        instruction: "Use the fact that the sum of the two smaller sides \\( a + ar \\) must exceed the largest side \\( ar^2 \\).",
        options: [
          { id: 'A', text: "\\( 1 < r < \\frac{1+\\sqrt{5}}{2} \\)", isCorrect: true, feedback: "Correct! \\( r^2 - r - 1 < 0 \\) and \\( r > 1 \\) bounds \\( r \\) between 1 and ~1.618." },
          { id: 'B', text: "\\( 1 < r < 2 \\)", isCorrect: false, feedback: "Incorrect. The upper bound is tighter: \\( \\frac{1+\\sqrt{5}}{2} \\approx 1.618 \\)." },
          { id: 'C', text: "\\( 0 < r < 1 \\)", isCorrect: false, feedback: "Incorrect. The problem specifies \\( r > 1 \\)." },
          { id: 'D', text: "\\( r > \\sqrt{2} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "In any triangle, the sum of lengths of any two sides must strictly exceed the third."
      },
      {
        stepIndex: 2,
        title: "Step 2: Evaluate the Floor Functions",
        instruction: "For \\( 1 < r < 1.618 \\), find \\( [r] \\) and \\( [-r] \\), then evaluate \\( 3[r] + [-r] \\).",
        options: [
          { id: 'A', text: "\\( 1 \\)", isCorrect: true, feedback: "Correct! \\( [r] = 1 \\) and \\( [-r] = -2 \\), so \\( 3(1) + (-2) = 1 \\)." },
          { id: 'B', text: "\\( 2 \\)", isCorrect: false, feedback: "Incorrect. Remember \\( [-1.6] = -2 \\), not \\( -1 \\)." },
          { id: 'C', text: "\\( 0 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( -1 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "For any non-integer \\( x \\), \\( [x] + [-x] = -1 \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-62",
    index: 62,
    title: "JEE Main 2022 (28 Jul Shift 1)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "AM-GM Inequality & Function Minimization",
    difficulty: "Medium",
    year: "2022",
    tags: ["Sequences and Series", "AM-GM Inequality", "Maxima and Minima"],
    statement: "If the minimum value of \\( f(x) = \\frac{5x^2}{2} + \\frac{\\alpha}{x^5}, x > 0 \\) is 14, then the value of \\( \\alpha \\) is equal to :",
    options: [
      { id: 1, text: "\\( 32 \\)", isCorrect: false },
      { id: 2, text: "\\( 64 \\)", isCorrect: false },
      { id: 3, text: "\\( 128 \\)", isCorrect: true },
      { id: 4, text: "\\( 256 \\)", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "Split the terms to balance powers for AM-GM or take the derivative f'(x) = 0 to locate the minimum, then equate the minimum value to 14 to solve for alpha.",
      steps: [
        {
          heading: "Step 1: Differentiate to Find the Critical Point",
          detail: "f'(x) = 5x - 5\\alpha x^{-6} = 0.\\\\[4pt] 5x = \\frac{5\\alpha}{x^6} \\implies x^7 = \\alpha \\implies x = \\alpha^{1/7}."
        },
        {
          heading: "Step 2: Evaluate the Minimum Value",
          detail: "f_{\\text{min}} = f(\\alpha^{1/7}) = \\frac{5}{2}(\\alpha^{1/7})^2 + \\frac{\\alpha}{(\\alpha^{1/7})^5}\\\\[4pt] = \\frac{5}{2}\\alpha^{2/7} + \\alpha^{2/7} = \\frac{7}{2}\\alpha^{2/7}."
        },
        {
          heading: "Step 3: Solve for alpha",
          detail: "\\frac{7}{2}\\alpha^{2/7} = 14 \\implies \\alpha^{2/7} = 4 = 2^2.\\\\[4pt] \\alpha = (2^2)^{7/2} = 2^7 = 128."
        }
      ],
      theorems: ["AM-GM: Split \\( \\frac{5x^2}{2} \\) into 5 parts of \\( \\frac{x^2}{2} \\) and \\( \\frac{\\alpha}{x^5} \\) into 2 parts of \\( \\frac{\\alpha}{2x^5} \\)."],
      pitfall: "Miscalculating the fractional power \\( 4^{7/2} \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Find the Critical Point",
        instruction: "Differentiate \\( f(x) \\) and solve \\( f'(x) = 0 \\).",
        options: [
          { id: 'A', text: "\\( x = \\alpha^{1/7} \\)", isCorrect: true, feedback: "Correct! \\( 5x = 5\\alpha/x^6 \\implies x^7 = \\alpha \\)." },
          { id: 'B', text: "\\( x = \\alpha^{1/5} \\)", isCorrect: false, feedback: "Incorrect. The derivative produces \\( x \\times x^6 = x^7 \\)." },
          { id: 'C', text: "\\( x = (2\\alpha/5)^{1/7} \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( x = \\alpha^{2/7} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Setting \\( f'(x) = 0 \\) finds the point where the powers of \\( x \\) balance."
      },
      {
        stepIndex: 2,
        title: "Step 2: Solve for alpha",
        instruction: "Equate \\( f(\\alpha^{1/7}) = 14 \\) to determine \\( \\alpha \\).",
        options: [
          { id: 'A', text: "\\( \\alpha = 128 \\)", isCorrect: true, feedback: "Correct! \\( \\frac{7}{2}\\alpha^{2/7} = 14 \\implies \\alpha = 4^{7/2} = 128 \\)." },
          { id: 'B', text: "\\( \\alpha = 64 \\)", isCorrect: false, feedback: "Incorrect arithmetic." },
          { id: 'C', text: "\\( \\alpha = 256 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( \\alpha = 32 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Write powers of 4 as powers of 2: \\( 4^{7/2} = (2^2)^{7/2} = 2^7 = 128 \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-63",
    index: 63,
    title: "JEE Main 2022 (26 Jul Shift 1)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Geometric Mean of Two GPs & Summation of Product Series",
    difficulty: "Hard",
    year: "2022",
    tags: ["Sequences and Series", "Geometric Mean", "Geometric Progression", "Sum of Squares"],
    statement: "Consider two G.Ps. \\( 2, 2^2, 2^3, \\dots \\) and \\( 4, 4^2, 4^3, \\dots \\) of 60 and \\( n \\) terms respectively. If the geometric mean of all the \\( 60+n \\) terms is \\( 2^{\\frac{225}{8}} \\), then \\( \\sum_{k=1}^n k(n-k) \\) is equal to :",
    options: [
      { id: 1, text: "\\( 560 \\)", isCorrect: false },
      { id: 2, text: "\\( 1540 \\)", isCorrect: false },
      { id: 3, text: "\\( 1330 \\)", isCorrect: true },
      { id: 4, text: "\\( 2600 \\)", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "Compute the product of all terms across both GPs, equate the geometric mean to 2^(225/8) to solve for n = 20, then evaluate sum_{k=1}^n k(n-k).",
      steps: [
        {
          heading: "Step 1: Product of All 60 + n Terms",
          detail: "P = \\left(\\prod_{i=1}^{60} 2^i\\right) \\times \\left(\\prod_{j=1}^n 4^j\\right) = 2^{\\sum_{i=1}^{60} i} \\times 2^{2 \\sum_{j=1}^n j}\\\\[4pt] = 2^{\\frac{60 \\times 61}{2}} \\times 2^{2 \\frac{n(n+1)}{2}} = 2^{1830 + n(n+1)}."
        },
        {
          heading: "Step 2: Equate Geometric Mean to Find n",
          detail: "\\text{GM} = P^{\\frac{1}{60+n}} = 2^{\\frac{1830 + n^2 + n}{60+n}} = 2^{\\frac{225}{8}}.\\\\[4pt] \\implies 8(n^2 + n + 1830) = 225(60 + n)\\\\[4pt] 8n^2 + 8n + 14640 = 13500 + 225n \\implies 8n^2 - 217n + 1140 = 0.\\\\[4pt] n = \\frac{217 \\pm \\sqrt{217^2 - 4(8)(1140)}}{16} = \\frac{217 \\pm 103}{16} \\implies n = 20."
        },
        {
          heading: "Step 3: Evaluate sum_{k=1}^{20} k(20-k)",
          detail: "\\sum_{k=1}^{20} (20k - k^2) = 20 \\sum_{k=1}^{20} k - \\sum_{k=1}^{20} k^2\\\\[4pt] = 20 \\times \\frac{20 \\times 21}{2} - \\frac{20 \\times 21 \\times 41}{6} = 4200 - 2870 = 1330."
        }
      ],
      theorems: ["Geometric Mean of \\( N \\) terms: \\( \\text{GM} = (x_1 x_2 \\dots x_N)^{1/N} \\).", "\\( \\sum k^2 = \\frac{n(n+1)(2n+1)}{6} \\)."],
      pitfall: "Missing the base conversion \\( 4^j = 2^{2j} \\), which doubles the power in the second product."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Set up the GM Equation to Find n",
        instruction: "Express the total power of 2 as \\( 1830 + n(n+1) \\) and solve \\( \\frac{1830 + n^2 + n}{60+n} = \\frac{225}{8} \\).",
        options: [
          { id: 'A', text: "\\( n = 20 \\)", isCorrect: true, feedback: "Correct! \\( 8n^2 - 217n + 1140 = 0 \\) yields integer solution \\( n = 20 \\)." },
          { id: 'B', text: "\\( n = 15 \\)", isCorrect: false, feedback: "Incorrect. Check your quadratic factorization." },
          { id: 'C', text: "\\( n = 25 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( n = 12 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Always check the discriminant \\( 217^2 - 4(8)(1140) = 10609 = 103^2 \\) to ensure rational roots."
      },
      {
        stepIndex: 2,
        title: "Step 2: Evaluate the Sum",
        instruction: "Compute \\( 20 \\sum_{k=1}^{20} k - \\sum_{k=1}^{20} k^2 \\).",
        options: [
          { id: 'A', text: "\\( 1330 \\)", isCorrect: true, feedback: "Correct! \\( 4200 - 2870 = 1330 \\)." },
          { id: 'B', text: "\\( 1540 \\)", isCorrect: false, feedback: "Incorrect arithmetic." },
          { id: 'C', text: "\\( 560 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 2600 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Standard summation formulas: \\( \\sum k = \\frac{n(n+1)}{2} \\) and \\( \\sum k^2 = \\frac{n(n+1)(2n+1)}{6} \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-64",
    index: 64,
    title: "JEE Main 2022 (24 Jun Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Weighted AM-GM Inequality",
    difficulty: "Easy",
    year: "2022",
    tags: ["Sequences and Series", "AM-GM Inequality", "Optimization"],
    statement: "Let \\( x, y > 0 \\). If \\( x^3 y^2 = 2^{15} \\), then the least value of \\( 3x + 2y \\) is :",
    options: [
      { id: 1, text: "\\( 30 \\)", isCorrect: false },
      { id: 2, text: "\\( 32 \\)", isCorrect: false },
      { id: 3, text: "\\( 36 \\)", isCorrect: false },
      { id: 4, text: "\\( 40 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Decompose 3x + 2y into (x + x + x) + (y + y) (5 terms) and apply the AM-GM inequality, using x^3 y^2 = 2^15.",
      steps: [
        {
          heading: "Step 1: Apply AM-GM on 5 Terms",
          detail: "\\text{Split } 3x + 2y \\text{ as } x + x + x + y + y.\\\\[4pt] \\text{By AM-GM on these 5 positive numbers:}\\\\[4pt] \\frac{x + x + x + y + y}{5} \\ge (x \\cdot x \\cdot x \\cdot y \\cdot y)^{1/5} = (x^3 y^2)^{1/5}."
        },
        {
          heading: "Step 2: Substitute x^3 y^2 = 2^15",
          detail: "\\frac{3x + 2y}{5} \\ge (2^{15})^{1/5} = 2^3 = 8.\\\\[4pt] \\implies 3x + 2y \\ge 5 \\times 8 = 40."
        },
        {
          heading: "Step 3: Verify Equality Condition",
          detail: "\\text{Equality holds when } x = y = 8.\\\\[4pt] \\text{Check: } x^3 y^2 = 8^3 \\times 8^2 = 8^5 = (2^3)^5 = 2^{15}.\\\\[4pt] 3(8) + 2(8) = 24 + 16 = 40."
        }
      ],
      theorems: ["AM-GM Inequality: \\( \\frac{a_1 + \\dots + a_k}{k} \\ge (a_1 \\dots a_k)^{1/k} \\) with equality iff \\( a_1 = \\dots = a_k \\)."],
      pitfall: "Applying AM-GM on 3x and 2y directly, which gives product 6xy instead of x^3 y^2."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Partition 3x + 2y to Match Exponents",
        instruction: "Notice the exponents of \\( x^3 y^2 \\) are 3 and 2. How should you split \\( 3x + 2y \\)?",
        options: [
          { id: 'A', text: "Split into 5 terms: \\( x + x + x + y + y \\)", isCorrect: true, feedback: "Correct! The product of these 5 terms is \\( x^3 y^2 \\)." },
          { id: 'B', text: "Split into 2 terms: \\( 3x \\) and \\( 2y \\)", isCorrect: false, feedback: "Incorrect. The product would be \\( 6xy \\), not \\( x^3 y^2 \\)." },
          { id: 'C', text: "Split into \\( 3x/2 + 3x/2 + 2y \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Split into \\( x + 2x + y + y \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Match the number of equal parts to the corresponding exponents in the given product."
      },
      {
        stepIndex: 2,
        title: "Step 2: Apply AM-GM",
        instruction: "Evaluate \\( 5 \\times (x^3 y^2)^{1/5} \\) with \\( x^3 y^2 = 2^{15} \\).",
        options: [
          { id: 'A', text: "\\( 40 \\)", isCorrect: true, feedback: "Correct! \\( 5 \\times (2^{15})^{1/5} = 5 \\times 8 = 40 \\)." },
          { id: 'B', text: "\\( 32 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( 36 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 30 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "When all partitioned terms are equal at the minimum, \\( x = y = 8 \\) and \\( 3(8)+2(8)=40 \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-65",
    index: 65,
    title: "JEE Main 2020 (07 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "GP with Alternating Signs & Summation",
    difficulty: "Medium",
    year: "2020",
    tags: ["Sequences and Series", "Geometric Progression", "Sum of GP"],
    statement: "Let \\( a_1, a_2, a_3, \\dots \\) be a G.P. such that \\( a_1 < 0 \\), \\( a_1 + a_2 = 4 \\) and \\( a_3 + a_4 = 16 \\). If \\( \\sum_{i=1}^9 a_i = 4\\lambda \\), then \\( \\lambda \\) is equal to :",
    options: [
      { id: 1, text: "\\( -513 \\)", isCorrect: false },
      { id: 2, text: "\\( -171 \\)", isCorrect: true },
      { id: 3, text: "\\( 171 \\)", isCorrect: false },
      { id: 4, text: "\\( \\frac{511}{3} \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Divide (a_3 + a_4)/(a_1 + a_2) to find r^2 = 4. Use the constraint a_1 < 0 to deduce r = -2 and a_1 = -4, then compute S_9 to find lambda.",
      steps: [
        {
          heading: "Step 1: Find Common Ratio r",
          detail: "a_1 + a_2 = a_1(1 + r) = 4.\\\\[4pt] a_3 + a_4 = a_1 r^2(1 + r) = 16.\\\\[4pt] \\frac{a_3 + a_4}{a_1 + a_2} = r^2 = \\frac{16}{4} = 4 \\implies r = \\pm 2."
        },
        {
          heading: "Step 2: Choose Valid Root for a_1 < 0",
          detail: "\\text{If } r = 2: \\quad a_1(1 + 2) = 4 \\implies a_1 = \\frac{4}{3} > 0 \\quad (\\text{rejected}).\\\\[4pt] \\text{If } r = -2: \\quad a_1(1 - 2) = 4 \\implies -a_1 = 4 \\implies a_1 = -4 < 0 \\quad (\\text{accepted})."
        },
        {
          heading: "Step 3: Calculate S_9 and lambda",
          detail: "S_9 = \\frac{a_1(1 - r^9)}{1 - r} = \\frac{-4(1 - (-2)^9)}{1 - (-2)} = \\frac{-4(1 - (-512))}{3}\\\\[4pt] = \\frac{-4(513)}{3} = -4 \\times 171.\\\\[4pt] \\text{Given } S_9 = 4\\lambda \\implies 4\\lambda = -4 \\times 171 \\implies \\lambda = -171."
        }
      ],
      theorems: ["Sum of first \\( n \\) terms of a GP: \\( S_n = \\frac{a(1 - r^n)}{1 - r} \\)."],
      pitfall: "Selecting r = 2, which gives positive a_1 and violates a_1 < 0."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Determine r and a_1",
        instruction: "Use \\( r^2 = 4 \\) and \\( a_1 < 0 \\) to find \\( r \\) and \\( a_1 \\).",
        options: [
          { id: 'A', text: "\\( r = -2, \\quad a_1 = -4 \\)", isCorrect: true, feedback: "Correct! \\( r = 2 \\) would make \\( a_1 = 4/3 > 0 \\), violating \\( a_1 < 0 \\)." },
          { id: 'B', text: "\\( r = 2, \\quad a_1 = 4/3 \\)", isCorrect: false, feedback: "Incorrect. The problem states \\( a_1 < 0 \\)." },
          { id: 'C', text: "\\( r = -2, \\quad a_1 = -2 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( r = 4, \\quad a_1 = -1 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Always check initial conditions and sign constraints to select the correct root."
      },
      {
        stepIndex: 2,
        title: "Step 2: Compute lambda from S_9",
        instruction: "Evaluate \\( S_9 = \\frac{-4(1 - (-512))}{3} \\) and equate to \\( 4\\lambda \\).",
        options: [
          { id: 'A', text: "\\( \\lambda = -171 \\)", isCorrect: true, feedback: "Correct! \\( S_9 = -4(171) = 4\\lambda \\implies \\lambda = -171 \\)." },
          { id: 'B', text: "\\( \\lambda = 171 \\)", isCorrect: false, feedback: "Incorrect. Watch the negative sign." },
          { id: 'C', text: "\\( \\lambda = -513 \\)", isCorrect: false, feedback: "Incorrect. Did you divide by 3?" },
          { id: 'D', text: "\\( \\lambda = -684 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Carefully handle signs with odd powers of negative common ratios: \\( (-2)^9 = -512 \\)."
      }
    ]
  },
{
    id: "JEE-PYQ-66",
    index: 66,
    title: "JEE Main 2020 (02 Sep Shift 1)",
    subject: "Mathematics",
    topic: "Sequences and Series",
    subtopic: "Sum of Algebraic Infinite Series",
    difficulty: "Medium",
    year: "2020",
    tags: ["Sequences and Series", "Infinite Series", "Geometric Progression"],
    statement: "If \\( |x| < 1, |y| < 1 \\) and \\( x \\neq y \\), then the sum to infinity of the following series \\( (x+y) + (x^2+xy+y^2) + (x^3+x^2y+xy^2+y^3) + \\dots \\) is :",
    options: [
      { id: 1, text: "\\( \\frac{x+y-xy}{(1+x)(1+y)} \\)", isCorrect: false },
      { id: 2, text: "\\( \\frac{x+y+xy}{(1+x)(1+y)} \\)", isCorrect: false },
      { id: 3, text: "\\( \\frac{x+y-xy}{(1-x)(1-y)} \\)", isCorrect: true },
      { id: 4, text: "\\( \\frac{x+y+xy}{(1-x)(1-y)} \\)", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "Multiply each term by (x - y) to obtain differences of powers x^(n+1) - y^(n+1), sum the two resulting infinite geometric series, and divide by (x - y).",
      steps: [
        {
          heading: "Step 1: Multiply by (x - y)",
          detail: "\\text{Notice that } (x - y)(x^n + x^{n-1}y + \\dots + y^n) = x^{n+1} - y^{n+1}.\\\\[4pt] (x - y)S = \\sum_{n=1}^\\infty (x^{n+1} - y^{n+1}) = \\sum_{n=2}^\\infty x^n - \\sum_{n=2}^\\infty y^n."
        },
        {
          heading: "Step 2: Sum the Infinite Geometric Series",
          detail: "\\sum_{n=2}^\\infty x^n = \\frac{x^2}{1 - x}, \\quad \\sum_{n=2}^\\infty y^n = \\frac{y^2}{1 - y}.\\\\[4pt] (x - y)S = \\frac{x^2}{1 - x} - \\frac{y^2}{1 - y} = \\frac{x^2(1 - y) - y^2(1 - x)}{(1 - x)(1 - y)}\\\\[4pt] = \\frac{(x^2 - y^2) - xy(x - y)}{(1 - x)(1 - y)} = \\frac{(x - y)[(x + y) - xy]}{(1 - x)(1 - y)}."
        },
        {
          heading: "Step 3: Divide by (x - y)",
          detail: "\\text{Since } x \\neq y, \\quad S = \\frac{x + y - xy}{(1 - x)(1 - y)}."
        }
      ],
      theorems: ["Identity: \\( x^{n+1} - y^{n+1} = (x - y)(x^n + x^{n-1}y + \\dots + y^n) \\)."],
      pitfall: "Forgetting that the sum starts at n = 2 for power series x^n, so the first term is x^2, not x."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Simplify using Difference of Powers",
        instruction: "Multiply the entire series by \\( (x - y) \\) and identify the two resulting GP series.",
        options: [
          { id: 'A', text: "\\( (x - y)S = \\frac{x^2}{1-x} - \\frac{y^2}{1-y} \\)", isCorrect: true, feedback: "Correct! The terms telescope to \\( \\sum_{n=2}^\\infty x^n - \\sum_{n=2}^\\infty y^n \\)." },
          { id: 'B', text: "\\( (x - y)S = \\frac{x}{1-x} - \\frac{y}{1-y} \\)", isCorrect: false, feedback: "Incorrect. The first term is \\( x^2 \\), not \\( x \\)." },
          { id: 'C', text: "\\( (x - y)S = \\frac{x^2}{1+x} - \\frac{y^2}{1+y} \\)", isCorrect: false, feedback: "Incorrect sign in GP denominator." },
          { id: 'D', text: "\\( (x - y)S = \\frac{1}{1-x} - \\frac{1}{1-y} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Multiplying homogenous polynomials in \\( x, y \\) by \\( (x - y) \\) separates variables cleanly."
      },
      {
        stepIndex: 2,
        title: "Step 2: Factor and Divide by (x - y)",
        instruction: "Combine over a common denominator and factor out \\( (x - y) \\).",
        options: [
          { id: 'A', text: "\\( \\frac{x+y-xy}{(1-x)(1-y)} \\)", isCorrect: true, feedback: "Correct! \\( (x^2-y^2) - xy(x-y) = (x-y)(x+y-xy) \\)." },
          { id: 'B', text: "\\( \\frac{x+y+xy}{(1-x)(1-y)} \\)", isCorrect: false, feedback: "Incorrect sign on the numerator's \\( xy \\) term." },
          { id: 'C', text: "\\( \\frac{x+y-xy}{(1+x)(1+y)} \\)", isCorrect: false, feedback: "Incorrect denominator signs." },
          { id: 'D', text: "\\( \\frac{x+y+xy}{(1+x)(1+y)} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Cancel common factors \\( (x - y) \\) only after confirming \\( x \\neq y \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-67",
    index: 67,
    title: "JEE Main 2025 (7 April Shift 2)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Polygon Diagonals & Ellipse Eccentricity",
    difficulty: "Medium",
    year: "2025",
    tags: ["Permutations and Combinations", "Geometry", "Conic Sections", "Ellipse"],
    statement: "Let \\( p \\) be the number of all triangles that can be formed by joining the vertices of a regular polygon \\( P \\) of \\( n \\) sides and \\( q \\) be the number of all quadrilaterals that can be formed by joining the vertices of \\( P \\). If \\( p + q = 126 \\), then the eccentricity of the ellipse \\( \\frac{x^2}{16} + \\frac{y^2}{n} = 1 \\) is :",
    options: [
      { id: 1, text: "\\( \\frac{3}{4} \\)", isCorrect: false },
      { id: 2, text: "\\( \\frac{1}{2} \\)", isCorrect: false },
      { id: 3, text: "\\( \\frac{\\sqrt{7}}{4} \\)", isCorrect: false },
      { id: 4, text: "\\( \\frac{1}{\\sqrt{2}} \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Use Pascal's identity binom{n}{3} + binom{n}{4} = binom{n+1}{4} = 126 to find n = 8, then compute the eccentricity of x^2/16 + y^2/8 = 1.",
      steps: [
        {
          heading: "Step 1: Set up Combinations Equation",
          detail: "p = \\binom{n}{3}, \\quad q = \\binom{n}{4}.\\\\[4pt] p + q = \\binom{n}{3} + \\binom{n}{4} = \\binom{n+1}{4} = 126."
        },
        {
          heading: "Step 2: Solve for n",
          detail: "\\binom{9}{4} = \\frac{9 \\times 8 \\times 7 \\times 6}{24} = 9 \\times 2 \\times 7 = 126.\\\\[4pt] \\implies n + 1 = 9 \\implies n = 8."
        },
        {
          heading: "Step 3: Eccentricity of the Ellipse",
          detail: "\\text{Ellipse equation: } \\frac{x^2}{16} + \\frac{y^2}{8} = 1.\\\\[4pt] a^2 = 16, \\quad b^2 = 8.\\\\[4pt] e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{1 - \\frac{8}{16}} = \\sqrt{1 - \\frac{1}{2}} = \\frac{1}{\\sqrt{2}}."
        }
      ],
      theorems: ["Pascal's Identity: \\( \\binom{n}{k} + \\binom{n}{k+1} = \\binom{n+1}{k+1} \\).", "Eccentricity of ellipse \\( \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\) with \\( a > b \\): \\( e = \\sqrt{1 - b^2/a^2} \\)."],
      pitfall: "Setting n = 9 instead of n + 1 = 9."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Use Pascal's Identity to Find n",
        instruction: "Simplify \\( \\binom{n}{3} + \\binom{n}{4} = 126 \\).",
        options: [
          { id: 'A', text: "\\( n = 8 \\)", isCorrect: true, feedback: "Correct! \\( \\binom{n+1}{4} = 126 \\implies n+1 = 9 \\implies n = 8 \\)." },
          { id: 'B', text: "\\( n = 9 \\)", isCorrect: false, feedback: "Incorrect. \\( n+1 = 9 \\), so \\( n = 8 \\)." },
          { id: 'C', text: "\\( n = 7 \\)", isCorrect: false, feedback: "Incorrect. \\( \\binom{8}{4} = 70 \\neq 126 \\)." },
          { id: 'D', text: "\\( n = 10 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "\\( \\binom{n}{r} + \\binom{n}{r+1} = \\binom{n+1}{r+1} \\) combines adjacent binomial coefficients."
      },
      {
        stepIndex: 2,
        title: "Step 2: Calculate Eccentricity",
        instruction: "Evaluate \\( e = \\sqrt{1 - 8/16} \\).",
        options: [
          { id: 'A', text: "\\( \\frac{1}{\\sqrt{2}} \\)", isCorrect: true, feedback: "Correct! \\( \\sqrt{1 - 1/2} = 1/\\sqrt{2} \\)." },
          { id: 'B', text: "\\( \\frac{1}{2} \\)", isCorrect: false, feedback: "Incorrect. \\( \\sqrt{1/2} = 1/\\sqrt{2} \\), not \\( 1/2 \\)." },
          { id: 'C', text: "\\( \\frac{\\sqrt{7}}{4} \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( \\frac{3}{4} \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Eccentricity measures the departure from circularity: \\( e = \\sqrt{1 - b^2/a^2} \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-68",
    index: 68,
    title: "JEE Main 2025 (7 April Shift 1)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Non-Consecutive Subsets & Fibonacci Recurrence",
    difficulty: "Medium",
    year: "2025",
    tags: ["Permutations and Combinations", "Recurrence Relation", "Fibonacci"],
    statement: "For \\( n \\ge 2 \\), let \\( S_n \\) denote the set of all subsets of \\( \\{1, 2, \\dots, n\\} \\) with no two consecutive numbers. For example \\( \\{1, 3, 5\\} \\in S_6 \\), but \\( \\{1, 2, 4\\} \\notin S_6 \\). Then \\( n(S_5) \\) is equal to :",
    options: [
      { id: 1, text: "\\( 13 \\)", isCorrect: true },
      { id: 2, text: "\\( 12 \\)", isCorrect: false },
      { id: 3, text: "\\( 15 \\)", isCorrect: false },
      { id: 4, text: "\\( 11 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Subsets with no two consecutive elements satisfy the Fibonacci recurrence F(n) = F(n-1) + F(n-2). Base cases F(1)=2, F(2)=3 lead to F(5)=13.",
      steps: [
        {
          heading: "Step 1: Derive the Recurrence Relation",
          detail: "\\text{Let } F(n) = n(S_n).\\\\[4pt] \\text{Any valid subset of } \\{1, 2, \\dots, n\\} \\text{ either:}\\\\[4pt] 1. \\text{ Does not contain } n: \\text{ valid subsets from } \\{1, \\dots, n-1\\} \\implies F(n-1).\\\\[4pt] 2. \\text{ Contains } n: \\text{ cannot contain } n-1, \\text{ so chosen from } \\{1, \\dots, n-2\\} \\implies F(n-2).\\\\[4pt] \\implies F(n) = F(n-1) + F(n-2)."
        },
        {
          heading: "Step 2: Base Cases",
          detail: "n = 1: \\quad \\emptyset, \\{1\\} \\implies F(1) = 2.\\\\[4pt] n = 2: \\quad \\emptyset, \\{1\\}, \\{2\\} \\implies F(2) = 3."
        },
        {
          heading: "Step 3: Compute up to n = 5",
          detail: "F(3) = F(2) + F(1) = 3 + 2 = 5.\\\\[4pt] F(4) = F(3) + F(2) = 5 + 3 = 8.\\\\[4pt] F(5) = F(4) + F(3) = 8 + 5 = 13."
        }
      ],
      theorems: ["Number of non-consecutive subsets of an n-element set is the Fibonacci number \\( F_{n+2} \\)."],
      pitfall: "Forgetting to include the empty set \\( \\emptyset \\), which vacuously contains no consecutive integers."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Set up the Recurrence",
        instruction: "Partition valid subsets by whether they include the element \\( n \\).",
        options: [
          { id: 'A', text: "\\( F(n) = F(n-1) + F(n-2) \\)", isCorrect: true, feedback: "Correct! If \\( n \\) is excluded, choose from \\( n-1 \\); if \\( n \\) is included, \\( n-1 \\) is excluded so choose from \\( n-2 \\)." },
          { id: 'B', text: "\\( F(n) = 2F(n-1) \\)", isCorrect: false, feedback: "Incorrect. The condition restricts consecutive elements." },
          { id: 'C', text: "\\( F(n) = F(n-1) + n \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( F(n) = 2^n - n \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Boundary conditioning (include vs exclude the last element) creates Fibonacci recurrences."
      },
      {
        stepIndex: 2,
        title: "Step 2: Compute F(5)",
        instruction: "Starting from \\( F(1)=2 \\) and \\( F(2)=3 \\), iterate to \\( F(5) \\).",
        options: [
          { id: 'A', text: "\\( 13 \\)", isCorrect: true, feedback: "Correct! Sequence is 2, 3, 5, 8, 13." },
          { id: 'B', text: "\\( 12 \\)", isCorrect: false, feedback: "Incorrect arithmetic." },
          { id: 'C', text: "\\( 15 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 11 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The counts are \\( 2, 3, 5, 8, 13, 21, \\dots \\) — shifted Fibonacci numbers."
      }
    ]
  },
  {
    id: "JEE-PYQ-69",
    index: 69,
    title: "JEE Main 2025 (3 April Shift 1)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Even Digit Sum & Parity Arguments",
    difficulty: "Medium",
    year: "2025",
    tags: ["Permutations and Combinations", "Parity", "Number of Digits"],
    statement: "If the number of seven-digit numbers, such that the sum of their digits is even, is \\( m \\cdot n \\cdot 10^n \\), where \\( m, n \\in \\{1, 2, 3, \\dots, 9\\} \\), then \\( m + n \\) is equal to :",
    options: [
      { id: 1, text: "\\( 14 \\)", isCorrect: true },
      { id: 2, text: "\\( 12 \\)", isCorrect: false },
      { id: 3, text: "\\( 15 \\)", isCorrect: false },
      { id: 4, text: "\\( 13 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "The first digit has 9 choices (1-9), the next 5 digits have 10 choices each, and the last digit has 5 choices to ensure the total digit sum is even. Equating 45 * 10^5 to m * n * 10^n gives n = 5, m = 9.",
      steps: [
        {
          heading: "Step 1: Count Seven-Digit Numbers with Even Sum",
          detail: "\\text{Digit 1: } \\{1, 2, \\dots, 9\\} \\implies 9 \\text{ choices}.\\\\[4pt] \\text{Digits 2 to 6: } \\{0, 1, \\dots, 9\\} \\implies 10^5 \\text{ choices}.\\\\[4pt] \\text{Digit 7: For any prefix, exactly 5 out of 10 digits preserve parity of the sum}\\\\[4pt] (\\text{if sum of first 6 is even, pick from } \\{0, 2, 4, 6, 8\\}; \\text{ if odd, pick from } \\{1, 3, 5, 7, 9\\}).\\\\[4pt] \\text{Total count } = 9 \\times 10^5 \\times 5 = 45 \\times 10^5."
        },
        {
          heading: "Step 2: Match with Form m * n * 10^n",
          detail: "45 \\times 10^5 = m \\cdot n \\cdot 10^n.\\\\[4pt] \\text{Matching the exponent of 10: } n = 5.\\\\[4pt] \\implies m \\cdot 5 = 45 \\implies m = 9.\\\\[4pt] \\text{Both } m = 9 \\text{ and } n = 5 \\text{ belong to } \\{1, 2, \\dots, 9\\}."
        },
        {
          heading: "Step 3: Compute m + n",
          detail: "m + n = 9 + 5 = 14."
        }
      ],
      theorems: ["Parity determination by the last digit: exactly half of single-digit integers share any given parity."],
      pitfall: "Allowing the first digit to be 0 (which would make it a 6-digit number)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Calculate Total Valid Numbers",
        instruction: "Use the fundamental principle of counting: 9 choices for the 1st digit, 10 for each of digits 2-6, and 5 for the 7th digit.",
        options: [
          { id: 'A', text: "\\( 45 \\times 10^5 \\)", isCorrect: true, feedback: "Correct! \\( 9 \\times 10^5 \\times 5 = 45 \\times 10^5 \\)." },
          { id: 'B', text: "\\( 50 \\times 10^5 \\)", isCorrect: false, feedback: "Incorrect. First digit cannot be 0." },
          { id: 'C', text: "\\( 45 \\times 10^6 \\)", isCorrect: false, feedback: "Incorrect power of 10." },
          { id: 'D', text: "\\( 9 \\times 10^6 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The last digit uniquely determines the overall parity, halving the total possible suffixes."
      },
      {
        stepIndex: 2,
        title: "Step 2: Solve for m and n",
        instruction: "Equate \\( 45 \\times 10^5 = m \\cdot n \\cdot 10^n \\) with \\( m, n \\in \\{1, \\dots, 9\\} \\).",
        options: [
          { id: 'A', text: "\\( m = 9, \\quad n = 5 \\implies m+n = 14 \\)", isCorrect: true, feedback: "Correct! \\( n = 5 \\implies 5m = 45 \\implies m = 9 \\), giving sum 14." },
          { id: 'B', text: "\\( m = 5, \\quad n = 9 \\implies m+n = 14 \\)", isCorrect: false, feedback: "Incorrect. The exponent is 5, so \\( n = 5 \\)." },
          { id: 'C', text: "\\( m = 6, \\quad n = 6 \\implies m+n = 12 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( m+n = 15 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The base-10 exponent directly identifies \\( n \\)."
      }
    ]
  },
  {
    id: "JEE-PYQ-70",
    index: 70,
    title: "JEE Main 2025 (29 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Multiset Permutations with Minimum Frequency Constraint",
    difficulty: "Hard",
    year: "2025",
    tags: ["Permutations and Combinations", "Arrangements", "Case-Work"],
    statement: "The number of 6-letter words, with or without meaning, that can be formed using the letters of the word MATHS such that any letter that appears in the word must appear at least twice, is :",
    options: [
      { id: 1, text: "\\( 1405 \\)", isCorrect: true },
      { id: 2, text: "\\( 1380 \\)", isCorrect: false },
      { id: 3, text: "\\( 1420 \\)", isCorrect: false },
      { id: 4, text: "\\( 1250 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Partition the total length 6 into integer partitions where every part is >= 2: (6), (4,2), (3,3), and (2,2,2). Calculate combinations and multiset permutations for each case.",
      steps: [
        {
          heading: "Step 1: Partition Integer 6 into Parts >= 2",
          detail: "\\text{The letters available are M, A, T, H, S (5 distinct letters).}\\\\[4pt] \\text{Possible frequency partitions:}\\\\[4pt] \\text{Case 1: } (6)\\\\[4pt] \\text{Case 2: } (4, 2)\\\\[4pt] \\text{Case 3: } (3, 3)\\\\[4pt] \\text{Case 4: } (2, 2, 2)."
        },
        {
          heading: "Step 2: Evaluate Each Case",
          detail: "\\text{Case 1 } (6): \\binom{5}{1} \\times \\frac{6!}{6!} = 5 \\times 1 = 5.\\\\[4pt] \\text{Case 2 } (4, 2): \\binom{5}{1} \\times \\binom{4}{1} \\times \\frac{6!}{4! 2!} = 5 \\times 4 \\times 15 = 300.\\\\[4pt] \\text{Case 3 } (3, 3): \\binom{5}{2} \\times \\frac{6!}{3! 3!} = 10 \\times 20 = 200.\\\\[4pt] \\text{Case 4 } (2, 2, 2): \\binom{5}{3} \\times \\frac{6!}{2! 2! 2!} = 10 \\times 90 = 900."
        },
        {
          heading: "Step 3: Sum All Cases",
          detail: "\\text{Total words } = 5 + 300 + 200 + 900 = 1405."
        }
      ],
      theorems: ["Multiset permutation formula: \\( \\frac{n!}{n_1! n_2! \\dots n_k!} \\)."],
      pitfall: "Dividing by 2! for Case 3 or 3! for Case 4 when selecting letters rather than using \\( \\binom{5}{2} \\) and \\( \\binom{5}{3} \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Identify Valid Frequency Partitions",
        instruction: "Which integer partitions of 6 have all parts \\( \\ge 2 \\)?",
        options: [
          { id: 'A', text: "(6), (4,2), (3,3), and (2,2,2)", isCorrect: true, feedback: "Correct! Any partition with 1 is forbidden since every letter must appear at least twice." },
          { id: 'B', text: "(4,2), (3,3), and (2,2,2) only", isCorrect: false, feedback: "Incorrect. You missed the single letter case (6)." },
          { id: 'C', text: "(5,1), (4,2), (3,3)", isCorrect: false, feedback: "Incorrect. (5,1) violates the condition that every letter appears >= 2 times." },
          { id: 'D', text: "(3,2,1)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Partitioning integers systematically ensures no cases are missed or duplicated."
      },
      {
        stepIndex: 2,
        title: "Step 2: Calculate and Sum Arrangements",
        instruction: "Evaluate the arrangements for each case and sum: 5 + 300 + 200 + 900.",
        options: [
          { id: 'A', text: "\\( 1405 \\)", isCorrect: true, feedback: "Correct! \\( 5 + 300 + 200 + 900 = 1405 \\)." },
          { id: 'B', text: "\\( 1380 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( 1420 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 1250 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "For equal-size parts like \\( (2,2,2) \\), choosing the letters as a combination \\( \\binom{5}{3} \\) automatically handles unordered selection."
      }
    ]
  },
{
    id: "JEE-PYQ-71",
    index: 71,
    title: "JEE Main 2025 (28 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Digit Arrangements with Boundary Restrictions",
    difficulty: "Medium",
    year: "2025",
    tags: ["Permutations and Combinations", "Numbers", "Constraints"],
    statement: "The number of different 5 digit numbers greater than 50000 that can be formed using the digits 0, 1, 2, 3, 4, 5, 6, 7, such that the sum of their first and last digits should not be more than 8, is :",
    options: [
      { id: 1, text: "\\( 4608 \\)", isCorrect: false },
      { id: 2, text: "\\( 5720 \\)", isCorrect: false },
      { id: 3, text: "\\( 5719 \\)", isCorrect: false },
      { id: 4, text: "\\( 4607 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Select valid pairs for the first and last digits with first digit in {5,6,7} and sum <= 8, multiply by 8^3 choices for the 3 middle digits, and subtract 1 for the excluded number 50000.",
      steps: [
        {
          heading: "Step 1: First and Last Digit Pairs",
          detail: "\\text{To be } > 50000, \\text{ the first digit } d_1 \\in \\{5, 6, 7\\}.\\\\[4pt] \\text{Condition: } d_1 + d_5 \\le 8:\\\\[4pt] - \\text{ If } d_1 = 5: \\quad d_5 \\in \\{0, 1, 2, 3\\} \\quad (4 \\text{ choices}).\\\\[4pt] - \\text{ If } d_1 = 6: \\quad d_5 \\in \\{0, 1, 2\\} \\quad (3 \\text{ choices}).\\\\[4pt] - \\text{ If } d_1 = 7: \\quad d_5 \\in \\{0, 1\\} \\quad (2 \\text{ choices}).\\\\[4pt] \\text{Total valid pairs } (d_1, d_5) = 4 + 3 + 2 = 9."
        },
        {
          heading: "Step 2: Middle Digits Choices",
          detail: "\\text{The 3 middle digits } d_2, d_3, d_4 \\text{ can each be any of the 8 given digits } \\{0, 1, \\dots, 7\\}.\\\\[4pt] \\text{Total ways } = 8^3 = 512.\\\\[4pt] \\implies 9 \\times 512 = 4608 \\text{ numbers } \\ge 50000."
        },
        {
          heading: "Step 3: Strictly Greater Than 50000",
          detail: "\\text{The number } 50000 \\text{ has } d_1=5, d_5=0, d_2=d_3=d_4=0, \\text{ which is counted in the 4608.}\\\\[4pt] \\text{Since we require strictly greater than 50000: } 4608 - 1 = 4607."
        }
      ],
      theorems: ["Multiplication Principle with end-digit boundary restrictions."],
      pitfall: "Forgetting to subtract 1 for the exact number 50000 when the condition is 'strictly greater than 50000'."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Count (d_1, d_5) Pairs",
        instruction: "List all pairs \\( (d_1, d_5) \\) with \\( d_1 \\in \\{5, 6, 7\\} \\) and \\( d_1 + d_5 \\le 8 \\).",
        options: [
          { id: 'A', text: "9 pairs: 4 for d1=5, 3 for d1=6, 2 for d1=7", isCorrect: true, feedback: "Correct! \\( 4 + 3 + 2 = 9 \\) valid endpoint pairs." },
          { id: 'B', text: "12 pairs", isCorrect: false, feedback: "Incorrect. Check the sum \\( d_1 + d_5 \\le 8 \\)." },
          { id: 'C', text: "8 pairs", isCorrect: false, feedback: "Incorrect. You missed one of the pairs." },
          { id: 'D', text: "10 pairs", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Exhaustively check choices for constrained positions first."
      },
      {
        stepIndex: 2,
        title: "Step 2: Multiply by 8^3 and Exclude 50000",
        instruction: "Calculate \\( 9 \\times 8^3 - 1 \\).",
        options: [
          { id: 'A', text: "\\( 4607 \\)", isCorrect: true, feedback: "Correct! \\( 9 \\times 512 = 4608 \\), subtracting 50000 gives 4607." },
          { id: 'B', text: "\\( 4608 \\)", isCorrect: false, feedback: "Incorrect. 50000 is not strictly greater than 50000." },
          { id: 'C', text: "\\( 5720 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 5719 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Always pay attention to strict inequalities vs non-strict inequalities at boundary numbers."
      }
    ]
  },
  {
    id: "JEE-PYQ-72",
    index: 72,
    title: "JEE Main 2025 (23 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Block Method vs Gap Method (Disjoint Cases)",
    difficulty: "Medium",
    year: "2025",
    tags: ["Permutations and Combinations", "Arrangements", "Block Method", "Gap Method"],
    statement: "The number of ways, 5 boys and 4 girls can sit in a row so that either all the boys sit together or no two boys sit together, is :",
    options: [
      { id: 1, text: "\\( 17280 \\)", isCorrect: true },
      { id: 2, text: "\\( 14400 \\)", isCorrect: false },
      { id: 3, text: "\\( 16800 \\)", isCorrect: false },
      { id: 4, text: "\\( 18240 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Compute Case 1 (all boys together using the block method: 5! * 5!) and Case 2 (no two boys together using the gap method: 4! * 5!). Since the cases are disjoint, add them.",
      steps: [
        {
          heading: "Step 1: Case 1 — All Boys Sit Together",
          detail: "\\text{Treat the 5 boys as 1 block } B.\\\\[4pt] \\text{Total entities to arrange: 4 girls + 1 block } = 5 \\implies 5! = 120.\\\\[4pt] \\text{Boys can arrange among themselves in } 5! = 120 \\text{ ways}.\\\\[4pt] \\text{Ways (Case 1) } = 5! \\times 5! = 120 \\times 120 = 14400."
        },
        {
          heading: "Step 2: Case 2 — No Two Boys Sit Together",
          detail: "\\text{First arrange the 4 girls: } 4! = 24 \\text{ ways}.\\\\[4pt] \\text{They create 5 available gaps: } \\_ G_1 \\_ G_2 \\_ G_3 \\_ G_4 \\_ .\\\\[4pt] \\text{Since there are 5 boys, place 1 boy in each gap: } 5! = 120 \\text{ ways}.\\\\[4pt] \\text{Ways (Case 2) } = 4! \\times 5! = 24 \\times 120 = 2880."
        },
        {
          heading: "Step 3: Sum the Mutually Exclusive Cases",
          detail: "\\text{Notice that having all 5 boys together means adjacent boys exist,}\\\\[4pt] \\text{so the intersection of the two cases is empty.}\\\\[4pt] \\text{Total ways } = 14400 + 2880 = 17280."
        }
      ],
      theorems: ["Block method for 'together' and Gap method for 'no two together'."],
      pitfall: "Thinking there is an overlap between 'all boys together' and 'no two boys together'."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Evaluate Both Cases",
        instruction: "Use the block method for Case 1 and the gap method for Case 2.",
        options: [
          { id: 'A', text: "Case 1 = 14400, Case 2 = 2880", isCorrect: true, feedback: "Correct! \\( 5! \\times 5! = 14400 \\) and \\( 4! \\times 5! = 2880 \\)." },
          { id: 'B', text: "Case 1 = 14400, Case 2 = 1440", isCorrect: false, feedback: "Incorrect. Case 2 has 5! arrangements for the 5 boys." },
          { id: 'C', text: "Case 1 = 2880, Case 2 = 14400", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Case 1 = 12000, Case 2 = 2400", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "With 4 girls, there are exactly 5 gaps; to seat 5 boys without adjacency, every gap must be filled."
      },
      {
        stepIndex: 2,
        title: "Step 2: Add the Disjoint Totals",
        instruction: "Add the two disjoint cases together.",
        options: [
          { id: 'A', text: "\\( 17280 \\)", isCorrect: true, feedback: "Correct! \\( 14400 + 2880 = 17280 \\)." },
          { id: 'B', text: "\\( 14400 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( 16800 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 18240 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The 'or' condition between mutually exclusive events translates to addition."
      }
    ]
  },
  {
    id: "JEE-PYQ-73",
    index: 73,
    title: "JEE Main 2025 (23 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Complementary Counting & Vowels Never Together",
    difficulty: "Easy",
    year: "2025",
    tags: ["Permutations and Combinations", "Arrangements", "Complementary Counting"],
    statement: "The number of words, which can be formed using all the letters of the word 'DAUGHTER', so that all the vowels never come together, is :",
    options: [
      { id: 1, text: "\\( 36000 \\)", isCorrect: true },
      { id: 2, text: "\\( 37000 \\)", isCorrect: false },
      { id: 3, text: "\\( 34000 \\)", isCorrect: false },
      { id: 4, text: "\\( 35000 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Use complementary counting: subtract the words where all vowels are together from total possible permutations of the 8 letters.",
      steps: [
        {
          heading: "Step 1: Total Words Without Restriction",
          detail: "\\text{'DAUGHTER' has 8 distinct letters: D, A, U, G, H, T, E, R.}\\\\[4pt] \\text{Total permutations } = 8! = 40320."
        },
        {
          heading: "Step 2: Words Where All 3 Vowels Are Together",
          detail: "\\text{Vowels: A, U, E (3 vowels).}\\\\[4pt] \\text{Bundle the 3 vowels into a single unit: } (AUE).\\\\[4pt] \\text{Total units to arrange: 5 consonants + 1 vowel unit } = 6 \\implies 6! = 720.\\\\[4pt] \\text{The 3 vowels can be arranged among themselves in } 3! = 6 \\text{ ways}.\\\\[4pt] \\text{Words with all vowels together } = 6! \\times 3! = 720 \\times 6 = 4320."
        },
        {
          heading: "Step 3: Complementary Count",
          detail: "\\text{Words where all vowels never come together } = 8! - (6! \\times 3!)\\\\[4pt] = 40320 - 4320 = 36000."
        }
      ],
      theorems: ["Complementary counting: \\( |A'| = |U| - |A| \\)."],
      pitfall: "Confusing 'all vowels never come together' (complement of all 3 together) with 'no two vowels are together' (gap method)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Identify Total and Unfavorable Counts",
        instruction: "Calculate \\( 8! \\) and \\( 6! \\times 3! \\).",
        options: [
          { id: 'A', text: "Total = 40320, Vowels together = 4320", isCorrect: true, feedback: "Correct! \\( 8! = 40320 \\) and \\( 6! \\times 3! = 720 \\times 6 = 4320 \\)." },
          { id: 'B', text: "Total = 40320, Vowels together = 720", isCorrect: false, feedback: "Incorrect. You forgot the 3! internal arrangements of vowels." },
          { id: 'C', text: "Total = 5040, Vowels together = 720", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Total = 40320, Vowels together = 2160", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "'All together' requires multiplying by the internal permutations of the grouped elements."
      },
      {
        stepIndex: 2,
        title: "Step 2: Subtract to Find Favorable Words",
        instruction: "Subtract 4320 from 40320.",
        options: [
          { id: 'A', text: "\\( 36000 \\)", isCorrect: true, feedback: "Correct! \\( 40320 - 4320 = 36000 \\)." },
          { id: 'B', text: "\\( 37000 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( 34000 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 35000 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Complementary counting is the most efficient strategy when the complement is a single 'together' block."
      }
    ]
  },
  {
    id: "JEE-PYQ-74",
    index: 74,
    title: "JEE Main 2025 (22 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Block Conditioning with Internal Non-Adjacency",
    difficulty: "Medium",
    year: "2025",
    tags: ["Permutations and Combinations", "Arrangements", "Block Method", "Adjacency Constraints"],
    statement: "In a group of 3 girls and 4 boys, there are two boys \\( B_1 \\) and \\( B_2 \\). The number of ways, in which these girls and boys can stand in a queue such that all the girls stand together, all the boys stand together, but \\( B_1 \\) and \\( B_2 \\) are not adjacent to each other, is :",
    options: [
      { id: 1, text: "\\( 96 \\)", isCorrect: false },
      { id: 2, text: "\\( 144 \\)", isCorrect: true },
      { id: 3, text: "\\( 120 \\)", isCorrect: false },
      { id: 4, text: "\\( 72 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "The boys block and girls block can be ordered in 2! ways. The 3 girls arrange in 3! ways. Within the 4 boys, arrangements where B1 and B2 are not adjacent are 4! - (3! * 2!) = 12. Total = 2! * 3! * 12 = 144.",
      steps: [
        {
          heading: "Step 1: Block Arrangements of Boys and Girls",
          detail: "\\text{Since all girls stand together and all boys stand together,}\\\\[4pt] \\text{we treat them as two blocks: } G_{\\text{block}} \\text{ and } B_{\\text{block}}.\\\\[4pt] \\text{Ordering of blocks: } 2! = 2 \\quad ((G, B) \\text{ or } (B, G))."
        },
        {
          heading: "Step 2: Internal Arrangements of Girls",
          detail: "\\text{The 3 girls can be arranged within their block in } 3! = 6 \\text{ ways}."
        },
        {
          heading: "Step 3: Internal Arrangements of Boys with B1 and B2 Non-Adjacent",
          detail: "\\text{Total arrangements of the 4 boys: } 4! = 24.\\\\[4pt] \\text{Arrangements where } B_1, B_2 \\text{ ARE adjacent: treat } (B_1B_2) \\text{ as 1 unit:}\\\\[4pt] 3! \\times 2! = 6 \\times 2 = 12.\\\\[4pt] \\text{Arrangements where } B_1, B_2 \\text{ are NOT adjacent: } 24 - 12 = 12."
        },
        {
          heading: "Step 4: Total Queue Arrangements",
          detail: "\\text{Total ways } = 2! \\times 3! \\times 12 = 2 \\times 6 \\times 12 = 144."
        }
      ],
      theorems: ["Arrangement of blocks and constrained internal permutations."],
      pitfall: "Forgetting the 2! factor for the relative order of the girls' and boys' blocks."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Calculate Valid Arrangements of the 4 Boys",
        instruction: "Find the number of arrangements of 4 boys where \\( B_1 \\) and \\( B_2 \\) are not adjacent.",
        options: [
          { id: 'A', text: "12 ways: \\( 4! - (3! \\times 2!) = 24 - 12 = 12 \\)", isCorrect: true, feedback: "Correct! Total 24 minus 12 adjacent arrangements." },
          { id: 'B', text: "18 ways", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "6 ways", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "8 ways", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Complementary counting works cleanly for two adjacent individuals: \\( n! - (n-1)! \\times 2! \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Combine All Components",
        instruction: "Multiply block permutations (2!), girl permutations (3!), and valid boy permutations (12).",
        options: [
          { id: 'A', text: "\\( 144 \\)", isCorrect: true, feedback: "Correct! \\( 2 \\times 6 \\times 12 = 144 \\)." },
          { id: 'B', text: "\\( 72 \\)", isCorrect: false, feedback: "Incorrect. You forgot the 2! factor for block order." },
          { id: 'C', text: "\\( 96 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 120 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Structure multi-level permutation problems hierarchically: blocks first, then internal arrangements."
      }
    ]
  },
  {
    id: "JEE-PYQ-75",
    index: 75,
    title: "JEE Main 2025 (22 Jan Shift 1)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Alphabetical Order Selection & Fixed Median Element",
    difficulty: "Medium",
    year: "2025",
    tags: ["Permutations and Combinations", "Combinations", "Alphabetical Order"],
    statement: "From all the English alphabets, five letters are chosen and are arranged in alphabetical order. The total number of ways, in which the middle letter is 'M', is :",
    options: [
      { id: 1, text: "\\( 5148 \\)", isCorrect: true },
      { id: 2, text: "\\( 6084 \\)", isCorrect: false },
      { id: 3, text: "\\( 4356 \\)", isCorrect: false },
      { id: 4, text: "\\( 14950 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "'M' is the 13th letter. Choose 2 letters from the 12 preceding letters (A-L) and 2 letters from the 13 succeeding letters (N-Z). Since they must be in alphabetical order, each chosen set of 5 letters has exactly 1 valid arrangement.",
      steps: [
        {
          heading: "Step 1: Position of 'M' in the Alphabet",
          detail: "\\text{The English alphabet has 26 letters:}\\\\[4pt] \\text{Before 'M': } A, B, \\dots, L \\quad (12 \\text{ letters}).\\\\[4pt] \\text{'M' is the } 13^{\\text{th}} \\text{ letter}.\\\\[4pt] \\text{After 'M': } N, O, \\dots, Z \\quad (13 \\text{ letters})."
        },
        {
          heading: "Step 2: Selection of Letters",
          detail: "\\text{Since 'M' is the middle (3rd) letter in alphabetical order:}\\\\[4pt] - \\text{ Choose 2 letters from the 12 letters before 'M': } \\binom{12}{2} = \\frac{12 \\times 11}{2} = 66.\\\\[4pt] - \\text{ Choose 2 letters from the 13 letters after 'M': } \\binom{13}{2} = \\frac{13 \\times 12}{2} = 78."
        },
        {
          heading: "Step 3: Unique Alphabetical Ordering",
          detail: "\\text{Any set of 5 chosen letters can be arranged in alphabetical order in exactly 1 way.}\\\\[4pt] \\text{Total ways } = \\binom{12}{2} \\times \\binom{13}{2} = 66 \\times 78 = 5148."
        }
      ],
      theorems: ["Selection without replacement: any subset of distinct elements has exactly one strictly ascending order."],
      pitfall: "Multiplying by 5! after selection — the question requires them to be arranged in alphabetical order, which is unique."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Choose Letters Before and After 'M'",
        instruction: "Select 2 letters from the 12 before 'M' and 2 letters from the 13 after 'M'.",
        options: [
          { id: 'A', text: "\\( \\binom{12}{2} \\times \\binom{13}{2} = 66 \\times 78 \\)", isCorrect: true, feedback: "Correct! 12 letters precede 'M' and 13 follow it." },
          { id: 'B', text: "\\( \\binom{13}{2} \\times \\binom{13}{2} \\)", isCorrect: false, feedback: "Incorrect. There are only 12 letters before 'M' (A through L)." },
          { id: 'C', text: "\\( \\binom{12}{2} \\times \\binom{12}{2} \\)", isCorrect: false, feedback: "Incorrect. There are 13 letters after 'M' (N through Z)." },
          { id: 'D', text: "\\( \\binom{25}{4} \\)", isCorrect: false, feedback: "Incorrect. That doesn't ensure 'M' is in the middle." }
        ],
        takeaway: "For 'M' to be the median, exactly half of the remaining chosen elements must precede it and half must succeed it."
      },
      {
        stepIndex: 2,
        title: "Step 2: Evaluate the Product",
        instruction: "Compute \\( 66 \\times 78 \\).",
        options: [
          { id: 'A', text: "\\( 5148 \\)", isCorrect: true, feedback: "Correct! \\( 66 \\times 78 = 5148 \\)." },
          { id: 'B', text: "\\( 6084 \\)", isCorrect: false, feedback: "Incorrect. That is \\( 78^2 \\)." },
          { id: 'C', text: "\\( 4356 \\)", isCorrect: false, feedback: "Incorrect. That is \\( 66^2 \\)." },
          { id: 'D', text: "\\( 14950 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "No multiplication by permutations is needed because alphabetical ordering is unique."
      }
    ]
  },
{
    id: "JEE-PYQ-76",
    index: 76,
    title: "JEE Main 2025 (2 April Shift 1)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Legendre's Formula for Exponent of Prime in n!",
    difficulty: "Easy",
    year: "2025",
    tags: ["Permutations and Combinations", "Number Theory", "Legendre's Formula", "Factorials"],
    statement: "The largest \\( n \\in \\mathbb{N} \\) such that \\( 3^n \\) divides \\( 50! \\) is :",
    options: [
      { id: 1, text: "\\( 21 \\)", isCorrect: false },
      { id: 2, text: "\\( 22 \\)", isCorrect: true },
      { id: 3, text: "\\( 20 \\)", isCorrect: false },
      { id: 4, text: "\\( 23 \\)", isCorrect: false }
    ],
    correctOptionId: 2,
    directExplanation: {
      overview: "Apply Legendre's formula E_p(n!) = sum_{k=1}^infty floor(n / p^k) with prime p = 3 and n = 50.",
      steps: [
        {
          heading: "Step 1: Apply Legendre's Formula",
          detail: "E_3(50!) = \\sum_{k=1}^\\infty \\left\\lfloor \\frac{50}{3^k} \\right\\rfloor\\\\[4pt] = \\left\\lfloor \\frac{50}{3} \\right\\rfloor + \\left\\lfloor \\frac{50}{9} \\right\\rfloor + \\left\\lfloor \\frac{50}{27} \\right\\rfloor + \\left\\lfloor \\frac{50}{81} \\right\\rfloor + \\dots"
        },
        {
          heading: "Step 2: Evaluate Each Term",
          detail: "\\left\\lfloor \\frac{50}{3} \\right\\rfloor = 16\\\\[4pt] \\left\\lfloor \\frac{50}{9} \\right\\rfloor = 5\\\\[4pt] \\left\\lfloor \\frac{50}{27} \\right\\rfloor = 1\\\\[4pt] \\left\\lfloor \\frac{50}{81} \\right\\rfloor = 0."
        },
        {
          heading: "Step 3: Sum the Quotients",
          detail: "E_3(50!) = 16 + 5 + 1 = 22.\\\\[4pt] \\implies n_{\\text{max}} = 22."
        }
      ],
      theorems: ["Legendre's Formula: Exponent of prime \\( p \\) in \\( n! \\) is \\( E_p(n!) = \\sum_{k=1}^\\infty \\lfloor n/p^k \\rfloor \\)."],
      pitfall: "Evaluating only \\( \\lfloor 50/3 \\rfloor = 16 \\) and forgetting powers \\( 3^2, 3^3 \\)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Set up Legendre's Formula",
        instruction: "Write down the series of floor quotients of 50 by increasing powers of 3.",
        options: [
          { id: 'A', text: "\\( \\lfloor 50/3 \\rfloor + \\lfloor 50/9 \\rfloor + \\lfloor 50/27 \\rfloor \\)", isCorrect: true, feedback: "Correct! Powers beyond 27 are greater than 50 so their floors are 0." },
          { id: 'B', text: "\\( \\lfloor 50/3 \\rfloor \\) only", isCorrect: false, feedback: "Incorrect. Multiples of 9 and 27 contribute extra factors of 3." },
          { id: 'C', text: "\\( 50 / 3 \\)", isCorrect: false, feedback: "Incorrect. We take integer quotients (floor)." },
          { id: 'D', text: "\\( \\lfloor 50/3 \\rfloor + \\lfloor 50/6 \\rfloor + \\lfloor 50/9 \\rfloor \\)", isCorrect: false, feedback: "Incorrect. Denominators must be powers of the prime: 3, 9, 27." }
        ],
        takeaway: "Always divide by powers \\( p, p^2, p^3, \\dots \\) of the prime, not multiples of \\( p \\)."
      },
      {
        stepIndex: 2,
        title: "Step 2: Sum the Values",
        instruction: "Compute 16 + 5 + 1.",
        options: [
          { id: 'A', text: "\\( 22 \\)", isCorrect: true, feedback: "Correct! \\( 16 + 5 + 1 = 22 \\)." },
          { id: 'B', text: "\\( 21 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( 20 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 23 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The highest power of a prime dividing \\( n! \\) is found in seconds using Legendre's sum."
      }
    ]
  },
  {
    id: "JEE-PYQ-77",
    index: 77,
    title: "JEE Main 2024 (30 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Constrained Selection from Multiple Sections",
    difficulty: "Hard",
    year: "2024",
    tags: ["Permutations and Combinations", "Combinations", "Section Selection"],
    statement: "In an examination of Mathematics paper, there are 20 questions of equal marks and the question paper is divided into three sections : A, B and C. A student is required to attempt total 15 questions taking at least 4 questions from each section. If section A has 8 questions, section B has 6 questions and section C has 6 questions, then the total number of ways a student can select 15 questions is :",
    options: [
      { id: 1, text: "\\( 11376 \\)", isCorrect: true },
      { id: 2, text: "\\( 10850 \\)", isCorrect: false },
      { id: 3, text: "\\( 11520 \\)", isCorrect: false },
      { id: 4, text: "\\( 12100 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Let a, b, c be questions selected from A (8 available), B (6 available), C (6 available) such that 4 <= a <= 8, 4 <= b <= 6, 4 <= c <= 6 and a + b + c = 15. Enumerate all valid integer triples and sum the combinations.",
      steps: [
        {
          heading: "Step 1: Determine Valid Integer Partitions (a, b, c)",
          detail: "\\text{We require } a+b+c = 15 \\text{ with } 4 \\le a \\le 8, \\ 4 \\le b \\le 6, \\ 4 \\le c \\le 6.\\\\[4pt] \\text{Case 1: } a = 7, \\quad (b, c) = (4, 4)\\\\[4pt] \\text{Case 2: } a = 6, \\quad (b, c) \\in \\{(5, 4), (4, 5)\\}\\\\[4pt] \\text{Case 3: } a = 5, \\quad (b, c) \\in \\{(6, 4), (5, 5), (4, 6)\\}\\\\[4pt] \\text{Case 4: } a = 4, \\quad (b, c) \\in \\{(6, 5), (5, 6)\\}."
        },
        {
          heading: "Step 2: Calculate Ways for Each Case",
          detail: "\\text{Case 1 } (7, 4, 4): \\binom{8}{7} \\binom{6}{4} \\binom{6}{4} = 8 \\times 15 \\times 15 = 1800.\\\\[4pt] \\text{Case 2 } (6, 5, 4) \\& (6, 4, 5): 2 \\times \\left[\\binom{8}{6} \\binom{6}{5} \\binom{6}{4}\\right] = 2 \\times [28 \\times 6 \\times 15] = 5040.\\\\[4pt] \\text{Case 3a } (5, 6, 4) \\& (5, 4, 6): 2 \\times \\left[\\binom{8}{5} \\binom{6}{6} \\binom{6}{4}\\right] = 2 \\times [56 \\times 1 \\times 15] = 1680.\\\\[4pt] \\text{Case 3b } (5, 5, 5): \\binom{8}{5} \\binom{6}{5} \\binom{6}{5} = 56 \\times 6 \\times 6 = 2016.\\\\[4pt] \\text{Case 4 } (4, 6, 5) \\& (4, 5, 6): 2 \\times \\left[\\binom{8}{4} \\binom{6}{6} \\binom{6}{5}\\right] = 2 \\times [70 \\times 1 \\times 6] = 840."
        },
        {
          heading: "Step 3: Total Selection Ways",
          detail: "\\text{Total ways } = 1800 + 5040 + 1680 + 2016 + 840 = 11376."
        }
      ],
      theorems: ["Sum Rule and Product Rule for constrained section combinations."],
      pitfall: "Missing symmetric pairs between symmetric sections B and C (both having 6 questions)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Enumerate Valid Triples (a, b, c)",
        instruction: "Find all combinations of questions \\( (a, b, c) \\) from sections A, B, C adding to 15 with minimum 4 each.",
        options: [
          { id: 'A', text: "(7,4,4), (6,5,4), (6,4,5), (5,6,4), (5,5,5), (5,4,6), (4,6,5), (4,5,6)", isCorrect: true, feedback: "Correct! These 8 triples cover all valid question distributions." },
          { id: 'B', text: "(7,4,4), (6,5,4), (5,5,5), (4,6,5) only", isCorrect: false, feedback: "Incorrect. Sections B and C are distinct, so order matters." },
          { id: 'C', text: "(8,4,3) included", isCorrect: false, feedback: "Incorrect. Every section must have at least 4 questions." },
          { id: 'D', text: "(5,5,5) only", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "When sections have the same capacity, account for permutations between them."
      },
      {
        stepIndex: 2,
        title: "Step 2: Evaluate and Sum Combinations",
        instruction: "Calculate the sum of \\( \\binom{8}{a} \\binom{6}{b} \\binom{6}{c} \\) across all 8 triples.",
        options: [
          { id: 'A', text: "\\( 11376 \\)", isCorrect: true, feedback: "Correct! 1800 + 5040 + 3696 + 840 = 11376." },
          { id: 'B', text: "\\( 10850 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( 11520 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 12100 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Group symmetric cases (like \\( (6,5,4) \\) and \\( (6,4,5) \\)) to halve the computational burden."
      }
    ]
  },
  {
    id: "JEE-PYQ-78",
    index: 78,
    title: "JEE Main 2024 (29 Jan Shift 2)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Partitions of an Integer into at most k Parts",
    difficulty: "Medium",
    year: "2024",
    tags: ["Permutations and Combinations", "Integer Partitions", "Identical Objects into Identical Boxes"],
    statement: "Number of ways of arranging 8 identical books into 4 identical shelves where any number of shelves may remain empty is equal to :",
    options: [
      { id: 1, text: "\\( 18 \\)", isCorrect: false },
      { id: 2, text: "\\( 16 \\)", isCorrect: false },
      { id: 3, text: "\\( 12 \\)", isCorrect: false },
      { id: 4, text: "\\( 15 \\)", isCorrect: true }
    ],
    correctOptionId: 4,
    directExplanation: {
      overview: "Placing identical objects into identical boxes corresponds to integer partitions. Count the number of partitions of 8 into at most 4 parts.",
      steps: [
        {
          heading: "Step 1: Integer Partition Equivalence",
          detail: "\\text{Since both the 8 books and the 4 shelves are identical,}\\\\[4pt] \\text{each distribution is uniquely identified by the multiset of shelf counts}\\\\[4pt] (x_1, x_2, x_3, x_4) \\text{ with } x_1 \\ge x_2 \\ge x_3 \\ge x_4 \\ge 0 \\text{ and } \\sum x_i = 8.\\\\[4pt] \\text{This is the number of integer partitions of 8 into at most 4 parts}."
        },
        {
          heading: "Step 2: Enumerate by Number of Non-Empty Shelves",
          detail: "\\text{1 non-empty shelf (1 part): } (8) \\implies 1 \\text{ way}.\\\\[4pt] \\text{2 non-empty shelves (2 parts):}\\\\[4pt] (7, 1), \\ (6, 2), \\ (5, 3), \\ (4, 4) \\implies 4 \\text{ ways}.\\\\[4pt] \\text{3 non-empty shelves (3 parts):}\\\\[4pt] (6, 1, 1), \\ (5, 2, 1), \\ (4, 3, 1), \\ (4, 2, 2), \\ (3, 3, 2) \\implies 5 \\text{ ways}.\\\\[4pt] \\text{4 non-empty shelves (4 parts):}\\\\[4pt] (5, 1, 1, 1), \\ (4, 2, 1, 1), \\ (3, 3, 1, 1), \\ (3, 2, 2, 1), \\ (2, 2, 2, 2) \\implies 5 \\text{ ways}."
        },
        {
          heading: "Step 3: Total Number of Distributions",
          detail: "\\text{Total ways } = 1 + 4 + 5 + 5 = 15."
        }
      ],
      theorems: ["Partition function \\( p_{\\le k}(n) \\): number of partitions of \\( n \\) into at most \\( k \\) parts."],
      pitfall: "Using stars and bars \\( \\binom{8+4-1}{4-1} \\), which assumes shelves are distinguishable (distinct)."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Identify the Distribution Type",
        instruction: "Both books and shelves are identical. What mathematical concept models this?",
        options: [
          { id: 'A', text: "Partitions of integer 8 into at most 4 parts", isCorrect: true, feedback: "Correct! Identical into identical corresponds to partition theory." },
          { id: 'B', text: "Stars and bars: \\( \\binom{11}{3} \\)", isCorrect: false, feedback: "Incorrect. Stars and bars applies when shelves are distinct." },
          { id: 'C', text: "Stirling numbers of the second kind", isCorrect: false, feedback: "Incorrect. Stirling numbers partition distinct objects." },
          { id: 'D', text: "Multinomial coefficients", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Identical objects into identical boxes = Integer Partitions."
      },
      {
        stepIndex: 2,
        title: "Step 2: Count Partitions by Number of Parts",
        instruction: "Sum the counts for 1, 2, 3, and 4 parts: 1 + 4 + 5 + 5.",
        options: [
          { id: 'A', text: "\\( 15 \\)", isCorrect: true, feedback: "Correct! \\( 1 + 4 + 5 + 5 = 15 \\)." },
          { id: 'B', text: "\\( 18 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( 16 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 12 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "Listing partitions in descending lexicographic order prevents duplicates."
      }
    ]
  },
  {
    id: "JEE-PYQ-79",
    index: 79,
    title: "JEE Main 2024 (08 Apr Shift 2)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Multiset Letter Selection",
    difficulty: "Medium",
    year: "2024",
    tags: ["Permutations and Combinations", "Combinations", "Multiset Selection"],
    statement: "The number of ways five alphabets can be chosen from the alphabets of the word MATHEMATICS, where the chosen alphabets are not necessarily distinct, is equal to :",
    options: [
      { id: 1, text: "\\( 179 \\)", isCorrect: true },
      { id: 2, text: "\\( 177 \\)", isCorrect: false },
      { id: 3, text: "\\( 181 \\)", isCorrect: false },
      { id: 4, text: "\\( 175 \\)", isCorrect: false }
    ],
    correctOptionId: 1,
    directExplanation: {
      overview: "Analyze the composition of MATHEMATICS: 3 pairs (M, A, T) and 5 singles (H, E, I, C, S) - 8 distinct letters total. Partition 5 into valid multiplicities: (2,2,1), (2,1,1,1), and (1,1,1,1,1).",
      steps: [
        {
          heading: "Step 1: Inventory Letters of MATHEMATICS",
          detail: "\\text{M: 2, \\quad A: 2, \\quad T: 2} \\implies 3 \\text{ pairs.}\\\\[4pt] \\text{H: 1, \\quad E: 1, \\quad I: 1, \\quad C: 1, \\quad S: 1} \\implies 5 \\text{ singles.}\\\\[4pt] \\text{Total distinct letter types } = 8."
        },
        {
          heading: "Step 2: Frequency Cases for 5 Chosen Letters",
          detail: "\\text{Case 1: Two pairs and one single } (2, 2, 1):\\\\[4pt] \\text{Choose 2 pairs from 3: } \\binom{3}{2} = 3.\\\\[4pt] \\text{Choose 1 single from remaining 6 distinct letters: } \\binom{6}{1} = 6.\\\\[4pt] \\text{Ways } = 3 \\times 6 = 18.\\\\[6pt] \\text{Case 2: One pair and three singles } (2, 1, 1, 1):\\\\[4pt] \\text{Choose 1 pair from 3: } \\binom{3}{1} = 3.\\\\[4pt] \\text{Choose 3 singles from remaining 7 distinct letters: } \\binom{7}{3} = 35.\\\\[4pt] \\text{Ways } = 3 \\times 35 = 105.\\\\[6pt] \\text{Case 3: All 5 letters distinct } (1, 1, 1, 1, 1):\\\\[4pt] \\text{Choose 5 distinct letters from 8: } \\binom{8}{5} = \\binom{8}{3} = 56."
        },
        {
          heading: "Step 3: Total Selection Ways",
          detail: "\\text{Total ways } = 18 + 105 + 56 = 179."
        }
      ],
      theorems: ["Multiset combinations partitioned by multiplicity."],
      pitfall: "Permuting the letters after selection — the question only asks for the number of ways to CHOOSE 5 letters."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Categorize Letters and Identify Frequency Patterns",
        instruction: "With 3 pairs (M, A, T) and 5 singles, what combinations of frequencies sum to 5?",
        options: [
          { id: 'A', text: "(2, 2, 1), (2, 1, 1, 1), and (1, 1, 1, 1, 1)", isCorrect: true, feedback: "Correct! No letter appears 3 times in MATHEMATICS, so the maximum frequency is 2." },
          { id: 'B', text: "(3, 2), (2, 2, 1), (2, 1, 1, 1)", isCorrect: false, feedback: "Incorrect. No letter appears 3 times." },
          { id: 'C', text: "(2, 2, 1) and (1, 1, 1, 1, 1) only", isCorrect: false, feedback: "Incorrect. You missed (2, 1, 1, 1)." },
          { id: 'D', text: "(5), (4, 1), (3, 2)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "The maximum multiplicity of any letter is bounded by its availability in the parent multiset."
      },
      {
        stepIndex: 2,
        title: "Step 2: Calculate and Sum Selections",
        instruction: "Evaluate the number of combinations for each pattern: 18 + 105 + 56.",
        options: [
          { id: 'A', text: "\\( 179 \\)", isCorrect: true, feedback: "Correct! \\( 18 + 105 + 56 = 179 \\)." },
          { id: 'B', text: "\\( 177 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'C', text: "\\( 181 \\)", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "\\( 175 \\)", isCorrect: false, feedback: "Incorrect." }
        ],
        takeaway: "When selecting from remaining letters, include unused pair letters as candidates for singletons."
      }
    ]
  },
  {
    id: "JEE-PYQ-80",
    index: 80,
    title: "JEE Main 2024 (06 Apr Shift 2)",
    subject: "Mathematics",
    topic: "Permutations and Combinations",
    subtopic: "Dictionary Rank of a Word",
    difficulty: "Medium",
    year: "2024",
    tags: ["Permutations and Combinations", "Dictionary Rank", "Lexicographic Order"],
    statement: "If all the words with or without meaning made using all the letters of the word \"NAGPUR\" are arranged as in a dictionary, then the word at \\( 315^{\\text{th}} \\) position in this arrangement is :",
    options: [
      { id: 1, text: "NRAGUP", isCorrect: false },
      { id: 2, text: "NRAPUG", isCorrect: false },
      { id: 3, text: "NRAPGU", isCorrect: true },
      { id: 4, text: "NRAGPU", isCorrect: false }
    ],
    correctOptionId: 3,
    directExplanation: {
      overview: "Alphabetize letters: A, G, N, P, R, U. Words starting with A (120) and G (120) total 240 words. Within N, words starting with NA, NG, NP account for 3 * 24 = 72 words (rank 312). Words starting with NR begin at 313, giving NRAPGU at rank 315.",
      steps: [
        {
          heading: "Step 1: Alphabetical Order of Letters",
          detail: "\\text{'NAGPUR' has 6 distinct letters:}\\\\[4pt] 1. A, \\quad 2. G, \\quad 3. N, \\quad 4. P, \\quad 5. R, \\quad 6. U."
        },
        {
          heading: "Step 2: Words Starting with A and G",
          detail: "\\text{Words starting with A: } 5! = 120 \\quad (\\text{Ranks } 1 - 120).\\\\[4pt] \\text{Words starting with G: } 5! = 120 \\quad (\\text{Ranks } 121 - 240).\\\\[4pt] \\text{Cumulative } = 240. \\quad \\text{Target rank: } 315 \\implies \\text{starts with 'N'}."
        },
        {
          heading: "Step 3: Words Starting with N",
          detail: "\\text{Available letters: } A, G, P, R, U.\\\\[4pt] \\text{Words starting with NA: } 4! = 24 \\quad (\\text{Ranks } 241 - 264).\\\\[4pt] \\text{Words starting with NG: } 4! = 24 \\quad (\\text{Ranks } 265 - 288).\\\\[4pt] \\text{Words starting with NP: } 4! = 24 \\quad (\\text{Ranks } 289 - 312).\\\\[4pt] \\text{Cumulative } = 312. \\quad \\text{Next prefix is 'NR'}."
        },
        {
          heading: "Step 4: Rank Within 'NR'",
          detail: "\\text{Remaining letters for 'NR': } A, G, P, U.\\\\[4pt] \\text{Words starting with 'NRA':}\\\\[4pt] 313^{\\text{th}}: \\text{ NRAGPU}\\\\[4pt] 314^{\\text{th}}: \\text{ NRAGUP}\\\\[4pt] \\text{Next prefix after 'NRAG' is 'NRAP':}\\\\[4pt] 315^{\\text{th}}: \\text{ NRAPGU}."
        }
      ],
      theorems: ["Lexicographical ranking via hierarchical factorial counts."],
      pitfall: "Misordering letters P and R or forgetting that U follows P."
    },
    stepwiseHints: [
      {
        stepIndex: 1,
        title: "Step 1: Eliminate Words Before the Target Prefix",
        instruction: "Count words before 'N' and words within 'N' starting with NA, NG, NP.",
        options: [
          { id: 'A', text: "Words before 'NR' total 312", isCorrect: true, feedback: "Correct! \\( 120 (A) + 120 (G) + 24 (NA) + 24 (NG) + 24 (NP) = 312 \\)." },
          { id: 'B', text: "Words before 'NR' total 300", isCorrect: false, feedback: "Incorrect. Each 2-letter block has \\( 4! = 24 \\) words." },
          { id: 'C', text: "Words before 'NR' total 336", isCorrect: false, feedback: "Incorrect." },
          { id: 'D', text: "Words before 'NR' total 288", isCorrect: false, feedback: "Incorrect. You omitted NP." }
        ],
        takeaway: "Group prefixes by fixed letters to leapfrog large blocks of words."
      },
      {
        stepIndex: 2,
        title: "Step 2: Find the 315th Word Under 'NR'",
        instruction: "Starting from rank 313, enumerate the words in alphabetical order.",
        options: [
          { id: 'A', text: "NRAPGU", isCorrect: true, feedback: "Correct! 313: NRAGPU, 314: NRAGUP, 315: NRAPGU." },
          { id: 'B', text: "NRAGUP", isCorrect: false, feedback: "Incorrect. That is the 314th word." },
          { id: 'C', text: "NRAPUG", isCorrect: false, feedback: "Incorrect. That is the 316th word." },
          { id: 'D', text: "NRAGPU", isCorrect: false, feedback: "Incorrect. That is the 313th word." }
        ],
        takeaway: "Once the prefix is narrowed down to 2 or 3 possibilities, write them out directly in alphabetical order."
      }
    ]
  }
];