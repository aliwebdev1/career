const getDataFromLocalStorage=()=>{
    const storeData = localStorage.getItem('appliedJobs')
    if(storeData){
        return JSON.parse(storeData)
    }
    return []
}

const setDataIntoLocalStorage=(id)=>{
    const data = getDataFromLocalStorage()
    const exists = data.find(da=>da === id)
    if(!exists){
        data.push(id)
        localStorage.setItem('appliedJobs',JSON.stringify(data))
    }
    
}


const deleteDataFromLocalStorage=(id)=>{
    const data = getDataFromLocalStorage()
    const exists  = data.filter(da=>da !== id)
    console.log(exists)
    if(exists){
        
        localStorage.setItem('appliedJobs',JSON.stringify(exists))
    }


}

export {
    getDataFromLocalStorage,
    setDataIntoLocalStorage,
    deleteDataFromLocalStorage  
}