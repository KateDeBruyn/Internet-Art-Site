//production nav
// const navData = [
//     { title: "Home", link: "https://katedebruyn.github.io/Internet-Art-Site/index.html"},
//     { title: "Theory", link: "https://katedebruyn.github.io/Internet-Art-Site/theory/theory.html"},
//     { title: "Internet Art", link: "https://katedebruyn.github.io/Internet-Art-Site/art/internetart.html"},
//     { title: "Design", link: "https://katedebruyn.github.io/Internet-Art-Site/design/styleguide.html"},
// ]

//dev nav
const navData = [
    { title: "Home", link: "../../index.html"},
    { title: "Theory", link: "../theory/theory.html"},
    { title: "Internet Art", link: "../art/internetart.html"},
    { title: "Design", link: "../design/styleguide.html"},
]

const navElement = document.getElementById("nav-Id");

let list = document.createElement("ul");

for(var i = 0; i < navData.length; i++){

    let listItemLink = document.createElement("a");
    listItemLink.innerText = navData[i].title;
    listItemLink.setAttribute("href", navData[i].link);
    
    let listItem = document.createElement("li");
    listItem.appendChild(listItemLink);
    list.appendChild(listItem);
}

navElement.appendChild(list);

{/* <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="menu-bars"
          ><i class="fa-solid fa-bars"></i
        ></label>
        <label for="logo" id="logo">keightyrose</label>
        <ul>
          <li><a id="nav-button" href="index.html">Home</a></li>
          <li><a id="nav-button" href="blog.html">Blog</a></li>
          <li>
            <a id="nav-button" href="styleguide.html">Style Guide</a>
          </li>
        </ul>
      </nav> */}