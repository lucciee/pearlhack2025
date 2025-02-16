var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  if (tabName === 'Classes') {
    displayCourses();
  }
  if (tabName == 'Compxxx') {
    displayCompxxx();
  }
  if (tabName === 'Events') {
    displayEvents();
  }
}


function openBar(evt, tabName) {
  // Declare all variables
  var i, tabcontent, subnavs;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("navbarcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  subnavs = document.getElementsByClassName("navbar");
  for (i = 0; i < subnavs.length; i++) {
    subnavs[i].className = subnavs[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

}

function displayCourses() {
  fetch('/classes')
    .then(response => response.json())
    .then(data => {
      // console.log("Fetched data:", data);
      const container = document.getElementById("courses-container");
      container.innerHTML = '';

      row = ''
      for (let i = 0; i < data.courseNum.length; i++) {
        if (i % 3 == 0) {
          row = document.createElement('tr')
        }
        const button = document.createElement('button');
        button.classList.add('tablinks');
        button.onclick = function (event) {
          openTab(event, 'Compxxx');
        };

        const cell = document.createElement('td')

        const card = document.createElement('div');
        card.classList.add('flip-card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('flip-card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('flip-card-front');
        cardFront.innerHTML = `<h1>${data.courseNum[i]}</h1>`;

        const cardBack = document.createElement('div');
        cardBack.classList.add('flip-card-back');
        cardBack.innerHTML = `<h1>${data.courseName[i]}</h1>`;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        cell.appendChild(card)
        button.appendChild(cell)
        row.appendChild(button);

        if (i % 3 == 2 || i == data.courseNum.length - 1) {
          container.appendChild(row);
        }

      };


    });
}


function displayEvents() {
  fetch('/events')
    .then(response => response.json())
    .then(data => {
      // console.log("Fetched data:", data);
      const container = document.getElementById("events-container");
      container.innerHTML = '';

      row = ''
      for (let i = -1; i < data.names.length; i++) {
        if (i % 4 == 3) {
          row = document.createElement('tr')
        }
        if (i == -1){
          row = document.createElement('tr')
          const cell = document.createElement('td')

          const card = document.createElement('div');
          card.classList.add('still-card');
          card.classList.add('event-card');

          const cardInner = document.createElement('div');
          cardInner.classList.add('flip-card-inner');

          const cardFront = document.createElement('div');
          cardFront.classList.add('flip-card-front');
          cardFront.innerHTML = '<h1>+</h1>'

          cardInner.appendChild(cardFront);
        card.appendChild(cardInner);
        cell.appendChild(card)
        row.appendChild(cell);
        } else {
        // const button = document.createElement('button');
        // button.classList.add('tablinks');
        // button.onclick = function (event) {
        //   openTab(event, 'Compxxx');
        // };

        const cell = document.createElement('td')

        const card = document.createElement('div');
        card.classList.add('flip-card');
        card.classList.add('event-card');

        const cardInner = document.createElement('div');
        cardInner.classList.add('flip-card-inner');

        const cardFront = document.createElement('div');
        cardFront.classList.add('flip-card-front');
        cardFront.innerHTML = `<h2>${data.names[i]}</h2><p>${data.times[i]}</p><p>${data.dates[i]}</p><p>${data.locations[i]}</p>`;

        const cardBack = document.createElement('div');
        cardBack.classList.add('flip-card-back');
        cardBack.innerHTML = `<h2>${data.descriptions[i]}</h2><button>join</button>`;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        cell.appendChild(card)
        // button.appendChild(cell)
        row.appendChild(cell);
        }
        if (i % 4 == 2 || i == data.names.length - 1) {
          container.appendChild(row);
        }

      };


    });
}

function displayCompxxx() {

}

function uploadFile() {
  file = document.getElementById('fileInput');
  var formData = new FormData();
    formData.append('fileInput', file); 
    fetch('/upload', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
}

window.onload = function () {
  displayCourses();
};


