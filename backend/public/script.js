const addText = document.getElementById("addText")
const addImage = document.getElementById("addImage")
const addButtons = document.getElementById("addButtons")

const createItem = (body) => {
  axios.post('http://localhost:5000/template/add', body)
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
}

addText.addEventListener("click", () => {
  console.log("Add Text button clicked");
  createItem(
    {
      'type': 'text',
      'content': 'Click to edit the text',
      'style': {
        fontSize : "16px",
        color :"#333"
      },
    }
  );
});

addImage.addEventListener("click", () => {
  console.log("Add Text Image clicked");
  createItem(
    {
      'type': 'image',
      'content': 'Click to edit the text',
      'style': {
        fontSize : "16px",
        color :"#333"
      },
    }
  );
});