import React, {useState} from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'

const Submit = () => {
	const [task, setTask] = useState('Read a book')
	const [name, setName] = useState('')
	const [etc, setETC] = useState('')
  	const [url, setURL] = useState('')

	function resetForm() {
		setName('');
		setETC('');
		setURL('');
	}

	function submitAnswers(e) {
		e.preventDefault();
		if (name === '' || etc === ''|| url === '') {
			alert("Name, Estimated Time of Completion or URL can NOT be empty.")
			return
		}
		const postsRef = collection(db, "submits"); 
    	addDoc(postsRef, {task, name, etc, url})
      	.then(res => {
        console.log("res: ", res.id)
        resetForm()
      })
      .catch(error => {
          console.log(error.message)
      })
    alert('Thank you! Your answer has been recorded.')
	}

	return (
		<div className="flex flex-wrap justify-center items-center w-full h-screen">
			<div className='bg-white text-black rounded-md w-96 h-1/1.5 border border-custom-dark-brown flex justify-center drop-shadow-lg'>

				<form onSubmit={submitAnswers} className='flex flex-col justify-center items-center'>
					<h1 className="font-bold text-lg mt-2">Submit a task</h1>
					<label htmlFor="task" className="m-2 font-medium">Task</label>
					<text id="task"
						// value={task} type="text"
						// placeholder="Task"
						// onChange={e => setTask(e.target.value)}
						className='block p-1 border rounded-lg w-full border-custom-dark-brown focus:outline-none focus:ring-2'>
						{task}
					</text>
					<label htmlFor="name" className="m-2 font-medium">Name</label>
					<input id= "name"
					value={name} type="text"
					placeholder="Put name of student..."
					onChange={e => setName(e.target.value)}
					className='block p-1 border rounded-lg w-full border-custom-dark-brown focus:outline-none focus:ring-2'>
					</input>

					<label htmlFor="etc" className="m-2 font-medium"> Estimated Time of Completion </label>
					<input id= "etc"
					value={etc} type="text"
					placeholder="Put the estimated time of completion..."
					onChange={e => setETC(e.target.value)}
					className='block p-1 border rounded-lg w-full border-custom-dark-brown focus:outline-none focus:ring-2'>
					</input>

					<label htmlFor="url" className="m-2 font-medium"> URL </label>
					<input id= "url"
					value={url} type="text"
					placeholder="Put link to completed task..."
					onChange={e => setURL(e.target.value)}
					className='block p-1 border rounded-lg w-full border-custom-dark-brown focus:outline-none focus:ring-2'>
					</input>

					<button type="submit"
						className="transition-all text-off-white opacity-90 bg-custom-blue rounded-md m-3 w-2/3 cursor-pointer focus:outline-none focus:ring-2 hover:opacity-100 p-1">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default Submit