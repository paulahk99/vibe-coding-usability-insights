# Usability Testing Guide

**FindAPaw — V0 vs. Claude · PoC for IEEE URUCON 2026 abstract**
*Based on a testing script co-designed with Sara Vila (Handbook of Usability Testing, Designing Interfaces, Nielsen's Heuristics)*

## Hypothesis

AI-generated interfaces share the same usability problems, regardless of the tool used.

## General objective

Demonstrate that the problem exists and document what those problems are.

## Specific objectives

- Detect usability problems.
- Classify them according to Nielsen's heuristics.
- Measure frequency and severity.
- Compare whether they appear independently of the AI tool used.
- Build a catalog of recurring problems.

## Methodological deviation for this PoC

The original design indicates that each user should see only ONE landing page, without knowing it was AI-generated (a between-subjects design, recommended by Rubin to reduce learning and comparison bias).

For this PoC — with only 2 participants and the abstract deadline — we decided each user would test both landings (V0 and Claude), alternating the order between participants, to allow cross-validation with such a small sample.

This is a deliberate deviation, not an error: it prioritizes cross-validation over experimental purity. For the full study (post-abstract, with 5-8 users as recommended by Rubin), we plan to return to the original design: one user, one landing, without disclosing that it was AI-generated.

## Session logistics

- 2 participants.
- Participant 1 starts with V0 → continues with Claude.
- Participant 2 starts with Claude → continues with V0.
- Estimated duration: ~75–80 min per participant.
- The original design's five tools (Claude, ChatGPT, V0, Z.AI) were reduced to 2 (V0 and Claude) for this PoC — the cross-tool argument is already covered by the prior heuristic evaluation of the four tools.

## Moderator script  

> "Thank you so much for participating.
>
> We're going to run a usability test. This test is for a research project I'm working on, and the idea is to observe how you interact with a web page.
>
> We are not evaluating your skills; we are evaluating the page.
>
> During the session I'll ask you to think aloud and tell me what you're thinking as you navigate.
>
> We're going to record the session, only so we can take notes afterward.
>
> I'll intervene as little as possible."

## Scenario  

> "Imagine that you've wanted to adopt a dog for a while, and you're searching for different organizations online.
>
> You arrived at this page from Google.
>
> Navigate as you normally would."

Do not explicitly say "this is a pet adoption page" — let the scenario generate context more realistically (*Match Between System and the Real World*).

## Block per landing page (repeat in full for V0 and for Claude)

This block is run once per landing page, in the order corresponding to each participant.

### 1. First impression

Show the landing page for 10 seconds before asking questions.

- What does this organization do?
- What was the first thing you saw? And the second?
- What do you remember?
- What do you think they want you to do?
- Is there anything distracting?

**Record:** Visual order · what is remembered · what is ignored.

**Patterns/heuristics involved:** Visual Hierarchy · Clear Entry Point · Aesthetic Design · Match with Real World

### 2. Navigation and content comprehension

- Find: the adoption process.
- Find: testimonials or contact information.
- Find: frequently asked questions.
- (In passing) How many steps does adoption have? Is there a cost? Who can adopt?

**Record:** Time · clicks · scroll · errors · where they search · what is misinterpreted · whether they need to re-read.

**Patterns/heuristics involved:** Navigation · Clear Entry Points · Information Architecture · Progressive Disclosure · Recognition Rather than Recall

### 3. Hierarchy

AI tools tend to generate pages where everything has the same visual weight.

- Which section seemed most important to you? Which did you ignore?
- Is there anything that feels like it takes up too much space?
- Is there anything important you barely noticed?
- In what order did you scan the page?

**Record:** Manual heatmap · visual order.

**Patterns/heuristics involved:** Visual Hierarchy · Progressive Disclosure · Center Stage

### 4. Findability

- Where would you expect to find the dog's age?
- Where would you look for the adoption requirements?

**Record:** Where they expect to find each piece of data (not whether they actually find it — this differs from the Navigation block).

**Patterns/heuristics involved:** Information Architecture

### 5. Call to Action (CTA)

- What would you do now? (without mentioning the word "button") — wait for a response without rushing.

**Record:** Finds the CTA / doesn't find it / confuses it / there are too many CTAs.

**Patterns/heuristics involved:** Calls to Action · Visual Hierarchy · Recognition

### 6. Animal cards

- Choose an animal and compare it to another.
- Which one would you adopt, and why?

**Record:** Understands the cards / can compare / missing information / photos are distracting / doesn't distinguish what's clickable.

**Patterns/heuristics involved:** Cards · Recognition · Affordance

### 7. Form + error recovery

- Start the adoption application.
- (Trigger) Leave a field blank and submit.
- (Trigger) Enter an invalid email or phone number.
- Can you recover? Can you go back? Can you cancel? Did you lose the data you had already entered?

**Record:** Feedback · inline validation · clarity of the error · whether they recover or lose information.

**Patterns/heuristics involved:** Visibility · Error Prevention · Inline Validation · Error Messages · Forgiving Format · Recover from Errors

### 8. Post-submission feedback

- What happened? Was it submitted? Is it loading? Do you have to wait? Is it done?

**Record:** Visible feedback / loader / success state / error state.

**Patterns/heuristics involved:** Visibility of System Status · Loading · Skeleton · Success State

### 9. Consistency

Show 2-3 different parts of the site. Does everything feel like it belongs to the same site? Do the buttons behave the same way? Do the cards behave the same way?

**Record:** Specific inconsistencies found.

**Patterns/heuristics involved:** Consistency

### 10. Trust

- Would you trust this organization? Why?
- What information is missing? What raises doubts?

**Record:** Mentions of testimonials / photos / legal information / contact details.

**Patterns/heuristics involved:** Trust cues

### 11. Minimalism

- What would you remove from this screen? What would you summarize?
- What did you not get around to reading?

**Record:** What is identified as excess text or visual noise.

**Patterns/heuristics involved:** Aesthetic and Minimalist Design

### 12. Flexibility (quick)

- If you already knew exactly which dog you wanted to adopt, what would you do differently?

**Record:** Shortcuts the user expects that don't exist.

**Patterns/heuristics involved:** Efficiency of Use

## Comparative closing (once only, after both landing pages)

- Was there a moment when you didn't know what to do? On which of the two?
- What would you change first, and on which site?
- What was frustrating? What was excellent?
- What gave you confidence? What raised your doubts?
- What information was missing?
- Between the two, which do you prefer, and why?

*Section 13 (Memory) from the original script was left out of this PoC, as it requires a 10-minute pause during the session*
