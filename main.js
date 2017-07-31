// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// create a helper function to help
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function () {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------

let fieldsContent = document.getElementById("fields");
for (let i = 0; i < formData.length; i++) {
  let input = document.createElement("input");
  let select = document.createElement("select");
  let textArea = document.createElement("textarea");

  for (let property in formData[i]) {
    if (formData[i].type === "text" || formData[i].type === "tel" || formData[i].type === "email") {
      let value = formData[i][property];

      input.placeholder = formData[i].label;
      input.setAttribute(property, value);
      fieldsContent.appendChild(input);
    }
    else if (formData[i].type === "textarea") {
      let value = formData[i][property];

      textArea.placeholder = formData[i].label;
      textArea.setAttribute(property, value);
      fieldsContent.appendChild(textArea);
    }
  }
  if (formData[i].type === "select") {

    let defaultOption = document.createElement("option");
    defaultOption.textContent = "Select a Language...";

    select.appendChild(defaultOption);

    for (let j = 0; j < formData[i].options.length; j++) {
      let options = document.createElement("option");
      options.setAttribute('label', formData[i].options[j].label);
      options.setAttribute('value', formData[i].options[j].value);

      select.appendChild(options);
    }
    fieldsContent.appendChild(select);
  }
}