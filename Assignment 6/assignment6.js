

const container=document.querySelector('.container');
container.style.backgroundColor="yellow";
const h1=document.createElement('h1');
h1.innerHTML=("I'm learning Dom");

const p1=document.createElement('p1');
p1.innerHTML=("It is easy but required some practice");

container.appendChild(h1);
container.appendChild(p1);


const para= document.querySelector('.para');
para.innerHTML=(" Hey I'm Blue !");
para.style.color="blue";


const heading= document.querySelector('.heading');
heading.innerHTML=("I'm pink H3 !");
heading.style.color="#FF1493";
para.append(p);
heading.append(h3);




//       1. a <p> with blue text that says “Hey I’m blue!”

//     // 2. an <h3> with pink text that says “I’m a pink h3!”
    
//     // 3. a <div> with a red border and yellow background color with the
//     // following elements inside of it:
    
//     // 1. another <h1> that says “I am learning DOM”
    
//     // 2. a <p> that says “It is easy but required some practice”
    
//     // 3. Hint for this one: after creating the <div> with createElement,
//     // append the <h1> and <p> to it before adding it to the
//     // container. -->