import React, { useState } from 'react'
import axios from 'axios';

// Importing redux
import { useSelector, useDispatch } from 'react-redux';
import { setTemplate } from '../features/templateSlice';

// Importing icons
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatAlignCenterOutlinedIcon from '@mui/icons-material/FormatAlignCenterOutlined';
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';

export default function Drawer() {

  const [text, setText] = useState({textContent : "", linkContent : ""})
  const [error, setError] = useState({})

  function handleChange(e){
    const {name, value} = e.target;
    setText({...text, [name]: value})
  }

  function handleValidation(e){
    const error = {}
    const linkRegEx = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:[0-9]{1,5})?(\/[^\s]*)?$/

    if(!text.linkContent){
      error.linkContent = "Link is requires"
    } else if (!linkRegEx.test(text.linkContent)){
      error.linkContent = "Must be valid URL"
    }

    setError(error)
    return Object.keys(error).length === 0;
  }

  function handleSubmit(e){
    e.preventDefault();
    const isValid = handleValidation(text);

    if(isValid){
      axios.put(`http://localhost:5000/template/addLink/${_id}`, )
    }
  }

  const dispatch = useDispatch()

  const selectedItem  = useSelector((state) => state.SelectedItem.selectedItem)

  const textBody = {
    'type': 'text',
    'content': 'Click to edit the text',
    'style': {    
      "fontSize" : "32px",
      "color" : "black",
      "textAlign" :"center"
    },
  }

  const imageBody = {
    'type': 'image',
    'content': 'Click to edit the text',
    'style': {
      "width" : "300px",
      "height" : "300px",
      "margin" : "0 auto"
    },
  }

  const buttonBody = {
    "type" : "button",
    "content" : "Click Here",
    "style" : {
      "fontSize" : "16px",
      "backgroundColor" : "#007BFF",
      "color" : "#fff",
      "padding" : ".6em 1.5em",
      "borderRadius" : "5px",
      "textAlign" : "center"
    }
  }

  const createItem = async (body) => {
    try {
      const response = await axios.post("http://localhost:5000/template/add", body);
      dispatch(setTemplate(response.data))
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const moveUp = async (_id) => {
    try {
      const response = await axios.put("http://localhost:5000/template/moveup", {_id})
      dispatch(setTemplate(response.data))
    } catch (error) {
      console.error("Error moving item:", error);
    }
  }

  const moveDown = async (_id) => {
    try {
      const response = await axios.put("http://localhost:5000/template/movedown", {_id})
      dispatch(setTemplate(response.data))
    } catch (error) {
      console.error("Error moving item:", error);
    }
  }

  const editStyle = async (_id, body) => {
    try {
      const response = await axios.put(`http://localhost:5000/template/updateStyle/${_id}`, body)
      dispatch(setTemplate(response.data))
    } catch (error) {
      console.error("Error moving item:", error);
    }
  }

  const editText = async (_id, text) => {
    try {
      const response = await axios.put(`http://localhost:5000/template/edittext/${_id}`, {text: text.textContent})
      dispatch(setTemplate(response.data))
    } catch (error) {
      console.error("Error moving item:", error);
    }
  }

  const addLink = async (_id, text) => {
    try {
      const response = await axios.put(`http://localhost:5000/template/addlink/${_id}`, {link: text.linkContent})
      dispatch(setTemplate(response.data))
    } catch (error) {
      console.error("Error moving item:", error);
    }
  }

  return (
    <div className='w-1/4 h-[calc(100vh-55px)]'>
      <div id='drawer' className='h-full border-[1px] overflow-y-auto border-black bg-[#EEECE8] mx-1 rounded-md'>
        <div className='flex flex-col'>
          <div className='flex flex-col px-4 pt-5 gap-3'>
            <p className='font-roboto font-semibold px-1'>Insert</p>
            <div className='flex justify-evenly border-[1px] rounded-md border-black'>
              <div onClick={() => createItem(textBody)} className='font-lato font-medium py-1 cursor-pointer hover:font-semibold'>Text</div>
              <div onClick={() => createItem(imageBody)} className='font-lato font-medium py-1 cursor-pointer hover:font-semibold'>Image</div>
              <div onClick={() => createItem(buttonBody)} className='font-lato font-medium py-1 cursor-pointer hover:font-semibold'>Buttons</div>
            </div>
          </div>
          <div className='flex flex-col px-4 pt-5 gap-3'>
            <p className='font-roboto font-semibold px-1'>Movement</p>
            <div className='flex justify-evenly border-[1px] rounded-md border-black'>
              <div onClick={() => moveUp(selectedItem)} className='font-lato font-medium py-1 cursor-pointer hover:font-semibold flex items-center gap-2'> <ArrowUpwardIcon/><p>Move up</p></div>
              <div onClick={() => moveDown(selectedItem)} className='font-lato font-medium py-1 cursor-pointer hover:font-semibold flex items-center gap-2'><ArrowDownwardIcon/><p>Move down</p></div>
            </div>
          </div>
          <div className='flex flex-col px-4 pt-5 gap-3'>
            <p className='font-roboto font-semibold px-1'>Text</p>
            <div className='flex flex-col border-[1px] rounded-md border-black gap-2'>
              <div className='flex gap-2'>
                <div className='flex gap-2 ml-3 my-2 p-1 border-[1px] rounded-sm border-black'>
                  <div className='cursor-pointer flex justify-center items-center'><FormatBoldIcon></FormatBoldIcon></div>
                  <div className='cursor-pointer flex justify-center items-center'><FormatItalicIcon></FormatItalicIcon></div>
                  <div className='cursor-pointer flex justify-center items-center'><FormatUnderlinedIcon></FormatUnderlinedIcon></div>
                </div>
                <div className='flex gap-2 my-2 p-1 border-[1px] rounded-sm border-black'>
                  <div className='cursor-pointer flex justify-center items-center'><FormatAlignLeftOutlinedIcon></FormatAlignLeftOutlinedIcon></div>
                  <div className='cursor-pointer flex justify-center items-center'><FormatAlignCenterOutlinedIcon></FormatAlignCenterOutlinedIcon></div>
                  <div className='cursor-pointer flex justify-center items-center'><FormatAlignRightOutlinedIcon></FormatAlignRightOutlinedIcon></div>
                </div>
                <div className='flex justify-center items-center border-[1px] my-2 p-1 border-black'>
                  <input type="color" name="" id="" className='w-20 h-8'/>
                </div>
              </div>
              <textarea className='bg-[#EEECE8] resize-none rounded-md focus:outline-none px-3 font-lato text-lg' placeholder='Write text' name='textContent' value={text.textContent} onChange={handleChange} rows={4}></textarea>
              <button onClick={() => editText(selectedItem, text)} className='font-lato font-medium py-1 cursor-pointer hover:font-semibold'>Submit</button>
            </div>
          </div>
          <div className='flex flex-col px-4 pt-5 gap-3'>
            <p className='font-roboto font-semibold px-1'>Fontsize</p>
            <div className='flex justify-evenly border-[1px] rounded-md border-black'>
              <div className='font-lato font-medium py-1 cursor-pointer hover:font-semibold transition-all duration-300'>xs</div>
              <div className='font-lato font-medium py-1 cursor-pointer hover:font-semibold transition-all duration-300'>sm</div>
              <div className='font-lato font-medium py-1 cursor-pointer hover:font-semibold transition-all duration-300'>md</div>
              <div className='font-lato font-medium py-1 cursor-pointer hover:font-semibold transition-all duration-300'>lg</div>
              <div className='font-lato font-medium py-1 cursor-pointer hover:font-semibold transition-all duration-300'>xl</div>
              <div className='font-lato font-medium py-1 cursor-pointer hover:font-semibold transition-all duration-300'>xxl</div>
            </div>
          </div>
          <div className='flex flex-col px-4 pt-5 gap-3'>
            <p className='font-roboto font-semibold px-1'>Link</p>
            <div className='flex border-[1px] rounded-md border-black items-center'>
              <input name='linkContent' value={text.linkContent} onChange={handleChange} type="text" className='bg-transparent pl-2 focus:outline-none py-1 w-3/4' placeholder='link' />
              <button onClick={() => addLink(selectedItem, text)} className='w-1/4 hover:font-semibold transition-all duration-300' type="submit">Submit</button>
            </div>
          </div>
          <div className='flex flex-col px-4 pt-5 gap-3 mb-5 w-full'>
            <p className='font-roboto font-semibold px-1'>Image sizing</p>
            <div className='flex border-[1px] rounded-md border-black items-center w-full'>
              <div className='w-3/4 flex items-center justify-start gap-5'>
                <input type="text" className='bg-transparent pl-2 focus:outline-none py-1 w-24' placeholder='200px' />
                <p>X</p>
                <input type="text" className='bg-transparent pl-2 focus:outline-none py-1 w-24' placeholder='200px' />
              </div>
              <button className='w-1/4 hover:font-semibold transition-all duration-300' type="submit">Resize</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
