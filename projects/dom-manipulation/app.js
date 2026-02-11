
//Element Creation
// document.createElement(tagName, [options]) - creates a new element of tag type tagName. 
// [options] in this case means you can add some optional parameters to the function. Don’t worry about these at this point.

//Append elements
// parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.
// parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode.

//Remove elements
// parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child.

const container = document.querySelector('#container');
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redP = document.createElement('p');
redP.style.color = 'red';
redP.textContent = "Hey I'm red!";

container.appendChild(redP);

const heading3 = document.createElement('h3');
heading3.style.color = 'blue';
heading3.textContent = "I'm a blue h3!";

container.appendChild(heading3);

const newDiv = document.createElement('div');
newDiv.classList.add('newcontent');
newDiv.setAttribute('style', 'background: pink');
newDiv.style.border = "1px solid black";

container.appendChild(newDiv);

const heading1 = document.createElement('h1');
heading1.textContent = "I'm in a div";

newDiv.appendChild(heading1);

const divP = document.createElement('p');
divP.textContent = "ME TOO!";

newDiv.appendChild(divP);


// console.log(div);

console.log(document);