/*
 * Name: Caiwei Tian
 * Data: Oct 20, 2020
 * Section: CSE 154 AI
 * This is the javascript file for my Know-Yourself game. It asks 5 questions
 * to the user and gives a result after analyzing the answers.
 * It allows to switch between the starting page and the game page.
 */
"use strict";

(function() {
  window.addEventListener("load", init);

  /**
   * Initialize the web page
   */
  function init() {
    id("new-game").addEventListener("click", start);

  }

  let numOfQ = 1;

  /**
   * Switch from the starting page to the game page. Start the game.
   */
  function start() {
    id("choose-a").addEventListener("click", nextQ);
    id("choose-b").addEventListener("click", nextQ);
    id("choose-c").addEventListener("click", nextQ);
    id("quit").addEventListener("click", reset);
    setUpQ();
    switchViews();
  }

  /**
   * Set up questions and corresponding answers.
   */
  function setUpQ() {
    if (numOfQ === 1) {
      askQ1();
    } else if (numOfQ === 2) {
      askQ2();
    } else if (numOfQ === 3) {
      askQ3();
    } else if (numOfQ === 4) {
      askQ4();
    } else {
      askQ5();
    }
  }

  /**
   * Ask question 1 and update the answer and image
   */
  function askQ1() {
    question("Do you always feel energetic?");
    choices("Yes", "No", "Sometimes");
    createImg("pic1", "img/funny-butt.jpg", "a heart on a dog's butt");
  }

  /**
   * Ask question 2 and update the answer and image
   */
  function askQ2() {
    question("Do you always have a good sleep?");
    choices("Yes", "No", "Sometimes");
    id("pic1").classList.add("hidden");
    createImg("pic2", "img/night-owl.jpg", "a yawning night owl");
  }

  /**
   * Ask question 3 and update the answer and image
   */
  function askQ3() {
    question("Do you have a lot of friends?");
    choices("Yes", "No", "I have some friends but not many");
    id("pic2").classList.add("hidden");
    createImg("pic3", "img/dogs.jpeg", "4 dogs sitting together");
  }

  /**
   * Ask question 4 and update the answer and image
   */
  function askQ4() {
    question("Do you always feel lonely?");
    choices("Yes", "No", "I enjoy chatting with myself");
    id("pic3").classList.add("hidden");
    createImg("pic4", "img/cat.jpg", "picture of a cat");
  }

  /**
   * Ask question 5 and update the answer and image
   */
  function askQ5() {
    question("Which one do you like better?");
    choices("Melons", "Grapes", "Kiwifruits");
    id("pic4").classList.add("hidden");
    createImg("pic5", "img/fruits.jpeg", "many kinds of fruits");
  }

  /**
   * Create an image and append it to 'pictures' with given
   * image name and path
   * @param {text} name the name of the image we want to create
   * @param {text} path the path of the image
   * @param {text} description the description of the image
   */
  function createImg(name, path, description) {
    let pic = gen("img");
    pic.setAttribute("id", name);
    pic.src = path;
    pic.alt = description;
    pic.classList.add("pic");
    id("pictures").appendChild(pic);
  }

  /**
   * Assign questions to appear on the page
   * @param {text} qToAsk the next question to ask the user
   */
  function question(qToAsk) {
    id("questions").innerText = qToAsk;
  }

  /**
   * Update different answers to the question
   * @param {text} choice1 the first choice to the question
   * @param {text} choice2 the second choice to the question
   * @param {text} choice3 the third choice to the question
   */
  function choices(choice1, choice2, choice3) {
    id("choose-a").innerText = choice1;
    id("choose-b").innerText = choice2;
    id("choose-c").innerText = choice3;
  }

  /**
   * Proceed to the next question if there are more.
   * If it is the last question, show the result.
   * @param {event} event event that calls the function (here is "click")
   */
  function nextQ(event) {
    numOfQ++;
    if (numOfQ <= 5) {
      setUpQ();
    } else {
      let ans = event.target.getAttribute("name");
      if (ans === "a") {
        question("You must like Melons!");
      } else if (ans === "b") {
        question("You must like Grapes!");
      } else {
        question("You must like Kiwifruits!");
      }

      id("pic5").classList.add("hidden");
      createImg("pic6", "img/laugh.png");

      id("choose-a").removeEventListener("click", nextQ);
      id("choose-b").removeEventListener("click", nextQ);
      id("choose-c").removeEventListener("click", nextQ);
    }
  }

  /**
   * Reset the game to the starting page.
   * Remove all the appended images.
   */
  function reset() {
    switchViews();
    numOfQ = 1;
    let parent = id("pictures");
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  /**
   * Switch between preparation page and the game page
   */
  function switchViews() {
    id("start-page").classList.toggle("hidden");
    id("game-page").classList.toggle("hidden");
  }

  /**
   * Returns the DOM object with the given id attribute.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id (null if not found).
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns a new element with the given tagname.
   * @param {string} tagName - name of element to create and return.
   * @returns {object} new DOM element with the given tagname.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();