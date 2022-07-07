import React from 'react'


export default function Data({obj, inputID}){

    let filteredObj = obj?.filter((el) => {
       
        
        while(inputID === '' || inputID == el.id) {
            return el;
        }
       
       
    })


    return (
        <div>
            <table className="table">
     <thead>
            <tr >
                <th>ID</th>
                <th>Name</th>
                <th>Year</th>
            
            </tr>
        </thead>
       <tbody>
       {filteredObj?.map((item) => {
            
            return(
               
                <tr key={item.id}>
                    {Object.keys(item).map(prop=>{
                      
                        if(prop === "id" || prop === "name" || prop === "year")
                            return <td key={prop} style={{backgroundColor: item["color"]}}>{item[prop]}</td>
                            
                        
                    })}
                </tr>
                );
                  })}
       </tbody>
     </table>
        </div>
    )
}
