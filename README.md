[Live Site](https://ruchibadkur.github.io/carousel-react/)

🎭 Mock Interview Simulation – React Image Carousel
👨‍💼 Interviewer:
Hi Ruchi! For this round, I'd like you to build a simple image carousel in React. It should have Previous and Next buttons, and when you’re on the first image and click "Previous," it should go to the last image. Similarly, clicking "Next" on the last image should take you back to the first one.
You can start whenever you're ready — feel free to explain your thought process as you go.

Now it’s your turn 👇

🎤 Your response starts here (Try to type or speak aloud as if you're answering live — I’ll correct and refine your response afterward):

🟢 Ruchi (Candidate):
Thank you! Just to clarify the task — I need to build an image carousel using React, which shows one image at a time. It should have "Previous" and "Next" buttons to navigate. And the key functionality is that if I’m at the first image and click “Previous,” it wraps to the last image, and if I’m at the last image and click “Next,” it wraps back to the first one.
Is that correct?

(You continue...)
Now I’ll start by setting up an array of image URLs — these could be placeholders or real images.

```
const images = [
  'https://via.placeholder.com/400x200?text=Image+1',
  'https://via.placeholder.com/400x200?text=Image+2',
  'https://via.placeholder.com/400x200?text=Image+3'
];
```
Then, I’ll use the useState hook to track the index of the currently displayed image:

```
const [currentIndex, setCurrentIndex] = useState(0);
```

Next, I’ll write the function to handle the Previous button:

```
const handlePrev = () => {
  setCurrentIndex(prevIndex =>
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
  );
};
```
This function checks if we’re already at the first image (index 0). If we are, it loops to the last index, otherwise it goes back one step.

Now, for the Next button:

```
const handleNext = () => {
  setCurrentIndex(prevIndex =>
    prevIndex === images.length - 1 ? 0 : prevIndex + 1
  );
};
```
This does the opposite — if we're already at the last image, it resets to index 0, otherwise it moves forward.

Then, in the return block, I’ll render the current image using the currentIndex state and add both navigation buttons:

```
<img src={images[currentIndex]} alt="carousel" style={{ width: '400px', height: '200px', borderRadius: '8px' }} />
<div>
  <button onClick={handlePrev}>Previous</button>
  <button onClick={handleNext}>Next</button>
</div>
```
This should complete the basic image carousel with the cycling behavior.

Finally, I’ll just test it to make sure the images update as expected when clicking next and previous.

👨‍💼 Interviewer:
Awesome! That’s a clear explanation and clean implementation. You walked me through the logic step by step and showed solid React understanding. If you were to extend this further, what would you add?

🎤 You: (Optional add-on)

Thank you! To extend it, I could:

Add dot indicators for navigation

Include auto-play functionality using setInterval in a useEffect

Make it responsive using CSS or Tailwind

Support swipe gestures for mobile using a library like react-swipeable

