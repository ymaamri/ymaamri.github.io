Vue.component("projects-content", {
  data() {
    return {};
  },
  props: ["myproject"],
  template: `
  <div class="card"><img class="card-img-top" :src="myproject.imgLink" />
    <div class="card-body">
      <h5 class="card-title">{{myproject.title}}</h5>
      <p class="card-text">{{myproject.description}}</p>
      <p class="tools">{{myproject.langs}}</p>
    </div>
    <div class="card-footer"><a class="b1" :href="myproject.previewLink" target="_blank">Live preview </a><a class="b2" :href="myproject.codeLink" target="_blank">Code</a></div>
  </div>
`,
});
var vm = new Vue({
  el: "#projects",
  data: {
    projectsData: [
      {
        title: "gpt3 landing page",
        imgLink: "https://i.suar.me/LYeZG/l",
        description: "Transorm a figma design into a responsive website.",
        langs: "React",
        previewLink: "https://ymaamri.github.io/gpt3-landing-page/",
        codeLink: "https://github.com/ymaamri/gpt3-landing-page/",
      },
      {
        title: "Shopping Cart - React",
        imgLink: "https://i.suar.me/176d3/l ",
        description: "React shopping cart, for simple ecommerce website.",
        langs: "React Router, React Context API",
        previewLink: "https://ymaamri.github.io/shopping-cart/",
        codeLink: "https://github.com/ymaamri/shopping-cart/",
      },
      {
        title: "Text Repeater",
        imgLink: "https://i.suar.me/jZEX1/l",
        description: "Add text, repeat how may times you want and copy.",
        langs: "Vue.js, JavaScript, HTML, CSS,",
        previewLink: "https://test-repeater.netlify.app/",
        codeLink: "https://github.com/ymaamri/text-repeater",
      },
      {
        title: "To do app",
        imgLink: "https://i.suar.me/3PvJL/l",
        description:
          "A simple to do app with local storage and JavaScript html DOM.",
        langs: "HTML, CSS, Bootstrap, JavaScript",
        previewLink: "https://ymaamri.github.io/to-do/",
        codeLink: "https://github.com/ymaamri/to-do/",
      },
      {
        title: "Deer Template",
        imgLink: "https://i.suar.me/gwEXQ/l",
        description: "Convert a PSD template to HTML/CSS.",
        langs: "HTML, CSS",
        previewLink: "https://ymaamri.github.io/deer-template/",
        codeLink: "https://github.com/ymaamri/deer-template/",
      },
      {
        title: "Kasper Template",
        imgLink: "https://i.suar.me/7YvEm/l",
        description: "Convert a creative one page PSD template to HTML/CSS.",
        langs: "HTML, CSS",
        previewLink: "https://ymaamri.github.io/kasper-template/",
        codeLink: "https://github.com/ymaamri/kasper-template/",
      },
      {
        title: "Leon Template",
        imgLink: "https://i.suar.me/ovEye/l",
        description: "Convert a PSD agency template to HTML/CSS.",
        langs: "HTML, CSS, JavaScript",
        previewLink: "https://ymaamri.github.io/leon-template/",
        codeLink: "https://github.com/ymaamri/leon-template/",
      },
    ],
  },
});
let myprojects = document.getElementById("myprojects");
let [...saveProjects] = myprojects.children;
while (myprojects.children.length > 0) {
  myprojects.children[0].remove();
}
for (let i = 0; i < saveProjects.length; i++) {
  if ((i / 3) % 1 == 0) {
    var wrapper = document.createElement("div");
    wrapper.classList.add("card-group");
    myprojects.append(wrapper);
  }
  var wrappers = document.getElementsByClassName("card-group");
  var lastWrapper = document.getElementsByClassName("card-group").length - 1;
  wrappers[lastWrapper].append(saveProjects[i]);
}
