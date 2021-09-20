import Layout from "../../components/Layout";
import React from 'react'

function Map() {
    return (

           <Layout> 
               <h1 className="m-10 mr-6 text-4xl flex justify-center">MAP</h1>
               
               <br/>
               <div>
               <div className="flex justify-center">
               <br/>
    
                               <iframe
                               className="m-auto flex justify-center"
                        src="https://www.google.com/maps/d/u/0/embed?mid=1amfEpucobtYa5iZSjsOXoCcu7w3ZOB2w"
                        width="640"
                        height="480"
                    />
        </div>
        </div>
         </Layout>    
    )
}

export default Map
