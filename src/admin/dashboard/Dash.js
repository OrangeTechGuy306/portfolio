import React, { useState } from 'react'
import "./Dash.css"
import { BsTrashFill } from 'react-icons/bs';
import { RxUpdate } from 'react-icons/rx';
import { FaRegImages, FaUserTie, FaFolderOpen } from 'react-icons/fa';
import { AiOutlineVideoCameraAdd, AiOutlineCloudUpload } from 'react-icons/ai';

const Dash = () => {
    const [open, setOpen] = useState(false)
    const handleChange=()=>{}

  return (
        <section>

            <div className='dashCardContainer'>
           
                <div className='dashCard'>
                    <h1 className='headerOne'>TOTAL PROJECTS</h1>
                    <h1 className='headerTwo'>20</h1>
                </div>

                <div className='logoutBtnContainer'>
                    <button className='logoutBtn'>
                        <FaUserTie color='yellow' size={20}/>
                        <p>Logout</p>
                    </button>
                    <button className='logoutBtn btnAdd' onClick={()=>setOpen(true)}>
                        <FaFolderOpen color='yellow' size={20}/>
                        <p>Add Project</p>
                    </button>
                </div>

                <div className='dashSearchContainer'>
                   <form>
                        <input type='text' className='searchInput' 
                        placeholder='LIVE SEARCH PROJECT HERE...'/>
                       
                   </form>
                </div>

            </div>

            <div className='tableFormContainer'>
                <div className='tableContainer'>
                
                    <table className="tableItems">
                        <thead>
                            <tr>
                                <th>S/NO</th>
                                <th>PROJECT NAME</th>
                                <th>PROJECT DESCRIPTION</th>
                                <th>PROJECT IMAGE</th>
                                <th>PROJECT DEMO</th>
                                <th colSpan={2}>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ecommerce</td>
                                    <td>Lorem Ipsum</td>
                                    <td>image</td>
                                    <td>ldadsk</td>
                                    <td>
                                        <button className='tableBtnDel'>
                                            <BsTrashFill color='white'/>
                                        </button>
                                    </td>
                                    <td>
                                        <button className='tableBtnUpd'>
                                            <RxUpdate color='white'/>
                                        </button>
                                    </td>
                                </tr>
                            
                        </tbody>

                    </table>

                </div> 
            </div>
        
            {open ?  <div className='uploaderContainer'>
                <div className='overlayForm'>
                    <form className='formUploader'>

                        <div className="closeBtn" onClick={()=>setOpen(false)}>
                            <h1>X</h1>
                        </div>

                        <div>
                            <input type='text' className='uploaderInput' onChange={handleChange} placeholder='ENTER YOUR PROJECT NAME'/>
                        </div>

                        <div className='fileUploaderContainer'>
                        
                            <div  className='camera'>
                                <label htmlFor='file'>
                                    <AiOutlineVideoCameraAdd size={40} color='red'/>
                                </label>
                                <input type='file' className='uploaderInputFile' id='file'/>
                            </div>

                            <div className='image'>
                                <label htmlFor='file' >
                                    <FaRegImages size={40} color='rgb(1, 118, 67)'/>
                                </label>
                                <input type='file' className='uploaderInputFile' id='file'/>
                            </div>

                        </div>

                        <textarea  className='uploaderDesc' placeholder='BRIEF DESCRIPTION OF THE PROJECT' />

                        <div>
                            <button type='submit' className='uploaderBtn' >
                                <AiOutlineCloudUpload size={30} color='white'/>
                            </button>
                        </div>

                    </form>
                </div>
            </div> : null }

        </section>
  )
}

export default Dash