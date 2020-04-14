(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{125:function(e,t,a){e.exports=a(393)},129:function(e,t,a){},130:function(e,t,a){},393:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(18),c=a.n(o),l=(a(129),a(32)),i=a(33),s=a(35),m=a(34),u=a(17),p=a(22);a(130);var h=function(e){return r.a.createElement("ul",{className:"navbar"},r.a.createElement("li",{onClick:function(t){return e.changePage("Home")}},r.a.createElement(u.b,{className:"active-page",id:"home-nav-link",to:"/"},"Home")),r.a.createElement("li",{onClick:function(t){return e.changePage("About")}},r.a.createElement(u.b,{id:"about-nav-link",to:"/aboutMe"},"About Me")),r.a.createElement("li",{onClick:function(t){return e.changePage("Projects")}},r.a.createElement(u.b,{id:"project-nav-link",to:"/projects"},"Projects")),r.a.createElement("li",{onClick:function(t){return e.changePage("Contact")}},r.a.createElement(u.b,{id:"contact-nav-link",to:"/contactMe"},"Contact Me")))};var d=function(e){return r.a.createElement("div",{className:"home-component"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:"/myportfolio/me.jpeg",alt:""})),r.a.createElement("h1",null,"Aboubakari Soumanou Petoni"))};var g=function(e){return r.a.createElement("div",{className:"about-container"},r.a.createElement("div",null,r.a.createElement("h1",null,"About Me"),r.a.createElement("a",{href:"Resume.pdf",target:"_blank",download:!0},"Download Resume")),r.a.createElement("div",{className:"about-paragraph"},r.a.createElement("p",null,"Hello there! My name is Aboubakari Soumanou Petoni. I am a senior student at Lehman College in my last semester. Prior to becoming a computer science student, I had my Bachelor in math. I love to solve problem. Whether it is finding the most elegant way to write a line of code or figuring out which chord fits best into a progression. I love the challenge of finding a way and discovering solutions. Wondering if I might be a good fit for your company? Check out my resume and my GitHub link!")))};var f=function(e){return r.a.createElement("div",{className:"project-card"},r.a.createElement("div",null,r.a.createElement("h3",null,e.name)),r.a.createElement("div",{className:"view-project-btn"},r.a.createElement(u.b,{to:{pathname:"/projectSubPage",state:{projectInfo:{name:e.name,projectLink:e.link,projectImg:e.img,projectDescription:e.description}}}},"View")))},b=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=" In this project, a GUI (Graphical user interface) based game of Connect 4 is created. The game will be played by two players who will take turns dropping their markers into columns. On each turn, the display should show who the current player is. The board should get filled from bottom to top just like in real life. After a player drops their marker into the column of their choice, the program should check if he/she is a winner.If the current player is a winner,  the display label is updated to reflect the status, and write the name of the winner on a new line in the output file named Connect4-Results.txt. If the board is full, check for a winner or a tie. If the game is a tie, indicate that in a seperate line in the output file named Connect4-Results.txt. The game will continue until someone wins or the board becomes full ",t=" In this project we have created a simple text-based adventure game. The game will create a player object using information from a file, build a dungeon of three rooms each containing a monster, and allow the player to challenge the monster one-by-one and explore for treasure. The game will display messages on the screen to tell user what happens. It also creates a log file that keeps a record of the game. ",a=" In this project, we have built a simple React app that is a design pad where users will be able to drag-and-drop inputs to change your design pads when it is in EDIT mode. Our application uses state to dynamically render the pads to show some change after any drag and drop is performed.";return r.a.createElement("div",{className:"project-container"},r.a.createElement("h1",{className:"header"},"Projects"),r.a.createElement("div",{className:"projects"},r.a.createElement(f,{name:"Connect 4",description:e,link:"https://github.com/AboubakariSoumanouP/connect4"}),r.a.createElement(f,{name:"Monster",description:t,link:"https://github.com/AboubakariSoumanouP/Monster-Project"}),r.a.createElement(f,{name:"Design Pad",description:a,link:"https://github.com/AboubakariSoumanouP/design-pad"})))}}]),a}(r.a.Component);var E=function(e){return r.a.createElement("div",{className:"contact-container-wrapper"},r.a.createElement("div",{className:"contact-container"},r.a.createElement("h1",{className:"header"},"Get In Touch"),r.a.createElement("div",{className:"info-container"},r.a.createElement("p",null,r.a.createElement("span",null,"Email:"),r.a.createElement("span",null,"soumabakari@gmail.com")),r.a.createElement("p",null,r.a.createElement("span",null,"Phone:"),r.a.createElement("span",null,"347-406-3662"))),r.a.createElement("form",{className:"form"},r.a.createElement("h3",{className:"header"}," Send Me a Message"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name"}),r.a.createElement("br",null),r.a.createElement("input",{placeholder:"Email"}),r.a.createElement("br",null),r.a.createElement("textarea",{rows:"10",cols:"50",placeholder:"Send me a kind message"})),r.a.createElement("button",null,"Send Message"))))},v=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"project-sub-page-container"},r.a.createElement("h1",{className:"header"},this.props.projectInfo.location.state.projectInfo.name),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,this.props.projectInfo.location.state.projectInfo.projectDescription)),r.a.createElement("div",null,r.a.createElement("a",{href:this.props.projectInfo.location.state.projectInfo.projectLink,target:"_blank"},"GitHub"))))}}]),a}(r.a.Component),j=(a(135),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changePage=function(e){n.setState({activePage:e})},n.state={activePage:"Home"},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.addPageActiveClass()}},{key:"componentDidUpdate",value:function(){this.addPageActiveClass()}},{key:"addPageActiveClass",value:function(){var e=document.querySelector(".active-page");e&&e.classList.remove("active-page");for(var t=document.querySelectorAll(".navbar a"),a=this.state.activePage,n=0;n<t.length;n++)if(t[n].innerText.includes(a)){t[n].classList.add("active-page");break}}},{key:"render",value:function(){return r.a.createElement(u.a,{basename:"/"},r.a.createElement(h,{activePage:this.state.activePage,changePage:this.changePage}),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:d}),r.a.createElement(p.a,{exact:!0,path:"/aboutMe",component:g}),r.a.createElement(p.a,{exact:!0,path:"/projects",component:b}),r.a.createElement(p.a,{exact:!0,path:"/contactMe",component:E}),r.a.createElement(p.a,{exact:!0,path:"/projectSubPage",component:function(e){return r.a.createElement(v,{projectInfo:e})}})))}}]),a}(r.a.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.da4ba004.chunk.js.map