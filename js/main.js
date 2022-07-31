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
        title: "Text Repeater",
        imgLink:
          "https://www.resizepixel.com/Image/6twx3zmbki/Preview/test-repeater-netlify-app-1024x7.jpg?v=1ce94f0d-f2b7-4a87-afbc-9d0366b1f579",
        description: "Add text, repeat how may times you want and copy.",
        langs: "Vue.js, JavaScript, HTML, CSS,",
        previewLink: "https://test-repeater.netlify.app/",
        codeLink: "https://github.com/ymaamri/text-repeater",
      },
      {
        title: "To do app",
        imgLink:
          "https://www.resizepixel.com/Image/b7k9mgmw3v/Preview/ymaamri-github-io-1024x768deskto.jpg?v=bcd75737-3785-41ba-8574-10f19c28e04f",
        description:
          "A simple to do app with local storage and JavaScript html DOM.",
        langs: "HTML, CSS, Bootstrap, JavaScript",
        previewLink: "https://ymaamri.github.io/to-do/",
        codeLink: "https://github.com/ymaamri/to-do/",
      },
      {
        title: "Leon Template",
        imgLink:
          "https://www.resizepixel.com/Image/x6suwelc0v/Preview/ymaamri-github-io-1024x768deskto.jpg?v=0e48ddb6-1858-49ba-9114-aa5a0bf82867",
        description: "Convert a PSD agency template to HTML/CSS.",
        langs: "HTML, CSS, JavaScript",
        previewLink: "https://ymaamri.github.io/leon-template/",
        codeLink: "https://github.com/ymaamri/leon-template/",
      },
      {
        title: "Kasper Template",
        imgLink:
          "https://www.resizepixel.com/Image/6sku70o0mr/Preview/ymaamri-github-io-1024x768deskto.jpg?v=7a70c6a6-156a-4922-b66f-c0ab73d31fb0",
        description: "Convert a creative one page PSD template to HTML/CSS.",
        langs: "HTML, CSS",
        previewLink: "https://ymaamri.github.io/kasper-template/",
        codeLink: "https://github.com/ymaamri/kasper-template/",
      },
      {
        title: "Deer Template",
        imgLink:
          "https://www.resizepixel.com/Image/hyovhy7jhg/Preview/ymaamri-github-io-1024x768deskto.jpg?v=2c843179-887c-4df9-b1a2-b06cb06bf4d1",
        description: "Convert a PSD template to HTML/CSS.",
        langs: "HTML, CSS",
        previewLink: "https://ymaamri.github.io/deer-template/",
        codeLink: "https://github.com/ymaamri/deer-template/",
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
