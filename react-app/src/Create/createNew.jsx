import React, { useState } from "react";
import "./createnewstyle.css"

const CreateNew = () =>{

    const [bookName,changeBookName] = useState("")
    const [summary,changeSummary] = useState("")
    const [genre,setGenre] = useState("")
    const [language,changeLanguage] = useState("")
    const [tags,changeTags] = useState("")
    const [warnings,changeWarnings] = useState("")

    const handleInputChangeBookName = (e) => {
        changeBookName(e.target.value)
    }
    
    const handleSummaryChange = (e) =>{
        changeSummary(e.target.value)
    }

    const handleLanguage = (e) =>{
        changeLanguage(e.target.value)
    }

    const handleGenreChange = (e) =>{
        setGenre(e.target.value)
    }

    const handleWarnings = (e) =>{
        changeWarnings(e.target.value)
    }

    const handleCustomTags = (e) =>{
        changeTags(e.target.value)
    }

    const checkBookInfo = () =>{

        const bookInfo = {
            Title: bookName,
            Synopsis:summary,
            Genre:genre,
            Language:language,
            Tags:tags,
            Warnings:warnings,
        }

        var allInfoFilled = true

        for (let i = 0;i < Object.keys(bookInfo).length;i++){
            if (Object.values(bookInfo)[i] === ""){
                document.getElementById(Object.keys(bookInfo)[i]).style.border = "2px solid red"
                allInfoFilled = false
            }
            else{
                document.getElementById(Object.keys(bookInfo)[i]).style.border = "1.5px solid black"
            }
        }

        if (allInfoFilled === true){
            console.log("ok")
        }
        else{
            console.log("not ok")
        }

    }

    return(
    <>
        <div className="CreateNovelsContainer"> 
            <div className="bookContent" >

                <label htmlFor="Title" className="Label">Book Name {bookName.length}/20</label>
                <input type="text" className="bookNameInput" maxLength="20"placeholder="20 letters max" id="Title" onChange={handleInputChangeBookName}/>
                <label htmlFor="Synopsis" className="Label">Synopsis {summary.length}/750</label>
                <textarea type="text" id="Synopsis" placeholder="Make a awesome synopsis to attract viewers!" maxLength="750" className="summaryInput" onChange={handleSummaryChange}/>
                <label htmlFor="Genre" className="Label">Genre</label>

                <select 
                    name="Genre" 
                    className="Selector" 
                    id="Genre" 
                    value={genre} 
                    onChange={handleGenreChange}
                >
                    <option value="Select">Select</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Historical Fiction">Historical Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Biography">Biography</option>
                    <option value="Self-Help">Self-Help</option>
                    <option value="Horror">Horror</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Dystopian">Dystopian</option>
                    <option value="Young Adult">Young Adult</option>
                    <option value="Memoir">Memoir</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Sport">Sport</option>
                    <option value="Games">Games</option>
                </select>

                <label htmlFor="Language" className="Label">Language</label>
                <input type="text" id="Language" className="bookNameInput" placeholder="Language" maxLength="25" onChange={handleLanguage}/>

                <label htmlFor="Tags" className="Label">Custom Tags 0/10</label>
                <input type="text" id="Tags" onChange={handleCustomTags} className="bookNameInput" placeholder="Tags are seperated by spaces. ex 'tag1 tag2 tag3-tag3'" />

                <label htmlFor="Warnings" className="Label">Warnings</label>
                <select 
                    name="Warnings" 
                    className="Selector" 
                    value={warnings} 
                    id="Warnings"
                    onChange={handleWarnings}
                    >
                    <option value="">Select</option>
                    <option value="For everyone">For everyone</option>
                    <option value="PG-13">PG-13</option>
                    <option value="Guardian guidance recommended">Guardian guidance recommended</option>
                    <option value="18+">18+</option>
                </select>
                <button className="publishButton" onClick={checkBookInfo}>Publish now</button>
            </div>
        </div>
    </>
    )
}

export default CreateNew