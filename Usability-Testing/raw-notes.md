# Usability Testing — Raw Notes

Structured notes from two usability testing sessions comparing the V0 and Claude landing pages, both generated from the same prompt for the fictional pet adoption app FindAPaw. 

- **Participant 1 (Mayda Kurdian)** — Systems Engineer with a background in Product Management and Product Design. Tested Claude first, then V0.
- **Participant 2 (Agustina Glumcher)** — Visual Communication Designer with professional experience as a UX/UI Designer. Tested V0 first, then Claude.

---

## Participant 1

### Claude

**1. First impression (Hero)**
The hero looked good and the main CTA was easy to find right away. However, the hero felt too large, and the stats block right below it (adoption count, average rating, etc.) also felt oversized — not necessary at that scale. She said it "breaks the flow between entering the site and choosing an animal." She suggested that block could exist, but much smaller and less prominent.

**2. "98% match" badge over the hero photo ("Biscuit loves you back")**
An informational element meant to represent how the matching process works, but she didn't understand what it referred to — the message wasn't clear. "I don`t get what this is"

**3. Animal cards (browsing)**
She expected to be able to click the cards to see more information about the animal (size, more characteristics), not to be taken directly to the application form.

**4. Hero CTAs + individual card buttons**
Confusion between the 3 hero CTAs that lead to the form, and the button on each animal card that also leads to the same form. It wasn't clear whether the form corresponds to a specific dog or is a general application to adopt any animal.

**5. Inside the application form — animal selection**
If the goal is to apply for a specific dog, she'd expect to see the chosen dog's photo/info inside the form as confirmation. If the idea is a general application, then a specific button like "Meet Pepper" leading to that same general form doesn't make sense — the label seems to contradict the button's actual purpose.

**6. Inside the application form — phone number error**
She typed the number with errors and it let her submit. She mentioned she wouldn't have noticed the error herself "it didn't warn me that the number was wrong" and she said no when asking if there was a way to recover from the error.

**7. Inside the application form — email error**
She typed the email with errors and clicked submit. She appreciated that in this case it did flag the email as incorrect.

**8. Inside the application form — empty field**
She left the description field empty and clicked submit. It showed a message saying the field must be completed, but it felt a bit aggressive — using a "!" symbol and saying "The description field cannot be empty." She expected a more human message.

**9. After completing and submitting the form, "Submit another application" appears**
She expected that button to take her back to the dog listing to choose another one, not to show the general form again — it breaks her mental model. 

**10. Comparison between V0 and Claude — same "another application" button**
On both platforms, the button lets her fill out the form again instead of taking her to choose another dog. She wonders why she would apply twice if she already did — it doesn't make sense in her mental model.

**11. "How it works" section (steps 1, 2, 3)**
The 3-step process shown doesn't match the actual path she took on the site.

**12. "How it works" section — step 2 ("Meet your matches")**
She didn't understand it was purely informational, and tried to click on step 2 thinking it was actionable. "I thought it was a button that would take me to the step, not just information"
*(Note: relates to a similar finding from a test run with Sara on GTA-DC — another AI-generated app — which also had informational elements shaped like cards that Sara also tried to click.)*

**13. System steps vs. expected process (synthesis)**
The steps shown by the system don't match the process the user intuitively expects when adopting. "The steps do not match the process I did throughout the app."

**14. Navigation — searching for FAQ**
She found it by scrolling all the way to the bottom, but expected an "FAQ" option visible in the top menu, so she'd know upfront that it existed. A navigation/discoverability problem, not a missing-content problem. "I had to scroll down and find it, I expected it at the top menu"

**15. Closing question — trust**
The visual design gives her a lot of confidence because it looks professional and well made. However, she'd expect an "About us" section accessible from the main menu to reinforce that trust — she didn't find one there.

### V0

**1. First impression — visible CTAs (Adopt Now, Start your application, Adopt in the menu)**
She mentions the 3 different CTAs right from the start and says that already creates confusion.

**2. Label over the hero ("Meet your new best friend")**
The background it has gives the impression of being a button/CTA, but it's not clickable.
*(Note: recurring problem — elements that look clickable but aren't, same pattern she saw in Claude with the hero title.)*

**3. Browse pets — animal cards**
She expected more information on each dog's card. 

**4. Filters**
She expected to be able to filter — by animal type (something Claude did allow, at least by type), and also by her own characteristics, such as whether she lives in a house or apartment.

**5. First goal upon entering the site**
When she enters, the first thing she wants to do is SEE the available animals, not go straight to the form. She expected the main CTA to take her to see the dogs, not to the form.

**6. Two paths to the form (general CTA + clicking a specific dog)**
Same problem as in Claude — it's not clear whether clicking a specific dog means applying for that dog or for a general adoption. The process isn't clear.

**7. Form after choosing a dog**
If the process is "choose the dog → the form is for that dog," she'd expect to see the chosen dog's info next to the form, as confirmation of her selection.
*(Note: associated with the System Status Visibility heuristic.)*

**8. General interpretation of the flow**
She doesn't understand whether the site has two distinct options — general adoption vs. adoption of a specific dog — or just one. The flow feels confusing.

**9. Animal listing**
She'd like to be able to click each animal to see more info — temperament, size, more characteristics. "I expected more information of the animal. Such as temperament, size, more characteristics"

**10. "How adoption works" section (appears after the animal listing)**
The described process (1: choose your dog, 2: fill out the form, 3: ...) only partially matches what she did — because the CTAs had already taken her straight to the form from the beginning, which doesn't logically match step 1 as described there.

**11. Position of the "How adoption works" section**
She expected it up in the hero, not so far down after she'd already started browsing — if the goal is to explain the process, it makes more sense to show it at the beginning.

**12. Labels of the different CTAs (Adopt / Adopt Now / Start your application)**
Different names that appear to represent different actions, but all lead to the same form — system inconsistency.

**13. Top menu — "About" option**
She expected it to lead to information about the organization, but it goes directly to the form. She mentions that a working "About" section would help build trust.

**14. Filling out the form (task: "what would you do if you wanted to apply?")**
Same problem as in Claude — the empty-field error message ("Complete this field!") feels unfriendly. She'd expect something warmer, e.g. "Tell us why you'd like to adopt."

**15. After submitting the form**
She sees the "Application received" message, but can't find a way to check her application status. The message says the team will contact her "very soon" — she'd expect a concrete time frame (e.g., "within 1-2 days"). Still, it was clear to her that the submission went through.

**16. "Apply again" button**
Doesn't make sense if the application is general. But if it's per-animal, she'd expect it to take her back to the animal listing, not to the form again.

**17. Closing question — "anything you'd add?"**
She'd add reviews — the site shows a "happy homes" percentage but with no evidence behind it. She's missing data to fully trust the organization: she doesn't know who they are (because "About" leads to the form), and she'd like to see testimonials. The design feels trustworthy, but several actions don't do what she expected, or lead to the same place unnecessarily. She also suggests asking about her living situation to help match her with a suitable animal. "At first glance, the design feels trustworthy. But I am missing data to trust the organization. I don`t know who they are, there is not About section, I would like to see testimonials".

**18. Closing question — "anything you'd remove?"**
She doesn't identify anything as unnecessary.

**19. Spontaneous observation about the listed animals**
She notices that all the animals are purebred, which seems odd for an adoption site — it raises distrust.

### Closing comparison questions (both apps)

**20. Memory — do you remember the process without looking at the app?**
Yes, she remembers, beyond the specific confusion about whether the application was general or for a specific dog.

**21. Final comparison, V0 vs. Claude**
She'd go with Claude — it gives her more confidence because it had an FAQ, success stories/reviews, and filters. Neither had a working "About," but Claude felt less confusing in its process and had fewer redundant CTAs.

---

## Participant 2

### V0

**1. General first impression**
The design looks very nice, but she doesn't like that it feels like a catalog. She also finds it odd that the adoption process feels so fast — clicking "adopt" takes her straight to the form. She'd expect something closer to reality, like going to meet the animal in person. "It feels like a catalog of products, as if I would be buying a toy".

**2. "How adoption works" section (steps 1, 2, 3)**
It's not clear to her that those numbers represent steps — she finds them very small and hard to notice. She finds it odd that the section is placed there. The described process (1. search for animals, 2. apply generally and get matched with a pet, 3. meet them and adopt) doesn't match what she experienced, which was clicking a specific animal and being taken straight to the form.

**3. Navigation menu — "About"**
There's no "About" section. Clicking that option in the menu takes her to the form. The same happens with "Adopt" and "How it works" — all three lead to the form.

**4. Trust — organization information**
Not having more information about the organization doesn't build her trust. She only sees KPIs (numbers), but that's not enough to build trust. 

**5. Form — induced error (invalid phone number)**
It didn't warn her the number was wrong, allowed the submission without blocking or correcting the error, and didn't warn her in time either.

**6. Confirmation message after submitting the form**
The "thanks, we'll contact you" message doesn't leave her satisfied. She'd expect something that reassures the process more or tells her what to expect — for example, if it were a real app, she'd expect to receive a confirmation email.

**7. Reflection on the full adoption process**
Reducing the process to filling out a form isn't what she'd expect from an adoption app — it feels too simple, as if they were going to ship her an item or a toy. She'd expect to be able to create a profile.

**8. Animal catalog**
She finds the "catalog" behavior odd. She'd like to know more about each animal — their story, for example. "I would like to see more information of the animal, their story, for example".

**9. Spontaneous observation — animal breeds**
She finds it odd that every animal has a defined breed in an adoption context.

**10. Elements she'd expect but that aren't there (map, longer process)**
She'd expect a map to see where shelters are available and go meet them in person. The process doesn't convince her — she'd expect something longer, not choosing an animal online and completing the whole process right there.

**11. Closing question — is anything missing or excessive?**
She feels information is missing. About the organization and the animals.

**12. Placement of important information**
She'd expect the "How adoption works" section — which she considers the most important — to be higher up. The hero has a lot of space with descriptions that don't say much, when that space should have the adoption process instead.

**Participant's synthesis (V0):** Information and depth are missing, the adoption process isn't well explained, and the form didn't correct her error.

### Claude

**13. First impression**
The first thing she sees is the wide black block right below the hero, with the number of successful adoptions, partner shelters, cities, and reviews — it catches her attention due to its size and placement. She then reads a green chip that says "13,000 pets looking for a home now."

**14. "95% match" badge in the hero**
She finds it strange the badge in the hero "95% match!" — she doesn't understand what it's for or what function it serves, since she hasn't started using the app yet. 

**15. Animal catalog (compared to V0)**
She finds it better than V0's — it has more information.

**16. Is this an app?**
She didn't realize an app existed until she noticed a small button up top, "Get the app." She doesn't understand the overall purpose of the site: clicking an animal or "adopt" takes her to the form, so she doesn't know whether she's expected to download the app or fill out the form. If the goal is for her to download the app, she'd expect that CTA to be in the hero (with a photo of the app, not of animals), not just as a small button in the header.

**17. First action — animal type filter + zip code**
The first thing she filled in was the animal type and zip code, but she doesn't think that's the ideal information to ask for at that point.

**18. Process section (compared to V0)**
The steps read more clearly as steps than in V0, but it has the same underlying problem: the described process doesn't match the actual actions. According to the section, first they ask about her, then there are matches, then she adopts — but the app's actual process goes straight to the form. It's not clear to her whether filling out the form will get her matched with an animal, or whether that happens only after downloading the app.

**19. App download CTA**
There's a CTA to download the app further down the page; she'd expect it to take her to the Play Store, but instead it takes her back to the hero.

**20. Form**
It gives instructions saying a shelter will reach out within two days for a meet and greet — but that's not what the "how the process works" section said earlier. She notices the contradiction ("learned something that was wrong").

**21. After submitting the form**
The "we'll contact you in two days" message does give her more confidence than V0's, because it's a specific, concrete action about what to expect.

**22. Form — same induced error (number with a letter in it)**
Same problem as V0 — it doesn't warn about the error and doesn't allow recovery.

**23. Specific comparison — FAQ**
She considers Claude more complete because it has an FAQ.

**24. Map and shelters**
She'd like to see a map or a list of shelters and where they're located.

**25. Findability task — looking for FAQ**
She says she'd look for it in the header menu, but it's not there. She'd also like it accessible from the footer.

**26. Success stories**
She'd like to see more detail in the success stories, not just such a brief summary.

**27. Contact information**
Contact information for the organization is missing. "About" leads to the form.

### Final comparison (both landing pages)

**28. Closing question — V0 vs. Claude comparison**
Claude is more complete — it has more evidence, more process detail, more animal information, and gives her more confidence. In both landing pages, the adoption process felt confusing and contradictory. She doesn't feel confident that adopting an animal comes down to something as simple as filling out a form (assuming she understood the process correctly). The lack of reviews and organization information also lowers her trust in both. Overall, neither one guides or explains how the process works well — understanding and learning is hard, there are contradictions, and some navigation elements don't work as expected. "In both landing pages the adoption process felt confusing, and it doesn`t give me confidence that adopting an animal is so easy such as filling out a form. They are animals."
