import * as React from 'react'
import { IMasterPageRow3Props } from '../IMasterPageRow3Props';
import "@pnp/sp/fields";
import "@pnp/sp/lists"
import { sp } from 'sp-pnp-js';
import {
  DetailsList, DetailsListLayoutMode,
 
} from "office-ui-fabric-react/lib/DetailsList";
const Trainings = (props: IMasterPageRow3Props) => {
  const [rowData, setRowData] = React.useState([])
  const [final,setFinal]=React.useState([])
  let columnArr = new Array();
  let filteredarr = new Array();
  let filteredobj: any
  const getdata = async () => {
    try {

      await sp.web.lists.getByTitle(props.ListName).items.get().then((view) => {
       

        view.map((y: any) => { Object.keys(y).filter(x => x !== "odata.type" && x !== "odata.id" && x !== "odata.etag" && x !== "odata.editLink" && x !== "FileSystemObjectType" && x !== "ServerRedirectedEmbedUri" && x !== "ServerRedirectedEmbedUrl" && x !== "ContentTypeId" && x !== "ComplianceAssetId" && x !== "OData__ColorTag" && x !== "Modified" && x !== "Created" && x !== "AuthorId" && x !== "EditorId" && x !== "OData__UIVersionString" && x !== "Attachments" && x !== "GUID" && x !== "Id" && x !=="Title").map((x: any) => { console.log(x); columnArr.push(x) }) })

        view.map((x: any,i:number) => {
         
          filteredobj = Object.assign({}, ...columnArr.map(key => ({ [key]: x[key] })))
          
          filteredarr.push(filteredobj)
          
        })
        
        setRowData(filteredarr)
        
      
        let _columns=new Array();
        try{
        
          Object.keys(filteredobj).map((x,i)=>{
            _columns.push({key:"_column"+i,name:x,fieldName:x,minWidth:100,
          maxWidth: 100,
          isResizable: true})


        })}
       
        catch(error){

        }
        setFinal(_columns)

})

}
    catch (error) {
    }

}
  
  React.useEffect(() => {
    getdata()
  }, [])


  return (<>
  {console.log(final)}
   <div className="rowMain3">
           <div className="row31">
             <h2>My Tainings</h2>
         </div>
     
   <div className="row32">
    { <DetailsList 
    columns={final}
    items={rowData}
    setKey="set"
          layoutMode={DetailsListLayoutMode.justified}
          //selection={selection}
          selectionPreservedOnEmptyClick={true}
   
    /> }
    </div>
    </div>
  </>)
}

export default Trainings

