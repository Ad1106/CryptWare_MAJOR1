import React from "react";
import "./App.css"
import Data from "./sample.json"

function App() {
	return (
		<div className="App">
			<div className="posts">
				{
					Data.map(post => {
						return(
							<>
								<table>
									<tr>
										<th>Process Name</th>
										<th>Process ID</th>
										<th>CPU Utilization</th>
										<th>File Location</th>
									</tr>
									<tr>
										<td>{post.Process_Name}</td>
										<td>{post.Process_ID}</td>
										<td>{post.CPU_Utilization}</td>
										<td>{post.File_Location}</td>
									</tr>
								</table>
								<form action="/simple_function">
									<button onClick={() => window.location.reload(false)}>Click to reload!</button>
								</form>
							</>
						)
					})
				}
			</div>
		</div>
	)
}

export default App;
