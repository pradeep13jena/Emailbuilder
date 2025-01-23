import { getTemplate, addITem, deleteItem, moveUp, moveDown, editTextStyle, changeText, addLink } from "../Controller/template.controller.js";

export const template = (app) => {
  app.get("/template", getTemplate),
  app.post("/template/add", addITem)
  app.delete("/template/delete", deleteItem)
  app.put("/template/moveup", moveUp)
  app.put("/template/movedown", moveDown)
  app.put("/template/updateStyle/:_id", editTextStyle)
  app.put("/template/edittext/:_id", changeText)
  app.put("/template/addlink/:_id", addLink)
}